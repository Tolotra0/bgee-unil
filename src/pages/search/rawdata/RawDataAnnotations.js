/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-use-before-define */
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import Select, { components } from 'react-select';
import api from '../../../api';
import Button from '../../../components/Bulma/Button/Button';
import HelpIcon from '../../../components/HelpIcon';
import AutoCompleteSearch from '../../../components/AutoCompleteSearch/AutoCompleteSearch';
import './rawDataAnnotations.scss';
import TagInput from '../../../components/TagInput/TagInput';
import obolibraryLinkFromID from '../../../helpers/obolibraryLinkFromID';
import RawDataAnnotationResults from './RawDataAnnotationResults';
import SelectMultipleWithAutoComplete from '../../../components/SelectMultipleWithAtuComplete/SelectMultipleWithAutoComplete';

const EMPTY_SPECIES_VALUE = { label: 'Any species', value: '' };

const AFFYMETRIX = 'AFFYMETRIX';
const EST = 'EST';
const IN_SITU = 'IN_SITU';
const RNA_SEQ = 'RNA_SEQ';
const FULL_LENGTH = 'FULL_LENGTH';
const DATA_TYPES = [
  { id: FULL_LENGTH, label: 'scRNA-Seq full-length' },
  { id: RNA_SEQ, label: 'bulk RNA-Seq' },
  { id: AFFYMETRIX, label: 'Affymetrix data' },
  { id: IN_SITU, label: 'In situ hybridization' },
  { id: EST, label: 'EST' },
];

const RawDataAnnotations = ({ children, searchTerm = '' }) => {
  const [speciesList, setSpeciesList] = useState([]);
  const [selectedTissue, setSelectedTissue] = useState([]);
  const [selectedStrain, setSelectedStrain] = useState([]);
  const [selectedCellTypes, setSelectedCellTypes] = useState([]);
  const [selectExp, setSelectExp] = useState([]);
  const [selectedGene, setSelectedGene] = useState([]);
  const [show, setShow] = useState(true);
  const [speciesValue, setSpeciesValue] = useState(EMPTY_SPECIES_VALUE);
  const [speciesSexe, setSpeciesSexe] = useState([]);
  const [dataType, setDataType] = useState(AFFYMETRIX);
  const [searchResult, setSearchResult] = useState(null);

  const renderOption = useCallback((option, search) => (
    <div>
      {option.gene.name}{' '}
      <a
        href={`http://localhost:3000/gene/${option.gene.geneId}`}
        target="_blank"
        rel="noreferrer"
      >
        <ion-icon name="open-outline" />
      </a>
    </div>
  ));

  useEffect(() => {
    if (speciesValue.value !== '') {
      api.search.species
        .speciesDevelopmentSexe(speciesValue.value)
        .then((resp) => {
          console.log('coucou', resp.data.requestDetails.requestedSpeciesSexes);
          if (resp.code === 200) {
            setSpeciesSexe(resp.data.requestDetails.requestedSpeciesSexes);
          } else {
            setSpeciesSexe([]);
          }
        });
    }
  }, [speciesValue]);

  useEffect(() => {
    setSelectedCellTypes([]);
    setSelectedGene([]);
    setSelectedStrain([]);
    setSelectedTissue([]);
  }, [speciesValue]);

  useEffect(() => {
    triggerSearch();
  }, [dataType]);

  const renderOptionCellType = useCallback((option, search) => (
    <div>
      {option.object.name}{' '}
      <a
        href={obolibraryLinkFromID(option.object.id)}
        target="_blank"
        rel="noreferrer"
      >
        <ion-icon name="open-outline" />
      </a>
    </div>
  ));

  const renderOptionStrain = useCallback((option, search) => (
    <div>{option.match}</div>
  ));

  const renderOptionTissue = useCallback((option, search) => (
    <div>
      {option.object.name}{' '}
      <a
        href={obolibraryLinkFromID(option.object.id)}
        target="_blank"
        rel="noreferrer"
      >
        <ion-icon name="open-outline" />
      </a>
    </div>
  ));

  const getOptionsFunctionGenes = useCallback(async (search) => {
    if (search) {
      return api.search.genes.autoCompleteGene(search).then((resp) => {
        if (resp.code === 200 && resp.data.matchCount !== 0) {
          return resp.data.result.geneMatches;
        }
        return [];
      });
    }
    return [];
  }, []);

  const triggerSearch = useCallback(
    async () =>
      api.search.rawData(selectedGene).then((resp) => {
        if (resp.code === 200) {
          setSearchResult(resp?.data);
        }
        return [];
      }),
    []
  );

  const getOptionsFunctionCellTypes = useCallback(async (search) => {
    if (search) {
      return api.search.genes.autoCompleteCellTypes(search).then((resp) => {
        if (resp.code === 200) {
          return resp.data.result.searchMatches;
        }
        return [];
      });
    }
    return [];
  }, []);

  const getOptionsFunctionStrain = useCallback(async (search) => {
    if (search) {
      return api.search.genes.autoCompleteStrain(search).then((resp) => {
        if (resp.code === 200) {
          return resp.data.result.searchMatches;
        }
        return [];
      });
    }
    return [];
  }, []);

  const getOptionsFunctionTissue = useCallback(async (search) => {
    if (search) {
      return api.search.genes.autoCompleteTissue(search).then((resp) => {
        if (resp.code === 200) {
          return resp.data.result.searchMatches;
        }
        return [];
      });
    }
    return [];
  }, []);

  useEffect(() => {
    api.search.species.list().then((resp) => {
      if (resp.code === 200) {
        setSpeciesList(resp.data.species);
      } else {
        setSpeciesList([]);
      }
    });
  }, []);

  const metaKeywords = useMemo(() => {
    const list = speciesList.map((s) => ({
      label: `${s.genus.substr(0, 1)} ${s.speciesName} ${
        s.name ? `${s.name}` : ''
      }`,
      value: s.id,
    }));
    return [EMPTY_SPECIES_VALUE, ...list];
  }, [speciesList]);

  const onSelectOptionGene = useCallback((option) => {
    setSelectedGene((gene) => [...gene, option]);
  }, []);

  const onRemoveOptionGene = useCallback((option) => {
    setSelectedGene((gene) => gene.filter((c) => c !== option));
  });

  const onSelectOptionCellTypes = useCallback((option) => {
    setSelectedCellTypes((cellTypes) => [...cellTypes, option]);
  }, []);

  const onRemoveOptionCellTypes = useCallback((option) => {
    setSelectedCellTypes((cellTypes) =>
      cellTypes.filter((c) => c.object.id !== option.object.id)
    );
  }, []);

  const onSelectOptionExp = useCallback((option) => {
    setSelectExp((exp) => [...exp, option]);
  }, []);

  const onRemoveOptionExp = useCallback((option) => {
    setSelectExp((exp) => exp.filter((c) => c.object.id !== option.object.id));
  }, []);

  const onSelectOptionTissue = useCallback((option) => {
    setSelectedTissue((tissue) => [...tissue, option]);
  }, []);

  const onRemoveOptionTissue = useCallback((option) => {
    setSelectedTissue((tissue) =>
      tissue.filter((c) => c.object.id !== option.object.id)
    );
  }, []);

  const onSelectOptionStrain = useCallback((option) => {
    setSelectedStrain((strain) => [...strain, option]);
  }, []);

  const onRemoveOptionStrain = useCallback((option) => {
    setSelectedStrain((strain) =>
      strain.filter((c) => c.object !== option.object)
    );
  }, []);

  return (
    <>
      <div className="container">
        {show && (
          <div className="row">
            <div className="selector col-sm-6">
              <label className="title-raw">
                Search for Raw data annotations
              </label>
              <div className="mb-2">
                <label>
                  Species
                  <HelpIcon
                    title="Species"
                    style={{
                      position: 'absolute',
                    }}
                    content={
                      <>
                        By default, all developmental and life stages are
                        considered for the enrichment analysis. It is possible
                        to provide a custom selection of developmental and life
                        stages, selecting one or several developmental and life
                        stages.
                      </>
                    }
                  />
                </label>
                <Select
                  options={metaKeywords}
                  className="form-control"
                  defaultValue={EMPTY_SPECIES_VALUE}
                  onChange={(e) => setSpeciesValue(e)}
                />
              </div>
              {speciesValue.value && (
                <div>
                  <div>
                    <label>
                      Cell types
                      <HelpIcon
                        title="Cell types"
                        style={{
                          position: 'absolute',
                        }}
                        content={
                          <>
                            By default, all developmental and life stages are
                            considered for the enrichment analysis. It is
                            possible to provide a custom selection of
                            developmental and life stages, selecting one or
                            several developmental and life stages.
                          </>
                        }
                      />
                    </label>
                    <AutoCompleteSearch
                      searchTerm={searchTerm}
                      placeholder="Search cell type"
                      renderOption={renderOptionCellType}
                      getOptionsFunction={getOptionsFunctionCellTypes}
                      onSelectOption={onSelectOptionCellTypes}
                      onRemoveOption={onRemoveOptionCellTypes}
                      selectedOptions={selectedCellTypes}
                    >
                      {children}
                    </AutoCompleteSearch>
                    <input type="checkbox" /> Including substrcutures
                  </div>
                  <div className="mb-2">
                    <label>
                      Tissue
                      <HelpIcon
                        title="Tissue"
                        style={{
                          position: 'absolute',
                        }}
                        content={
                          <>
                            By default, all developmental and life stages are
                            considered for the enrichment analysis. It is
                            possible to provide a custom selection of
                            developmental and life stages, selecting one or
                            several developmental and life stages.
                          </>
                        }
                      />
                    </label>
                    <AutoCompleteSearch
                      searchTerm={searchTerm}
                      placeholder="Search tissue"
                      renderOption={renderOptionTissue}
                      getOptionsFunction={getOptionsFunctionTissue}
                      onSelectOption={onSelectOptionTissue}
                      onRemoveOption={onRemoveOptionTissue}
                      selectedOptions={selectedTissue}
                    >
                      {children}
                    </AutoCompleteSearch>
                    <input type="checkbox" /> Including substrcutures
                  </div>
                  <div>
                    <label>
                      Development and life stages
                      <HelpIcon
                        title="Developmental and life stages"
                        style={{
                          position: 'absolute',
                        }}
                        content={
                          <>
                            By default, all developmental and life stages are
                            considered for the enrichment analysis. It is
                            possible to provide a custom selection of
                            developmental and life stages, selecting one or
                            several developmental and life stages.
                          </>
                        }
                      />
                    </label>
                    <Select />
                    <input type="checkbox" /> Including substrcutures
                  </div>
                  <div>
                    Sex
                    <HelpIcon
                      title="Developmental and life stages"
                      style={{
                        position: 'absolute',
                      }}
                      content={
                        <>
                          By default, all developmental and life stages are
                          considered for the enrichment analysis. It is possible
                          to provide a custom selection of developmental and
                          life stages, selecting one or several developmental
                          and life stages.
                        </>
                      }
                    />
                  </div>
                  <div className="sex-container">
                    {speciesSexe.map((sex) => {
                      const isChecked = true;
                      return (
                        <div className="sex-input-name">
                          <input type="checkbox" />
                          <div className="sex-name">{sex.name}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
            <div className="col-md-6">
              <div className="input-form">
                {speciesValue.value && (
                  <>
                    <div className="mb-2">
                      <label>
                        Strain
                        <HelpIcon
                          title="Strain"
                          style={{
                            position: 'absolute',
                          }}
                          content={
                            <>
                              By default, all developmental and life stages are
                              considered for the enrichment analysis. It is
                              possible to provide a custom selection of
                              developmental and life stages, selecting one or
                              several developmental and life stages.
                            </>
                          }
                        />
                      </label>
                      <AutoCompleteSearch
                        searchTerm={searchTerm}
                        placeholder="Search strain"
                        renderOption={renderOptionStrain}
                        getOptionsFunction={getOptionsFunctionStrain}
                        onSelectOption={onSelectOptionStrain}
                        onRemoveOption={onRemoveOptionStrain}
                        selectedOptions={selectedStrain}
                      >
                        {children}
                      </AutoCompleteSearch>
                    </div>
                    <div className="mb-2">
                      <label>
                        Gene
                        <HelpIcon
                          title="Gene"
                          style={{
                            position: 'absolute',
                          }}
                          content={
                            <>
                              By default, all developmental and life stages are
                              considered for the enrichment analysis. It is
                              possible to provide a custom selection of
                              developmental and life stages, selecting one or
                              several developmental and life stages.
                            </>
                          }
                        />
                      </label>
                      <SelectMultipleWithAutoComplete
                        placeholder="Search Gene"
                        getOptionsFunction={getOptionsFunctionGenes}
                        onSelectOption={onSelectOptionGene}
                        onRemoveOption={onRemoveOptionGene}
                        selectedOptions={selectedGene}
                        setValue={setSelectedGene}
                      />
                    </div>
                  </>
                )}
                <div className="mb-2">
                  <label>
                    Experiment or assay ID
                    <HelpIcon
                      title="Experiment or assay ID"
                      style={{
                        position: 'absolute',
                      }}
                      content={
                        <>
                          By default, all developmental and life stages are
                          considered for the enrichment analysis. It is possible
                          to provide a custom selection of developmental and
                          life stages, selecting one or several developmental
                          and life stages.
                        </>
                      }
                    />
                  </label>
                  <TagInput />
                </div>
                <div className="submit-reinit">
                  <Button type="submit" onClick={triggerSearch}>
                    Submit
                  </Button>
                  <Button className="reinit">Reinitialize</Button>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="control is-flex is-align-items-center">
          <button
            className="button mr-2 mb-5"
            type="button"
            onClick={() => setShow(!show)}
          >
            {show ? 'Hide Filter' : 'Show Filter'}
          </button>
        </div>
        <label className="title-raw">Raw data annotations results</label>
        <div className="is-flex columns ongletWrapper is-centered">
          {DATA_TYPES.map((type) => {
            const isActive = type.id === dataType;
            return (
              <div
                key={type.id}
                onClick={() => setDataType(type.id)}
                className={`onglet column is-centered ${
                  isActive && 'ongletActive'
                }`}
              >
                <span>{type.label}</span>
                <span>
                  (
                  {searchResult?.resultCount?.[type.id]?.assayCount ||
                    'No data'}
                  )
                </span>
              </div>
            );
          })}
        </div>
        {!!searchResult && (
          <RawDataAnnotationResults
            results={searchResult?.results?.[dataType]}
            filters={searchResult?.filters?.[dataType]}
            resultCount={searchResult?.resultCount?.[dataType]}
            dataType={dataType}
          />
        )}
      </div>
    </>
  );
};

export default RawDataAnnotations;