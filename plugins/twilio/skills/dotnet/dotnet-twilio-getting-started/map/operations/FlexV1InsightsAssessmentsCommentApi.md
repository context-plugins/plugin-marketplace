<!-- Generated file — do not edit; regenerated with the SDK. -->

# FlexV1InsightsAssessmentsCommentApi — operations

Accessor: `client.FlexV1InsightsAssessmentsCommentApi` · Source: `Api/FlexV1InsightsAssessmentsCommentApi.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateInsightsAssessmentsComment

- **Server group**: `Default13`
- **Signature**: `CreateInsightsAssessmentsComment(string? authorization, string categoryId, string categoryName, string comment, string segmentId, string agentId, double offset, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `authorization` — nullable, no default → **must pass explicitly**
- **Returns**: `FlexV1InsightsAssessmentsComment`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `FlexV1InsightsAssessmentsComment` | `Models/FlexV1InsightsAssessmentsComment.cs` |

### ListInsightsAssessmentsComment

- **Server group**: `Default13`
- **Signature**: `ListInsightsAssessmentsComment(string? segmentId, string? agentId, long? pageSize, int? page, string? pageToken, string? authorization, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`segmentId` … `authorization`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `SegmentId` ← `segmentId`, `AgentId` ← `agentId`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListInsightsAssessmentsCommentResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListInsightsAssessmentsCommentResponse` | `Models/ListInsightsAssessmentsCommentResponse.cs` |

