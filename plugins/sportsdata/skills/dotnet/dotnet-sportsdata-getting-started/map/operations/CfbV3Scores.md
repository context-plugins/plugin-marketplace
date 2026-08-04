# CfbV3Scores — operations

Accessor: `client.CfbV3Scores` · Source: `Api/CfbV3Scores.cs` · 26 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CfbV3ScoresAreGamesInProgress
- **HTTP**: `GET /v3/cfb/scores/{format}/AreAnyGamesInProgress` (Default (api))
- **Notes**: Returns &lt;code&gt;true&lt;/code&gt; if there is at least one game being played at the time of the request or &lt;code&gt;false&lt;/code&gt; if there are none.
- **Signature**: `CfbV3ScoresAreGamesInProgress(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `bool`
- **Error**: `SdkException<CfbV3ScoresAreGamesInProgressError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CfbV3ScoresConferenceHierarchy
- **HTTP**: `GET /v3/cfb/scores/{format}/LeagueHierarchy` (Default (api))
- **Notes**: A list of all conferences and their associated teams. Standings can be found here for each conference.
- **Signature**: `CfbV3ScoresConferenceHierarchy(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Conference1>`
- **Error**: `SdkException<CfbV3ScoresConferenceHierarchyError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CfbV3ScoresGamesByDateLiveFinal
- **HTTP**: `GET /v3/cfb/scores/{format}/GamesByDate/{date}` (Default (api))
- **Notes**: Full scores and gameday info delivered live and post-game for a given date. Live data includes down and distance, as well as game clock. Gameday info includes referee, weather, TV channel etc.
- **Signature**: `CfbV3ScoresGamesByDateLiveFinal(Format format, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Game4>`
- **Error**: `SdkException<CfbV3ScoresGamesByDateLiveFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CfbV3ScoresGamesByWeekFinal
- **HTTP**: `GET /v3/cfb/scores/{format}/GamesByWeekFinal/{season}/{week}` (Default (api))
- **Notes**: Full scores and gameday info, including weather, referee, infotainment odds, as well as all of the quarter scores and full-time score, delivered as the game ends.
- **Signature**: `CfbV3ScoresGamesByWeekFinal(Format format, string season, string week, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Game4>`
- **Error**: `SdkException<CfbV3ScoresGamesByWeekFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CfbV3ScoresGamesByWeekLiveFinal
- **HTTP**: `GET /v3/cfb/scores/{format}/GamesByWeek/{season}/{week}` (Default (api))
- **Notes**: Full scores and gameday info delivered live and post-game for a given gameweek. Live data includes down and distance, as well as game clock. Gameday info includes referee, weather, TV channel etc.
- **Signature**: `CfbV3ScoresGamesByWeekLiveFinal(Format format, string season, string week, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Game4>`
- **Error**: `SdkException<CfbV3ScoresGamesByWeekLiveFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CfbV3ScoresGamesBasicByDateLiveFinal
- **HTTP**: `GET /v3/cfb/scores/{format}/ScoresBasic/{date}` (Default (api))
- **Notes**: This endpoint simply delivers quarter, clock, and total score live; no down and distance and no gameday info such as weather.
- **Signature**: `CfbV3ScoresGamesBasicByDateLiveFinal(Format format, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<ScoreBasic1>`
- **Error**: `SdkException<CfbV3ScoresGamesBasicByDateLiveFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CfbV3ScoresGamesBasicByWeekFinal
- **HTTP**: `GET /v3/cfb/scores/{format}/ScoresBasicFinal/{season}/{week}` (Default (api))
- **Notes**: A slimmed-down score endpoint, giving just the quarter scores and final score, for simple applications, delivered as the game ends, called by week.
- **Signature**: `CfbV3ScoresGamesBasicByWeekFinal(Format format, string season, string week, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<ScoreBasic1>`
- **Error**: `SdkException<CfbV3ScoresGamesBasicByWeekFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CfbV3ScoresGamesBasicByDateFinal
- **HTTP**: `GET /v3/cfb/scores/{format}/ScoresBasicFinal/{date}` (Default (api))
- **Notes**: A slimmed-down score endpoint, giving just the quarter scores and final score, for simple applications, delivered as the game ends, called by date.
- **Signature**: `CfbV3ScoresGamesBasicByDateFinal(Format format, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<ScoreBasic1>`
- **Error**: `SdkException<CfbV3ScoresGamesBasicByDateFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CfbV3ScoresGamesByDateFinal
- **HTTP**: `GET /v3/cfb/scores/{format}/GamesByDateFinal/{date}` (Default (api))
- **Notes**: Full scores and gameday info, including weather, referee, infotainment odds, as well as all of the quarter scores and full-time score as the game ends.
- **Signature**: `CfbV3ScoresGamesByDateFinal(Format format, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Game4>`
- **Error**: `SdkException<CfbV3ScoresGamesByDateFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CfbV3ScoresPlayerDetailsByActive
- **HTTP**: `GET /v3/cfb/scores/{format}/Players` (Default (api))
- **Notes**: Full player bio and details, including injury notes, for all active players.
- **Signature**: `CfbV3ScoresPlayerDetailsByActive(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Player1>`
- **Error**: `SdkException<CfbV3ScoresPlayerDetailsByActiveError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CfbV3ScoresPlayerDetailsByActive2
- **HTTP**: `GET /v3/cfb/scores/{format}/PlayersByActive` (Default (api))
- **Notes**: Full player bio and details, including injury notes, for all active players.
- **Signature**: `CfbV3ScoresPlayerDetailsByActive2(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<PlayerBasic1>`
- **Error**: `SdkException<CfbV3ScoresPlayerDetailsByActive2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CfbV3ScoresPlayerDetailsByInjured
- **HTTP**: `GET /v3/cfb/scores/{format}/InjuredPlayers` (Default (api))
- **Notes**: This endpoint provides all currently injured college football players, along with injury details.
- **Signature**: `CfbV3ScoresPlayerDetailsByInjured(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Player1>`
- **Error**: `SdkException<CfbV3ScoresPlayerDetailsByInjuredError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CfbV3ScoresPlayerDetailsByTeam
- **HTTP**: `GET /v3/cfb/scores/{format}/Players/{team}` (Default (api))
- **Notes**: Full player bio and details, including injury notes, for all available players by team.
- **Signature**: `CfbV3ScoresPlayerDetailsByTeam(Format format, string team, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Player1>`
- **Error**: `SdkException<CfbV3ScoresPlayerDetailsByTeamError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CfbV3ScoresPlayerProfilesByTeam
- **HTTP**: `GET /v3/cfb/scores/{format}/PlayersBasic/{team}` (Default (api))
- **Notes**: Roster information for a given team. Player profiles include basic biographical information, position, college, and current team (if attached to a team.) Specify a team tricode parameter to receive all players currently on that team.
- **Signature**: `CfbV3ScoresPlayerProfilesByTeam(Format format, string team, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<PlayerBasic1>`
- **Error**: `SdkException<CfbV3ScoresPlayerProfilesByTeamError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CfbV3ScoresSchedules
- **HTTP**: `GET /v3/cfb/scores/{format}/Games/{season}` (Default (api))
- **Notes**: Home and away teams, date and time, season type and week etc. are included. Also includes gameday information. This includes full stadium information (capacity, lat/long, surface etc.), top-line betting information (spread, moneyline, total), weather conditions, and broadcast information.
- **Signature**: `CfbV3ScoresSchedules(Format format, string season, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Game4>`
- **Error**: `SdkException<CfbV3ScoresSchedulesError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CfbV3ScoresSchedulesBasic
- **HTTP**: `GET /v3/cfb/scores/{format}/SchedulesBasic/{season}` (Default (api))
- **Notes**: A lightweight schedule endpoint without gameday information. Home and away teams, the date and time of the game, and season type, week etc. are included. Ideal for the most basic information required to build a schedule.
- **Signature**: `CfbV3ScoresSchedulesBasic(Format format, string season, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<ScheduleBasic1>`
- **Error**: `SdkException<CfbV3ScoresSchedulesBasicError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CfbV3ScoresSeasonCurrent
- **HTTP**: `GET /v3/cfb/scores/{format}/CurrentSeason` (Default (api))
- **Notes**: Year of the current season. This value changes at the start of the new league year. For leagues that run over two years, this is the year the season starts, not ends.
- **Signature**: `CfbV3ScoresSeasonCurrent(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `int`
- **Error**: `SdkException<CfbV3ScoresSeasonCurrentError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CfbV3ScoresSeasonCurrentDetails
- **HTTP**: `GET /v3/cfb/scores/{format}/CurrentSeasonDetails` (Default (api))
- **Notes**: The current season year, its start and end years, season type, week etc.
- **Signature**: `CfbV3ScoresSeasonCurrentDetails(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Season1`
- **Error**: `SdkException<CfbV3ScoresSeasonCurrentDetailsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CfbV3ScoresSeasonTypeCurrent
- **HTTP**: `GET /v3/cfb/scores/{format}/CurrentSeasonType` (Default (api))
- **Notes**: The current type of season (e.g. REG, POST for regular or playoff.)
- **Signature**: `CfbV3ScoresSeasonTypeCurrent(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `string?`
- **Error**: `SdkException<CfbV3ScoresSeasonTypeCurrentError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CfbV3ScoresStadiums
- **HTTP**: `GET /v3/cfb/scores/{format}/Stadiums` (Default (api))
- **Notes**: Returns all stadiums in the league with capacity, surface, latitude/longitude, city and state (and where applicable country.)
- **Signature**: `CfbV3ScoresStadiums(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Stadium1>`
- **Error**: `SdkException<CfbV3ScoresStadiumsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CfbV3ScoresTeamGameLogsBySeason
- **HTTP**: `GET /v3/cfb/scores/{format}/TeamGameStatsBySeason/{season}/{teamid}/{numberofgames}` (Default (api))
- **Notes**: Game by game log of total team statistics.
- **Signature**: `CfbV3ScoresTeamGameLogsBySeason(Format format, string season, string teamid, string numberofgames, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<TeamGame1>`
- **Error**: `SdkException<CfbV3ScoresTeamGameLogsBySeasonError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CfbV3ScoresTeamGameStatsByWeekLiveFinal
- **HTTP**: `GET /v3/cfb/scores/{format}/TeamGameStatsByWeek/{season}/{week}` (Default (api))
- **Notes**: Returns the box score statistical record team-wide (aggregated from all players) for a all teams' games in a given week, both live and post-game.
- **Signature**: `CfbV3ScoresTeamGameStatsByWeekLiveFinal(Format format, string season, string week, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<TeamGame1>`
- **Error**: `SdkException<CfbV3ScoresTeamGameStatsByWeekLiveFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CfbV3ScoresTeamProfilesAll
- **HTTP**: `GET /v3/cfb/scores/{format}/Teams` (Default (api))
- **Notes**: Full team information: team name, school and city, conference and division, and colors. Also contains basic fantasy info such as IDs as well as full stadium data. This endpoint returns all teams regardless of current active status.
- **Signature**: `CfbV3ScoresTeamProfilesAll(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Team1>`
- **Error**: `SdkException<CfbV3ScoresTeamProfilesAllError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CfbV3ScoresTeamSeasonStatsStandings
- **HTTP**: `GET /v3/cfb/scores/{format}/TeamSeasonStats/{season}` (Default (api))
- **Notes**: Returns all season-long stats (i.e. the season total, not each individual game record) for all teams (aggregated from all players) for a given season. Also includes their standing information.
- **Signature**: `CfbV3ScoresTeamSeasonStatsStandings(Format format, string season, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<TeamSeason1>`
- **Error**: `SdkException<CfbV3ScoresTeamSeasonStatsStandingsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CfbV3ScoresTeamsBasicAll
- **HTTP**: `GET /v3/cfb/scores/{format}/TeamsBasic` (Default (api))
- **Notes**: The most basic top-line team information, such as team name and city, conference and division, stadium ID, coach info, and team colors. Returns all teams regardless of current active status.
- **Signature**: `CfbV3ScoresTeamsBasicAll(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<TeamBasic1>`
- **Error**: `SdkException<CfbV3ScoresTeamsBasicAllError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CfbV3ScoresWeekCurrent
- **HTTP**: `GET /v3/cfb/scores/{format}/CurrentWeek` (Default (api))
- **Notes**: Number of the current week of the season. This value usually changes on Saturday into Sunday overnight, but in the rare case of a rescheduled or special game with a non-standard gameday this could change.
- **Signature**: `CfbV3ScoresWeekCurrent(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `int?`
- **Error**: `SdkException<CfbV3ScoresWeekCurrentError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
