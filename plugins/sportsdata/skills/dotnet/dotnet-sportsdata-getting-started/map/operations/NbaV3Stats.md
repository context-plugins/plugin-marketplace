# NbaV3Stats — operations

Accessor: `client.NbaV3Stats` · Source: `Api/NbaV3Stats.cs` · 14 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### NbaV3StatsAllStars
- **HTTP**: `GET /v3/nba/stats/{format}/AllStars/{season}` (Default (api))
- **Notes**: A list of players selected for the All-Star Game for a given season.
- **Signature**: `NbaV3StatsAllStars(Format format, string season, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<PlayerInfo>`
- **Error**: `SdkException<NbaV3StatsAllStarsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NbaV3StatsBoxScoreFinal
- **HTTP**: `GET /v3/nba/stats/{format}/BoxScoreFinal/{gameid}` (Default (api))
- **Notes**: Full statistical information for a specified game, down to the team and player stat level, delivered after the game is complete.
- **Signature**: `NbaV3StatsBoxScoreFinal(Format format, string gameid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BoxScore3`
- **Error**: `SdkException<NbaV3StatsBoxScoreFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NbaV3StatsBoxScoreLiveFinal
- **HTTP**: `GET /v3/nba/stats/{format}/BoxScore/{gameid}` (Default (api))
- **Notes**: Full statistical information for a specified game, down to the team and player stat level, delivered live during the game, called per individual game.
- **Signature**: `NbaV3StatsBoxScoreLiveFinal(Format format, string gameid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BoxScore3`
- **Error**: `SdkException<NbaV3StatsBoxScoreLiveFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NbaV3StatsBoxScoresByDateFinal
- **HTTP**: `GET /v3/nba/stats/{format}/BoxScoresFinal/{date}` (Default (api))
- **Notes**: Full statistical information for a specified date for each game that took place, down to the team and player stat level, delivered after the game is complete.
- **Signature**: `NbaV3StatsBoxScoresByDateFinal(Format format, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<BoxScore3>`
- **Error**: `SdkException<NbaV3StatsBoxScoresByDateFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NbaV3StatsBoxScoresByDateLiveFinal
- **HTTP**: `GET /v3/nba/stats/{format}/BoxScores/{date}` (Default (api))
- **Notes**: Full statistical information for a specified game, down to the team and player stat level, delivered live during the games, called for all games on a given date.
- **Signature**: `NbaV3StatsBoxScoresByDateLiveFinal(Format format, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<BoxScore3>`
- **Error**: `SdkException<NbaV3StatsBoxScoresByDateLiveFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NbaV3StatsBoxScoresDeltaByDate
- **HTTP**: `GET /v3/nba/stats/{format}/BoxScoresDelta/{date}/{minutes}` (Default (api))
- **Notes**: This method returns all box scores for a given date, but only returns player stats that have changed in the last X minutes as specified in your API call. By definition this is a live endpoint, not final.
- **Signature**: `NbaV3StatsBoxScoresDeltaByDate(Format format, string date, string minutes, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<BoxScore3>`
- **Error**: `SdkException<NbaV3StatsBoxScoresDeltaByDateError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NbaV3StatsFantasyPointsByDate
- **HTTP**: `GET /v3/nba/stats/{format}/FantasyGameStatsByDate/{date}` (Default (api))
- **Notes**: A simple list of fantasy points scored for all players who took part in games on a given date.
- **Signature**: `NbaV3StatsFantasyPointsByDate(Format format, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<FantasyGame1>`
- **Error**: `SdkException<NbaV3StatsFantasyPointsByDateError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NbaV3StatsPlayerGameLogsBySeason
- **HTTP**: `GET /v3/nba/stats/{format}/PlayerGameStatsBySeason/{season}/{playerid}/{numberofgames}` (Default (api))
- **Notes**: Specify a season, a player, and number of games (either an integer or &lt;code&gt;all&lt;/code&gt;) to see all of their box score logs. Refreshed after their most recent game is complete.
- **Signature**: `NbaV3StatsPlayerGameLogsBySeason(Format format, string season, string playerid, string numberofgames, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<PlayerGame3>`
- **Error**: `SdkException<NbaV3StatsPlayerGameLogsBySeasonError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NbaV3StatsPlayerGameStatsByDateFinal
- **HTTP**: `GET /v3/nba/stats/{format}/PlayerGameStatsByDateFinal/{date}` (Default (api))
- **Notes**: Returns the box score statistical record for all involved players across all teams' games on a given date after each game has concluded.
- **Signature**: `NbaV3StatsPlayerGameStatsByDateFinal(Format format, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<PlayerGame3>`
- **Error**: `SdkException<NbaV3StatsPlayerGameStatsByDateFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NbaV3StatsPlayerGameStatsByDateLiveFinal
- **HTTP**: `GET /v3/nba/stats/{format}/PlayerGameStatsByDate/{date}` (Default (api))
- **Notes**: Returns the box score statistical record for all involved players across a given date, updated live as the game takes place.
- **Signature**: `NbaV3StatsPlayerGameStatsByDateLiveFinal(Format format, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<PlayerGame3>`
- **Error**: `SdkException<NbaV3StatsPlayerGameStatsByDateLiveFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NbaV3StatsPlayerSeasonStats
- **HTTP**: `GET /v3/nba/stats/{format}/PlayerSeasonStats/{season}` (Default (api))
- **Notes**: Returns all season-long stats (i.e. the season total, not each individual game record) for all players for a given season.
- **Signature**: `NbaV3StatsPlayerSeasonStats(Format format, string season, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<PlayerSeason4>`
- **Error**: `SdkException<NbaV3StatsPlayerSeasonStatsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NbaV3StatsPlayerSeasonStatsByTeam
- **HTTP**: `GET /v3/nba/stats/{format}/PlayerSeasonStatsByTeam/{season}/{team}` (Default (api))
- **Notes**: Returns all season-long stats (i.e. the season total, not each individual game record) for a given team's players in a given season.
- **Signature**: `NbaV3StatsPlayerSeasonStatsByTeam(Format format, string season, string team, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<PlayerSeason4>`
- **Error**: `SdkException<NbaV3StatsPlayerSeasonStatsByTeamError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NbaV3StatsTeamGameStatsByDateFinal
- **HTTP**: `GET /v3/nba/stats/{format}/TeamGameStatsByDateFinal/{date}` (Default (api))
- **Notes**: Returns the box score statistical record team-wide (aggregated from all players) for a games on a given date, delivered as each game concludes.
- **Signature**: `NbaV3StatsTeamGameStatsByDateFinal(Format format, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<TeamGame3>`
- **Error**: `SdkException<NbaV3StatsTeamGameStatsByDateFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NbaV3StatsTeamStatsAllowedByPosition
- **HTTP**: `GET /v3/nba/stats/{format}/TeamStatsAllowedByPosition/{season}` (Default (api))
- **Notes**: For each team, deliveres a season total of statistical records for their opponents' positions (e.g. all field goals made against this team by Centers.)
- **Signature**: `NbaV3StatsTeamStatsAllowedByPosition(Format format, string season, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<TeamSeason3>`
- **Error**: `SdkException<NbaV3StatsTeamStatsAllowedByPositionError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
