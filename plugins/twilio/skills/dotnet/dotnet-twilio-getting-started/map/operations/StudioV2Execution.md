# StudioV2Execution — operations

Accessor: `client.StudioV2Execution` · Source: `Api/StudioV2Execution.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateExecution2
- **HTTP**: `POST /v2/Flows/{FlowSid}/Executions` (Default9 (studio))
- **Notes**: Triggers a new Execution for the Flow
- **Signature**: `CreateExecution2(string flowSid, string to, string from, object? parameters, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `parameters` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `To` ← `to`, `From` ← `from`, `Parameters` ← `parameters`
- **Returns**: `StudioV2FlowExecution`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteExecution2
- **HTTP**: `DELETE /v2/Flows/{FlowSid}/Executions/{Sid}` (Default9 (studio))
- **Notes**: Delete the Execution and all Steps relating to it.
- **Signature**: `DeleteExecution2(string flowSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchExecution2
- **HTTP**: `GET /v2/Flows/{FlowSid}/Executions/{Sid}` (Default9 (studio))
- **Notes**: Retrieve an Execution
- **Signature**: `FetchExecution2(string flowSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `StudioV2FlowExecution`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListExecution2
- **HTTP**: `GET /v2/Flows/{FlowSid}/Executions` (Default9 (studio))
- **Notes**: Retrieve a list of all Executions for the Flow.
- **Signature**: `ListExecution2(string flowSid, EngagementEnumStatus? status, DateTimeOffset? dateCreatedFrom, DateTimeOffset? dateCreatedTo, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`status` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `status` ← `status`, `DateCreatedFrom` ← `dateCreatedFrom`, `DateCreatedTo` ← `dateCreatedTo`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListExecutionResponse1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateExecution2
- **HTTP**: `POST /v2/Flows/{FlowSid}/Executions/{Sid}` (Default9 (studio))
- **Notes**: Update the status of an Execution to `ended`.
- **Signature**: `UpdateExecution2(string flowSid, string sid, EngagementEnumStatus status, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Status` ← `status`
- **Returns**: `StudioV2FlowExecution`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
