# MlbV3Projections — operations

Accessor: `client.MlbV3Projections` · Source: `Api/MlbV3Projections.cs` · 8 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### MlbV3ProjectionsDepthCharts
- **HTTP**: `GET /v3/mlb/projections/{format}/DepthCharts` (Default (api))
- **Notes**: Returns Depth Charts for all active MLB teams.
- **Signature**: `MlbV3ProjectionsDepthCharts(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<TeamDepthChart>`
- **Error**: `SdkException<MlbV3ProjectionsDepthChartsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### MlbV3ProjectionsDfsSlateOwnershipProjectionsBySlate
- **HTTP**: `GET /v3/mlb/projections/{format}/DfsSlateOwnershipProjectionsBySlateID/{slateId}` (Default (api))
- **Notes**: Slate Ownership Projections for a specific slate. Projections are for Guaranteed Prize Pool (GPP) format ownership. Will return an empty list if the slate is not yet projected or not a slate we have projections for.
- **Signature**: `MlbV3ProjectionsDfsSlateOwnershipProjectionsBySlate(Format format, int slateId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DfsSlateWithOwnershipProjection`
- **Error**: `SdkException<MlbV3ProjectionsDfsSlateOwnershipProjectionsBySlateError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### MlbV3ProjectionsDfsSlateOwnershipProjectionsUpcoming
- **HTTP**: `GET /v3/mlb/projections/{format}/UpcomingDfsSlateOwnershipProjections` (Default (api))
- **Notes**: Returns DFS Slates which have not yet started for which we have DFS Ownership projections.
- **Signature**: `MlbV3ProjectionsDfsSlateOwnershipProjectionsUpcoming(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<DfsSlateWithOwnershipProjection>`
- **Error**: `SdkException<MlbV3ProjectionsDfsSlateOwnershipProjectionsUpcomingError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### MlbV3ProjectionsDfsSlatesByDate
- **HTTP**: `GET /v3/mlb/projections/{format}/DfsSlatesByDate/{date}` (Default (api))
- **Notes**: Returns DFS Slates which have not yet started for which we have DFS projections.
- **Signature**: `MlbV3ProjectionsDfsSlatesByDate(Format format, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<DfsSlate1>`
- **Error**: `SdkException<MlbV3ProjectionsDfsSlatesByDateError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### MlbV3ProjectionsPlayerDetailsByInjured
- **HTTP**: `GET /v3/mlb/projections/{format}/InjuredPlayers` (Default (api))
- **Notes**: This endpoint provides all currently injured MLB players, along with injury details.
- **Signature**: `MlbV3ProjectionsPlayerDetailsByInjured(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Player3>`
- **Error**: `SdkException<MlbV3ProjectionsPlayerDetailsByInjuredError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### MlbV3ProjectionsProjectedPlayerGameStatsByDate
- **HTTP**: `GET /v3/mlb/projections/{format}/PlayerGameProjectionStatsByDate/{date}` (Default (api))
- **Notes**: SportsDataIO's proprietary projections, including DFS salary information and injuries, for fantasy players, called by date.
- **Signature**: `MlbV3ProjectionsProjectedPlayerGameStatsByDate(Format format, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<PlayerGameProjection>`
- **Error**: `SdkException<MlbV3ProjectionsProjectedPlayerGameStatsByDateError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### MlbV3ProjectionsProjectedPlayerSeasonStatsWithAdp
- **HTTP**: `GET /v3/mlb/projections/{format}/PlayerSeasonProjectionStats/{season}` (Default (api))
- **Notes**: SportsDataIO's proprietary projections, including average draft position, for all active players for the season.
- **Signature**: `MlbV3ProjectionsProjectedPlayerSeasonStatsWithAdp(Format format, string season, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<PlayerSeasonProjection>`
- **Error**: `SdkException<MlbV3ProjectionsProjectedPlayerSeasonStatsWithAdpError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### MlbV3ProjectionsStartingLineupsByDate
- **HTTP**: `GET /v3/mlb/projections/{format}/StartingLineupsByDate/{date}` (Default (api))
- **Notes**: Returns both projected and confirmed starting lineups for all games on a given date.
- **Signature**: `MlbV3ProjectionsStartingLineupsByDate(Format format, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<StartingLineups>`
- **Error**: `SdkException<MlbV3ProjectionsStartingLineupsByDateError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
