# Search — operations

Accessor: `client.Search` · Source: `Api/Search.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### SearchInvoke
- **HTTP**: `GET /search.json` (Default)
- **Signature**: `SearchInvoke(string? q, int? page, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `q` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `q` ← `q`, `page` ← `page`
- **Returns**: `SearchJsonResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)
