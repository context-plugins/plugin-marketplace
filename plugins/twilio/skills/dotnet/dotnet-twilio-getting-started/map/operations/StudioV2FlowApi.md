# StudioV2FlowApi — operations

Accessor: `client.StudioV2FlowApi` · Source: `Api/StudioV2FlowApi.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateFlow
- **HTTP**: `POST /v2/Flows` (Default9 (studio))
- **Notes**: Create a Flow.
- **Signature**: `CreateFlow(string friendlyName, FlowEnumStatus status, object definition, string? commitMessage, string? authorSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `commitMessage` — nullable, no default → **must pass explicitly**
  - `authorSid` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `FriendlyName` ← `friendlyName`, `Status` ← `status`, `Definition` ← `definition`, `CommitMessage` ← `commitMessage`, `AuthorSid` ← `authorSid`
- **Returns**: `StudioV2Flow`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteFlow2
- **HTTP**: `DELETE /v2/Flows/{Sid}` (Default9 (studio))
- **Notes**: Delete a specific Flow.
- **Signature**: `DeleteFlow2(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchFlow2
- **HTTP**: `GET /v2/Flows/{Sid}` (Default9 (studio))
- **Notes**: Retrieve a specific Flow.
- **Signature**: `FetchFlow2(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `StudioV2Flow`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListFlow2
- **HTTP**: `GET /v2/Flows` (Default9 (studio))
- **Notes**: Retrieve a list of all Flows.
- **Signature**: `ListFlow2(long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListFlowResponse1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateFlow
- **HTTP**: `POST /v2/Flows/{Sid}` (Default9 (studio))
- **Notes**: Update a Flow.
- **Signature**: `UpdateFlow(string sid, FlowEnumStatus status, string? friendlyName, object? definition, string? commitMessage, string? authorSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`friendlyName` … `authorSid`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Status` ← `status`, `FriendlyName` ← `friendlyName`, `Definition` ← `definition`, `CommitMessage` ← `commitMessage`, `AuthorSid` ← `authorSid`
- **Returns**: `StudioV2Flow`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
