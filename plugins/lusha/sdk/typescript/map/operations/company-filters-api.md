<!-- Generated file — do not edit; regenerated with the SDK. -->

# CompanyFiltersApi — operations

Accessor: `client.companyFiltersApi` · Source: `src/resources/company-filters-api.ts` · 9 operations · Request and error types: namespace `CompanyFiltersApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `lusha`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getCompanyIndustries

- **Signature**: `getCompanyIndustries(options?: RequestOptions): ApiPromise<IndustryLabel[], CompanyFiltersApi.GetCompanyIndustriesError>`
- **Wire**: `GET /prospecting/filters/companies/industries_labels`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `IndustryLabel[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `LushaError` with `kind: "api"`, an instance of `CompanyFiltersApi.GetCompanyIndustriesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `IndustryLabel` | `industryLabelSchema` | `src/models/industry-label.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getCompanyIntentTopics

- **Signature**: `getCompanyIntentTopics(options?: RequestOptions): ApiPromise<string[], CompanyFiltersApi.GetCompanyIntentTopicsError>`
- **Wire**: `GET /prospecting/filters/companies/intent_topics`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `string[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `LushaError` with `kind: "api"`, an instance of `CompanyFiltersApi.GetCompanyIntentTopicsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getCompanyNaicsCodes

- **Signature**: `getCompanyNaicsCodes(options?: RequestOptions): ApiPromise<NaicsCode[], CompanyFiltersApi.GetCompanyNaicsCodesError>`
- **Wire**: `GET /prospecting/filters/companies/naics`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `NaicsCode[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `LushaError` with `kind: "api"`, an instance of `CompanyFiltersApi.GetCompanyNaicsCodesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `NaicsCode` | `naicsCodeSchema` | `src/models/naics-code.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getCompanyRevenues

- **Signature**: `getCompanyRevenues(options?: RequestOptions): ApiPromise<RevenueRange[], CompanyFiltersApi.GetCompanyRevenuesError>`
- **Wire**: `GET /prospecting/filters/companies/revenues`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RevenueRange[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `LushaError` with `kind: "api"`, an instance of `CompanyFiltersApi.GetCompanyRevenuesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `RevenueRange` | `revenueRangeSchema` | `src/models/revenue-range.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getCompanySicCodes

- **Signature**: `getCompanySicCodes(options?: RequestOptions): ApiPromise<SicCode[], CompanyFiltersApi.GetCompanySicCodesError>`
- **Wire**: `GET /prospecting/filters/companies/sics`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SicCode[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `LushaError` with `kind: "api"`, an instance of `CompanyFiltersApi.GetCompanySicCodesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `SicCode` | `sicCodeSchema` | `src/models/sic-code.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getCompanySizes

- **Signature**: `getCompanySizes(options?: RequestOptions): ApiPromise<CompanySizeRange[], CompanyFiltersApi.GetCompanySizesError>`
- **Wire**: `GET /prospecting/filters/companies/sizes`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CompanySizeRange[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `LushaError` with `kind: "api"`, an instance of `CompanyFiltersApi.GetCompanySizesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `CompanySizeRange` | `companySizeRangeSchema` | `src/models/company-size-range.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### searchCompanyLocations

- **Signature**: `searchCompanyLocations(request: CompanyFiltersApi.SearchCompanyLocationsRequest, options?: RequestOptions): ApiPromise<CompanyLocationFilter[], CompanyFiltersApi.SearchCompanyLocationsError>`
- **Wire**: `POST /prospecting/filters/companies/locations`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CompanyLocationFilter[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `LushaError` with `kind: "api"`, an instance of `CompanyFiltersApi.SearchCompanyLocationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CompanyFiltersApi.SearchCompanyLocationsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `LocationSearchRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LocationSearchRequest` | `locationSearchRequestSchema` | `src/models/location-search-request.ts` |
| `CompanyLocationFilter` | `companyLocationFilterSchema` | `src/models/company-location-filter.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### searchCompanyNames

- **Signature**: `searchCompanyNames(request: CompanyFiltersApi.SearchCompanyNamesRequest, options?: RequestOptions): ApiPromise<CompanyNameResult[], CompanyFiltersApi.SearchCompanyNamesError>`
- **Wire**: `POST /prospecting/filters/companies/names`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CompanyNameResult[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `LushaError` with `kind: "api"`, an instance of `CompanyFiltersApi.SearchCompanyNamesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CompanyFiltersApi.SearchCompanyNamesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CompanyNameSearchRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CompanyNameSearchRequest` | `companyNameSearchRequestSchema` | `src/models/company-name-search-request.ts` |
| `CompanyNameResult` | `companyNameResultSchema` | `src/models/company-name-result.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### searchCompanyTechnologies

- **Signature**: `searchCompanyTechnologies(request: CompanyFiltersApi.SearchCompanyTechnologiesRequest, options?: RequestOptions): ApiPromise<Technology[], CompanyFiltersApi.SearchCompanyTechnologiesError>`
- **Wire**: `POST /prospecting/filters/companies/technologies`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Technology[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `LushaError` with `kind: "api"`, an instance of `CompanyFiltersApi.SearchCompanyTechnologiesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CompanyFiltersApi.SearchCompanyTechnologiesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TechnologySearchRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TechnologySearchRequest` | `technologySearchRequestSchema` | `src/models/technology-search-request.ts` |
| `Technology` | `technologySchema` | `src/models/technology.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

