# Api20100401ConferenceRecording — operations

Accessor: `client.Api20100401ConferenceRecording` · Source: `Api/Api20100401ConferenceRecording.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DeleteConferenceRecording
- **HTTP**: `DELETE /2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Recordings/{Sid}.json` (Default (api))
- **Notes**: Delete a recording from your account
- **Signature**: `DeleteConferenceRecording(string accountSid, string conferenceSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchConferenceRecording
- **HTTP**: `GET /2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Recordings/{Sid}.json` (Default (api))
- **Notes**: Fetch an instance of a recording for a call
- **Signature**: `FetchConferenceRecording(string accountSid, string conferenceSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ApiV2010AccountConferenceConferenceRecording`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListConferenceRecording
- **HTTP**: `GET /2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Recordings.json` (Default (api))
- **Notes**: Retrieve a list of recordings belonging to the call used to make the request
- **Signature**: `ListConferenceRecording(string accountSid, string conferenceSid, DateTimeOffset? dateCreated, DateTimeOffset? dateCreatedQuery, DateTimeOffset? dateCreatedQueryQuery, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`dateCreated` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `DateCreated` ← `dateCreated`, `DateCreated<` ← `dateCreatedQuery`, `DateCreated>` ← `dateCreatedQueryQuery`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListConferenceRecordingResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateConferenceRecording
- **HTTP**: `POST /2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Recordings/{Sid}.json` (Default (api))
- **Notes**: Changes the status of the recording to paused, stopped, or in-progress. Note: To use `Twilio.CURRENT`, pass it as recording sid.
- **Signature**: `UpdateConferenceRecording(string accountSid, string conferenceSid, string sid, ConferenceRecordingEnumStatus status, string? pauseBehavior, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pauseBehavior` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Status` ← `status`, `PauseBehavior` ← `pauseBehavior`
- **Returns**: `ApiV2010AccountConferenceConferenceRecording`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
