# InsightsV1CreateAccountReport — operations

Accessor: `client.InsightsV1CreateAccountReport` · Source: `Api/InsightsV1CreateAccountReport.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateAccountReport
- **HTTP**: `POST /v2/Voice/Reports` (Default14 (insights))
- **Notes**: Create a Report for a specific account with given time range and filters.
- **Signature**: `CreateAccountReport(InsightsV2CreateAccountReportRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `InsightsV2CreateReportResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
