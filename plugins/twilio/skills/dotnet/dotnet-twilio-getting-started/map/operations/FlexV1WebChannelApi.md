# FlexV1WebChannelApi — operations

Accessor: `client.FlexV1WebChannelApi` · Source: `Api/FlexV1WebChannelApi.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateWebChannel
- **HTTP**: `POST /v1/WebChannels` (Default13 (flex-api))
- **Signature**: `CreateWebChannel(string flexFlowSid, string identity, string customerFriendlyName, string chatFriendlyName, string? chatUniqueName, string? preEngagementData, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `chatUniqueName` — nullable, no default → **must pass explicitly**
  - `preEngagementData` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `FlexFlowSid` ← `flexFlowSid`, `Identity` ← `identity`, `CustomerFriendlyName` ← `customerFriendlyName`, `ChatFriendlyName` ← `chatFriendlyName`, `ChatUniqueName` ← `chatUniqueName`, `PreEngagementData` ← `preEngagementData`
- **Returns**: `FlexV1WebChannel`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteWebChannel
- **HTTP**: `DELETE /v1/WebChannels/{Sid}` (Default13 (flex-api))
- **Signature**: `DeleteWebChannel(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchWebChannel
- **HTTP**: `GET /v1/WebChannels/{Sid}` (Default13 (flex-api))
- **Signature**: `FetchWebChannel(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `FlexV1WebChannel`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListWebChannel
- **HTTP**: `GET /v1/WebChannels` (Default13 (flex-api))
- **Signature**: `ListWebChannel(long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListWebChannelResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateWebChannel
- **HTTP**: `POST /v1/WebChannels/{Sid}` (Default13 (flex-api))
- **Signature**: `UpdateWebChannel(string sid, WebChannelEnumChatStatus? chatStatus, string? postEngagementData, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `chatStatus` — nullable, no default → **must pass explicitly**
  - `postEngagementData` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `ChatStatus` ← `chatStatus`, `PostEngagementData` ← `postEngagementData`
- **Returns**: `FlexV1WebChannel`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
