<!-- Generated file — do not edit; regenerated with the SDK. -->

# InsightsV1CreateOutboundPhoneNumbersReport — operations

Accessor: `client.InsightsV1CreateOutboundPhoneNumbersReport` · Source: `Api/InsightsV1CreateOutboundPhoneNumbersReport.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateOutboundPhoneNumbersReport

- **Server group**: `Default14`
- **Signature**: `CreateOutboundPhoneNumbersReport(InsightsV2CreatePhoneNumbersReportRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `InsightsV2CreateReportResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `InsightsV2CreatePhoneNumbersReportRequest` | `Models/InsightsV2CreatePhoneNumbersReportRequest.cs` |
| `InsightsV2CreateReportResponse` | `Models/InsightsV2CreateReportResponse.cs` |

