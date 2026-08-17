<!-- Generated file — do not edit; regenerated with the SDK. -->

# InsightsV1CallSummaryApi — operations

Accessor: `client.InsightsV1CallSummaryApi` · Source: `Api/InsightsV1CallSummaryApi.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### FetchSummary

- **Server group**: `Default14`
- **Signature**: `FetchSummary(string callSid, SummaryEnumProcessingState? processingState, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `processingState` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `ProcessingState` ← `processingState`
- **Returns**: `InsightsV1CallSummary`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `SummaryEnumProcessingState` | `Models/Enums/SummaryEnumProcessingState.cs` |
| `InsightsV1CallSummary` | `Models/InsightsV1CallSummary.cs` |

