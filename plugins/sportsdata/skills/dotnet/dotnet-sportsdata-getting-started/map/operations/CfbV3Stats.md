# CfbV3Stats — operations

Accessor: `client.CfbV3Stats` · Source: `Api/CfbV3Stats.cs` · 13 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CfbV3StatsBoxScoreFinal
- **HTTP**: `GET /v3/cfb/stats/{format}/BoxScoreFinal/{gameid}` (Default (api))
- **Notes**: Full statistical information for a specified game, down to the team and player stat level, delivered after the game is complete.
- **Signature**: `CfbV3StatsBoxScoreFinal(Format format, string gameid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<BoxScore1>`
- **Error**: `SdkException<CfbV3StatsBoxScoreFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CfbV3StatsBoxScoreLiveFinal
- **HTTP**: `GET /v3/cfb/stats/{format}/BoxScore/{gameid}` (Default (api))
- **Notes**: Full statistical information for a specified game, down to the team and player stat level, delivered live during the game, called per individual game. Note that defensive player stats update 1-2 hours after the game has ended.
- **Signature**: `CfbV3StatsBoxScoreLiveFinal(Format format, string gameid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<BoxScore1>`
- **Error**: `SdkException<CfbV3StatsBoxScoreLiveFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CfbV3StatsBoxScoresByDateFinal
- **HTTP**: `GET /v3/cfb/stats/{format}/BoxScoresFinal/{date}` (Default (api))
- **Notes**: Full statistical information for a specified date, down to the team and player stat level, delivered after the game is complete.
- **Signature**: `CfbV3StatsBoxScoresByDateFinal(Format format, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<BoxScore1>`
- **Error**: `SdkException<CfbV3StatsBoxScoresByDateFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CfbV3StatsBoxScoresByDateLiveFinal
- **HTTP**: `GET /v3/cfb/stats/{format}/BoxScoresByDate/{date}` (Default (api))
- **Notes**: Full statistical information for a specified game, down to the team and player stat level, delivered live during the games, called for all games on a given date. Note that defensive player stats update 1-2 hours after the game has ended.
- **Signature**: `CfbV3StatsBoxScoresByDateLiveFinal(Format format, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<BoxScore1>`
- **Error**: `SdkException<CfbV3StatsBoxScoresByDateLiveFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CfbV3StatsBoxScoresByWeekFinal
- **HTTP**: `GET /v3/cfb/stats/{format}/BoxScoresByWeekFinal/{season}/{week}` (Default (api))
- **Notes**: Full statistical information for a specified game week for each game that took place, down to the team and player stat level, delivered after the game is complete.
- **Signature**: `CfbV3StatsBoxScoresByWeekFinal(Format format, string season, string week, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<BoxScore1>`
- **Error**: `SdkException<CfbV3StatsBoxScoresByWeekFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CfbV3StatsBoxScoresByWeekLiveFinal
- **HTTP**: `GET /v3/cfb/stats/{format}/BoxScoresByWeek/{season}/{week}` (Default (api))
- **Notes**: Full statistical information, down to the team and player stat level, delivered live during the games, called for all games on a given week of a given season. Note that defensive player stats update 1-2 hours after the game has ended.
- **Signature**: `CfbV3StatsBoxScoresByWeekLiveFinal(Format format, string season, string week, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<BoxScore1>`
- **Error**: `SdkException<CfbV3StatsBoxScoresByWeekLiveFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CfbV3StatsBoxScoresDeltaByWeek
- **HTTP**: `GET /v3/cfb/stats/{format}/BoxScoresByWeekDelta/{season}/{week}/{minutes}` (Default (api))
- **Notes**: This method returns all box scores for a given season and week, but only returns player stats that have changed in the last X minutes as specified in your API call. By definition this is a live endpoint, not final. Note that defensive player stats update 1-2 hours after the game has ended.
- **Signature**: `CfbV3StatsBoxScoresDeltaByWeek(Format format, string season, string week, string minutes, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<BoxScore1>`
- **Error**: `SdkException<CfbV3StatsBoxScoresDeltaByWeekError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CfbV3StatsPlayerGameLogsBySeason
- **HTTP**: `GET /v3/cfb/stats/{format}/PlayerGameStatsBySeason/{season}/{playerid}/{numberofgames}` (Default (api))
- **Notes**: Specify a season, a player, and number of games (either an integer or &lt;code&gt;all&lt;/code&gt;) to see all of their box score logs. Refreshed after their most recent game is complete.
- **Signature**: `CfbV3StatsPlayerGameLogsBySeason(Format format, string season, string playerid, string numberofgames, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<PlayerGame1>`
- **Error**: `SdkException<CfbV3StatsPlayerGameLogsBySeasonError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CfbV3StatsPlayerGameStatsByWeekFinal
- **HTTP**: `GET /v3/cfb/stats/{format}/PlayerGameStatsByWeekFinal/{season}/{week}` (Default (api))
- **Notes**: Returns the box score statistical record for all involved players across all teams' games on a given week after each game has concluded.
- **Signature**: `CfbV3StatsPlayerGameStatsByWeekFinal(Format format, string season, string week, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<PlayerGame1>`
- **Error**: `SdkException<CfbV3StatsPlayerGameStatsByWeekFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CfbV3StatsPlayerGameStatsByWeekLiveFinal
- **HTTP**: `GET /v3/cfb/stats/{format}/PlayerGameStatsByWeek/{season}/{week}` (Default (api))
- **Notes**: Returns the box score statistical record for all involved players across a given week, updated live as the games take place. Note that defensive player stats update 1-2 hours after the game has ended.
- **Signature**: `CfbV3StatsPlayerGameStatsByWeekLiveFinal(Format format, string season, string week, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<PlayerGame1>`
- **Error**: `SdkException<CfbV3StatsPlayerGameStatsByWeekLiveFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CfbV3StatsPlayerSeasonStats
- **HTTP**: `GET /v3/cfb/stats/{format}/PlayerSeasonStats/{season}` (Default (api))
- **Notes**: Returns all season-long stats (i.e. the season total, not each individual game record) for all players for a given season.
- **Signature**: `CfbV3StatsPlayerSeasonStats(Format format, string season, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<PlayerSeason1>`
- **Error**: `SdkException<CfbV3StatsPlayerSeasonStatsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CfbV3StatsPlayerSeasonStatsByTeam
- **HTTP**: `GET /v3/cfb/stats/{format}/PlayerSeasonStatsByTeam/{season}/{team}` (Default (api))
- **Notes**: Returns all season-long stats (i.e. the season total, not each individual game record) for a given team's players in a given season.
- **Signature**: `CfbV3StatsPlayerSeasonStatsByTeam(Format format, string season, string team, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<PlayerSeason1>`
- **Error**: `SdkException<CfbV3StatsPlayerSeasonStatsByTeamError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CfbV3StatsTeamGameStatsByWeekFinal
- **HTTP**: `GET /v3/cfb/stats/{format}/TeamGameStatsByWeekFinal/{season}/{week}` (Default (api))
- **Notes**: Returns the box score statistical record team-wide (aggregated from all players) for games in a given week after the game has concluded.
- **Signature**: `CfbV3StatsTeamGameStatsByWeekFinal(Format format, string season, string week, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<TeamGame1>`
- **Error**: `SdkException<CfbV3StatsTeamGameStatsByWeekFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
