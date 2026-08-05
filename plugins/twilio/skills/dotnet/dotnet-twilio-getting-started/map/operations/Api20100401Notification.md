# Api20100401Notification — operations

Accessor: `client.Api20100401Notification` · Source: `Api/Api20100401Notification.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### FetchNotification
- **HTTP**: `GET /2010-04-01/Accounts/{AccountSid}/Notifications/{Sid}.json` (Default (api))
- **Notes**: Fetch a notification belonging to the account used to make the request
- **Signature**: `FetchNotification(string accountSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ApiV2010AccountNotificationInstance`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListNotification
- **HTTP**: `GET /2010-04-01/Accounts/{AccountSid}/Notifications.json` (Default (api))
- **Notes**: Retrieve a list of notifications belonging to the account used to make the request
- **Signature**: `ListNotification(string accountSid, int? log, DateTimeOffset? messageDate, DateTimeOffset? messageDateQuery, DateTimeOffset? messageDateQueryQuery, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`log` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Log` ← `log`, `MessageDate` ← `messageDate`, `MessageDate<` ← `messageDateQuery`, `MessageDate>` ← `messageDateQueryQuery`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListNotificationResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)
