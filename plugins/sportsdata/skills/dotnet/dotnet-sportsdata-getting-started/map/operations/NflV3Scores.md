# NflV3Scores — operations

Accessor: `client.NflV3Scores` · Source: `Api/NflV3Scores.cs` · 44 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### NflV3ScoresAreGamesInProgress
- **HTTP**: `GET /v3/nfl/scores/{format}/AreAnyGamesInProgress` (Default (api))
- **Notes**: Returns &lt;code&gt;true&lt;/code&gt; if there is at least one game being played at the time of the request or &lt;code&gt;false&lt;/code&gt; if there are none.
- **Signature**: `NflV3ScoresAreGamesInProgress(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `bool`
- **Error**: `SdkException<NflV3ScoresAreGamesInProgressError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3ScoresByeWeeks
- **HTTP**: `GET /v3/nfl/scores/{format}/Byes/{season}` (Default (api))
- **Notes**: Get bye weeks for the teams during a specified NFL season.
- **Signature**: `NflV3ScoresByeWeeks(Format format, string season, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Bye>`
- **Error**: `SdkException<NflV3ScoresByeWeeksError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3ScoresDepthChartsAll
- **HTTP**: `GET /v3/nfl/scores/{format}/DepthChartsAll` (Default (api))
- **Notes**: Depth charts for all players in all NFL teams split by offensive, defensive, and special teams position groupings.
- **Signature**: `NflV3ScoresDepthChartsAll(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<TeamDepthChart1>`
- **Error**: `SdkException<NflV3ScoresDepthChartsAllError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3ScoresDepthChartsByActive
- **HTTP**: `GET /v3/nfl/scores/{format}/DepthCharts` (Default (api))
- **Notes**: Depth charts for all active players NFL teams split by offensive, defensive, and special teams position groupings.
- **Signature**: `NflV3ScoresDepthChartsByActive(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<TeamDepthChart1>`
- **Error**: `SdkException<NflV3ScoresDepthChartsByActiveError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3ScoresDepthChartsByWeek
- **HTTP**: `GET /v3/nfl/scores/{format}/DepthChartsByWeek/{season}/{week}` (Default (api))
- **Notes**: Depth charts for active players by week in all NFL teams split by offensive, defensive, and special teams position groupings.
- **Signature**: `NflV3ScoresDepthChartsByWeek(Format format, string season, string week, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<TeamDepthChartWeekly>`
- **Error**: `SdkException<NflV3ScoresDepthChartsByWeekError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3ScoresGamesByDateFinal
- **HTTP**: `GET /v3/nfl/scores/{format}/ScoresByDateFinal/{date}` (Default (api))
- **Notes**: Full scores and gameday info, including weather, referee, infotainment odds, as well as all of the quarter scores and full-time score.
- **Signature**: `NflV3ScoresGamesByDateFinal(Format format, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Score>`
- **Error**: `SdkException<NflV3ScoresGamesByDateFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3ScoresGamesByDateLiveFinal
- **HTTP**: `GET /v3/nfl/scores/{format}/ScoresByDate/{date}` (Default (api))
- **Notes**: Full scores and gameday info delivered live and post-game. Live data includes down and distance, as well as game clock. Gameday info includes referee, weather, TV channel etc.
- **Signature**: `NflV3ScoresGamesByDateLiveFinal(Format format, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Score>`
- **Error**: `SdkException<NflV3ScoresGamesByDateLiveFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3ScoresGamesBySeasonLiveFinal
- **HTTP**: `GET /v3/nfl/scores/{format}/Scores/{season}` (Default (api))
- **Notes**: Full scores and gameday info delivered live and post-game. Live data includes down and distance, as well as game clock. Gameday info includes referee, weather, TV channel etc.
- **Signature**: `NflV3ScoresGamesBySeasonLiveFinal(Format format, string season, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Score>`
- **Error**: `SdkException<NflV3ScoresGamesBySeasonLiveFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3ScoresGamesByWeekFinal
- **HTTP**: `GET /v3/nfl/scores/{format}/ScoresByWeekFinal/{season}/{week}` (Default (api))
- **Notes**: Full scores and gameday info, including weather, referee, infotainment odds, as well as all of the quarter scores and full-time score.
- **Signature**: `NflV3ScoresGamesByWeekFinal(Format format, string season, string week, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Score>`
- **Error**: `SdkException<NflV3ScoresGamesByWeekFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3ScoresGamesByWeekLiveFinal
- **HTTP**: `GET /v3/nfl/scores/{format}/ScoresByWeek/{season}/{week}` (Default (api))
- **Notes**: Full scores and gameday info delivered live and post-game. Live data includes down and distance, as well as game clock. Gameday info includes referee, weather, TV channel etc.
- **Signature**: `NflV3ScoresGamesByWeekLiveFinal(Format format, string season, string week, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Score>`
- **Error**: `SdkException<NflV3ScoresGamesByWeekLiveFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3ScoresGamesBasicByWeekFinal
- **HTTP**: `GET /v3/nfl/scores/{format}/ScoresBasicFinal/{season}/{week}` (Default (api))
- **Notes**: A slimmed-down score endpoint, giving just the quarter scores and final score, for simple applications.
- **Signature**: `NflV3ScoresGamesBasicByWeekFinal(Format format, string season, string week, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<ScoreBasic4>`
- **Error**: `SdkException<NflV3ScoresGamesBasicByWeekFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3ScoresGamesBasicByWeekLiveFinal
- **HTTP**: `GET /v3/nfl/scores/{format}/ScoresBasic/{season}/{week}` (Default (api))
- **Notes**: This endpoint simply delivers the game clock and quarter and total scores live; no down and distance and no gameday info such as weather.
- **Signature**: `NflV3ScoresGamesBasicByWeekLiveFinal(Format format, string season, string week, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<ScoreBasic4>`
- **Error**: `SdkException<NflV3ScoresGamesBasicByWeekLiveFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3ScoresNews
- **HTTP**: `GET /v3/nfl/scores/{format}/News` (Default (api))
- **Notes**: Basic RotoBaller news feed, with limited stories available - usually 0-1 stories per day. Ideal for test purposes.
- **Signature**: `NflV3ScoresNews(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<News1>`
- **Error**: `SdkException<NflV3ScoresNewsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3ScoresNewsByDate
- **HTTP**: `GET /v3/nfl/scores/{format}/NewsByDate/{date}` (Default (api))
- **Notes**: Basic RotoBaller news feed, with limited stories available - usually 0-1 stories per day. Ideal for test purposes.
- **Signature**: `NflV3ScoresNewsByDate(Format format, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<News1>`
- **Error**: `SdkException<NflV3ScoresNewsByDateError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3ScoresNewsByTeam
- **HTTP**: `GET /v3/nfl/scores/{format}/NewsByTeam/{team}` (Default (api))
- **Notes**: Basic RotoBaller news feed, with limited stories available - usually 0-1 stories per day. Ideal for test purposes.
- **Signature**: `NflV3ScoresNewsByTeam(Format format, string team, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<News1>`
- **Error**: `SdkException<NflV3ScoresNewsByTeamError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3ScoresPlayerDetailsAll
- **HTTP**: `GET /v3/nfl/scores/{format}/Players` (Default (api))
- **Notes**: Full player bio and details, including injury notes, for all NFL players in our database.
- **Signature**: `NflV3ScoresPlayerDetailsAll(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Player5>`
- **Error**: `SdkException<NflV3ScoresPlayerDetailsAllError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3ScoresPlayerDetailsByFreeAgents
- **HTTP**: `GET /v3/nfl/scores/{format}/FreeAgents` (Default (api))
- **Notes**: Full player bio and details, including injury notes, for all available NFL free agents unattached to a team.
- **Signature**: `NflV3ScoresPlayerDetailsByFreeAgents(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Player5>`
- **Error**: `SdkException<NflV3ScoresPlayerDetailsByFreeAgentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3ScoresPlayerDetailsByRookieDraftYear
- **HTTP**: `GET /v3/nfl/scores/{format}/Rookies/{season}` (Default (api))
- **Notes**: Full player bio and details, including injury notes, for all available NFL players by a specified draft year.
- **Signature**: `NflV3ScoresPlayerDetailsByRookieDraftYear(Format format, string season, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Player5>`
- **Error**: `SdkException<NflV3ScoresPlayerDetailsByRookieDraftYearError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3ScoresPlayerDetailsByTeam
- **HTTP**: `GET /v3/nfl/scores/{format}/Players/{team}` (Default (api))
- **Notes**: Full player bio and details, including injury notes, for all available NFL players by team.
- **Signature**: `NflV3ScoresPlayerDetailsByTeam(Format format, string team, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<PlayerDetail>`
- **Error**: `SdkException<NflV3ScoresPlayerDetailsByTeamError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3ScoresPlayerGameLogsBySeason
- **HTTP**: `GET /v3/nfl/scores/{format}/TeamGameStatsBySeason/{season}/{teamid}/{numberofgames}` (Default (api))
- **Notes**: Specify a season, a player, and number of games (either an integer or &lt;code&gt;all&lt;/code&gt;) to see all of their box score logs. Refreshed after their most recent game is complete.
- **Signature**: `NflV3ScoresPlayerGameLogsBySeason(Format format, string season, string teamid, string numberofgames, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<TeamGame4>`
- **Error**: `SdkException<NflV3ScoresPlayerGameLogsBySeasonError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3ScoresPlayerProfilesAll
- **HTTP**: `GET /v3/nfl/scores/{format}/PlayersByAvailable` (Default (api))
- **Notes**: Player profiles include basic biographical information, position, college, and current team (if attached to a team.) This returns all players.
- **Signature**: `NflV3ScoresPlayerProfilesAll(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<PlayerBasic4>`
- **Error**: `SdkException<NflV3ScoresPlayerProfilesAllError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3ScoresPlayerProfilesByFreeAgent
- **HTTP**: `GET /v3/nfl/scores/{format}/PlayersByFreeAgents` (Default (api))
- **Notes**: Player profiles include basic biographical information, position, college, and current team (if attached to a team.) This returns all free agents not currently attached to a team.
- **Signature**: `NflV3ScoresPlayerProfilesByFreeAgent(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<PlayerBasic4>`
- **Error**: `SdkException<NflV3ScoresPlayerProfilesByFreeAgentError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3ScoresPlayerProfilesByRookieDraftYear
- **HTTP**: `GET /v3/nfl/scores/{format}/PlayersByRookieDraftYear/{season}` (Default (api))
- **Notes**: Player profiles include basic biographical information, position, college, and current team (if attached to a team.) Specify a year parameter to receive all player profiles from that rookie draft year.
- **Signature**: `NflV3ScoresPlayerProfilesByRookieDraftYear(Format format, string season, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<PlayerBasic4>`
- **Error**: `SdkException<NflV3ScoresPlayerProfilesByRookieDraftYearError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3ScoresPlayerProfilesByTeam
- **HTTP**: `GET /v3/nfl/scores/{format}/PlayersBasic/{team}` (Default (api))
- **Notes**: Roster information for a given team. Player profiles include basic biographical information, position, college, and current team (if attached to a team.) Specify a team tricode parameter to receive all players currently on that team.
- **Signature**: `NflV3ScoresPlayerProfilesByTeam(Format format, string team, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<PlayerBasic4>`
- **Error**: `SdkException<NflV3ScoresPlayerProfilesByTeamError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3ScoresReferees
- **HTTP**: `GET /v3/nfl/scores/{format}/Referees` (Default (api))
- **Notes**: Returns referees with name, numbers, position (e.g. FJ for Field Judge), college, and years of experience.
- **Signature**: `NflV3ScoresReferees(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Referee1>`
- **Error**: `SdkException<NflV3ScoresRefereesError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3ScoresSchedules
- **HTTP**: `GET /v3/nfl/scores/{format}/Schedules/{season}` (Default (api))
- **Notes**: Home and away teams, date and time, season type and week etc. are included. Also includes gameday information. This includes full stadium information (capacity, lat/long, surface etc.), top-line betting information (spread, moneyline, total), weather conditions, and broadcast information.
- **Signature**: `NflV3ScoresSchedules(Format format, string season, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Schedule>`
- **Error**: `SdkException<NflV3ScoresSchedulesError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3ScoresSchedulesBasic
- **HTTP**: `GET /v3/nfl/scores/{format}/SchedulesBasic/{season}` (Default (api))
- **Notes**: A lightweight schedule endpoint without gameday information. Home and away teams, the date and time of the game, and season type, week etc. are included. Ideal for the most basic information required to build a schedule.
- **Signature**: `NflV3ScoresSchedulesBasic(Format format, string season, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<ScheduleBasic5>`
- **Error**: `SdkException<NflV3ScoresSchedulesBasicError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3ScoresScoresByWeekSimulation
- **HTTP**: `GET /v3/nfl/scores/{format}/SimulatedScores/{numberofplays}` (Default (api))
- **Notes**: Gets simulated live scores of NFL games, covering the Conference Championship games on January 21, 2018.
- **Signature**: `NflV3ScoresScoresByWeekSimulation(Format format, string numberofplays, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Score>`
- **Error**: `SdkException<NflV3ScoresScoresByWeekSimulationError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3ScoresSeasonCurrent
- **HTTP**: `GET /v3/nfl/scores/{format}/CurrentSeason` (Default (api))
- **Notes**: Year of the current NFL season. This value changes at the start of the new NFL league year. NFL seasons run across two calendar years; the league year is the one in which it starts, not ends (that is, a season starting in 2023 and ending in 2024 will have the league year of 2023.)
- **Signature**: `NflV3ScoresSeasonCurrent(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `int?`
- **Error**: `SdkException<NflV3ScoresSeasonCurrentError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3ScoresSeasonLastCompleted
- **HTTP**: `GET /v3/nfl/scores/{format}/LastCompletedSeason` (Default (api))
- **Notes**: Year of the most recently completed NFL season. This value changes immediately after the Super Bowl. NFL seasons run across two calendar years; the league year is the one in which it starts, not ends (that is, a season starting in 2023 and ending in 2024 will have the league year of 2023.)
- **Signature**: `NflV3ScoresSeasonLastCompleted(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `int?`
- **Error**: `SdkException<NflV3ScoresSeasonLastCompletedError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3ScoresSeasonUpcoming
- **HTTP**: `GET /v3/nfl/scores/{format}/UpcomingSeason` (Default (api))
- **Notes**: Year of the current NFL season, if we are in the mid-season. If we are in the off-season, then year of the next upcoming season. This value changes immediately after the Super Bowl. NFL seasons run across two calendar years; the league year is the one in which it starts, not ends (that is, a season starting in 2023 and ending in 2024 will have the league year of 2023.)
- **Signature**: `NflV3ScoresSeasonUpcoming(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `int?`
- **Error**: `SdkException<NflV3ScoresSeasonUpcomingError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3ScoresStadiums
- **HTTP**: `GET /v3/nfl/scores/{format}/Stadiums` (Default (api))
- **Notes**: Returns all stadiums in the NFL with capacity, surface, latitude/longitude, city and state (and, where applicable, country.)
- **Signature**: `NflV3ScoresStadiums(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Stadium5>`
- **Error**: `SdkException<NflV3ScoresStadiumsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3ScoresStandings
- **HTTP**: `GET /v3/nfl/scores/{format}/Standings/{season}` (Default (api))
- **Notes**: Includes regular season standings in division and conference, from which postseason seeding can be derived.
- **Signature**: `NflV3ScoresStandings(Format format, string season, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Standing2>`
- **Error**: `SdkException<NflV3ScoresStandingsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3ScoresTeamGameStatsLiveFinal
- **HTTP**: `GET /v3/nfl/scores/{format}/TeamGameStats/{season}/{week}` (Default (api))
- **Notes**: Returns the box score statistical record team-wide (aggregated from all players) for a given team's game in a given week, during the game and with final stats after it ends.
- **Signature**: `NflV3ScoresTeamGameStatsLiveFinal(Format format, string season, string week, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<TeamGame4>`
- **Error**: `SdkException<NflV3ScoresTeamGameStatsLiveFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3ScoresTeamProfilesAll
- **HTTP**: `GET /v3/nfl/scores/{format}/AllTeams` (Default (api))
- **Notes**: Full team information: team name and city, conference and division, colors, coaching and scheme info. Also contains basic fantasy info such as IDs as well as full stadium data. This endpoint returns all teams regardless of current active status.
- **Signature**: `NflV3ScoresTeamProfilesAll(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Team5>`
- **Error**: `SdkException<NflV3ScoresTeamProfilesAllError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3ScoresTeamProfilesByActive
- **HTTP**: `GET /v3/nfl/scores/{format}/Teams` (Default (api))
- **Notes**: Full team information: team name and city, conference and division, colors, coaching and scheme info. Also contains basic fantasy info such as IDs as well as full stadium data. This endpoint returns the teams currently active in the league.
- **Signature**: `NflV3ScoresTeamProfilesByActive(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Team5>`
- **Error**: `SdkException<NflV3ScoresTeamProfilesByActiveError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3ScoresTeamProfilesBySeason
- **HTTP**: `GET /v3/nfl/scores/{format}/Teams/{season}` (Default (api))
- **Notes**: Full team information: team name and city, conference and division, colors, coaching and scheme info. Also contains basic fantasy info such as IDs as well as full stadium data. This endpoint returns the active teams for a given season.
- **Signature**: `NflV3ScoresTeamProfilesBySeason(Format format, string season, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Team5>`
- **Error**: `SdkException<NflV3ScoresTeamProfilesBySeasonError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3ScoresTeamProfilesBasicAll
- **HTTP**: `GET /v3/nfl/scores/{format}/TeamsBasic` (Default (api))
- **Notes**: The most basic top-line team information, such as team name and city, conference and division, stadium ID, coach info, and team colors. Returns all teams regardless of current active status.
- **Signature**: `NflV3ScoresTeamProfilesBasicAll(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<TeamBasic2>`
- **Error**: `SdkException<NflV3ScoresTeamProfilesBasicAllError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3ScoresTeamSeasonStats
- **HTTP**: `GET /v3/nfl/scores/{format}/TeamSeasonStats/{season}` (Default (api))
- **Notes**: Returns all season-long stats (i.e. the season total, not each individual game record) for all teams (aggregated from all players) for a given season.
- **Signature**: `NflV3ScoresTeamSeasonStats(Format format, string season, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<TeamSeason4>`
- **Error**: `SdkException<NflV3ScoresTeamSeasonStatsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3ScoresTimeframes
- **HTTP**: `GET /v3/nfl/scores/{format}/Timeframes/{type}` (Default (api))
- **Notes**: Timeframes for the NFL refer to current weeks, season status etc.
- **Signature**: `NflV3ScoresTimeframes(Format format, TypeModel type, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Timeframe>`
- **Error**: `SdkException<NflV3ScoresTimeframesError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3ScoresTransactionsByDate
- **HTTP**: `GET /v3/nfl/scores/{format}/TransactionsByDate/{date}` (Default (api))
- **Notes**: Includes a list of transactions for a given date, with type (e.g. trade, injury listing, assignment) and a brief note.
- **Signature**: `NflV3ScoresTransactionsByDate(Format format, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Transaction>`
- **Error**: `SdkException<NflV3ScoresTransactionsByDateError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3ScoresWeekCurrent
- **HTTP**: `GET /v3/nfl/scores/{format}/CurrentWeek` (Default (api))
- **Notes**: Number of the current week of the NFL season. This value usually changes on Tuesday nights or Wednesday mornings at midnight ET but in the rare case of a rescheduled or overseas game with a non-standard gameday this could change.
- **Signature**: `NflV3ScoresWeekCurrent(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `int?`
- **Error**: `SdkException<NflV3ScoresWeekCurrentError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3ScoresWeekLastCompleted
- **HTTP**: `GET /v3/nfl/scores/{format}/LastCompletedWeek` (Default (api))
- **Notes**: Number of the last completed week of the NFL season. This value usually changes on Tuesday nights or Wednesday mornings at midnight ET but in the rare case of a rescheduled or overseas game with a non-standard gameday this could change.
- **Signature**: `NflV3ScoresWeekLastCompleted(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `int?`
- **Error**: `SdkException<NflV3ScoresWeekLastCompletedError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3ScoresWeekUpcoming
- **HTTP**: `GET /v3/nfl/scores/{format}/UpcomingWeek` (Default (api))
- **Notes**: Number of the next upcoming week of the NFL season. This value usually changes on Tuesday nights or Wednesday mornings at midnight ET but in the rare case of a rescheduled or overseas game with a non-standard gameday this could change.
- **Signature**: `NflV3ScoresWeekUpcoming(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `int?`
- **Error**: `SdkException<NflV3ScoresWeekUpcomingError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
