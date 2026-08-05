# OnDemandSeasons — operations

Accessor: `client.OnDemandSeasons` · Source: `Api/OnDemandSeasons.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetVodSeason
- **HTTP**: `GET /ondemand/pages/{ondemand_id}/seasons/{season_id}` (Default (api))
- **Notes**: This method returns a single season on the specified On Demand page.
- **Signature**: `GetVodSeason(double ondemandId, double seasonId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `OnDemandSeason`
- **Error**: `SdkException<GetVodSeasonError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetVodSeasonVideos
- **HTTP**: `GET /ondemand/pages/{ondemand_id}/seasons/{season_id}/videos` (Default (api))
- **Notes**: This method returns every video in the specified season on an On Demand page.
- **Signature**: `GetVodSeasonVideos(double ondemandId, double seasonId, Filter27? filter, double? page, double? perPage, Sort44? sort, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`filter` … `sort`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `filter` ← `filter`, `page` ← `page`, `per_page` ← `perPage`, `sort` ← `sort`
- **Returns**: `VideoConnection`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### GetVodSeasons
- **HTTP**: `GET /ondemand/pages/{ondemand_id}/seasons` (Default (api))
- **Notes**: This method returns every season on the specified On Demand page.
- **Signature**: `GetVodSeasons(double ondemandId, Direction? direction, Filter27? filter, double? page, double? perPage, Sort43? sort, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`direction` … `sort`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `direction` ← `direction`, `filter` ← `filter`, `page` ← `page`, `per_page` ← `perPage`, `sort` ← `sort`
- **Returns**: `OnDemandSeasonConnection`
- **Error**: `SdkException<GetVodSeasonsError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`
