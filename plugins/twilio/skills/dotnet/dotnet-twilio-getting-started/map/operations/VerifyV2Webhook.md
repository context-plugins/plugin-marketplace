# VerifyV2Webhook — operations

Accessor: `client.VerifyV2Webhook` · Source: `Api/VerifyV2Webhook.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateWebhook
- **HTTP**: `POST /v2/Services/{ServiceSid}/Webhooks` (Default3 (verify))
- **Notes**: Create a new Webhook for the Service
- **Signature**: `CreateWebhook(string serviceSid, string friendlyName, IReadOnlyList<string> eventTypes, string webhookUrl, WebhookEnumStatus? status, WebhookEnumVersion? version, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `status` — nullable, no default → **must pass explicitly**
  - `version` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `FriendlyName` ← `friendlyName`, `EventTypes` ← `eventTypes`, `WebhookUrl` ← `webhookUrl`, `Status` ← `status`, `Version` ← `version`
- **Returns**: `VerifyV2ServiceWebhook`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteWebhook
- **HTTP**: `DELETE /v2/Services/{ServiceSid}/Webhooks/{Sid}` (Default3 (verify))
- **Notes**: Delete a specific Webhook.
- **Signature**: `DeleteWebhook(string serviceSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchWebhook
- **HTTP**: `GET /v2/Services/{ServiceSid}/Webhooks/{Sid}` (Default3 (verify))
- **Notes**: Fetch a specific Webhook.
- **Signature**: `FetchWebhook(string serviceSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `VerifyV2ServiceWebhook`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListWebhook
- **HTTP**: `GET /v2/Services/{ServiceSid}/Webhooks` (Default3 (verify))
- **Notes**: Retrieve a list of all Webhooks for a Service.
- **Signature**: `ListWebhook(string serviceSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListWebhookResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateWebhook
- **HTTP**: `POST /v2/Services/{ServiceSid}/Webhooks/{Sid}` (Default3 (verify))
- **Signature**: `UpdateWebhook(string serviceSid, string sid, string? friendlyName, IReadOnlyList<string>? eventTypes, string? webhookUrl, WebhookEnumStatus? status, WebhookEnumVersion? version, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`friendlyName` … `version`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `FriendlyName` ← `friendlyName`, `EventTypes` ← `eventTypes`, `WebhookUrl` ← `webhookUrl`, `Status` ← `status`, `Version` ← `version`
- **Returns**: `VerifyV2ServiceWebhook`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
