<!-- Generated file — do not edit; regenerated with the SDK. -->

# InsightsV1GetOutboundPhoneNumbersReport — operations

Accessor: `client.InsightsV1GetOutboundPhoneNumbersReport` · Source: `Api/InsightsV1GetOutboundPhoneNumbersReport.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ListOutboundPhoneNumbersReport

- **Server group**: `Default14`
- **Signature**: `ListOutboundPhoneNumbersReport(string reportId, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListOutboundPhoneNumbersReports`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListOutboundPhoneNumbersReports` | `Models/ListOutboundPhoneNumbersReports.cs` |

