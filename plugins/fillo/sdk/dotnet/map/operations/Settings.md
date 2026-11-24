<!-- Generated file — do not edit; regenerated with the SDK. -->

# Settings — operations

Accessor: `client.Settings` · Source: `src/Fillo/Api/Settings.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetFormSettings

- **Auth**: `options.BearerAuth`
- **Signature**: `GetFormSettings(GetFormSettingsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Form`
- **Returns**: `FormSettingsEnvelope`
- **Error**: `ApiException<GetFormSettingsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetFormSettingsRequest` | `src/Fillo/Requests/Settings/GetFormSettingsRequest.cs` |
| `FormSettingsEnvelope` | `src/Fillo/Models/FormSettingsEnvelope.cs` |
| `GetFormSettingsError` | `src/Fillo/Errors/GetFormSettingsError.cs` |
| `Error` | `src/Fillo/Models/Error.cs` |

### UpdateFormSettings

- **Auth**: `options.BearerAuth`
- **Signature**: `UpdateFormSettings(UpdateFormSettingsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Form`, `Body`
- **Returns**: `FormSettingsEnvelope`
- **Error**: `ApiException<UpdateFormSettingsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 409, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateFormSettingsRequest` | `src/Fillo/Requests/Settings/UpdateFormSettingsRequest.cs` |
| `FormSettingsEnvelope` | `src/Fillo/Models/FormSettingsEnvelope.cs` |
| `UpdateFormSettingsError` | `src/Fillo/Errors/UpdateFormSettingsError.cs` |
| `Error` | `src/Fillo/Models/Error.cs` |

