# Affymetrix download file documentation: annotations and processed expression values

This documentation describes the format of annotation download files (that include the chip and experiment files) as well as the processed expression values download files for Affymetrix data. The files can be found in the Bgee [download page](/download/processed-expression-values "Bgee Processed expression values download page") for each species.

*   [Annotation download files](#annotation-download-files "Quick jump to this section")
    *   [Chip file](#chip-file "Quick jump to this section")
    *   [Experiment file](#experiment-file "Quick jump to this section")
*   [Processed expression values download files](#processed-expression-values-download-files "Quick jump to this section")


## Annotation download files

Go to:

*   [Chip file](#chip-file "Quick jump to this section")
*   [Experiment file](#experiment-file "Quick jump to this section")


The annotation download files are divided in 2 main files:

1) **chip information**: where is provided detailed information for each individual chip, as annotation to anatomy, development, sex, strain, chip type as well as normalization type and quality scores used in quality control metrics.

2) **experiment information**: where is provided the over-all information about the experiment, as number of chips that belongs to the experiment, as well as number of conditions, number of organs, number of stages, number of sexes, and number of strains.



### Chip file

Format description of the chip download file for a target species:


|Column|Content|Example|
|---|---|:---:|
|1|[Experiment ID](#experiment-id-column-1 "See Experiment ID column description")|E-MEXP-1594|
|2|[Chip ID](#chip-id-column-2 "See Chip ID column description")|EA05066_30456_DROSO2_1|
|3|[Anatomical entity ID](#anatomical-entity-id-column-3 "See Anatomical entity ID column description")|UBERON:0007023|
|4|[Anatomical entity name](#anatomical-entity-name-column-4 "See Anatomical entity name column description")|adult organism|
|5|[Stage ID](#stage-id-column-5 "See Stage ID column description")|UBERON:0000066|
|6|[Stage name](#stage-name-column-6 "See Stage name column description")|fully formed stage|
|7|[Sex](#sex-column-7 "See Sex column description")|female|
|8|[Strain](#strain-column-8 "See Strain column description")|Raleigh|
|9|[IQRray score](#iqrray-score-column-9 "See IQRray score column description")|113944.65|
|10|[MAS5 percent present](#mas5-percent-present-column-10 "See MAS5 percent present column description")|51.59|
|11|[Normalization type](#normalization-type-column-11 "See Normalization type column description")|gcRMA|
|12|[Scan date](#scan-date-column-12 "See Scan date column description")|11/21/06 19:03:15|
|13|[Chip type ID](#chip-type-id-column-13 "See Chip type ID column description")|A-AFFY-35|
|14|[CDF name](#cdf-name-column-14 "See CDF name column description")|Drosophila_2|
|15|[Chip type name](#chip-type-name-column-15 "See Chip type name column description")|Affymetrix GeneChip Drosophila Genome 2.0 Array [Drosophila_2]|
|16|[IQRray score threshold for the chip type](#iqrray-score-threshold-for-the-chip-type-column-16 "See IQRray score threshold for the chip type column description")|77335.92|
|17|[MAS5 percent present threshold for the chip type](#mas5-percent-present-threshold-for-the-chip-type-column-17 "See MAS5 percent present threshold for the chip type column description")|37.17|
|18|[Data source](#data-source-column-18 "See Data source column description")|ArrayExpress|
|19|[Data source URL](#data-source-url-column-19 "See Data source URL column description")|NA|
|20|[Bgee normalized data URL](#bgee-normalized-data-url-column-20 "See Bgee normalized data URL column description")|https://bgee.org/ftp/current/download/processed_expr_values/affymetrix/Drosophila_melanogaster/Drosophila_melanogaster_Affymetrix_probesets_E-MEXP-1594.tar.gz|
|21|[Bgee normalized data file](#bgee-normalized-data-file-column-21 "See Bgee normalized data file column description")|Drosophila_melanogaster_probesets_E-MEXP-1594_A-AFFY-35_gcRMA.tsv|
|22|[Bgee raw file URL](#bgee-raw-file-url-column-22 "See Bgee raw file URL column description")|https://bgee.org/ftp/affymetrix_data/cel_files/E-MEXP-1594/EA05066_30456_DROSO2_1.CEL.gz|



Example of rows of the chip download file for a target species:

|Experiment ID|Chip ID|Anatomical entity ID|Anatomical entity name|Stage ID|Stage name|Sex|Strain|IQRray score|MAS5 percent present|Normalization type|Scan date|Chip type ID|CDF name|Chip type name|IQRray score threshold for the chip type|MAS5 percent present threshold for the chip type|Data source|Data source URL|Bgee normalized data URL|Bgee normalized data file|Bgee raw file URL|
|--- |--- |--- |--- |--- |--- |--- |--- |--- |--- |--- |--- |--- |--- |--- |--- |--- |--- |--- |--- |--- |--- |
E-MEXP-1594|EA05066_30456_DROSO2_1|UBERON:0007023|adult organism|UBERON:0000066|fully formed stage|female|Raleigh|113944.65|51.59|gcRMA|11/21/06 19:03:15|A-AFFY-35|Drosophila_2|Affymetrix GeneChip Drosophila Genome 2.0 Array [Drosophila_2]|77335.92|37.17|ArrayExpress|NA|https://bgee.org/ftp/current/download/processed_expr_values/affymetrix/Drosophila_melanogaster/Drosophila_melanogaster_Affymetrix_probesets_E-MEXP-1594.tar.gz|Drosophila_melanogaster_probesets_E-MEXP-1594_A-AFFY-35_gcRMA.tsv|https://bgee.org/ftp/affymetrix_data/cel_files/E-MEXP-1594/EA05066_30456_DROSO2_1.CEL.gz|
E-MEXP-1594|EA05066_30460_DROSO2_10|UBERON:0007023|adult organism|UBERON:0000066|fully formed stage|female|Raleigh|113462.67|51.46|gcRMA|11/21/06 19:11:47|A-AFFY-35|Drosophila_2|Affymetrix GeneChip Drosophila Genome 2.0 Array [Drosophila_2]|77335.92|37.17|ArrayExpress|NA|https://bgee.org/ftp/current/download/processed_expr_values/affymetrix/Drosophila_melanogaster/Drosophila_melanogaster_Affymetrix_probesets_E-MEXP-1594.tar.gz|Drosophila_melanogaster_probesets_E-MEXP-1594_A-AFFY-35_gcRMA.tsv|https://bgee.org/ftp/affymetrix_data/cel_files/E-MEXP-1594/EA05066_30460_DROSO2_10.CEL.gz|
E-MEXP-1594|EA05066_30461_DROSO2_22|UBERON:0007023|adult organism|UBERON:0000066|fully formed stage|female|Raleigh|117482.56|52.42|gcRMA|11/21/06 19:17:40|A-AFFY-35|Drosophila_2|Affymetrix GeneChip Drosophila Genome 2.0 Array [Drosophila_2]|77335.92|37.17|ArrayExpress|NA|https://bgee.org/ftp/current/download/processed_expr_values/affymetrix/Drosophila_melanogaster/Drosophila_melanogaster_Affymetrix_probesets_E-MEXP-1594.tar.gz|Drosophila_melanogaster_probesets_E-MEXP-1594_A-AFFY-35_gcRMA.tsv|https://bgee.org/ftp/affymetrix_data/cel_files/E-MEXP-1594/EA05066_30461_DROSO2_22.CEL.gz|


##### <a name="experiment-id-column-1"></a>Experiment ID (column 1)
The Experiment ID column provides the unique identifier per experiment.

##### <a name="chip-id-column-2"></a>Chip ID (column 2)
The Chip ID column provides the unique identifier per sample that belongs to an `Experiment ID` (column 1).

##### <a name="anatomical-entity-id-column-3"></a>Anatomical entity ID (column 3)
The Anatomical entity ID column provides a unique identifier of the anatomical entity, from the Uberon ontology.

##### <a name="anatomical-entity-name-column-4"></a>Anatomical entity name (column 4)
The anatomical entity name column provides the name of the anatomical entity defined by `Anatomical entity ID` (column 3).

##### <a name="stage-id-column-5"></a>Stage ID (column 5)
The Stage ID column provides the unique identifier of the developmental stage, from the Uberon ontology.

##### <a name="stage-name-column-6"></a>Stage name (column 6)
The Stage name column provides the name of the developmental stage defined by `Stage ID` (column 5).

##### <a name="sex-column-7"></a>Sex (column 7)
The Sex column provides the sex information ('not annotated', 'NA', 'mixed', 'male', 'female', 'hermaphrodite').

##### <a name="strain-column-8"></a>Strain (column 8)
The Strain column provides the information about the genetic variant or subtype of an organism.

##### <a name="iqrray-score-column-9"></a>IQRray score (column 9)
The IQRray score column provides a quality control metric of the CEL file data that belongs to a `Chip ID` (column 2) in a target `Experiment ID` (column 1).

##### <a name="mas5-percent-present-column-10"></a>MAS5 percent present (column 10)
The MAS5 percent present column provides the information about the proportion of genes called expressed in the `Chip ID` (column 2).

##### <a name="normalization-type-column-11"></a>Normalization type (column 11)
The Normalization type column provides the information about the normalization method applied to the `Chip ID` (column 2).

Two normalization approaches can be used: gcRMA and MAS5.

The gcRMA normalization is applied when the CEL files are available. This is the default method applied in Bgee.

The MAS5 normalization is applied when only the processed MAS5 files are available.

##### <a name="scan-date-column-12"></a>Scan date (column 12)
The Scan date column provides the information about the processing date of the Affymetrix CEL files that belong to the `Experiment ID` (column 1).

##### <a name="chip-type-id-column-13"></a>Chip type ID (column 13)
The Chip type ID column provides the information about the type of array produced in the factory.

##### <a name="cdf-name-column-14"></a>CDF name (column 14)
The CDF name column provides the name of the chip description file based on `Chip type ID` (column 13).

##### <a name="chip-type-name-column-15"></a>Chip type name (column 15)
The Chip type name column provides the correspondent name based on the `Chip type ID` (column 13) used.

##### <a name="iqrray-score-threshold-for-the-chip-type-column-16"></a>IQRray score threshold for the chip type (column 16)
The IQRray score threshold for the chip type column provides a minimum threshold value applied per `Chip type ID` (column 13) as quality control metric.

##### <a name="mas5-percent-present-threshold-for-the-chip-type-column-17"></a>MAS5 percent present threshold for the chip type (column 17)
The MAS5 percent present threshold for the chip type column provides the information about the minimum proportion of genes called expressed in the `Chip type ID` (column 13).

##### <a name="data-source-column-18"></a>Data source (column 18)
Data repository from where the raw files were extracted referent to the `Chip ID` (column 2).

##### <a name="data-source-url-column-19"></a>Data source URL (column 19)
URL pathway to the data repository where is located the `Chip ID` (column 2).

##### <a name="bgee-normalized-data-url-column-20"></a>Bgee normalized data URL (column 20)
URL pathway where is located the processed data for the correspondent `Experiment ID` (column 1) in Bgee.

##### <a name="bgee-normalized-data-file-column-21"></a>Bgee normalized data file (column 21)
File name of the normalized data referent to the `Experiment ID` (column 1).

##### <a name="bgee-raw-file-url-column-22"></a>Bgee raw file URL (column 22)
URL pathway where is located the raw data (CEL files) referent to the `Chip ID` (column 2) that belongs to a target `Experiment ID` (column 1) in Bgee.



### Experiment file

Format description of the experiment download file for a target species:

|Column|Content|Example|
|---|---|:---:|
|1|[Experiment ID](#experiment-id-column-1-1 "See Experiment ID column description")|E-MEXP-1594|
|2|[Experiment name](#experiment-name-column-2 "See Experiment name column description")|Transcription profiling of Drosophila 40 homozygous Raleigh lines to understand the genetic basis of complex traits in Drosophila|
|3|[Chip count](#chip-count-column-3 "See Chip count column description")|160|
|4|[Condition count](#condition-count-column-4 "See Condition count column description")|2|
|5|[Organ-stage count](#organ-stage-count-column-5 "See Organ-stage count column description")|1|
|6|[Organ count](#organ-count-column-6 "See Organ count column description")|1|
|7|[Stage count](#stage-count-column-7 "See Stage count column description")|1|
|8|[Sex count](#sex-count-column-8 "See Sex count column description")|2|
|9|[Strain count](#strain-count-column-9 "See Strain count column description")|1|
|10|[Data source](#data-source-column-10 "See Data source column description")|ArrayExpress|
|11|[Data source URL](#data-source-url-column-11 "See Data source URL column description")|https://www.ebi.ac.uk/arrayexpress/experiments/E-MEXP-1594|
|12|[Bgee normalized data URL](#bgee-normalized-data-url-column-12 "See Bgee normalized data URL column description")|https://bgee.org/ftp/current/download/processed_expr_values/affymetrix/Drosophila_melanogaster/Drosophila_melanogaster_Affymetrix_probesets_E-MEXP-1594.tar.gz|
|13|[Bgee raw files URL](#bgee-raw-files-url-column-13 "See Bgee raw files URL column description")|https://bgee.org/ftp/affymetrix_data/cel_files/E-MEXP-1594/|
|14|[Experiment description](#experiment-description-column-14 "See Experiment description column description")|We used microarrays to assess whole genome transcript profiles of the 40 homozygous Raleigh lines...|



Example of rows for a single species in experiment download file:

|Experiment ID|Experiment name|Chip count|Condition count|Organ-stage count|Organ count|Stage count|Sex count|Strain count|Data source|Data source URL|Bgee normalized data URL|Bgee raw files URL|Experiment description|
|--- |--- |--- |--- |--- |--- |--- |--- |--- |--- |--- |--- |--- |------------------- |
E-MEXP-1594|Transcription profiling of Drosophila 40 homozygous Raleigh lines to understand the genetic basis of complex traits in Drosophila|160|2|1|1|1|2|1|ArrayExpress|https://www.ebi.ac.uk/arrayexpress/experiments/E-MEXP-1594|https://bgee.org/ftp/current/download/processed_expr_values/affymetrix/Drosophila_melanogaster/Drosophila_melanogaster_Affymetrix_probesets_E-MEXP-1594.tar.gz|https://bgee.org/ftp/affymetrix_data/cel_files/E-MEXP-1594/|We used microarrays to assess whole genome transcript profiles of the 40 homozygous Raleigh lines...|
GSE17013|The sexually antagonistic genes of Drosophila melanogaster|120|2|1|1|1|2|1|GEO|https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE17013|https://bgee.org/ftp/current/download/processed_expr_values/affymetrix/Drosophila_melanogaster/Drosophila_melanogaster_Affymetrix_probesets_GSE17013.tar.gz|https://bgee.org/ftp/affymetrix_data/cel_files/GSE17013/|Differences in the selective pressures experienced by males and females are believed to be ubiquitous in dioecious organisms...|
GSE3842|Transcription profiling of Drosophila LD/DD time course of y w; tim01, cn bw, and y w|46|2|1|1|1|0|2|GEO|https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE3842|https://bgee.org/ftp/current/download/processed_expr_values/affymetrix/Drosophila_melanogaster/Drosophila_melanogaster_Affymetrix_probesets_GSE3842.tar.gz|https://bgee.org/ftp/affymetrix_data/cel_files/GSE3842/|This SuperSeries is composed of the following subset Series:; GSE3826: LD/DD time course of y w Drosophila ...|


##### <a name="experiment-id-column-1-1"></a>Experiment ID (column 1)
The Experiment ID column provides the unique identifier per experiment.

##### <a name="experiment-name-column-2"></a>Experiment name (column 2)
The Experiment name column provides the title referent to the `Experiment ID` (column 1).

##### <a name="chip-count-column-3"></a>Chip count (column 3)
The Chip count column provides the total number of the samples associated to the `Experiment ID` (column 1).

##### <a name="condition-count-column-4"></a>Condition count (column 4)
The Condition count column provides all the combinations of unique parameters in Bgee. This means, combinations between unique anatomical entities, developmental stages, sex and strains.

##### <a name="organ-stage-count-column-5"></a>Organ-stage count (column 5)
The Organ-stage count column provides the total number of unique combinations between anatomical entities Ids `Organ count` (column 6) and developmental stages `Stage count` (column 7) in the target `Experiment ID` (column 1).

##### <a name="organ-count-column-6"></a>Organ count (column 6)
The Organ count column provides the total number of anatomical entities ids in the target `Experiment ID` (column 1).

##### <a name="stage-count-column-7"></a>Stage count (column 7)
The Stage count column provides the total number of developmental stages in the target `Experiment ID` (column 1).

##### <a name="sex-count-column-8"></a>Sex count (column 8)
The Sex count column provides the total number of sexes in the target `Experiment ID` (column 1).

##### <a name="strain-count-column-9"></a>Strain count (column 9)
The Strain count column provides the total number of genetic variants or sub-types in the target `Experiment ID` (column 1).

##### <a name="data-source-column-10"></a>Data source (column 10)
Data repository from where the raw files that belong to the `Experiment ID` (column 1) were extracted.

##### <a name="data-source-url-column-11"></a>Data source URL (column 11)
URL pathway to the data repository where is located the `Experiment ID` (column 1).

##### <a name="bgee-normalized-data-url-column-12"></a>Bgee normalized data URL (column 12)
URL pathway where is located the processed data for the correspondent `Experiment ID` (column 1) in Bgee.

##### <a name="bgee-raw-files-url-column-13"></a>Bgee raw files URL (column 13)
URL pathway where is located the raw files (CEL files) correspondent to the `Experiment ID` (column 1) in Bgee.

##### <a name="experiment-description-column-14"></a>Experiment description (column 14)
Description provided by the authors of the `Experiment ID` (column 1).



## Processed expression values download files

The processed expression values download files can be retrieved per experiment for a specific species, accessed through [FTP](/ftp/current/download/processed_expr_values/affymetrix/), or through the [download page](/download/processed-expression-values "Bgee Processed expression values download page") by selecting the species of interest and then by clicking in the button `Download signal intensities`. By using the web-page all the processed data related to the species are downloaded, this means all the experiments are automatically downloaded. In the folder directory all the files (if more than 1 experiment) are organized by experiment identifier and each processed expression values experiment file include all processed data of all samples that belong to the corresponding target experiment.

Format description of processed expression values download file per experiment identifier.


|Column|Content|Example|
|---|---|:---:|
|1|[Experiment ID](#experiment-id-column-1-2 "See Experiment ID column description")|E-MEXP-1594|
|2|[Chip ID](#chip-id-column-2-1 "See Chip ID column description")|EA05066_30456_DROSO2_1|
|3|[Probeset ID](#probeset-id-column-3 "See Probeset ID column description")|1633746_s_at|
|4|[Gene ID](#gene-id-column-4 "See Gene ID column description")|FBgn0000008|
|5|[Anatomical entity ID](#anatomical-entity-id-column-5 "See Anatomical entity ID column description")|UBERON:0007023|
|6|[Anatomical entity name](#anatomical-entity-name-column-6 "See Anatomical entity name column description")|adult organism|
|7|[Stage ID](#stage-id-column-7 "See Stage ID column description")|UBERON:0000066|
|8|[Stage name](#stage-name-column-8 "See Stage name column description")|fully formed stage|
|9|[Sex](#sex-column-9 "See Sex column description")|female|
|10|[Strain](#strain-column-10 "See Strain column description")|Raleigh|
|11|[Log of normalized signal intensity](#log-of-normalized-signal-intensity-column-11 "See Log of normalized signal intensity column description")|8.00643|
|12|[Detection flag](#detection-flag-column-12 "See Detection flag column description")|present|
|13|[pValue](#pvalue-column-13 "See pValue column description")|0.000612574|
|14|[State in Bgee](#state-in-bgee-column-14 "See State in Bgee column description")|Part of a call|



Example of rows of processed expression values download file. Experiment E-MEXP-1594 from *Drosophila melanogaster*.

|Experiment ID|Chip ID|Probeset ID|Gene ID|Anatomical entity ID|Anatomical entity name|Stage ID|Stage name|Sex|Strain|Log of normalized signal intensity|Detection flag|pValue|State in Bgee|
|---- |---- |---- |---- |---- |---- |---- |---- |---- |---- |---- |---- |---- |---- |
E-MEXP-1594|EA05066_30456_DROSO2_1|1633746_s_at|FBgn0000008|UBERON:0007023|adult organism|UBERON:0000066|fully formed stage|female|Raleigh|8.00643|present|0.000612574|Part of a call|
E-MEXP-1594|EA05066_30456_DROSO2_1|1636558_a_at|FBgn0000014|UBERON:0007023|adult organism|UBERON:0000066|fully formed stage|female|Raleigh|2.11749|absent|0.745101314|Part of a call|
E-MEXP-1594|EA05066_30456_DROSO2_1|1637813_at|FBgn0000014|UBERON:0007023|adult organism|UBERON:0000066|fully formed stage|female|Raleigh|5.201|present|0.001164789|Part of a call|

##### <a name="experiment-id-column-1-2"></a>Experiment ID (column 1)
The Experiment ID column provides the unique identifier per experiment.

##### <a name="chip-id-column-2-1"></a>Chip ID (column 2)
The Chip ID column provides the unique identifier per sample that belongs to an `Experiment ID` (column 1).

##### <a name="probeset-id-column-3"></a>Probeset ID (column 3)
The Probeset ID column provides a unique identifier associated to a `Chip ID` (column 2) in the target `Experiment ID` (column 1). The `Probeset ID`(column 3) allows to define a `Gene ID` (column 4) based on the chip type information. This allows us to retrieve the mapping of probesets to genes from
Ensembl.

##### <a name="gene-id-column-4"></a>Gene ID (column 4)
The Gene ID column provides the unique identifier of genes from Ensembl.

##### <a name="anatomical-entity-id-column-5"></a>Anatomical entity ID (column 5)
The Anatomical entity ID column provides the unique identifier of the anatomical entity, from the Uberon ontology.

##### <a name="anatomical-entity-name-column-6"></a>Anatomical entity name (column 6)
The Anatomical entity name column provides the name of the anatomical entity defined by `Anatomical entity ID` (column 5).

##### <a name="stage-id-column-7"></a>Stage ID (column 7)
The Stage ID column provides the unique identifier of the developmental stage, from the Uberon ontology.

##### <a name="stage-name-column-8"></a>Stage name (column 8)
The Stage name column provides the name of the developmental stage defined by `Stage ID` (column 7).

##### <a name="sex-column-9"></a>Sex (column 9)
The Sex column provides the sex information ('not annotated', 'NA', 'mixed', 'male', 'female', 'hermaphrodite').

##### <a name="strain-column-10"></a>Strain (column 10)
The Strain column provides the information about the genetic variant or subtype of an organism.

##### <a name="log-of-normalized-signal-intensity-column-11"></a>Log of normalized signal intensity (column 11)
The Log of normalized signal intensity column provides a log transformation of normalized probeset signal intensities.

##### <a name="detection-flag-column-12"></a>Detection flag (column 12)
The Detection flag column provides an informative classification based on `pValue` (column 13) cutoff.
A `Probeset ID` (column 3) linked to a `Gene ID` (column 4) can be classified as present, marginal or absent.
The flag present means that the `Gene ID` (column 4) associated to a `Probeset ID`(column 3) is actively expressed. The absent flag means that the `Gene ID` (column 4) associated to a `Probeset ID`(column 3) is not actively expressed. The marginal label means that the intensities of `Gene ID` (column 4) associated to a `Probeset ID`(column 3) are between the two p-value cutoffs, this means between present and absent p-values.

##### <a name="pvalue-column-13"></a>pValue (column 13)
The pValue column provides a quantitative metric for each unique `Probeset ID`(column 3) referent to `Gene ID` (column 4) in a `Chip ID` (column 2).
Based on the availability of the raw CEL files or by using the processed files (MAS5), the p-values are calculated/attributed differently, this means, for:

1) Raw CEL files, the p-value are calculated based on Wilcoxon test on the signal of the probesets against a subset of weakly expressed probesets.
For this, we use a `mas5calls()` R function, where we set the parameters: tau=0.015, alpha1 = 0.024 and alpha2 = 0.111.

2) MAS5 processed files, the p-value cutoffs are assigned manually, this means:

  * for stored MAS5 flags of expression "present" is attributed the p-value = 0.01,

  * for stored MAS5 flags of expression "marginal" is attributed the p-value = 0.05,

  * for stored MAS5 flags of expression "absent" is attributed the p-value = 0.1,

##### <a name="state-in-bgee-column-14"></a>State in Bgee (column 14)
The State in Bgee column provides the information about the usage of `Probeset ID`(column 3) linked to a `Gene ID` (column 4) to make expression calls.
Two different labels can be retrieved in this column:

1) Part of a call --> This means the information from the `Gene ID` (column 4) was used to make an expression informative call.
2) Result excluded, reason: pre-filtering --> Pre-filtering of genes never observed as present in any `Chip ID` (column 2). No calls will be generated for those `Gene ID` (column 4).

