<!-- Generated file — do not edit; regenerated with the SDK. -->

# DatasetCatalog — operations

Accessor: `client.datasetCatalog` · Source: `src/resources/dataset-catalog.ts` · 2 operations · Request and error types: namespace `DatasetCatalog`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `common-elements`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### datasetsAssociationIndex

- **Signature**: `datasetsAssociationIndex(request: DatasetCatalog.DatasetsAssociationIndexRequest, options?: RequestOptions): ApiPromise<ApiV1AssociationsDatasetsResponse, DatasetCatalog.DatasetsAssociationIndexError>`
- **Wire**: `GET /api/v1/associations/{id}/datasets`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1AssociationsDatasetsResponse`
- **Error**: `CommonElementsError` with `kind: "api"`, an instance of `DatasetCatalog.DatasetsAssociationIndexError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [429] `Error` · `"error6"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DatasetCatalog.DatasetsAssociationIndexRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1AssociationsDatasetsResponse` | `apiV1AssociationsDatasetsResponseSchema` | `src/models/api-v1-associations-datasets-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### datasetsCatalog

- **Signature**: `datasetsCatalog(options?: RequestOptions): ApiPromise<ApiV1DatasetsResponse, DatasetCatalog.DatasetsCatalogError>`
- **Wire**: `GET /api/v1/datasets`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1DatasetsResponse`
- **Error**: `CommonElementsError` with `kind: "api"`, an instance of `DatasetCatalog.DatasetsCatalogError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"error3"` [429] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1DatasetsResponse` | `apiV1DatasetsResponseSchema` | `src/models/api-v1-datasets-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

