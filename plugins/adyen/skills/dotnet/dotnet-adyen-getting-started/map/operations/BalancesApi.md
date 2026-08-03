# BalancesApi — operations

Accessor: `client.BalancesApi` · Source: `Api/BalancesApi.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DeleteBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingId
- **HTTP**: `DELETE /balancePlatforms/{balancePlatformId}/webhooks/{webhookId}/settings/{settingId}` (Default (balanceplatform-api-test))
- **Notes**: Deletes a balance webhook setting that contains the conditions for triggering balance webhooks .
- **Signature**: `DeleteBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingId(string balancePlatformId, string webhookId, string settingId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<DeleteBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetBalancePlatformsWebhooksSettingsSettingId400Error1(out BalancePlatformsWebhooksSettingsSettingId400Error1)` [400] · `TryGetBalancePlatformsWebhooksSettingsSettingId401Error1(out BalancePlatformsWebhooksSettingsSettingId401Error1)` [401] · `TryGetBalancePlatformsWebhooksSettingsSettingId403Error1(out BalancePlatformsWebhooksSettingsSettingId403Error1)` [403] · `TryGetBalancePlatformsWebhooksSettingsSettingId404Error1(out BalancePlatformsWebhooksSettingsSettingId404Error1)` [404] · `TryGetBalancePlatformsWebhooksSettingsSettingId422Error1(out BalancePlatformsWebhooksSettingsSettingId422Error1)` [422] · `TryGetBalancePlatformsWebhooksSettingsSettingId500Error1(out BalancePlatformsWebhooksSettingsSettingId500Error1)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettings
- **HTTP**: `GET /balancePlatforms/{balancePlatformId}/webhooks/{webhookId}/settings` (Default (balanceplatform-api-test))
- **Notes**: Returns all balance webhook settings configured for triggering balance webhooks .
- **Signature**: `GetBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettings(string balancePlatformId, string webhookId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `WebhookSettings`
- **Error**: `SdkException<GetBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsError>` — **Case A (typed)**
- **Error accessors**: `TryGetBalancePlatformsWebhooksSettings400Error1(out BalancePlatformsWebhooksSettings400Error1)` [400] · `TryGetBalancePlatformsWebhooksSettings401Error1(out BalancePlatformsWebhooksSettings401Error1)` [401] · `TryGetBalancePlatformsWebhooksSettings403Error1(out BalancePlatformsWebhooksSettings403Error1)` [403] · `TryGetBalancePlatformsWebhooksSettings404Error1(out BalancePlatformsWebhooksSettings404Error1)` [404] · `TryGetBalancePlatformsWebhooksSettings422Error1(out BalancePlatformsWebhooksSettings422Error1)` [422] · `TryGetBalancePlatformsWebhooksSettings500Error1(out BalancePlatformsWebhooksSettings500Error1)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingId
- **HTTP**: `GET /balancePlatforms/{balancePlatformId}/webhooks/{webhookId}/settings/{settingId}` (Default (balanceplatform-api-test))
- **Notes**: Returns the details of a specific balance webhook setting configured for triggering balance webhooks .
- **Signature**: `GetBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingId(string balancePlatformId, string webhookId, string settingId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `WebhookSetting`
- **Error**: `SdkException<GetBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetBalancePlatformsWebhooksSettingsSettingId400Error1(out BalancePlatformsWebhooksSettingsSettingId400Error1)` [400] · `TryGetBalancePlatformsWebhooksSettingsSettingId401Error1(out BalancePlatformsWebhooksSettingsSettingId401Error1)` [401] · `TryGetBalancePlatformsWebhooksSettingsSettingId403Error1(out BalancePlatformsWebhooksSettingsSettingId403Error1)` [403] · `TryGetBalancePlatformsWebhooksSettingsSettingId404Error1(out BalancePlatformsWebhooksSettingsSettingId404Error1)` [404] · `TryGetBalancePlatformsWebhooksSettingsSettingId422Error1(out BalancePlatformsWebhooksSettingsSettingId422Error1)` [422] · `TryGetBalancePlatformsWebhooksSettingsSettingId500Error1(out BalancePlatformsWebhooksSettingsSettingId500Error1)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PatchBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingId
- **HTTP**: `PATCH /balancePlatforms/{balancePlatformId}/webhooks/{webhookId}/settings/{settingId}` (Default (balanceplatform-api-test))
- **Notes**: Updates the conditions the balance change needs to meet for Adyen to send a balance webhook .
- **Signature**: `PatchBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingId(string balancePlatformId, string webhookId, string settingId, BalanceWebhookSettingInfoUpdate body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `WebhookSetting`
- **Error**: `SdkException<PatchBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetBalancePlatformsWebhooksSettingsSettingId400Error1(out BalancePlatformsWebhooksSettingsSettingId400Error1)` [400] · `TryGetBalancePlatformsWebhooksSettingsSettingId401Error1(out BalancePlatformsWebhooksSettingsSettingId401Error1)` [401] · `TryGetBalancePlatformsWebhooksSettingsSettingId403Error1(out BalancePlatformsWebhooksSettingsSettingId403Error1)` [403] · `TryGetBalancePlatformsWebhooksSettingsSettingId404Error1(out BalancePlatformsWebhooksSettingsSettingId404Error1)` [404] · `TryGetBalancePlatformsWebhooksSettingsSettingId422Error1(out BalancePlatformsWebhooksSettingsSettingId422Error1)` [422] · `TryGetBalancePlatformsWebhooksSettingsSettingId500Error1(out BalancePlatformsWebhooksSettingsSettingId500Error1)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettings
- **HTTP**: `POST /balancePlatforms/{balancePlatformId}/webhooks/{webhookId}/settings` (Default (balanceplatform-api-test))
- **Notes**: Configures the criteria for triggering balance webhooks . Adyen sends balance webhooks to notify you of balance changes in your balance platform. They can be triggered when the balance reaches, exceeds, or drops below a specific value in a specific currency. You can get notified about balance changes in your entire balance platform, in the balance accounts of a specific user, or a specific balance account. The hierarchy between the webhook settings are based on the following business logic: Settings on a higher level apply to all lower level resources (balance platform &gt; account holder &gt; balance acocunt). The most granular setting overrides higher level settings (balance account &gt; account holder &gt; balance platform).
- **Signature**: `PostBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettings(string balancePlatformId, string webhookId, BalanceWebhookSettingInfo body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `WebhookSetting`
- **Error**: `SdkException<PostBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsError>` — **Case A (typed)**
- **Error accessors**: `TryGetBalancePlatformsWebhooksSettings400Error1(out BalancePlatformsWebhooksSettings400Error1)` [400] · `TryGetBalancePlatformsWebhooksSettings401Error1(out BalancePlatformsWebhooksSettings401Error1)` [401] · `TryGetBalancePlatformsWebhooksSettings403Error1(out BalancePlatformsWebhooksSettings403Error1)` [403] · `TryGetBalancePlatformsWebhooksSettings404Error1(out BalancePlatformsWebhooksSettings404Error1)` [404] · `TryGetBalancePlatformsWebhooksSettings422Error1(out BalancePlatformsWebhooksSettings422Error1)` [422] · `TryGetBalancePlatformsWebhooksSettings500Error1(out BalancePlatformsWebhooksSettings500Error1)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
