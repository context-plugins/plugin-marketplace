# FlexV1InsightsSessionApi — operations

Accessor: `client.FlexV1InsightsSessionApi` · Source: `Api/FlexV1InsightsSessionApi.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateInsightsSession
- **HTTP**: `POST /v1/Insights/Session` (Default3 (flex-api))
- **Notes**: To obtain session details for fetching reports and dashboards
- **Signature**: `CreateInsightsSession(string? authorization, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `authorization` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `FlexV1InsightsSession`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
