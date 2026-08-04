# NhlV3Stats — operations

Accessor: `client.NhlV3Stats` · Source: `Api/NhlV3Stats.cs` · 14 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### NhlV3StatsBoxScoreFinal
- **HTTP**: `GET /v3/nhl/stats/{format}/BoxScoreFinal/{gameid}` (Default (api))
- **Notes**: Full statistical information for a specified game, down to the team and player stat level, delivered after the game is complete.
- **Signature**: `NhlV3StatsBoxScoreFinal(Format format, string gameid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BoxScore4`
- **Error**: `SdkException<NhlV3StatsBoxScoreFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NhlV3StatsBoxScoreLiveFinal
- **HTTP**: `GET /v3/nhl/stats/{format}/BoxScore/{gameid}` (Default (api))
- **Notes**: Full statistical information for a specified game, down to the team and player stat level, delivered live during the game, called per individual game.
- **Signature**: `NhlV3StatsBoxScoreLiveFinal(Format format, string gameid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BoxScore4`
- **Error**: `SdkException<NhlV3StatsBoxScoreLiveFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NhlV3StatsBoxScoresByDateFinal
- **HTTP**: `GET /v3/nhl/stats/{format}/BoxScoresFinal/{date}` (Default (api))
- **Notes**: Full statistical information for a specified date for each game that took place, down to the team and player stat level, delivered after the game is complete.
- **Signature**: `NhlV3StatsBoxScoresByDateFinal(Format format, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<BoxScore4>`
- **Error**: `SdkException<NhlV3StatsBoxScoresByDateFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NhlV3StatsBoxScoresByDateLiveFinal
- **HTTP**: `GET /v3/nhl/stats/{format}/BoxScores/{date}` (Default (api))
- **Notes**: Full statistical information for a specified game, down to the team and player stat level, delivered live during the games, called for all games on a given date.
- **Signature**: `NhlV3StatsBoxScoresByDateLiveFinal(Format format, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<BoxScore4>`
- **Error**: `SdkException<NhlV3StatsBoxScoresByDateLiveFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NhlV3StatsBoxScoresDeltaByDate
- **HTTP**: `GET /v3/nhl/stats/{format}/BoxScoresDelta/{date}/{minutes}` (Default (api))
- **Notes**: This method returns all box scores for a given date, but only returns player stats that have changed in the last X minutes as specified in your API call. By definition this is a live endpoint, not final.
- **Signature**: `NhlV3StatsBoxScoresDeltaByDate(Format format, string date, string minutes, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<BoxScore4>`
- **Error**: `SdkException<NhlV3StatsBoxScoresDeltaByDateError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NhlV3StatsFantasyPointsByDate
- **HTTP**: `GET /v3/nhl/stats/{format}/FantasyGameStatsByDate/{date}` (Default (api))
- **Notes**: Simple fantasy points awarded to each player who took part in a game on a given date.
- **Signature**: `NhlV3StatsFantasyPointsByDate(Format format, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<FantasyGame3>`
- **Error**: `SdkException<NhlV3StatsFantasyPointsByDateError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NhlV3StatsLineCombinationsBySeason
- **HTTP**: `GET /v3/nhl/stats/{format}/LinesBySeason/{season}` (Default (api))
- **Notes**: The line combinations - groups of skaters that play together - ordered and given by season.
- **Signature**: `NhlV3StatsLineCombinationsBySeason(Format format, string season, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<TeamLine>`
- **Error**: `SdkException<NhlV3StatsLineCombinationsBySeasonError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NhlV3StatsPlayerGameLogsBySeason
- **HTTP**: `GET /v3/nhl/stats/{format}/PlayerGameStatsBySeason/{season}/{playerid}/{numberofgames}` (Default (api))
- **Notes**: Specify a season, a player, and number of games (either an integer or &lt;code&gt;all&lt;/code&gt;) to see all of their box score logs. Refreshed after their most recent game is complete.
- **Signature**: `NhlV3StatsPlayerGameLogsBySeason(Format format, string season, string playerid, string numberofgames, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<PlayerGame5>`
- **Error**: `SdkException<NhlV3StatsPlayerGameLogsBySeasonError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NhlV3StatsPlayerGameStatsByDateFinal
- **HTTP**: `GET /v3/nhl/stats/{format}/PlayerGameStatsByDateFinal/{date}` (Default (api))
- **Notes**: Returns the box score statistical record for all involved players across all teams' games on a given date after each game has concluded.
- **Signature**: `NhlV3StatsPlayerGameStatsByDateFinal(Format format, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<PlayerGame5>`
- **Error**: `SdkException<NhlV3StatsPlayerGameStatsByDateFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NhlV3StatsPlayerGameStatsByDateLiveFinal
- **HTTP**: `GET /v3/nhl/stats/{format}/PlayerGameStatsByDate/{date}` (Default (api))
- **Notes**: Returns the box score statistical record for all involved players across a given date, updated live as the game takes place.
- **Signature**: `NhlV3StatsPlayerGameStatsByDateLiveFinal(Format format, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<PlayerGame5>`
- **Error**: `SdkException<NhlV3StatsPlayerGameStatsByDateLiveFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NhlV3StatsPlayerSeasonStats
- **HTTP**: `GET /v3/nhl/stats/{format}/PlayerSeasonStats/{season}` (Default (api))
- **Notes**: Returns all season-long stats (i.e. the season total, not each individual game record) for all players for a given season.
- **Signature**: `NhlV3StatsPlayerSeasonStats(Format format, string season, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<PlayerSeason6>`
- **Error**: `SdkException<NhlV3StatsPlayerSeasonStatsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NhlV3StatsPlayerSeasonStatsByTeam
- **HTTP**: `GET /v3/nhl/stats/{format}/PlayerSeasonStatsByTeam/{season}/{team}` (Default (api))
- **Notes**: Returns all season-long stats (i.e. the season total, not each individual game record) for a given team's players in a given season.
- **Signature**: `NhlV3StatsPlayerSeasonStatsByTeam(Format format, string season, string team, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<PlayerSeason6>`
- **Error**: `SdkException<NhlV3StatsPlayerSeasonStatsByTeamError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NhlV3StatsTeamGameStatsByDateFinal
- **HTTP**: `GET /v3/nhl/stats/{format}/TeamGameStatsByDateFinal/{date}` (Default (api))
- **Notes**: Returns the box score statistical record team-wide (aggregated from all players) for a given team's game in a given week after the game has concluded.
- **Signature**: `NhlV3StatsTeamGameStatsByDateFinal(Format format, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<TeamGame5>`
- **Error**: `SdkException<NhlV3StatsTeamGameStatsByDateFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NhlV3StatsTeamStatsAllowedByPosition
- **HTTP**: `GET /v3/nhl/stats/{format}/TeamStatsAllowedByPosition/{season}` (Default (api))
- **Notes**: Aggregated season stats allowed by each team against a given position (e.g. C, LW.)
- **Signature**: `NhlV3StatsTeamStatsAllowedByPosition(Format format, string season, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<TeamSeason5>`
- **Error**: `SdkException<NhlV3StatsTeamStatsAllowedByPositionError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
