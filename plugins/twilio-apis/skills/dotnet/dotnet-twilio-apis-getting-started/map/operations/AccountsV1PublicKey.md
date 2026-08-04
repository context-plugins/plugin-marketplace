# AccountsV1PublicKey — operations

Accessor: `client.AccountsV1PublicKey` · Source: `Api/AccountsV1PublicKey.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateCredentialPublicKey
- **HTTP**: `POST /v1/Credentials/PublicKeys` (Default (accounts))
- **Notes**: Create a new Public Key Credential
- **Signature**: `CreateCredentialPublicKey(ContentType contentType, string publicKey, string? friendlyName, string? accountSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `friendlyName` — nullable, no default → **must pass explicitly**
  - `accountSid` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `PublicKey` ← `publicKey`, `FriendlyName` ← `friendlyName`, `AccountSid` ← `accountSid`
- **Returns**: `CredentialPublicKey`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteCredentialPublicKey
- **HTTP**: `DELETE /v1/Credentials/PublicKeys/{Sid}` (Default (accounts))
- **Notes**: Delete a Credential from your account
- **Signature**: `DeleteCredentialPublicKey(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchCredentialPublicKey
- **HTTP**: `GET /v1/Credentials/PublicKeys/{Sid}` (Default (accounts))
- **Notes**: Fetch the public key specified by the provided Credential Sid
- **Signature**: `FetchCredentialPublicKey(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CredentialPublicKey`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListCredentialPublicKey
- **HTTP**: `GET /v1/Credentials/PublicKeys` (Default (accounts))
- **Notes**: Retrieves a collection of Public Key Credentials belonging to the account used to make the request
- **Signature**: `ListCredentialPublicKey(long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListCredentialPublicKeyResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateCredentialPublicKey
- **HTTP**: `POST /v1/Credentials/PublicKeys/{Sid}` (Default (accounts))
- **Notes**: Modify the properties of a given Account
- **Signature**: `UpdateCredentialPublicKey(string sid, ContentType contentType, string? friendlyName, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `friendlyName` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `FriendlyName` ← `friendlyName`
- **Returns**: `CredentialPublicKey`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
