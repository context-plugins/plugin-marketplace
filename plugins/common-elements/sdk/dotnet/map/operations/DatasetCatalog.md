<!-- Generated file — do not edit; regenerated with the SDK. -->

# DatasetCatalog — operations

Accessor: `client.DatasetCatalog` · Source: `src/CommonElements/Api/DatasetCatalog.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DatasetsAssociationIndex

- **Auth**: `options.BearerAuth`
- **Signature**: `DatasetsAssociationIndex(DatasetsAssociationIndexRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ApiV1AssociationsDatasetsResponse`
- **Error**: `ApiException<DatasetsAssociationIndexError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DatasetsAssociationIndexRequest` | `src/CommonElements/Requests/DatasetCatalog/DatasetsAssociationIndexRequest.cs` |
| `ApiV1AssociationsDatasetsResponse` | `src/CommonElements/Models/ApiV1AssociationsDatasetsResponse.cs` |
| `DatasetsAssociationIndexError` | `src/CommonElements/Errors/DatasetsAssociationIndexError.cs` |
| `Error` | `src/CommonElements/Models/Error.cs` |

### DatasetsCatalog

- **Auth**: `options.BearerAuth`
- **Signature**: `DatasetsCatalog(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1DatasetsResponse`
- **Error**: `ApiException<DatasetsCatalogError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApiV1DatasetsResponse` | `src/CommonElements/Models/ApiV1DatasetsResponse.cs` |
| `DatasetsCatalogError` | `src/CommonElements/Errors/DatasetsCatalogError.cs` |
| `Error` | `src/CommonElements/Models/Error.cs` |

