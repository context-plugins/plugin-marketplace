<!-- Generated file — do not edit; regenerated with the SDK. -->

# TerminalSettingsCompanyLevel — operations

Accessor: `client.TerminalSettingsCompanyLevel` · Source: `Api/TerminalSettingsCompanyLevel.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetCompaniesCompanyIdTerminalLogos
- **Server group**: `Default9`
- **Signature**: `GetCompaniesCompanyIdTerminalLogos(string companyId, string model, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Query params (wire ← C#)**: `model` ← `model`
- **Returns**: `Logo`
- **Error**: `SdkException<GetCompaniesCompanyIdTerminalLogosError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `Logo` | `Models/Logo.cs` |
| `GetCompaniesCompanyIdTerminalLogosError` | `Errors/GetCompaniesCompanyIdTerminalLogosError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### GetCompaniesCompanyIdTerminalSettings
- **Server group**: `Default9`
- **Signature**: `GetCompaniesCompanyIdTerminalSettings(string companyId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `TerminalSettings`
- **Error**: `SdkException<GetCompaniesCompanyIdTerminalSettingsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `TerminalSettings` | `Models/TerminalSettings.cs` |
| `GetCompaniesCompanyIdTerminalSettingsError` | `Errors/GetCompaniesCompanyIdTerminalSettingsError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### PatchCompaniesCompanyIdTerminalLogos
- **Server group**: `Default9`
- **Signature**: `PatchCompaniesCompanyIdTerminalLogos(string companyId, string model, Logo? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `model` ← `model`
- **Returns**: `Logo`
- **Error**: `SdkException<PatchCompaniesCompanyIdTerminalLogosError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `Logo` | `Models/Logo.cs` |
| `PatchCompaniesCompanyIdTerminalLogosError` | `Errors/PatchCompaniesCompanyIdTerminalLogosError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### PatchCompaniesCompanyIdTerminalSettings
- **Server group**: `Default9`
- **Signature**: `PatchCompaniesCompanyIdTerminalSettings(string companyId, TerminalSettings? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `TerminalSettings`
- **Error**: `SdkException<PatchCompaniesCompanyIdTerminalSettingsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `TerminalSettings` | `Models/TerminalSettings.cs` |
| `PatchCompaniesCompanyIdTerminalSettingsError` | `Errors/PatchCompaniesCompanyIdTerminalSettingsError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

