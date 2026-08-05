# EmsOrgWebhooks — operations

Accessor: `client.EmsOrgWebhooks` · Source: `Api/EmsOrgWebhooks.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateWebhook
- **HTTP**: `POST /api/v1/orgs/{org_id}/webhooks` (Default)
- **Notes**: Create a webhook. The server validates url. secret and splunk_token are write-only (masked in responses). verify_cert defaults to true. topics selects the event streams to deliver.
- **Signature**: `CreateWebhook(string orgId, object? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteWebhook
- **HTTP**: `DELETE /api/v1/orgs/{org_id}/webhooks/{id}` (Default)
- **Signature**: `DeleteWebhook(string orgId, string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetWebhook
- **HTTP**: `GET /api/v1/orgs/{org_id}/webhooks/{id}` (Default)
- **Signature**: `GetWebhook(string orgId, string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListWebhooks
- **HTTP**: `GET /api/v1/orgs/{org_id}/webhooks` (Default)
- **Notes**: List all webhooks configured for the org. Webhooks deliver event notifications as outbound HTTP callbacks.
- **Signature**: `ListWebhooks(string orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpdateWebhook
- **HTTP**: `PUT /api/v1/orgs/{org_id}/webhooks/{id}` (Default)
- **Signature**: `UpdateWebhook(string orgId, string id, object? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
