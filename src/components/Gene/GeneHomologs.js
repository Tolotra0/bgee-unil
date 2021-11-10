/* eslint-disable no-nested-ternary,jsx-a11y/label-has-associated-control,jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions, no-case-declarations, react/no-array-index-key */
import React from 'react';
import { Link } from 'react-router-dom';
import LinkExternal from '../LinkExternal';
import PATHS from '../../routes/paths';
import Bulma from '../Bulma';
import classnames from '../../helpers/classnames';
import isPlural from '../../helpers/isPlural';
import ComplexTable from '../ComplexTable';

const TaxonNameCell = ({ id, scientificName }) => (
  <LinkExternal
    to={`https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Info&id=${id}`}
  >
    {scientificName}
  </LinkExternal>
);
const ExpressionComparisonCell = ({ geneId, genes }) => {
  let genesExpr = [geneId, ...genes.map((g) => g.geneId)];
  genesExpr = encodeURI(genesExpr.join('\n'));
  return (
    <Link to={`${PATHS.ANALYSIS.EXPRESSION_COMPARISON}?query=${genesExpr}`}>
      Compare expression
    </Link>
  );
};
const ExpandCell = ({ onClick }) => (
  <a className="expand-button" onClick={onClick}>
    <Bulma.IonIcon name="chevron-down-sharp" />
  </a>
);
const GenesCell = ({ genes }) => {
  let prevSpecies = 0;
  const expandContent = genes.reduce((r, a, pos) => {
    r.push(
      <span className="is-size-7" key={a.geneId}>
        {pos !== 0 && a.species.id !== prevSpecies && (
          <div className={classnames('separator')} />
        )}
        <Link
          className="internal-link"
          to={PATHS.SEARCH.GENE_ITEM_BY_SPECIES.replace(
            ':geneId',
            a.geneId
          ).replace(':speciesId', a.species.id)}
        >
          {a.geneId}
        </Link>
        {a.name ? ` ${a.name}` : ''}
        {pos < genes.length && <br />}
      </span>
    );
    prevSpecies = a.species.id;

    return r;
  }, []);

  return (
    <div style={{ minWidth: 230 }}>
      <p>{`${genes.length} ${isPlural('gene', genes.length)}`}</p>
      <div className="expand-content">{expandContent}</div>
    </div>
  );
};
const SpeciesCell = ({ genes }) => {
  const expandContentSpecies = genes.reduce((r, a) => {
    const pos = r.findIndex((g) => g.id === a.species.id);
    if (pos === -1)
      r.push({
        id: a.species.id,
        scientificName: `${a.species.genus} ${a.species.speciesName}`,
        name: a.species.name,
        nbGenes: 1,
      });
    // eslint-disable-next-line no-param-reassign
    else r[pos].nbGenes += 1;
    return r;
  }, []);

  return (
    <div style={{ minWidth: 250 }}>
      <p>{`${expandContentSpecies.length} species`}</p>
      <div className="expand-content">
        {expandContentSpecies.map((s, pos) => (
          <span key={s.id} className="is-size-7">
            {pos !== 0 && <div className={classnames('separator')} />}
            <Link
              className="internal-link"
              to={PATHS.SEARCH.SPECIES_ITEM.replace(':id', s.id)}
            >
              {s.scientificName}
            </Link>
            {` (${s.name})`}
            {new Array(s.nbGenes).fill(null).map((a, id) => (
              <br key={id} />
            ))}
          </span>
        ))}
      </div>
    </div>
  );
};

const GeneHomologs = ({ homologs, geneId, isLoading }) => {
  const onRenderCell = React.useCallback(
    ({ cell, key }, defaultRender, { expandAction }) => {
      switch (key) {
        case 'taxonName':
          return <TaxonNameCell key={key} {...cell.taxon} />;
        case 'expressionComparison':
          return (
            <ExpressionComparisonCell
              key={key}
              geneId={geneId}
              genes={cell.genes}
            />
          );
        case 'details':
          return <ExpandCell key={key} onClick={expandAction} />;
        case 'genes':
          return <GenesCell key={key} genes={cell.genes} />;
        case 'species':
          return <SpeciesCell key={key} genes={cell.genes} />;
        default:
          return null;
      }
    },
    [geneId]
  );

  const customHeader = React.useCallback(
    (searchElement, pageSizeElement) => (
      <Bulma.Columns vCentered>
        <Bulma.C size={8}>
          <div className="field">{searchElement}</div>
        </Bulma.C>
        <Bulma.C size={4}>
          <div>{pageSizeElement}</div>
        </Bulma.C>
      </Bulma.Columns>
    ),
    []
  );
  const onFilter = React.useCallback(
    (search) => (element) => {
      const regExp = new RegExp(search, 'gi');
      let isFound = regExp.test(element.taxon.scientificName);
      for (let i = 0; !isFound && i < element.genes.length; i += 1) {
        isFound =
          regExp.test(element.genes[i].geneId) ||
          regExp.test(element.genes[i].name) ||
          regExp.test(element.genes[i]?.species.name) ||
          regExp.test(element.genes[i]?.species.genus) ||
          regExp.test(element.genes[i]?.species.speciesName);
      }
      return isFound;
    },
    []
  );

  return (
    <>
      <Bulma.Title size={5} className="gradient-underline" id="orthologs">
        Orthologs
      </Bulma.Title>
      <div className="static-section near-columns">
        {isLoading && (
          <progress
            className="progress is-small mt-6"
            max="100"
            style={{ animationDuration: '4s' }}
          >
            80%
          </progress>
        )}
        {!isLoading && homologs?.orthologsByTaxon.length > 0 && (
          <>
            <div className="table-container">
              <ComplexTable
                columns={[
                  {
                    key: 'taxonName',
                    text: 'Taxon Name',
                  },
                  {
                    key: 'species',
                    text: 'Species with orthologs',
                  },
                  {
                    key: 'genes',
                    text: 'Gene(s)',
                  },
                  {
                    key: 'expressionComparison',
                    text: 'Expression comparison',
                  },
                  {
                    key: 'details',
                    text: 'See details',
                  },
                ]}
                data={homologs?.orthologsByTaxon}
                fullwidth
                onRenderCell={onRenderCell}
                onFilter={onFilter}
                customHeader={customHeader}
              />
            </div>
            {homologs.orthologyXRef && (
              <span>
                {`Orthology information comes from ${homologs.orthologyXRef?.source?.name} : `}
                <LinkExternal to={homologs.orthologyXRef?.xRefURL}>
                  {homologs.orthologyXRef?.xRefId}
                </LinkExternal>
                .
              </span>
            )}
          </>
        )}
        {!isLoading && homologs?.orthologsByTaxon.length === 0 && (
          <span>No data</span>
        )}
      </div>
      <Bulma.Title size={5} className="gradient-underline" id="paralogs">
        Paralogs (same species)
      </Bulma.Title>
      <div className="static-section near-columns">
        {isLoading && (
          <progress
            className="progress is-small mt-6"
            max="100"
            style={{ animationDuration: '4s' }}
          >
            80%
          </progress>
        )}
        {!isLoading && homologs?.paralogsByTaxon.length > 0 && (
          <>
            <ComplexTable
              columns={[
                {
                  key: 'taxonName',
                  text: 'Taxon Name',
                },
                {
                  key: 'genes',
                  text: 'Gene(s)',
                },
                {
                  key: 'expressionComparison',
                  text: 'Expression comparison',
                },
                {
                  key: 'details',
                  text: 'See details',
                },
              ]}
              data={homologs?.paralogsByTaxon}
              fullwidth
              onRenderCell={onRenderCell}
              onFilter={onFilter}
              customHeader={customHeader}
            />
            {homologs.paralogyXRef && (
              <span>
                {`Paralogy information comes from ${homologs.paralogyXRef?.source?.name} : `}
                <LinkExternal to={homologs.paralogyXRef?.xRefURL}>
                  {homologs.paralogyXRef?.xRefId}
                </LinkExternal>
                .
              </span>
            )}
          </>
        )}
        {!isLoading && homologs?.paralogsByTaxon.length === 0 && (
          <span>No data</span>
        )}
      </div>
    </>
  );
};

export default GeneHomologs;