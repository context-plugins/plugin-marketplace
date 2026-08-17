<!-- Generated file — do not edit; regenerated with the SDK. -->

# VideoV1SubscribeRules — operations

Accessor: `client.VideoV1SubscribeRules` · Source: `Api/VideoV1SubscribeRules.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### FetchRoomParticipantSubscribeRule

- **Server group**: `Default6`
- **Signature**: `FetchRoomParticipantSubscribeRule(string roomSid, string participantSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `VideoV1RoomRoomParticipantRoomParticipantSubscribeRule`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `VideoV1RoomRoomParticipantRoomParticipantSubscribeRule` | `Models/VideoV1RoomRoomParticipantRoomParticipantSubscribeRule.cs` |

### UpdateRoomParticipantSubscribeRule

- **Server group**: `Default6`
- **Signature**: `UpdateRoomParticipantSubscribeRule(string roomSid, string participantSid, object? rules, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `rules` — nullable, no default → **must pass explicitly**
- **Returns**: `VideoV1RoomRoomParticipantRoomParticipantSubscribeRule`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `VideoV1RoomRoomParticipantRoomParticipantSubscribeRule` | `Models/VideoV1RoomRoomParticipantRoomParticipantSubscribeRule.cs` |

