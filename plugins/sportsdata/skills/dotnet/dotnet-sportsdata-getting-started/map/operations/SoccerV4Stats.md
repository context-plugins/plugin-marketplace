# SoccerV4Stats — operations

Accessor: `client.SoccerV4Stats` · Source: `Api/SoccerV4Stats.cs` · 11 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### SoccerV4StatsBoxScoreFinal
- **HTTP**: `GET /v4/soccer/stats/{format}/BoxScoreFinal/{competition}/{gameid}` (Default (api))
- **Notes**: Full statistical information for a specified game, down to the team and player stat level, delivered after the game is complete.
- **Signature**: `SoccerV4StatsBoxScoreFinal(Format format, string competition, string gameid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<BoxScore5>`
- **Error**: `SdkException<SoccerV4StatsBoxScoreFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SoccerV4StatsBoxScoreLiveFinal
- **HTTP**: `GET /v4/soccer/stats/{format}/BoxScore/{competition}/{gameid}` (Default (api))
- **Notes**: Full statistical information for a specified game, down to the team and player stat level, delivered live during the game, called per individual game.
- **Signature**: `SoccerV4StatsBoxScoreLiveFinal(Format format, string competition, string gameid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<BoxScore5>`
- **Error**: `SdkException<SoccerV4StatsBoxScoreLiveFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SoccerV4StatsBoxScoresByDateFinal
- **HTTP**: `GET /v4/soccer/stats/{format}/BoxScoresFinal/{competition}/{date}` (Default (api))
- **Notes**: Full statistical information for a specified date for each game that took place, down to the team and player stat level, delivered after the game is complete.
- **Signature**: `SoccerV4StatsBoxScoresByDateFinal(Format format, string competition, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<BoxScore5>`
- **Error**: `SdkException<SoccerV4StatsBoxScoresByDateFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SoccerV4StatsBoxScoresByDateLiveFinal
- **HTTP**: `GET /v4/soccer/stats/{format}/BoxScoresByDate/{competition}/{date}` (Default (api))
- **Notes**: Full statistical information for a specified game, down to the team and player stat level, delivered live during the games, called for all games on a given date within a competition.
- **Signature**: `SoccerV4StatsBoxScoresByDateLiveFinal(Format format, string competition, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<BoxScore5>`
- **Error**: `SdkException<SoccerV4StatsBoxScoresByDateLiveFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SoccerV4StatsBoxScoresDeltaByDate
- **HTTP**: `GET /v4/soccer/stats/{format}/BoxScoresDeltaByDate/{competition}/{date}/{minutes}` (Default (api))
- **Notes**: This method returns all box scores for a given date in a given competition, but only returns player stats that have changed in the last X minutes as specified in your API call. By definition this is a live endpoint, not final.
- **Signature**: `SoccerV4StatsBoxScoresDeltaByDate(Format format, string competition, string date, string minutes, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<BoxScore5>`
- **Error**: `SdkException<SoccerV4StatsBoxScoresDeltaByDateError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SoccerV4StatsFantasyPointsByDate
- **HTTP**: `GET /v4/soccer/stats/{format}/FantasyGameStatsByDate/{competition}/{date}` (Default (api))
- **Notes**: A simple list of fantasy points awarded to players who took part in a given competition's games on a given date.
- **Signature**: `SoccerV4StatsFantasyPointsByDate(Format format, string competition, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<FantasyGame4>`
- **Error**: `SdkException<SoccerV4StatsFantasyPointsByDateError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SoccerV4StatsLineupsByDate
- **HTTP**: `GET /v4/soccer/stats/{format}/LineupsByDate/{competition}/{date}` (Default (api))
- **Notes**: Projected and confirmed starting XIs and substitute benches for a given competition on a given date.
- **Signature**: `SoccerV4StatsLineupsByDate(Format format, string competition, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<PlayerGameBasic>`
- **Error**: `SdkException<SoccerV4StatsLineupsByDateError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SoccerV4StatsPlayerGameStatsByDateFinal
- **HTTP**: `GET /v4/soccer/stats/{format}/PlayerGameStatsByDateFinal/{competition}/{date}` (Default (api))
- **Notes**: Returns the box score statistical record for all involved players across all teams' games for a given competition on a given date after each game has concluded.
- **Signature**: `SoccerV4StatsPlayerGameStatsByDateFinal(Format format, string competition, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<PlayerGame6>`
- **Error**: `SdkException<SoccerV4StatsPlayerGameStatsByDateFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SoccerV4StatsPlayerGameStatsByDateLiveFinal
- **HTTP**: `GET /v4/soccer/stats/{format}/PlayerGameStatsByDate/{competition}/{date}` (Default (api))
- **Notes**: Returns the box score statistical record for all involved players across all teams' games on a given date in a given competition, both live and after each game has concluded.
- **Signature**: `SoccerV4StatsPlayerGameStatsByDateLiveFinal(Format format, string competition, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<PlayerGame6>`
- **Error**: `SdkException<SoccerV4StatsPlayerGameStatsByDateLiveFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SoccerV4StatsPlayerSeasonStats
- **HTTP**: `GET /v4/soccer/stats/{format}/PlayerSeasonStats/{competition}/{season}` (Default (api))
- **Notes**: Returns all season-long stats (i.e. the season total, not each individual game record) for all players for a given season.
- **Signature**: `SoccerV4StatsPlayerSeasonStats(Format format, string competition, string season, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Round1>`
- **Error**: `SdkException<SoccerV4StatsPlayerSeasonStatsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SoccerV4StatsTeamGameStatsByDateFinal
- **HTTP**: `GET /v4/soccer/stats/{format}/TeamGameStatsByDateFinal/{competition}/{date}` (Default (api))
- **Notes**: Returns the box score statistical record team-wide (aggregated from all players) for a games in a given competition on a given date, updated as each game has concluded.
- **Signature**: `SoccerV4StatsTeamGameStatsByDateFinal(Format format, string competition, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<TeamGame6>`
- **Error**: `SdkException<SoccerV4StatsTeamGameStatsByDateFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
