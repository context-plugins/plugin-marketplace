# FlexV1ConfigurationApi — operations

Accessor: `client.FlexV1ConfigurationApi` · Source: `Api/FlexV1ConfigurationApi.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### FetchConfiguration3
- **HTTP**: `GET /v1/Configuration` (Default13 (flex-api))
- **Signature**: `FetchConfiguration3(string? uiVersion, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `uiVersion` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `UiVersion` ← `uiVersion`
- **Returns**: `FlexV1Configuration`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpdateConfiguration3
- **HTTP**: `POST /v1/Configuration` (Default13 (flex-api))
- **Signature**: `UpdateConfiguration3(object? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `FlexV1Configuration`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
