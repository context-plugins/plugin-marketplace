# WebhooksSubscriptions — operations

Accessor: `client.WebhooksSubscriptions` · Source: `Api/WebhooksSubscriptions.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DeleteWebhooksWebhookToken
- **HTTP**: `DELETE /webhooks/{webhook-token}` (Api (api))
- **Notes**: Delete a webhook subscription . Once deleted, no further notifications will be sent to the subscription's endpoint URL.
- **Signature**: `DeleteWebhooksWebhookToken(string webhookToken = "webh-2dd54a53-3814-4ce1-862f-dc06b09ead4a", string? acceptLanguage = "en-US", string? acceptTimezone = "UTC", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `webhookToken` = "webh-2dd54a53-3814-4ce1-862f-dc06b09ead4a", `acceptLanguage` = "en-US", `acceptTimezone` = "UTC", `requestOptions` = null
- **Returns**: `WebhookSubscriptionResult`
- **Error**: `SdkException<DeleteWebhooksWebhookTokenError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorResult(out ApiErrorResult)` [400, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetWebhooks
- **HTTP**: `GET /webhooks` (Api (api))
- **Notes**: Fetch a list of all webhook subscriptions that supports filtering , sorting , and pagination through existing mechanisms. Webhook subscriptions define which events trigger notifications to your endpoint. For a step-by-step guide, see Set Up Webhooks .
- **Signature**: `GetWebhooks(int page = 1, int pageSize = 20, string? acceptLanguage = "en-US", string? acceptTimezone = "UTC", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `page` = 1, `pageSize` = 20, `acceptLanguage` = "en-US", `acceptTimezone` = "UTC", `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `pageSize` ← `pageSize`
- **Returns**: `WebhookSubscriptionListResult`
- **Error**: `SdkException<GetWebhooksError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorResult(out ApiErrorResult)` [400, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### GetWebhooksWebhookToken
- **HTTP**: `GET /webhooks/{webhook-token}` (Api (api))
- **Notes**: Fetch a single webhook subscription by its `webh-` token . Returns the subscription URL, subscribed events , and status.
- **Signature**: `GetWebhooksWebhookToken(string webhookToken = "webh-2dd54a53-3814-4ce1-862f-dc06b09ead4a", string? acceptLanguage = "en-US", string? acceptTimezone = "UTC", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `webhookToken` = "webh-2dd54a53-3814-4ce1-862f-dc06b09ead4a", `acceptLanguage` = "en-US", `acceptTimezone` = "UTC", `requestOptions` = null
- **Returns**: `WebhookSubscriptionResult`
- **Error**: `SdkException<GetWebhooksWebhookTokenError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorResult(out ApiErrorResult)` [400, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PatchWebhooks
- **HTTP**: `PATCH /webhooks` (Api (api))
- **Notes**: Update a webhook subscription , such as changing the URL, subscribed events , or status. See Set Up Webhooks for guidance.
- **Signature**: `PatchWebhooks(WebhookRequestModel body, string? acceptLanguage = "en-US", string? acceptTimezone = "UTC", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `acceptLanguage` = "en-US", `acceptTimezone` = "UTC", `requestOptions` = null
- **Returns**: `WebhookSubscriptionResult`
- **Error**: `SdkException<PatchWebhooksError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorResult(out ApiErrorResult)` [400, 403, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostWebhooks
- **HTTP**: `POST /webhooks` (Api (api))
- **Notes**: Create a webhook subscription to receive real-time notifications when specific events occur. For a step-by-step guide, see Set Up Webhooks . See also Working with Event Notifications for best practices on handling webhook payloads.
- **Signature**: `PostWebhooks(WebhookRequestModel body, string? acceptLanguage = "en-US", string? acceptTimezone = "UTC", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `acceptLanguage` = "en-US", `acceptTimezone` = "UTC", `requestOptions` = null
- **Returns**: `WebhookSubscriptionResult`
- **Error**: `SdkException<PostWebhooksError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorResult(out ApiErrorResult)` [400, 403, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
