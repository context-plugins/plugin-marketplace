# Trends — operations

Accessor: `client.Trends` · Source: `Api/Trends.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetTrendsByWoeid
- **HTTP**: `GET /2/trends/by/woeid/{woeid}` (Default (api))
- **Signature**: `GetTrendsByWoeid(int woeid, IReadOnlyList<TrendField>? trendFields, int? maxTrends = 20, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `trendFields` — nullable, no default → **must pass explicitly**
  - defaults: `maxTrends` = 20, `requestOptions` = null
- **Query params (wire ← C#)**: `max_trends` ← `maxTrends`, `trend.fields` ← `trendFields`
- **Returns**: `GetTrendsByWoeidResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetTrendsPersonalizedTrends
- **HTTP**: `GET /2/users/personalized_trends` (Default (api))
- **Signature**: `GetTrendsPersonalizedTrends(IReadOnlyList<PersonalizedTrendField>? personalizedTrendFields, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `personalizedTrendFields` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `personalized_trend.fields` ← `personalizedTrendFields`
- **Returns**: `GetTrendsPersonalizedTrendsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
