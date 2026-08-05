# TrustScoringScoreAverage — operations

Accessor: `client.TrustScoringScoreAverage` · Source: `Api/TrustScoringScoreAverage.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ScoreServiceListScoreAverages
- **HTTP**: `GET /trust/api/v1/orgs/{orgId}/scoring/scores/averages` (Default)
- **Signature**: `ScoreServiceListScoreAverages(string orgId, string? planId, int? daysInPast, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `planId` — nullable, no default → **must pass explicitly**
  - `daysInPast` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `planId` ← `planId`, `daysInPast` ← `daysInPast`
- **Returns**: `ScoreListScoreAveragesResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
