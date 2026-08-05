# TrustScoringScore — operations

Accessor: `client.TrustScoringScore` · Source: `Api/TrustScoringScore.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ScoreServiceCreateScore
- **HTTP**: `POST /trust/api/v1/orgs/{orgId}/scoring/scores` (Default)
- **Signature**: `ScoreServiceCreateScore(string orgId, ScoreServiceCreateScoreBody body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ScoreCreateScoreResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ScoreServiceDeleteScore
- **HTTP**: `DELETE /trust/api/v1/orgs/{orgId}/scoring/scores/{id}` (Default)
- **Signature**: `ScoreServiceDeleteScore(string orgId, string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ScoreServiceListScores
- **HTTP**: `GET /trust/api/v1/orgs/{orgId}/scoring/scores` (Default)
- **Signature**: `ScoreServiceListScores(string orgId, int? selectionPaginationPageSize, int? selectionPaginationPageOffset, string? selectionFilteringFilter, IReadOnlyList<string>? selectionSortKeys, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`selectionPaginationPageSize` … `selectionSortKeys`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `selection.pagination.pageSize` ← `selectionPaginationPageSize`, `selection.pagination.pageOffset` ← `selectionPaginationPageOffset`, `selection.filtering.filter` ← `selectionFilteringFilter`, `selection.sort.keys` ← `selectionSortKeys`
- **Returns**: `ScoreListScoresResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ScoreServiceReadScore
- **HTTP**: `GET /trust/api/v1/orgs/{orgId}/scoring/scores/{id}` (Default)
- **Signature**: `ScoreServiceReadScore(string orgId, string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ScoreReadScoreResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
