<!-- Generated file — do not edit; regenerated with the SDK. -->

# VideoV1RecordingApi — operations

Accessor: `client.VideoV1RecordingApi` · Source: `Api/VideoV1RecordingApi.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteRecording2

- **Server group**: `Default6`
- **Signature**: `DeleteRecording2(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchRecording2

- **Server group**: `Default6`
- **Signature**: `FetchRecording2(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `VideoV1Recording`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `VideoV1Recording` | `Models/VideoV1Recording.cs` |

### ListRecording2

- **Server group**: `Default6`
- **Signature**: `ListRecording2(RecordingEnumStatus1? status, string? sourceSid, IReadOnlyList<string>? groupingSid, DateTimeOffset? dateCreatedAfter, DateTimeOffset? dateCreatedBefore, RecordingEnumType? mediaType, int? page, string? pageToken, long? pageSize = 50L, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 8 params (`status` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `pageSize` = `50L`
- **Query params (wire ← C#)**: `Status` ← `status`, `SourceSid` ← `sourceSid`, `GroupingSid` ← `groupingSid`, `DateCreatedAfter` ← `dateCreatedAfter`, `DateCreatedBefore` ← `dateCreatedBefore`, `MediaType` ← `mediaType`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListRecordingResponse1`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `RecordingEnumStatus1` | `Models/Enums/RecordingEnumStatus1.cs` |
| `RecordingEnumType` | `Models/Enums/RecordingEnumType.cs` |
| `ListRecordingResponse1` | `Models/ListRecordingResponse1.cs` |

