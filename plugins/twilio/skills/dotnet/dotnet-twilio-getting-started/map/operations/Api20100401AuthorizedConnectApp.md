# Api20100401AuthorizedConnectApp — operations

Accessor: `client.Api20100401AuthorizedConnectApp` · Source: `Api/Api20100401AuthorizedConnectApp.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### FetchAuthorizedConnectApp
- **HTTP**: `GET /2010-04-01/Accounts/{AccountSid}/AuthorizedConnectApps/{ConnectAppSid}.json` (Default (api))
- **Notes**: Fetch an instance of an authorized-connect-app
- **Signature**: `FetchAuthorizedConnectApp(string accountSid, string connectAppSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ApiV2010AccountAuthorizedConnectApp`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListAuthorizedConnectApp
- **HTTP**: `GET /2010-04-01/Accounts/{AccountSid}/AuthorizedConnectApps.json` (Default (api))
- **Notes**: Retrieve a list of authorized-connect-apps belonging to the account used to make the request
- **Signature**: `ListAuthorizedConnectApp(string accountSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListAuthorizedConnectAppResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)
