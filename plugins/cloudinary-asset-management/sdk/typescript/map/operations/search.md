<!-- Generated file — do not edit; regenerated with the SDK. -->

# Search — operations

Accessor: `client.search` · Source: `src/resources/search.ts` · 2 operations · Request and error types: namespace `Search`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `cloudinary-asset-management-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### searchAssets

- **Signature**: `searchAssets(request: Search.SearchAssetsRequest, options?: RequestOptions): ApiPromise<SearchResponse, Search.SearchAssetsError>`
- **Wire**: `POST /v1_1/{cloud_name}/resources/search`
- **Auth**: any of `basicAuth`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SearchResponse`
- **Error**: `CloudinaryAssetManagementApiError` with `kind: "api"`, an instance of `Search.SearchAssetsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [400] `ApiErrorModel` · `"apiErrorModel2"` [401] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Search.SearchAssetsRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `cloudName` | `path` | `cloud_name` | `string` | yes |
| `body` | `body` | — | `SearchParameters` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SearchParameters` | `searchParametersSchema` | `src/models/search-parameters.ts` |
| `SearchResponse` | `searchResponseSchema` | `src/models/search-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

### visualSearchAssets

- **Signature**: `visualSearchAssets(request: Search.VisualSearchAssetsRequest, options?: RequestOptions): ApiPromise<SearchResponse, Search.VisualSearchAssetsError>`
- **Wire**: `POST /v1_1/{cloud_name}/resources/visual_search`
- **Auth**: any of `basicAuth`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SearchResponse`
- **Error**: `CloudinaryAssetManagementApiError` with `kind: "api"`, an instance of `Search.VisualSearchAssetsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [400] `ApiErrorModel` · `"apiErrorModel2"` [401] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Search.VisualSearchAssetsRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `cloudName` | `path` | `cloud_name` | `string` | yes |
| `body` | `body` | — | `VisualSearchParameters3` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `VisualSearchParameters3` | `visualSearchParameters3Schema` | `src/models/unions/visual-search-parameters3.ts` |
| `SearchResponse` | `searchResponseSchema` | `src/models/search-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

