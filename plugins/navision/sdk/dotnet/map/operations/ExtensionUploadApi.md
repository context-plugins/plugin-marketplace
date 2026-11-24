<!-- Generated file — do not edit; regenerated with the SDK. -->

# ExtensionUploadApi — operations

Accessor: `client.ExtensionUploadApi` · Source: `src/MicrosoftDynamicsNav/Api/ExtensionUploadApi.cs` · 3 operations

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
| `CreateExtensionUploadRequest` | `src/MicrosoftDynamicsNav/Requests/ExtensionUploadApi/CreateExtensionUploadRequest.cs` |
| `ExtensionUploadCreate` | `src/MicrosoftDynamicsNav/Models/ExtensionUploadCreate.cs` |
| `ExtensionUpload` | `src/MicrosoftDynamicsNav/Models/ExtensionUpload.cs` |
| `CreateExtensionUploadError` | `src/MicrosoftDynamicsNav/Errors/CreateExtensionUploadError.cs` |
| `ErrorResponseModel` | `src/MicrosoftDynamicsNav/Models/ErrorResponseModel.cs` |

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
| `InstallUploadedExtensionRequest` | `src/MicrosoftDynamicsNav/Requests/ExtensionUploadApi/InstallUploadedExtensionRequest.cs` |
| `InstallUploadedExtensionError` | `src/MicrosoftDynamicsNav/Errors/InstallUploadedExtensionError.cs` |
| `ErrorResponseModel` | `src/MicrosoftDynamicsNav/Models/ErrorResponseModel.cs` |

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
| `UploadExtensionFileRequest` | `src/MicrosoftDynamicsNav/Requests/ExtensionUploadApi/UploadExtensionFileRequest.cs` |
| `UploadExtensionFileError` | `src/MicrosoftDynamicsNav/Errors/UploadExtensionFileError.cs` |
| `ErrorResponseModel` | `src/MicrosoftDynamicsNav/Models/ErrorResponseModel.cs` |

