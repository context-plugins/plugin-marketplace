<!-- Generated file — do not edit; regenerated with the SDK. -->

# ProspectingSearchEnrich — operations

Accessor: `client.prospectingSearchEnrich` · Source: `src/resources/prospecting-search-enrich.ts` · 4 operations · Request and error types: namespace `ProspectingSearchEnrich`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `lusha`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### enrichProspectingCompanies

- **Signature**: `enrichProspectingCompanies(request: ProspectingSearchEnrich.EnrichProspectingCompaniesRequest, options?: RequestOptions): ApiPromise<CompanyEnrichResponse, ProspectingSearchEnrich.EnrichProspectingCompaniesError>`
- **Wire**: `POST /prospecting/company/enrich`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CompanyEnrichResponse`
- **Error**: `LushaError` with `kind: "api"`, an instance of `ProspectingSearchEnrich.EnrichProspectingCompaniesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [429] `ErrorResponse` · `"errorResponse4"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ProspectingSearchEnrich.EnrichProspectingCompaniesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CompanyEnrichRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CompanyEnrichRequest` | `companyEnrichRequestSchema` | `src/models/company-enrich-request.ts` |
| `CompanyEnrichResponse` | `companyEnrichResponseSchema` | `src/models/company-enrich-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### enrichProspectingContacts

- **Signature**: `enrichProspectingContacts(request: ProspectingSearchEnrich.EnrichProspectingContactsRequest, options?: RequestOptions): ApiPromise<ContactEnrichResponse, ProspectingSearchEnrich.EnrichProspectingContactsError>`
- **Wire**: `POST /prospecting/contact/enrich`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ContactEnrichResponse`
- **Error**: `LushaError` with `kind: "api"`, an instance of `ProspectingSearchEnrich.EnrichProspectingContactsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [429] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ProspectingSearchEnrich.EnrichProspectingContactsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ContactEnrichRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContactEnrichRequest` | `contactEnrichRequestSchema` | `src/models/contact-enrich-request.ts` |
| `ContactEnrichResponse` | `contactEnrichResponseSchema` | `src/models/contact-enrich-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### searchProspectingCompanies

- **Signature**: `searchProspectingCompanies(request: ProspectingSearchEnrich.SearchProspectingCompaniesRequest, options?: RequestOptions): ApiPromise<CompanySearchResponse, ProspectingSearchEnrich.SearchProspectingCompaniesError>`
- **Wire**: `POST /prospecting/company/search`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CompanySearchResponse`
- **Error**: `LushaError` with `kind: "api"`, an instance of `ProspectingSearchEnrich.SearchProspectingCompaniesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [429] `ErrorResponse` · `"errorResponse4"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ProspectingSearchEnrich.SearchProspectingCompaniesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CompanySearchRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CompanySearchRequest` | `companySearchRequestSchema` | `src/models/company-search-request.ts` |
| `CompanySearchResponse` | `companySearchResponseSchema` | `src/models/company-search-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### searchProspectingContacts

- **Signature**: `searchProspectingContacts(request: ProspectingSearchEnrich.SearchProspectingContactsRequest, options?: RequestOptions): ApiPromise<ContactSearchResponse, ProspectingSearchEnrich.SearchProspectingContactsError>`
- **Wire**: `POST /prospecting/contact/search`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ContactSearchResponse`
- **Error**: `LushaError` with `kind: "api"`, an instance of `ProspectingSearchEnrich.SearchProspectingContactsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [429] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ProspectingSearchEnrich.SearchProspectingContactsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ContactSearchRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContactSearchRequest` | `contactSearchRequestSchema` | `src/models/contact-search-request.ts` |
| `ContactSearchResponse` | `contactSearchResponseSchema` | `src/models/contact-search-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

