<!-- Generated file — do not edit; regenerated with the SDK. -->

# FlexV1Assessments — operations

Accessor: `client.FlexV1Assessments` · Source: `Api/FlexV1Assessments.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateInsightsAssessments

- **Server group**: `Default13`
- **Signature**: `CreateInsightsAssessments(string? authorization, string categorySid, string categoryName, string segmentId, string agentId, double offset, string metricId, string metricName, string answerText, string answerId, string questionnaireSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `authorization` — nullable, no default → **must pass explicitly**
- **Returns**: `FlexV1InsightsAssessments`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `FlexV1InsightsAssessments` | `Models/FlexV1InsightsAssessments.cs` |

### ListInsightsAssessments

- **Server group**: `Default13`
- **Signature**: `ListInsightsAssessments(string? segmentId, long? pageSize, int? page, string? pageToken, string? authorization, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`segmentId` … `authorization`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `SegmentId` ← `segmentId`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListInsightsAssessmentsResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListInsightsAssessmentsResponse` | `Models/ListInsightsAssessmentsResponse.cs` |

### UpdateInsightsAssessments

- **Server group**: `Default13`
- **Signature**: `UpdateInsightsAssessments(string assessmentSid, string? authorization, double offset, string answerText, string answerId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `authorization` — nullable, no default → **must pass explicitly**
- **Returns**: `FlexV1InsightsAssessments`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `FlexV1InsightsAssessments` | `Models/FlexV1InsightsAssessments.cs` |

