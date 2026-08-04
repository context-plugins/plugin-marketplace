# Webhooks — operations

Accessor: `client.Webhooks` · Source: `Api/Webhooks.cs` · 8 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateWebhookReplayJob
- **HTTP**: `POST /2/webhooks/replay` (Default (api))
- **Notes**: Creates a replay job to retrieve events from up to the past 24 hours for all events delivered or attempted to be delivered to the webhook.
- **Signature**: `CreateWebhookReplayJob(CreateWebhookReplayJobRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CreateWebhookReplayJobResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CreateWebhooks
- **HTTP**: `POST /2/webhooks` (Default (api))
- **Notes**: Creates a new webhook configuration.
- **Signature**: `CreateWebhooks(CreateWebhooksRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CreateWebhooksResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CreateWebhooksStreamLink
- **HTTP**: `POST /2/tweets/search/webhooks/{webhook_id}` (Default (api))
- **Notes**: Creates a link to deliver FilteredStream events to the given webhook.
- **Signature**: `CreateWebhooksStreamLink(string webhookId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CreateWebhooksStreamLinkResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteWebhooks
- **HTTP**: `DELETE /2/webhooks/{webhook_id}` (Default (api))
- **Notes**: Deletes an existing webhook configuration.
- **Signature**: `DeleteWebhooks(string webhookId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DeleteWebhooksResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteWebhooksStreamLink
- **HTTP**: `DELETE /2/tweets/search/webhooks/{webhook_id}` (Default (api))
- **Notes**: Deletes the link delivering FilteredStream events to the given webhook.
- **Signature**: `DeleteWebhooksStreamLink(string webhookId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DeleteWebhooksStreamLinkResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetWebhooks
- **HTTP**: `GET /2/webhooks` (Default (api))
- **Notes**: Get a list of webhook configs associated with a client app.
- **Signature**: `GetWebhooks(IReadOnlyList<WebhookConfigField>? webhookConfigFields, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `webhookConfigFields` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `webhook_config.fields` ← `webhookConfigFields`
- **Returns**: `GetWebhooksResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetWebhooksStreamLinks
- **HTTP**: `GET /2/tweets/search/webhooks` (Default (api))
- **Notes**: Get a list of webhook links associated with a filtered stream ruleset.
- **Signature**: `GetWebhooksStreamLinks(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `GetWebhooksStreamLinksResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ValidateWebhooks
- **HTTP**: `PUT /2/webhooks/{webhook_id}` (Default (api))
- **Notes**: Triggers a CRC check for a given webhook.
- **Signature**: `ValidateWebhooks(string webhookId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ValidateWebhooksResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
