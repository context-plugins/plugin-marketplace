# ResearchApi — operations

Accessor: `client.ResearchApi` · Source: `Api/ResearchApi.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ResearchGetPaper
- **HTTP**: `GET /search/research/papers/{id}` (Default (api))
- **Signature**: `ResearchGetPaper(string id, string? query, int? k = 4, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `query` — nullable, no default → **must pass explicitly**
  - defaults: `k` = 4, `requestOptions` = null
- **Query params (wire ← C#)**: `query` ← `query`, `k` ← `k`
- **Returns**: `SearchResearchPapersResponse`
- **Error**: `SdkException<ResearchGetPaperError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 404, 429, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ResearchRelatedPapers
- **HTTP**: `GET /search/research/papers/{id}/similar` (Default (api))
- **Signature**: `ResearchRelatedPapers(string id, string intent, Mode5? mode, bool? rerank, string? anchor, int? k = 40, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `mode` — nullable, no default → **must pass explicitly**
  - `rerank` — nullable, no default → **must pass explicitly**
  - `anchor` — nullable, no default → **must pass explicitly**
  - defaults: `k` = 40, `requestOptions` = null
- **Query params (wire ← C#)**: `intent` ← `intent`, `mode` ← `mode`, `k` ← `k`, `rerank` ← `rerank`, `anchor` ← `anchor`
- **Returns**: `ResearchSimilarPapersResponse`
- **Error**: `SdkException<ResearchRelatedPapersError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 429, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ResearchSearchPapers
- **HTTP**: `GET /search/research/papers` (Default (api))
- **Signature**: `ResearchSearchPapers(string query, string? authors, string? categories, DateTimeOffset? from, DateTimeOffset? to, int? k = 40, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`authors` … `to`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `k` = 40, `requestOptions` = null
- **Query params (wire ← C#)**: `query` ← `query`, `k` ← `k`, `authors` ← `authors`, `categories` ← `categories`, `from` ← `from`, `to` ← `to`
- **Returns**: `ResearchSearchPapersResponse`
- **Error**: `SdkException<ResearchSearchPapersError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 429, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
