# NflV3Stats — operations

Accessor: `client.NflV3Stats` · Source: `Api/NflV3Stats.cs` · 34 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### NflV3StatsBoxScoreByTeamFinal
- **HTTP**: `GET /v3/nfl/stats/{format}/BoxScoreByTeamFinal/{season}/{week}/{hometeam}` (Default (api))
- **Notes**: Full statistical information for a given team's game in a specified season and week, down to the team and player stat level, delivered after the game is complete.
- **Signature**: `NflV3StatsBoxScoreByTeamFinal(Format format, string season, string week, string hometeam, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BoxScoreV3`
- **Error**: `SdkException<NflV3StatsBoxScoreByTeamFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3StatsBoxScoreByTeamLiveFinal
- **HTTP**: `GET /v3/nfl/stats/{format}/BoxScoreV3/{season}/{week}/{hometeam}` (Default (api))
- **Notes**: Full statistical information for a specified game, down to the team and player stat level, delivered live during the game, called for a given team's game in a given week and season.
- **Signature**: `NflV3StatsBoxScoreByTeamLiveFinal(Format format, string season, string week, string hometeam, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BoxScoreV3`
- **Error**: `SdkException<NflV3StatsBoxScoreByTeamLiveFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3StatsBoxScoreFinal
- **HTTP**: `GET /v3/nfl/stats/{format}/BoxScoreFinal/{scoreid}` (Default (api))
- **Notes**: Full statistical information for a specified game, down to the team and player stat level, delivered after the game is complete.
- **Signature**: `NflV3StatsBoxScoreFinal(Format format, string scoreid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BoxScoreV3`
- **Error**: `SdkException<NflV3StatsBoxScoreFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3StatsBoxScoreLiveFinal
- **HTTP**: `GET /v3/nfl/stats/{format}/BoxScoreByScoreIDV3/{scoreid}` (Default (api))
- **Notes**: Full statistical information for a specified game, down to the team and player stat level, delivered live during the game, called per individual game.
- **Signature**: `NflV3StatsBoxScoreLiveFinal(Format format, string scoreid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BoxScoreV3`
- **Error**: `SdkException<NflV3StatsBoxScoreLiveFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3StatsBoxScoresByWeekFinal
- **HTTP**: `GET /v3/nfl/stats/{format}/BoxScoresFinal/{season}/{week}` (Default (api))
- **Notes**: Full statistical information for a specified game week for each game that took place, down to the team and player stat level, delivered after the game is complete.
- **Signature**: `NflV3StatsBoxScoresByWeekFinal(Format format, string season, string week, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<BoxScoreV3>`
- **Error**: `SdkException<NflV3StatsBoxScoresByWeekFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3StatsBoxScoresDeltaByWeek
- **HTTP**: `GET /v3/nfl/stats/{format}/BoxScoresDeltaV3/{season}/{week}/{playerstoinclude}/{minutes}` (Default (api))
- **Notes**: This method returns all box scores for a given season and week, but only returns player stats that have changed in the last X minutes as specified in your API call. You can also filter by type of player stats to include, such as traditional fantasy players, IDP players or all players. by definition this is a live endpoint, not final.
- **Signature**: `NflV3StatsBoxScoresDeltaByWeek(Format format, string season, string week, Playerstoinclude playerstoinclude, string minutes, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<BoxScoreV3>`
- **Error**: `SdkException<NflV3StatsBoxScoresDeltaByWeekError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3StatsBoxScoresSimulation
- **HTTP**: `GET /v3/nfl/stats/{format}/SimulatedBoxScoresV3/{numberofplays}` (Default (api))
- **Notes**: Gets simulated live box scores of NFL games, covering the Conference Championship games on January 21, 2018.
- **Signature**: `NflV3StatsBoxScoresSimulation(Format format, string numberofplays, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<BoxScoreV3>`
- **Error**: `SdkException<NflV3StatsBoxScoresSimulationError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3StatsFantasyDefenseGameStatsAll
- **HTTP**: `GET /v3/nfl/stats/{format}/FantasyDefenseByGame/{season}/{week}` (Default (api))
- **Notes**: Returns stats and fantasy points for a given game for the fantasy defense team (not IDP.)
- **Signature**: `NflV3StatsFantasyDefenseGameStatsAll(Format format, string season, string week, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<FantasyDefenseGame>`
- **Error**: `SdkException<NflV3StatsFantasyDefenseGameStatsAllError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3StatsFantasyDefenseGameStatsByTeam
- **HTTP**: `GET /v3/nfl/stats/{format}/FantasyDefenseByGameByTeam/{season}/{week}/{team}` (Default (api))
- **Notes**: Returns stats and fantasy points for a given team's game for the fantasy defense team (not IDP.)
- **Signature**: `NflV3StatsFantasyDefenseGameStatsByTeam(Format format, string season, string week, string team, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `FantasyDefenseGame`
- **Error**: `SdkException<NflV3StatsFantasyDefenseGameStatsByTeamError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3StatsFantasyDefenseSeasonStatsAll
- **HTTP**: `GET /v3/nfl/stats/{format}/FantasyDefenseBySeason/{season}` (Default (api))
- **Notes**: Returns stats and fantasy points for a given season for the fantasy defense team (not IDP.)
- **Signature**: `NflV3StatsFantasyDefenseSeasonStatsAll(Format format, string season, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<FantasyDefenseSeason>`
- **Error**: `SdkException<NflV3StatsFantasyDefenseSeasonStatsAllError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3StatsFantasyDefenseSeasonStatsByTeam
- **HTTP**: `GET /v3/nfl/stats/{format}/FantasyDefenseBySeasonByTeam/{season}/{team}` (Default (api))
- **Notes**: Returns stats and fantasy points for a given team and season for the fantasy defense team (not IDP.)
- **Signature**: `NflV3StatsFantasyDefenseSeasonStatsByTeam(Format format, string season, string team, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `FantasyDefenseSeason`
- **Error**: `SdkException<NflV3StatsFantasyDefenseSeasonStatsByTeamError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3StatsFantasyPlayerOwnershipPercentagesSeasonLongByWeek
- **HTTP**: `GET /v3/nfl/stats/{format}/PlayerOwnership/{season}/{week}` (Default (api))
- **Notes**: Projected fantasy ownership of all players for a given season.
- **Signature**: `NflV3StatsFantasyPlayerOwnershipPercentagesSeasonLongByWeek(Format format, string season, string week, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<PlayerOwnership>`
- **Error**: `SdkException<NflV3StatsFantasyPlayerOwnershipPercentagesSeasonLongByWeekError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3StatsFantasyPointsByWeek
- **HTTP**: `GET /v3/nfl/stats/{format}/FantasyGameStatsByWeek/{season}/{week}` (Default (api))
- **Notes**: Returns a simple list of fantasy points and stats for each player for a given week.
- **Signature**: `NflV3StatsFantasyPointsByWeek(Format format, string season, string week, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<FantasyGame2>`
- **Error**: `SdkException<NflV3StatsFantasyPointsByWeekError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3StatsGamesBySeasonFinal
- **HTTP**: `GET /v3/nfl/stats/{format}/ScoresFinal/{season}` (Default (api))
- **Notes**: Full scores and gameday info, including weather, referee, infotainment odds, as well as all of the quarter scores and full-time score.
- **Signature**: `NflV3StatsGamesBySeasonFinal(Format format, string season, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Score>`
- **Error**: `SdkException<NflV3StatsGamesBySeasonFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3StatsInjuriesAll
- **HTTP**: `GET /v3/nfl/stats/{format}/Injuries/{season}/{week}` (Default (api))
- **Notes**: A list of all injured players and a description of their injuries.
- **Signature**: `NflV3StatsInjuriesAll(Format format, string season, string week, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Injury>`
- **Error**: `SdkException<NflV3StatsInjuriesAllError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3StatsInjuriesByTeam
- **HTTP**: `GET /v3/nfl/stats/{format}/Injuries/{season}/{week}/{team}` (Default (api))
- **Notes**: A list of all injured players on a specified team and a description of their injuries.
- **Signature**: `NflV3StatsInjuriesByTeam(Format format, string season, string week, string team, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Injury>`
- **Error**: `SdkException<NflV3StatsInjuriesByTeamError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3StatsPlayerGameLogsBySeason
- **HTTP**: `GET /v3/nfl/stats/{format}/PlayerGameStatsBySeason/{season}/{playerid}/{numberofgames}` (Default (api))
- **Notes**: Specify a season, a player, and number of games (either an integer or &lt;code&gt;all&lt;/code&gt;) to see all of their box score logs. Refreshed after their most recent game is complete.
- **Signature**: `NflV3StatsPlayerGameLogsBySeason(Format format, string season, string playerid, string numberofgames, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<PlayerGame4>`
- **Error**: `SdkException<NflV3StatsPlayerGameLogsBySeasonError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3StatsPlayerGameRedZoneStats
- **HTTP**: `GET /v3/nfl/stats/{format}/PlayerGameRedZoneStats/{season}/{week}` (Default (api))
- **Notes**: Delivers all offensive stats within the red zone (within the 20-yard line of the defensive team) for all players in a given season or week.
- **Signature**: `NflV3StatsPlayerGameRedZoneStats(Format format, string season, string week, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<PlayerGameRedZone>`
- **Error**: `SdkException<NflV3StatsPlayerGameRedZoneStatsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3StatsPlayerGameRedZoneStatsInsideFive
- **HTTP**: `GET /v3/nfl/stats/{format}/PlayerGameRedZoneInsideFiveStats/{season}/{week}` (Default (api))
- **Notes**: Delivers all offensive stats within the 5-yard line of the defensive team for all players in a given season or week.
- **Signature**: `NflV3StatsPlayerGameRedZoneStatsInsideFive(Format format, string season, string week, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<PlayerGameRedZone>`
- **Error**: `SdkException<NflV3StatsPlayerGameRedZoneStatsInsideFiveError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3StatsPlayerGameRedZoneStatsInsideTen
- **HTTP**: `GET /v3/nfl/stats/{format}/PlayerGameRedZoneInsideTenStats/{season}/{week}` (Default (api))
- **Notes**: Delivers all offensive stats within the 10-yard line of the defensive team for all players in a given season or week.
- **Signature**: `NflV3StatsPlayerGameRedZoneStatsInsideTen(Format format, string season, string week, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<PlayerGameRedZone>`
- **Error**: `SdkException<NflV3StatsPlayerGameRedZoneStatsInsideTenError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3StatsPlayerGameStatsByTeamFinal
- **HTTP**: `GET /v3/nfl/stats/{format}/PlayerGameStatsByTeamFinal/{season}/{week}/{team}` (Default (api))
- **Notes**: Returns the box score statistical record for all involved players in a given team's game in a given week after the game has concluded.
- **Signature**: `NflV3StatsPlayerGameStatsByTeamFinal(Format format, string season, string week, string team, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<PlayerGame4>`
- **Error**: `SdkException<NflV3StatsPlayerGameStatsByTeamFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3StatsPlayerGameStatsByTeamLiveFinal
- **HTTP**: `GET /v3/nfl/stats/{format}/PlayerGameStatsByTeam/{season}/{week}/{team}` (Default (api))
- **Notes**: Returns the box score statistical record for all involved players across a given team's game in a given week, updated live as the game takes place.
- **Signature**: `NflV3StatsPlayerGameStatsByTeamLiveFinal(Format format, string season, string week, string team, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<PlayerGame4>`
- **Error**: `SdkException<NflV3StatsPlayerGameStatsByTeamLiveFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3StatsPlayerGameStatsByWeekFinal
- **HTTP**: `GET /v3/nfl/stats/{format}/PlayerGameStatsByWeekFinal/{season}/{week}` (Default (api))
- **Notes**: Returns the box score statistical record for all involved players across all teams' games in a given week after the game has concluded.
- **Signature**: `NflV3StatsPlayerGameStatsByWeekFinal(Format format, string season, string week, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<PlayerGame4>`
- **Error**: `SdkException<NflV3StatsPlayerGameStatsByWeekFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3StatsPlayerGameStatsByWeekLiveFinal
- **HTTP**: `GET /v3/nfl/stats/{format}/PlayerGameStatsByWeek/{season}/{week}` (Default (api))
- **Notes**: Returns the box score statistical record for all involved players across a given week, updated live as the game takes place.
- **Signature**: `NflV3StatsPlayerGameStatsByWeekLiveFinal(Format format, string season, string week, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<PlayerGame4>`
- **Error**: `SdkException<NflV3StatsPlayerGameStatsByWeekLiveFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3StatsPlayerGameStatsDelta
- **HTTP**: `GET /v3/nfl/stats/{format}/PlayerGameStatsDelta/{minutes}` (Default (api))
- **Notes**: This method returns all player game stats, but only returns player stats that have changed in the last X minutes as specified in your API call. By definition this is a live endpoint, not final.
- **Signature**: `NflV3StatsPlayerGameStatsDelta(Format format, string minutes, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<PlayerGame4>`
- **Error**: `SdkException<NflV3StatsPlayerGameStatsDeltaError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3StatsPlayerGameStatsDeltaByWeek
- **HTTP**: `GET /v3/nfl/stats/{format}/PlayerGameStatsByWeekDelta/{season}/{week}/{minutes}` (Default (api))
- **Notes**: This method returns all player scores for a given season and week, but only returns player stats that have changed in the last X minutes as specified in your API call. Ideal for live applications.
- **Signature**: `NflV3StatsPlayerGameStatsDeltaByWeek(Format format, string season, string week, string minutes, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<PlayerGame4>`
- **Error**: `SdkException<NflV3StatsPlayerGameStatsDeltaByWeekError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3StatsPlayerSeasonRedZoneStats
- **HTTP**: `GET /v3/nfl/stats/{format}/PlayerSeasonRedZoneStats/{season}` (Default (api))
- **Notes**: Delivers all offensive stats within the red zone (within the 20-yard line of the defensive team) for all players in a given season (i.e. the season total, not each individual game record.)
- **Signature**: `NflV3StatsPlayerSeasonRedZoneStats(Format format, string season, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<PlayerSeasonRedZone>`
- **Error**: `SdkException<NflV3StatsPlayerSeasonRedZoneStatsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3StatsPlayerSeasonRedZoneStatsInsideFive
- **HTTP**: `GET /v3/nfl/stats/{format}/PlayerSeasonRedZoneInsideFiveStats/{season}` (Default (api))
- **Notes**: Delivers all offensive stats within the 5-yard line of the defensive team for all players in a given season (i.e. the season total, not each individual game record.)
- **Signature**: `NflV3StatsPlayerSeasonRedZoneStatsInsideFive(Format format, string season, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<PlayerSeasonRedZone>`
- **Error**: `SdkException<NflV3StatsPlayerSeasonRedZoneStatsInsideFiveError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3StatsPlayerSeasonRedZoneStatsInsideTen
- **HTTP**: `GET /v3/nfl/stats/{format}/PlayerSeasonRedZoneInsideTenStats/{season}` (Default (api))
- **Notes**: Delivers all offensive stats within the 10-yard line of the defensive team for all players in a given season (i.e. the season total, not each individual game record.)
- **Signature**: `NflV3StatsPlayerSeasonRedZoneStatsInsideTen(Format format, string season, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<PlayerSeasonRedZone>`
- **Error**: `SdkException<NflV3StatsPlayerSeasonRedZoneStatsInsideTenError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3StatsPlayerSeasonStats
- **HTTP**: `GET /v3/nfl/stats/{format}/PlayerSeasonStats/{season}` (Default (api))
- **Notes**: Returns all season-long stats (i.e. the season total, not each individual game record) for all players for a given season.
- **Signature**: `NflV3StatsPlayerSeasonStats(Format format, string season, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<PlayerSeason5>`
- **Error**: `SdkException<NflV3StatsPlayerSeasonStatsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3StatsPlayerSeasonStatsByTeam
- **HTTP**: `GET /v3/nfl/stats/{format}/PlayerSeasonStatsByTeam/{season}/{team}` (Default (api))
- **Notes**: Returns all season-long stats (i.e. the season total, not each individual game record) for a given team's players in a given season.
- **Signature**: `NflV3StatsPlayerSeasonStatsByTeam(Format format, string season, string team, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<PlayerSeason5>`
- **Error**: `SdkException<NflV3StatsPlayerSeasonStatsByTeamError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3StatsPlayerSeasonThirdDownStats
- **HTTP**: `GET /v3/nfl/stats/{format}/PlayerSeasonThirdDownStats/{season}` (Default (api))
- **Notes**: Returns all season-long stats (i.e. the season total, not each individual game record) for all players on the third down for a given season.
- **Signature**: `NflV3StatsPlayerSeasonThirdDownStats(Format format, string season, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<PlayerSeasonThirdDown>`
- **Error**: `SdkException<NflV3StatsPlayerSeasonThirdDownStatsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3StatsProBowlers
- **HTTP**: `GET /v3/nfl/stats/{format}/ProBowlers/{season}` (Default (api))
- **Notes**: A list of players involved in the Pro Bowl, by season.
- **Signature**: `NflV3StatsProBowlers(Format format, string season, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<PlayerInfo>`
- **Error**: `SdkException<NflV3StatsProBowlersError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3StatsTeamGameStatsByGameFinal
- **HTTP**: `GET /v3/nfl/stats/{format}/TeamGameStatsFinal/{season}/{week}` (Default (api))
- **Notes**: Returns the box score statistical record team-wide (aggregated from all players) for a given team's game in a given week after the game has concluded.
- **Signature**: `NflV3StatsTeamGameStatsByGameFinal(Format format, string season, string week, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<TeamGame4>`
- **Error**: `SdkException<NflV3StatsTeamGameStatsByGameFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
