<!-- Generated file — do not edit; regenerated with the SDK. -->

# ExtensionUploadApi — operations

Accessor: `client.ExtensionUploadApi` · Source: `src/Dynamics365BusinessCentral/Api/ExtensionUploadApi.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateExtensionUpload

- **Server group**: `DefaultBusinessCentralAutomationApiV20CompaniesApi`
- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `CreateExtensionUpload(CreateExtensionUploadRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CompanyId`, `Body`
- **Returns**: `ExtensionUpload`
- **Error**: `ApiException<CreateExtensionUploadError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateExtensionUploadRequest` | `src/Dynamics365BusinessCentral/Requests/ExtensionUploadApi/CreateExtensionUploadRequest.cs` |
| `ExtensionUploadCreate` | `src/Dynamics365BusinessCentral/Models/ExtensionUploadCreate.cs` |
| `ExtensionUpload` | `src/Dynamics365BusinessCentral/Models/ExtensionUpload.cs` |
| `CreateExtensionUploadError` | `src/Dynamics365BusinessCentral/Errors/CreateExtensionUploadError.cs` |
| `ErrorResponseModel` | `src/Dynamics365BusinessCentral/Models/ErrorResponseModel.cs` |

### InstallUploadedExtension

- **Server group**: `DefaultBusinessCentralAutomationApiV20CompaniesApi`
- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `InstallUploadedExtension(InstallUploadedExtensionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CompanyId`, `ExtensionUploadId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<InstallUploadedExtensionError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `InstallUploadedExtensionRequest` | `src/Dynamics365BusinessCentral/Requests/ExtensionUploadApi/InstallUploadedExtensionRequest.cs` |
| `InstallUploadedExtensionError` | `src/Dynamics365BusinessCentral/Errors/InstallUploadedExtensionError.cs` |
| `ErrorResponseModel` | `src/Dynamics365BusinessCentral/Models/ErrorResponseModel.cs` |

### UploadExtensionFile

- **Server group**: `DefaultBusinessCentralAutomationApiV20CompaniesApi`
- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `UploadExtensionFile(UploadExtensionFileRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CompanyId`, `ExtensionUploadId`, `IfMatch`, `Body`
- **Returns**: `void` (Task)
- **Error**: `ApiException<UploadExtensionFileError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UploadExtensionFileRequest` | `src/Dynamics365BusinessCentral/Requests/ExtensionUploadApi/UploadExtensionFileRequest.cs` |
| `UploadExtensionFileError` | `src/Dynamics365BusinessCentral/Errors/UploadExtensionFileError.cs` |
| `ErrorResponseModel` | `src/Dynamics365BusinessCentral/Models/ErrorResponseModel.cs` |

