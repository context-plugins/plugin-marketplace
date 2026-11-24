<!-- Generated file — do not edit; regenerated with the SDK. -->

# Enrichment — operations

Accessor: `client.enrichment` · Source: `src/resources/enrichment.ts` · 4 operations · Request and error types: namespace `Enrichment`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `lusha`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### searchMultipleCompaniesV2

- **Signature**: `searchMultipleCompaniesV2(request: Enrichment.SearchMultipleCompaniesV2Request, options?: RequestOptions): ApiPromise<Record<string, CompanyBulkResponse>, Enrichment.SearchMultipleCompaniesV2Error>`
- **Wire**: `POST /v2/company`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, CompanyBulkResponse>` — a bare `application/json` map; the success type *is* the map
- **Error**: `LushaError` with `kind: "api"`, an instance of `Enrichment.SearchMultipleCompaniesV2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [429] `ErrorResponse` · `"errorResponse4"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Enrichment.SearchMultipleCompaniesV2Request` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CompaniesBulkRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CompaniesBulkRequest` | `companiesBulkRequestSchema` | `src/models/companies-bulk-request.ts` |
| `CompanyBulkResponse` | `companyBulkResponseSchema` | `src/models/company-bulk-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### searchMultipleContacts

- **Signature**: `searchMultipleContacts(request: Enrichment.SearchMultipleContactsRequest, options?: RequestOptions): ApiPromise<BulkPersonResponse, Enrichment.SearchMultipleContactsError>`
- **Wire**: `POST /v2/person`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BulkPersonResponse`
- **Error**: `LushaError` with `kind: "api"`, an instance of `Enrichment.SearchMultipleContactsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [429] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Enrichment.SearchMultipleContactsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SearchBulkContactsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SearchBulkContactsRequest` | `searchBulkContactsRequestSchema` | `src/models/search-bulk-contacts-request.ts` |
| `BulkPersonResponse` | `bulkPersonResponseSchema` | `src/models/bulk-person-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### searchSingleCompanyV2

- **Signature**: `searchSingleCompanyV2(request?: Enrichment.SearchSingleCompanyV2Request, options?: RequestOptions): ApiPromise<CompanySingleResponse, Enrichment.SearchSingleCompanyV2Error>`
- **Wire**: `GET /v2/company`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CompanySingleResponse`
- **Error**: `LushaError` with `kind: "api"`, an instance of `Enrichment.SearchSingleCompanyV2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [404] `ErrorResponse` · `"errorResponse4"` [429] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Enrichment.SearchSingleCompanyV2Request` (6):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `domain` | `query` | `string` | no | — |
| `company` | `query` | `string` | no | — |
| `companyId` | `query` | `string` | no | — |
| `signals` | `query` | `Signal1[]` | no | — |
| `signalsStartDate` | `query` | `string` (date) | no | — |
| `partialCompany` | `query` | `boolean` | no | `true` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Signal1` | `signal1Schema` | `src/models/signal1.ts` |
| `CompanySingleResponse` | `companySingleResponseSchema` | `src/models/company-single-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### searchSingleContact

- **Signature**: `searchSingleContact(request?: Enrichment.SearchSingleContactRequest, options?: RequestOptions): ApiPromise<SingleContactResponse, Enrichment.SearchSingleContactError>`
- **Wire**: `GET /v2/person`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SingleContactResponse`
- **Error**: `LushaError` with `kind: "api"`, an instance of `Enrichment.SearchSingleContactError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"errorResponse6"` [451] `ErrorResponse` · `"errorResponse7"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Enrichment.SearchSingleContactRequest` (14):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `firstName` | `query` | `string` | no | — |
| `lastName` | `query` | `string` | no | — |
| `personId` | `query` | `string` | no | — |
| `companyName` | `query` | `string` | no | — |
| `companyDomain` | `query` | `string` | no | — |
| `email` | `query` | `string` | no | — |
| `linkedinUrl` | `query` | `string` | no | — |
| `refreshJobInfo` | `query` | `boolean` | no | `false` |
| `filterBy` | `query` | `FilterBy` | no | — |
| `revealEmails` | `query` | `boolean` | no | `true` |
| `revealPhones` | `query` | `boolean` | no | `true` |
| `signals` | `query` | `Signal[]` | no | — |
| `signalsStartDate` | `query` | `string` (date) | no | — |
| `partialProfile` | `query` | `boolean` | no | `false` |

| Type | Schema value | Source |
| --- | --- | --- |
| `FilterBy` | `filterBySchema` | `src/models/filter-by.ts` |
| `Signal` | `signalSchema` | `src/models/signal.ts` |
| `SingleContactResponse` | `singleContactResponseSchema` | `src/models/single-contact-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

