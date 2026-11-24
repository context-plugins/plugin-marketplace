<!-- Generated file — do not edit; regenerated with the SDK. -->

# Jobs — operations

Accessor: `client.jobs` · Source: `src/resources/jobs.ts` · 2 operations · Request and error types: namespace `Jobs`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `appstore-spy`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createSearchJobsSearchPost

- **Signature**: `createSearchJobsSearchPost(request: Jobs.CreateSearchJobsSearchPostRequest, options?: RequestOptions): ApiPromise<SearchResult, Jobs.CreateSearchJobsSearchPostError>`
- **Wire**: `POST /jobs/search`
- **Auth**: `apiKeyHeader`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SearchResult`
- **Error**: `AppstoreSpyError` with `kind: "api"`, an instance of `Jobs.CreateSearchJobsSearchPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"jobsSearch401Error1"` [401] `JobsSearch401Error1` · `"error402"` [402] `string` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Jobs.CreateSearchJobsSearchPostRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SearchCreate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SearchCreate` | `searchCreateSchema` | `src/models/search-create.ts` |
| `SearchResult` | `searchResultSchema` | `src/models/search-result.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |
| `JobsSearch401Error1` | `jobsSearch401Error1Schema` | `src/models/jobs-search401-error1.ts` |

### getSearchJobsSearchGet

- **Signature**: `getSearchJobsSearchGet(request?: Jobs.GetSearchJobsSearchGetRequest, options?: RequestOptions): ApiPromise<SearchResult[], Jobs.GetSearchJobsSearchGetError>`
- **Wire**: `GET /jobs/search`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SearchResult[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `AppstoreSpyError` with `kind: "api"`, an instance of `Jobs.GetSearchJobsSearchGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"jobsSearch401Error1"` [401] `JobsSearch401Error1` · `"error402"` [402] `string` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Jobs.GetSearchJobsSearchGetRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `store` | `query` | — | `Store` | no |
| `term` | `query` | — | `string` | no |
| `idUser` | `query` | `id_user` | `string` | no |
| `country` | `query` | — | `string` | no |
| `searchId` | `query` | `search_id` | `string` | no |
| `updatedGte` | `query` | `updated_gte` | `Date` (date-time) | no |
| `updatedLte` | `query` | `updated_lte` | `Date` (date-time) | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Store` | `storeSchema` | `src/models/store.ts` |
| `SearchResult` | `searchResultSchema` | `src/models/search-result.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |
| `JobsSearch401Error1` | `jobsSearch401Error1Schema` | `src/models/jobs-search401-error1.ts` |

