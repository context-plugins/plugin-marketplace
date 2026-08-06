# FlexV1ChannelApi — operations

Accessor: `client.FlexV1ChannelApi` · Source: `Api/FlexV1ChannelApi.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateChannel
- **HTTP**: `POST /v1/Channels` (Default13 (flex-api))
- **Signature**: `CreateChannel(string flexFlowSid, string identity, string chatUserFriendlyName, string chatFriendlyName, string? target, string? chatUniqueName, string? preEngagementData, string? taskSid, string? taskAttributes, bool? longLived, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`target` … `longLived`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `FlexFlowSid` ← `flexFlowSid`, `Identity` ← `identity`, `ChatUserFriendlyName` ← `chatUserFriendlyName`, `ChatFriendlyName` ← `chatFriendlyName`, `Target` ← `target`, `ChatUniqueName` ← `chatUniqueName`, `PreEngagementData` ← `preEngagementData`, `TaskSid` ← `taskSid`, `TaskAttributes` ← `taskAttributes`, `LongLived` ← `longLived`
- **Returns**: `FlexV1Channel`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteChannel
- **HTTP**: `DELETE /v1/Channels/{Sid}` (Default13 (flex-api))
- **Signature**: `DeleteChannel(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchChannel
- **HTTP**: `GET /v1/Channels/{Sid}` (Default13 (flex-api))
- **Signature**: `FetchChannel(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `FlexV1Channel`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListChannel
- **HTTP**: `GET /v1/Channels` (Default13 (flex-api))
- **Signature**: `ListChannel(long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListChannelResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)
