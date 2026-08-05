# Api20100401CredentialList — operations

Accessor: `client.Api20100401CredentialList` · Source: `Api/Api20100401CredentialList.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateSipCredentialList
- **HTTP**: `POST /2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists.json` (Default (api))
- **Notes**: Create a Credential List
- **Signature**: `CreateSipCredentialList(string accountSid, string friendlyName, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `FriendlyName` ← `friendlyName`
- **Returns**: `ApiV2010AccountSipSipCredentialList`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteSipCredentialList
- **HTTP**: `DELETE /2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists/{Sid}.json` (Default (api))
- **Notes**: Delete a Credential List
- **Signature**: `DeleteSipCredentialList(string accountSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchSipCredentialList
- **HTTP**: `GET /2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists/{Sid}.json` (Default (api))
- **Notes**: Get a Credential List
- **Signature**: `FetchSipCredentialList(string accountSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ApiV2010AccountSipSipCredentialList`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListSipCredentialList
- **HTTP**: `GET /2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists.json` (Default (api))
- **Notes**: Get All Credential Lists
- **Signature**: `ListSipCredentialList(string accountSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListSipCredentialListResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateSipCredentialList
- **HTTP**: `POST /2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists/{Sid}.json` (Default (api))
- **Notes**: Update a Credential List
- **Signature**: `UpdateSipCredentialList(string accountSid, string sid, string friendlyName, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `FriendlyName` ← `friendlyName`
- **Returns**: `ApiV2010AccountSipSipCredentialList`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
