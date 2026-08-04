# MlbV3Stats — operations

Accessor: `client.MlbV3Stats` · Source: `Api/MlbV3Stats.cs` · 17 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### MlbV3StatsBatterVsPitcherStats
- **HTTP**: `GET /v3/mlb/stats/{format}/HitterVsPitcher/{hitterid}/{pitcherid}` (Default (api))
- **Notes**: Stat records for a given hitter and a given pitcher, called by PlayerId in both cases.
- **Signature**: `MlbV3StatsBatterVsPitcherStats(Format format, string hitterid, string pitcherid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<PlayerSeason3>`
- **Error**: `SdkException<MlbV3StatsBatterVsPitcherStatsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### MlbV3StatsBoxScoreFinal
- **HTTP**: `GET /v3/mlb/stats/{format}/BoxScoreFinal/{gameid}` (Default (api))
- **Notes**: Full statistical information for a specified game, down to the team and player stat level, delivered after the game is complete.
- **Signature**: `MlbV3StatsBoxScoreFinal(Format format, string gameid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BoxScore2`
- **Error**: `SdkException<MlbV3StatsBoxScoreFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### MlbV3StatsBoxScoreLiveFinal
- **HTTP**: `GET /v3/mlb/stats/{format}/BoxScore/{gameid}` (Default (api))
- **Notes**: Full statistical information for a specified game, down to the team and player stat level, delivered live during the game, called per individual game.
- **Signature**: `MlbV3StatsBoxScoreLiveFinal(Format format, string gameid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BoxScore2`
- **Error**: `SdkException<MlbV3StatsBoxScoreLiveFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### MlbV3StatsBoxScoresByDateFinal
- **HTTP**: `GET /v3/mlb/stats/{format}/BoxScoresFinal/{date}` (Default (api))
- **Notes**: Full statistical information for a specified date for each game that took place, down to the team and player stat level, delivered after the game is complete.
- **Signature**: `MlbV3StatsBoxScoresByDateFinal(Format format, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<BoxScore2>`
- **Error**: `SdkException<MlbV3StatsBoxScoresByDateFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### MlbV3StatsBoxScoresByDateLiveFinal
- **HTTP**: `GET /v3/mlb/stats/{format}/BoxScores/{date}` (Default (api))
- **Notes**: Full statistical information for a specified game, down to the team and player stat level, delivered live during the game, called for all games on a given date.
- **Signature**: `MlbV3StatsBoxScoresByDateLiveFinal(Format format, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<BoxScore2>`
- **Error**: `SdkException<MlbV3StatsBoxScoresByDateLiveFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### MlbV3StatsBoxScoresDeltaByDate
- **HTTP**: `GET /v3/mlb/stats/{format}/BoxScoresDelta/{date}/{minutes}` (Default (api))
- **Notes**: This method returns all box scores for a given date, but only returns player stats that have changed in the last X minutes as specified in your API call. By definition this is a live endpoint, not final.
- **Signature**: `MlbV3StatsBoxScoresDeltaByDate(Format format, string date, string minutes, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<BoxScore2>`
- **Error**: `SdkException<MlbV3StatsBoxScoresDeltaByDateError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### MlbV3StatsFantasyPointsByDate
- **HTTP**: `GET /v3/mlb/stats/{format}/FantasyGameStatsByDate/{date}` (Default (api))
- **Notes**: Returns a simple list of fantasy points and stats for each player for a given date.
- **Signature**: `MlbV3StatsFantasyPointsByDate(Format format, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<FantasyGame>`
- **Error**: `SdkException<MlbV3StatsFantasyPointsByDateError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### MlbV3StatsPlayerGameLogsBySeason
- **HTTP**: `GET /v3/mlb/stats/{format}/PlayerGameStatsBySeason/{season}/{playerid}/{numberofgames}` (Default (api))
- **Notes**: Specify a season, a player, and number of games (either an integer or &lt;code&gt;all&lt;/code&gt;) to see all of their box score logs. Refreshed after their most recent game is complete.
- **Signature**: `MlbV3StatsPlayerGameLogsBySeason(Format format, string season, string playerid, string numberofgames, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<PlayerGame2>`
- **Error**: `SdkException<MlbV3StatsPlayerGameLogsBySeasonError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### MlbV3StatsPlayerGameStatsByDateFinal
- **HTTP**: `GET /v3/mlb/stats/{format}/PlayerGameStatsByDateFinal/{date}` (Default (api))
- **Notes**: Returns the box score statistical record for all involved players across all teams' games on a given date after each game has concluded.
- **Signature**: `MlbV3StatsPlayerGameStatsByDateFinal(Format format, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<PlayerGame2>`
- **Error**: `SdkException<MlbV3StatsPlayerGameStatsByDateFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### MlbV3StatsPlayerGameStatsByDateLiveFinal
- **HTTP**: `GET /v3/mlb/stats/{format}/PlayerGameStatsByDate/{date}` (Default (api))
- **Notes**: Returns the box score statistical record for all involved players across a given date, updated live as the game takes place.
- **Signature**: `MlbV3StatsPlayerGameStatsByDateLiveFinal(Format format, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<PlayerGame2>`
- **Error**: `SdkException<MlbV3StatsPlayerGameStatsByDateLiveFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### MlbV3StatsPlayerSeasonSplitStats
- **HTTP**: `GET /v3/mlb/stats/{format}/PlayerSeasonSplitStats/{season}/{split}` (Default (api))
- **Notes**: All players' split stats for the season. Split stats are available for left, right, and switch-handed pitchers and hitters.
- **Signature**: `MlbV3StatsPlayerSeasonSplitStats(Format format, string season, Split split, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<PlayerSeason3>`
- **Error**: `SdkException<MlbV3StatsPlayerSeasonSplitStatsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### MlbV3StatsPlayerSeasonStats
- **HTTP**: `GET /v3/mlb/stats/{format}/PlayerSeasonStats/{season}` (Default (api))
- **Notes**: Returns all season-long stats (i.e. the season total, not each individual game record) for all players for a given season.
- **Signature**: `MlbV3StatsPlayerSeasonStats(Format format, string season, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<PlayerSeason3>`
- **Error**: `SdkException<MlbV3StatsPlayerSeasonStatsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### MlbV3StatsPlayerSeasonStatsByAway
- **HTTP**: `GET /v3/mlb/stats/{format}/PlayerSeasonAwayStats/{season}` (Default (api))
- **Notes**: All players' stats for the season taken only from their road games.
- **Signature**: `MlbV3StatsPlayerSeasonStatsByAway(Format format, string season, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<PlayerSeason3>`
- **Error**: `SdkException<MlbV3StatsPlayerSeasonStatsByAwayError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### MlbV3StatsPlayerSeasonStatsByHome
- **HTTP**: `GET /v3/mlb/stats/{format}/PlayerSeasonHomeStats/{season}` (Default (api))
- **Notes**: All players' stats for the season taken only from their home games.
- **Signature**: `MlbV3StatsPlayerSeasonStatsByHome(Format format, string season, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<PlayerSeason3>`
- **Error**: `SdkException<MlbV3StatsPlayerSeasonStatsByHomeError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### MlbV3StatsPlayerSeasonStatsByTeam
- **HTTP**: `GET /v3/mlb/stats/{format}/PlayerSeasonStatsByTeam/{season}/{team}` (Default (api))
- **Notes**: Returns all season-long stats (i.e. the season total, not each individual game record) for a given team's players in a given season.
- **Signature**: `MlbV3StatsPlayerSeasonStatsByTeam(Format format, string season, string team, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<PlayerSeason3>`
- **Error**: `SdkException<MlbV3StatsPlayerSeasonStatsByTeamError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### MlbV3StatsPlayerSeasonStatsSplitByTeam
- **HTTP**: `GET /v3/mlb/stats/{format}/PlayerSeasonStatsSplitByTeam/{season}` (Default (api))
- **Notes**: All a given team's players' split stats for the season. Split stats are available for left, right, and switch-handed pitchers and hitters.
- **Signature**: `MlbV3StatsPlayerSeasonStatsSplitByTeam(Format format, string season, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<PlayerSeason3>`
- **Error**: `SdkException<MlbV3StatsPlayerSeasonStatsSplitByTeamError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### MlbV3StatsTeamHittingVsStartingPitcher
- **HTTP**: `GET /v3/mlb/stats/{format}/TeamHittersVsPitcher/{gameid}/{team}` (Default (api))
- **Notes**: For a given game, returns a team's hitting record versus the projected or confirmed starting pitcher for the game in question.
- **Signature**: `MlbV3StatsTeamHittingVsStartingPitcher(Format format, string gameid, string team, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<PlayerSeason3>`
- **Error**: `SdkException<MlbV3StatsTeamHittingVsStartingPitcherError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
