# ApiauthenticationTwoFactor — operations

Accessor: `client.ApiauthenticationTwoFactor` · Source: `Api/ApiauthenticationTwoFactor.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### EnableTwoFactor
- **HTTP**: `PUT /api/v1/self` (Default)
- **Signature**: `EnableTwoFactor(string? xCsrftoken, string? enableTwoFactor, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xCsrftoken` — nullable, no default → **must pass explicitly**
  - `enableTwoFactor` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetQr
- **HTTP**: `GET /api/v1/self/two_factor/token` (Default)
- **Signature**: `GetQr(string? by, string? xCsrftoken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `by` — nullable, no default → **must pass explicitly**
  - `xCsrftoken` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `by` ← `by`
- **Returns**: `object`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
