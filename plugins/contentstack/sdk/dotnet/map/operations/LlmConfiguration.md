<!-- Generated file — do not edit; regenerated with the SDK. -->

# LlmConfiguration — operations

Accessor: `client.LlmConfiguration` · Source: `src/Contentstack/Api/LlmConfiguration.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ConfigureLlm

- **Server group**: `DefaultContentstackBrandKitManagementBrandKitsApi`
- **Auth**: `options.BearerAuth` OR `options.AuthtokenAuth`
- **Signature**: `ConfigureLlm(ConfigureLlmRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BrandKitUid`, `OrganizationUid`, `Body`
- **Returns**: `LlmConfig`
- **Error**: `ApiException<ConfigureLlmError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ConfigureLlmRequest` | `src/Contentstack/Requests/LlmConfiguration/ConfigureLlmRequest.cs` |
| `CreateLlmConfigRequest` | `src/Contentstack/Models/CreateLlmConfigRequest.cs` |
| `LlmConfig` | `src/Contentstack/Models/LlmConfig.cs` |
| `ConfigureLlmError` | `src/Contentstack/Errors/ConfigureLlmError.cs` |
| `Error` | `src/Contentstack/Models/Error.cs` |

### GetLlmConfig

- **Server group**: `DefaultContentstackBrandKitManagementBrandKitsApi`
- **Auth**: `options.BearerAuth` OR `options.AuthtokenAuth`
- **Signature**: `GetLlmConfig(GetLlmConfigRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BrandKitUid`, `OrganizationUid`
- **Returns**: `LlmConfig`
- **Error**: `ApiException<GetLlmConfigError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetLlmConfigRequest` | `src/Contentstack/Requests/LlmConfiguration/GetLlmConfigRequest.cs` |
| `LlmConfig` | `src/Contentstack/Models/LlmConfig.cs` |
| `GetLlmConfigError` | `src/Contentstack/Errors/GetLlmConfigError.cs` |
| `Error` | `src/Contentstack/Models/Error.cs` |

