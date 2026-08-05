# SyncV1ServiceApi — operations

Accessor: `client.SyncV1ServiceApi` · Source: `Api/SyncV1ServiceApi.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateService4
- **HTTP**: `POST /v1/Services` (Default10 (sync))
- **Signature**: `CreateService4(string? friendlyName, string? webhookUrl, bool? reachabilityWebhooksEnabled, bool? aclEnabled, bool? reachabilityDebouncingEnabled, int? reachabilityDebouncingWindow, bool? webhooksFromRestEnabled, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`friendlyName` … `webhooksFromRestEnabled`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `FriendlyName` ← `friendlyName`, `WebhookUrl` ← `webhookUrl`, `ReachabilityWebhooksEnabled` ← `reachabilityWebhooksEnabled`, `AclEnabled` ← `aclEnabled`, `ReachabilityDebouncingEnabled` ← `reachabilityDebouncingEnabled`, `ReachabilityDebouncingWindow` ← `reachabilityDebouncingWindow`, `WebhooksFromRestEnabled` ← `webhooksFromRestEnabled`
- **Returns**: `SyncV1Service`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteService4
- **HTTP**: `DELETE /v1/Services/{Sid}` (Default10 (sync))
- **Signature**: `DeleteService4(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchService4
- **HTTP**: `GET /v1/Services/{Sid}` (Default10 (sync))
- **Signature**: `FetchService4(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `SyncV1Service`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListService4
- **HTTP**: `GET /v1/Services` (Default10 (sync))
- **Signature**: `ListService4(long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListServiceResponse3`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateService3
- **HTTP**: `POST /v1/Services/{Sid}` (Default10 (sync))
- **Signature**: `UpdateService3(string sid, string? webhookUrl, string? friendlyName, bool? reachabilityWebhooksEnabled, bool? aclEnabled, bool? reachabilityDebouncingEnabled, int? reachabilityDebouncingWindow, bool? webhooksFromRestEnabled, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`webhookUrl` … `webhooksFromRestEnabled`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `WebhookUrl` ← `webhookUrl`, `FriendlyName` ← `friendlyName`, `ReachabilityWebhooksEnabled` ← `reachabilityWebhooksEnabled`, `AclEnabled` ← `aclEnabled`, `ReachabilityDebouncingEnabled` ← `reachabilityDebouncingEnabled`, `ReachabilityDebouncingWindow` ← `reachabilityDebouncingWindow`, `WebhooksFromRestEnabled` ← `webhooksFromRestEnabled`
- **Returns**: `SyncV1Service`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
