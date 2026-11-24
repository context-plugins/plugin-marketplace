<!-- Generated file — do not edit; regenerated with the SDK. -->

# Companies — operations

Accessor: `client.companies` · Source: `src/resources/companies.ts` · 3 operations · Request and error types: namespace `Companies`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `surfe`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getCompanyEnrichment

- **Signature**: `getCompanyEnrichment(request: Companies.GetCompanyEnrichmentRequest, options?: RequestOptions): ApiPromise<CompanyEnrichmentResult, Companies.GetCompanyEnrichmentError>`
- **Wire**: `GET /companies/enrich/{id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CompanyEnrichmentResult`
- **Error**: `SurfeError` with `kind: "api"`, an instance of `Companies.GetCompanyEnrichmentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [404] `Error` · `"error3"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Companies.GetCompanyEnrichmentRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CompanyEnrichmentResult` | `companyEnrichmentResultSchema` | `src/models/company-enrichment-result.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### searchCompanies

- **Signature**: `searchCompanies(request: Companies.SearchCompaniesRequest, options?: RequestOptions): ApiPromise<CompanySearchResponse, Companies.SearchCompaniesError>`
- **Wire**: `POST /companies/search`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CompanySearchResponse`
- **Error**: `SurfeError` with `kind: "api"`, an instance of `Companies.SearchCompaniesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [402] `Error` · `"error3"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Companies.SearchCompaniesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CompanySearchRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CompanySearchRequest` | `companySearchRequestSchema` | `src/models/company-search-request.ts` |
| `CompanySearchResponse` | `companySearchResponseSchema` | `src/models/company-search-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### startCompanyEnrichment

- **Signature**: `startCompanyEnrichment(request: Companies.StartCompanyEnrichmentRequest, options?: RequestOptions): ApiPromise<EnrichmentJobAccepted, Companies.StartCompanyEnrichmentError>`
- **Wire**: `POST /companies/enrich`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `EnrichmentJobAccepted`
- **Error**: `SurfeError` with `kind: "api"`, an instance of `Companies.StartCompanyEnrichmentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [402] `Error` · `"error3"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Companies.StartCompanyEnrichmentRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CompanyEnrichmentRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CompanyEnrichmentRequest` | `companyEnrichmentRequestSchema` | `src/models/company-enrichment-request.ts` |
| `EnrichmentJobAccepted` | `enrichmentJobAcceptedSchema` | `src/models/enrichment-job-accepted.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

