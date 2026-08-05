# StudioV1Execution — operations

Accessor: `client.StudioV1Execution` · Source: `Api/StudioV1Execution.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateExecution
- **HTTP**: `POST /v1/Flows/{FlowSid}/Executions` (Default9 (studio))
- **Notes**: Triggers a new Execution for the Flow
- **Signature**: `CreateExecution(string flowSid, string to, string from, object? parameters, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `parameters` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `To` ← `to`, `From` ← `from`, `Parameters` ← `parameters`
- **Returns**: `StudioV1FlowExecution`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteExecution
- **HTTP**: `DELETE /v1/Flows/{FlowSid}/Executions/{Sid}` (Default9 (studio))
- **Notes**: Delete the Execution and all Steps relating to it.
- **Signature**: `DeleteExecution(string flowSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchExecution
- **HTTP**: `GET /v1/Flows/{FlowSid}/Executions/{Sid}` (Default9 (studio))
- **Notes**: Retrieve an Execution
- **Signature**: `FetchExecution(string flowSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `StudioV1FlowExecution`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListExecution
- **HTTP**: `GET /v1/Flows/{FlowSid}/Executions` (Default9 (studio))
- **Notes**: Retrieve a list of all Executions for the Flow.
- **Signature**: `ListExecution(string flowSid, DateTimeOffset? dateCreatedFrom, DateTimeOffset? dateCreatedTo, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`dateCreatedFrom` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `DateCreatedFrom` ← `dateCreatedFrom`, `DateCreatedTo` ← `dateCreatedTo`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListExecutionResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateExecution
- **HTTP**: `POST /v1/Flows/{FlowSid}/Executions/{Sid}` (Default9 (studio))
- **Notes**: Update the status of an Execution to `ended`.
- **Signature**: `UpdateExecution(string flowSid, string sid, ExecutionEnumStatus status, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Status` ← `status`
- **Returns**: `StudioV1FlowExecution`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
