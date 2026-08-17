<!-- Generated file — do not edit; regenerated with the SDK. -->

# InsightsV1Room — operations

Accessor: `client.InsightsV1Room` · Source: `Api/InsightsV1Room.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### FetchVideoRoomSummary

- **Server group**: `Default14`
- **Signature**: `FetchVideoRoomSummary(string roomSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `InsightsV1VideoRoomSummary`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `InsightsV1VideoRoomSummary` | `Models/InsightsV1VideoRoomSummary.cs` |

### ListVideoRoomSummary

- **Server group**: `Default14`
- **Signature**: `ListVideoRoomSummary(IReadOnlyList<VideoRoomSummaryEnumRoomType>? roomType, IReadOnlyList<VideoRoomSummaryEnumCodec>? codec, string? roomName, DateTimeOffset? createdAfter, DateTimeOffset? createdBefore, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 8 params (`roomType` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `RoomType` ← `roomType`, `Codec` ← `codec`, `RoomName` ← `roomName`, `CreatedAfter` ← `createdAfter`, `CreatedBefore` ← `createdBefore`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListVideoRoomSummaryResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `VideoRoomSummaryEnumRoomType` | `Models/Enums/VideoRoomSummaryEnumRoomType.cs` |
| `VideoRoomSummaryEnumCodec` | `Models/Enums/VideoRoomSummaryEnumCodec.cs` |
| `ListVideoRoomSummaryResponse` | `Models/ListVideoRoomSummaryResponse.cs` |

