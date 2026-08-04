# Channels — operations

Accessor: `client.Channels` · Source: `Api/Channels.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### BulkRetrieveChannels
- **HTTP**: `POST /v2/channels/bulk-retrieve` (Default (connect))
- **Signature**: `BulkRetrieveChannels(BulkRetrieveChannelsRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BulkRetrieveChannelsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListChannels
- **HTTP**: `GET /v2/channels` (Default (connect))
- **Signature**: `ListChannels(ReferenceType? referenceType, string? referenceId, ChannelStatus? status, string? cursor, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`referenceType` … `limit`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `reference_type` ← `referenceType`, `reference_id` ← `referenceId`, `status` ← `status`, `cursor` ← `cursor`, `limit` ← `limit`
- **Returns**: `ListChannelsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### RetrieveChannel
- **HTTP**: `GET /v2/channels/{channel_id}` (Default (connect))
- **Signature**: `RetrieveChannel(string channelId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `RetrieveChannelResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
