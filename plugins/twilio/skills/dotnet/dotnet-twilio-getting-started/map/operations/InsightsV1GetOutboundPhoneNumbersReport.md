# InsightsV1GetOutboundPhoneNumbersReport — operations

Accessor: `client.InsightsV1GetOutboundPhoneNumbersReport` · Source: `Api/InsightsV1GetOutboundPhoneNumbersReport.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ListOutboundPhoneNumbersReport
- **HTTP**: `GET /v2/Voice/Reports/PhoneNumbers/Outbound/{reportId}` (Default4 (insights))
- **Notes**: Get Outbound Phone Numbers Level Report for the given Report Id.
- **Signature**: `ListOutboundPhoneNumbersReport(string reportId, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListOutboundPhoneNumbersReports`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)
