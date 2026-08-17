<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401ConferenceRecording — operations

Accessor: `client.Api20100401ConferenceRecording` · Source: `Api/Api20100401ConferenceRecording.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteConferenceRecording

- **Signature**: `DeleteConferenceRecording(string accountSid, string conferenceSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchConferenceRecording

- **Signature**: `FetchConferenceRecording(string accountSid, string conferenceSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ApiV2010AccountConferenceConferenceRecording`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ApiV2010AccountConferenceConferenceRecording` | `Models/ApiV2010AccountConferenceConferenceRecording.cs` |

### ListConferenceRecording

- **Signature**: `ListConferenceRecording(string accountSid, string conferenceSid, DateTimeOffset? dateCreated, DateTimeOffset? dateCreatedQuery, DateTimeOffset? dateCreatedQueryQuery, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`dateCreated` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `DateCreated` ← `dateCreated`, `DateCreated<` ← `dateCreatedQuery`, `DateCreated>` ← `dateCreatedQueryQuery`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListConferenceRecordingResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListConferenceRecordingResponse` | `Models/ListConferenceRecordingResponse.cs` |

### UpdateConferenceRecording

- **Signature**: `UpdateConferenceRecording(string accountSid, string conferenceSid, string sid, ConferenceRecordingEnumStatus status, string? pauseBehavior, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pauseBehavior` — nullable, no default → **must pass explicitly**
- **Returns**: `ApiV2010AccountConferenceConferenceRecording`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ConferenceRecordingEnumStatus` | `Models/Enums/ConferenceRecordingEnumStatus.cs` |
| `ApiV2010AccountConferenceConferenceRecording` | `Models/ApiV2010AccountConferenceConferenceRecording.cs` |

