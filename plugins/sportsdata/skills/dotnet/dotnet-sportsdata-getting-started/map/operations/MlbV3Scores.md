# MlbV3Scores — operations

Accessor: `client.MlbV3Scores` · Source: `Api/MlbV3Scores.cs` · 26 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### MlbV3ScoresAreGamesInProgress
- **HTTP**: `GET /v3/mlb/scores/{format}/AreAnyGamesInProgress` (Default (api))
- **Notes**: Returns &lt;code&gt;true&lt;/code&gt; if there is at least one game being played at the time of the request or &lt;code&gt;false&lt;/code&gt; if there are none.
- **Signature**: `MlbV3ScoresAreGamesInProgress(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `bool`
- **Error**: `SdkException<MlbV3ScoresAreGamesInProgressError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### MlbV3ScoresGamesByDateFinal
- **HTTP**: `GET /v3/mlb/scores/{format}/GamesByDateFinal/{date}` (Default (api))
- **Notes**: Full scores and gameday info, including weather, referee, infotainment odds, as well as all of the innings scores and full-time score, delivered as the game ends.
- **Signature**: `MlbV3ScoresGamesByDateFinal(Format format, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Game6>`
- **Error**: `SdkException<MlbV3ScoresGamesByDateFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### MlbV3ScoresGamesByDateLiveFinal
- **HTTP**: `GET /v3/mlb/scores/{format}/GamesByDate/{date}` (Default (api))
- **Notes**: Full scores and gameday info delivered live and post-game. Live data includes innings, scores, pitch count etc. Gameday info includes referee, weather, TV channel etc.
- **Signature**: `MlbV3ScoresGamesByDateLiveFinal(Format format, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Game6>`
- **Error**: `SdkException<MlbV3ScoresGamesByDateLiveFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### MlbV3ScoresGamesBasicByDateFinal
- **HTTP**: `GET /v3/mlb/scores/{format}/ScoresBasicFinal/{date}` (Default (api))
- **Notes**: A slimmed-down score endpoint, giving just the innings scores and final score, for simple applications. Delivered after the game ends.
- **Signature**: `MlbV3ScoresGamesBasicByDateFinal(Format format, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<ScoreBasic2>`
- **Error**: `SdkException<MlbV3ScoresGamesBasicByDateFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### MlbV3ScoresGamesBasicByDateLiveFinal
- **HTTP**: `GET /v3/mlb/scores/{format}/ScoresBasic/{date}` (Default (api))
- **Notes**: This endpoint simply delivers the innings count and total score live; no down and distance and no gameday info such as weather.
- **Signature**: `MlbV3ScoresGamesBasicByDateLiveFinal(Format format, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<ScoreBasic2>`
- **Error**: `SdkException<MlbV3ScoresGamesBasicByDateLiveFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### MlbV3ScoresNews
- **HTTP**: `GET /v3/mlb/scores/{format}/News` (Default (api))
- **Notes**: Basic RotoBaller news feed, with limited stories available - usually 0-1 stories per day. Ideal for test purposes.
- **Signature**: `MlbV3ScoresNews(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<News1>`
- **Error**: `SdkException<MlbV3ScoresNewsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### MlbV3ScoresNewsByDate
- **HTTP**: `GET /v3/mlb/scores/{format}/NewsByDate/{date}` (Default (api))
- **Notes**: Basic RotoBaller news feed, with limited stories available - usually 0-1 stories per day. Ideal for test purposes.
- **Signature**: `MlbV3ScoresNewsByDate(Format format, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<News1>`
- **Error**: `SdkException<MlbV3ScoresNewsByDateError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### MlbV3ScoresPlayerDetailsByActive
- **HTTP**: `GET /v3/mlb/scores/{format}/Players` (Default (api))
- **Notes**: Full player bio and details, including injury notes, for all active players.
- **Signature**: `MlbV3ScoresPlayerDetailsByActive(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Player3>`
- **Error**: `SdkException<MlbV3ScoresPlayerDetailsByActiveError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### MlbV3ScoresPlayerDetailsByFreeAgents
- **HTTP**: `GET /v3/mlb/scores/{format}/FreeAgents` (Default (api))
- **Notes**: Full player bio and details, including injury notes, for all available free agents unattached to a team.
- **Signature**: `MlbV3ScoresPlayerDetailsByFreeAgents(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Player3>`
- **Error**: `SdkException<MlbV3ScoresPlayerDetailsByFreeAgentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### MlbV3ScoresPlayerProfilesByActive
- **HTTP**: `GET /v3/mlb/scores/{format}/PlayersByActive` (Default (api))
- **Notes**: A more stripped-down list of players on a given team, for simple applications, including all active players.
- **Signature**: `MlbV3ScoresPlayerProfilesByActive(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<PlayerBasic2>`
- **Error**: `SdkException<MlbV3ScoresPlayerProfilesByActiveError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### MlbV3ScoresPlayerProfilesByFreeAgents
- **HTTP**: `GET /v3/mlb/scores/{format}/PlayersByFreeAgents` (Default (api))
- **Notes**: A more stripped-down list of players on a given team, for simple applications, sorted by free agents.
- **Signature**: `MlbV3ScoresPlayerProfilesByFreeAgents(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<PlayerBasic2>`
- **Error**: `SdkException<MlbV3ScoresPlayerProfilesByFreeAgentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### MlbV3ScoresPlayerProfilesByTeam
- **HTTP**: `GET /v3/mlb/scores/{format}/PlayersBasic/{team}` (Default (api))
- **Notes**: A more stripped-down list of players on a given team, for simple applications.
- **Signature**: `MlbV3ScoresPlayerProfilesByTeam(Format format, string team, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<PlayerBasic2>`
- **Error**: `SdkException<MlbV3ScoresPlayerProfilesByTeamError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### MlbV3ScoresPlayersDetailsByTeam
- **HTTP**: `GET /v3/mlb/scores/{format}/Players/{team}` (Default (api))
- **Notes**: Full player bio and details, including injury notes, for all available players by team.
- **Signature**: `MlbV3ScoresPlayersDetailsByTeam(Format format, string team, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Player3>`
- **Error**: `SdkException<MlbV3ScoresPlayersDetailsByTeamError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### MlbV3ScoresSchedules
- **HTTP**: `GET /v3/mlb/scores/{format}/Games/{season}` (Default (api))
- **Notes**: Home and away teams, date and time, season type and week etc. are included. Also includes gameday information. This includes full stadium information (capacity, lat/long, surface etc.), top-line betting information (spread, moneyline, total), weather conditions, and broadcast information.
- **Signature**: `MlbV3ScoresSchedules(Format format, string season, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Game6>`
- **Error**: `SdkException<MlbV3ScoresSchedulesError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### MlbV3ScoresSchedulesBasic
- **HTTP**: `GET /v3/mlb/scores/{format}/SchedulesBasic/{season}` (Default (api))
- **Notes**: A lightweight schedule endpoint without gameday information. Home and away teams, the date and time of the game, and season type, week etc. are included. Ideal for the most basic information required to build a schedule.
- **Signature**: `MlbV3ScoresSchedulesBasic(Format format, string season, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<ScheduleBasic3>`
- **Error**: `SdkException<MlbV3ScoresSchedulesBasicError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### MlbV3ScoresSeasonCurrent
- **HTTP**: `GET /v3/mlb/scores/{format}/CurrentSeason` (Default (api))
- **Notes**: Year of the current season. This value changes at the start of the new league year. For leagues that run over two years, this is the year the season starts, not ends.
- **Signature**: `MlbV3ScoresSeasonCurrent(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Season4`
- **Error**: `SdkException<MlbV3ScoresSeasonCurrentError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### MlbV3ScoresStadiums
- **HTTP**: `GET /v3/mlb/scores/{format}/Stadiums` (Default (api))
- **Notes**: Returns all stadiums in the league with capacity, surface, latitude/longitude, city and state (and where applicable country.)
- **Signature**: `MlbV3ScoresStadiums(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Stadium4>`
- **Error**: `SdkException<MlbV3ScoresStadiumsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### MlbV3ScoresStandings
- **HTTP**: `GET /v3/mlb/scores/{format}/Standings/{season}` (Default (api))
- **Notes**: Includes regular season standings in division and league, from which postseason seeding can be derived.
- **Signature**: `MlbV3ScoresStandings(Format format, string season, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Standing>`
- **Error**: `SdkException<MlbV3ScoresStandingsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### MlbV3ScoresTeamGameLogsBySeason
- **HTTP**: `GET /v3/mlb/scores/{format}/TeamGameStatsBySeason/{season}/{teamid}/{numberofgames}` (Default (api))
- **Notes**: Game by game log of total team statistics.
- **Signature**: `MlbV3ScoresTeamGameLogsBySeason(Format format, string season, string teamid, string numberofgames, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<TeamGame2>`
- **Error**: `SdkException<MlbV3ScoresTeamGameLogsBySeasonError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### MlbV3ScoresTeamGameStatsByDateFinal
- **HTTP**: `GET /v3/mlb/scores/{format}/TeamGameStatsByDateFinal/{date}` (Default (api))
- **Notes**: Returns the box score statistical record team-wide (aggregated from all players) for all games on a given date after the game has concluded.
- **Signature**: `MlbV3ScoresTeamGameStatsByDateFinal(Format format, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<TeamGame2>`
- **Error**: `SdkException<MlbV3ScoresTeamGameStatsByDateFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### MlbV3ScoresTeamGameStatsByDateLiveFinal
- **HTTP**: `GET /v3/mlb/scores/{format}/TeamGameStatsByDate/{date}` (Default (api))
- **Notes**: Returns the box score statistical record team-wide (aggregated from all players) for a given team's game in a given week, both live and post-game.
- **Signature**: `MlbV3ScoresTeamGameStatsByDateLiveFinal(Format format, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<TeamGame2>`
- **Error**: `SdkException<MlbV3ScoresTeamGameStatsByDateLiveFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### MlbV3ScoresTeamProfilesAll
- **HTTP**: `GET /v3/mlb/scores/{format}/AllTeams` (Default (api))
- **Notes**: Full team information: team name and city, league and division, and colors. Also contains basic fantasy info such as IDs as well as full stadium data. This endpoint returns all teams regardless of current active status.
- **Signature**: `MlbV3ScoresTeamProfilesAll(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Team3>`
- **Error**: `SdkException<MlbV3ScoresTeamProfilesAllError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### MlbV3ScoresTeamProfilesByActive
- **HTTP**: `GET /v3/mlb/scores/{format}/teams` (Default (api))
- **Notes**: Full team information: team name and city, league and division, and colors. Also contains basic fantasy info such as IDs as well as full stadium data. This endpoint returns the teams currently active in the league.
- **Signature**: `MlbV3ScoresTeamProfilesByActive(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Team3>`
- **Error**: `SdkException<MlbV3ScoresTeamProfilesByActiveError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### MlbV3ScoresTeamProfilesBySeason
- **HTTP**: `GET /v3/mlb/scores/{format}/teams/{season}` (Default (api))
- **Notes**: List of teams playing in a specified season, with their profile info.
- **Signature**: `MlbV3ScoresTeamProfilesBySeason(Format format, string season, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Team3>`
- **Error**: `SdkException<MlbV3ScoresTeamProfilesBySeasonError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### MlbV3ScoresTeamSeasonStats
- **HTTP**: `GET /v3/mlb/scores/{format}/TeamSeasonStats/{season}` (Default (api))
- **Notes**: Returns all season-long stats (i.e. the season total, not each individual game record) for all teams (aggregated from all players) for a given season.
- **Signature**: `MlbV3ScoresTeamSeasonStats(Format format, string season, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<TeamSeason2>`
- **Error**: `SdkException<MlbV3ScoresTeamSeasonStatsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### MlbV3ScoresTransactions
- **HTTP**: `GET /v3/mlb/scores/{format}/TransactionsByDate/{date}` (Default (api))
- **Notes**: A list of transactions, such as assignments, placement on the injury list, player trades etc., delivered by date.
- **Signature**: `MlbV3ScoresTransactions(Format format, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Transaction>`
- **Error**: `SdkException<MlbV3ScoresTransactionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
