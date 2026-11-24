<!-- Generated file — do not edit; regenerated with the SDK. -->

# Libraries — operations

Accessor: `client.libraries` · Source: `src/resources/libraries.ts` · 3 operations · Request and error types: namespace `Libraries`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `audioscrape`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getDataset

- **Signature**: `getDataset(request: Libraries.GetDatasetRequest, options?: RequestOptions): ApiPromise<DatasetDetail, Libraries.GetDatasetError>`
- **Wire**: `GET /api/datasets/{id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DatasetDetail`
- **Error**: `AudioscrapeError` with `kind: "api"`, an instance of `Libraries.GetDatasetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorBody"` [401] `ApiErrorBody` · `"apiErrorBody2"` [402] `ApiErrorBody` · `"apiErrorBody3"` [403] `ApiErrorBody` · `"apiErrorBody4"` [404] `ApiErrorBody` · `"apiErrorBody5"` [429] `ApiErrorBody` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Libraries.GetDatasetRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DatasetDetail` | `datasetDetailSchema` | `src/models/dataset-detail.ts` |
| `ApiErrorBody` | `apiErrorBodySchema` | `src/models/api-error-body.ts` |

### getLibrary

- **Signature**: `getLibrary(request: Libraries.GetLibraryRequest, options?: RequestOptions): ApiPromise<LibraryDetail, Libraries.GetLibraryError>`
- **Wire**: `GET /api/libraries/{slug}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `LibraryDetail`
- **Error**: `AudioscrapeError` with `kind: "api"`, an instance of `Libraries.GetLibraryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorBody"` [401] `ApiErrorBody` · `"apiErrorBody2"` [402] `ApiErrorBody` · `"apiErrorBody3"` [403] `ApiErrorBody` · `"apiErrorBody4"` [404] `ApiErrorBody` · `"apiErrorBody5"` [429] `ApiErrorBody` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Libraries.GetLibraryRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `slug` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LibraryDetail` | `libraryDetailSchema` | `src/models/library-detail.ts` |
| `ApiErrorBody` | `apiErrorBodySchema` | `src/models/api-error-body.ts` |

### listLibraries

- **Signature**: `listLibraries(options?: RequestOptions): ApiPromise<LibraryList, Libraries.ListLibrariesError>`
- **Wire**: `GET /api/libraries`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `LibraryList`
- **Error**: `AudioscrapeError` with `kind: "api"`, an instance of `Libraries.ListLibrariesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorBody"` [401] `ApiErrorBody` · `"apiErrorBody2"` [402] `ApiErrorBody` · `"apiErrorBody3"` [403] `ApiErrorBody` · `"apiErrorBody4"` [429] `ApiErrorBody` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `LibraryList` | `libraryListSchema` | `src/models/library-list.ts` |
| `ApiErrorBody` | `apiErrorBodySchema` | `src/models/api-error-body.ts` |

