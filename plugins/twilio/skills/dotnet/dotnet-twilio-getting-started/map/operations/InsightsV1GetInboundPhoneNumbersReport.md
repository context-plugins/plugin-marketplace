# InsightsV1GetInboundPhoneNumbersReport — operations

Accessor: `client.InsightsV1GetInboundPhoneNumbersReport` · Source: `Api/InsightsV1GetInboundPhoneNumbersReport.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ListInboundPhoneNumbersReport
- **HTTP**: `GET /v2/Voice/Reports/PhoneNumbers/Inbound/{reportId}` (Default14 (insights))
- **Notes**: Get Inbound Phone Numbers Level Reports for the given Report Id.
- **Signature**: `ListInboundPhoneNumbersReport(string reportId, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListInboundPhoneNumbersReports`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)
