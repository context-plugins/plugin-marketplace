# StudioV2ExecutionStepContext — operations

Accessor: `client.StudioV2ExecutionStepContext` · Source: `Api/StudioV2ExecutionStepContext.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### FetchExecutionStepContext2
- **HTTP**: `GET /v2/Flows/{FlowSid}/Executions/{ExecutionSid}/Steps/{StepSid}/Context` (Default11 (studio))
- **Notes**: Retrieve the context for an Execution Step.
- **Signature**: `FetchExecutionStepContext2(string flowSid, string executionSid, string stepSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `StudioV1FlowExecutionExecutionStepExecutionStepContext`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
