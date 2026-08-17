<!-- Generated file — do not edit; regenerated with the SDK. -->

# Test — operations

Accessor: `client.Test` · Source: `Api/Test.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### Echo

- **Signature**: `Echo(string? text = "ok", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `text` = `"ok"`
- **Query params (wire ← C#)**: `text` ← `text`
- **Returns**: `TestEcho`
- **Error**: `SdkException<EchoError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `TestEcho` | `Models/TestEcho.cs` |
| `EchoError` | `Errors/EchoError.cs` |

### Validate

- **Signature**: `Validate(int id, IReadOnlyList<string>? tag, string? userAgent, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `tag` — nullable, no default → **must pass explicitly**
  - `userAgent` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `id` ← `id`, `tag` ← `tag`
- **Returns**: `TestValidate`
- **Error**: `SdkException<ValidateError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `TestValidate` | `Models/TestValidate.cs` |
| `ValidateError` | `Errors/ValidateError.cs` |

