<!-- Generated file — do not edit; regenerated with the SDK. -->

# Search — operations

Accessor: `client.search` · Source: `src/resources/search.ts` · 2 operations · Request and error types: namespace `Search`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `lusha`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### searchCompanies

- **Signature**: `searchCompanies(request: Search.SearchCompaniesRequest, options?: RequestOptions): ApiPromise<V3CompaniesSearchResponse, Search.SearchCompaniesError>`
- **Wire**: `POST /v3/companies/search`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V3CompaniesSearchResponse`
- **Error**: `LushaError` with `kind: "api"`, an instance of `Search.SearchCompaniesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [402] `ErrorResponse` · `"errorResponse4"` [403] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Search.SearchCompaniesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V3CompaniesSearchRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V3CompaniesSearchRequest` | `v3CompaniesSearchRequestSchema` | `src/models/v3-companies-search-request.ts` |
| `V3CompaniesSearchResponse` | `v3CompaniesSearchResponseSchema` | `src/models/v3-companies-search-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### searchContacts

- **Signature**: `searchContacts(request: Search.SearchContactsRequest, options?: RequestOptions): ApiPromise<V3ContactsSearchResponse, Search.SearchContactsError>`
- **Wire**: `POST /v3/contacts/search`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V3ContactsSearchResponse`
- **Error**: `LushaError` with `kind: "api"`, an instance of `Search.SearchContactsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [402] `ErrorResponse` · `"errorResponse4"` [403] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Search.SearchContactsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V3ContactsSearchRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V3ContactsSearchRequest` | `v3ContactsSearchRequestSchema` | `src/models/v3-contacts-search-request.ts` |
| `V3ContactsSearchResponse` | `v3ContactsSearchResponseSchema` | `src/models/v3-contacts-search-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

