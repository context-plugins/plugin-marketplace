<!-- Generated file — do not edit; regenerated with the SDK. -->

# Organizations — operations

Accessor: `client.organizations` · Source: `plinth_us_grants_data/apis/organizations.py` · 10 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.organizations.get_api_v1_essentials_by_ein

- **Route**: `GET /api/v1/essentials/{ein}`
- **Auth**: `api_key_auth`
- **Signature**: `def get_api_v1_essentials_by_ein(ein: str, *, format_: FormatOrStr | None = None, example: Example1OrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `ein`
- **Params**: `ein` — path · `format_` — query `format` · `example` — query
- **Returns (parsed)**: `EssentialsResponse`
- **Returns (raw)**: `ApiResult[EssentialsResponse, GetApiV1EssentialsByEinErrorBody]`
- **Error**: `GetApiV1EssentialsByEinErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorModel` [401, 402] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `FormatOrStr` | `plinth_us_grants_data/models/enums/format.py` |
| `Example1OrStr` | `plinth_us_grants_data/models/enums/example1.py` |
| `EssentialsResponse` | `plinth_us_grants_data/models/essentials_response.py` |
| `GetApiV1EssentialsByEinErrorBody` | `plinth_us_grants_data/errors/get_api_v1_essentials_by_ein_error.py` |
| `ApiErrorModel` | `plinth_us_grants_data/models/api_error_model.py` |
| `HttpValidationError` | `plinth_us_grants_data/models/http_validation_error.py` |

### client.organizations.get_api_v1_premier_by_ein

- **Route**: `GET /api/v1/premier/{ein}`
- **Auth**: `api_key_auth`
- **Signature**: `def get_api_v1_premier_by_ein(ein: str, *, format_: FormatOrStr | None = None, example: Example1OrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `ein`
- **Params**: `ein` — path · `format_` — query `format` · `example` — query
- **Returns (parsed)**: `PremierResponse`
- **Returns (raw)**: `ApiResult[PremierResponse, GetApiV1PremierByEinErrorBody]`
- **Error**: `GetApiV1PremierByEinErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorModel` [401, 402] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `FormatOrStr` | `plinth_us_grants_data/models/enums/format.py` |
| `Example1OrStr` | `plinth_us_grants_data/models/enums/example1.py` |
| `PremierResponse` | `plinth_us_grants_data/models/premier_response.py` |
| `GetApiV1PremierByEinErrorBody` | `plinth_us_grants_data/errors/get_api_v1_premier_by_ein_error.py` |
| `ApiErrorModel` | `plinth_us_grants_data/models/api_error_model.py` |
| `HttpValidationError` | `plinth_us_grants_data/models/http_validation_error.py` |

### client.organizations.get_api_v1_screening_by_ein

- **Route**: `GET /api/v1/screening/{ein}`
- **Auth**: `api_key_auth`
- **Signature**: `def get_api_v1_screening_by_ein(ein: str, *, format_: FormatOrStr | None = None, compat: str | None = None, example: ExamplePlinthUsGrantsDataOrganizationsApiOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `ein`
- **Params**: `ein` — path · `format_` — query `format` · `compat` — query · `example` — query
- **Returns (parsed)**: `ComplianceResponse`
- **Returns (raw)**: `ApiResult[ComplianceResponse, GetApiV1ScreeningByEinErrorBody]`
- **Error**: `GetApiV1ScreeningByEinErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorModel` [401, 402] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `FormatOrStr` | `plinth_us_grants_data/models/enums/format.py` |
| `ExamplePlinthUsGrantsDataOrganizationsApiOrStr` | `plinth_us_grants_data/models/enums/example_plinth_us_grants_data_organizations_api.py` |
| `ComplianceResponse` | `plinth_us_grants_data/models/compliance_response.py` |
| `GetApiV1ScreeningByEinErrorBody` | `plinth_us_grants_data/errors/get_api_v1_screening_by_ein_error.py` |
| `ApiErrorModel` | `plinth_us_grants_data/models/api_error_model.py` |
| `HttpValidationError` | `plinth_us_grants_data/models/http_validation_error.py` |

### client.organizations.get_compliance

- **Route**: `GET /api/compliance/{ein}`
- **Auth**: `api_key_auth`
- **Signature**: `def get_compliance(ein: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `ein`
- **Params**: `ein` — path
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, GetComplianceErrorBody]`
- **Error**: `GetComplianceErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorModel` [401, 402] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetComplianceErrorBody` | `plinth_us_grants_data/errors/get_compliance_error.py` |
| `ApiErrorModel` | `plinth_us_grants_data/models/api_error_model.py` |
| `HttpValidationError` | `plinth_us_grants_data/models/http_validation_error.py` |

### client.organizations.get_compliance_bulk

- **Route**: `POST /api/v1/screening/bulk`
- **Auth**: `api_key_auth`
- **Signature**: `def get_compliance_bulk(body: BulkCompliance | BulkComplianceDict, *, compat: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `compat` — query · `body` — JSON body
- **Returns (parsed)**: `BulkComplianceResponse`
- **Returns (raw)**: `ApiResult[BulkComplianceResponse, GetComplianceBulkErrorBody]`
- **Error**: `GetComplianceBulkErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorModel` [401, 402] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BulkCompliance` | `plinth_us_grants_data/models/bulk_compliance.py` |
| `BulkComplianceDict` | `plinth_us_grants_data/models/bulk_compliance.py` |
| `BulkComplianceResponse` | `plinth_us_grants_data/models/bulk_compliance_response.py` |
| `GetComplianceBulkErrorBody` | `plinth_us_grants_data/errors/get_compliance_bulk_error.py` |
| `ApiErrorModel` | `plinth_us_grants_data/models/api_error_model.py` |
| `HttpValidationError` | `plinth_us_grants_data/models/http_validation_error.py` |

### client.organizations.get_essentials

- **Route**: `GET /api/essentials/{ein}`
- **Auth**: `api_key_auth`
- **Signature**: `def get_essentials(ein: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `ein`
- **Params**: `ein` — path
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, GetEssentialsErrorBody]`
- **Error**: `GetEssentialsErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorModel` [401, 402] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetEssentialsErrorBody` | `plinth_us_grants_data/errors/get_essentials_error.py` |
| `ApiErrorModel` | `plinth_us_grants_data/models/api_error_model.py` |
| `HttpValidationError` | `plinth_us_grants_data/models/http_validation_error.py` |

### client.organizations.get_gov_funding

- **Route**: `GET /api/v1/gov-funding/{ein}`
- **Auth**: `api_key_auth`
- **Signature**: `def get_gov_funding(ein: str, *, format_: FormatOrStr | None = None, fiscal_year: int | None = None, kind: str | None = None, state: str | None = None, limit: int | None = 200, example: Example1OrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `ein`
- **Params**: `ein` — path · `format_` — query `format` · `fiscal_year` — query · `kind` — query · `state` — query · `limit` — query · `example` — query
- **Returns (parsed)**: `GovFundingResponse`
- **Returns (raw)**: `ApiResult[GovFundingResponse, GetGovFundingErrorBody]`
- **Error**: `GetGovFundingErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorModel` [401, 402] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `FormatOrStr` | `plinth_us_grants_data/models/enums/format.py` |
| `Example1OrStr` | `plinth_us_grants_data/models/enums/example1.py` |
| `GovFundingResponse` | `plinth_us_grants_data/models/gov_funding_response.py` |
| `GetGovFundingErrorBody` | `plinth_us_grants_data/errors/get_gov_funding_error.py` |
| `ApiErrorModel` | `plinth_us_grants_data/models/api_error_model.py` |
| `HttpValidationError` | `plinth_us_grants_data/models/http_validation_error.py` |

### client.organizations.get_premier

- **Route**: `GET /api/premier/{ein}`
- **Auth**: `api_key_auth`
- **Signature**: `def get_premier(ein: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `ein`
- **Params**: `ein` — path
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, GetPremierErrorBody]`
- **Error**: `GetPremierErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorModel` [401, 402] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetPremierErrorBody` | `plinth_us_grants_data/errors/get_premier_error.py` |
| `ApiErrorModel` | `plinth_us_grants_data/models/api_error_model.py` |
| `HttpValidationError` | `plinth_us_grants_data/models/http_validation_error.py` |

### client.organizations.search_essentials

- **Route**: `POST /api/v1/essentials`
- **Auth**: `api_key_auth`
- **Signature**: `def search_essentials(body: EssentialsSearch | EssentialsSearchDict, *, jurisdiction: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `jurisdiction` — query · `body` — JSON body
- **Returns (parsed)**: `EssentialsSearchResponse`
- **Returns (raw)**: `ApiResult[EssentialsSearchResponse, SearchEssentialsErrorBody]`
- **Error**: `SearchEssentialsErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorModel` [401, 402] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `EssentialsSearch` | `plinth_us_grants_data/models/essentials_search.py` |
| `EssentialsSearchDict` | `plinth_us_grants_data/models/essentials_search.py` |
| `EssentialsSearchResponse` | `plinth_us_grants_data/models/essentials_search_response.py` |
| `SearchEssentialsErrorBody` | `plinth_us_grants_data/errors/search_essentials_error.py` |
| `ApiErrorModel` | `plinth_us_grants_data/models/api_error_model.py` |
| `HttpValidationError` | `plinth_us_grants_data/models/http_validation_error.py` |

### client.organizations.verify_compliance_report

- **Route**: `POST /api/v1/screening/verify`
- **Signature**: `def verify_compliance_report(body: VerifyReport | VerifyReportDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, VerifyComplianceReportErrorBody]`
- **Error**: `VerifyComplianceReportErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `VerifyReport` | `plinth_us_grants_data/models/verify_report.py` |
| `VerifyReportDict` | `plinth_us_grants_data/models/verify_report.py` |
| `VerifyComplianceReportErrorBody` | `plinth_us_grants_data/errors/verify_compliance_report_error.py` |
| `HttpValidationError` | `plinth_us_grants_data/models/http_validation_error.py` |

