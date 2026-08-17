# Balances — operations

Accessor: `client.Balances` · Source: `Api/Balances.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DeleteBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingId
- **HTTP**: `DELETE /balancePlatforms/{balancePlatformId}/webhooks/{webhookId}/settings/{settingId}` (Default13 (balanceplatform-api-test))
- **Notes**: Deletes a balance webhook setting that contains the conditions for triggering balance webhooks .
- **Signature**: `DeleteBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingId(string balancePlatformId, string webhookId, string settingId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `JsonElement`
- **Error**: `SdkException<DeleteBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [400, 401, 403, 404, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettings
- **HTTP**: `GET /balancePlatforms/{balancePlatformId}/webhooks/{webhookId}/settings` (Default13 (balanceplatform-api-test))
- **Notes**: Returns all balance webhook settings configured for triggering balance webhooks .
- **Signature**: `GetBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettings(string balancePlatformId, string webhookId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `WebhookSettings`
- **Error**: `SdkException<GetBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [400, 401, 403, 404, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingId
- **HTTP**: `GET /balancePlatforms/{balancePlatformId}/webhooks/{webhookId}/settings/{settingId}` (Default13 (balanceplatform-api-test))
- **Notes**: Returns the details of a specific balance webhook setting configured for triggering balance webhooks .
- **Signature**: `GetBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingId(string balancePlatformId, string webhookId, string settingId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `WebhookSetting`
- **Error**: `SdkException<GetBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [400, 401, 403, 404, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PatchBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingId
- **HTTP**: `PATCH /balancePlatforms/{balancePlatformId}/webhooks/{webhookId}/settings/{settingId}` (Default13 (balanceplatform-api-test))
- **Notes**: Updates the conditions the balance change needs to meet for Adyen to send a balance webhook .
- **Signature**: `PatchBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingId(string balancePlatformId, string webhookId, string settingId, BalanceWebhookSettingInfoUpdate body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `WebhookSetting`
- **Error**: `SdkException<PatchBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [400, 401, 403, 404, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettings
- **HTTP**: `POST /balancePlatforms/{balancePlatformId}/webhooks/{webhookId}/settings` (Default13 (balanceplatform-api-test))
- **Notes**: Configures the criteria for triggering balance webhooks . Adyen sends balance webhooks to notify you of balance changes in your balance platform. They can be triggered when the balance reaches, exceeds, or drops below a specific value in a specific currency. You can get notified about balance changes in your entire balance platform, in the balance accounts of a specific user, or a specific balance account. The hierarchy between the webhook settings are based on the following business logic: Settings on a higher level apply to all lower level resources (balance platform &gt; account holder &gt; balance acocunt). The most granular setting overrides higher level settings (balance account &gt; account holder &gt; balance platform).
- **Signature**: `PostBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettings(string balancePlatformId, string webhookId, BalanceWebhookSettingInfo body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `WebhookSetting`
- **Error**: `SdkException<PostBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [400, 401, 403, 404, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
