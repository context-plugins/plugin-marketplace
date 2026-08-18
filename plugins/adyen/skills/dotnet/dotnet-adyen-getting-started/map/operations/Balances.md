<!-- Generated file — do not edit; regenerated with the SDK. -->

# Balances — operations

Accessor: `client.Balances` · Source: `Api/Balances.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingId
- **Server group**: `Default13`
- **Signature**: `DeleteBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingId(string balancePlatformId, string webhookId, string settingId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `JsonElement`
- **Error**: `SdkException<DeleteBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [400, 401, 403, 404, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdError` | `Errors/DeleteBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdError.cs` |
| `DefaultErrorResponseEntity` | `Models/DefaultErrorResponseEntity.cs` |

### GetBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettings
- **Server group**: `Default13`
- **Signature**: `GetBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettings(string balancePlatformId, string webhookId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `WebhookSettings`
- **Error**: `SdkException<GetBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [400, 401, 403, 404, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `WebhookSettings` | `Models/WebhookSettings.cs` |
| `GetBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsError` | `Errors/GetBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsError.cs` |
| `DefaultErrorResponseEntity` | `Models/DefaultErrorResponseEntity.cs` |

### GetBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingId
- **Server group**: `Default13`
- **Signature**: `GetBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingId(string balancePlatformId, string webhookId, string settingId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `WebhookSetting`
- **Error**: `SdkException<GetBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [400, 401, 403, 404, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `WebhookSetting` | `Models/WebhookSetting.cs` |
| `GetBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdError` | `Errors/GetBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdError.cs` |
| `DefaultErrorResponseEntity` | `Models/DefaultErrorResponseEntity.cs` |

### PatchBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingId
- **Server group**: `Default13`
- **Signature**: `PatchBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingId(string balancePlatformId, string webhookId, string settingId, BalanceWebhookSettingInfoUpdate body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `WebhookSetting`
- **Error**: `SdkException<PatchBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [400, 401, 403, 404, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `BalanceWebhookSettingInfoUpdate` | `Models/BalanceWebhookSettingInfoUpdate.cs` |
| `WebhookSetting` | `Models/WebhookSetting.cs` |
| `PatchBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdError` | `Errors/PatchBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdError.cs` |
| `DefaultErrorResponseEntity` | `Models/DefaultErrorResponseEntity.cs` |

### PostBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettings
- **Server group**: `Default13`
- **Signature**: `PostBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettings(string balancePlatformId, string webhookId, BalanceWebhookSettingInfo body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `WebhookSetting`
- **Error**: `SdkException<PostBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [400, 401, 403, 404, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `BalanceWebhookSettingInfo` | `Models/BalanceWebhookSettingInfo.cs` |
| `WebhookSetting` | `Models/WebhookSetting.cs` |
| `PostBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsError` | `Errors/PostBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsError.cs` |
| `DefaultErrorResponseEntity` | `Models/DefaultErrorResponseEntity.cs` |

