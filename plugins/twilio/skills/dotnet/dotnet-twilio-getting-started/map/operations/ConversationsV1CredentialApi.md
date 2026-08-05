# ConversationsV1CredentialApi — operations

Accessor: `client.ConversationsV1CredentialApi` · Source: `Api/ConversationsV1CredentialApi.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateCredential
- **HTTP**: `POST /v1/Credentials` (Default2 (conversations))
- **Notes**: Add a new push notification credential to your account
- **Signature**: `CreateCredential(CredentialEnumPushType type, string? friendlyName, string? certificate, string? privateKey, bool? sandbox, string? apiKey, string? secret, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`friendlyName` … `secret`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Type` ← `type`, `FriendlyName` ← `friendlyName`, `Certificate` ← `certificate`, `PrivateKey` ← `privateKey`, `Sandbox` ← `sandbox`, `ApiKey` ← `apiKey`, `Secret` ← `secret`
- **Returns**: `ConversationsV1Credential`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteCredential
- **HTTP**: `DELETE /v1/Credentials/{Sid}` (Default2 (conversations))
- **Notes**: Remove a push notification credential from your account
- **Signature**: `DeleteCredential(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchCredential
- **HTTP**: `GET /v1/Credentials/{Sid}` (Default2 (conversations))
- **Notes**: Fetch a push notification credential from your account
- **Signature**: `FetchCredential(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ConversationsV1Credential`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListCredential
- **HTTP**: `GET /v1/Credentials` (Default2 (conversations))
- **Notes**: Retrieve a list of all push notification credentials on your account
- **Signature**: `ListCredential(long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListCredentialResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateCredential
- **HTTP**: `POST /v1/Credentials/{Sid}` (Default2 (conversations))
- **Notes**: Update an existing push notification credential on your account
- **Signature**: `UpdateCredential(string sid, CredentialEnumPushType? type, string? friendlyName, string? certificate, string? privateKey, bool? sandbox, string? apiKey, string? secret, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`type` … `secret`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Type` ← `type`, `FriendlyName` ← `friendlyName`, `Certificate` ← `certificate`, `PrivateKey` ← `privateKey`, `Sandbox` ← `sandbox`, `ApiKey` ← `apiKey`, `Secret` ← `secret`
- **Returns**: `ConversationsV1Credential`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
