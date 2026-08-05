# ApiAppsWebhooks — operations

Accessor: `client.ApiAppsWebhooks` · Source: `Api/ApiAppsWebhooks.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### AddWebhook
- **HTTP**: `POST /apps/{app_id}/webhooks` (Default (api))
- **Notes**: This method adds a webhook for the specified app.
- **Signature**: `AddWebhook(double appId, AppsWebhooksRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ApiAppWebhook`
- **Error**: `SdkException<AddWebhookError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteWebhook
- **HTTP**: `DELETE /apps/{app_id}/webhooks/{webhook_id}` (Default (api))
- **Notes**: This method deletes the specified webhook.
- **Signature**: `DeleteWebhook(double appId, double webhookId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteWebhookError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetWebhook
- **HTTP**: `GET /apps/{app_id}/webhooks/{webhook_id}` (Default (api))
- **Notes**: This method returns the specified webhook.
- **Signature**: `GetWebhook(double appId, double webhookId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ApiAppWebhook`
- **Error**: `SdkException<GetWebhookError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetWebhooks
- **HTTP**: `GET /apps/{app_id}/webhooks` (Default (api))
- **Notes**: This method returns every webhook for the specified app.
- **Signature**: `GetWebhooks(double appId, double? page, double? perPage, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `perPage` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `per_page` ← `perPage`
- **Returns**: `ApiAppWebhookConnection`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### UpdateWebhook
- **HTTP**: `PATCH /apps/{app_id}/webhooks/{webhook_id}` (Default (api))
- **Notes**: This method updates the specified webhook.
- **Signature**: `UpdateWebhook(double appId, double webhookId, AppsWebhooksRequest1? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ApiAppWebhook`
- **Error**: `SdkException<UpdateWebhookError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
