<!-- Generated file — do not edit; regenerated with the SDK. -->

# Organizations — operations

Accessor: `client.Organizations` · Source: `src/PlinthUsGrantsData/Api/Organizations.cs` · 10 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetApiV1EssentialsByEin

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `GetApiV1EssentialsByEin(GetApiV1EssentialsByEinRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ein`
- **Query params (wire ← C#)**: `format` ← `Format`, `example` ← `Example`
- **Returns**: `EssentialsResponse`
- **Error**: `ApiException<GetApiV1EssentialsByEinError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value)` [401, 402] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiV1EssentialsByEinRequest` | `src/PlinthUsGrantsData/Requests/Organizations/GetApiV1EssentialsByEinRequest.cs` |
| `Format1` | `src/PlinthUsGrantsData/Models/AnyOf/Format1.cs` |
| `Example1` | `src/PlinthUsGrantsData/Models/Enums/Example1.cs` |
| `EssentialsResponse` | `src/PlinthUsGrantsData/Models/EssentialsResponse.cs` |
| `GetApiV1EssentialsByEinError` | `src/PlinthUsGrantsData/Errors/GetApiV1EssentialsByEinError.cs` |
| `ApiErrorModel` | `src/PlinthUsGrantsData/Models/ApiErrorModel.cs` |
| `HttpValidationError` | `src/PlinthUsGrantsData/Models/HttpValidationError.cs` |

### GetApiV1PremierByEin

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `GetApiV1PremierByEin(GetApiV1PremierByEinRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ein`
- **Query params (wire ← C#)**: `format` ← `Format`, `example` ← `Example`
- **Returns**: `PremierResponse`
- **Error**: `ApiException<GetApiV1PremierByEinError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value)` [401, 402] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiV1PremierByEinRequest` | `src/PlinthUsGrantsData/Requests/Organizations/GetApiV1PremierByEinRequest.cs` |
| `Format1` | `src/PlinthUsGrantsData/Models/AnyOf/Format1.cs` |
| `Example1` | `src/PlinthUsGrantsData/Models/Enums/Example1.cs` |
| `PremierResponse` | `src/PlinthUsGrantsData/Models/PremierResponse.cs` |
| `GetApiV1PremierByEinError` | `src/PlinthUsGrantsData/Errors/GetApiV1PremierByEinError.cs` |
| `ApiErrorModel` | `src/PlinthUsGrantsData/Models/ApiErrorModel.cs` |
| `HttpValidationError` | `src/PlinthUsGrantsData/Models/HttpValidationError.cs` |

### GetApiV1ScreeningByEin

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `GetApiV1ScreeningByEin(GetApiV1ScreeningByEinRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ein`
- **Query params (wire ← C#)**: `format` ← `Format`, `compat` ← `Compat`, `example` ← `Example`
- **Returns**: `ComplianceResponse`
- **Error**: `ApiException<GetApiV1ScreeningByEinError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value)` [401, 402] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiV1ScreeningByEinRequest` | `src/PlinthUsGrantsData/Requests/Organizations/GetApiV1ScreeningByEinRequest.cs` |
| `Format1` | `src/PlinthUsGrantsData/Models/AnyOf/Format1.cs` |
| `Compat` | `src/PlinthUsGrantsData/Models/AnyOf/Compat.cs` |
| `ExamplePlinthUsGrantsDataOrganizationsApi` | `src/PlinthUsGrantsData/Models/Enums/ExamplePlinthUsGrantsDataOrganizationsApi.cs` |
| `ComplianceResponse` | `src/PlinthUsGrantsData/Models/ComplianceResponse.cs` |
| `GetApiV1ScreeningByEinError` | `src/PlinthUsGrantsData/Errors/GetApiV1ScreeningByEinError.cs` |
| `ApiErrorModel` | `src/PlinthUsGrantsData/Models/ApiErrorModel.cs` |
| `HttpValidationError` | `src/PlinthUsGrantsData/Models/HttpValidationError.cs` |

### GetCompliance

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `GetCompliance(GetComplianceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ein`
- **Returns**: `object`
- **Error**: `ApiException<GetComplianceError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value)` [401, 402] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetComplianceRequest` | `src/PlinthUsGrantsData/Requests/Organizations/GetComplianceRequest.cs` |
| `GetComplianceError` | `src/PlinthUsGrantsData/Errors/GetComplianceError.cs` |
| `ApiErrorModel` | `src/PlinthUsGrantsData/Models/ApiErrorModel.cs` |
| `HttpValidationError` | `src/PlinthUsGrantsData/Models/HttpValidationError.cs` |

### GetComplianceBulk

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `GetComplianceBulk(GetComplianceBulkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Query params (wire ← C#)**: `compat` ← `Compat`
- **Returns**: `BulkComplianceResponse`
- **Error**: `ApiException<GetComplianceBulkError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value)` [401, 402] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetComplianceBulkRequest` | `src/PlinthUsGrantsData/Requests/Organizations/GetComplianceBulkRequest.cs` |
| `Compat` | `src/PlinthUsGrantsData/Models/AnyOf/Compat.cs` |
| `BulkCompliance` | `src/PlinthUsGrantsData/Models/BulkCompliance.cs` |
| `BulkComplianceResponse` | `src/PlinthUsGrantsData/Models/BulkComplianceResponse.cs` |
| `GetComplianceBulkError` | `src/PlinthUsGrantsData/Errors/GetComplianceBulkError.cs` |
| `ApiErrorModel` | `src/PlinthUsGrantsData/Models/ApiErrorModel.cs` |
| `HttpValidationError` | `src/PlinthUsGrantsData/Models/HttpValidationError.cs` |

### GetEssentials

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `GetEssentials(GetEssentialsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ein`
- **Returns**: `object`
- **Error**: `ApiException<GetEssentialsError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value)` [401, 402] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetEssentialsRequest` | `src/PlinthUsGrantsData/Requests/Organizations/GetEssentialsRequest.cs` |
| `GetEssentialsError` | `src/PlinthUsGrantsData/Errors/GetEssentialsError.cs` |
| `ApiErrorModel` | `src/PlinthUsGrantsData/Models/ApiErrorModel.cs` |
| `HttpValidationError` | `src/PlinthUsGrantsData/Models/HttpValidationError.cs` |

### GetGovFunding

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `GetGovFunding(GetGovFundingRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ein`
- **Query params (wire ← C#)**: `format` ← `Format`, `fiscal_year` ← `FiscalYear`, `kind` ← `Kind`, `state` ← `State`, `limit` ← `Limit`, `example` ← `Example`
- **Returns**: `GovFundingResponse`
- **Error**: `ApiException<GetGovFundingError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value)` [401, 402] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetGovFundingRequest` | `src/PlinthUsGrantsData/Requests/Organizations/GetGovFundingRequest.cs` |
| `Format1` | `src/PlinthUsGrantsData/Models/AnyOf/Format1.cs` |
| `FiscalYear` | `src/PlinthUsGrantsData/Models/AnyOf/FiscalYear.cs` |
| `KindVariantYqwpsz` | `src/PlinthUsGrantsData/Models/AnyOf/KindVariantYqwpsz.cs` |
| `State1` | `src/PlinthUsGrantsData/Models/AnyOf/State1.cs` |
| `Example1` | `src/PlinthUsGrantsData/Models/Enums/Example1.cs` |
| `GovFundingResponse` | `src/PlinthUsGrantsData/Models/GovFundingResponse.cs` |
| `GetGovFundingError` | `src/PlinthUsGrantsData/Errors/GetGovFundingError.cs` |
| `ApiErrorModel` | `src/PlinthUsGrantsData/Models/ApiErrorModel.cs` |
| `HttpValidationError` | `src/PlinthUsGrantsData/Models/HttpValidationError.cs` |

### GetPremier

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `GetPremier(GetPremierRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ein`
- **Returns**: `object`
- **Error**: `ApiException<GetPremierError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value)` [401, 402] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetPremierRequest` | `src/PlinthUsGrantsData/Requests/Organizations/GetPremierRequest.cs` |
| `GetPremierError` | `src/PlinthUsGrantsData/Errors/GetPremierError.cs` |
| `ApiErrorModel` | `src/PlinthUsGrantsData/Models/ApiErrorModel.cs` |
| `HttpValidationError` | `src/PlinthUsGrantsData/Models/HttpValidationError.cs` |

### SearchEssentials

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `SearchEssentials(SearchEssentialsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Query params (wire ← C#)**: `jurisdiction` ← `Jurisdiction`
- **Returns**: `EssentialsSearchResponse`
- **Error**: `ApiException<SearchEssentialsError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value)` [401, 402] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SearchEssentialsRequest` | `src/PlinthUsGrantsData/Requests/Organizations/SearchEssentialsRequest.cs` |
| `Jurisdiction` | `src/PlinthUsGrantsData/Models/AnyOf/Jurisdiction.cs` |
| `EssentialsSearch` | `src/PlinthUsGrantsData/Models/EssentialsSearch.cs` |
| `EssentialsSearchResponse` | `src/PlinthUsGrantsData/Models/EssentialsSearchResponse.cs` |
| `SearchEssentialsError` | `src/PlinthUsGrantsData/Errors/SearchEssentialsError.cs` |
| `ApiErrorModel` | `src/PlinthUsGrantsData/Models/ApiErrorModel.cs` |
| `HttpValidationError` | `src/PlinthUsGrantsData/Models/HttpValidationError.cs` |

### VerifyComplianceReport

- **Signature**: `VerifyComplianceReport(VerifyComplianceReportRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `object`
- **Error**: `ApiException<VerifyComplianceReportError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `VerifyComplianceReportRequest` | `src/PlinthUsGrantsData/Requests/Organizations/VerifyComplianceReportRequest.cs` |
| `VerifyReport` | `src/PlinthUsGrantsData/Models/VerifyReport.cs` |
| `VerifyComplianceReportError` | `src/PlinthUsGrantsData/Errors/VerifyComplianceReportError.cs` |
| `HttpValidationError` | `src/PlinthUsGrantsData/Models/HttpValidationError.cs` |

