# Api20100401ConnectApp — operations

Accessor: `client.Api20100401ConnectApp` · Source: `Api/Api20100401ConnectApp.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DeleteConnectApp
- **HTTP**: `DELETE /2010-04-01/Accounts/{AccountSid}/ConnectApps/{Sid}.json` (Default (api))
- **Notes**: Delete an instance of a connect-app
- **Signature**: `DeleteConnectApp(string accountSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchConnectApp
- **HTTP**: `GET /2010-04-01/Accounts/{AccountSid}/ConnectApps/{Sid}.json` (Default (api))
- **Notes**: Fetch an instance of a connect-app
- **Signature**: `FetchConnectApp(string accountSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ApiV2010AccountConnectApp`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListConnectApp
- **HTTP**: `GET /2010-04-01/Accounts/{AccountSid}/ConnectApps.json` (Default (api))
- **Notes**: Retrieve a list of connect-apps belonging to the account used to make the request
- **Signature**: `ListConnectApp(string accountSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListConnectAppResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateConnectApp
- **HTTP**: `POST /2010-04-01/Accounts/{AccountSid}/ConnectApps/{Sid}.json` (Default (api))
- **Notes**: Update a connect-app with the specified parameters
- **Signature**: `UpdateConnectApp(string accountSid, string sid, string? authorizeRedirectUrl, string? companyName, DeauthorizeCallbackMethod1? deauthorizeCallbackMethod, string? deauthorizeCallbackUrl, string? description, string? friendlyName, string? homepageUrl, IReadOnlyList<ConnectAppEnumPermission>? permissions, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 8 params (`authorizeRedirectUrl` … `permissions`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `AuthorizeRedirectUrl` ← `authorizeRedirectUrl`, `CompanyName` ← `companyName`, `DeauthorizeCallbackMethod` ← `deauthorizeCallbackMethod`, `DeauthorizeCallbackUrl` ← `deauthorizeCallbackUrl`, `Description` ← `description`, `FriendlyName` ← `friendlyName`, `HomepageUrl` ← `homepageUrl`, `Permissions` ← `permissions`
- **Returns**: `ApiV2010AccountConnectApp`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
