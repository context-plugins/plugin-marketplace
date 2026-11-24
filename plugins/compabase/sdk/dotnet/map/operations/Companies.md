<!-- Generated file — do not edit; regenerated with the SDK. -->

# Companies — operations

Accessor: `client.Companies` · Source: `src/Compabase/Api/Companies.cs` · 9 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetCeidgNipByNip

- **Auth**: `options.ApiKeyAuth` OR `options.BearerAuth`
- **Signature**: `GetCeidgNipByNip(GetCeidgNipByNipRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Nip`
- **Query params (wire ← C#)**: `locale` ← `Locale`
- **Returns**: `object`
- **Error**: `ApiException<GetCeidgNipByNipError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCeidgNipByNipRequest` | `src/Compabase/Requests/Companies/GetCeidgNipByNipRequest.cs` |
| `Locale` | `src/Compabase/Models/Enums/Locale.cs` |
| `GetCeidgNipByNipError` | `src/Compabase/Errors/GetCeidgNipByNipError.cs` |
| `ErrorResponseModel` | `src/Compabase/Models/ErrorResponseModel.cs` |

### GetCompanies

- **Auth**: `options.ApiKeyAuth` OR `options.BearerAuth`
- **Signature**: `GetCompanies(GetCompaniesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `q` ← `Q`, `keywords` ← `Keywords`, `limit` ← `Limit`, `offset` ← `Offset`, `cursor` ← `Cursor`, `pkd` ← `Pkd`, `primary_only` ← `PrimaryOnly`, `currency` ← `Currency`, `voivodeship` ← `Voivodeship`, `postal_code` ← `PostalCode`, `city` ← `City`, `revenue_min` ← `RevenueMin`, `revenue_max` ← `RevenueMax`, `revenue_operating_min` ← `RevenueOperatingMin`, `revenue_operating_max` ← `RevenueOperatingMax`, `profit_operating_min` ← `ProfitOperatingMin`, `profit_operating_max` ← `ProfitOperatingMax`, `profit_net_min` ← `ProfitNetMin`, `profit_net_max` ← `ProfitNetMax`, `income_tax_min` ← `IncomeTaxMin`, `income_tax_max` ← `IncomeTaxMax`, `cost_wages_min` ← `CostWagesMin`, `cost_wages_max` ← `CostWagesMax`, `cost_amortization_min` ← `CostAmortizationMin`, `cost_amortization_max` ← `CostAmortizationMax`, `total_assets_min` ← `TotalAssetsMin`, `total_assets_max` ← `TotalAssetsMax`, `ebitda_min` ← `EbitdaMin`, `ebitda_max` ← `EbitdaMax`, `capital_min` ← `CapitalMin`, `capital_max` ← `CapitalMax`, `estimated_value_min` ← `EstimatedValueMin`, `estimated_value_max` ← `EstimatedValueMax`, `registration_year_min` ← `RegistrationYearMin`, `registration_year_max` ← `RegistrationYearMax`, `registration_date_min` ← `RegistrationDateMin`, `registration_date_max` ← `RegistrationDateMax`, `last_report_year_min` ← `LastReportYearMin`, `last_report_year_max` ← `LastReportYearMax`, `status_active` ← `StatusActive`, `legal_form` ← `LegalForm`, `has_email` ← `HasEmail`, `has_website` ← `HasWebsite`, `sort` ← `Sort`, `dir` ← `Dir`
- **Returns**: `CompanyListResponse`
- **Error**: `ApiException<GetCompaniesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCompaniesRequest` | `src/Compabase/Requests/Companies/GetCompaniesRequest.cs` |
| `Currency` | `src/Compabase/Models/Enums/Currency.cs` |
| `Sort` | `src/Compabase/Models/Enums/Sort.cs` |
| `Dir` | `src/Compabase/Models/Enums/Dir.cs` |
| `CompanyListResponse` | `src/Compabase/Models/CompanyListResponse.cs` |
| `GetCompaniesError` | `src/Compabase/Errors/GetCompaniesError.cs` |
| `ErrorResponseModel` | `src/Compabase/Models/ErrorResponseModel.cs` |

### GetCompaniesCount

- **Auth**: `options.ApiKeyAuth` OR `options.BearerAuth`
- **Signature**: `GetCompaniesCount(GetCompaniesCountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `q` ← `Q`, `keywords` ← `Keywords`, `pkd` ← `Pkd`, `primary_only` ← `PrimaryOnly`, `currency` ← `Currency`, `voivodeship` ← `Voivodeship`, `postal_code` ← `PostalCode`, `city` ← `City`, `revenue_min` ← `RevenueMin`, `revenue_max` ← `RevenueMax`, `revenue_operating_min` ← `RevenueOperatingMin`, `revenue_operating_max` ← `RevenueOperatingMax`, `profit_operating_min` ← `ProfitOperatingMin`, `profit_operating_max` ← `ProfitOperatingMax`, `profit_net_min` ← `ProfitNetMin`, `profit_net_max` ← `ProfitNetMax`, `income_tax_min` ← `IncomeTaxMin`, `income_tax_max` ← `IncomeTaxMax`, `cost_wages_min` ← `CostWagesMin`, `cost_wages_max` ← `CostWagesMax`, `cost_amortization_min` ← `CostAmortizationMin`, `cost_amortization_max` ← `CostAmortizationMax`, `total_assets_min` ← `TotalAssetsMin`, `total_assets_max` ← `TotalAssetsMax`, `ebitda_min` ← `EbitdaMin`, `ebitda_max` ← `EbitdaMax`, `capital_min` ← `CapitalMin`, `capital_max` ← `CapitalMax`, `estimated_value_min` ← `EstimatedValueMin`, `estimated_value_max` ← `EstimatedValueMax`, `registration_year_min` ← `RegistrationYearMin`, `registration_year_max` ← `RegistrationYearMax`, `registration_date_min` ← `RegistrationDateMin`, `registration_date_max` ← `RegistrationDateMax`, `last_report_year_min` ← `LastReportYearMin`, `last_report_year_max` ← `LastReportYearMax`, `status_active` ← `StatusActive`, `legal_form` ← `LegalForm`, `has_email` ← `HasEmail`, `has_website` ← `HasWebsite`
- **Returns**: `CompanyCountResponse`
- **Error**: `ApiException<GetCompaniesCountError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCompaniesCountRequest` | `src/Compabase/Requests/Companies/GetCompaniesCountRequest.cs` |
| `Currency` | `src/Compabase/Models/Enums/Currency.cs` |
| `CompanyCountResponse` | `src/Compabase/Models/CompanyCountResponse.cs` |
| `GetCompaniesCountError` | `src/Compabase/Errors/GetCompaniesCountError.cs` |
| `ErrorResponseModel` | `src/Compabase/Models/ErrorResponseModel.cs` |

### GetCompaniesExport

- **Auth**: `options.ApiKeyAuth` OR `options.BearerAuth`
- **Signature**: `GetCompaniesExport(GetCompaniesExportRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `q` ← `Q`, `keywords` ← `Keywords`, `limit` ← `Limit`, `offset` ← `Offset`, `cursor` ← `Cursor`, `pkd` ← `Pkd`, `primary_only` ← `PrimaryOnly`, `has_email` ← `HasEmail`, `has_website` ← `HasWebsite`, `status_active` ← `StatusActive`, `revenue_min` ← `RevenueMin`, `revenue_max` ← `RevenueMax`
- **Returns**: `CompanyListResponse`
- **Error**: `ApiException<GetCompaniesExportError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCompaniesExportRequest` | `src/Compabase/Requests/Companies/GetCompaniesExportRequest.cs` |
| `CompanyListResponse` | `src/Compabase/Models/CompanyListResponse.cs` |
| `GetCompaniesExportError` | `src/Compabase/Errors/GetCompaniesExportError.cs` |
| `ErrorResponseModel` | `src/Compabase/Models/ErrorResponseModel.cs` |

### GetCompaniesKrsByKrs

- **Auth**: `options.ApiKeyAuth` OR `options.BearerAuth`
- **Signature**: `GetCompaniesKrsByKrs(GetCompaniesKrsByKrsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Krs`
- **Returns**: `object`
- **Error**: `ApiException<GetCompaniesKrsByKrsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCompaniesKrsByKrsRequest` | `src/Compabase/Requests/Companies/GetCompaniesKrsByKrsRequest.cs` |
| `GetCompaniesKrsByKrsError` | `src/Compabase/Errors/GetCompaniesKrsByKrsError.cs` |
| `ErrorResponseModel` | `src/Compabase/Models/ErrorResponseModel.cs` |

### GetCompaniesKrsByKrsConnections

- **Auth**: `options.ApiKeyAuth` OR `options.BearerAuth`
- **Signature**: `GetCompaniesKrsByKrsConnections(GetCompaniesKrsByKrsConnectionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Krs`
- **Returns**: `object`
- **Error**: `ApiException<GetCompaniesKrsByKrsConnectionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCompaniesKrsByKrsConnectionsRequest` | `src/Compabase/Requests/Companies/GetCompaniesKrsByKrsConnectionsRequest.cs` |
| `GetCompaniesKrsByKrsConnectionsError` | `src/Compabase/Errors/GetCompaniesKrsByKrsConnectionsError.cs` |
| `ErrorResponseModel` | `src/Compabase/Models/ErrorResponseModel.cs` |

### GetCompaniesKrsByKrsGroup

- **Auth**: `options.ApiKeyAuth` OR `options.BearerAuth`
- **Signature**: `GetCompaniesKrsByKrsGroup(GetCompaniesKrsByKrsGroupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Krs`
- **Query params (wire ← C#)**: `limit` ← `Limit`
- **Returns**: `object`
- **Error**: `ApiException<GetCompaniesKrsByKrsGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCompaniesKrsByKrsGroupRequest` | `src/Compabase/Requests/Companies/GetCompaniesKrsByKrsGroupRequest.cs` |
| `GetCompaniesKrsByKrsGroupError` | `src/Compabase/Errors/GetCompaniesKrsByKrsGroupError.cs` |

### GetCompaniesKrsByKrsStatus

- **Auth**: `options.ApiKeyAuth` OR `options.BearerAuth`
- **Signature**: `GetCompaniesKrsByKrsStatus(GetCompaniesKrsByKrsStatusRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Krs`
- **Returns**: `object`
- **Error**: `ApiException<GetCompaniesKrsByKrsStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCompaniesKrsByKrsStatusRequest` | `src/Compabase/Requests/Companies/GetCompaniesKrsByKrsStatusRequest.cs` |
| `GetCompaniesKrsByKrsStatusError` | `src/Compabase/Errors/GetCompaniesKrsByKrsStatusError.cs` |
| `ErrorResponseModel` | `src/Compabase/Models/ErrorResponseModel.cs` |

### GetCompaniesKrsByKrsStructurePeople

- **Auth**: `options.ApiKeyAuth` OR `options.BearerAuth`
- **Signature**: `GetCompaniesKrsByKrsStructurePeople(GetCompaniesKrsByKrsStructurePeopleRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Krs`
- **Returns**: `object`
- **Error**: `ApiException<GetCompaniesKrsByKrsStructurePeopleError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCompaniesKrsByKrsStructurePeopleRequest` | `src/Compabase/Requests/Companies/GetCompaniesKrsByKrsStructurePeopleRequest.cs` |
| `GetCompaniesKrsByKrsStructurePeopleError` | `src/Compabase/Errors/GetCompaniesKrsByKrsStructurePeopleError.cs` |
| `ErrorResponseModel` | `src/Compabase/Models/ErrorResponseModel.cs` |

