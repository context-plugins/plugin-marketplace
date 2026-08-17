<!-- Generated file — do not edit; regenerated with the SDK. -->

# VideoV1Participant — operations

Accessor: `client.VideoV1Participant` · Source: `Api/VideoV1Participant.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### FetchRoomParticipant

- **Server group**: `Default6`
- **Signature**: `FetchRoomParticipant(string roomSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `VideoV1RoomRoomParticipant`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `VideoV1RoomRoomParticipant` | `Models/VideoV1RoomRoomParticipant.cs` |

### ListRoomParticipant

- **Server group**: `Default6`
- **Signature**: `ListRoomParticipant(string roomSid, RoomParticipantEnumStatus? status, string? identity, DateTimeOffset? dateCreatedAfter, DateTimeOffset? dateCreatedBefore, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`status` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `Status` ← `status`, `Identity` ← `identity`, `DateCreatedAfter` ← `dateCreatedAfter`, `DateCreatedBefore` ← `dateCreatedBefore`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListRoomParticipantResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `RoomParticipantEnumStatus` | `Models/Enums/RoomParticipantEnumStatus.cs` |
| `ListRoomParticipantResponse` | `Models/ListRoomParticipantResponse.cs` |

### UpdateRoomParticipant

- **Server group**: `Default6`
- **Signature**: `UpdateRoomParticipant(string roomSid, string sid, RoomParticipantEnumStatus? status, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `status` — nullable, no default → **must pass explicitly**
- **Returns**: `VideoV1RoomRoomParticipant`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `RoomParticipantEnumStatus` | `Models/Enums/RoomParticipantEnumStatus.cs` |
| `VideoV1RoomRoomParticipant` | `Models/VideoV1RoomRoomParticipant.cs` |

