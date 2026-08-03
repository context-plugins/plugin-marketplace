# PortfolioHistoryApi — operations

Accessor: `client.PortfolioHistoryApi` · Source: `Api/PortfolioHistoryApi.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetAccountPortfolioHistory
- **HTTP**: `GET /v2/account/portfolio/history` (Default (paper-api))
- **Notes**: Returns timeseries data about equity and profit/loss (P/L) of the account in requested timespan.
- **Signature**: `GetAccountPortfolioHistory(string? period, string? timeframe, DateTimeOffset? dateEnd, string? extendedHours, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`period` … `extendedHours`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `period` ← `period`, `timeframe` ← `timeframe`, `date_end` ← `dateEnd`, `extended_hours` ← `extendedHours`
- **Returns**: `PortfolioHistory`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
