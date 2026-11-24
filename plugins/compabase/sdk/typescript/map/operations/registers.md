<!-- Generated file — do not edit; regenerated with the SDK. -->

# Registers — operations

Accessor: `client.registers` · Source: `src/resources/registers.ts` · 22 operations · Request and error types: namespace `Registers`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `compabase`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getCeidgNipByNipNfzQueues

- **Signature**: `getCeidgNipByNipNfzQueues(request: Registers.GetCeidgNipByNipNfzQueuesRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Registers.GetCeidgNipByNipNfzQueuesError>`
- **Wire**: `GET /ceidg/nip/{nip}/nfz-queues`
- **Auth**: any of `apiKeyAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `CompabaseError` with `kind: "api"`, an instance of `Registers.GetCeidgNipByNipNfzQueuesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [404] `ErrorResponse` · `"errorResponse2"` [400] `ErrorResponse` · `"errorResponse3"` [401] `ErrorResponse` · `"errorResponse4"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Registers.GetCeidgNipByNipNfzQueuesRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `nip` | `path` | `string` | yes | — |
| `service` | `query` | `string` | no | — |
| `town` | `query` | `string` | no | — |
| `limit` | `query` | `number` | no | `50` |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getCeidgNipByNipProcurementCounterparties

- **Signature**: `getCeidgNipByNipProcurementCounterparties(request: Registers.GetCeidgNipByNipProcurementCounterpartiesRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Registers.GetCeidgNipByNipProcurementCounterpartiesError>`
- **Wire**: `GET /ceidg/nip/{nip}/procurement-counterparties`
- **Auth**: any of `apiKeyAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `CompabaseError` with `kind: "api"`, an instance of `Registers.GetCeidgNipByNipProcurementCounterpartiesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [404] `ErrorResponse` · `"errorResponse2"` [400] `ErrorResponse` · `"errorResponse3"` [401] `ErrorResponse` · `"errorResponse4"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Registers.GetCeidgNipByNipProcurementCounterpartiesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `nip` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getCeidgNipByNipWebsiteFacts

- **Signature**: `getCeidgNipByNipWebsiteFacts(request: Registers.GetCeidgNipByNipWebsiteFactsRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Registers.GetCeidgNipByNipWebsiteFactsError>`
- **Wire**: `GET /ceidg/nip/{nip}/website-facts`
- **Auth**: any of `apiKeyAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `CompabaseError` with `kind: "api"`, an instance of `Registers.GetCeidgNipByNipWebsiteFactsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [404] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Registers.GetCeidgNipByNipWebsiteFactsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `nip` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getCompaniesKrsByKrsBeneficiaries

- **Signature**: `getCompaniesKrsByKrsBeneficiaries(request: Registers.GetCompaniesKrsByKrsBeneficiariesRequest, options?: RequestOptions): ApiPromise<CompaniesKrsBeneficiariesResponse, Registers.GetCompaniesKrsByKrsBeneficiariesError>`
- **Wire**: `GET /companies/krs/{krs}/beneficiaries`
- **Auth**: any of `apiKeyAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CompaniesKrsBeneficiariesResponse`
- **Error**: `CompabaseError` with `kind: "api"`, an instance of `Registers.GetCompaniesKrsByKrsBeneficiariesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [404] `ErrorResponse` · `"errorResponse2"` [400] `ErrorResponse` · `"errorResponse3"` [401] `ErrorResponse` · `"errorResponse4"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Registers.GetCompaniesKrsByKrsBeneficiariesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `krs` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CompaniesKrsBeneficiariesResponse` | `companiesKrsBeneficiariesResponseSchema` | `src/models/companies-krs-beneficiaries-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getCompaniesKrsByKrsCourtGazette

- **Signature**: `getCompaniesKrsByKrsCourtGazette(request: Registers.GetCompaniesKrsByKrsCourtGazetteRequest, options?: RequestOptions): ApiPromise<CompaniesKrsCourtGazetteResponse, Registers.GetCompaniesKrsByKrsCourtGazetteError>`
- **Wire**: `GET /companies/krs/{krs}/court-gazette`
- **Auth**: any of `apiKeyAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CompaniesKrsCourtGazetteResponse`
- **Error**: `CompabaseError` with `kind: "api"`, an instance of `Registers.GetCompaniesKrsByKrsCourtGazetteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [404] `ErrorResponse` · `"errorResponse2"` [400] `ErrorResponse` · `"errorResponse3"` [401] `ErrorResponse` · `"errorResponse4"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Registers.GetCompaniesKrsByKrsCourtGazetteRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `krs` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CompaniesKrsCourtGazetteResponse` | `companiesKrsCourtGazetteResponseSchema` | `src/models/companies-krs-court-gazette-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getCompaniesKrsByKrsEnergyLicenses

- **Signature**: `getCompaniesKrsByKrsEnergyLicenses(request: Registers.GetCompaniesKrsByKrsEnergyLicensesRequest, options?: RequestOptions): ApiPromise<CompaniesKrsEnergyLicensesResponse, Registers.GetCompaniesKrsByKrsEnergyLicensesError>`
- **Wire**: `GET /companies/krs/{krs}/energy-licenses`
- **Auth**: any of `apiKeyAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CompaniesKrsEnergyLicensesResponse`
- **Error**: `CompabaseError` with `kind: "api"`, an instance of `Registers.GetCompaniesKrsByKrsEnergyLicensesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [404] `ErrorResponse` · `"errorResponse2"` [400] `ErrorResponse` · `"errorResponse3"` [401] `ErrorResponse` · `"errorResponse4"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Registers.GetCompaniesKrsByKrsEnergyLicensesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `krs` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CompaniesKrsEnergyLicensesResponse` | `companiesKrsEnergyLicensesResponseSchema` | `src/models/companies-krs-energy-licenses-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getCompaniesKrsByKrsEuFunds

- **Signature**: `getCompaniesKrsByKrsEuFunds(request: Registers.GetCompaniesKrsByKrsEuFundsRequest, options?: RequestOptions): ApiPromise<CompaniesKrsEuFundsResponse, Registers.GetCompaniesKrsByKrsEuFundsError>`
- **Wire**: `GET /companies/krs/{krs}/eu-funds`
- **Auth**: any of `apiKeyAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CompaniesKrsEuFundsResponse`
- **Error**: `CompabaseError` with `kind: "api"`, an instance of `Registers.GetCompaniesKrsByKrsEuFundsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [404] `ErrorResponse` · `"errorResponse2"` [400] `ErrorResponse` · `"errorResponse3"` [401] `ErrorResponse` · `"errorResponse4"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Registers.GetCompaniesKrsByKrsEuFundsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `krs` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CompaniesKrsEuFundsResponse` | `companiesKrsEuFundsResponseSchema` | `src/models/companies-krs-eu-funds-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getCompaniesKrsByKrsEuGrants

- **Signature**: `getCompaniesKrsByKrsEuGrants(request: Registers.GetCompaniesKrsByKrsEuGrantsRequest, options?: RequestOptions): ApiPromise<CompaniesKrsEuGrantsResponse, Registers.GetCompaniesKrsByKrsEuGrantsError>`
- **Wire**: `GET /companies/krs/{krs}/eu-grants`
- **Auth**: any of `apiKeyAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CompaniesKrsEuGrantsResponse`
- **Error**: `CompabaseError` with `kind: "api"`, an instance of `Registers.GetCompaniesKrsByKrsEuGrantsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [404] `ErrorResponse` · `"errorResponse2"` [400] `ErrorResponse` · `"errorResponse3"` [401] `ErrorResponse` · `"errorResponse4"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Registers.GetCompaniesKrsByKrsEuGrantsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `krs` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CompaniesKrsEuGrantsResponse` | `companiesKrsEuGrantsResponseSchema` | `src/models/companies-krs-eu-grants-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getCompaniesKrsByKrsFilingTimeliness

- **Signature**: `getCompaniesKrsByKrsFilingTimeliness(request: Registers.GetCompaniesKrsByKrsFilingTimelinessRequest, options?: RequestOptions): ApiPromise<CompaniesKrsFilingTimelinessResponse, Registers.GetCompaniesKrsByKrsFilingTimelinessError>`
- **Wire**: `GET /companies/krs/{krs}/filing-timeliness`
- **Auth**: any of `apiKeyAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CompaniesKrsFilingTimelinessResponse`
- **Error**: `CompabaseError` with `kind: "api"`, an instance of `Registers.GetCompaniesKrsByKrsFilingTimelinessError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [404] `ErrorResponse` · `"errorResponse2"` [400] `ErrorResponse` · `"errorResponse3"` [401] `ErrorResponse` · `"errorResponse4"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Registers.GetCompaniesKrsByKrsFilingTimelinessRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `krs` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CompaniesKrsFilingTimelinessResponse` | `companiesKrsFilingTimelinessResponseSchema` | `src/models/companies-krs-filing-timeliness-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getCompaniesKrsByKrsFinancialLicenses

- **Signature**: `getCompaniesKrsByKrsFinancialLicenses(request: Registers.GetCompaniesKrsByKrsFinancialLicensesRequest, options?: RequestOptions): ApiPromise<CompaniesKrsFinancialLicensesResponse, Registers.GetCompaniesKrsByKrsFinancialLicensesError>`
- **Wire**: `GET /companies/krs/{krs}/financial-licenses`
- **Auth**: any of `apiKeyAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CompaniesKrsFinancialLicensesResponse`
- **Error**: `CompabaseError` with `kind: "api"`, an instance of `Registers.GetCompaniesKrsByKrsFinancialLicensesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [404] `ErrorResponse` · `"errorResponse2"` [400] `ErrorResponse` · `"errorResponse3"` [401] `ErrorResponse` · `"errorResponse4"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Registers.GetCompaniesKrsByKrsFinancialLicensesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `krs` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CompaniesKrsFinancialLicensesResponse` | `companiesKrsFinancialLicensesResponseSchema` | `src/models/companies-krs-financial-licenses-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getCompaniesKrsByKrsGpw

- **Signature**: `getCompaniesKrsByKrsGpw(request: Registers.GetCompaniesKrsByKrsGpwRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Registers.GetCompaniesKrsByKrsGpwError>`
- **Wire**: `GET /companies/krs/{krs}/gpw`
- **Auth**: any of `apiKeyAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `CompabaseError` with `kind: "api"`, an instance of `Registers.GetCompaniesKrsByKrsGpwError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [404] `ErrorResponse` · `"errorResponse2"` [400] `ErrorResponse` · `"errorResponse3"` [401] `ErrorResponse` · `"errorResponse4"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Registers.GetCompaniesKrsByKrsGpwRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `krs` | `path` | — | `string` | yes | — |
| `include` | `query` | — | `string` | no | — |
| `seriesLimit` | `query` | `series_limit` | `number` | no | `250` |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getCompaniesKrsByKrsInsolvency

- **Signature**: `getCompaniesKrsByKrsInsolvency(request: Registers.GetCompaniesKrsByKrsInsolvencyRequest, options?: RequestOptions): ApiPromise<CompaniesKrsInsolvencyResponse, Registers.GetCompaniesKrsByKrsInsolvencyError>`
- **Wire**: `GET /companies/krs/{krs}/insolvency`
- **Auth**: any of `apiKeyAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CompaniesKrsInsolvencyResponse`
- **Error**: `CompabaseError` with `kind: "api"`, an instance of `Registers.GetCompaniesKrsByKrsInsolvencyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [404] `ErrorResponse` · `"errorResponse2"` [400] `ErrorResponse` · `"errorResponse3"` [401] `ErrorResponse` · `"errorResponse4"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Registers.GetCompaniesKrsByKrsInsolvencyRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `krs` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CompaniesKrsInsolvencyResponse` | `companiesKrsInsolvencyResponseSchema` | `src/models/companies-krs-insolvency-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getCompaniesKrsByKrsNfzContracts

- **Signature**: `getCompaniesKrsByKrsNfzContracts(request: Registers.GetCompaniesKrsByKrsNfzContractsRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Registers.GetCompaniesKrsByKrsNfzContractsError>`
- **Wire**: `GET /companies/krs/{krs}/nfz-contracts`
- **Auth**: any of `apiKeyAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `CompabaseError` with `kind: "api"`, an instance of `Registers.GetCompaniesKrsByKrsNfzContractsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [404] `ErrorResponse` · `"errorResponse2"` [400] `ErrorResponse` · `"errorResponse3"` [401] `ErrorResponse` · `"errorResponse4"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Registers.GetCompaniesKrsByKrsNfzContractsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `krs` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getCompaniesKrsByKrsNfzQueues

- **Signature**: `getCompaniesKrsByKrsNfzQueues(request: Registers.GetCompaniesKrsByKrsNfzQueuesRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Registers.GetCompaniesKrsByKrsNfzQueuesError>`
- **Wire**: `GET /companies/krs/{krs}/nfz-queues`
- **Auth**: any of `apiKeyAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `CompabaseError` with `kind: "api"`, an instance of `Registers.GetCompaniesKrsByKrsNfzQueuesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [404] `ErrorResponse` · `"errorResponse2"` [400] `ErrorResponse` · `"errorResponse3"` [401] `ErrorResponse` · `"errorResponse4"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Registers.GetCompaniesKrsByKrsNfzQueuesRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `krs` | `path` | `string` | yes | — |
| `service` | `query` | `string` | no | — |
| `town` | `query` | `string` | no | — |
| `limit` | `query` | `number` | no | `50` |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getCompaniesKrsByKrsProcurementCounterparties

- **Signature**: `getCompaniesKrsByKrsProcurementCounterparties(request: Registers.GetCompaniesKrsByKrsProcurementCounterpartiesRequest, options?: RequestOptions): ApiPromise<CompaniesKrsProcurementCounterpartiesResponse, Registers.GetCompaniesKrsByKrsProcurementCounterpartiesError>`
- **Wire**: `GET /companies/krs/{krs}/procurement-counterparties`
- **Auth**: any of `apiKeyAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CompaniesKrsProcurementCounterpartiesResponse`
- **Error**: `CompabaseError` with `kind: "api"`, an instance of `Registers.GetCompaniesKrsByKrsProcurementCounterpartiesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [404] `ErrorResponse` · `"errorResponse2"` [400] `ErrorResponse` · `"errorResponse3"` [401] `ErrorResponse` · `"errorResponse4"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Registers.GetCompaniesKrsByKrsProcurementCounterpartiesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `krs` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CompaniesKrsProcurementCounterpartiesResponse` | `companiesKrsProcurementCounterpartiesResponseSchema` | `src/models/companies-krs-procurement-counterparties-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getCompaniesKrsByKrsPublicAid

- **Signature**: `getCompaniesKrsByKrsPublicAid(request: Registers.GetCompaniesKrsByKrsPublicAidRequest, options?: RequestOptions): ApiPromise<CompaniesKrsPublicAidResponse, Registers.GetCompaniesKrsByKrsPublicAidError>`
- **Wire**: `GET /companies/krs/{krs}/public-aid`
- **Auth**: any of `apiKeyAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CompaniesKrsPublicAidResponse`
- **Error**: `CompabaseError` with `kind: "api"`, an instance of `Registers.GetCompaniesKrsByKrsPublicAidError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [404] `ErrorResponse` · `"errorResponse2"` [400] `ErrorResponse` · `"errorResponse3"` [401] `ErrorResponse` · `"errorResponse4"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Registers.GetCompaniesKrsByKrsPublicAidRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `krs` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CompaniesKrsPublicAidResponse` | `companiesKrsPublicAidResponseSchema` | `src/models/companies-krs-public-aid-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getCompaniesKrsByKrsRealEstate

- **Signature**: `getCompaniesKrsByKrsRealEstate(request: Registers.GetCompaniesKrsByKrsRealEstateRequest, options?: RequestOptions): ApiPromise<CompaniesKrsRealEstateResponse, Registers.GetCompaniesKrsByKrsRealEstateError>`
- **Wire**: `GET /companies/krs/{krs}/real-estate`
- **Auth**: any of `apiKeyAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CompaniesKrsRealEstateResponse`
- **Error**: `CompabaseError` with `kind: "api"`, an instance of `Registers.GetCompaniesKrsByKrsRealEstateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [404] `ErrorResponse` · `"errorResponse2"` [400] `ErrorResponse` · `"errorResponse3"` [401] `ErrorResponse` · `"errorResponse4"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Registers.GetCompaniesKrsByKrsRealEstateRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `krs` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CompaniesKrsRealEstateResponse` | `companiesKrsRealEstateResponseSchema` | `src/models/companies-krs-real-estate-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getCompaniesKrsByKrsSanctions

- **Signature**: `getCompaniesKrsByKrsSanctions(request: Registers.GetCompaniesKrsByKrsSanctionsRequest, options?: RequestOptions): ApiPromise<CompaniesKrsSanctionsResponse, Registers.GetCompaniesKrsByKrsSanctionsError>`
- **Wire**: `GET /companies/krs/{krs}/sanctions`
- **Auth**: any of `apiKeyAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CompaniesKrsSanctionsResponse`
- **Error**: `CompabaseError` with `kind: "api"`, an instance of `Registers.GetCompaniesKrsByKrsSanctionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [404] `ErrorResponse` · `"errorResponse2"` [400] `ErrorResponse` · `"errorResponse3"` [401] `ErrorResponse` · `"errorResponse4"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Registers.GetCompaniesKrsByKrsSanctionsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `krs` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CompaniesKrsSanctionsResponse` | `companiesKrsSanctionsResponseSchema` | `src/models/companies-krs-sanctions-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getCompaniesKrsByKrsSecuredLiabilities

- **Signature**: `getCompaniesKrsByKrsSecuredLiabilities(request: Registers.GetCompaniesKrsByKrsSecuredLiabilitiesRequest, options?: RequestOptions): ApiPromise<CompaniesKrsSecuredLiabilitiesResponse, Registers.GetCompaniesKrsByKrsSecuredLiabilitiesError>`
- **Wire**: `GET /companies/krs/{krs}/secured-liabilities`
- **Auth**: any of `apiKeyAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CompaniesKrsSecuredLiabilitiesResponse`
- **Error**: `CompabaseError` with `kind: "api"`, an instance of `Registers.GetCompaniesKrsByKrsSecuredLiabilitiesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [404] `ErrorResponse` · `"errorResponse2"` [400] `ErrorResponse` · `"errorResponse3"` [401] `ErrorResponse` · `"errorResponse4"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Registers.GetCompaniesKrsByKrsSecuredLiabilitiesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `krs` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CompaniesKrsSecuredLiabilitiesResponse` | `companiesKrsSecuredLiabilitiesResponseSchema` | `src/models/companies-krs-secured-liabilities-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getCompaniesKrsByKrsTenders

- **Signature**: `getCompaniesKrsByKrsTenders(request: Registers.GetCompaniesKrsByKrsTendersRequest, options?: RequestOptions): ApiPromise<CompaniesKrsTendersResponse, Registers.GetCompaniesKrsByKrsTendersError>`
- **Wire**: `GET /companies/krs/{krs}/tenders`
- **Auth**: any of `apiKeyAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CompaniesKrsTendersResponse`
- **Error**: `CompabaseError` with `kind: "api"`, an instance of `Registers.GetCompaniesKrsByKrsTendersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [404] `ErrorResponse` · `"errorResponse2"` [400] `ErrorResponse` · `"errorResponse3"` [401] `ErrorResponse` · `"errorResponse4"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Registers.GetCompaniesKrsByKrsTendersRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `krs` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CompaniesKrsTendersResponse` | `companiesKrsTendersResponseSchema` | `src/models/companies-krs-tenders-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getCompaniesKrsByKrsWasteRegistry

- **Signature**: `getCompaniesKrsByKrsWasteRegistry(request: Registers.GetCompaniesKrsByKrsWasteRegistryRequest, options?: RequestOptions): ApiPromise<CompaniesKrsWasteRegistryResponse, Registers.GetCompaniesKrsByKrsWasteRegistryError>`
- **Wire**: `GET /companies/krs/{krs}/waste-registry`
- **Auth**: any of `apiKeyAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CompaniesKrsWasteRegistryResponse`
- **Error**: `CompabaseError` with `kind: "api"`, an instance of `Registers.GetCompaniesKrsByKrsWasteRegistryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [404] `ErrorResponse` · `"errorResponse2"` [400] `ErrorResponse` · `"errorResponse3"` [401] `ErrorResponse` · `"errorResponse4"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Registers.GetCompaniesKrsByKrsWasteRegistryRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `krs` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CompaniesKrsWasteRegistryResponse` | `companiesKrsWasteRegistryResponseSchema` | `src/models/companies-krs-waste-registry-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getCompaniesKrsByKrsWebsiteFacts

- **Signature**: `getCompaniesKrsByKrsWebsiteFacts(request: Registers.GetCompaniesKrsByKrsWebsiteFactsRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Registers.GetCompaniesKrsByKrsWebsiteFactsError>`
- **Wire**: `GET /companies/krs/{krs}/website-facts`
- **Auth**: any of `apiKeyAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `CompabaseError` with `kind: "api"`, an instance of `Registers.GetCompaniesKrsByKrsWebsiteFactsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [404] `ErrorResponse` · `"errorResponse2"` [400] `ErrorResponse` · `"errorResponse3"` [401] `ErrorResponse` · `"errorResponse4"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Registers.GetCompaniesKrsByKrsWebsiteFactsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `krs` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

