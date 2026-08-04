# VideosLanguages — operations

Accessor: `client.VideosLanguages` · Source: `Api/VideosLanguages.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetLanguages
- **HTTP**: `GET /languages` (Default (api))
- **Notes**: This method returns all available video languages.
- **Signature**: `GetLanguages(Filter7? filter, double? page, double? perPage, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `filter` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `perPage` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `filter` ← `filter`, `page` ← `page`, `per_page` ← `perPage`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`
