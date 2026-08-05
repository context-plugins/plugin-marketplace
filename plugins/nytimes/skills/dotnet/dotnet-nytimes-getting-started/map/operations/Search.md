# Search — operations

Accessor: `client.Search` · Source: `Api/Search.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ReturnsAnArrayOfArticles
- **HTTP**: `GET /articlesearch.json` (Default1 (api))
- **Signature**: `ReturnsAnArrayOfArticles(string? beginDate, string? endDate, string? fq, int? page, string? q, Sort? sort, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`beginDate` … `sort`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `begin_date` ← `beginDate`, `end_date` ← `endDate`, `fq` ← `fq`, `page` ← `page`, `q` ← `q`, `sort` ← `sort`
- **Returns**: `ReturnsAnArrayOfArticlesResponse`
- **Error**: `SdkException<ReturnsAnArrayOfArticlesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### ReturnsAnArrayOfArticles1
- **HTTP**: `GET /articlesearch.json` (Default1 (api))
- **Signature**: `ReturnsAnArrayOfArticles1(string? beginDate, string? endDate, string? fq, int? page, string? q, Sort? sort, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`beginDate` … `sort`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `begin_date` ← `beginDate`, `end_date` ← `endDate`, `fq` ← `fq`, `page` ← `page`, `q` ← `q`, `sort` ← `sort`
- **Returns**: `ReturnsAnArrayOfArticlesResponse1`
- **Error**: `SdkException<ReturnsAnArrayOfArticles1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)
