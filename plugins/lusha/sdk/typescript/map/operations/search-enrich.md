<!-- Generated file — do not edit; regenerated with the SDK. -->

# SearchEnrich — operations

Accessor: `client.searchEnrich` · Source: `src/resources/search-enrich.ts` · 2 operations · Request and error types: namespace `SearchEnrich`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `lusha`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### searchAndEnrichCompanies

- **Signature**: `searchAndEnrichCompanies(request: SearchEnrich.SearchAndEnrichCompaniesRequest, options?: RequestOptions): ApiPromise<V3CompaniesSearchAndEnrichResponse, SearchEnrich.SearchAndEnrichCompaniesError>`
- **Wire**: `POST /v3/companies/search-and-enrich`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V3CompaniesSearchAndEnrichResponse`
- **Error**: `LushaError` with `kind: "api"`, an instance of `SearchEnrich.SearchAndEnrichCompaniesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [402] `ErrorResponse` · `"errorResponse4"` [403] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SearchEnrich.SearchAndEnrichCompaniesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V3CompaniesSearchAndEnrichRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V3CompaniesSearchAndEnrichRequest` | `v3CompaniesSearchAndEnrichRequestSchema` | `src/models/v3-companies-search-and-enrich-request.ts` |
| `V3CompaniesSearchAndEnrichResponse` | `v3CompaniesSearchAndEnrichResponseSchema` | `src/models/v3-companies-search-and-enrich-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### searchAndEnrichContacts

- **Signature**: `searchAndEnrichContacts(request: SearchEnrich.SearchAndEnrichContactsRequest, options?: RequestOptions): ApiPromise<V3ContactsSearchAndEnrichResponse, SearchEnrich.SearchAndEnrichContactsError>`
- **Wire**: `POST /v3/contacts/search-and-enrich`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V3ContactsSearchAndEnrichResponse`
- **Error**: `LushaError` with `kind: "api"`, an instance of `SearchEnrich.SearchAndEnrichContactsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [402] `ErrorResponse` · `"errorResponse4"` [403] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SearchEnrich.SearchAndEnrichContactsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V3ContactsSearchAndEnrichRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V3ContactsSearchAndEnrichRequest` | `v3ContactsSearchAndEnrichRequestSchema` | `src/models/v3-contacts-search-and-enrich-request.ts` |
| `V3ContactsSearchAndEnrichResponse` | `v3ContactsSearchAndEnrichResponseSchema` | `src/models/v3-contacts-search-and-enrich-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

