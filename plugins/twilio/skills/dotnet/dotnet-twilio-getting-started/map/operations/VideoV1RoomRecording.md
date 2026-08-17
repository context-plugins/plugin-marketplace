<!-- Generated file — do not edit; regenerated with the SDK. -->

# VideoV1RoomRecording — operations

Accessor: `client.VideoV1RoomRecording` · Source: `Api/VideoV1RoomRecording.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteRoomRecording

- **Server group**: `Default6`
- **Signature**: `DeleteRoomRecording(string roomSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchRoomRecording

- **Server group**: `Default6`
- **Signature**: `FetchRoomRecording(string roomSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `VideoV1RoomRoomRecording`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `VideoV1RoomRoomRecording` | `Models/VideoV1RoomRoomRecording.cs` |

### ListRoomRecording

- **Server group**: `Default6`
- **Signature**: `ListRoomRecording(string roomSid, RoomRecordingEnumStatus? status, string? sourceSid, DateTimeOffset? dateCreatedAfter, DateTimeOffset? dateCreatedBefore, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`status` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `Status` ← `status`, `SourceSid` ← `sourceSid`, `DateCreatedAfter` ← `dateCreatedAfter`, `DateCreatedBefore` ← `dateCreatedBefore`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListRoomRecordingResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `RoomRecordingEnumStatus` | `Models/Enums/RoomRecordingEnumStatus.cs` |
| `ListRoomRecordingResponse` | `Models/ListRoomRecordingResponse.cs` |

