# AccountsV1Aws — operations

Accessor: `client.AccountsV1Aws` · Source: `Api/AccountsV1Aws.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateCredentialAws
- **HTTP**: `POST /v1/Credentials/AWS` (Default (accounts))
- **Notes**: Create a new AWS Credential
- **Signature**: `CreateCredentialAws(ContentType contentType, string credentials, string? friendlyName, string? accountSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `friendlyName` — nullable, no default → **must pass explicitly**
  - `accountSid` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Credentials` ← `credentials`, `FriendlyName` ← `friendlyName`, `AccountSid` ← `accountSid`
- **Returns**: `CredentialAws`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteCredentialAws
- **HTTP**: `DELETE /v1/Credentials/AWS/{Sid}` (Default (accounts))
- **Notes**: Delete a Credential from your account
- **Signature**: `DeleteCredentialAws(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchCredentialAws
- **HTTP**: `GET /v1/Credentials/AWS/{Sid}` (Default (accounts))
- **Notes**: Fetch the AWS credentials specified by the provided Credential Sid
- **Signature**: `FetchCredentialAws(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CredentialAws`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListCredentialAws
- **HTTP**: `GET /v1/Credentials/AWS` (Default (accounts))
- **Notes**: Retrieves a collection of AWS Credentials belonging to the account used to make the request
- **Signature**: `ListCredentialAws(long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListCredentialAwsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateCredentialAws
- **HTTP**: `POST /v1/Credentials/AWS/{Sid}` (Default (accounts))
- **Notes**: Modify the properties of a given Account
- **Signature**: `UpdateCredentialAws(string sid, ContentType contentType, string? friendlyName, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `friendlyName` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `FriendlyName` ← `friendlyName`
- **Returns**: `CredentialAws`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
