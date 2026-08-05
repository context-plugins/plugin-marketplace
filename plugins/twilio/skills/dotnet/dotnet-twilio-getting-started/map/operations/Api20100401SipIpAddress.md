# Api20100401SipIpAddress — operations

Accessor: `client.Api20100401SipIpAddress` · Source: `Api/Api20100401SipIpAddress.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateSipIpAddress
- **HTTP**: `POST /2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists/{IpAccessControlListSid}/IpAddresses.json` (Default (api))
- **Notes**: Create a new IpAddress resource.
- **Signature**: `CreateSipIpAddress(string accountSid, string ipAccessControlListSid, string friendlyName, string ipAddress, int? cidrPrefixLength, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `cidrPrefixLength` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `FriendlyName` ← `friendlyName`, `IpAddress` ← `ipAddress`, `CidrPrefixLength` ← `cidrPrefixLength`
- **Returns**: `ApiV2010AccountSipSipIpAccessControlListSipIpAddress`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteSipIpAddress
- **HTTP**: `DELETE /2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists/{IpAccessControlListSid}/IpAddresses/{Sid}.json` (Default (api))
- **Notes**: Delete an IpAddress resource.
- **Signature**: `DeleteSipIpAddress(string accountSid, string ipAccessControlListSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchSipIpAddress
- **HTTP**: `GET /2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists/{IpAccessControlListSid}/IpAddresses/{Sid}.json` (Default (api))
- **Notes**: Read one IpAddress resource.
- **Signature**: `FetchSipIpAddress(string accountSid, string ipAccessControlListSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ApiV2010AccountSipSipIpAccessControlListSipIpAddress`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListSipIpAddress
- **HTTP**: `GET /2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists/{IpAccessControlListSid}/IpAddresses.json` (Default (api))
- **Notes**: Read multiple IpAddress resources.
- **Signature**: `ListSipIpAddress(string accountSid, string ipAccessControlListSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListSipIpAddressResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateSipIpAddress
- **HTTP**: `POST /2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists/{IpAccessControlListSid}/IpAddresses/{Sid}.json` (Default (api))
- **Notes**: Update an IpAddress resource.
- **Signature**: `UpdateSipIpAddress(string accountSid, string ipAccessControlListSid, string sid, string? ipAddress, string? friendlyName, int? cidrPrefixLength, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `ipAddress` — nullable, no default → **must pass explicitly**
  - `friendlyName` — nullable, no default → **must pass explicitly**
  - `cidrPrefixLength` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `IpAddress` ← `ipAddress`, `FriendlyName` ← `friendlyName`, `CidrPrefixLength` ← `cidrPrefixLength`
- **Returns**: `ApiV2010AccountSipSipIpAccessControlListSipIpAddress`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
