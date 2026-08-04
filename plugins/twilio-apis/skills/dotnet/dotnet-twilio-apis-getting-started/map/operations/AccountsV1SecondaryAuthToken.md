# AccountsV1SecondaryAuthToken — operations

Accessor: `client.AccountsV1SecondaryAuthToken` · Source: `Api/AccountsV1SecondaryAuthToken.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateSecondaryAuthToken
- **HTTP**: `POST /v1/AuthTokens/Secondary` (Default (accounts))
- **Notes**: Create a new secondary Auth Token
- **Signature**: `CreateSecondaryAuthToken(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `SecondaryAuthToken`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteSecondaryAuthToken
- **HTTP**: `DELETE /v1/AuthTokens/Secondary` (Default (accounts))
- **Notes**: Delete the secondary Auth Token from your account
- **Signature**: `DeleteSecondaryAuthToken(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
