# Api20100401Conference — operations

Accessor: `client.Api20100401Conference` · Source: `Api/Api20100401Conference.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### FetchConference
- **HTTP**: `GET /2010-04-01/Accounts/{AccountSid}/Conferences/{Sid}.json` (Default (api))
- **Notes**: Fetch an instance of a conference
- **Signature**: `FetchConference(string accountSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ApiV2010AccountConference`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListConference
- **HTTP**: `GET /2010-04-01/Accounts/{AccountSid}/Conferences.json` (Default (api))
- **Notes**: Retrieve a list of conferences belonging to the account used to make the request
- **Signature**: `ListConference(string accountSid, DateTimeOffset? dateCreated, DateTimeOffset? dateCreatedQuery, DateTimeOffset? dateCreatedQueryQuery, DateTimeOffset? dateUpdated, DateTimeOffset? dateUpdatedQuery, DateTimeOffset? dateUpdatedQueryQuery, string? friendlyName, ConferenceEnumStatus? status, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 11 params (`dateCreated` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `DateCreated` ← `dateCreated`, `DateCreated<` ← `dateCreatedQuery`, `DateCreated>` ← `dateCreatedQueryQuery`, `DateUpdated` ← `dateUpdated`, `DateUpdated<` ← `dateUpdatedQuery`, `DateUpdated>` ← `dateUpdatedQueryQuery`, `FriendlyName` ← `friendlyName`, `Status` ← `status`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListConferenceResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateConference
- **HTTP**: `POST /2010-04-01/Accounts/{AccountSid}/Conferences/{Sid}.json` (Default (api))
- **Signature**: `UpdateConference(string accountSid, string sid, ConferenceEnumUpdateStatus? status, string? announceUrl, AnnounceMethod? announceMethod, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `status` — nullable, no default → **must pass explicitly**
  - `announceUrl` — nullable, no default → **must pass explicitly**
  - `announceMethod` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Status` ← `status`, `AnnounceUrl` ← `announceUrl`, `AnnounceMethod` ← `announceMethod`
- **Returns**: `ApiV2010AccountConference`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
