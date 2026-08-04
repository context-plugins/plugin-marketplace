# NhlV3Scores — operations

Accessor: `client.NhlV3Scores` · Source: `Api/NhlV3Scores.cs` · 27 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### NhlV3ScoresAreGamesInProgress
- **HTTP**: `GET /v3/nhl/scores/{format}/AreAnyGamesInProgress` (Default (api))
- **Notes**: Returns &lt;code&gt;true&lt;/code&gt; if there is at least one game being played at the time of the request or &lt;code&gt;false&lt;/code&gt; if there are none.
- **Signature**: `NhlV3ScoresAreGamesInProgress(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `bool`
- **Error**: `SdkException<NhlV3ScoresAreGamesInProgressError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NhlV3ScoresDepthChartsGoalies
- **HTTP**: `GET /v3/nhl/scores/{format}/GoalieDepthCharts` (Default (api))
- **Notes**: Returns the full list of NHL Goalies by Team organized into Depth Charts.
- **Signature**: `NhlV3ScoresDepthChartsGoalies(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<TeamGoalieDepthChart>`
- **Error**: `SdkException<NhlV3ScoresDepthChartsGoaliesError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NhlV3ScoresGamesByDateFinal
- **HTTP**: `GET /v3/nhl/scores/{format}/GamesByDateFinal/{date}` (Default (api))
- **Notes**: Full scores and gameday info, including weather, referee, infotainment odds, as well as all of the period scores and full-time score, delivered as the game ends.
- **Signature**: `NhlV3ScoresGamesByDateFinal(Format format, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Game8>`
- **Error**: `SdkException<NhlV3ScoresGamesByDateFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NhlV3ScoresGamesByDateLiveFinal
- **HTTP**: `GET /v3/nhl/scores/{format}/GamesByDate/{date}` (Default (api))
- **Notes**: Full scores and gameday info delivered live and post-game. Live data includes half and score info. Gameday info includes TV channel etc
- **Signature**: `NhlV3ScoresGamesByDateLiveFinal(Format format, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Game8>`
- **Error**: `SdkException<NhlV3ScoresGamesByDateLiveFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NhlV3ScoresGamesBasicByDateFinal
- **HTTP**: `GET /v3/nhl/scores/{format}/ScoresBasicFinal/{date}` (Default (api))
- **Notes**: A slimmed-down score endpoint, giving just the period scores and final score, for simple applications.
- **Signature**: `NhlV3ScoresGamesBasicByDateFinal(Format format, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<ScoreBasic5>`
- **Error**: `SdkException<NhlV3ScoresGamesBasicByDateFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NhlV3ScoresGamesBasicByDateLiveFinal
- **HTTP**: `GET /v3/nhl/scores/{format}/ScoresBasic/{date}` (Default (api))
- **Notes**: This endpoint simply delivers period, clock, period score and total score live; no gameday info is included.
- **Signature**: `NhlV3ScoresGamesBasicByDateLiveFinal(Format format, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<ScoreBasic5>`
- **Error**: `SdkException<NhlV3ScoresGamesBasicByDateLiveFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NhlV3ScoresNews
- **HTTP**: `GET /v3/nhl/scores/{format}/News` (Default (api))
- **Notes**: Basic RotoBaller news feed, with limited stories available.
- **Signature**: `NhlV3ScoresNews(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<News2>`
- **Error**: `SdkException<NhlV3ScoresNewsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NhlV3ScoresNewsByDate
- **HTTP**: `GET /v3/nhl/scores/{format}/NewsByDate/{date}` (Default (api))
- **Notes**: Basic RotoBaller news feed, with limited stories available, called by date.
- **Signature**: `NhlV3ScoresNewsByDate(Format format, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<News2>`
- **Error**: `SdkException<NhlV3ScoresNewsByDateError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NhlV3ScoresPlayerDetailsByActive
- **HTTP**: `GET /v3/nhl/scores/{format}/Players` (Default (api))
- **Notes**: Full player bio and details, including injury notes, for all active players.
- **Signature**: `NhlV3ScoresPlayerDetailsByActive(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Player6>`
- **Error**: `SdkException<NhlV3ScoresPlayerDetailsByActiveError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NhlV3ScoresPlayerDetailsByActive2
- **HTTP**: `GET /v3/nhl/scores/{format}/PlayersByActive` (Default (api))
- **Notes**: Full player bio and details, including injury notes, for all active players.
- **Signature**: `NhlV3ScoresPlayerDetailsByActive2(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<PlayerBasic5>`
- **Error**: `SdkException<NhlV3ScoresPlayerDetailsByActive2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NhlV3ScoresPlayerDetailsByFreeAgents
- **HTTP**: `GET /v3/nhl/scores/{format}/FreeAgents` (Default (api))
- **Notes**: Full player bio and details, including injury notes, for all available free agents unattached to a team.
- **Signature**: `NhlV3ScoresPlayerDetailsByFreeAgents(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Player6>`
- **Error**: `SdkException<NhlV3ScoresPlayerDetailsByFreeAgentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NhlV3ScoresPlayerDetailsByFreeAgents2
- **HTTP**: `GET /v3/nhl/scores/{format}/PlayersByFreeAgents` (Default (api))
- **Notes**: Full player bio and details, including injury notes, for all available free agents unattached to a team.
- **Signature**: `NhlV3ScoresPlayerDetailsByFreeAgents2(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<PlayerBasic5>`
- **Error**: `SdkException<NhlV3ScoresPlayerDetailsByFreeAgents2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NhlV3ScoresPlayersDetailsByTeam
- **HTTP**: `GET /v3/nhl/scores/{format}/Players/{team}` (Default (api))
- **Notes**: Full player bio and details, including injury notes, for all players on a given team.
- **Signature**: `NhlV3ScoresPlayersDetailsByTeam(Format format, string team, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Player6>`
- **Error**: `SdkException<NhlV3ScoresPlayersDetailsByTeamError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NhlV3ScoresPlayersProfilesByTeam
- **HTTP**: `GET /v3/nhl/scores/{format}/PlayersBasic/{team}` (Default (api))
- **Notes**: Roster information for a given team. Player profiles include basic biographical information, position, college, and current team (if attached to a team.) Specify a team tricode parameter to receive all players currently on that team.
- **Signature**: `NhlV3ScoresPlayersProfilesByTeam(Format format, string team, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<PlayerBasic5>`
- **Error**: `SdkException<NhlV3ScoresPlayersProfilesByTeamError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NhlV3ScoresReferees
- **HTTP**: `GET /v3/nhl/scores/{format}/Referees` (Default (api))
- **Notes**: Returns the full list of NHL Referees.
- **Signature**: `NhlV3ScoresReferees(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Referee>`
- **Error**: `SdkException<NhlV3ScoresRefereesError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NhlV3ScoresSchedules
- **HTTP**: `GET /v3/nhl/scores/{format}/Games/{season}` (Default (api))
- **Notes**: Home and away teams, date and time, season type and week etc. are included. Also includes gameday information. This includes full stadium information (capacity, lat/long, surface etc.), top-line betting information (spread, moneyline, total), weather conditions, and broadcast information.
- **Signature**: `NhlV3ScoresSchedules(Format format, string season, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Game8>`
- **Error**: `SdkException<NhlV3ScoresSchedulesError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NhlV3ScoresSchedulesBasic
- **HTTP**: `GET /v3/nhl/scores/{format}/SchedulesBasic/{season}` (Default (api))
- **Notes**: A lightweight schedule endpoint without gameday information. Home and away teams, the date and time of the game, and season type, week etc. are included. Ideal for the most basic information required to build a schedule.
- **Signature**: `NhlV3ScoresSchedulesBasic(Format format, string season, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<ScheduleBasic6>`
- **Error**: `SdkException<NhlV3ScoresSchedulesBasicError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NhlV3ScoresSeasonCurrent
- **HTTP**: `GET /v3/nhl/scores/{format}/CurrentSeason` (Default (api))
- **Notes**: Year of the current season. This value changes at the start of the new league year. For leagues that run over two years, this is the year the season starts, not ends.
- **Signature**: `NhlV3ScoresSeasonCurrent(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Season5`
- **Error**: `SdkException<NhlV3ScoresSeasonCurrentError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NhlV3ScoresStadiums
- **HTTP**: `GET /v3/nhl/scores/{format}/Stadiums` (Default (api))
- **Notes**: Returns all stadiums in the league with capacity, surface, latitude/longitude, city and state (and where applicable country.)
- **Signature**: `NhlV3ScoresStadiums(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Stadium>`
- **Error**: `SdkException<NhlV3ScoresStadiumsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NhlV3ScoresStandings
- **HTTP**: `GET /v3/nhl/scores/{format}/Standings/{season}` (Default (api))
- **Notes**: Includes regular season standings in division and conference, from which postseason seeding can be derived.
- **Signature**: `NhlV3ScoresStandings(Format format, string season, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Standing3>`
- **Error**: `SdkException<NhlV3ScoresStandingsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NhlV3ScoresTeamGameLogsBySeason
- **HTTP**: `GET /v3/nhl/scores/{format}/TeamGameStatsBySeason/{season}/{teamid}/{numberofgames}` (Default (api))
- **Notes**: Game-by-game log of total team statistics for a given season, split up by game (not aggregated into season totals.)
- **Signature**: `NhlV3ScoresTeamGameLogsBySeason(Format format, string season, string teamid, string numberofgames, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<TeamGame5>`
- **Error**: `SdkException<NhlV3ScoresTeamGameLogsBySeasonError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NhlV3ScoresTeamGameStatsByDateLiveFinal
- **HTTP**: `GET /v3/nhl/scores/{format}/TeamGameStatsByDate/{date}` (Default (api))
- **Notes**: Returns the box score statistical record team-wide (aggregated from all players) for all games on a given date, both live and post-game.
- **Signature**: `NhlV3ScoresTeamGameStatsByDateLiveFinal(Format format, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<TeamGame5>`
- **Error**: `SdkException<NhlV3ScoresTeamGameStatsByDateLiveFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NhlV3ScoresTeamProfilesAll
- **HTTP**: `GET /v3/nhl/scores/{format}/AllTeams` (Default (api))
- **Notes**: Full team information: team name and city, conference and division, and colors. Also contains basic fantasy info such as IDs as well as full stadium data. This endpoint returns all teams regardless of current active status.
- **Signature**: `NhlV3ScoresTeamProfilesAll(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Team6>`
- **Error**: `SdkException<NhlV3ScoresTeamProfilesAllError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NhlV3ScoresTeamProfilesByActive
- **HTTP**: `GET /v3/nhl/scores/{format}/teams` (Default (api))
- **Notes**: Full team information: team name and city, conference and division, and colors. Also contains basic fantasy info such as IDs as well as full stadium data. This endpoint returns the teams currently active in the league.
- **Signature**: `NhlV3ScoresTeamProfilesByActive(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Team6>`
- **Error**: `SdkException<NhlV3ScoresTeamProfilesByActiveError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NhlV3ScoresTeamProfilesBySeason
- **HTTP**: `GET /v3/nhl/scores/{format}/teams/{season}` (Default (api))
- **Notes**: Full team information: team name and city, conference and division, and colors. Also contains basic fantasy info such as IDs as well as full stadium data. This endpoint returns the active teams for a given season.
- **Signature**: `NhlV3ScoresTeamProfilesBySeason(Format format, string season, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Team6>`
- **Error**: `SdkException<NhlV3ScoresTeamProfilesBySeasonError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NhlV3ScoresTeamSeasonStats
- **HTTP**: `GET /v3/nhl/scores/{format}/TeamSeasonStats/{season}` (Default (api))
- **Notes**: Returns all season-long stats (i.e. the season total, not each individual game record) for all teams (aggregated from all players) for a given season.
- **Signature**: `NhlV3ScoresTeamSeasonStats(Format format, string season, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<TeamSeason5>`
- **Error**: `SdkException<NhlV3ScoresTeamSeasonStatsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NhlV3ScoresTransactions
- **HTTP**: `GET /v3/nhl/scores/{format}/TransactionsByDate/{date}` (Default (api))
- **Notes**: Transactions, such as injuries and assignments and trades, are organized here by date.
- **Signature**: `NhlV3ScoresTransactions(Format format, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Transaction>`
- **Error**: `SdkException<NhlV3ScoresTransactionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
