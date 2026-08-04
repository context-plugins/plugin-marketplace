# WnbaV3Scores — operations

Accessor: `client.WnbaV3Scores` · Source: `Api/WnbaV3Scores.cs` · 40 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### WnbaV3ScoresAreGamesInProgress
- **HTTP**: `GET /v3/wnba/scores/{format}/AreAnyGamesInProgress` (Default (api))
- **Notes**: Are Games In Progress
- **Signature**: `WnbaV3ScoresAreGamesInProgress(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `bool`
- **Error**: `SdkException<WnbaV3ScoresAreGamesInProgressError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### WnbaV3ScoresBettingEventsByDate
- **HTTP**: `GET /v3/wnba/scores/{format}/BettingEventsByDate/{date}` (Default (api))
- **Notes**: The list of current BettingEvents for the given date. Events in this include market information but no outcomes will be included here. Intended to allow both visibility to Events in order to match up Events -&gt; Games via the included GameID (where applicable) as well as provide a list of MarketIDs which are included in the given event.
- **Signature**: `WnbaV3ScoresBettingEventsByDate(Format format, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<BettingEvent2>`
- **Error**: `SdkException<WnbaV3ScoresBettingEventsByDateError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### WnbaV3ScoresBettingEventsBySeason
- **HTTP**: `GET /v3/wnba/scores/{format}/BettingEvents/{season}` (Default (api))
- **Notes**: Returns the full list of BetttingEvents for the given season. Intended for those who need to tie BettingEventIDs to GameIDs.
- **Signature**: `WnbaV3ScoresBettingEventsBySeason(Format format, string season, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<BettingEvent2>`
- **Error**: `SdkException<WnbaV3ScoresBettingEventsBySeasonError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### WnbaV3ScoresBettingFuturesBySeason
- **HTTP**: `GET /v3/wnba/scores/{format}/BettingFuturesBySeason/{season}` (Default (api))
- **Notes**: Returns available Futures outcomes for the given season. Does not include line movement.
- **Signature**: `WnbaV3ScoresBettingFuturesBySeason(Format format, string season, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<BettingEvent2>`
- **Error**: `SdkException<WnbaV3ScoresBettingFuturesBySeasonError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### WnbaV3ScoresBettingFuturesBySeasonSportsbookGroup
- **HTTP**: `GET /v3/wnba/scores/{format}/BettingFuturesBySeason/{season}/{sportsbookgroup}` (Default (api))
- **Notes**: Returns available Futures markets for the given season. Does not include line movement. A Sportsbook Group must be specified as a URL parameter.
- **Signature**: `WnbaV3ScoresBettingFuturesBySeasonSportsbookGroup(Format format, string season, string sportsbookgroup, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<BettingEvent2>`
- **Error**: `SdkException<WnbaV3ScoresBettingFuturesBySeasonSportsbookGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### WnbaV3ScoresBettingMarket
- **HTTP**: `GET /v3/wnba/scores/{format}/BettingMarket/{marketId}` (Default (api))
- **Notes**: Returns full line movement for a given BettingMarket. Due to the sheer size of the output and the level of detail, it is intended for historical data purposes and not for the most up-to-the-second lines.
- **Signature**: `WnbaV3ScoresBettingMarket(Format format, string marketId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BettingMarket`
- **Error**: `SdkException<WnbaV3ScoresBettingMarketError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### WnbaV3ScoresBettingMarketSportsbookGroup
- **HTTP**: `GET /v3/wnba/scores/{format}/BettingMarket/{marketId}/{sportsbookgroup}` (Default (api))
- **Notes**: Returns full line movement for a given BettingMarket. Due to the sheer size of the output and the level of detail, it is intended for historical data purposes and not for the most up-to-the-second lines. A Sportsbook Group must be specified as a URL parameter.
- **Signature**: `WnbaV3ScoresBettingMarketSportsbookGroup(Format format, string marketId, string sportsbookgroup, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BettingMarket`
- **Error**: `SdkException<WnbaV3ScoresBettingMarketSportsbookGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### WnbaV3ScoresBettingMarketsByEvent
- **HTTP**: `GET /v3/wnba/scores/{format}/BettingMarkets/{eventId}` (Default (api))
- **Notes**: Returns the markets of all available types (e.g. Player Props, Team Props) and available outcomes for a given BettingEventID.
- **Signature**: `WnbaV3ScoresBettingMarketsByEvent(Format format, string eventId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<BettingMarket>`
- **Error**: `SdkException<WnbaV3ScoresBettingMarketsByEventError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### WnbaV3ScoresBettingMarketsByEventSportsbookGroup
- **HTTP**: `GET /v3/wnba/scores/{format}/BettingMarketsByEvent/{eventId}/{sportsbookgroup}` (Default (api))
- **Notes**: Returns the markets and available outcomes for a given BettingEventID.
- **Signature**: `WnbaV3ScoresBettingMarketsByEventSportsbookGroup(Format format, string eventId, string sportsbookgroup, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<BettingMarket>`
- **Error**: `SdkException<WnbaV3ScoresBettingMarketsByEventSportsbookGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### WnbaV3ScoresBettingMarketsByGame
- **HTTP**: `GET /v3/wnba/scores/{format}/BettingMarketsByGameID/{gameID}` (Default (api))
- **Notes**: Returns the markets of all available types (e.g. Player Props, Team Props) and available outcomes for a given GameID.
- **Signature**: `WnbaV3ScoresBettingMarketsByGame(Format format, string gameId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<BettingMarket>`
- **Error**: `SdkException<WnbaV3ScoresBettingMarketsByGameError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### WnbaV3ScoresBettingMarketsByGameSportsbookGroup
- **HTTP**: `GET /v3/wnba/scores/{format}/BettingMarketsByGameID/{gameID}/{sportsbookgroup}` (Default (api))
- **Notes**: Returns the markets of all available types (e.g. Player Props, Team Props) and available outcomes for a given GameID. A Sportsbook Group must be specified as a URL parameter.
- **Signature**: `WnbaV3ScoresBettingMarketsByGameSportsbookGroup(Format format, string gameId, string sportsbookgroup, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<BettingMarket>`
- **Error**: `SdkException<WnbaV3ScoresBettingMarketsByGameSportsbookGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### WnbaV3ScoresBettingMarketsByMarketType
- **HTTP**: `GET /v3/wnba/scores/{format}/BettingMarketsByMarketType/{eventId}/{marketTypeID}` (Default (api))
- **Notes**: Returns Markets and available outcomes for a given event and market type requested. A lighter call than by BettingEventID as it only includes markets tagged with the specific MarketType, a full list of which is available for each sport in its Betting Metadata endpoint.
- **Signature**: `WnbaV3ScoresBettingMarketsByMarketType(Format format, string eventId, string marketTypeId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<BettingMarket>`
- **Error**: `SdkException<WnbaV3ScoresBettingMarketsByMarketTypeError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### WnbaV3ScoresBettingMarketsByMarketTypeSportsbookGroup
- **HTTP**: `GET /v3/wnba/scores/{format}/BettingMarketsByMarketType/{eventId}/{marketTypeID}/{sportsbookgroup}` (Default (api))
- **Notes**: Returns Markets and available outcomes for a given event and market type requested. A lighter call than by BettingEventID as it only includes markets tagged with the specific MarketType, a full list of which is available for each sport in its Betting Metadata endpoint. A Sportsbook Group must be specified as a URL parameter.
- **Signature**: `WnbaV3ScoresBettingMarketsByMarketTypeSportsbookGroup(Format format, string eventId, string marketTypeId, string sportsbookgroup, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<BettingMarket>`
- **Error**: `SdkException<WnbaV3ScoresBettingMarketsByMarketTypeSportsbookGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### WnbaV3ScoresBettingMetadata
- **HTTP**: `GET /v3/wnba/scores/{format}/BettingMetadata` (Default (api))
- **Notes**: Returns the list of MarketTypes, BetTypes, PeriodTypes, OutcomeTypes, and ResultTypes to map the IDs to descriptive names.
- **Signature**: `WnbaV3ScoresBettingMetadata(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BettingEntityMetadataCollection`
- **Error**: `SdkException<WnbaV3ScoresBettingMetadataError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### WnbaV3ScoresBettingPlayerPropsByGame
- **HTTP**: `GET /v3/wnba/scores/{format}/BettingPlayerPropsByGameID/{gameId}` (Default (api))
- **Notes**: This works in the same way as Betting Markets by Market Type but is prefiltered to the Player Props type only. Ideal if your application will only ever require Player Props, but if you also want Team Props etc. it is recommended to use the by Market Type endpoint.
- **Signature**: `WnbaV3ScoresBettingPlayerPropsByGame(Format format, string gameId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<BettingMarket>`
- **Error**: `SdkException<WnbaV3ScoresBettingPlayerPropsByGameError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### WnbaV3ScoresBettingPlayerPropsByGameSportsbookGroup
- **HTTP**: `GET /v3/wnba/scores/{format}/BettingPlayerPropsByGameID/{gameId}/{sportsbookgroup}` (Default (api))
- **Notes**: This works in the same way as Betting Markets by Market Type but is prefiltered to the Player Props type only. Ideal if your application will only ever require Player Props, but if you also want Team Props etc. it is recommended to use the by Market Type endpoint. A Sportsbook Group must be specified as a URL parameter.
- **Signature**: `WnbaV3ScoresBettingPlayerPropsByGameSportsbookGroup(Format format, string gameId, string sportsbookgroup, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<BettingMarket>`
- **Error**: `SdkException<WnbaV3ScoresBettingPlayerPropsByGameSportsbookGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### WnbaV3ScoresBoxScoreFinal
- **HTTP**: `GET /v3/wnba/scores/{format}/BoxScoreFinal/{gameid}` (Default (api))
- **Notes**: Full statistical information for a specified game, down to the team and player stat level, delivered after the game is complete.
- **Signature**: `WnbaV3ScoresBoxScoreFinal(Format format, string gameid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BoxScore6`
- **Error**: `SdkException<WnbaV3ScoresBoxScoreFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### WnbaV3ScoresBoxScoreLiveFinal
- **HTTP**: `GET /v3/wnba/scores/{format}/BoxScore/{gameid}` (Default (api))
- **Notes**: Full statistical information for a specified game, down to the team and player stat level, delivered live during the game, called per individual game.
- **Signature**: `WnbaV3ScoresBoxScoreLiveFinal(Format format, string gameid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BoxScore6`
- **Error**: `SdkException<WnbaV3ScoresBoxScoreLiveFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### WnbaV3ScoresBoxScoresByDateFinal
- **HTTP**: `GET /v3/wnba/scores/{format}/BoxScoresFinal/{date}` (Default (api))
- **Notes**: Full statistical information for a specified date for each game that took place, down to the team and player stat level, delivered after the game is complete.
- **Signature**: `WnbaV3ScoresBoxScoresByDateFinal(Format format, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<BoxScore6>`
- **Error**: `SdkException<WnbaV3ScoresBoxScoresByDateFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### WnbaV3ScoresBoxScoresByDateLiveFinal
- **HTTP**: `GET /v3/wnba/scores/{format}/BoxScores/{date}` (Default (api))
- **Notes**: Full statistical information for a specified game, down to the team and player stat level, delivered live during the games, called for all games on a given date.
- **Signature**: `WnbaV3ScoresBoxScoresByDateLiveFinal(Format format, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<BoxScore6>`
- **Error**: `SdkException<WnbaV3ScoresBoxScoresByDateLiveFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### WnbaV3ScoresGamesByDateFinal
- **HTTP**: `GET /v3/wnba/scores/{format}/GamesByDateFinal/{date}` (Default (api))
- **Notes**: Full scores and gameday info, as well as all of the quarter scores and full-time score, delivered as the game ends.
- **Signature**: `WnbaV3ScoresGamesByDateFinal(Format format, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Game10>`
- **Error**: `SdkException<WnbaV3ScoresGamesByDateFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### WnbaV3ScoresGamesByDateLiveFinal
- **HTTP**: `GET /v3/wnba/scores/{format}/GamesByDate/{date}` (Default (api))
- **Notes**: Full scores and gameday info delivered live and post-game. Live data includes half and score info. Gameday info includes TV channel etc
- **Signature**: `WnbaV3ScoresGamesByDateLiveFinal(Format format, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Game10>`
- **Error**: `SdkException<WnbaV3ScoresGamesByDateLiveFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### WnbaV3ScoresGamesBasicByDateFinal
- **HTTP**: `GET /v3/wnba/scores/{format}/ScoresBasicFinal/{date}` (Default (api))
- **Notes**: A slimmed-down score endpoint, giving just the quarter scores and final score, for simple applications.
- **Signature**: `WnbaV3ScoresGamesBasicByDateFinal(Format format, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<ScoreBasic7>`
- **Error**: `SdkException<WnbaV3ScoresGamesBasicByDateFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### WnbaV3ScoresGamesBasicByDateLiveFinal
- **HTTP**: `GET /v3/wnba/scores/{format}/ScoresBasic/{date}` (Default (api))
- **Notes**: A slimmed-down score endpoint, giving just the quarter scores and full gane score, for simple applications, updated live.
- **Signature**: `WnbaV3ScoresGamesBasicByDateLiveFinal(Format format, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<ScoreBasic7>`
- **Error**: `SdkException<WnbaV3ScoresGamesBasicByDateLiveFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### WnbaV3ScoresPlayerDetailsByActive
- **HTTP**: `GET /v3/wnba/scores/{format}/Players` (Default (api))
- **Notes**: Full player bio and details, including injury notes, for all active players.
- **Signature**: `WnbaV3ScoresPlayerDetailsByActive(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Player8>`
- **Error**: `SdkException<WnbaV3ScoresPlayerDetailsByActiveError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### WnbaV3ScoresPlayerDetailsByTeam
- **HTTP**: `GET /v3/wnba/scores/{format}/Players/{team}` (Default (api))
- **Notes**: Full player bio and details, including injury notes, for all available players by team.
- **Signature**: `WnbaV3ScoresPlayerDetailsByTeam(Format format, string team, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Player8>`
- **Error**: `SdkException<WnbaV3ScoresPlayerDetailsByTeamError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### WnbaV3ScoresPlayerSeasonStats
- **HTTP**: `GET /v3/wnba/scores/{format}/PlayerSeasonStats/{season}` (Default (api))
- **Notes**: Returns all season-long stats (i.e. the season total, not each individual game record) for all players for a given season.
- **Signature**: `WnbaV3ScoresPlayerSeasonStats(Format format, string season, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<PlayerSeason8>`
- **Error**: `SdkException<WnbaV3ScoresPlayerSeasonStatsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### WnbaV3ScoresPlayerSeasonStatsByTeam
- **HTTP**: `GET /v3/wnba/scores/{format}/PlayerSeasonStatsByTeam/{season}/{team}` (Default (api))
- **Notes**: Returns all season-long stats (i.e. the season total, not each individual game record) for all players for a given season on a given team.
- **Signature**: `WnbaV3ScoresPlayerSeasonStatsByTeam(Format format, string season, string team, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<PlayerSeason8>`
- **Error**: `SdkException<WnbaV3ScoresPlayerSeasonStatsByTeamError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### WnbaV3ScoresPreGameOddsByDate
- **HTTP**: `GET /v3/wnba/scores/{format}/GameOddsByDate/{date}` (Default (api))
- **Notes**: Returns full game odds (spread, moneyline, total) for games on a given date. Only returns the most recently seen odds, not inclusive of line movement.
- **Signature**: `WnbaV3ScoresPreGameOddsByDate(Format format, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<GameInfo4>`
- **Error**: `SdkException<WnbaV3ScoresPreGameOddsByDateError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### WnbaV3ScoresPreGameOddsLineMovement
- **HTTP**: `GET /v3/wnba/scores/{format}/GameOddsLineMovement/{gameid}` (Default (api))
- **Notes**: Returns the full-game odds (spread, moneyline, total) for games on a given date. Returns the full line movement for the given game. This endpoint has a longer cache as it is meant for historical data/line movement rather than the most up to the second line.
- **Signature**: `WnbaV3ScoresPreGameOddsLineMovement(Format format, string gameid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<GameInfo4>`
- **Error**: `SdkException<WnbaV3ScoresPreGameOddsLineMovementError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### WnbaV3ScoresSchedules
- **HTTP**: `GET /v3/wnba/scores/{format}/Games/{Season}` (Default (api))
- **Notes**: Home and away teams, date and time, season type and week etc. are included. Also includes gameday information. This includes full stadium information (capacity, lat/long, surface etc.), top-line betting information (spread, moneyline, total), and broadcast information.
- **Signature**: `WnbaV3ScoresSchedules(Format format, string season, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Game10>`
- **Error**: `SdkException<WnbaV3ScoresSchedulesError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### WnbaV3ScoresSchedulesBasic
- **HTTP**: `GET /v3/wnba/scores/{format}/SchedulesBasic/{Season}` (Default (api))
- **Notes**: A lightweight schedule endpoint without gameday information. Home and away teams, the date and time of the game, and season type, week etc. are included. Ideal for the most basic information required to build a schedule.
- **Signature**: `WnbaV3ScoresSchedulesBasic(Format format, string season, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<SchedulesBasic>`
- **Error**: `SdkException<WnbaV3ScoresSchedulesBasicError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### WnbaV3ScoresSeasonCurrent
- **HTTP**: `GET /v3/wnba/scores/{format}/CurrentSeason` (Default (api))
- **Notes**: Year of the current season. This value changes at the start of the new league year. For leagues that run over two years, this is the year the season starts, not ends.
- **Signature**: `WnbaV3ScoresSeasonCurrent(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Season7`
- **Error**: `SdkException<WnbaV3ScoresSeasonCurrentError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### WnbaV3ScoresSportsbooksByActive
- **HTTP**: `GET /v3/wnba/scores/{format}/ActiveSportsbooks` (Default (api))
- **Notes**: A list of all available sportsbooks with their associated unique IDs.
- **Signature**: `WnbaV3ScoresSportsbooksByActive(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Sportsbook>`
- **Error**: `SdkException<WnbaV3ScoresSportsbooksByActiveError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### WnbaV3ScoresStadiums
- **HTTP**: `GET /v3/wnba/scores/{format}/Stadiums` (Default (api))
- **Notes**: Returns all stadiums in the league with capacity, surface, latitude/longitude, city and state (and where applicable country.)
- **Signature**: `WnbaV3ScoresStadiums(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Stadium6>`
- **Error**: `SdkException<WnbaV3ScoresStadiumsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### WnbaV3ScoresStandings
- **HTTP**: `GET /v3/wnba/scores/{format}/Standings/{season}` (Default (api))
- **Notes**: Includes regular season standings in division and conference, from which postseason seeding can be derived.
- **Signature**: `WnbaV3ScoresStandings(Format format, string season, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<WnbaV3ScoresStandingsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### WnbaV3ScoresTeamGameStatsByDateFinal
- **HTTP**: `GET /v3/wnba/scores/{format}/TeamGameStatsByDateFinal/{date}` (Default (api))
- **Notes**: Returns the box score statistical record team-wide (aggregated from all players) for a games on a given date, delivered as each game concludes.
- **Signature**: `WnbaV3ScoresTeamGameStatsByDateFinal(Format format, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<TeamGame7>`
- **Error**: `SdkException<WnbaV3ScoresTeamGameStatsByDateFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### WnbaV3ScoresTeamGameStatsByDateLiveFinal
- **HTTP**: `GET /v3/wnba/scores/{format}/TeamGameStatsByDate/{date}` (Default (api))
- **Notes**: Returns the box score statistical record team-wide (aggregated from all players) for all games on a given date, both live and post-game.
- **Signature**: `WnbaV3ScoresTeamGameStatsByDateLiveFinal(Format format, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<TeamGame7>`
- **Error**: `SdkException<WnbaV3ScoresTeamGameStatsByDateLiveFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### WnbaV3ScoresTeamProfilesAll
- **HTTP**: `GET /v3/wnba/scores/{format}/Teams` (Default (api))
- **Notes**: Full team information: team name and city, conference and division, and colors. Also contains basic fantasy info such as IDs as well as full stadium data. This endpoint returns all teams regardless of current active status.
- **Signature**: `WnbaV3ScoresTeamProfilesAll(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Team8>`
- **Error**: `SdkException<WnbaV3ScoresTeamProfilesAllError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### WnbaV3ScoresTeamSeasonStats
- **HTTP**: `GET /v3/wnba/scores/{format}/TeamSeasonStats/{season}` (Default (api))
- **Notes**: Returns all season-long stats (i.e. the season total, not each individual game record) for all teams (aggregated from all players) for a given season.
- **Signature**: `WnbaV3ScoresTeamSeasonStats(Format format, string season, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<TeamSeason7>`
- **Error**: `SdkException<WnbaV3ScoresTeamSeasonStatsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
