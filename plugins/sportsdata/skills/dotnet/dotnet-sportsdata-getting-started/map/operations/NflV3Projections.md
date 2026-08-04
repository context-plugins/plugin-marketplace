# NflV3Projections — operations

Accessor: `client.NflV3Projections` · Source: `Api/NflV3Projections.cs` · 13 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### NflV3ProjectionsDfsSlateOwnershipProjectionsBySlate
- **HTTP**: `GET /v3/nfl/projections/{format}/DfsSlateOwnershipProjectionsBySlateID/{slateId}` (Default (api))
- **Notes**: Slate Ownership Projections for a specific slate. Projections are for Guaranteed Prize Pool (GPP) format ownership. Will return an empty list if the slate is not yet projected or not a slate we have projections for.
- **Signature**: `NflV3ProjectionsDfsSlateOwnershipProjectionsBySlate(Format format, string slateId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DfsSlateWithOwnershipProjection`
- **Error**: `SdkException<NflV3ProjectionsDfsSlateOwnershipProjectionsBySlateError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3ProjectionsDfsSlateOwnershipProjectionsUpcoming
- **HTTP**: `GET /v3/nfl/projections/{format}/UpcomingDfsSlateOwnershipProjections` (Default (api))
- **Notes**: Returns DFS Slates which have not yet started for which we have DFS Ownership projections.
- **Signature**: `NflV3ProjectionsDfsSlateOwnershipProjectionsUpcoming(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<DfsSlateWithOwnershipProjection>`
- **Error**: `SdkException<NflV3ProjectionsDfsSlateOwnershipProjectionsUpcomingError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3ProjectionsDfsSlatesByDate
- **HTTP**: `GET /v3/nfl/projections/{format}/DfsSlatesByDate/{date}` (Default (api))
- **Notes**: Returns DFS slates, including eligible games, positions, captain mode, players and salaries, for a given date.
- **Signature**: `NflV3ProjectionsDfsSlatesByDate(Format format, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<DfsSlate3>`
- **Error**: `SdkException<NflV3ProjectionsDfsSlatesByDateError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3ProjectionsDfsSlatesByWeek
- **HTTP**: `GET /v3/nfl/projections/{format}/DfsSlatesByWeek/{season}/{week}` (Default (api))
- **Notes**: Returns DFS slates, including eligible games, positions, captain mode, players and salaries, for a given week.
- **Signature**: `NflV3ProjectionsDfsSlatesByWeek(Format format, string season, string week, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<DfsSlate3>`
- **Error**: `SdkException<NflV3ProjectionsDfsSlatesByWeekError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3ProjectionsIdpProjectedPlayerGameStatsByTeam
- **HTTP**: `GET /v3/nfl/projections/{format}/IdpPlayerGameProjectionStatsByTeam/{season}/{week}/{team}` (Default (api))
- **Notes**: Individual Defensive Player (IDP stats, including DFS salary information and injuries, for fantasy players, called by team.
- **Signature**: `NflV3ProjectionsIdpProjectedPlayerGameStatsByTeam(Format format, string season, string week, string team, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<PlayerGameProjection2>`
- **Error**: `SdkException<NflV3ProjectionsIdpProjectedPlayerGameStatsByTeamError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3ProjectionsIdpProjectedPlayerGameStatsByWeek
- **HTTP**: `GET /v3/nfl/projections/{format}/IdpPlayerGameProjectionStatsByWeek/{season}/{week}` (Default (api))
- **Notes**: Individual Defensive Player (IDP stats, including DFS salary information and injuries, for fantasy players, called by week.
- **Signature**: `NflV3ProjectionsIdpProjectedPlayerGameStatsByWeek(Format format, string season, string week, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<PlayerGameProjection2>`
- **Error**: `SdkException<NflV3ProjectionsIdpProjectedPlayerGameStatsByWeekError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3ProjectionsPlayerDetailsByInjured
- **HTTP**: `GET /v3/nfl/projections/{format}/InjuredPlayers` (Default (api))
- **Notes**: This endpoint provides all currently injured NFL players, along with injury details.
- **Signature**: `NflV3ProjectionsPlayerDetailsByInjured(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Player5>`
- **Error**: `SdkException<NflV3ProjectionsPlayerDetailsByInjuredError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3ProjectionsProjectedFantasyDefenseGameStatsWithDfsSalaries
- **HTTP**: `GET /v3/nfl/projections/{format}/FantasyDefenseProjectionsByGame/{season}/{week}` (Default (api))
- **Notes**: SportsDataIO's proprietary projections, including DFS salary information, for all fantasy defense teams. Called by season and week. Does not contain Individual Defensive Players (IDP), which have their own endpoint.
- **Signature**: `NflV3ProjectionsProjectedFantasyDefenseGameStatsWithDfsSalaries(Format format, string season, string week, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<FantasyDefenseGameProjection>`
- **Error**: `SdkException<NflV3ProjectionsProjectedFantasyDefenseGameStatsWithDfsSalariesError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3ProjectionsProjectedFantasyDefenseSeasonStatsWithAdp
- **HTTP**: `GET /v3/nfl/projections/{format}/FantasyDefenseProjectionsBySeason/{season}` (Default (api))
- **Notes**: SportsDataIO's proprietary projections, including average draft position, for all fantasy defense teams for the season. Does not contain Individual Defensive Players (IDP), which have their own endpoint.
- **Signature**: `NflV3ProjectionsProjectedFantasyDefenseSeasonStatsWithAdp(Format format, string season, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<FantasyDefenseSeasonProjection>`
- **Error**: `SdkException<NflV3ProjectionsProjectedFantasyDefenseSeasonStatsWithAdpError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3ProjectionsProjectedPlayerGameStatsByTeam
- **HTTP**: `GET /v3/nfl/projections/{format}/PlayerGameProjectionStatsByTeam/{season}/{week}/{team}` (Default (api))
- **Notes**: SportsDataIO's proprietary projections, including DFS salary information and injuries, for fantasy players, for a given game, called by team.
- **Signature**: `NflV3ProjectionsProjectedPlayerGameStatsByTeam(Format format, string season, string week, string team, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<PlayerGameProjection2>`
- **Error**: `SdkException<NflV3ProjectionsProjectedPlayerGameStatsByTeamError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3ProjectionsProjectedPlayerGameStatsByWeek
- **HTTP**: `GET /v3/nfl/projections/{format}/PlayerGameProjectionStatsByWeek/{season}/{week}` (Default (api))
- **Notes**: SportsDataIO's proprietary projections, including DFS salary information and injuries, for fantasy players, called by week.
- **Signature**: `NflV3ProjectionsProjectedPlayerGameStatsByWeek(Format format, string season, string week, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<PlayerGameProjection2>`
- **Error**: `SdkException<NflV3ProjectionsProjectedPlayerGameStatsByWeekError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3ProjectionsProjectedPlayerSeasonStatsWithAdp
- **HTTP**: `GET /v3/nfl/projections/{format}/PlayerSeasonProjectionStats/{season}` (Default (api))
- **Notes**: SportsDataIO's proprietary projections on a season-long basis, including Average Draft Position (ADP), for fantasy players, for a given season.
- **Signature**: `NflV3ProjectionsProjectedPlayerSeasonStatsWithAdp(Format format, string season, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<PlayerSeasonProjection2>`
- **Error**: `SdkException<NflV3ProjectionsProjectedPlayerSeasonStatsWithAdpError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3ProjectionsProjectedPlayerSeasonStatsWithAdpByTeam
- **HTTP**: `GET /v3/nfl/projections/{format}/PlayerSeasonProjectionStatsByTeam/{season}/{team}` (Default (api))
- **Notes**: SportsDataIO's proprietary projections on a season-long basis, including ADP, for fantasy players, for a given season and team.
- **Signature**: `NflV3ProjectionsProjectedPlayerSeasonStatsWithAdpByTeam(Format format, string season, string team, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<PlayerSeasonProjection2>`
- **Error**: `SdkException<NflV3ProjectionsProjectedPlayerSeasonStatsWithAdpByTeamError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
