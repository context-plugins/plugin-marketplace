# NbaV3RotoBallerPremiumNews — operations

Accessor: `client.NbaV3RotoBallerPremiumNews` · Source: `Api/NbaV3RotoBallerPremiumNews.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### NbaV3NewsRotoballerPremiumNews
- **HTTP**: `GET /v3/nba/news-rotoballer/{format}/RotoBallerPremiumNews` (Default (api))
- **Notes**: RotoBaller's Premium News feed, with the latest updated stories in greater detail.
- **Signature**: `NbaV3NewsRotoballerPremiumNews(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<News1>`
- **Error**: `SdkException<NbaV3NewsRotoballerPremiumNewsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NbaV3NewsRotoballerPremiumNewsByDate
- **HTTP**: `GET /v3/nba/news-rotoballer/{format}/RotoBallerPremiumNewsByDate/{date}` (Default (api))
- **Notes**: RotoBaller's Premium News feed, with the latest updated stories in greater detail called by date.
- **Signature**: `NbaV3NewsRotoballerPremiumNewsByDate(Format format, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<News1>`
- **Error**: `SdkException<NbaV3NewsRotoballerPremiumNewsByDateError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
