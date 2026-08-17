<!-- Generated file — do not edit; regenerated with the SDK. -->

# InsightsV1CreateAccountReport — operations

Accessor: `client.InsightsV1CreateAccountReport` · Source: `Api/InsightsV1CreateAccountReport.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateAccountReport

- **Server group**: `Default14`
- **Signature**: `CreateAccountReport(InsightsV2CreateAccountReportRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `InsightsV2CreateReportResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `InsightsV2CreateAccountReportRequest` | `Models/InsightsV2CreateAccountReportRequest.cs` |
| `InsightsV2CreateReportResponse` | `Models/InsightsV2CreateReportResponse.cs` |

