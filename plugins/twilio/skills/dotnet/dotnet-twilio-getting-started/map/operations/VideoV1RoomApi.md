<!-- Generated file — do not edit; regenerated with the SDK. -->

# VideoV1RoomApi — operations

Accessor: `client.VideoV1RoomApi` · Source: `Api/VideoV1RoomApi.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateRoom

- **Server group**: `Default6`
- **Signature**: `CreateRoom(bool? enableTurn, RoomEnumRoomType? type, string? uniqueName, string? statusCallback, AmdStatusCallbackMethod? statusCallbackMethod, int? maxParticipants, bool? recordParticipantsOnConnect, bool? transcribeParticipantsOnConnect, IReadOnlyList<RoomEnumVideoCodec>? videoCodecs, string? mediaRegion, object? recordingRules, object? transcriptionsConfiguration, bool? audioOnly, int? maxParticipantDuration, int? emptyRoomTimeout, int? unusedRoomTimeout, bool? largeRoom, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 17 params (`enableTurn` … `largeRoom`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `VideoV1Room`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `RoomEnumRoomType` | `Models/Enums/RoomEnumRoomType.cs` |
| `AmdStatusCallbackMethod` | `Models/Enums/AmdStatusCallbackMethod.cs` |
| `RoomEnumVideoCodec` | `Models/Enums/RoomEnumVideoCodec.cs` |
| `VideoV1Room` | `Models/VideoV1Room.cs` |

### FetchRoom

- **Server group**: `Default6`
- **Signature**: `FetchRoom(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `VideoV1Room`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `VideoV1Room` | `Models/VideoV1Room.cs` |

### ListRoom

- **Server group**: `Default6`
- **Signature**: `ListRoom(RecordingTranscriptionEnumStatus? status, string? uniqueName, DateTimeOffset? dateCreatedAfter, DateTimeOffset? dateCreatedBefore, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`status` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `Status` ← `status`, `UniqueName` ← `uniqueName`, `DateCreatedAfter` ← `dateCreatedAfter`, `DateCreatedBefore` ← `dateCreatedBefore`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListRoomResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `RecordingTranscriptionEnumStatus` | `Models/Enums/RecordingTranscriptionEnumStatus.cs` |
| `ListRoomResponse` | `Models/ListRoomResponse.cs` |

### UpdateRoom

- **Server group**: `Default6`
- **Signature**: `UpdateRoom(string sid, RecordingTranscriptionEnumStatus status, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `VideoV1Room`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `RecordingTranscriptionEnumStatus` | `Models/Enums/RecordingTranscriptionEnumStatus.cs` |
| `VideoV1Room` | `Models/VideoV1Room.cs` |

