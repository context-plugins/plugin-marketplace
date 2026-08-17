<!-- Generated file — do not edit; regenerated with the SDK. -->

# FlexV1InsightsConversationsApi — operations

Accessor: `client.FlexV1InsightsConversationsApi` · Source: `Api/FlexV1InsightsConversationsApi.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ListInsightsConversations

- **Server group**: `Default13`
- **Signature**: `ListInsightsConversations(string? segmentId, long? pageSize, int? page, string? pageToken, string? authorization, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`segmentId` … `authorization`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `SegmentId` ← `segmentId`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListInsightsConversationsResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListInsightsConversationsResponse` | `Models/ListInsightsConversationsResponse.cs` |

