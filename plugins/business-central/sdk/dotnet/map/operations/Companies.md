<!-- Generated file — do not edit; regenerated with the SDK. -->

# Companies — operations

Accessor: `client.Companies` · Source: `src/Dynamics365BusinessCentral/Api/Companies.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateAutomationCompany

- **Server group**: `DefaultBusinessCentralAutomationApiV20CompaniesApi`
- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `CreateAutomationCompany(CreateAutomationCompanyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CompanyId`, `Body`
- **Returns**: `AutomationCompany`
- **Error**: `ApiException<CreateAutomationCompanyError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateAutomationCompanyRequest` | `src/Dynamics365BusinessCentral/Requests/Companies/CreateAutomationCompanyRequest.cs` |
| `AutomationCompanyCreate` | `src/Dynamics365BusinessCentral/Models/AutomationCompanyCreate.cs` |
| `AutomationCompany` | `src/Dynamics365BusinessCentral/Models/AutomationCompany.cs` |
| `CreateAutomationCompanyError` | `src/Dynamics365BusinessCentral/Errors/CreateAutomationCompanyError.cs` |
| `ErrorResponseModel` | `src/Dynamics365BusinessCentral/Models/ErrorResponseModel.cs` |

### DeleteAutomationCompany

- **Server group**: `DefaultBusinessCentralAutomationApiV20CompaniesApi`
- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `DeleteAutomationCompany(DeleteAutomationCompanyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CompanyId`, `AutomationCompanyId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteAutomationCompanyError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteAutomationCompanyRequest` | `src/Dynamics365BusinessCentral/Requests/Companies/DeleteAutomationCompanyRequest.cs` |
| `DeleteAutomationCompanyError` | `src/Dynamics365BusinessCentral/Errors/DeleteAutomationCompanyError.cs` |
| `ErrorResponseModel` | `src/Dynamics365BusinessCentral/Models/ErrorResponseModel.cs` |

### GetAutomationCompany

- **Server group**: `DefaultBusinessCentralAutomationApiV20CompaniesApi`
- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `GetAutomationCompany(GetAutomationCompanyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CompanyId`, `AutomationCompanyId`
- **Returns**: `AutomationCompany`
- **Error**: `ApiException<GetAutomationCompanyError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetAutomationCompanyRequest` | `src/Dynamics365BusinessCentral/Requests/Companies/GetAutomationCompanyRequest.cs` |
| `AutomationCompany` | `src/Dynamics365BusinessCentral/Models/AutomationCompany.cs` |
| `GetAutomationCompanyError` | `src/Dynamics365BusinessCentral/Errors/GetAutomationCompanyError.cs` |
| `ErrorResponseModel` | `src/Dynamics365BusinessCentral/Models/ErrorResponseModel.cs` |

### ListAutomationCompanies

- **Server group**: `DefaultBusinessCentralAutomationApiV20CompaniesApi`
- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `ListAutomationCompanies(ListAutomationCompaniesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CompanyId`
- **Returns**: `CompaniesApiAutomationCompaniesResponse`
- **Error**: `ApiException<ListAutomationCompaniesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListAutomationCompaniesRequest` | `src/Dynamics365BusinessCentral/Requests/Companies/ListAutomationCompaniesRequest.cs` |
| `CompaniesApiAutomationCompaniesResponse` | `src/Dynamics365BusinessCentral/Models/CompaniesApiAutomationCompaniesResponse.cs` |
| `ListAutomationCompaniesError` | `src/Dynamics365BusinessCentral/Errors/ListAutomationCompaniesError.cs` |
| `ErrorResponseModel` | `src/Dynamics365BusinessCentral/Models/ErrorResponseModel.cs` |

### ListCompanies

- **Server group**: `DefaultBusinessCentralAutomationApiV20CompaniesApi`
- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `ListCompanies(ListCompaniesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `$filter` ← `Filter`
- **Returns**: `CompaniesResponse`
- **Error**: `ApiException<ListCompaniesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListCompaniesRequest` | `src/Dynamics365BusinessCentral/Requests/Companies/ListCompaniesRequest.cs` |
| `CompaniesResponse` | `src/Dynamics365BusinessCentral/Models/CompaniesResponse.cs` |
| `ListCompaniesError` | `src/Dynamics365BusinessCentral/Errors/ListCompaniesError.cs` |
| `ErrorResponseModel` | `src/Dynamics365BusinessCentral/Models/ErrorResponseModel.cs` |

### UpdateAutomationCompany

- **Server group**: `DefaultBusinessCentralAutomationApiV20CompaniesApi`
- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `UpdateAutomationCompany(UpdateAutomationCompanyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CompanyId`, `AutomationCompanyId`, `IfMatch`, `Body`
- **Returns**: `AutomationCompany`
- **Error**: `ApiException<UpdateAutomationCompanyError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateAutomationCompanyRequest` | `src/Dynamics365BusinessCentral/Requests/Companies/UpdateAutomationCompanyRequest.cs` |
| `AutomationCompanyUpdate` | `src/Dynamics365BusinessCentral/Models/AutomationCompanyUpdate.cs` |
| `AutomationCompany` | `src/Dynamics365BusinessCentral/Models/AutomationCompany.cs` |
| `UpdateAutomationCompanyError` | `src/Dynamics365BusinessCentral/Errors/UpdateAutomationCompanyError.cs` |
| `ErrorResponseModel` | `src/Dynamics365BusinessCentral/Models/ErrorResponseModel.cs` |

