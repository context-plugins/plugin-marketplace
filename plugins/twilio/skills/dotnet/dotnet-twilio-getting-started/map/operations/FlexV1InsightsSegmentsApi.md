<!-- Generated file — do not edit; regenerated with the SDK. -->

# FlexV1InsightsSegmentsApi — operations

Accessor: `client.FlexV1InsightsSegmentsApi` · Source: `Api/FlexV1InsightsSegmentsApi.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ListInsightsSegments

- **Server group**: `Default13`
- **Signature**: `ListInsightsSegments(string? segmentId, IReadOnlyList<string>? reservationId, long? pageSize, int? page, string? pageToken, string? authorization, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`segmentId` … `authorization`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `SegmentId` ← `segmentId`, `ReservationId` ← `reservationId`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListInsightsSegmentsResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListInsightsSegmentsResponse` | `Models/ListInsightsSegmentsResponse.cs` |

