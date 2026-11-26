<!-- Generated file — do not edit; regenerated with the SDK. -->

# ConfigurationPackages — operations

Accessor: `client.ConfigurationPackages` · Source: `src/Dynamics365BusinessCentral/Api/ConfigurationPackages.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ApplyConfigurationPackage

- **Server group**: `DefaultBusinessCentralAutomationApiV20CompaniesApi`
- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `ApplyConfigurationPackage(ApplyConfigurationPackageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CompanyId`, `PackageId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ApplyConfigurationPackageError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApplyConfigurationPackageRequest` | `src/Dynamics365BusinessCentral/Requests/ConfigurationPackages/ApplyConfigurationPackageRequest.cs` |
| `ApplyConfigurationPackageError` | `src/Dynamics365BusinessCentral/Errors/ApplyConfigurationPackageError.cs` |
| `ErrorResponseModel` | `src/Dynamics365BusinessCentral/Models/ErrorResponseModel.cs` |

### CreateConfigurationPackage

- **Server group**: `DefaultBusinessCentralAutomationApiV20CompaniesApi`
- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `CreateConfigurationPackage(CreateConfigurationPackageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CompanyId`, `Body`
- **Returns**: `ConfigurationPackage`
- **Error**: `ApiException<CreateConfigurationPackageError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateConfigurationPackageRequest` | `src/Dynamics365BusinessCentral/Requests/ConfigurationPackages/CreateConfigurationPackageRequest.cs` |
| `CompaniesApiConfigurationPackagesRequest` | `src/Dynamics365BusinessCentral/Models/CompaniesApiConfigurationPackagesRequest.cs` |
| `ConfigurationPackage` | `src/Dynamics365BusinessCentral/Models/ConfigurationPackage.cs` |
| `CreateConfigurationPackageError` | `src/Dynamics365BusinessCentral/Errors/CreateConfigurationPackageError.cs` |
| `ErrorResponseModel` | `src/Dynamics365BusinessCentral/Models/ErrorResponseModel.cs` |

### ImportConfigurationPackage

- **Server group**: `DefaultBusinessCentralAutomationApiV20CompaniesApi`
- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `ImportConfigurationPackage(ImportConfigurationPackageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CompanyId`, `PackageId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ImportConfigurationPackageError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ImportConfigurationPackageRequest` | `src/Dynamics365BusinessCentral/Requests/ConfigurationPackages/ImportConfigurationPackageRequest.cs` |
| `ImportConfigurationPackageError` | `src/Dynamics365BusinessCentral/Errors/ImportConfigurationPackageError.cs` |
| `ErrorResponseModel` | `src/Dynamics365BusinessCentral/Models/ErrorResponseModel.cs` |

### ListConfigurationPackages

- **Server group**: `DefaultBusinessCentralAutomationApiV20CompaniesApi`
- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `ListConfigurationPackages(ListConfigurationPackagesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CompanyId`
- **Returns**: `CompaniesApiConfigurationPackagesResponse`
- **Error**: `ApiException<ListConfigurationPackagesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListConfigurationPackagesRequest` | `src/Dynamics365BusinessCentral/Requests/ConfigurationPackages/ListConfigurationPackagesRequest.cs` |
| `CompaniesApiConfigurationPackagesResponse` | `src/Dynamics365BusinessCentral/Models/CompaniesApiConfigurationPackagesResponse.cs` |
| `ListConfigurationPackagesError` | `src/Dynamics365BusinessCentral/Errors/ListConfigurationPackagesError.cs` |
| `ErrorResponseModel` | `src/Dynamics365BusinessCentral/Models/ErrorResponseModel.cs` |

### UploadConfigurationPackageFile

- **Server group**: `DefaultBusinessCentralAutomationApiV20CompaniesApi`
- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `UploadConfigurationPackageFile(UploadConfigurationPackageFileRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CompanyId`, `PackageId`, `Code`, `IfMatch`, `Body`
- **Returns**: `void` (Task)
- **Error**: `ApiException<UploadConfigurationPackageFileError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UploadConfigurationPackageFileRequest` | `src/Dynamics365BusinessCentral/Requests/ConfigurationPackages/UploadConfigurationPackageFileRequest.cs` |
| `UploadConfigurationPackageFileError` | `src/Dynamics365BusinessCentral/Errors/UploadConfigurationPackageFileError.cs` |
| `ErrorResponseModel` | `src/Dynamics365BusinessCentral/Models/ErrorResponseModel.cs` |

