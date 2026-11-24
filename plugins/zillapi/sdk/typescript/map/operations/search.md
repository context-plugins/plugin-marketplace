<!-- Generated file — do not edit; regenerated with the SDK. -->

# Search — operations

Accessor: `client.search` · Source: `src/resources/search.ts` · 2 operations · Request and error types: namespace `Search`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `zillapi`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### search

- **Signature**: `search(request: Search.SearchRequestParams, options?: RequestOptions): ApiPromise<SearchResultsOk, Search.SearchError>`
- **Wire**: `POST /v1/search`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SearchResultsOk`
- **Error**: `ZillapiError` with `kind: "api"`, an instance of `Search.SearchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [400] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Search.SearchRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SearchRequest2` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SearchRequest2` | `searchRequest2Schema` | `src/models/unions/search-request2.ts` |
| `SearchResultsOk` | `searchResultsOkSchema` | `src/models/search-results-ok.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

### searchWithDetails

- **Signature**: `searchWithDetails(request: Search.SearchWithDetailsRequestParams, options?: RequestOptions): ApiPromise<JobAcceptedZillapiZillowPropertyDataListingsApi, ApiError>`
- **Wire**: `POST /v1/search/with-details`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `JobAcceptedZillapiZillowPropertyDataListingsApi`
- **Error**: `ZillapiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Search.SearchWithDetailsRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SearchWithDetailsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SearchWithDetailsRequest` | `searchWithDetailsRequestSchema` | `src/models/search-with-details-request.ts` |
| `JobAcceptedZillapiZillowPropertyDataListingsApi` | `jobAcceptedZillapiZillowPropertyDataListingsApiSchema` | `src/models/job-accepted-zillapi-zillow-property-data-listings-api.ts` |

