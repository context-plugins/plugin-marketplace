# CwbbV3Scores — operations

Accessor: `client.CwbbV3Scores` · Source: `Api/CwbbV3Scores.cs` · 8 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CwbbV3ScoresAreAnyGamesInProgress
- **HTTP**: `GET /v3/cwbb/scores/{format}/AreAnyGamesInProgress` (Default (api))
- **Notes**: Are Any Games In Progress
- **Signature**: `CwbbV3ScoresAreAnyGamesInProgress(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `bool`
- **Error**: `SdkException<CwbbV3ScoresAreAnyGamesInProgressError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CwbbV3ScoresGamesByDateFinal
- **HTTP**: `GET /v3/cwbb/scores/{format}/GamesByDateFinal/{date}` (Default (api))
- **Notes**: Full scores and gameday info, including weather, referee, infotainment odds, as well as all of the quarter scores and full-time score, delivered as the game ends.
- **Signature**: `CwbbV3ScoresGamesByDateFinal(Format format, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Game5>`
- **Error**: `SdkException<CwbbV3ScoresGamesByDateFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CwbbV3ScoresGamesByDateLiveFinal
- **HTTP**: `GET /v3/cwbb/scores/{format}/GamesByDate/{date}` (Default (api))
- **Notes**: Full scores and gameday info delivered live and post-game. Live data includes half and score info. Gameday info includes weather, TV channel etc
- **Signature**: `CwbbV3ScoresGamesByDateLiveFinal(Format format, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Game5>`
- **Error**: `SdkException<CwbbV3ScoresGamesByDateLiveFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CwbbV3ScoresLeagueHierarchy
- **HTTP**: `GET /v3/cwbb/scores/{format}/LeagueHierarchy` (Default (api))
- **Notes**: The list of all conferences and their teams, with standings data.
- **Signature**: `CwbbV3ScoresLeagueHierarchy(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Conference>`
- **Error**: `SdkException<CwbbV3ScoresLeagueHierarchyError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CwbbV3ScoresSchedules
- **HTTP**: `GET /v3/cwbb/scores/{format}/Games/{season}` (Default (api))
- **Notes**: Home and away teams, date and time, season type etc. are included. Also includes gameday information. This includes full stadium information, top-line betting information (spread, moneyline, total), weather conditions, and broadcast information.
- **Signature**: `CwbbV3ScoresSchedules(Format format, string season, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Game5>`
- **Error**: `SdkException<CwbbV3ScoresSchedulesError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CwbbV3ScoresSchedulesBasic
- **HTTP**: `GET /v3/cwbb/scores/{format}/SchedulesBasic/{season}` (Default (api))
- **Notes**: A lightweight schedule endpoint without gameday information. Home and away teams, the date and time of the game, and season type, week etc. are included. Ideal for the most basic information required to build a schedule.
- **Signature**: `CwbbV3ScoresSchedulesBasic(Format format, string season, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<ScheduleBasic2>`
- **Error**: `SdkException<CwbbV3ScoresSchedulesBasicError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CwbbV3ScoresSeasonCurrent
- **HTTP**: `GET /v3/cwbb/scores/{format}/CurrentSeason` (Default (api))
- **Notes**: Season Current
- **Signature**: `CwbbV3ScoresSeasonCurrent(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Season2`
- **Error**: `SdkException<CwbbV3ScoresSeasonCurrentError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CwbbV3ScoresTeamProfilesAll
- **HTTP**: `GET /v3/cwbb/scores/{format}/Teams` (Default (api))
- **Notes**: Full team information: school, team name and city, conference and division, and colors.
- **Signature**: `CwbbV3ScoresTeamProfilesAll(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Team2>`
- **Error**: `SdkException<CwbbV3ScoresTeamProfilesAllError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
