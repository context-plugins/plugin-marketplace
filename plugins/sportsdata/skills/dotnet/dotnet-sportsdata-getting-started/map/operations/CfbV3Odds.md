# CfbV3Odds — operations

Accessor: `client.CfbV3Odds` · Source: `Api/CfbV3Odds.cs` · 34 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CfbV3OddsBettingEventsByDate
- **HTTP**: `GET /v3/cfb/odds/{format}/BettingEventsByDate/{date}` (Default (api))
- **Notes**: The list of current BettingEvents for the given date, from which Betting Market data can be gathered via the Betting Markets by Event endpoint, for all available Betting Market types (e.g. Player Props, Team Props.)
- **Signature**: `CfbV3OddsBettingEventsByDate(Format format, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<BettingEvent>`
- **Error**: `SdkException<CfbV3OddsBettingEventsByDateError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CfbV3OddsBettingEventsBySeason
- **HTTP**: `GET /v3/cfb/odds/{format}/BettingEvents/{season}` (Default (api))
- **Notes**: The list of current BettingEvents for the given season, from which Betting Market data can be gathered via the Betting Markets by Event endpoint, for all available Betting Market types (e.g. Player Props, Team Props.)
- **Signature**: `CfbV3OddsBettingEventsBySeason(Format format, string season, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<BettingEvent>`
- **Error**: `SdkException<CfbV3OddsBettingEventsBySeasonError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CfbV3OddsBettingFuturesBySeason
- **HTTP**: `GET /v3/cfb/odds/{format}/BettingFuturesBySeason/{season}` (Default (api))
- **Notes**: Returns available Futures markets for the given season. Does not include line movement.
- **Signature**: `CfbV3OddsBettingFuturesBySeason(Format format, string season, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<BettingEvent>`
- **Error**: `SdkException<CfbV3OddsBettingFuturesBySeasonError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CfbV3OddsBettingFuturesBySeasonSportsbookGroup
- **HTTP**: `GET /v3/cfb/odds/{format}/BettingFuturesBySeason/{season}/{sportsbookgroup}` (Default (api))
- **Notes**: Returns available Futures markets for the given season. Does not include line movement. A Sportsbook Group must be specified as a URL parameter.
- **Signature**: `CfbV3OddsBettingFuturesBySeasonSportsbookGroup(Format format, string season, string sportsbookgroup, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<BettingEvent>`
- **Error**: `SdkException<CfbV3OddsBettingFuturesBySeasonSportsbookGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CfbV3OddsBettingMarket
- **HTTP**: `GET /v3/cfb/odds/{format}/BettingMarket/{marketId}` (Default (api))
- **Notes**: Returns full line movement for a given BettingMarket. Due to the sheer size of the output and the level of detail, it is intended for historical data purposes and not for the most up-to-the-second lines.
- **Signature**: `CfbV3OddsBettingMarket(Format format, string marketId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BettingMarket`
- **Error**: `SdkException<CfbV3OddsBettingMarketError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CfbV3OddsBettingMarketSportsbookGroup
- **HTTP**: `GET /v3/cfb/odds/{format}/BettingMarket/{marketId}/{sportsbookgroup}` (Default (api))
- **Notes**: Returns full line movement for a given BettingMarket. Due to the sheer size of the output and the level of detail, it is intended for historical data purposes and not for the most up-to-the-second lines. A Sportsbook Group must be specified as a URL parameter.
- **Signature**: `CfbV3OddsBettingMarketSportsbookGroup(Format format, string marketId, string sportsbookgroup, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BettingMarket`
- **Error**: `SdkException<CfbV3OddsBettingMarketSportsbookGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CfbV3OddsBettingMarketsByEvent
- **HTTP**: `GET /v3/cfb/odds/{format}/BettingMarkets/{eventId}` (Default (api))
- **Notes**: Returns the markets of all available types (e.g. Player Props, Team Props) and available outcomes for a given BettingEventID.
- **Signature**: `CfbV3OddsBettingMarketsByEvent(Format format, string eventId, Include? include, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `include` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `include` ← `include`
- **Returns**: `IReadOnlyList<BettingMarket>`
- **Error**: `SdkException<CfbV3OddsBettingMarketsByEventError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CfbV3OddsBettingMarketsByEventSportsbookGroup
- **HTTP**: `GET /v3/cfb/odds/{format}/BettingMarketsByEvent/{eventId}/{sportsbookgroup}` (Default (api))
- **Notes**: Returns the markets and available outcomes for a given BettingEventID. A Sportsbook Group must be specified as a URL parameter.
- **Signature**: `CfbV3OddsBettingMarketsByEventSportsbookGroup(Format format, string eventId, string sportsbookgroup, Include? include, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `include` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `include` ← `include`
- **Returns**: `IReadOnlyList<BettingMarket>`
- **Error**: `SdkException<CfbV3OddsBettingMarketsByEventSportsbookGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CfbV3OddsBettingMarketsByGame
- **HTTP**: `GET /v3/cfb/odds/{format}/BettingMarketsByGameID/{gameid}` (Default (api))
- **Notes**: Returns the markets of all available types (e.g. Player Props, Team Props) and available outcomes for a given GameID.
- **Signature**: `CfbV3OddsBettingMarketsByGame(Format format, string gameid, Include? include, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `include` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `include` ← `include`
- **Returns**: `IReadOnlyList<BettingMarket>`
- **Error**: `SdkException<CfbV3OddsBettingMarketsByGameError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CfbV3OddsBettingMarketsByGameSportsbookGroup
- **HTTP**: `GET /v3/cfb/odds/{format}/BettingMarketsByGameID/{gameid}/{sportsbookgroup}` (Default (api))
- **Notes**: Returns the markets of all available types (e.g. Player Props, Team Props) and available outcomes for a given GameID. A Sportsbook Group must be specified as a URL parameter.
- **Signature**: `CfbV3OddsBettingMarketsByGameSportsbookGroup(Format format, string gameid, string sportsbookgroup, Include? include, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `include` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `include` ← `include`
- **Returns**: `IReadOnlyList<BettingMarket>`
- **Error**: `SdkException<CfbV3OddsBettingMarketsByGameSportsbookGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CfbV3OddsBettingMarketsByMarketType
- **HTTP**: `GET /v3/cfb/odds/{format}/BettingMarketsByMarketType/{eventId}/{marketTypeID}` (Default (api))
- **Notes**: Returns Markets and available outcomes for a given event and market type requested. A lighter call than by BettingEventID as it only includes markets tagged with the specific MarketType, a full list of which is available for each sport in its Betting Metadata endpoint.
- **Signature**: `CfbV3OddsBettingMarketsByMarketType(Format format, string eventId, string marketTypeId, Include? include, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `include` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `include` ← `include`
- **Returns**: `IReadOnlyList<BettingMarket>`
- **Error**: `SdkException<CfbV3OddsBettingMarketsByMarketTypeError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CfbV3OddsBettingMarketsByMarketTypeSportsbookGroup
- **HTTP**: `GET /v3/cfb/odds/{format}/BettingMarketsByMarketType/{eventId}/{marketTypeID}/{sportsbookgroup}` (Default (api))
- **Notes**: Returns Markets and available outcomes for a given event and market type requested. A lighter call than by BettingEventID as it only includes markets tagged with the specific MarketType, a full list of which is available for each sport in its Betting Metadata endpoint. A Sportsbook Group must be specified as a URL parameter.
- **Signature**: `CfbV3OddsBettingMarketsByMarketTypeSportsbookGroup(Format format, string eventId, string marketTypeId, string sportsbookgroup, Include? include, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `include` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `include` ← `include`
- **Returns**: `IReadOnlyList<BettingMarket>`
- **Error**: `SdkException<CfbV3OddsBettingMarketsByMarketTypeSportsbookGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CfbV3OddsBettingMetadata
- **HTTP**: `GET /v3/cfb/odds/{format}/BettingMetadata` (Default (api))
- **Notes**: Returns the list of MarketTypes, BetTypes, PeriodTypes, OutcomeTypes, and ResultTypes to map the IDs to descriptive names. Also includes a list of the MarketType, BetType &amp; PeriodType combinations which we will have resulting for.
- **Signature**: `CfbV3OddsBettingMetadata(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BettingEntityMetadataCollection`
- **Error**: `SdkException<CfbV3OddsBettingMetadataError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CfbV3OddsBettingPlayerPropsByGame
- **HTTP**: `GET /v3/cfb/odds/{format}/BettingPlayerPropsByGameID/{gameId}` (Default (api))
- **Notes**: This works in the same way as Betting Markets by Market Type but is prefiltered to the Player Props type only. Ideal if your application will only ever require Player Props, but if you also want Team Props etc. it is recommended to use the by Market Type endpoint.
- **Signature**: `CfbV3OddsBettingPlayerPropsByGame(Format format, string gameId, Include? include, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `include` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `include` ← `include`
- **Returns**: `IReadOnlyList<BettingMarket>`
- **Error**: `SdkException<CfbV3OddsBettingPlayerPropsByGameError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CfbV3OddsBettingPlayerPropsByGameSportsbookGroup
- **HTTP**: `GET /v3/cfb/odds/{format}/BettingPlayerPropsByGameID/{gameId}/{sportsbookgroup}` (Default (api))
- **Notes**: This works in the same way as Betting Markets by Market Type but is prefiltered to the Player Props type only. Ideal if your application will only ever require Player Props, but if you also want Team Props etc. it is recommended to use the by Market Type endpoint. A Sportsbook Group must be specified as a URL parameter.
- **Signature**: `CfbV3OddsBettingPlayerPropsByGameSportsbookGroup(Format format, string gameId, string sportsbookgroup, Include? include, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `include` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `include` ← `include`
- **Returns**: `IReadOnlyList<BettingMarket>`
- **Error**: `SdkException<CfbV3OddsBettingPlayerPropsByGameSportsbookGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CfbV3OddsBettingResultsByMarket
- **HTTP**: `GET /v3/cfb/odds/{format}/BettingMarketResults/{marketId}` (Default (api))
- **Notes**: Provide a market ID that supports resulting (i.e. has a ResultType) and this endpoint will return a result: for markets with a ResultType, each line will be graded and it will be determined whether the bet would have won or lost.
- **Signature**: `CfbV3OddsBettingResultsByMarket(Format format, string marketId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BettingMarketResult`
- **Error**: `SdkException<CfbV3OddsBettingResultsByMarketError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CfbV3OddsBettingResultsByMarketSportsbookGroup
- **HTTP**: `GET /v3/cfb/odds/{format}/BettingResultsByMarket/{marketId}/{sportsbookgroup}` (Default (api))
- **Notes**: Provide a market ID that supports resulting (i.e. has a ResultType) and this endpoint will return a result: for markets with a ResultType, each line will be graded and it will be determined whether the bet would have won or lost. A Sportsbook Group must be specified as a URL parameter.
- **Signature**: `CfbV3OddsBettingResultsByMarketSportsbookGroup(Format format, string marketId, string sportsbookgroup, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BettingMarketResult`
- **Error**: `SdkException<CfbV3OddsBettingResultsByMarketSportsbookGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CfbV3OddsBettingSplitsByBettingMarket
- **HTTP**: `GET /v3/cfb/odds/{format}/BettingSplitsByMarketId/{marketId}` (Default (api))
- **Notes**: List of Money and Bet Percentage splits for each outcome type available in this market. This specific endpoint will return the movement from this market as well as the most recent.
- **Signature**: `CfbV3OddsBettingSplitsByBettingMarket(Format format, string marketId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BettingMarketSplit`
- **Error**: `SdkException<CfbV3OddsBettingSplitsByBettingMarketError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CfbV3OddsBettingSplitsByGame
- **HTTP**: `GET /v3/cfb/odds/{format}/BettingSplitsByGameId/{gameid}` (Default (api))
- **Notes**: List of Money and Bet Percentage splits for each market and their respective outcome types available in this game. This specific endpoint will return current splits for each available market and no line movement.
- **Signature**: `CfbV3OddsBettingSplitsByGame(Format format, string gameid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `GameBettingSplit1`
- **Error**: `SdkException<CfbV3OddsBettingSplitsByGameError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CfbV3OddsBettingTrendsByMatchup
- **HTTP**: `GET /v3/cfb/odds/{format}/MatchupTrends/{team}/{opponent}` (Default (api))
- **Notes**: Returns trends data for a given pairing of teams. Will return data even if the teams are not set to play this season. Intended for use on a specific game, though it will work for other comparisons if applicable.
- **Signature**: `CfbV3OddsBettingTrendsByMatchup(Format format, string team, string opponent, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `MatchupTrends`
- **Error**: `SdkException<CfbV3OddsBettingTrendsByMatchupError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CfbV3OddsBettingTrendsByTeam
- **HTTP**: `GET /v3/cfb/odds/{format}/TeamTrends/{team}` (Default (api))
- **Notes**: Describes recent team trends and performance against betting data in recent sets of games.
- **Signature**: `CfbV3OddsBettingTrendsByTeam(Format format, string team, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TeamTrends`
- **Error**: `SdkException<CfbV3OddsBettingTrendsByTeamError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CfbV3OddsInGameOddsByWeek
- **HTTP**: `GET /v3/cfb/odds/{format}/LiveGameOddsByWeek/{season}/{week}` (Default (api))
- **Notes**: Returns in-play game odds (spread, moneyline, total) for games in a given week and season. Only returns the most recently seen odds, not inclusive of line movement. As this is in-game, it will only return results while the game is in progress.
- **Signature**: `CfbV3OddsInGameOddsByWeek(Format format, string season, string week, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<GameInfo1>`
- **Error**: `SdkException<CfbV3OddsInGameOddsByWeekError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CfbV3OddsInGameOddsByWeekSportsbookGroup
- **HTTP**: `GET /v3/cfb/odds/{format}/InGameOddsByWeek/{season}/{week}/{sportsbookgroup}` (Default (api))
- **Notes**: Returns in-play game odds (spread, moneyline, total) for games in a given week and season. Only returns the most recently seen odds, not inclusive of line movement. As this is in-game, it will only return results while the game is in progress. A Sportsbook Group must be specified as a URL parameter.
- **Signature**: `CfbV3OddsInGameOddsByWeekSportsbookGroup(Format format, string season, string week, string sportsbookgroup, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<GameInfo1>`
- **Error**: `SdkException<CfbV3OddsInGameOddsByWeekSportsbookGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CfbV3OddsInGameOddsLineMovement
- **HTTP**: `GET /v3/cfb/odds/{format}/LiveGameOddsLineMovement/{gameid}` (Default (api))
- **Notes**: Returns in-play game odds (spread, moneyline, total) for games in a given week and season. Returns the full line movement for the given game. This endpoint has a longer cache as it is meant for historical data/line movement rather than the most up to the second line.
- **Signature**: `CfbV3OddsInGameOddsLineMovement(Format format, string gameid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<GameInfo1>`
- **Error**: `SdkException<CfbV3OddsInGameOddsLineMovementError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CfbV3OddsInGameOddsLineMovementSportsbookGroup
- **HTTP**: `GET /v3/cfb/odds/{format}/InGameLineMovement/{gameid}/{sportsbookgroup}` (Default (api))
- **Notes**: Returns in-play game odds (spread, moneyline, total) for games in a given week and season. Returns the full line movement for the given game. This endpoint has a longer cache as it is meant for historical data/line movement rather than the most up to the second line. A Sportsbook Group must be specified as a URL parameter.
- **Signature**: `CfbV3OddsInGameOddsLineMovementSportsbookGroup(Format format, string gameid, string sportsbookgroup, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<GameInfo1>`
- **Error**: `SdkException<CfbV3OddsInGameOddsLineMovementSportsbookGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CfbV3OddsInGameOddsLineMovementWithResultingSportsbookGroup
- **HTTP**: `GET /v3/cfb/odds/{format}/InGameLineMovementWithResulting/{gameid}/{sportsbookgroup}` (Default (api))
- **Notes**: Returns in-play game odds (spread, moneyline, total) for games in a given week and season. This also includes Resulting: for markets with a ResultType, each line will be graded and it will be determined whether the bet would have won or lost. Returns the full line movement for the given game. This endpoint has a longer cache as it is meant for historical data/line movement rather than the most up to the second line. A Sportsbook Group must be specified as a URL parameter.
- **Signature**: `CfbV3OddsInGameOddsLineMovementWithResultingSportsbookGroup(Format format, string gameid, string sportsbookgroup, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<GameInfoResult1>`
- **Error**: `SdkException<CfbV3OddsInGameOddsLineMovementWithResultingSportsbookGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CfbV3OddsPeriodGameOddsByWeek
- **HTTP**: `GET /v3/cfb/odds/{format}/AlternateMarketGameOddsByWeek/{season}/{week}` (Default (api))
- **Notes**: Returns the non-full-game odds (spread, moneyline, total) for games in a given week and season. Non-full-game means 1st-half or 1st-quarter, for example, rather than full game. Only returns the most recently seen odds, not inclusive of line movement.
- **Signature**: `CfbV3OddsPeriodGameOddsByWeek(Format format, string season, string week, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<GameInfo1>`
- **Error**: `SdkException<CfbV3OddsPeriodGameOddsByWeekError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CfbV3OddsPeriodGameOddsLineMovement
- **HTTP**: `GET /v3/cfb/odds/{format}/AlternateMarketGameOddsLineMovement/{gameid}` (Default (api))
- **Notes**: Returns the non-full-game odds (spread, moneyline, total) for games in a given week and season. Non-full-game means 1st-half or 1st-quarter, for example, rather than full game. Returns the full line movement for the given game. This endpoint has a longer cache as it is meant for historical data/line movement rather than the most up to the second line.
- **Signature**: `CfbV3OddsPeriodGameOddsLineMovement(Format format, string gameid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<GameInfo1>`
- **Error**: `SdkException<CfbV3OddsPeriodGameOddsLineMovementError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CfbV3OddsPreGameAndPeriodGameOddsByWeekSportsbookGroup
- **HTTP**: `GET /v3/cfb/odds/{format}/PreGameOddsByWeek/{season}/{week}/{sportsbookgroup}` (Default (api))
- **Notes**: Returns the full-game and non-full-game odds (spread, moneyline, total) for games in a given week and season. Only returns the most recently seen odds, not inclusive of line movement. A Sportsbook Group must be specified as a URL parameter.
- **Signature**: `CfbV3OddsPreGameAndPeriodGameOddsByWeekSportsbookGroup(Format format, string season, string week, string sportsbookgroup, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<GameInfo1>`
- **Error**: `SdkException<CfbV3OddsPreGameAndPeriodGameOddsByWeekSportsbookGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CfbV3OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroup
- **HTTP**: `GET /v3/cfb/odds/{format}/PreGameOddsLineMovement/{gameid}/{sportsbookgroup}` (Default (api))
- **Notes**: Returns the game odds ( for games in a given week and season. In this endpoint both full-game and partial-game odds are included. Returns the full line movement for the given game. This endpoint has a longer cache as it is meant for historical data/line movement rather than the most up to the second line. A Sportsbook Group must be specified as a URL parameter.
- **Signature**: `CfbV3OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroup(Format format, string gameid, string sportsbookgroup, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<GameInfo1>`
- **Error**: `SdkException<CfbV3OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CfbV3OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroup
- **HTTP**: `GET /v3/cfb/odds/{format}/PreGameOddsLineMovementWithResulting/{gameid}/{sportsbookgroup}` (Default (api))
- **Notes**: Returns the game odds ( for games in a given week and season. In this endpoint both full-game and partial-game odds are included. This also includes Resulting: for markets with a ResultType, each line will be graded and it will be determined whether the bet would have won or lost. Returns the full line movement for the given game. This endpoint has a longer cache as it is meant for historical data/line movement rather than the most up to the second line. A Sportsbook Group must be specified as a URL parameter.
- **Signature**: `CfbV3OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroup(Format format, string gameid, string sportsbookgroup, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<GameInfoResult1>`
- **Error**: `SdkException<CfbV3OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CfbV3OddsPreGameOddsByWeek
- **HTTP**: `GET /v3/cfb/odds/{format}/GameOddsByWeek/{season}/{week}` (Default (api))
- **Notes**: Returns full game odds (spread, moneyline, total) for games in a given week and season. Only returns the most recently seen odds, not inclusive of line movement.
- **Signature**: `CfbV3OddsPreGameOddsByWeek(Format format, string season, string week, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<GameInfo1>`
- **Error**: `SdkException<CfbV3OddsPreGameOddsByWeekError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CfbV3OddsPreGameOddsLineMovement
- **HTTP**: `GET /v3/cfb/odds/{format}/GameOddsLineMovement/{gameid}` (Default (api))
- **Notes**: Returns the non-full-game odds (spread, moneyline, total) for games in a given week and season. Non-full-game means 1st-half or 1st-quarter, for example, rather than full game. Returns the full line movement for the given game. This endpoint has a longer cache as it is meant for historical data/line movement rather than the most up to the second line.
- **Signature**: `CfbV3OddsPreGameOddsLineMovement(Format format, string gameid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<GameInfo1>`
- **Error**: `SdkException<CfbV3OddsPreGameOddsLineMovementError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CfbV3OddsSportsbooksByActive
- **HTTP**: `GET /v3/cfb/odds/{format}/ActiveSportsbooks` (Default (api))
- **Notes**: A list of all available sportsbooks with their associated unique IDs.
- **Signature**: `CfbV3OddsSportsbooksByActive(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Sportsbook>`
- **Error**: `SdkException<CfbV3OddsSportsbooksByActiveError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
