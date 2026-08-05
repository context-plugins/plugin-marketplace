# Api20100401Recording — operations

Accessor: `client.Api20100401Recording` · Source: `Api/Api20100401Recording.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DeleteRecording
- **HTTP**: `DELETE /2010-04-01/Accounts/{AccountSid}/Recordings/{Sid}.json` (Default (api))
- **Notes**: Delete a recording from your account
- **Signature**: `DeleteRecording(string accountSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchRecording
- **HTTP**: `GET /2010-04-01/Accounts/{AccountSid}/Recordings/{Sid}.json` (Default (api))
- **Notes**: Fetch an instance of a recording
- **Signature**: `FetchRecording(string accountSid, string sid, bool? includeSoftDeleted, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `includeSoftDeleted` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `IncludeSoftDeleted` ← `includeSoftDeleted`
- **Returns**: `ApiV2010AccountRecording`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListRecording
- **HTTP**: `GET /2010-04-01/Accounts/{AccountSid}/Recordings.json` (Default (api))
- **Notes**: Retrieve a list of recordings belonging to the account used to make the request
- **Signature**: `ListRecording(string accountSid, DateTimeOffset? dateCreated, DateTimeOffset? dateCreatedQuery, DateTimeOffset? dateCreatedQueryQuery, string? callSid, string? conferenceSid, bool? includeSoftDeleted, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 9 params (`dateCreated` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `DateCreated` ← `dateCreated`, `DateCreated<` ← `dateCreatedQuery`, `DateCreated>` ← `dateCreatedQueryQuery`, `CallSid` ← `callSid`, `ConferenceSid` ← `conferenceSid`, `IncludeSoftDeleted` ← `includeSoftDeleted`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListRecordingResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)
