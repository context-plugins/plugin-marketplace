# MlbV3RotoBallerPremiumNews — operations

Accessor: `client.MlbV3RotoBallerPremiumNews` · Source: `Api/MlbV3RotoBallerPremiumNews.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### MlbV3NewsRotoballerPremiumNews
- **HTTP**: `GET /v3/mlb/news-rotoballer/{format}/RotoBallerPremiumNews` (Default (api))
- **Notes**: RotoBaller's Premium News feed, with the latest updated stories in greater detail.
- **Signature**: `MlbV3NewsRotoballerPremiumNews(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<News1>`
- **Error**: `SdkException<MlbV3NewsRotoballerPremiumNewsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### MlbV3NewsRotoballerPremiumNewsByDate
- **HTTP**: `GET /v3/mlb/news-rotoballer/{format}/RotoBallerPremiumNewsByDate/{date}` (Default (api))
- **Notes**: RotoBaller's Premium News feed, with the latest updated stories in greater detail called by date.
- **Signature**: `MlbV3NewsRotoballerPremiumNewsByDate(Format format, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<News1>`
- **Error**: `SdkException<MlbV3NewsRotoballerPremiumNewsByDateError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
