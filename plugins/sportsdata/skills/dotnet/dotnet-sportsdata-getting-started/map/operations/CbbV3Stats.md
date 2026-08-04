# CbbV3Stats — operations

Accessor: `client.CbbV3Stats` · Source: `Api/CbbV3Stats.cs` · 11 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CbbV3StatsBoxScoreFinal
- **HTTP**: `GET /v3/cbb/stats/{format}/BoxScoreFinal/{gameid}` (Default (api))
- **Notes**: Full statistical information for a specified game, down to the team and player stat level, delivered after the game is complete.
- **Signature**: `CbbV3StatsBoxScoreFinal(Format format, string gameid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BoxScore`
- **Error**: `SdkException<CbbV3StatsBoxScoreFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CbbV3StatsBoxScoreLiveFinal
- **HTTP**: `GET /v3/cbb/stats/{format}/BoxScore/{gameid}` (Default (api))
- **Notes**: Full statistical information for a specified game, down to the team and player stat level, delivered live during the game, called per individual game.
- **Signature**: `CbbV3StatsBoxScoreLiveFinal(Format format, string gameid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BoxScore`
- **Error**: `SdkException<CbbV3StatsBoxScoreLiveFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CbbV3StatsBoxScoresByDateFinal
- **HTTP**: `GET /v3/cbb/stats/{format}/BoxScoresFinal/{date}` (Default (api))
- **Notes**: Full statistical information for all games on a given date, down to the team and player stat level, delivered after the game is complete.
- **Signature**: `CbbV3StatsBoxScoresByDateFinal(Format format, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<BoxScore>`
- **Error**: `SdkException<CbbV3StatsBoxScoresByDateFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CbbV3StatsBoxScoresByDateLiveFinal
- **HTTP**: `GET /v3/cbb/stats/{format}/BoxScores/{date}` (Default (api))
- **Notes**: Full statistical information for games, down to the team and player stat level, delivered live during the game, called for a given date (returns all games on that date.)
- **Signature**: `CbbV3StatsBoxScoresByDateLiveFinal(Format format, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<BoxScore>`
- **Error**: `SdkException<CbbV3StatsBoxScoresByDateLiveFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CbbV3StatsBoxScoresDeltaByDate
- **HTTP**: `GET /v3/cbb/stats/{format}/BoxScoresDelta/{date}/{minutes}` (Default (api))
- **Notes**: This method returns all box scores for a given season and week, but only returns player stats that have changed in the last X minutes as specified in your API call. By definition this is a live endpoint, not final.
- **Signature**: `CbbV3StatsBoxScoresDeltaByDate(Format format, string date, string minutes, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<BoxScore>`
- **Error**: `SdkException<CbbV3StatsBoxScoresDeltaByDateError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CbbV3StatsPlayerGameLogsBySeason
- **HTTP**: `GET /v3/cbb/stats/{format}/PlayerGameStatsBySeason/{season}/{playerid}/{numberofgames}` (Default (api))
- **Notes**: Specify a season, a player, and number of games (either an integer or &lt;code&gt;all&lt;/code&gt;) to see all of their box score logs. Refreshed after their most recent game is complete.
- **Signature**: `CbbV3StatsPlayerGameLogsBySeason(Format format, string season, string playerid, string numberofgames, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<PlayerGame>`
- **Error**: `SdkException<CbbV3StatsPlayerGameLogsBySeasonError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CbbV3StatsPlayerGameStatsByDateFinal
- **HTTP**: `GET /v3/cbb/stats/{format}/PlayerGameStatsByDateFinal/{date}` (Default (api))
- **Notes**: Returns the box score statistical record for all involved players across all teams' games on a given date. After each game has concluded its players' records are added.
- **Signature**: `CbbV3StatsPlayerGameStatsByDateFinal(Format format, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<PlayerGame>`
- **Error**: `SdkException<CbbV3StatsPlayerGameStatsByDateFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CbbV3StatsPlayerGameStatsByDateLiveFinal
- **HTTP**: `GET /v3/cbb/stats/{format}/PlayerGameStatsByDate/{date}` (Default (api))
- **Notes**: Returns the box score statistical record for all involved players across a given date, updated live as the game takes place.
- **Signature**: `CbbV3StatsPlayerGameStatsByDateLiveFinal(Format format, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<PlayerGame>`
- **Error**: `SdkException<CbbV3StatsPlayerGameStatsByDateLiveFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CbbV3StatsPlayerSeasonStats
- **HTTP**: `GET /v3/cbb/stats/{format}/PlayerSeasonStats/{season}` (Default (api))
- **Notes**: Returns all season-long stats (i.e. the season total, not each individual game record) for all players for a given season.
- **Signature**: `CbbV3StatsPlayerSeasonStats(Format format, string season, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<PlayerSeason>`
- **Error**: `SdkException<CbbV3StatsPlayerSeasonStatsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CbbV3StatsPlayerSeasonStatsByTeam
- **HTTP**: `GET /v3/cbb/stats/{format}/PlayerSeasonStatsByTeam/{season}/{team}` (Default (api))
- **Notes**: Returns all season-long stats (i.e. the season total, not each individual game record) for a given team's players in a given season.
- **Signature**: `CbbV3StatsPlayerSeasonStatsByTeam(Format format, string season, string team, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<PlayerSeason>`
- **Error**: `SdkException<CbbV3StatsPlayerSeasonStatsByTeamError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CbbV3StatsTeamGameStatsByDateFinal
- **HTTP**: `GET /v3/cbb/stats/{format}/TeamGameStatsByDateFinal/{date}` (Default (api))
- **Notes**: Returns the box score statistical record team-wide (aggregated from all players) for all games on a given date, updated as each game concludes.
- **Signature**: `CbbV3StatsTeamGameStatsByDateFinal(Format format, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<TeamGame>`
- **Error**: `SdkException<CbbV3StatsTeamGameStatsByDateFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
