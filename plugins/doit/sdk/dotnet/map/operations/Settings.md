<!-- Generated file — do not edit; regenerated with the SDK. -->

# Settings — operations

Accessor: `client.Settings` · Source: `src/DoiT/Api/Settings.cs` · 7 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateCustomTheme

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `CreateCustomTheme(CreateCustomThemeOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `CustomTheme`
- **Error**: `ApiException<CreateCustomThemeError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateCustomThemeOperationRequest` | `src/DoiT/Requests/Settings/CreateCustomThemeOperationRequest.cs` |
| `CreateCustomThemeRequest` | `src/DoiT/Models/CreateCustomThemeRequest.cs` |
| `CustomTheme` | `src/DoiT/Models/CustomTheme.cs` |
| `CreateCustomThemeError` | `src/DoiT/Errors/CreateCustomThemeError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### DeleteCustomTheme

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `DeleteCustomTheme(DeleteCustomThemeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `object`
- **Error**: `ApiException<DeleteCustomThemeError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteCustomThemeRequest` | `src/DoiT/Requests/Settings/DeleteCustomThemeRequest.cs` |
| `DeleteCustomThemeError` | `src/DoiT/Errors/DeleteCustomThemeError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### GetActiveTheme

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `GetActiveTheme(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ActiveTheme`
- **Error**: `ApiException<GetActiveThemeError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ActiveTheme` | `src/DoiT/Models/ActiveTheme.cs` |
| `GetActiveThemeError` | `src/DoiT/Errors/GetActiveThemeError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### GetCustomTheme

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `GetCustomTheme(GetCustomThemeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `CustomTheme`
- **Error**: `ApiException<GetCustomThemeError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCustomThemeRequest` | `src/DoiT/Requests/Settings/GetCustomThemeRequest.cs` |
| `CustomTheme` | `src/DoiT/Models/CustomTheme.cs` |
| `GetCustomThemeError` | `src/DoiT/Errors/GetCustomThemeError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### ListCustomThemes

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `ListCustomThemes(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `AnalyticsV1SettingsThemesResponse`
- **Error**: `ApiException<ListCustomThemesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AnalyticsV1SettingsThemesResponse` | `src/DoiT/Models/AnalyticsV1SettingsThemesResponse.cs` |
| `ListCustomThemesError` | `src/DoiT/Errors/ListCustomThemesError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### SetActiveTheme

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `SetActiveTheme(SetActiveThemeOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ActiveTheme`
- **Error**: `ApiException<SetActiveThemeError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SetActiveThemeOperationRequest` | `src/DoiT/Requests/Settings/SetActiveThemeOperationRequest.cs` |
| `SetActiveThemeRequest` | `src/DoiT/Models/SetActiveThemeRequest.cs` |
| `ActiveTheme` | `src/DoiT/Models/ActiveTheme.cs` |
| `SetActiveThemeError` | `src/DoiT/Errors/SetActiveThemeError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### UpdateCustomTheme

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `UpdateCustomTheme(UpdateCustomThemeOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Body`
- **Returns**: `CustomTheme`
- **Error**: `ApiException<UpdateCustomThemeError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateCustomThemeOperationRequest` | `src/DoiT/Requests/Settings/UpdateCustomThemeOperationRequest.cs` |
| `UpdateCustomThemeRequest` | `src/DoiT/Models/UpdateCustomThemeRequest.cs` |
| `CustomTheme` | `src/DoiT/Models/CustomTheme.cs` |
| `UpdateCustomThemeError` | `src/DoiT/Errors/UpdateCustomThemeError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

