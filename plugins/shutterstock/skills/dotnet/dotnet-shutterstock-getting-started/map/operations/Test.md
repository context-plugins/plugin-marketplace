# Test — operations

Accessor: `client.Test` · Source: `Api/Test.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### Echo
- **HTTP**: `GET /v2/test` (Default (api))
- **Signature**: `Echo(string? text = "ok", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `text` = "ok", `requestOptions` = null
- **Query params (wire ← C#)**: `text` ← `text`
- **Returns**: `TestEcho`
- **Error**: `SdkException<EchoError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### Validate
- **HTTP**: `GET /v2/test/validate` (Default (api))
- **Signature**: `Validate(int id, IReadOnlyList<string>? tag, string? userAgent, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `tag` — nullable, no default → **must pass explicitly**
  - `userAgent` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `id` ← `id`, `tag` ← `tag`
- **Returns**: `TestValidate`
- **Error**: `SdkException<ValidateError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
