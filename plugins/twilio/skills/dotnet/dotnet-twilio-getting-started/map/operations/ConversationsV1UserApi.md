# ConversationsV1UserApi — operations

Accessor: `client.ConversationsV1UserApi` · Source: `Api/ConversationsV1UserApi.cs` · 10 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateServiceUser
- **HTTP**: `POST /v1/Services/{ChatServiceSid}/Users` (Default7 (conversations))
- **Notes**: Add a new conversation user to your service
- **Signature**: `CreateServiceUser(string chatServiceSid, Confirmation? xTwilioWebhookEnabled, string identity, string? friendlyName, string? attributes, string? roleSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`xTwilioWebhookEnabled` … `roleSid`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Identity` ← `identity`, `FriendlyName` ← `friendlyName`, `Attributes` ← `attributes`, `RoleSid` ← `roleSid`
- **Returns**: `ConversationsV1ServiceServiceUser`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CreateUser
- **HTTP**: `POST /v1/Users` (Default7 (conversations))
- **Notes**: Add a new conversation user to your account's default service
- **Signature**: `CreateUser(Confirmation? xTwilioWebhookEnabled, string identity, string? friendlyName, string? attributes, string? roleSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`xTwilioWebhookEnabled` … `roleSid`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Identity` ← `identity`, `FriendlyName` ← `friendlyName`, `Attributes` ← `attributes`, `RoleSid` ← `roleSid`
- **Returns**: `ConversationsV1User`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteServiceUser
- **HTTP**: `DELETE /v1/Services/{ChatServiceSid}/Users/{Sid}` (Default7 (conversations))
- **Notes**: Remove a conversation user from your service
- **Signature**: `DeleteServiceUser(string chatServiceSid, string sid, Confirmation? xTwilioWebhookEnabled, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xTwilioWebhookEnabled` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteUser
- **HTTP**: `DELETE /v1/Users/{Sid}` (Default7 (conversations))
- **Notes**: Remove a conversation user from your account's default service
- **Signature**: `DeleteUser(string sid, Confirmation? xTwilioWebhookEnabled, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xTwilioWebhookEnabled` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchServiceUser
- **HTTP**: `GET /v1/Services/{ChatServiceSid}/Users/{Sid}` (Default7 (conversations))
- **Notes**: Fetch a conversation user from your service
- **Signature**: `FetchServiceUser(string chatServiceSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ConversationsV1ServiceServiceUser`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchUser
- **HTTP**: `GET /v1/Users/{Sid}` (Default7 (conversations))
- **Notes**: Fetch a conversation user from your account's default service
- **Signature**: `FetchUser(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ConversationsV1User`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListServiceUser
- **HTTP**: `GET /v1/Services/{ChatServiceSid}/Users` (Default7 (conversations))
- **Notes**: Retrieve a list of all conversation users in your service
- **Signature**: `ListServiceUser(string chatServiceSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListServiceUserResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### ListUser
- **HTTP**: `GET /v1/Users` (Default7 (conversations))
- **Notes**: Retrieve a list of all conversation users in your account's default service
- **Signature**: `ListUser(long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListUserResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateServiceUser
- **HTTP**: `POST /v1/Services/{ChatServiceSid}/Users/{Sid}` (Default7 (conversations))
- **Notes**: Update an existing conversation user in your service
- **Signature**: `UpdateServiceUser(string chatServiceSid, string sid, Confirmation? xTwilioWebhookEnabled, string? friendlyName, string? attributes, string? roleSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`xTwilioWebhookEnabled` … `roleSid`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `FriendlyName` ← `friendlyName`, `Attributes` ← `attributes`, `RoleSid` ← `roleSid`
- **Returns**: `ConversationsV1ServiceServiceUser`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpdateUser
- **HTTP**: `POST /v1/Users/{Sid}` (Default7 (conversations))
- **Notes**: Update an existing conversation user in your account's default service
- **Signature**: `UpdateUser(string sid, Confirmation? xTwilioWebhookEnabled, string? friendlyName, string? attributes, string? roleSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`xTwilioWebhookEnabled` … `roleSid`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `FriendlyName` ← `friendlyName`, `Attributes` ← `attributes`, `RoleSid` ← `roleSid`
- **Returns**: `ConversationsV1User`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
