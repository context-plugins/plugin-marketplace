<!-- Generated file — do not edit; regenerated with the SDK. -->

# VideoV1RecordingRules — operations

Accessor: `client.VideoV1RecordingRules` · Source: `Api/VideoV1RecordingRules.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### FetchRoomRecordingRule

- **Server group**: `Default6`
- **Signature**: `FetchRoomRecordingRule(string roomSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `VideoV1RoomRoomRecordingRule`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `VideoV1RoomRoomRecordingRule` | `Models/VideoV1RoomRoomRecordingRule.cs` |

### UpdateRoomRecordingRule

- **Server group**: `Default6`
- **Signature**: `UpdateRoomRecordingRule(string roomSid, object? rules, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `rules` — nullable, no default → **must pass explicitly**
- **Returns**: `VideoV1RoomRoomRecordingRule`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `VideoV1RoomRoomRecordingRule` | `Models/VideoV1RoomRoomRecordingRule.cs` |

