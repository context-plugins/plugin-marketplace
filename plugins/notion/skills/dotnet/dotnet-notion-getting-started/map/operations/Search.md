# Search — operations

Accessor: `client.Search` · Source: `Api/Search.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### SearchInvoke
- **HTTP**: `POST /search` (Default (api))
- **Notes**: Searches all parent or child pages and databases that have been shared with an integration. Returns results based on the query, filter, and sort parameters. Results are sorted by relevance by default but can be sorted by last_edited_time. The search indexing may not be immediate, so recently created or updated objects may not appear right away.
- **Signature**: `SearchInvoke(SearchRequest? body, string notionVersion = "2022-06-28", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `notionVersion` = "2022-06-28", `requestOptions` = null
- **Returns**: `PaginatedList`
- **Error**: `SdkException<SearchError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401, 429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
