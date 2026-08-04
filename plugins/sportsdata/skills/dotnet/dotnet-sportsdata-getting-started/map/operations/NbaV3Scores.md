# NbaV3Scores — operations

Accessor: `client.NbaV3Scores` · Source: `Api/NbaV3Scores.cs` · 27 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### NbaV3ScoresAreGamesInProgress
- **HTTP**: `GET /v3/nba/scores/{format}/AreAnyGamesInProgress` (Default (api))
- **Notes**: Returns &lt;code&gt;true&lt;/code&gt; if there is at least one game being played at the time of the request or &lt;code&gt;false&lt;/code&gt; if there are none.
- **Signature**: `NbaV3ScoresAreGamesInProgress(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `bool`
- **Error**: `SdkException<NbaV3ScoresAreGamesInProgressError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NbaV3ScoresDepthCharts
- **HTTP**: `GET /v3/nba/scores/{format}/DepthCharts` (Default (api))
- **Notes**: Returns the full list of NBA Depth Charts as of the time of the call.
- **Signature**: `NbaV3ScoresDepthCharts(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<TeamDepthChart>`
- **Error**: `SdkException<NbaV3ScoresDepthChartsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NbaV3ScoresGamesByDateFinal
- **HTTP**: `GET /v3/nba/scores/{format}/GamesByDateFinal/{date}` (Default (api))
- **Notes**: Full scores and gameday info, including referee, infotainment odds, as well as all of the quarter scores and full-time score, delivered as the game ends.
- **Signature**: `NbaV3ScoresGamesByDateFinal(Format format, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Game7>`
- **Error**: `SdkException<NbaV3ScoresGamesByDateFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NbaV3ScoresGamesByDateLiveFinal
- **HTTP**: `GET /v3/nba/scores/{format}/GamesByDate/{date}` (Default (api))
- **Notes**: Full scores and gameday info delivered live and post-game. Live data includes half and score info. Gameday info includes TV channel etc
- **Signature**: `NbaV3ScoresGamesByDateLiveFinal(Format format, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Game7>`
- **Error**: `SdkException<NbaV3ScoresGamesByDateLiveFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NbaV3ScoresGamesBasicByDateFinal
- **HTTP**: `GET /v3/nba/scores/{format}/ScoresBasicFinal/{date}` (Default (api))
- **Notes**: A slimmed-down score endpoint, giving just the quarter scores and final score, for simple applications.
- **Signature**: `NbaV3ScoresGamesBasicByDateFinal(Format format, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<ScoreBasic3>`
- **Error**: `SdkException<NbaV3ScoresGamesBasicByDateFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NbaV3ScoresGamesBasicByDateLiveFinal
- **HTTP**: `GET /v3/nba/scores/{format}/ScoresBasic/{date}` (Default (api))
- **Notes**: This endpoint simply delivers the quarter, time, quarter scores, and total score live; no gameday info is provided.
- **Signature**: `NbaV3ScoresGamesBasicByDateLiveFinal(Format format, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<ScoreBasic3>`
- **Error**: `SdkException<NbaV3ScoresGamesBasicByDateLiveFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NbaV3ScoresNews
- **HTTP**: `GET /v3/nba/scores/{format}/News` (Default (api))
- **Notes**: Basic RotoBaller news feed, with limited stories available - usually 0-1 stories per day. Ideal for test purposes.
- **Signature**: `NbaV3ScoresNews(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<News1>`
- **Error**: `SdkException<NbaV3ScoresNewsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NbaV3ScoresNewsByDate
- **HTTP**: `GET /v3/nba/scores/{format}/NewsByDate/{date}` (Default (api))
- **Notes**: Basic RotoBaller news feed, with limited stories available - usually 0-1 stories per day. Ideal for test purposes.
- **Signature**: `NbaV3ScoresNewsByDate(Format format, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<News1>`
- **Error**: `SdkException<NbaV3ScoresNewsByDateError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NbaV3ScoresPlayerDetailsByActive
- **HTTP**: `GET /v3/nba/scores/{format}/Players` (Default (api))
- **Notes**: Full player bio and details, including injury notes, for all active players.
- **Signature**: `NbaV3ScoresPlayerDetailsByActive(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Player4>`
- **Error**: `SdkException<NbaV3ScoresPlayerDetailsByActiveError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NbaV3ScoresPlayerDetailsByFreeAgent
- **HTTP**: `GET /v3/nba/scores/{format}/FreeAgents` (Default (api))
- **Notes**: Full player bio and details, including injury notes, for all available free agents unattached to a team.
- **Signature**: `NbaV3ScoresPlayerDetailsByFreeAgent(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Player4>`
- **Error**: `SdkException<NbaV3ScoresPlayerDetailsByFreeAgentError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NbaV3ScoresPlayerDetailsByTeam
- **HTTP**: `GET /v3/nba/scores/{format}/Players/{team}` (Default (api))
- **Notes**: Full player bio and details, including injury notes, for all available players by team.
- **Signature**: `NbaV3ScoresPlayerDetailsByTeam(Format format, string team, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Player4>`
- **Error**: `SdkException<NbaV3ScoresPlayerDetailsByTeamError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NbaV3ScoresPlayerProfilesByActive
- **HTTP**: `GET /v3/nba/scores/{format}/PlayersActiveBasic` (Default (api))
- **Notes**: Player profiles include basic biographical information, position, college, and current team (if attached to a team.) This returns all players currently active.
- **Signature**: `NbaV3ScoresPlayerProfilesByActive(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<PlayerBasic3>`
- **Error**: `SdkException<NbaV3ScoresPlayerProfilesByActiveError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NbaV3ScoresPlayerProfilesByFreeAgent
- **HTTP**: `GET /v3/nba/scores/{format}/PlayersByFreeAgents` (Default (api))
- **Notes**: Player profiles include basic biographical information, position, college, and current team (if attached to a team.) This returns all free agents not currently attached to a team.
- **Signature**: `NbaV3ScoresPlayerProfilesByFreeAgent(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<PlayerBasic3>`
- **Error**: `SdkException<NbaV3ScoresPlayerProfilesByFreeAgentError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NbaV3ScoresPlayersProfilesByTeam
- **HTTP**: `GET /v3/nba/scores/{format}/PlayersBasic/{team}` (Default (api))
- **Notes**: Roster information for a given team. Player profiles include basic biographical information, position, college, and current team (if attached to a team.) Specify a team tricode parameter to receive all players currently on that team.
- **Signature**: `NbaV3ScoresPlayersProfilesByTeam(Format format, string team, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<PlayerBasic3>`
- **Error**: `SdkException<NbaV3ScoresPlayersProfilesByTeamError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NbaV3ScoresReferees
- **HTTP**: `GET /v3/nba/scores/{format}/Referees` (Default (api))
- **Notes**: Returns the full list of NBA Referees.
- **Signature**: `NbaV3ScoresReferees(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Referee>`
- **Error**: `SdkException<NbaV3ScoresRefereesError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NbaV3ScoresSchedules
- **HTTP**: `GET /v3/nba/scores/{format}/Games/{season}` (Default (api))
- **Notes**: Home and away teams, date and time, season type and week etc. are included. Also includes gameday information. This includes full stadium information (capacity, lat/long, surface etc.), top-line betting information (spread, moneyline, total), weather conditions, and broadcast information.
- **Signature**: `NbaV3ScoresSchedules(Format format, string season, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Game7>`
- **Error**: `SdkException<NbaV3ScoresSchedulesError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NbaV3ScoresSchedulesBasic
- **HTTP**: `GET /v3/nba/scores/{format}/SchedulesBasic/{season}` (Default (api))
- **Notes**: A lightweight schedule endpoint without gameday information. Home and away teams, the date and time of the game, and season type, week etc. are included. Ideal for the most basic information required to build a schedule.
- **Signature**: `NbaV3ScoresSchedulesBasic(Format format, string season, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<ScheduleBasic4>`
- **Error**: `SdkException<NbaV3ScoresSchedulesBasicError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NbaV3ScoresSeasonCurrent
- **HTTP**: `GET /v3/nba/scores/{format}/CurrentSeason` (Default (api))
- **Notes**: Year of the current season. This value changes at the start of the new league year. For leagues that run over two years, this is the year the season starts, not ends.
- **Signature**: `NbaV3ScoresSeasonCurrent(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Season5`
- **Error**: `SdkException<NbaV3ScoresSeasonCurrentError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NbaV3ScoresStadiums
- **HTTP**: `GET /v3/nba/scores/{format}/Stadiums` (Default (api))
- **Notes**: Returns all stadiums in the league with capacity, surface, latitude/longitude, city and state (and where applicable country.)
- **Signature**: `NbaV3ScoresStadiums(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Stadium>`
- **Error**: `SdkException<NbaV3ScoresStadiumsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NbaV3ScoresStandings
- **HTTP**: `GET /v3/nba/scores/{format}/Standings/{season}` (Default (api))
- **Notes**: Includes regular season standings in division and conference, from which postseason seeding can be derived.
- **Signature**: `NbaV3ScoresStandings(Format format, string season, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Standing1>`
- **Error**: `SdkException<NbaV3ScoresStandingsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NbaV3ScoresTeamGameLogsBySeason
- **HTTP**: `GET /v3/nba/scores/{format}/TeamGameStatsBySeason/{season}/{teamid}/{numberofgames}` (Default (api))
- **Notes**: Game by game log of total team statistics.
- **Signature**: `NbaV3ScoresTeamGameLogsBySeason(Format format, string season, string teamid, string numberofgames, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<TeamGame3>`
- **Error**: `SdkException<NbaV3ScoresTeamGameLogsBySeasonError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NbaV3ScoresTeamGameStatsByDateLiveFinal
- **HTTP**: `GET /v3/nba/scores/{format}/TeamGameStatsByDate/{date}` (Default (api))
- **Notes**: Returns the box score statistical record team-wide (aggregated from all players) for all games on a given date, both live and post-game.
- **Signature**: `NbaV3ScoresTeamGameStatsByDateLiveFinal(Format format, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<TeamGame3>`
- **Error**: `SdkException<NbaV3ScoresTeamGameStatsByDateLiveFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NbaV3ScoresTeamProfilesAll
- **HTTP**: `GET /v3/nba/scores/{format}/AllTeams` (Default (api))
- **Notes**: Full team information: team name and city, conference and division, and colors. Also contains basic fantasy info such as IDs as well as full stadium data. This endpoint returns all teams regardless of current active status.
- **Signature**: `NbaV3ScoresTeamProfilesAll(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Team4>`
- **Error**: `SdkException<NbaV3ScoresTeamProfilesAllError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NbaV3ScoresTeamProfilesByActive
- **HTTP**: `GET /v3/nba/scores/{format}/teams` (Default (api))
- **Notes**: Full team information: team name and city, conference and division, and colors. Also contains basic fantasy info such as IDs as well as full stadium data. This endpoint returns the teams currently active in the league.
- **Signature**: `NbaV3ScoresTeamProfilesByActive(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Team4>`
- **Error**: `SdkException<NbaV3ScoresTeamProfilesByActiveError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NbaV3ScoresTeamProfilesBySeason
- **HTTP**: `GET /v3/nba/scores/{format}/teams/{season}` (Default (api))
- **Notes**: Full team information: team name and city, conference and division, and colors. Also contains basic fantasy info such as IDs as well as full stadium data. This endpoint returns the active teams for a given season.
- **Signature**: `NbaV3ScoresTeamProfilesBySeason(Format format, string season, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Team4>`
- **Error**: `SdkException<NbaV3ScoresTeamProfilesBySeasonError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NbaV3ScoresTeamSeasonStats
- **HTTP**: `GET /v3/nba/scores/{format}/TeamSeasonStats/{season}` (Default (api))
- **Notes**: Returns all season-long stats (i.e. the season total, not each individual game record) for all teams (aggregated from all players) for a given season.
- **Signature**: `NbaV3ScoresTeamSeasonStats(Format format, string season, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<TeamSeason3>`
- **Error**: `SdkException<NbaV3ScoresTeamSeasonStatsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NbaV3ScoresTransactions
- **HTTP**: `GET /v3/nba/scores/{format}/TransactionsByDate/{date}` (Default (api))
- **Notes**: A list of transactions, such as player trades, injuries, assignments etc., delivered by date.
- **Signature**: `NbaV3ScoresTransactions(Format format, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Transaction>`
- **Error**: `SdkException<NbaV3ScoresTransactionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
