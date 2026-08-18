# Developer — operations

Accessor: `client.Developer` · Source: `Api/Developer.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DeveloperSearch
- **HTTP**: `GET /search/developer` (Default (api))
- **Signature**: `DeveloperSearch(string query, IReadOnlyList<Types1>? types, IReadOnlyList<string>? repos, IReadOnlyList<string>? sources, Skills? skills, string? language, string? topic, string? license, int? minStars, int? maxStars, bool? archived, bool? fork, int? k = 10, int? passages = 1, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 11 params (`types` … `fork`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `k` = 10, `passages` = 1, `requestOptions` = null
- **Query params (wire ← C#)**: `query` ← `query`, `k` ← `k`, `types` ← `types`, `repos` ← `repos`, `sources` ← `sources`, `skills` ← `skills`, `passages` ← `passages`, `language` ← `language`, `topic` ← `topic`, `license` ← `license`, `min_stars` ← `minStars`, `max_stars` ← `maxStars`, `archived` ← `archived`, `fork` ← `fork`
- **Returns**: `DeveloperSearchResponse`
- **Error**: `SdkException<DeveloperSearchError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 429, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeveloperSearchPost
- **HTTP**: `POST /search/developer` (Default (api))
- **Signature**: `DeveloperSearchPost(SearchDeveloperRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DeveloperSearchResponse`
- **Error**: `SdkException<DeveloperSearchPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 429, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
