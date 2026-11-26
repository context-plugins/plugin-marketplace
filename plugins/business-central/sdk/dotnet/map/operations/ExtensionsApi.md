<!-- Generated file — do not edit; regenerated with the SDK. -->

# ExtensionsApi — operations

Accessor: `client.ExtensionsApi` · Source: `src/Dynamics365BusinessCentral/Api/ExtensionsApi.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### InstallExtension

- **Server group**: `DefaultBusinessCentralAutomationApiV20CompaniesApi`
- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `InstallExtension(InstallExtensionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CompanyId`, `ExtensionId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<InstallExtensionError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `InstallExtensionRequest` | `src/Dynamics365BusinessCentral/Requests/ExtensionsApi/InstallExtensionRequest.cs` |
| `InstallExtensionError` | `src/Dynamics365BusinessCentral/Errors/InstallExtensionError.cs` |
| `ErrorResponseModel` | `src/Dynamics365BusinessCentral/Models/ErrorResponseModel.cs` |

### ListExtensions

- **Server group**: `DefaultBusinessCentralAutomationApiV20CompaniesApi`
- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `ListExtensions(ListExtensionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CompanyId`
- **Returns**: `CompaniesApiExtensionsResponse`
- **Error**: `ApiException<ListExtensionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListExtensionsRequest` | `src/Dynamics365BusinessCentral/Requests/ExtensionsApi/ListExtensionsRequest.cs` |
| `CompaniesApiExtensionsResponse` | `src/Dynamics365BusinessCentral/Models/CompaniesApiExtensionsResponse.cs` |
| `ListExtensionsError` | `src/Dynamics365BusinessCentral/Errors/ListExtensionsError.cs` |
| `ErrorResponseModel` | `src/Dynamics365BusinessCentral/Models/ErrorResponseModel.cs` |

### UninstallAndDeleteExtensionData

- **Server group**: `DefaultBusinessCentralAutomationApiV20CompaniesApi`
- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `UninstallAndDeleteExtensionData(UninstallAndDeleteExtensionDataRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CompanyId`, `ExtensionId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<UninstallAndDeleteExtensionDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UninstallAndDeleteExtensionDataRequest` | `src/Dynamics365BusinessCentral/Requests/ExtensionsApi/UninstallAndDeleteExtensionDataRequest.cs` |
| `UninstallAndDeleteExtensionDataError` | `src/Dynamics365BusinessCentral/Errors/UninstallAndDeleteExtensionDataError.cs` |
| `ErrorResponseModel` | `src/Dynamics365BusinessCentral/Models/ErrorResponseModel.cs` |

### UninstallExtension

- **Server group**: `DefaultBusinessCentralAutomationApiV20CompaniesApi`
- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `UninstallExtension(UninstallExtensionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CompanyId`, `ExtensionId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<UninstallExtensionError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UninstallExtensionRequest` | `src/Dynamics365BusinessCentral/Requests/ExtensionsApi/UninstallExtensionRequest.cs` |
| `UninstallExtensionError` | `src/Dynamics365BusinessCentral/Errors/UninstallExtensionError.cs` |
| `ErrorResponseModel` | `src/Dynamics365BusinessCentral/Models/ErrorResponseModel.cs` |

### UnpublishExtension

- **Server group**: `DefaultBusinessCentralAutomationApiV20CompaniesApi`
- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `UnpublishExtension(UnpublishExtensionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CompanyId`, `ExtensionId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<UnpublishExtensionError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UnpublishExtensionRequest` | `src/Dynamics365BusinessCentral/Requests/ExtensionsApi/UnpublishExtensionRequest.cs` |
| `UnpublishExtensionError` | `src/Dynamics365BusinessCentral/Errors/UnpublishExtensionError.cs` |
| `ErrorResponseModel` | `src/Dynamics365BusinessCentral/Models/ErrorResponseModel.cs` |

