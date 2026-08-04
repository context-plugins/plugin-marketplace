# NflV3RotoBallerPremiumNews — operations

Accessor: `client.NflV3RotoBallerPremiumNews` · Source: `Api/NflV3RotoBallerPremiumNews.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### NflV3NewsRotoballerPremiumNews
- **HTTP**: `GET /v3/nfl/news-rotoballer/{format}/RotoBallerPremiumNews` (Default (api))
- **Notes**: RotoBaller's Premium News feed, with the latest updated stories in greater detail.
- **Signature**: `NflV3NewsRotoballerPremiumNews(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<News1>`
- **Error**: `SdkException<NflV3NewsRotoballerPremiumNewsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3NewsRotoballerPremiumNewsByDate
- **HTTP**: `GET /v3/nfl/news-rotoballer/{format}/RotoBallerPremiumNewsByDate/{date}` (Default (api))
- **Notes**: RotoBaller's Premium News feed, with the latest updated stories in greater detail called by date.
- **Signature**: `NflV3NewsRotoballerPremiumNewsByDate(Format format, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<News1>`
- **Error**: `SdkException<NflV3NewsRotoballerPremiumNewsByDateError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3NewsRotoballerPremiumNewsByTeam
- **HTTP**: `GET /v3/nfl/news-rotoballer/{format}/RotoBallerPremiumNewsByTeam/{team}` (Default (api))
- **Notes**: RotoBaller's Premium News feed, with the latest updated stories in greater detail called by team.
- **Signature**: `NflV3NewsRotoballerPremiumNewsByTeam(Format format, string team, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<News1>`
- **Error**: `SdkException<NflV3NewsRotoballerPremiumNewsByTeamError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
