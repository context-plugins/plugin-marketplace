# NbaV3Projections — operations

Accessor: `client.NbaV3Projections` · Source: `Api/NbaV3Projections.cs` · 6 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### NbaV3ProjectionsDfsSlatesByDate
- **HTTP**: `GET /v3/nba/projections/{format}/DfsSlatesByDate/{date}` (Default (api))
- **Notes**: Returns DFS Slates which have not yet started, with their player and salary information.
- **Signature**: `NbaV3ProjectionsDfsSlatesByDate(Format format, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<DfsSlate2>`
- **Error**: `SdkException<NbaV3ProjectionsDfsSlatesByDateError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NbaV3ProjectionsPlayerDetailsByInjured
- **HTTP**: `GET /v3/nba/projections/{format}/InjuredPlayers` (Default (api))
- **Notes**: This endpoint provides all currently injured NBA players, along with injury details.
- **Signature**: `NbaV3ProjectionsPlayerDetailsByInjured(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Player4>`
- **Error**: `SdkException<NbaV3ProjectionsPlayerDetailsByInjuredError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NbaV3ProjectionsProjectedPlayerGameStatsByDate
- **HTTP**: `GET /v3/nba/projections/{format}/PlayerGameProjectionStatsByDate/{date}` (Default (api))
- **Notes**: SportsDataIO's proprietary projections, including DFS salary information and injuries, for fantasy players, called by date.
- **Signature**: `NbaV3ProjectionsProjectedPlayerGameStatsByDate(Format format, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<PlayerGameProjection1>`
- **Error**: `SdkException<NbaV3ProjectionsProjectedPlayerGameStatsByDateError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NbaV3ProjectionsProjectedPlayerSeasonStats
- **HTTP**: `GET /v3/nba/projections/{format}/PlayerSeasonProjectionStats/{season}` (Default (api))
- **Notes**: SportsDataIO's proprietary projections for all active players for the season.
- **Signature**: `NbaV3ProjectionsProjectedPlayerSeasonStats(Format format, string season, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<PlayerSeasonProjection1>`
- **Error**: `SdkException<NbaV3ProjectionsProjectedPlayerSeasonStatsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NbaV3ProjectionsProjectedPlayerSeasonStatsByTeam
- **HTTP**: `GET /v3/nba/projections/{format}/PlayerSeasonProjectionStatsByTeam/{season}/{team}` (Default (api))
- **Notes**: SportsDataIO's proprietary projections for all active players for the season, called by team
- **Signature**: `NbaV3ProjectionsProjectedPlayerSeasonStatsByTeam(Format format, string season, string team, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<PlayerSeasonProjection1>`
- **Error**: `SdkException<NbaV3ProjectionsProjectedPlayerSeasonStatsByTeamError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NbaV3ProjectionsStartingLineupsByDate
- **HTTP**: `GET /v3/nba/projections/{format}/StartingLineupsByDate/{date}` (Default (api))
- **Notes**: This endpoint provides the projected &amp; confirmed starting lineups for NBA games on a given date.
- **Signature**: `NbaV3ProjectionsStartingLineupsByDate(Format format, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<StartingLineups1>`
- **Error**: `SdkException<NbaV3ProjectionsStartingLineupsByDateError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
