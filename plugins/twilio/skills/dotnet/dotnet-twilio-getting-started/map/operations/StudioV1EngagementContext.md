# StudioV1EngagementContext — operations

Accessor: `client.StudioV1EngagementContext` · Source: `Api/StudioV1EngagementContext.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### FetchEngagementContext
- **HTTP**: `GET /v1/Flows/{FlowSid}/Engagements/{EngagementSid}/Context` (Default11 (studio))
- **Notes**: Retrieve the most recent context for an Engagement.
- **Signature**: `FetchEngagementContext(string flowSid, string engagementSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `StudioV1FlowEngagementEngagementContext`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
