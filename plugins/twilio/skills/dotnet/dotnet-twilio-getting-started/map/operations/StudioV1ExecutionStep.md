# StudioV1ExecutionStep — operations

Accessor: `client.StudioV1ExecutionStep` · Source: `Api/StudioV1ExecutionStep.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### FetchExecutionStep
- **HTTP**: `GET /v1/Flows/{FlowSid}/Executions/{ExecutionSid}/Steps/{Sid}` (Default11 (studio))
- **Notes**: Retrieve a Step.
- **Signature**: `FetchExecutionStep(string flowSid, string executionSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `StudioV1FlowExecutionExecutionStep`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListExecutionStep
- **HTTP**: `GET /v1/Flows/{FlowSid}/Executions/{ExecutionSid}/Steps` (Default11 (studio))
- **Notes**: Retrieve a list of all Steps for an Execution.
- **Signature**: `ListExecutionStep(string flowSid, string executionSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListExecutionStepResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)
