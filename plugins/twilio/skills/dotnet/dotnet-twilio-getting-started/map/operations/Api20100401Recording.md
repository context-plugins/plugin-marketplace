<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401Recording — operations

Accessor: `client.Api20100401Recording` · Source: `Api/Api20100401Recording.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteRecording

- **Signature**: `DeleteRecording(string accountSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchRecording

- **Signature**: `FetchRecording(string accountSid, string sid, bool? includeSoftDeleted, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `includeSoftDeleted` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `IncludeSoftDeleted` ← `includeSoftDeleted`
- **Returns**: `ApiV2010AccountRecording`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ApiV2010AccountRecording` | `Models/ApiV2010AccountRecording.cs` |

### ListRecording

- **Signature**: `ListRecording(string accountSid, DateTimeOffset? dateCreated, DateTimeOffset? dateCreatedQuery, DateTimeOffset? dateCreatedQueryQuery, string? callSid, string? conferenceSid, bool? includeSoftDeleted, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 9 params (`dateCreated` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `DateCreated` ← `dateCreated`, `DateCreated<` ← `dateCreatedQuery`, `DateCreated>` ← `dateCreatedQueryQuery`, `CallSid` ← `callSid`, `ConferenceSid` ← `conferenceSid`, `IncludeSoftDeleted` ← `includeSoftDeleted`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListRecordingResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListRecordingResponse` | `Models/ListRecordingResponse.cs` |

