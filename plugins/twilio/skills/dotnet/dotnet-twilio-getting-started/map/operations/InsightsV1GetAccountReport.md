# InsightsV1GetAccountReport — operations

Accessor: `client.InsightsV1GetAccountReport` · Source: `Api/InsightsV1GetAccountReport.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### FetchAccountReport
- **HTTP**: `GET /v2/Voice/Reports/{reportId}` (Default4 (insights))
- **Notes**: Get Account Level Report for the given Report Id.
- **Signature**: `FetchAccountReport(string reportId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `InsightsV2AccountReport`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
