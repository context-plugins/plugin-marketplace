<!-- Generated file — do not edit; regenerated with the SDK. -->

# TerminalSettingsStoreLevel — operations

Accessor: `client.TerminalSettingsStoreLevel` · Source: `Api/TerminalSettingsStoreLevel.cs` · 8 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetMerchantsMerchantIdStoresReferenceTerminalLogos
- **Server group**: `Default9`
- **Signature**: `GetMerchantsMerchantIdStoresReferenceTerminalLogos(string merchantId, string reference, string model, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Query params (wire ← C#)**: `model` ← `model`
- **Returns**: `Logo`
- **Error**: `SdkException<GetMerchantsMerchantIdStoresReferenceTerminalLogosError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `Logo` | `Models/Logo.cs` |
| `GetMerchantsMerchantIdStoresReferenceTerminalLogosError` | `Errors/GetMerchantsMerchantIdStoresReferenceTerminalLogosError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### GetMerchantsMerchantIdStoresReferenceTerminalSettings
- **Server group**: `Default9`
- **Signature**: `GetMerchantsMerchantIdStoresReferenceTerminalSettings(string merchantId, string reference, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `TerminalSettings`
- **Error**: `SdkException<GetMerchantsMerchantIdStoresReferenceTerminalSettingsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `TerminalSettings` | `Models/TerminalSettings.cs` |
| `GetMerchantsMerchantIdStoresReferenceTerminalSettingsError` | `Errors/GetMerchantsMerchantIdStoresReferenceTerminalSettingsError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### GetStoresStoreIdTerminalLogos
- **Server group**: `Default9`
- **Signature**: `GetStoresStoreIdTerminalLogos(string storeId, string model, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Query params (wire ← C#)**: `model` ← `model`
- **Returns**: `Logo`
- **Error**: `SdkException<GetStoresStoreIdTerminalLogosError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `Logo` | `Models/Logo.cs` |
| `GetStoresStoreIdTerminalLogosError` | `Errors/GetStoresStoreIdTerminalLogosError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### GetStoresStoreIdTerminalSettings
- **Server group**: `Default9`
- **Signature**: `GetStoresStoreIdTerminalSettings(string storeId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `TerminalSettings`
- **Error**: `SdkException<GetStoresStoreIdTerminalSettingsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `TerminalSettings` | `Models/TerminalSettings.cs` |
| `GetStoresStoreIdTerminalSettingsError` | `Errors/GetStoresStoreIdTerminalSettingsError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### PatchMerchantsMerchantIdStoresReferenceTerminalLogos
- **Server group**: `Default9`
- **Signature**: `PatchMerchantsMerchantIdStoresReferenceTerminalLogos(string merchantId, string reference, string model, Logo? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `model` ← `model`
- **Returns**: `Logo`
- **Error**: `SdkException<PatchMerchantsMerchantIdStoresReferenceTerminalLogosError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `Logo` | `Models/Logo.cs` |
| `PatchMerchantsMerchantIdStoresReferenceTerminalLogosError` | `Errors/PatchMerchantsMerchantIdStoresReferenceTerminalLogosError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### PatchMerchantsMerchantIdStoresReferenceTerminalSettings
- **Server group**: `Default9`
- **Signature**: `PatchMerchantsMerchantIdStoresReferenceTerminalSettings(string merchantId, string reference, TerminalSettings? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `TerminalSettings`
- **Error**: `SdkException<PatchMerchantsMerchantIdStoresReferenceTerminalSettingsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `TerminalSettings` | `Models/TerminalSettings.cs` |
| `PatchMerchantsMerchantIdStoresReferenceTerminalSettingsError` | `Errors/PatchMerchantsMerchantIdStoresReferenceTerminalSettingsError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### PatchStoresStoreIdTerminalLogos
- **Server group**: `Default9`
- **Signature**: `PatchStoresStoreIdTerminalLogos(string storeId, string model, Logo? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `model` ← `model`
- **Returns**: `Logo`
- **Error**: `SdkException<PatchStoresStoreIdTerminalLogosError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `Logo` | `Models/Logo.cs` |
| `PatchStoresStoreIdTerminalLogosError` | `Errors/PatchStoresStoreIdTerminalLogosError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### PatchStoresStoreIdTerminalSettings
- **Server group**: `Default9`
- **Signature**: `PatchStoresStoreIdTerminalSettings(string storeId, TerminalSettings? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `TerminalSettings`
- **Error**: `SdkException<PatchStoresStoreIdTerminalSettingsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `TerminalSettings` | `Models/TerminalSettings.cs` |
| `PatchStoresStoreIdTerminalSettingsError` | `Errors/PatchStoresStoreIdTerminalSettingsError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

