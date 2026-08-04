# CbbV3Scores — operations

Accessor: `client.CbbV3Scores` · Source: `Api/CbbV3Scores.cs` · 22 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CbbV3ScoresAreGamesInProgress
- **HTTP**: `GET /v3/cbb/scores/{format}/AreAnyGamesInProgress` (Default (api))
- **Notes**: Returns &lt;code&gt;true&lt;/code&gt; if there is at least one game being played at the time of the request or &lt;code&gt;false&lt;/code&gt; if there are none.
- **Signature**: `CbbV3ScoresAreGamesInProgress(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `bool`
- **Error**: `SdkException<CbbV3ScoresAreGamesInProgressError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CbbV3ScoresGamesByDateFinal
- **HTTP**: `GET /v3/cbb/scores/{format}/GamesByDateFinal/{date}` (Default (api))
- **Notes**: Full scores and gameday info, including half scores, delivered after the game ends.
- **Signature**: `CbbV3ScoresGamesByDateFinal(Format format, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Game>`
- **Error**: `SdkException<CbbV3ScoresGamesByDateFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CbbV3ScoresGamesByDateLiveFinal
- **HTTP**: `GET /v3/cbb/scores/{format}/GamesByDate/{date}` (Default (api))
- **Notes**: Full scores and gameday info delivered live and post-game. Live data includes half and score info. Gameday info includes weather, TV channel etc
- **Signature**: `CbbV3ScoresGamesByDateLiveFinal(Format format, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Game>`
- **Error**: `SdkException<CbbV3ScoresGamesByDateLiveFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CbbV3ScoresGamesBySeason
- **HTTP**: `GET /v3/cbb/scores/{format}/Games/{season}` (Default (api))
- **Notes**: A full schedule of games for a given season.
- **Signature**: `CbbV3ScoresGamesBySeason(Format format, string season, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Game>`
- **Error**: `SdkException<CbbV3ScoresGamesBySeasonError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CbbV3ScoresGamesBySeasonFinal
- **HTTP**: `GET /v3/cbb/scores/{format}/GamesFinal/{season}` (Default (api))
- **Notes**: Full scores and gameday info, including half scores, for all games of a given season, delivered after each game ends
- **Signature**: `CbbV3ScoresGamesBySeasonFinal(Format format, string season, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Game>`
- **Error**: `SdkException<CbbV3ScoresGamesBySeasonFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CbbV3ScoresGamesBasicByDate
- **HTTP**: `GET /v3/cbb/scores/{format}/ScoresBasic/{date}` (Default (api))
- **Notes**: A slimmed-down score endpoint, giving just the quarter scores and final score, for simple applications.
- **Signature**: `CbbV3ScoresGamesBasicByDate(Format format, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<ScoreBasic>`
- **Error**: `SdkException<CbbV3ScoresGamesBasicByDateError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CbbV3ScoresLeagueHierarchy
- **HTTP**: `GET /v3/cbb/scores/{format}/LeagueHierarchy` (Default (api))
- **Notes**: Returns the list of conferences, their teams, and standings.
- **Signature**: `CbbV3ScoresLeagueHierarchy(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Conference>`
- **Error**: `SdkException<CbbV3ScoresLeagueHierarchyError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CbbV3ScoresPlayerDetailsByActive
- **HTTP**: `GET /v3/cbb/scores/{format}/Players` (Default (api))
- **Notes**: Full player bio and details, including injury notes, for all active players.
- **Signature**: `CbbV3ScoresPlayerDetailsByActive(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Player>`
- **Error**: `SdkException<CbbV3ScoresPlayerDetailsByActiveError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CbbV3ScoresPlayerDetailsByActive2
- **HTTP**: `GET /v3/cbb/scores/{format}/PlayersByActive` (Default (api))
- **Notes**: Full player bio and details, including injury notes, for all active players.
- **Signature**: `CbbV3ScoresPlayerDetailsByActive2(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<PlayerBasic>`
- **Error**: `SdkException<CbbV3ScoresPlayerDetailsByActive2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CbbV3ScoresPlayerDetailsByInjured
- **HTTP**: `GET /v3/cbb/scores/{format}/InjuredPlayers` (Default (api))
- **Notes**: This endpoint provides all currently injured college basketball players, along with injury details.
- **Signature**: `CbbV3ScoresPlayerDetailsByInjured(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Player>`
- **Error**: `SdkException<CbbV3ScoresPlayerDetailsByInjuredError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CbbV3ScoresPlayerDetailsByTeam
- **HTTP**: `GET /v3/cbb/scores/{format}/Players/{team}` (Default (api))
- **Notes**: Full player bio and details, including injury notes, for all available players by team.
- **Signature**: `CbbV3ScoresPlayerDetailsByTeam(Format format, string team, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Player>`
- **Error**: `SdkException<CbbV3ScoresPlayerDetailsByTeamError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CbbV3ScoresPlayerProfilesByTeam
- **HTTP**: `GET /v3/cbb/scores/{format}/PlayersBasic/{team}` (Default (api))
- **Notes**: Roster information for a given team. Player profiles include basic biographical information, position, etc. Specify a team code parameter to receive all players currently on that team.
- **Signature**: `CbbV3ScoresPlayerProfilesByTeam(Format format, string team, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<PlayerBasic>`
- **Error**: `SdkException<CbbV3ScoresPlayerProfilesByTeamError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CbbV3ScoresSchedulesByTeam
- **HTTP**: `GET /v3/cbb/scores/{format}/TeamSchedule/{season}/{team}` (Default (api))
- **Notes**: A list of all a team's games for a given season.
- **Signature**: `CbbV3ScoresSchedulesByTeam(Format format, string season, string team, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Game>`
- **Error**: `SdkException<CbbV3ScoresSchedulesByTeamError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CbbV3ScoresSchedulesBasic
- **HTTP**: `GET /v3/cbb/scores/{format}/SchedulesBasic/{season}` (Default (api))
- **Notes**: A lightweight schedule endpoint without gameday information. Home and away teams, the date and time of the game, and season type etc. are included. Ideal for the most basic information required to build a schedule.
- **Signature**: `CbbV3ScoresSchedulesBasic(Format format, string season, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<ScheduleBasic>`
- **Error**: `SdkException<CbbV3ScoresSchedulesBasicError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CbbV3ScoresSeasonCurrent
- **HTTP**: `GET /v3/cbb/scores/{format}/CurrentSeason` (Default (api))
- **Notes**: Year of the current season. This value changes at the start of the new league year. For leagues that run over two years, this is the year the season starts, not ends.
- **Signature**: `CbbV3ScoresSeasonCurrent(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Season`
- **Error**: `SdkException<CbbV3ScoresSeasonCurrentError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CbbV3ScoresStadiums
- **HTTP**: `GET /v3/cbb/scores/{format}/Stadiums` (Default (api))
- **Notes**: Returns all stadiums in CBB with school, capacity, latitude/longitude, city and state (and where applicable country.)
- **Signature**: `CbbV3ScoresStadiums(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Stadium>`
- **Error**: `SdkException<CbbV3ScoresStadiumsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CbbV3ScoresTeamGameLogsBySeason
- **HTTP**: `GET /v3/cbb/scores/{format}/TeamGameStatsBySeason/{season}/{teamid}/{numberofgames}` (Default (api))
- **Notes**: Game by game log of total team statistics.
- **Signature**: `CbbV3ScoresTeamGameLogsBySeason(Format format, string season, string teamid, string numberofgames, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<TeamGame>`
- **Error**: `SdkException<CbbV3ScoresTeamGameLogsBySeasonError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CbbV3ScoresTeamGameStatsByDateLiveFinal
- **HTTP**: `GET /v3/cbb/scores/{format}/TeamGameStatsByDate/{date}` (Default (api))
- **Notes**: Returns the box score statistical record team-wide (aggregated from all players) for teams playing on a given date, both live and post-game.
- **Signature**: `CbbV3ScoresTeamGameStatsByDateLiveFinal(Format format, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<TeamGame>`
- **Error**: `SdkException<CbbV3ScoresTeamGameStatsByDateLiveFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CbbV3ScoresTeamProfilesAll
- **HTTP**: `GET /v3/cbb/scores/{format}/teams` (Default (api))
- **Notes**: Full team information: team name and city, school, conference, and colors. Also contains full stadium data. This endpoint returns all teams regardless of current active status.
- **Signature**: `CbbV3ScoresTeamProfilesAll(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Team>`
- **Error**: `SdkException<CbbV3ScoresTeamProfilesAllError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CbbV3ScoresTeamSeasonStats
- **HTTP**: `GET /v3/cbb/scores/{format}/TeamSeasonStats/{season}` (Default (api))
- **Notes**: Returns all season-long stats (i.e. the season total, not each individual game record) for all teams (aggregated from all players) for a given season.
- **Signature**: `CbbV3ScoresTeamSeasonStats(Format format, string season, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<TeamSeason>`
- **Error**: `SdkException<CbbV3ScoresTeamSeasonStatsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CbbV3ScoresTeamsBasicAll
- **HTTP**: `GET /v3/cbb/scores/{format}/TeamsBasic` (Default (api))
- **Notes**: The most basic top-line team information, such as team name, school and city, conference and division, stadium ID, and team colors. Returns all teams regardless of current active status.
- **Signature**: `CbbV3ScoresTeamsBasicAll(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<TeamBasic>`
- **Error**: `SdkException<CbbV3ScoresTeamsBasicAllError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CbbV3ScoresTournamentHierarchy
- **HTTP**: `GET /v3/cbb/scores/{format}/Tournament/{season}` (Default (api))
- **Notes**: Returns tournament info and games associated with the NCAA Tournament for the given season.
- **Signature**: `CbbV3ScoresTournamentHierarchy(Format format, string season, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Tournament`
- **Error**: `SdkException<CbbV3ScoresTournamentHierarchyError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
