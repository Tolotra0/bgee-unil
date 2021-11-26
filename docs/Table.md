# Adaptative Design

The table can be configured to listen the size of the table.
We can easily configure at which media query hide or show the columns

To configure the header and the visibility of the header follow the template below.

````javascript
    const columns = [
      {
        key: 'taxonName',
        text: 'Taxon Name',
        // `hide` key will hide the columns when the table will have a width inferior at the size configure (`hide` value)
        hide: MEDIA_QUERIES_SIZE[MEDIA_QUERY.TABLET] // these are constant use to easily maintain the code
      },
    ];
````

# Properties

`Table.js`
````
fullwidth: boolean

classNames: string

title: string | undefined

columns: [] of {
        key: string,
        text: string
        style: CSS Object
        hide: MEDIA_QUERIES
    }
    
data: [] of Object

onFilter: () => boolean

sortable: boolean (allow mono sorting)

multiSortable: boolean (allow multi sorting)
onSortCustom: () => -1 | 0 | 1

onRenderCell: function | undefined (custom cell rendering when logic need to be apply for the rendering or custom rendering)

onRenderRow: function | undefined (custom row style)

striped: boolean (striped rows)

pagination: boolean

defaultPaginationSize: number (default = 10)

customHeader: () => React.Component

mappingObj: (object, key) => object
````