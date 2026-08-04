# SoccerV4Odds — operations

Accessor: `client.SoccerV4Odds` · Source: `Api/SoccerV4Odds.cs` · 28 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### SoccerV4OddsBettingEventsByDate
- **HTTP**: `GET /v4/soccer/odds/{format}/BettingEventsByDate/{competition}/{date}` (Default (api))
- **Notes**: The list of current BettingEvents for the given date and competition, from which Betting Market data can be gathered via the Betting Markets by Event endpoint, for all available Betting Market types (e.g. Player Props, Team Props.)
- **Signature**: `SoccerV4OddsBettingEventsByDate(Format format, string competition, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<BettingEvent6>`
- **Error**: `SdkException<SoccerV4OddsBettingEventsByDateError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SoccerV4OddsBettingEventsBySeason
- **HTTP**: `GET /v4/soccer/odds/{format}/BettingEventsBySeason/{competition}/{season}` (Default (api))
- **Notes**: The list of current BettingEvents for the given season within a given competition, from which Betting Market data can be gathered via the Betting Markets by Event endpoint, for all available Betting Market types (e.g. Player Props, Team Props.)
- **Signature**: `SoccerV4OddsBettingEventsBySeason(Format format, string competition, string season, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<BettingEvent6>`
- **Error**: `SdkException<SoccerV4OddsBettingEventsBySeasonError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SoccerV4OddsBettingFuturesBySeason
- **HTTP**: `GET /v4/soccer/odds/{format}/BettingFuturesBySeason/{competition}/{season}` (Default (api))
- **Notes**: Returns available Futures markets for the given season and a given competition. Does not include line movement.
- **Signature**: `SoccerV4OddsBettingFuturesBySeason(Format format, string competition, string season, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<BettingEvent6>`
- **Error**: `SdkException<SoccerV4OddsBettingFuturesBySeasonError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SoccerV4OddsBettingFuturesBySeasonSportsbookGroup
- **HTTP**: `GET /v4/soccer/odds/{format}/BettingFuturesBySeason/{competition}/{season}/{sportsbookgroup}` (Default (api))
- **Notes**: Returns available Futures markets for the given season. Does not include line movement. A Sportsbook Group must be specified as a URL parameter.
- **Signature**: `SoccerV4OddsBettingFuturesBySeasonSportsbookGroup(Format format, string competition, string season, string sportsbookgroup, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<BettingEvent6>`
- **Error**: `SdkException<SoccerV4OddsBettingFuturesBySeasonSportsbookGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SoccerV4OddsBettingMarket
- **HTTP**: `GET /v4/soccer/odds/{format}/BettingMarket/{competition}/{marketId}` (Default (api))
- **Notes**: Returns full line movement for a given BettingMarket. Due to the sheer size of the output and the level of detail, it is intended for historical data purposes and not for the most up-to-the-second lines.
- **Signature**: `SoccerV4OddsBettingMarket(Format format, string competition, string marketId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BettingMarket4`
- **Error**: `SdkException<SoccerV4OddsBettingMarketError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SoccerV4OddsBettingMarketSportsbookGroup
- **HTTP**: `GET /v4/soccer/odds/{format}/BettingMarket/{competition}/{marketId}/{sportsbookgroup}` (Default (api))
- **Notes**: Returns full line movement for a given BettingMarket. Due to the sheer size of the output and the level of detail, it is intended for historical data purposes and not for the most up-to-the-second lines. A Sportsbook Group must be specified as a URL parameter.
- **Signature**: `SoccerV4OddsBettingMarketSportsbookGroup(Format format, string competition, string marketId, string sportsbookgroup, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BettingMarket4`
- **Error**: `SdkException<SoccerV4OddsBettingMarketSportsbookGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SoccerV4OddsBettingMarketsByEvent
- **HTTP**: `GET /v4/soccer/odds/{format}/BettingMarkets/{competition}/{eventId}` (Default (api))
- **Notes**: Returns the markets of all available types (e.g. Player Props, Team Props) and available outcomes for a given BettingEventID within a given competition.
- **Signature**: `SoccerV4OddsBettingMarketsByEvent(Format format, string competition, string eventId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<BettingMarket4>`
- **Error**: `SdkException<SoccerV4OddsBettingMarketsByEventError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SoccerV4OddsBettingMarketsByEventSportsbookGroup
- **HTTP**: `GET /v4/soccer/odds/{format}/BettingMarketsByEvent/{competition}/{eventId}/{sportsbookgroup}` (Default (api))
- **Notes**: Returns the markets and available outcomes for a given BettingEventID. A Sportsbook Group must be specified as a URL parameter.
- **Signature**: `SoccerV4OddsBettingMarketsByEventSportsbookGroup(Format format, string competition, string eventId, string sportsbookgroup, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<BettingMarket4>`
- **Error**: `SdkException<SoccerV4OddsBettingMarketsByEventSportsbookGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SoccerV4OddsBettingMarketsByGame
- **HTTP**: `GET /v4/soccer/odds/{format}/BettingMarketsByGameID/{competition}/{gameid}` (Default (api))
- **Notes**: Returns the markets of all available types (e.g. Player Props, Team Props) and available outcomes for a given GameID within a given competition.
- **Signature**: `SoccerV4OddsBettingMarketsByGame(Format format, string competition, string gameid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<BettingMarket4>`
- **Error**: `SdkException<SoccerV4OddsBettingMarketsByGameError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SoccerV4OddsBettingMarketsByGameSportsbookGroup
- **HTTP**: `GET /v4/soccer/odds/{format}/BettingMarketsByGameID/{competition}/{gameid}/{sportsbookgroup}` (Default (api))
- **Notes**: Returns the markets of all available types (e.g. Player Props, Team Props) and available outcomes for a given GameID in a competition. A Sportsbook Group must be specified as a URL parameter.
- **Signature**: `SoccerV4OddsBettingMarketsByGameSportsbookGroup(Format format, string competition, string gameid, string sportsbookgroup, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<BettingMarket4>`
- **Error**: `SdkException<SoccerV4OddsBettingMarketsByGameSportsbookGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SoccerV4OddsBettingMarketsByMarketType
- **HTTP**: `GET /v4/soccer/odds/{format}/BettingMarketsByMarketType/{competition}/{eventId}/{marketTypeID}` (Default (api))
- **Notes**: Returns Markets and available outcomes for a given event (within a competition) and market type requested. A lighter call than by BettingEventID as it only includes markets tagged with the specific MarketType, a full list of which is available for each sport in its Betting Metadata endpoint.
- **Signature**: `SoccerV4OddsBettingMarketsByMarketType(Format format, string competition, string eventId, string marketTypeId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<BettingMarket4>`
- **Error**: `SdkException<SoccerV4OddsBettingMarketsByMarketTypeError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SoccerV4OddsBettingMarketsByMarketTypeSportsbookGroup
- **HTTP**: `GET /v4/soccer/odds/{format}/BettingMarketsByMarketType/{competition}/{eventId}/{marketTypeID}/{sportsbookgroup}` (Default (api))
- **Notes**: Returns Markets and available outcomes for a given event and market type requested. A lighter call than by BettingEventID as it only includes markets tagged with the specific MarketType, a full list of which is available for each sport in its Betting Metadata endpoint. A Sportsbook Group must be specified as a URL parameter.
- **Signature**: `SoccerV4OddsBettingMarketsByMarketTypeSportsbookGroup(Format format, string competition, string eventId, string marketTypeId, string sportsbookgroup, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<BettingMarket4>`
- **Error**: `SdkException<SoccerV4OddsBettingMarketsByMarketTypeSportsbookGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SoccerV4OddsBettingMetadata
- **HTTP**: `GET /v4/soccer/odds/{format}/BettingMetadata` (Default (api))
- **Notes**: Returns the list of MarketTypes, BetTypes, PeriodTypes, OutcomeTypes, and ResultTypes to map the IDs to descriptive names. Also includes a list of the MarketType, BetType &amp; PeriodType combinations which we will have resulting for.
- **Signature**: `SoccerV4OddsBettingMetadata(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BettingEntityMetadataCollection1`
- **Error**: `SdkException<SoccerV4OddsBettingMetadataError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SoccerV4OddsBettingPlayerPropsByGame
- **HTTP**: `GET /v4/soccer/odds/{format}/BettingPlayerPropsByGameID/{competition}/{gameId}` (Default (api))
- **Notes**: This works in the same way as Betting Markets by Market Type but is prefiltered to the Player Props type only. Ideal if your application will only ever require Player Props, but if you also want Team Props etc. it is recommended to use the by Market Type endpoint.
- **Signature**: `SoccerV4OddsBettingPlayerPropsByGame(Format format, string competition, string gameId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<BettingMarket4>`
- **Error**: `SdkException<SoccerV4OddsBettingPlayerPropsByGameError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SoccerV4OddsBettingPlayerPropsByGameSportsbookGroup
- **HTTP**: `GET /v4/soccer/odds/{format}/BettingPlayerPropsByGameID/{competition}/{gameId}/{sportsbookgroup}` (Default (api))
- **Notes**: This works in the same way as Betting Markets by Market Type but is prefiltered to the Player Props type only. Ideal if your application will only ever require Player Props, but if you also want Team Props etc. it is recommended to use the by Market Type endpoint. A Sportsbook Group must be specified as a URL parameter.
- **Signature**: `SoccerV4OddsBettingPlayerPropsByGameSportsbookGroup(Format format, string competition, string gameId, string sportsbookgroup, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<BettingMarket4>`
- **Error**: `SdkException<SoccerV4OddsBettingPlayerPropsByGameSportsbookGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SoccerV4OddsInGameOddsByDate
- **HTTP**: `GET /v4/soccer/odds/{format}/LiveGameOddsByDate/{competition}/{date}` (Default (api))
- **Notes**: Returns in-play game odds (spread, moneyline, total) for games on a given date in a given competition. Only returns the most recently seen odds, not inclusive of line movement. As this is in-game, it will only return results while the game is in progress.
- **Signature**: `SoccerV4OddsInGameOddsByDate(Format format, string competition, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<GameInfo3>`
- **Error**: `SdkException<SoccerV4OddsInGameOddsByDateError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SoccerV4OddsInGameOddsByDateSportsbookGroup
- **HTTP**: `GET /v4/soccer/odds/{format}/InGameOddsByDate/{competition}/{date}/{sportsbookgroup}` (Default (api))
- **Notes**: Returns in-play game odds (spread, moneyline, total) for games on a given date and competition. Only returns the most recently seen odds, not inclusive of line movement. As this is in-game, it will only return results while the game is in progress. A Sportsbook Group must be specified as a URL parameter.
- **Signature**: `SoccerV4OddsInGameOddsByDateSportsbookGroup(Format format, string competition, string date, string sportsbookgroup, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<GameInfo3>`
- **Error**: `SdkException<SoccerV4OddsInGameOddsByDateSportsbookGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SoccerV4OddsInGameOddsLineMovement
- **HTTP**: `GET /v4/soccer/odds/{format}/LiveGameOddsLineMovement/{competition}/{gameid}` (Default (api))
- **Notes**: Returns in-play game odds (spread, moneyline, total) for a given game in a given competition. Returns the full line movement for the given game. This endpoint has a longer cache as it is meant for historical data/line movement rather than the most up to the second line.
- **Signature**: `SoccerV4OddsInGameOddsLineMovement(Format format, string competition, string gameid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<GameInfo3>`
- **Error**: `SdkException<SoccerV4OddsInGameOddsLineMovementError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SoccerV4OddsInGameOddsLineMovementSportsbookGroup
- **HTTP**: `GET /v4/soccer/odds/{format}/InGameOddsLineMovement/{competition}/{gameid}/{sportsbookgroup}` (Default (api))
- **Notes**: Returns in-play game odds (spread, moneyline, total) for a given game and competition. Returns the full line movement for the given game. This endpoint has a longer cache as it is meant for historical data/line movement rather than the most up to the second line. A Sportsbook Group must be specified as a URL parameter.
- **Signature**: `SoccerV4OddsInGameOddsLineMovementSportsbookGroup(Format format, string competition, string gameid, string sportsbookgroup, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<GameInfo3>`
- **Error**: `SdkException<SoccerV4OddsInGameOddsLineMovementSportsbookGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SoccerV4OddsInGameOddsLineMovementWithResultingSportsbookGroup
- **HTTP**: `GET /v4/soccer/odds/{format}/InGameOddsLineMovementWithResulting/{competition}/{gameid}/{sportsbookgroup}` (Default (api))
- **Notes**: Returns in-play game odds (spread, moneyline, total) for a given game in a competition. This also includes Resulting: for markets with a ResultType, each line will be graded and it will be determined whether the bet would have won or lost. Returns the full line movement for the given game. This endpoint has a longer cache as it is meant for historical data/line movement rather than the most up to the second line. A Sportsbook Group must be specified as a URL parameter.
- **Signature**: `SoccerV4OddsInGameOddsLineMovementWithResultingSportsbookGroup(Format format, string competition, string gameid, string sportsbookgroup, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<GameInfoResult6>`
- **Error**: `SdkException<SoccerV4OddsInGameOddsLineMovementWithResultingSportsbookGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SoccerV4OddsPeriodGameOddsByDate
- **HTTP**: `GET /v4/soccer/odds/{format}/AlternateMarketGameOddsByDate/{competition}/{date}` (Default (api))
- **Notes**: Returns the non-full-game odds (spread, moneyline, total) for games on a given date in a given competition. Non-full-game means 1st-half or 1st-quarter, for example, rather than full game. Only returns the most recently seen odds, not inclusive of line movement.
- **Signature**: `SoccerV4OddsPeriodGameOddsByDate(Format format, string competition, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<GameInfo3>`
- **Error**: `SdkException<SoccerV4OddsPeriodGameOddsByDateError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SoccerV4OddsPeriodGameOddsLineMovement
- **HTTP**: `GET /v4/soccer/odds/{format}/AlternateMarketGameOddsLineMovement/{competition}/{gameid}` (Default (api))
- **Notes**: Returns the non-full-game odds (spread, moneyline, total) for games on a given date. Non-full-game means 1st-half or 1st-quarter, for example, rather than full game. Returns the full line movement for the given game within a competition. This endpoint has a longer cache as it is meant for historical data/line movement rather than the most up to the second line.
- **Signature**: `SoccerV4OddsPeriodGameOddsLineMovement(Format format, string competition, string gameid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<GameInfo3>`
- **Error**: `SdkException<SoccerV4OddsPeriodGameOddsLineMovementError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SoccerV4OddsPreGameAndPeriodGameOddsByDateSportsbookGroup
- **HTTP**: `GET /v4/soccer/odds/{format}/PreGameOddsByDate/{competition}/{date}/{sportsbookgroup}` (Default (api))
- **Notes**: Returns the full-game and non-full-game odds (spread, moneyline, total) for games on a given date for a given competition. Only returns the most recently seen odds, not inclusive of line movement. A Sportsbook Group must be specified as a URL parameter.
- **Signature**: `SoccerV4OddsPreGameAndPeriodGameOddsByDateSportsbookGroup(Format format, string competition, string date, string sportsbookgroup, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<GameInfo3>`
- **Error**: `SdkException<SoccerV4OddsPreGameAndPeriodGameOddsByDateSportsbookGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SoccerV4OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroup
- **HTTP**: `GET /v4/soccer/odds/{format}/PreGameOddsLineMovement/{competition}/{gameid}/{sportsbookgroup}` (Default (api))
- **Notes**: Returns the game odds for a given game in a given competition. In this endpoint both full-game and partial-game odds are included. Returns the full line movement for the given game. This endpoint has a longer cache as it is meant for historical data/line movement rather than the most up to the second line. A Sportsbook Group must be specified as a URL parameter.
- **Signature**: `SoccerV4OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroup(Format format, string competition, string gameid, string sportsbookgroup, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<GameInfo3>`
- **Error**: `SdkException<SoccerV4OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SoccerV4OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroup
- **HTTP**: `GET /v4/soccer/odds/{format}/PreGameOddsLineMovementWithResulting/{competition}/{gameid}/{sportsbookgroup}` (Default (api))
- **Notes**: Returns the game odds for a given game and competition. In this endpoint both full-game and partial-game odds are included. This also includes Resulting: for markets with a ResultType, each line will be graded and it will be determined whether the bet would have won or lost. Returns the full line movement for the given game. This endpoint has a longer cache as it is meant for historical data/line movement rather than the most up to the second line. A Sportsbook Group must be specified as a URL parameter.
- **Signature**: `SoccerV4OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroup(Format format, string competition, string gameid, string sportsbookgroup, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<GameInfoResult6>`
- **Error**: `SdkException<SoccerV4OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SoccerV4OddsPreGameOddsByDate
- **HTTP**: `GET /v4/soccer/odds/{format}/GameOddsByDate/{competition}/{date}` (Default (api))
- **Notes**: Returns full game odds (spread, moneyline, total) for games from a given competition on a given date. Only returns the most recently seen odds, not inclusive of line movement.
- **Signature**: `SoccerV4OddsPreGameOddsByDate(Format format, string competition, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<GameInfo3>`
- **Error**: `SdkException<SoccerV4OddsPreGameOddsByDateError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SoccerV4OddsPreGameOddsLineMovement
- **HTTP**: `GET /v4/soccer/odds/{format}/GameOddsLineMovement/{competition}/{gameid}` (Default (api))
- **Notes**: Returns the non-full-game odds (spread, moneyline, total) for games on a given date. Non-full-game means 1st-half or 1st-quarter, for example, rather than full game. Returns the full line movement for the given game within a competition. This endpoint has a longer cache as it is meant for historical data/line movement rather than the most up to the second line.
- **Signature**: `SoccerV4OddsPreGameOddsLineMovement(Format format, string competition, string gameid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<GameInfo3>`
- **Error**: `SdkException<SoccerV4OddsPreGameOddsLineMovementError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SoccerV4OddsSportsbooksByActive
- **HTTP**: `GET /v4/soccer/odds/{format}/ActiveSportsbooks` (Default (api))
- **Notes**: A list of all available sportsbooks with their associated unique IDs.
- **Signature**: `SoccerV4OddsSportsbooksByActive(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Sportsbook>`
- **Error**: `SdkException<SoccerV4OddsSportsbooksByActiveError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
