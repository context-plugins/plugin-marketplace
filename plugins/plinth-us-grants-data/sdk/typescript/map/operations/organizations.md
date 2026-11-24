<!-- Generated file — do not edit; regenerated with the SDK. -->

# Organizations — operations

Accessor: `client.organizations` · Source: `src/resources/organizations.ts` · 10 operations · Request and error types: namespace `Organizations`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `plinth-us-grants-data`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getApiV1EssentialsByEin

- **Signature**: `getApiV1EssentialsByEin(request: Organizations.GetApiV1EssentialsByEinRequest, options?: RequestOptions): ApiPromise<EssentialsResponse, Organizations.GetApiV1EssentialsByEinError>`
- **Wire**: `GET /api/v1/essentials/{ein}`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EssentialsResponse`
- **Error**: `PlinthUsGrantsDataError` with `kind: "api"`, an instance of `Organizations.GetApiV1EssentialsByEinError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [401] `ApiErrorModel` · `"apiErrorModel2"` [402] `ApiErrorModel` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.GetApiV1EssentialsByEinRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `ein` | `path` | `string` | yes |
| `format` | `query` | `Format1` | no |
| `example` | `query` | `Example1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format1` | `format1Schema` | `src/models/unions/format1.ts` |
| `Example1` | `example1Schema` | `src/models/example1.ts` |
| `EssentialsResponse` | `essentialsResponseSchema` | `src/models/essentials-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### getApiV1PremierByEin

- **Signature**: `getApiV1PremierByEin(request: Organizations.GetApiV1PremierByEinRequest, options?: RequestOptions): ApiPromise<PremierResponse, Organizations.GetApiV1PremierByEinError>`
- **Wire**: `GET /api/v1/premier/{ein}`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PremierResponse`
- **Error**: `PlinthUsGrantsDataError` with `kind: "api"`, an instance of `Organizations.GetApiV1PremierByEinError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [401] `ApiErrorModel` · `"apiErrorModel2"` [402] `ApiErrorModel` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.GetApiV1PremierByEinRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `ein` | `path` | `string` | yes |
| `format` | `query` | `Format1` | no |
| `example` | `query` | `Example1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format1` | `format1Schema` | `src/models/unions/format1.ts` |
| `Example1` | `example1Schema` | `src/models/example1.ts` |
| `PremierResponse` | `premierResponseSchema` | `src/models/premier-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### getApiV1ScreeningByEin

- **Signature**: `getApiV1ScreeningByEin(request: Organizations.GetApiV1ScreeningByEinRequest, options?: RequestOptions): ApiPromise<ComplianceResponse, Organizations.GetApiV1ScreeningByEinError>`
- **Wire**: `GET /api/v1/screening/{ein}`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ComplianceResponse`
- **Error**: `PlinthUsGrantsDataError` with `kind: "api"`, an instance of `Organizations.GetApiV1ScreeningByEinError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [401] `ApiErrorModel` · `"apiErrorModel2"` [402] `ApiErrorModel` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.GetApiV1ScreeningByEinRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `ein` | `path` | `string` | yes |
| `format` | `query` | `Format1` | no |
| `compat` | `query` | `Compat` | no |
| `example` | `query` | `ExamplePlinthUsGrantsDataOrganizationsApi` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format1` | `format1Schema` | `src/models/unions/format1.ts` |
| `Compat` | `compatSchema` | `src/models/unions/compat.ts` |
| `ExamplePlinthUsGrantsDataOrganizationsApi` | `examplePlinthUsGrantsDataOrganizationsApiSchema` | `src/models/example-plinth-us-grants-data-organizations-api.ts` |
| `ComplianceResponse` | `complianceResponseSchema` | `src/models/compliance-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### getCompliance

- **Signature**: `getCompliance(request: Organizations.GetComplianceRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Organizations.GetComplianceError>`
- **Wire**: `GET /api/compliance/{ein}`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `PlinthUsGrantsDataError` with `kind: "api"`, an instance of `Organizations.GetComplianceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [401] `ApiErrorModel` · `"apiErrorModel2"` [402] `ApiErrorModel` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.GetComplianceRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `ein` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### getComplianceBulk

- **Signature**: `getComplianceBulk(request: Organizations.GetComplianceBulkRequest, options?: RequestOptions): ApiPromise<BulkComplianceResponse, Organizations.GetComplianceBulkError>`
- **Wire**: `POST /api/v1/screening/bulk`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BulkComplianceResponse`
- **Error**: `PlinthUsGrantsDataError` with `kind: "api"`, an instance of `Organizations.GetComplianceBulkError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [401] `ApiErrorModel` · `"apiErrorModel2"` [402] `ApiErrorModel` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.GetComplianceBulkRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `compat` | `query` | `Compat` | no |
| `body` | `body` | `BulkCompliance` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Compat` | `compatSchema` | `src/models/unions/compat.ts` |
| `BulkCompliance` | `bulkComplianceSchema` | `src/models/bulk-compliance.ts` |
| `BulkComplianceResponse` | `bulkComplianceResponseSchema` | `src/models/bulk-compliance-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### getEssentials

- **Signature**: `getEssentials(request: Organizations.GetEssentialsRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Organizations.GetEssentialsError>`
- **Wire**: `GET /api/essentials/{ein}`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `PlinthUsGrantsDataError` with `kind: "api"`, an instance of `Organizations.GetEssentialsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [401] `ApiErrorModel` · `"apiErrorModel2"` [402] `ApiErrorModel` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.GetEssentialsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `ein` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### getGovFunding

- **Signature**: `getGovFunding(request: Organizations.GetGovFundingRequest, options?: RequestOptions): ApiPromise<GovFundingResponse, Organizations.GetGovFundingError>`
- **Wire**: `GET /api/v1/gov-funding/{ein}`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GovFundingResponse`
- **Error**: `PlinthUsGrantsDataError` with `kind: "api"`, an instance of `Organizations.GetGovFundingError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [401] `ApiErrorModel` · `"apiErrorModel2"` [402] `ApiErrorModel` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.GetGovFundingRequest` (7):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `ein` | `path` | — | `string` | yes | — |
| `format` | `query` | — | `Format1` | no | — |
| `fiscalYear` | `query` | `fiscal_year` | `FiscalYear` | no | — |
| `kind` | `query` | — | `KindVariantYqwpsz` | no | — |
| `state` | `query` | — | `State1` | no | — |
| `limit` | `query` | — | `number` | no | `200` |
| `example` | `query` | — | `Example1` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format1` | `format1Schema` | `src/models/unions/format1.ts` |
| `FiscalYear` | `fiscalYearSchema` | `src/models/unions/fiscal-year.ts` |
| `KindVariantYqwpsz` | `kindVariantYqwpszSchema` | `src/models/unions/kind-variant-yqwpsz.ts` |
| `State1` | `state1Schema` | `src/models/unions/state1.ts` |
| `Example1` | `example1Schema` | `src/models/example1.ts` |
| `GovFundingResponse` | `govFundingResponseSchema` | `src/models/gov-funding-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### getPremier

- **Signature**: `getPremier(request: Organizations.GetPremierRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Organizations.GetPremierError>`
- **Wire**: `GET /api/premier/{ein}`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `PlinthUsGrantsDataError` with `kind: "api"`, an instance of `Organizations.GetPremierError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [401] `ApiErrorModel` · `"apiErrorModel2"` [402] `ApiErrorModel` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.GetPremierRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `ein` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### searchEssentials

- **Signature**: `searchEssentials(request: Organizations.SearchEssentialsRequest, options?: RequestOptions): ApiPromise<EssentialsSearchResponse, Organizations.SearchEssentialsError>`
- **Wire**: `POST /api/v1/essentials`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `EssentialsSearchResponse`
- **Error**: `PlinthUsGrantsDataError` with `kind: "api"`, an instance of `Organizations.SearchEssentialsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [401] `ApiErrorModel` · `"apiErrorModel2"` [402] `ApiErrorModel` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.SearchEssentialsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `jurisdiction` | `query` | `Jurisdiction` | no |
| `body` | `body` | `EssentialsSearch` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Jurisdiction` | `jurisdictionSchema` | `src/models/unions/jurisdiction.ts` |
| `EssentialsSearch` | `essentialsSearchSchema` | `src/models/essentials-search.ts` |
| `EssentialsSearchResponse` | `essentialsSearchResponseSchema` | `src/models/essentials-search-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### verifyComplianceReport

- **Signature**: `verifyComplianceReport(request: Organizations.VerifyComplianceReportRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Organizations.VerifyComplianceReportError>`
- **Wire**: `POST /api/v1/screening/verify`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `PlinthUsGrantsDataError` with `kind: "api"`, an instance of `Organizations.VerifyComplianceReportError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.VerifyComplianceReportRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `VerifyReport` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `VerifyReport` | `verifyReportSchema` | `src/models/verify-report.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

