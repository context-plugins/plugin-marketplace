# InsightsV1CreateOutboundPhoneNumbersReport — operations

Accessor: `client.InsightsV1CreateOutboundPhoneNumbersReport` · Source: `Api/InsightsV1CreateOutboundPhoneNumbersReport.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateOutboundPhoneNumbersReport
- **HTTP**: `POST /v2/Voice/Reports/PhoneNumbers/Outbound` (Default14 (insights))
- **Notes**: Create Outbound specific Phone Numbers Report for a specific account with given time range.
- **Signature**: `CreateOutboundPhoneNumbersReport(InsightsV2CreatePhoneNumbersReportRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `InsightsV2CreateReportResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
