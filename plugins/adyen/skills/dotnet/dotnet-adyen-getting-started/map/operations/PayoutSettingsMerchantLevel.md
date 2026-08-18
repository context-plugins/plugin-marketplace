<!-- Generated file — do not edit; regenerated with the SDK. -->

# PayoutSettingsMerchantLevel — operations

Accessor: `client.PayoutSettingsMerchantLevel` · Source: `Api/PayoutSettingsMerchantLevel.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteMerchantsMerchantIdPayoutSettingsPayoutSettingsId
- **Server group**: `Default9`
- **Signature**: `DeleteMerchantsMerchantIdPayoutSettingsPayoutSettingsId(string merchantId, string payoutSettingsId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteMerchantsMerchantIdPayoutSettingsPayoutSettingsIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteMerchantsMerchantIdPayoutSettingsPayoutSettingsIdError` | `Errors/DeleteMerchantsMerchantIdPayoutSettingsPayoutSettingsIdError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### GetMerchantsMerchantIdPayoutSettings
- **Server group**: `Default9`
- **Signature**: `GetMerchantsMerchantIdPayoutSettings(string merchantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `PayoutSettingsResponse`
- **Error**: `SdkException<GetMerchantsMerchantIdPayoutSettingsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `PayoutSettingsResponse` | `Models/PayoutSettingsResponse.cs` |
| `GetMerchantsMerchantIdPayoutSettingsError` | `Errors/GetMerchantsMerchantIdPayoutSettingsError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### GetMerchantsMerchantIdPayoutSettingsPayoutSettingsId
- **Server group**: `Default9`
- **Signature**: `GetMerchantsMerchantIdPayoutSettingsPayoutSettingsId(string merchantId, string payoutSettingsId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `PayoutSettings`
- **Error**: `SdkException<GetMerchantsMerchantIdPayoutSettingsPayoutSettingsIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `PayoutSettings` | `Models/PayoutSettings.cs` |
| `GetMerchantsMerchantIdPayoutSettingsPayoutSettingsIdError` | `Errors/GetMerchantsMerchantIdPayoutSettingsPayoutSettingsIdError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### PatchMerchantsMerchantIdPayoutSettingsPayoutSettingsId
- **Server group**: `Default9`
- **Signature**: `PatchMerchantsMerchantIdPayoutSettingsPayoutSettingsId(string merchantId, string payoutSettingsId, UpdatePayoutSettingsRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `PayoutSettings`
- **Error**: `SdkException<PatchMerchantsMerchantIdPayoutSettingsPayoutSettingsIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `UpdatePayoutSettingsRequest` | `Models/UpdatePayoutSettingsRequest.cs` |
| `PayoutSettings` | `Models/PayoutSettings.cs` |
| `PatchMerchantsMerchantIdPayoutSettingsPayoutSettingsIdError` | `Errors/PatchMerchantsMerchantIdPayoutSettingsPayoutSettingsIdError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### PostMerchantsMerchantIdPayoutSettings
- **Server group**: `Default9`
- **Signature**: `PostMerchantsMerchantIdPayoutSettings(string merchantId, PayoutSettingsRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `PayoutSettings`
- **Error**: `SdkException<PostMerchantsMerchantIdPayoutSettingsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `PayoutSettingsRequest` | `Models/PayoutSettingsRequest.cs` |
| `PayoutSettings` | `Models/PayoutSettings.cs` |
| `PostMerchantsMerchantIdPayoutSettingsError` | `Errors/PostMerchantsMerchantIdPayoutSettingsError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

