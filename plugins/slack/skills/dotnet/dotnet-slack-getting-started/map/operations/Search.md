# Search — operations

Accessor: `client.Search` · Source: `Api/Search.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### SearchMessages
- **HTTP**: `GET /search.messages` (Default (slack))
- **Notes**: Searches for messages matching a query.
- **Signature**: `SearchMessages(string token, string query, int? count, bool? highlight, int? page, string? sort, string? sortDir, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`count` … `sortDir`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `query` ← `query`, `count` ← `count`, `highlight` ← `highlight`, `page` ← `page`, `sort` ← `sort`, `sort_dir` ← `sortDir`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)
