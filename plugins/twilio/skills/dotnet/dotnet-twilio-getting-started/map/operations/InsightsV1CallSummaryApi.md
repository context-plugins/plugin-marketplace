# InsightsV1CallSummaryApi — operations

Accessor: `client.InsightsV1CallSummaryApi` · Source: `Api/InsightsV1CallSummaryApi.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### FetchSummary
- **HTTP**: `GET /v1/Voice/{CallSid}/Summary` (Default14 (insights))
- **Notes**: Get a specific Call Summary.
- **Signature**: `FetchSummary(string callSid, SummaryEnumProcessingState? processingState, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `processingState` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `ProcessingState` ← `processingState`
- **Returns**: `InsightsV1CallSummary`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
