<!-- Generated file — do not edit; regenerated with the SDK. -->

# TerminalSettingsTerminalLevel — operations

Accessor: `client.TerminalSettingsTerminalLevel` · Source: `Api/TerminalSettingsTerminalLevel.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetTerminalsTerminalIdTerminalLogos
- **Server group**: `Default9`
- **Signature**: `GetTerminalsTerminalIdTerminalLogos(string terminalId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `Logo`
- **Error**: `SdkException<GetTerminalsTerminalIdTerminalLogosError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `Logo` | `Models/Logo.cs` |
| `GetTerminalsTerminalIdTerminalLogosError` | `Errors/GetTerminalsTerminalIdTerminalLogosError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### GetTerminalsTerminalIdTerminalSettings
- **Server group**: `Default9`
- **Signature**: `GetTerminalsTerminalIdTerminalSettings(string terminalId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `TerminalSettings`
- **Error**: `SdkException<GetTerminalsTerminalIdTerminalSettingsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `TerminalSettings` | `Models/TerminalSettings.cs` |
| `GetTerminalsTerminalIdTerminalSettingsError` | `Errors/GetTerminalsTerminalIdTerminalSettingsError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### PatchTerminalsTerminalIdTerminalLogos
- **Server group**: `Default9`
- **Signature**: `PatchTerminalsTerminalIdTerminalLogos(string terminalId, Logo? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `Logo`
- **Error**: `SdkException<PatchTerminalsTerminalIdTerminalLogosError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `Logo` | `Models/Logo.cs` |
| `PatchTerminalsTerminalIdTerminalLogosError` | `Errors/PatchTerminalsTerminalIdTerminalLogosError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### PatchTerminalsTerminalIdTerminalSettings
- **Server group**: `Default9`
- **Signature**: `PatchTerminalsTerminalIdTerminalSettings(string terminalId, TerminalSettings? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `TerminalSettings`
- **Error**: `SdkException<PatchTerminalsTerminalIdTerminalSettingsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `TerminalSettings` | `Models/TerminalSettings.cs` |
| `PatchTerminalsTerminalIdTerminalSettingsError` | `Errors/PatchTerminalsTerminalIdTerminalSettingsError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

