<!-- Generated file — do not edit; regenerated with the SDK. -->

# InsightsV1GetInboundPhoneNumbersReport — operations

Accessor: `client.InsightsV1GetInboundPhoneNumbersReport` · Source: `Api/InsightsV1GetInboundPhoneNumbersReport.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ListInboundPhoneNumbersReport

- **Server group**: `Default14`
- **Signature**: `ListInboundPhoneNumbersReport(string reportId, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListInboundPhoneNumbersReports`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListInboundPhoneNumbersReports` | `Models/ListInboundPhoneNumbersReports.cs` |

