<!-- Generated file — do not edit; regenerated with the SDK. -->

# TerminalSettingsMerchantLevel — operations

Accessor: `client.TerminalSettingsMerchantLevel` · Source: `Api/TerminalSettingsMerchantLevel.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetMerchantsMerchantIdTerminalLogos
- **Server group**: `Default9`
- **Signature**: `GetMerchantsMerchantIdTerminalLogos(string merchantId, string model, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Query params (wire ← C#)**: `model` ← `model`
- **Returns**: `Logo`
- **Error**: `SdkException<GetMerchantsMerchantIdTerminalLogosError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `Logo` | `Models/Logo.cs` |
| `GetMerchantsMerchantIdTerminalLogosError` | `Errors/GetMerchantsMerchantIdTerminalLogosError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### GetMerchantsMerchantIdTerminalSettings
- **Server group**: `Default9`
- **Signature**: `GetMerchantsMerchantIdTerminalSettings(string merchantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `TerminalSettings`
- **Error**: `SdkException<GetMerchantsMerchantIdTerminalSettingsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `TerminalSettings` | `Models/TerminalSettings.cs` |
| `GetMerchantsMerchantIdTerminalSettingsError` | `Errors/GetMerchantsMerchantIdTerminalSettingsError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### PatchMerchantsMerchantIdTerminalLogos
- **Server group**: `Default9`
- **Signature**: `PatchMerchantsMerchantIdTerminalLogos(string merchantId, string model, Logo? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `model` ← `model`
- **Returns**: `Logo`
- **Error**: `SdkException<PatchMerchantsMerchantIdTerminalLogosError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `Logo` | `Models/Logo.cs` |
| `PatchMerchantsMerchantIdTerminalLogosError` | `Errors/PatchMerchantsMerchantIdTerminalLogosError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### PatchMerchantsMerchantIdTerminalSettings
- **Server group**: `Default9`
- **Signature**: `PatchMerchantsMerchantIdTerminalSettings(string merchantId, TerminalSettings? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `TerminalSettings`
- **Error**: `SdkException<PatchMerchantsMerchantIdTerminalSettingsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `TerminalSettings` | `Models/TerminalSettings.cs` |
| `PatchMerchantsMerchantIdTerminalSettingsError` | `Errors/PatchMerchantsMerchantIdTerminalSettingsError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

