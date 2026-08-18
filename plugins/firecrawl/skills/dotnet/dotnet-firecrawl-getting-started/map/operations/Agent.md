# Agent — operations

Accessor: `client.Agent` · Source: `Api/Agent.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CancelAgent
- **HTTP**: `DELETE /agent/{jobId}` (Default (api))
- **Signature**: `CancelAgent(Guid jobId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `SuccessResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetAgentStatus
- **HTTP**: `GET /agent/{jobId}` (Default (api))
- **Signature**: `GetAgentStatus(Guid jobId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `AgentResponse1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### StartAgent
- **HTTP**: `POST /agent` (Default (api))
- **Signature**: `StartAgent(AgentRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `AgentResponse`
- **Error**: `SdkException<StartAgentError>` — **Case A (typed)**
- **Error accessors**: `TryGetAgent402Error1(out Agent402Error1)` [402] · `TryGetAgent429Error1(out Agent429Error1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
