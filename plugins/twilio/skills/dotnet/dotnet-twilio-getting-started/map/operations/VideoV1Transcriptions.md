<!-- Generated file — do not edit; regenerated with the SDK. -->

# VideoV1Transcriptions — operations

Accessor: `client.VideoV1Transcriptions` · Source: `Api/VideoV1Transcriptions.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateRoomTranscriptions

- **Server group**: `Default6`
- **Signature**: `CreateRoomTranscriptions(string roomSid, object? configuration, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `configuration` — nullable, no default → **must pass explicitly**
- **Returns**: `VideoV1RoomRoomTranscriptions`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `VideoV1RoomRoomTranscriptions` | `Models/VideoV1RoomRoomTranscriptions.cs` |

### FetchRoomTranscriptions

- **Server group**: `Default6`
- **Signature**: `FetchRoomTranscriptions(string roomSid, string ttid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `VideoV1RoomRoomTranscriptions`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `VideoV1RoomRoomTranscriptions` | `Models/VideoV1RoomRoomTranscriptions.cs` |

### ListRoomTranscriptions

- **Server group**: `Default6`
- **Signature**: `ListRoomTranscriptions(string roomSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListRoomTranscriptionsResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListRoomTranscriptionsResponse` | `Models/ListRoomTranscriptionsResponse.cs` |

### UpdateRoomTranscriptions

- **Server group**: `Default6`
- **Signature**: `UpdateRoomTranscriptions(string roomSid, string ttid, RoomTranscriptionsEnumStatus? status, object? configuration, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `status` — nullable, no default → **must pass explicitly**
  - `configuration` — nullable, no default → **must pass explicitly**
- **Returns**: `VideoV1RoomRoomTranscriptions`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `RoomTranscriptionsEnumStatus` | `Models/Enums/RoomTranscriptionsEnumStatus.cs` |
| `VideoV1RoomRoomTranscriptions` | `Models/VideoV1RoomRoomTranscriptions.cs` |

