# StudioV1Engagement — operations

Accessor: `client.StudioV1Engagement` · Source: `Api/StudioV1Engagement.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateEngagement
- **HTTP**: `POST /v1/Flows/{FlowSid}/Engagements` (Default9 (studio))
- **Notes**: Triggers a new Engagement for the Flow
- **Signature**: `CreateEngagement(string flowSid, string to, string from, object? parameters, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `parameters` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `To` ← `to`, `From` ← `from`, `Parameters` ← `parameters`
- **Returns**: `StudioV1FlowEngagement`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteEngagement
- **HTTP**: `DELETE /v1/Flows/{FlowSid}/Engagements/{Sid}` (Default9 (studio))
- **Notes**: Delete this Engagement and all Steps relating to it.
- **Signature**: `DeleteEngagement(string flowSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchEngagement
- **HTTP**: `GET /v1/Flows/{FlowSid}/Engagements/{Sid}` (Default9 (studio))
- **Notes**: Retrieve an Engagement
- **Signature**: `FetchEngagement(string flowSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `StudioV1FlowEngagement`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListEngagement
- **HTTP**: `GET /v1/Flows/{FlowSid}/Engagements` (Default9 (studio))
- **Notes**: Retrieve a list of all Engagements for the Flow.
- **Signature**: `ListEngagement(string flowSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListEngagementResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)
