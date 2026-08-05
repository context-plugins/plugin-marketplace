# Api20100401ShortCode — operations

Accessor: `client.Api20100401ShortCode` · Source: `Api/Api20100401ShortCode.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### FetchShortCode
- **HTTP**: `GET /2010-04-01/Accounts/{AccountSid}/SMS/ShortCodes/{Sid}.json` (Default (api))
- **Notes**: Fetch an instance of a short code
- **Signature**: `FetchShortCode(string accountSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ApiV2010AccountShortCode`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListShortCode
- **HTTP**: `GET /2010-04-01/Accounts/{AccountSid}/SMS/ShortCodes.json` (Default (api))
- **Notes**: Retrieve a list of short-codes belonging to the account used to make the request
- **Signature**: `ListShortCode(string accountSid, string? friendlyName, string? shortCode, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`friendlyName` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `FriendlyName` ← `friendlyName`, `ShortCode` ← `shortCode`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListShortCodeResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateShortCode
- **HTTP**: `POST /2010-04-01/Accounts/{AccountSid}/SMS/ShortCodes/{Sid}.json` (Default (api))
- **Notes**: Update a short code with the following parameters
- **Signature**: `UpdateShortCode(string accountSid, string sid, string? friendlyName, string? apiVersion, string? smsUrl, SmsMethod14? smsMethod, string? smsFallbackUrl, SmsFallbackMethod14? smsFallbackMethod, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`friendlyName` … `smsFallbackMethod`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `FriendlyName` ← `friendlyName`, `ApiVersion` ← `apiVersion`, `SmsUrl` ← `smsUrl`, `SmsMethod` ← `smsMethod`, `SmsFallbackUrl` ← `smsFallbackUrl`, `SmsFallbackMethod` ← `smsFallbackMethod`
- **Returns**: `ApiV2010AccountShortCode`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
