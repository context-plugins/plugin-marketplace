# AccountConfigurationsApi — operations

Accessor: `client.AccountConfigurationsApi` · Source: `Api/AccountConfigurationsApi.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetAccountConfig
- **HTTP**: `GET /v2/account/configurations` (Default (paper-api))
- **Notes**: gets the current account configuration values
- **Signature**: `GetAccountConfig(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `AccountConfigurations`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### PatchAccountConfig
- **HTTP**: `PATCH /v2/account/configurations` (Default (paper-api))
- **Notes**: Updates and returns the current account configuration values
- **Signature**: `PatchAccountConfig(AccountConfigurations? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `AccountConfigurations`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
