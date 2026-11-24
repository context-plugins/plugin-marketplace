<!-- Generated file — do not edit; regenerated with the SDK. -->

# Companies — operations

Accessor: `client.companies` · Source: `src/resources/companies.ts` · 9 operations · Request and error types: namespace `Companies`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `compabase`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getCeidgNipByNip

- **Signature**: `getCeidgNipByNip(request: Companies.GetCeidgNipByNipRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Companies.GetCeidgNipByNipError>`
- **Wire**: `GET /ceidg/nip/{nip}`
- **Auth**: any of `apiKeyAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `CompabaseError` with `kind: "api"`, an instance of `Companies.GetCeidgNipByNipError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [404] `ErrorResponse` · `"errorResponse2"` [400] `ErrorResponse` · `"errorResponse3"` [401] `ErrorResponse` · `"errorResponse4"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Companies.GetCeidgNipByNipRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `nip` | `path` | `string` | yes | — |
| `locale` | `query` | `Locale` | no | `Locale.En` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Locale` | `localeSchema` | `src/models/locale.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getCompanies

- **Signature**: `getCompanies(request?: Companies.GetCompaniesRequest, options?: RequestOptions): ApiPromise<CompanyListResponse, Companies.GetCompaniesError>`
- **Wire**: `GET /companies`
- **Auth**: any of `apiKeyAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CompanyListResponse`
- **Error**: `CompabaseError` with `kind: "api"`, an instance of `Companies.GetCompaniesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [400] `ErrorResponse` · `"errorResponse3"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Companies.GetCompaniesRequest` (45):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `q` | `query` | — | `string` | no | — |
| `keywords` | `query` | — | `string` | no | — |
| `limit` | `query` | — | `number` | no | `20` |
| `offset` | `query` | — | `number` | no | `0` |
| `cursor` | `query` | — | `string` | no | — |
| `pkd` | `query` | — | `string` | no | — |
| `primaryOnly` | `query` | `primary_only` | `boolean` | no | `true` |
| `currency` | `query` | — | `Currency` | no | `Currency.Pln` |
| `voivodeship` | `query` | — | `string` | no | — |
| `postalCode` | `query` | `postal_code` | `string` | no | — |
| `city` | `query` | — | `string` | no | — |
| `revenueMin` | `query` | `revenue_min` | `number` | no | — |
| `revenueMax` | `query` | `revenue_max` | `number` | no | — |
| `revenueOperatingMin` | `query` | `revenue_operating_min` | `number` | no | — |
| `revenueOperatingMax` | `query` | `revenue_operating_max` | `number` | no | — |
| `profitOperatingMin` | `query` | `profit_operating_min` | `number` | no | — |
| `profitOperatingMax` | `query` | `profit_operating_max` | `number` | no | — |
| `profitNetMin` | `query` | `profit_net_min` | `number` | no | — |
| `profitNetMax` | `query` | `profit_net_max` | `number` | no | — |
| `incomeTaxMin` | `query` | `income_tax_min` | `number` | no | — |
| `incomeTaxMax` | `query` | `income_tax_max` | `number` | no | — |
| `costWagesMin` | `query` | `cost_wages_min` | `number` | no | — |
| `costWagesMax` | `query` | `cost_wages_max` | `number` | no | — |
| `costAmortizationMin` | `query` | `cost_amortization_min` | `number` | no | — |
| `costAmortizationMax` | `query` | `cost_amortization_max` | `number` | no | — |
| `totalAssetsMin` | `query` | `total_assets_min` | `number` | no | — |
| `totalAssetsMax` | `query` | `total_assets_max` | `number` | no | — |
| `ebitdaMin` | `query` | `ebitda_min` | `number` | no | — |
| `ebitdaMax` | `query` | `ebitda_max` | `number` | no | — |
| `capitalMin` | `query` | `capital_min` | `number` | no | — |
| `capitalMax` | `query` | `capital_max` | `number` | no | — |
| `estimatedValueMin` | `query` | `estimated_value_min` | `number` | no | — |
| `estimatedValueMax` | `query` | `estimated_value_max` | `number` | no | — |
| `registrationYearMin` | `query` | `registration_year_min` | `number` | no | — |
| `registrationYearMax` | `query` | `registration_year_max` | `number` | no | — |
| `registrationDateMin` | `query` | `registration_date_min` | `string` (date) | no | — |
| `registrationDateMax` | `query` | `registration_date_max` | `string` (date) | no | — |
| `lastReportYearMin` | `query` | `last_report_year_min` | `number` | no | — |
| `lastReportYearMax` | `query` | `last_report_year_max` | `number` | no | — |
| `statusActive` | `query` | `status_active` | `boolean` | no | — |
| `legalForm` | `query` | `legal_form` | `string` | no | — |
| `hasEmail` | `query` | `has_email` | `boolean` | no | — |
| `hasWebsite` | `query` | `has_website` | `boolean` | no | — |
| `sort` | `query` | — | `Sort` | no | — |
| `dir` | `query` | — | `Dir` | no | `Dir.Desc` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Currency` | `currencySchema` | `src/models/currency.ts` |
| `Sort` | `sortSchema` | `src/models/sort.ts` |
| `Dir` | `dirSchema` | `src/models/dir.ts` |
| `CompanyListResponse` | `companyListResponseSchema` | `src/models/company-list-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getCompaniesCount

- **Signature**: `getCompaniesCount(request?: Companies.GetCompaniesCountRequest, options?: RequestOptions): ApiPromise<CompanyCountResponse, Companies.GetCompaniesCountError>`
- **Wire**: `GET /companies/count`
- **Auth**: any of `apiKeyAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CompanyCountResponse`
- **Error**: `CompabaseError` with `kind: "api"`, an instance of `Companies.GetCompaniesCountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [400] `ErrorResponse` · `"errorResponse3"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Companies.GetCompaniesCountRequest` (40):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `q` | `query` | — | `string` | no | — |
| `keywords` | `query` | — | `string` | no | — |
| `pkd` | `query` | — | `string` | no | — |
| `primaryOnly` | `query` | `primary_only` | `boolean` | no | `true` |
| `currency` | `query` | — | `Currency` | no | `Currency.Pln` |
| `voivodeship` | `query` | — | `string` | no | — |
| `postalCode` | `query` | `postal_code` | `string` | no | — |
| `city` | `query` | — | `string` | no | — |
| `revenueMin` | `query` | `revenue_min` | `number` | no | — |
| `revenueMax` | `query` | `revenue_max` | `number` | no | — |
| `revenueOperatingMin` | `query` | `revenue_operating_min` | `number` | no | — |
| `revenueOperatingMax` | `query` | `revenue_operating_max` | `number` | no | — |
| `profitOperatingMin` | `query` | `profit_operating_min` | `number` | no | — |
| `profitOperatingMax` | `query` | `profit_operating_max` | `number` | no | — |
| `profitNetMin` | `query` | `profit_net_min` | `number` | no | — |
| `profitNetMax` | `query` | `profit_net_max` | `number` | no | — |
| `incomeTaxMin` | `query` | `income_tax_min` | `number` | no | — |
| `incomeTaxMax` | `query` | `income_tax_max` | `number` | no | — |
| `costWagesMin` | `query` | `cost_wages_min` | `number` | no | — |
| `costWagesMax` | `query` | `cost_wages_max` | `number` | no | — |
| `costAmortizationMin` | `query` | `cost_amortization_min` | `number` | no | — |
| `costAmortizationMax` | `query` | `cost_amortization_max` | `number` | no | — |
| `totalAssetsMin` | `query` | `total_assets_min` | `number` | no | — |
| `totalAssetsMax` | `query` | `total_assets_max` | `number` | no | — |
| `ebitdaMin` | `query` | `ebitda_min` | `number` | no | — |
| `ebitdaMax` | `query` | `ebitda_max` | `number` | no | — |
| `capitalMin` | `query` | `capital_min` | `number` | no | — |
| `capitalMax` | `query` | `capital_max` | `number` | no | — |
| `estimatedValueMin` | `query` | `estimated_value_min` | `number` | no | — |
| `estimatedValueMax` | `query` | `estimated_value_max` | `number` | no | — |
| `registrationYearMin` | `query` | `registration_year_min` | `number` | no | — |
| `registrationYearMax` | `query` | `registration_year_max` | `number` | no | — |
| `registrationDateMin` | `query` | `registration_date_min` | `string` (date) | no | — |
| `registrationDateMax` | `query` | `registration_date_max` | `string` (date) | no | — |
| `lastReportYearMin` | `query` | `last_report_year_min` | `number` | no | — |
| `lastReportYearMax` | `query` | `last_report_year_max` | `number` | no | — |
| `statusActive` | `query` | `status_active` | `boolean` | no | — |
| `legalForm` | `query` | `legal_form` | `string` | no | — |
| `hasEmail` | `query` | `has_email` | `boolean` | no | — |
| `hasWebsite` | `query` | `has_website` | `boolean` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Currency` | `currencySchema` | `src/models/currency.ts` |
| `CompanyCountResponse` | `companyCountResponseSchema` | `src/models/company-count-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getCompaniesExport

- **Signature**: `getCompaniesExport(request?: Companies.GetCompaniesExportRequest, options?: RequestOptions): ApiPromise<CompanyListResponse, Companies.GetCompaniesExportError>`
- **Wire**: `GET /companies/export`
- **Auth**: any of `apiKeyAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CompanyListResponse`
- **Error**: `CompabaseError` with `kind: "api"`, an instance of `Companies.GetCompaniesExportError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Companies.GetCompaniesExportRequest` (12):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `q` | `query` | — | `string` | no | — |
| `keywords` | `query` | — | `string` | no | — |
| `limit` | `query` | — | `number` | no | `100` |
| `offset` | `query` | — | `number` | no | `0` |
| `cursor` | `query` | — | `string` | no | — |
| `pkd` | `query` | — | `string` | no | — |
| `primaryOnly` | `query` | `primary_only` | `boolean` | no | `true` |
| `hasEmail` | `query` | `has_email` | `boolean` | no | — |
| `hasWebsite` | `query` | `has_website` | `boolean` | no | — |
| `statusActive` | `query` | `status_active` | `boolean` | no | — |
| `revenueMin` | `query` | `revenue_min` | `number` | no | — |
| `revenueMax` | `query` | `revenue_max` | `number` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `CompanyListResponse` | `companyListResponseSchema` | `src/models/company-list-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getCompaniesKrsByKrs

- **Signature**: `getCompaniesKrsByKrs(request: Companies.GetCompaniesKrsByKrsRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Companies.GetCompaniesKrsByKrsError>`
- **Wire**: `GET /companies/krs/{krs}`
- **Auth**: any of `apiKeyAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `CompabaseError` with `kind: "api"`, an instance of `Companies.GetCompaniesKrsByKrsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [404] `ErrorResponse` · `"errorResponse2"` [400] `ErrorResponse` · `"errorResponse3"` [401] `ErrorResponse` · `"errorResponse4"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Companies.GetCompaniesKrsByKrsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `krs` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getCompaniesKrsByKrsConnections

- **Signature**: `getCompaniesKrsByKrsConnections(request: Companies.GetCompaniesKrsByKrsConnectionsRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Companies.GetCompaniesKrsByKrsConnectionsError>`
- **Wire**: `GET /companies/krs/{krs}/connections`
- **Auth**: any of `apiKeyAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `CompabaseError` with `kind: "api"`, an instance of `Companies.GetCompaniesKrsByKrsConnectionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [404] `ErrorResponse` · `"errorResponse2"` [400] `ErrorResponse` · `"errorResponse3"` [401] `ErrorResponse` · `"errorResponse4"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Companies.GetCompaniesKrsByKrsConnectionsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `krs` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getCompaniesKrsByKrsGroup

- **Signature**: `getCompaniesKrsByKrsGroup(request: Companies.GetCompaniesKrsByKrsGroupRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Companies.GetCompaniesKrsByKrsGroupError>`
- **Wire**: `GET /companies/krs/{krs}/group`
- **Auth**: any of `apiKeyAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `CompabaseError` with `kind: "api"`, an instance of `Companies.GetCompaniesKrsByKrsGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Companies.GetCompaniesKrsByKrsGroupRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `krs` | `path` | `string` | yes | — |
| `limit` | `query` | `number` | no | `50` |

### getCompaniesKrsByKrsStatus

- **Signature**: `getCompaniesKrsByKrsStatus(request: Companies.GetCompaniesKrsByKrsStatusRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Companies.GetCompaniesKrsByKrsStatusError>`
- **Wire**: `GET /companies/krs/{krs}/status`
- **Auth**: any of `apiKeyAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `CompabaseError` with `kind: "api"`, an instance of `Companies.GetCompaniesKrsByKrsStatusError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [404] `ErrorResponse` · `"errorResponse2"` [400] `ErrorResponse` · `"errorResponse3"` [401] `ErrorResponse` · `"errorResponse4"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Companies.GetCompaniesKrsByKrsStatusRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `krs` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getCompaniesKrsByKrsStructurePeople

- **Signature**: `getCompaniesKrsByKrsStructurePeople(request: Companies.GetCompaniesKrsByKrsStructurePeopleRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Companies.GetCompaniesKrsByKrsStructurePeopleError>`
- **Wire**: `GET /companies/krs/{krs}/structure-people`
- **Auth**: any of `apiKeyAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `CompabaseError` with `kind: "api"`, an instance of `Companies.GetCompaniesKrsByKrsStructurePeopleError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [404] `ErrorResponse` · `"errorResponse2"` [400] `ErrorResponse` · `"errorResponse3"` [401] `ErrorResponse` · `"errorResponse4"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Companies.GetCompaniesKrsByKrsStructurePeopleRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `krs` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

