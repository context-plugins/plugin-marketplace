# TrusthubV1TrustProductsChannelEndpointAssignment — operations

Accessor: `client.TrusthubV1TrustProductsChannelEndpointAssignment` · Source: `Api/TrusthubV1TrustProductsChannelEndpointAssignment.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateTrustProductChannelEndpointAssignment
- **HTTP**: `POST /v1/TrustProducts/{TrustProductSid}/ChannelEndpointAssignments` (Default9 (trusthub))
- **Notes**: Create a new Assigned Item.
- **Signature**: `CreateTrustProductChannelEndpointAssignment(string trustProductSid, string channelEndpointType, string channelEndpointSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `ChannelEndpointType` ← `channelEndpointType`, `ChannelEndpointSid` ← `channelEndpointSid`
- **Returns**: `TrusthubV1TrustProductTrustProductChannelEndpointAssignment`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteTrustProductChannelEndpointAssignment
- **HTTP**: `DELETE /v1/TrustProducts/{TrustProductSid}/ChannelEndpointAssignments/{Sid}` (Default9 (trusthub))
- **Notes**: Remove an Assignment Item Instance.
- **Signature**: `DeleteTrustProductChannelEndpointAssignment(string trustProductSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchTrustProductChannelEndpointAssignment
- **HTTP**: `GET /v1/TrustProducts/{TrustProductSid}/ChannelEndpointAssignments/{Sid}` (Default9 (trusthub))
- **Notes**: Fetch specific Assigned Item Instance.
- **Signature**: `FetchTrustProductChannelEndpointAssignment(string trustProductSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TrusthubV1TrustProductTrustProductChannelEndpointAssignment`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListTrustProductChannelEndpointAssignment
- **HTTP**: `GET /v1/TrustProducts/{TrustProductSid}/ChannelEndpointAssignments` (Default9 (trusthub))
- **Notes**: Retrieve a list of all Assigned Items for an account.
- **Signature**: `ListTrustProductChannelEndpointAssignment(string trustProductSid, string? channelEndpointSid, string? channelEndpointSids, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`channelEndpointSid` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `ChannelEndpointSid` ← `channelEndpointSid`, `ChannelEndpointSids` ← `channelEndpointSids`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListTrustProductChannelEndpointAssignmentResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)
