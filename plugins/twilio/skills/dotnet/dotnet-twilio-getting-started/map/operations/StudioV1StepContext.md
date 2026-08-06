# StudioV1StepContext — operations

Accessor: `client.StudioV1StepContext` · Source: `Api/StudioV1StepContext.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### FetchStepContext
- **HTTP**: `GET /v1/Flows/{FlowSid}/Engagements/{EngagementSid}/Steps/{StepSid}/Context` (Default11 (studio))
- **Notes**: Retrieve the context for an Engagement Step.
- **Signature**: `FetchStepContext(string flowSid, string engagementSid, string stepSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `StudioV1FlowEngagementStepStepContext`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
