<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401CallRecording — operations

Accessor: `client.Api20100401CallRecording` · Source: `Api/Api20100401CallRecording.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateCallRecording

- **Signature**: `CreateCallRecording(string accountSid, string callSid, IReadOnlyList<string>? recordingStatusCallbackEvent, string? recordingStatusCallback, RecordingStatusCallbackMethod1? recordingStatusCallbackMethod, string? trim, string? recordingChannels, string? recordingTrack, string? recordingConfigurationId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`recordingStatusCallbackEvent` … `recordingConfigurationId`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `ApiV2010AccountCallCallRecording`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `RecordingStatusCallbackMethod1` | `Models/Enums/RecordingStatusCallbackMethod1.cs` |
| `ApiV2010AccountCallCallRecording` | `Models/ApiV2010AccountCallCallRecording.cs` |

### DeleteCallRecording

- **Signature**: `DeleteCallRecording(string accountSid, string callSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchCallRecording

- **Signature**: `FetchCallRecording(string accountSid, string callSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ApiV2010AccountCallCallRecording`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ApiV2010AccountCallCallRecording` | `Models/ApiV2010AccountCallCallRecording.cs` |

### ListCallRecording

- **Signature**: `ListCallRecording(string accountSid, string callSid, DateTimeOffset? dateCreated, DateTimeOffset? dateCreatedQuery, DateTimeOffset? dateCreatedQueryQuery, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`dateCreated` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `DateCreated` ← `dateCreated`, `DateCreated<` ← `dateCreatedQuery`, `DateCreated>` ← `dateCreatedQueryQuery`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListCallRecordingResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListCallRecordingResponse` | `Models/ListCallRecordingResponse.cs` |

### UpdateCallRecording

- **Signature**: `UpdateCallRecording(string accountSid, string callSid, string sid, CallRecordingEnumStatus status, string? pauseBehavior, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pauseBehavior` — nullable, no default → **must pass explicitly**
- **Returns**: `ApiV2010AccountCallCallRecording`
- **Error**: `SdkException<UpdateCallRecordingError>` — **Case A (typed)**
- **Error accessors**: `TryGetAccountsCallsRecordingsSidJson201041408Error1(out AccountsCallsRecordingsSidJson201041408Error1)` [408] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `CallRecordingEnumStatus` | `Models/Enums/CallRecordingEnumStatus.cs` |
| `ApiV2010AccountCallCallRecording` | `Models/ApiV2010AccountCallCallRecording.cs` |
| `UpdateCallRecordingError` | `Errors/UpdateCallRecordingError.cs` |
| `AccountsCallsRecordingsSidJson201041408Error1` | `Models/AccountsCallsRecordingsSidJson201041408Error1.cs` |

