# GolfV3RotoBallerPremiumNews — operations

Accessor: `client.GolfV3RotoBallerPremiumNews` · Source: `Api/GolfV3RotoBallerPremiumNews.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GolfV3NewsRotoballerPremiumNews
- **HTTP**: `GET /v3/golf/news-rotoballer/{format}/RotoBallerPremiumNews` (Default (api))
- **Notes**: RotoBaller's Premium News feed, with the latest updated stories in greater detail.
- **Signature**: `GolfV3NewsRotoballerPremiumNews(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<News>`
- **Error**: `SdkException<GolfV3NewsRotoballerPremiumNewsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GolfV3NewsRotoballerPremiumNewsByDate
- **HTTP**: `GET /v3/golf/news-rotoballer/{format}/RotoBallerPremiumNewsByDate/{date}` (Default (api))
- **Notes**: RotoBaller's Premium News feed, with the latest updated stories in greater detail called by date.
- **Signature**: `GolfV3NewsRotoballerPremiumNewsByDate(Format format, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<News>`
- **Error**: `SdkException<GolfV3NewsRotoballerPremiumNewsByDateError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
