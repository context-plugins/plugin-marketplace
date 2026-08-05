# Bots — operations

Accessor: `client.Bots` · Source: `Api/Bots.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### BotsInfo
- **HTTP**: `GET /bots.info` (Default (slack))
- **Notes**: Gets information about a bot user.
- **Signature**: `BotsInfo(string token, string? bot, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `bot` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `bot` ← `bot`
- **Returns**: `BotsInfoschema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### BotsInfo1
- **HTTP**: `GET /bots.info` (Default (slack))
- **Notes**: Gets information about a bot user.
- **Signature**: `BotsInfo1(string token, string? bot, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `bot` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `bot` ← `bot`
- **Returns**: `BotsInfoschema1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
