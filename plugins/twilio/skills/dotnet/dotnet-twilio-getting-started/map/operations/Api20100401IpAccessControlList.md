# Api20100401IpAccessControlList — operations

Accessor: `client.Api20100401IpAccessControlList` · Source: `Api/Api20100401IpAccessControlList.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateSipIpAccessControlList
- **HTTP**: `POST /2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists.json` (Default (api))
- **Notes**: Create a new IpAccessControlList resource
- **Signature**: `CreateSipIpAccessControlList(string accountSid, string friendlyName, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `FriendlyName` ← `friendlyName`
- **Returns**: `ApiV2010AccountSipSipIpAccessControlList`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteSipIpAccessControlList
- **HTTP**: `DELETE /2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists/{Sid}.json` (Default (api))
- **Notes**: Delete an IpAccessControlList from the requested account
- **Signature**: `DeleteSipIpAccessControlList(string accountSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchSipIpAccessControlList
- **HTTP**: `GET /2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists/{Sid}.json` (Default (api))
- **Notes**: Fetch a specific instance of an IpAccessControlList
- **Signature**: `FetchSipIpAccessControlList(string accountSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ApiV2010AccountSipSipIpAccessControlList`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListSipIpAccessControlList
- **HTTP**: `GET /2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists.json` (Default (api))
- **Notes**: Retrieve a list of IpAccessControlLists that belong to the account used to make the request
- **Signature**: `ListSipIpAccessControlList(string accountSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListSipIpAccessControlListResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateSipIpAccessControlList
- **HTTP**: `POST /2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists/{Sid}.json` (Default (api))
- **Notes**: Rename an IpAccessControlList
- **Signature**: `UpdateSipIpAccessControlList(string accountSid, string sid, string friendlyName, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `FriendlyName` ← `friendlyName`
- **Returns**: `ApiV2010AccountSipSipIpAccessControlList`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
