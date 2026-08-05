# ApiApi — operations

Accessor: `client.ApiApi` · Source: `Api/ApiApi.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ApiTest
- **HTTP**: `GET /api.test` (Default (slack))
- **Notes**: Checks API calling code.
- **Signature**: `ApiTest(string? error, string? foo, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `error` — nullable, no default → **must pass explicitly**
  - `foo` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `error` ← `error`, `foo` ← `foo`
- **Returns**: `ApiTestsuccessschema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ApiTest1
- **HTTP**: `GET /api.test` (Default (slack))
- **Notes**: Checks API calling code.
- **Signature**: `ApiTest1(string? error, string? foo, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `error` — nullable, no default → **must pass explicitly**
  - `foo` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `error` ← `error`, `foo` ← `foo`
- **Returns**: `ApiTestsuccessschema1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
