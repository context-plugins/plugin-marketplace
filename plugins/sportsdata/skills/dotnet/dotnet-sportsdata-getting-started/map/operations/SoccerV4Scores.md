# SoccerV4Scores — operations

Accessor: `client.SoccerV4Scores` · Source: `Api/SoccerV4Scores.cs` · 21 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### SoccerV4ScoresAreasCountries
- **HTTP**: `GET /v4/soccer/scores/{format}/Areas` (Default (api))
- **Notes**: A list of countries, continents etc. for finding their respective competitions.
- **Signature**: `SoccerV4ScoresAreasCountries(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Area>`
- **Error**: `SdkException<SoccerV4ScoresAreasCountriesError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SoccerV4ScoresCompetitionsLeagues
- **HTTP**: `GET /v4/soccer/scores/{format}/Competitions` (Default (api))
- **Notes**: A list of all competitions (leagues, cups etc.) and their associated countries or areas.
- **Signature**: `SoccerV4ScoresCompetitionsLeagues(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Competition>`
- **Error**: `SdkException<SoccerV4ScoresCompetitionsLeaguesError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SoccerV4ScoresGamesByCompetitionLiveFinal
- **HTTP**: `GET /v4/soccer/scores/{format}/CompetitionDetails/{competition}` (Default (api))
- **Notes**: Full scores and gameday info delivered live and post-game. Live data includes half and score info, delivered by competition.
- **Signature**: `SoccerV4ScoresGamesByCompetitionLiveFinal(Format format, string competition, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CompetitionDetail`
- **Error**: `SdkException<SoccerV4ScoresGamesByCompetitionLiveFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SoccerV4ScoresGamesByDateFinal
- **HTTP**: `GET /v4/soccer/scores/{format}/GamesByDateFinal/{competition}/{date}` (Default (api))
- **Notes**: Full scores and gameday info, as well as half and full-time score, delivered post-game.
- **Signature**: `SoccerV4ScoresGamesByDateFinal(Format format, string competition, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Game9>`
- **Error**: `SdkException<SoccerV4ScoresGamesByDateFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SoccerV4ScoresGamesByDateLiveFinal
- **HTTP**: `GET /v4/soccer/scores/{format}/GamesByDate/{competition}/{date}` (Default (api))
- **Notes**: Full scores and gameday info delivered live and post-game. Live data includes half and score info. Gameday info includes weather, TV channel etc
- **Signature**: `SoccerV4ScoresGamesByDateLiveFinal(Format format, string competition, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Game9>`
- **Error**: `SdkException<SoccerV4ScoresGamesByDateLiveFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SoccerV4ScoresGamesBasicByDateFinal
- **HTTP**: `GET /v4/soccer/scores/{format}/ScoresBasicFinal/{competition}/{date}` (Default (api))
- **Notes**: The most top-line full-time information, ideal for basic applications, called by competition and date, delivered post-game.
- **Signature**: `SoccerV4ScoresGamesBasicByDateFinal(Format format, string competition, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<ScoreBasic6>`
- **Error**: `SdkException<SoccerV4ScoresGamesBasicByDateFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SoccerV4ScoresGamesBasicByDateLiveFinal
- **HTTP**: `GET /v4/soccer/scores/{format}/ScoresBasic/{competition}/{date}` (Default (api))
- **Notes**: Full scores and gameday info delivered live and post-game, called by date and competition.
- **Signature**: `SoccerV4ScoresGamesBasicByDateLiveFinal(Format format, string competition, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<ScoreBasic6>`
- **Error**: `SdkException<SoccerV4ScoresGamesBasicByDateLiveFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SoccerV4ScoresMembershipsByActive
- **HTTP**: `GET /v4/soccer/scores/{format}/ActiveMemberships/{competition}` (Default (api))
- **Notes**: Players currently active on teams within a specified competition.
- **Signature**: `SoccerV4ScoresMembershipsByActive(Format format, string competition, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Membership>`
- **Error**: `SdkException<SoccerV4ScoresMembershipsByActiveError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SoccerV4ScoresMembershipsByCanceled
- **HTTP**: `GET /v4/soccer/scores/{format}/CanceledMemberships` (Default (api))
- **Notes**: Memberships (players' membership of a team) that have since been revoked by our system.
- **Signature**: `SoccerV4ScoresMembershipsByCanceled(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CanceledMembership`
- **Error**: `SdkException<SoccerV4ScoresMembershipsByCanceledError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SoccerV4ScoresMembershipsByRecentlyChanged
- **HTTP**: `GET /v4/soccer/scores/{format}/RecentlyChangedMemberships/{competition}/{days}` (Default (api))
- **Notes**: A list of all recently changed memberships (e.g. player transfers, releases) for a given competition, called by number of days ago.
- **Signature**: `SoccerV4ScoresMembershipsByRecentlyChanged(Format format, string competition, string days, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Membership>`
- **Error**: `SdkException<SoccerV4ScoresMembershipsByRecentlyChangedError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SoccerV4ScoresMembershipsHistoricalByTeam
- **HTTP**: `GET /v4/soccer/scores/{format}/HistoricalMembershipsByTeam/{competition}/{teamid}` (Default (api))
- **Notes**: Historical memberships of a team, i.e. players who were once on the roster but have since left.
- **Signature**: `SoccerV4ScoresMembershipsHistoricalByTeam(Format format, string competition, string teamid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Membership>`
- **Error**: `SdkException<SoccerV4ScoresMembershipsHistoricalByTeamError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SoccerV4ScoresPlayerDetailsByTeam
- **HTTP**: `GET /v4/soccer/scores/{format}/PlayersByTeam/{competition}/{teamid}` (Default (api))
- **Notes**: Full player bio and details, including injury notes, for all available players by team.
- **Signature**: `SoccerV4ScoresPlayerDetailsByTeam(Format format, string competition, string teamid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Player7>`
- **Error**: `SdkException<SoccerV4ScoresPlayerDetailsByTeamError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SoccerV4ScoresPlayerProfilesByTeam
- **HTTP**: `GET /v4/soccer/scores/{format}/PlayersByTeamBasic/{competition}/{teamid}` (Default (api))
- **Notes**: Roster information for a given team. Player profiles include basic biographical information, position, etc. Specify a TeamId parameter to receive all players currently on that team.
- **Signature**: `SoccerV4ScoresPlayerProfilesByTeam(Format format, string competition, string teamid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<PlayerBasic6>`
- **Error**: `SdkException<SoccerV4ScoresPlayerProfilesByTeamError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SoccerV4ScoresSchedules
- **HTTP**: `GET /v4/soccer/scores/{format}/Schedule/{competition}/{season}` (Default (api))
- **Notes**: Home and away teams, date and time, season type and week etc. are included. Also includes gameday information. This includes full stadium information (capacity, lat/long, surface etc.), top-line betting information (spread, moneyline, total), weather conditions, and broadcast information.
- **Signature**: `SoccerV4ScoresSchedules(Format format, string competition, string season, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Round1>`
- **Error**: `SdkException<SoccerV4ScoresSchedulesError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SoccerV4ScoresSchedulesBasic
- **HTTP**: `GET /v4/soccer/scores/{format}/SchedulesBasic/{competition}/{season}` (Default (api))
- **Notes**: A lightweight schedule endpoint without gameday information. Home and away teams, the date and time of the game, and season type, week etc. are included. Ideal for the most basic information required to build a schedule.
- **Signature**: `SoccerV4ScoresSchedulesBasic(Format format, string competition, string season, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<ScheduleBasic7>`
- **Error**: `SdkException<SoccerV4ScoresSchedulesBasicError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SoccerV4ScoresStandings
- **HTTP**: `GET /v4/soccer/scores/{format}/Standings/{competition}/{season}` (Default (api))
- **Notes**: Includes regular season standings in a given league or tournament and season.
- **Signature**: `SoccerV4ScoresStandings(Format format, string competition, string season, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Round1>`
- **Error**: `SdkException<SoccerV4ScoresStandingsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SoccerV4ScoresTeamGameStatsByDateLiveFinal
- **HTTP**: `GET /v4/soccer/scores/{format}/TeamGameStatsByDate/{competition}/{date}` (Default (api))
- **Notes**: Returns the box score statistical record team-wide (aggregated from all players) for all games on a given date within a competition, both live and post-game.
- **Signature**: `SoccerV4ScoresTeamGameStatsByDateLiveFinal(Format format, string competition, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<TeamGame6>`
- **Error**: `SdkException<SoccerV4ScoresTeamGameStatsByDateLiveFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SoccerV4ScoresTeamProfilesByCompetition
- **HTTP**: `GET /v4/soccer/scores/{format}/Teams/{competition}` (Default (api))
- **Notes**: Full team information: team name and city, conference and division, and colors. Also contains basic fantasy info such as IDs as well as full stadium data. This endpoint returns the teams ever associated with a competition; use Team Profiles - by Season for just the current ones.
- **Signature**: `SoccerV4ScoresTeamProfilesByCompetition(Format format, string competition, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Team7>`
- **Error**: `SdkException<SoccerV4ScoresTeamProfilesByCompetitionError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SoccerV4ScoresTeamProfilesBySeason
- **HTTP**: `GET /v4/soccer/scores/{format}/SeasonTeams/{competition}/{seasonid}` (Default (api))
- **Notes**: Full team information: team name and city, conference and division, and colors. Also contains basic fantasy info such as IDs as well as full stadium data. This endpoint returns the teams currently associated with a competition's active season; use Team Profiles - by Competition for all-time (e.g. teams since relegated from the EPL.)
- **Signature**: `SoccerV4ScoresTeamProfilesBySeason(Format format, string competition, string seasonid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<SeasonTeam>`
- **Error**: `SdkException<SoccerV4ScoresTeamProfilesBySeasonError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SoccerV4ScoresTeamSeasonStats
- **HTTP**: `GET /v4/soccer/scores/{format}/TeamSeasonStats/{competition}/{season}` (Default (api))
- **Notes**: Returns all season-long stats (i.e. the season total, not each individual game record) for all teams (aggregated from all players) for a given season.
- **Signature**: `SoccerV4ScoresTeamSeasonStats(Format format, string competition, string season, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Round1>`
- **Error**: `SdkException<SoccerV4ScoresTeamSeasonStatsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SoccerV4ScoresVenues
- **HTTP**: `GET /v4/soccer/scores/{format}/Venues` (Default (api))
- **Notes**: Stadium information from across the world
- **Signature**: `SoccerV4ScoresVenues(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Venue>`
- **Error**: `SdkException<SoccerV4ScoresVenuesError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
