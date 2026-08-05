# Api20100401CallRecording — operations

Accessor: `client.Api20100401CallRecording` · Source: `Api/Api20100401CallRecording.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateCallRecording
- **HTTP**: `POST /2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Recordings.json` (Default (api))
- **Notes**: Create a recording for the call
- **Signature**: `CreateCallRecording(string accountSid, string callSid, IReadOnlyList<string>? recordingStatusCallbackEvent, string? recordingStatusCallback, RecordingStatusCallbackMethod1? recordingStatusCallbackMethod, string? trim, string? recordingChannels, string? recordingTrack, string? recordingConfigurationId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`recordingStatusCallbackEvent` … `recordingConfigurationId`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `RecordingStatusCallbackEvent` ← `recordingStatusCallbackEvent`, `RecordingStatusCallback` ← `recordingStatusCallback`, `RecordingStatusCallbackMethod` ← `recordingStatusCallbackMethod`, `Trim` ← `trim`, `RecordingChannels` ← `recordingChannels`, `RecordingTrack` ← `recordingTrack`, `RecordingConfigurationId` ← `recordingConfigurationId`
- **Returns**: `ApiV2010AccountCallCallRecording`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteCallRecording
- **HTTP**: `DELETE /2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Recordings/{Sid}.json` (Default (api))
- **Notes**: Delete a recording from your account
- **Signature**: `DeleteCallRecording(string accountSid, string callSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchCallRecording
- **HTTP**: `GET /2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Recordings/{Sid}.json` (Default (api))
- **Notes**: Fetch an instance of a recording for a call
- **Signature**: `FetchCallRecording(string accountSid, string callSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ApiV2010AccountCallCallRecording`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListCallRecording
- **HTTP**: `GET /2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Recordings.json` (Default (api))
- **Notes**: Retrieve a list of recordings belonging to the call used to make the request
- **Signature**: `ListCallRecording(string accountSid, string callSid, DateTimeOffset? dateCreated, DateTimeOffset? dateCreatedQuery, DateTimeOffset? dateCreatedQueryQuery, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`dateCreated` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `DateCreated` ← `dateCreated`, `DateCreated<` ← `dateCreatedQuery`, `DateCreated>` ← `dateCreatedQueryQuery`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListCallRecordingResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateCallRecording
- **HTTP**: `POST /2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Recordings/{Sid}.json` (Default (api))
- **Notes**: Changes the status of the recording to paused, stopped, or in-progress. Note: Pass `Twilio.CURRENT` instead of recording sid to reference current active recording.
- **Signature**: `UpdateCallRecording(string accountSid, string callSid, string sid, CallRecordingEnumStatus status, string? pauseBehavior, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pauseBehavior` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Status` ← `status`, `PauseBehavior` ← `pauseBehavior`
- **Returns**: `ApiV2010AccountCallCallRecording`
- **Error**: `SdkException<UpdateCallRecordingError>` — **Case A (typed)**
- **Error accessors**: `TryGetAccountsCallsRecordingsSidJson201041408Error1(out AccountsCallsRecordingsSidJson201041408Error1)` [408] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
