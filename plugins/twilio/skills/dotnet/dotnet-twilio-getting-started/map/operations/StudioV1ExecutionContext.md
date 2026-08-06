# StudioV1ExecutionContext — operations

Accessor: `client.StudioV1ExecutionContext` · Source: `Api/StudioV1ExecutionContext.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### FetchExecutionContext
- **HTTP**: `GET /v1/Flows/{FlowSid}/Executions/{ExecutionSid}/Context` (Default11 (studio))
- **Notes**: Retrieve the most recent context for an Execution.
- **Signature**: `FetchExecutionContext(string flowSid, string executionSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `StudioV1FlowExecutionExecutionContext`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
