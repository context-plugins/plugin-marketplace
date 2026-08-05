# Api20100401CallNotification — operations

Accessor: `client.Api20100401CallNotification` · Source: `Api/Api20100401CallNotification.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### FetchCallNotification
- **HTTP**: `GET /2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Notifications/{Sid}.json` (Default (api))
- **Signature**: `FetchCallNotification(string accountSid, string callSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ApiV2010AccountCallCallNotificationInstance`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListCallNotification
- **HTTP**: `GET /2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Notifications.json` (Default (api))
- **Signature**: `ListCallNotification(string accountSid, string callSid, int? log, DateTimeOffset? messageDate, DateTimeOffset? messageDateQuery, DateTimeOffset? messageDateQueryQuery, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`log` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Log` ← `log`, `MessageDate` ← `messageDate`, `MessageDate<` ← `messageDateQuery`, `MessageDate>` ← `messageDateQueryQuery`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListCallNotificationResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)
