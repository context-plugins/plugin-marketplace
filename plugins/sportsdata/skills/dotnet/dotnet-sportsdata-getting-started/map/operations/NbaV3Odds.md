# NbaV3Odds — operations

Accessor: `client.NbaV3Odds` · Source: `Api/NbaV3Odds.cs` · 34 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### NbaV3OddsBettingEventsByDate
- **HTTP**: `GET /v3/nba/odds/{format}/BettingEventsByDate/{date}` (Default (api))
- **Notes**: The list of current BettingEvents for the given date. Events in this include market information but no outcomes will be included here. Intended to allow both visibility to Events in order to match up Events -&gt; Games via the included GameID (where applicable) as well as provide a list of MarketIDs which are included in the given event.
- **Signature**: `NbaV3OddsBettingEventsByDate(Format format, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<BettingEvent2>`
- **Error**: `SdkException<NbaV3OddsBettingEventsByDateError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NbaV3OddsBettingEventsBySeason
- **HTTP**: `GET /v3/nba/odds/{format}/BettingEvents/{season}` (Default (api))
- **Notes**: Returns the full list of BetttingEvents for the given season. Intended for those who need to tie BettingEventIDs to GameIDs.
- **Signature**: `NbaV3OddsBettingEventsBySeason(Format format, string season, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<BettingEvent2>`
- **Error**: `SdkException<NbaV3OddsBettingEventsBySeasonError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NbaV3OddsBettingFuturesBySeason
- **HTTP**: `GET /v3/nba/odds/{format}/BettingFuturesBySeason/{season}` (Default (api))
- **Notes**: Returns available Futures outcomes for the given season. Does not include line movement.
- **Signature**: `NbaV3OddsBettingFuturesBySeason(Format format, string season, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<BettingEvent2>`
- **Error**: `SdkException<NbaV3OddsBettingFuturesBySeasonError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NbaV3OddsBettingFuturesBySeasonSportsbookGroup
- **HTTP**: `GET /v3/nba/odds/{format}/BettingFuturesBySeason/{season}/{sportsbookgroup}` (Default (api))
- **Notes**: Returns available Futures markets for the given season. Does not include line movement. A Sportsbook Group must be specified as a URL parameter.
- **Signature**: `NbaV3OddsBettingFuturesBySeasonSportsbookGroup(Format format, string season, string sportsbookgroup, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<BettingEvent2>`
- **Error**: `SdkException<NbaV3OddsBettingFuturesBySeasonSportsbookGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NbaV3OddsBettingMarket
- **HTTP**: `GET /v3/nba/odds/{format}/BettingMarket/{marketId}` (Default (api))
- **Notes**: Returns full line movement for a given BettingMarket. Due to the sheer size of the output and the level of detail, it is intended for historical data purposes and not for the most up-to-the-second lines.
- **Signature**: `NbaV3OddsBettingMarket(Format format, string marketId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BettingMarket`
- **Error**: `SdkException<NbaV3OddsBettingMarketError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NbaV3OddsBettingMarketSportsbookGroup
- **HTTP**: `GET /v3/nba/odds/{format}/BettingMarket/{marketId}/{sportsbookgroup}` (Default (api))
- **Notes**: Returns full line movement for a given BettingMarket. Due to the sheer size of the output and the level of detail, it is intended for historical data purposes and not for the most up-to-the-second lines. A Sportsbook Group must be specified as a URL parameter.
- **Signature**: `NbaV3OddsBettingMarketSportsbookGroup(Format format, string marketId, string sportsbookgroup, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BettingMarket`
- **Error**: `SdkException<NbaV3OddsBettingMarketSportsbookGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NbaV3OddsBettingMarketsByEvent
- **HTTP**: `GET /v3/nba/odds/{format}/BettingMarkets/{eventId}` (Default (api))
- **Notes**: Returns the markets of all available types (e.g. Player Props, Team Props) and available outcomes for a given BettingEventID.
- **Signature**: `NbaV3OddsBettingMarketsByEvent(Format format, string eventId, Include? include, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `include` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `include` ← `include`
- **Returns**: `IReadOnlyList<BettingMarket>`
- **Error**: `SdkException<NbaV3OddsBettingMarketsByEventError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NbaV3OddsBettingMarketsByEventSportsbookGroup
- **HTTP**: `GET /v3/nba/odds/{format}/BettingMarketsByEvent/{eventId}/{sportsbookgroup}` (Default (api))
- **Notes**: Returns the markets and available outcomes for a given BettingEventID.
- **Signature**: `NbaV3OddsBettingMarketsByEventSportsbookGroup(Format format, string eventId, string sportsbookgroup, Include? include, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `include` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `include` ← `include`
- **Returns**: `IReadOnlyList<BettingMarket>`
- **Error**: `SdkException<NbaV3OddsBettingMarketsByEventSportsbookGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NbaV3OddsBettingMarketsByGame
- **HTTP**: `GET /v3/nba/odds/{format}/BettingMarketsByGameID/{gameID}` (Default (api))
- **Notes**: Returns the markets of all available types (e.g. Player Props, Team Props) and available outcomes for a given GameID.
- **Signature**: `NbaV3OddsBettingMarketsByGame(Format format, string gameId, Include? include, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `include` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `include` ← `include`
- **Returns**: `IReadOnlyList<BettingMarket>`
- **Error**: `SdkException<NbaV3OddsBettingMarketsByGameError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NbaV3OddsBettingMarketsByGameSportsbookGroup
- **HTTP**: `GET /v3/nba/odds/{format}/BettingMarketsByGameID/{gameID}/{sportsbookgroup}` (Default (api))
- **Notes**: Returns the markets of all available types (e.g. Player Props, Team Props) and available outcomes for a given GameID. A Sportsbook Group must be specified as a URL parameter.
- **Signature**: `NbaV3OddsBettingMarketsByGameSportsbookGroup(Format format, string gameId, string sportsbookgroup, Include? include, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `include` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `include` ← `include`
- **Returns**: `IReadOnlyList<BettingMarket>`
- **Error**: `SdkException<NbaV3OddsBettingMarketsByGameSportsbookGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NbaV3OddsBettingMarketsByMarketType
- **HTTP**: `GET /v3/nba/odds/{format}/BettingMarketsByMarketType/{eventId}/{marketTypeID}` (Default (api))
- **Notes**: Returns Markets and available outcomes for a given event and market type requested. A lighter call than by BettingEventID as it only includes markets tagged with the specific MarketType, a full list of which is available for each sport in its Betting Metadata endpoint.
- **Signature**: `NbaV3OddsBettingMarketsByMarketType(Format format, string eventId, string marketTypeId, Include? include, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `include` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `include` ← `include`
- **Returns**: `IReadOnlyList<BettingMarket>`
- **Error**: `SdkException<NbaV3OddsBettingMarketsByMarketTypeError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NbaV3OddsBettingMarketsByMarketTypeSportsbookGroup
- **HTTP**: `GET /v3/nba/odds/{format}/BettingMarketsByMarketType/{eventId}/{marketTypeID}/{sportsbookgroup}` (Default (api))
- **Notes**: Returns Markets and available outcomes for a given event and market type requested. A lighter call than by BettingEventID as it only includes markets tagged with the specific MarketType, a full list of which is available for each sport in its Betting Metadata endpoint. A Sportsbook Group must be specified as a URL parameter.
- **Signature**: `NbaV3OddsBettingMarketsByMarketTypeSportsbookGroup(Format format, string eventId, string marketTypeId, string sportsbookgroup, Include? include, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `include` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `include` ← `include`
- **Returns**: `IReadOnlyList<BettingMarket>`
- **Error**: `SdkException<NbaV3OddsBettingMarketsByMarketTypeSportsbookGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NbaV3OddsBettingMetadata
- **HTTP**: `GET /v3/nba/odds/{format}/BettingMetadata` (Default (api))
- **Notes**: Returns the list of MarketTypes, BetTypes, PeriodTypes, OutcomeTypes, and ResultTypes to map the IDs to descriptive names. Also includes a list of the MarketType, BetType &amp; PeriodType combinations which we will have resulting for.
- **Signature**: `NbaV3OddsBettingMetadata(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BettingEntityMetadataCollection`
- **Error**: `SdkException<NbaV3OddsBettingMetadataError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NbaV3OddsBettingPlayerPropsByGame
- **HTTP**: `GET /v3/nba/odds/{format}/BettingPlayerPropsByGameID/{gameId}` (Default (api))
- **Notes**: This works in the same way as Betting Markets by Market Type but is prefiltered to the Player Props type only. Ideal if your application will only ever require Player Props, but if you also want Team Props etc. it is recommended to use the by Market Type endpoint.
- **Signature**: `NbaV3OddsBettingPlayerPropsByGame(Format format, string gameId, Include? include, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `include` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `include` ← `include`
- **Returns**: `IReadOnlyList<BettingMarket>`
- **Error**: `SdkException<NbaV3OddsBettingPlayerPropsByGameError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NbaV3OddsBettingPlayerPropsByGameSportsbookGroup
- **HTTP**: `GET /v3/nba/odds/{format}/BettingPlayerPropsByGameID/{gameId}/{sportsbookgroup}` (Default (api))
- **Notes**: This works in the same way as Betting Markets by Market Type but is prefiltered to the Player Props type only. Ideal if your application will only ever require Player Props, but if you also want Team Props etc. it is recommended to use the by Market Type endpoint. A Sportsbook Group must be specified as a URL parameter.
- **Signature**: `NbaV3OddsBettingPlayerPropsByGameSportsbookGroup(Format format, string gameId, string sportsbookgroup, Include? include, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `include` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `include` ← `include`
- **Returns**: `IReadOnlyList<BettingMarket>`
- **Error**: `SdkException<NbaV3OddsBettingPlayerPropsByGameSportsbookGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NbaV3OddsBettingResultsByMarket
- **HTTP**: `GET /v3/nba/odds/{format}/BettingMarketResults/{marketId}` (Default (api))
- **Notes**: Provide a market ID that supports resulting (i.e. has a ResultType) and this endpoint will return a result: for markets with a ResultType, each line will be graded and it will be determined whether the bet would have won or lost.
- **Signature**: `NbaV3OddsBettingResultsByMarket(Format format, string marketId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BettingMarketResult`
- **Error**: `SdkException<NbaV3OddsBettingResultsByMarketError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NbaV3OddsBettingResultsByMarketSportsbookGroup
- **HTTP**: `GET /v3/nba/odds/{format}/BettingResultsByMarket/{marketId}/{sportsbookgroup}` (Default (api))
- **Notes**: Provide a market ID that supports resulting (i.e. has a ResultType) and this endpoint will return a result: for markets with a ResultType, each line will be graded and it will be determined whether the bet would have won or lost. A Sportsbook Group must be specified as a URL parameter.
- **Signature**: `NbaV3OddsBettingResultsByMarketSportsbookGroup(Format format, string marketId, string sportsbookgroup, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BettingMarketResult`
- **Error**: `SdkException<NbaV3OddsBettingResultsByMarketSportsbookGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NbaV3OddsBettingSplitsByBettingMarket
- **HTTP**: `GET /v3/nba/odds/{format}/BettingSplitsByMarketId/{marketId}` (Default (api))
- **Notes**: List of Money and Bet Percentage splits for each outcome type available in this market. This specific endpoint will return the movement from this market as well as the most recent.
- **Signature**: `NbaV3OddsBettingSplitsByBettingMarket(Format format, string marketId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BettingMarketSplit`
- **Error**: `SdkException<NbaV3OddsBettingSplitsByBettingMarketError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NbaV3OddsBettingSplitsByGame
- **HTTP**: `GET /v3/nba/odds/{format}/BettingSplitsByGameId/{gameId}` (Default (api))
- **Notes**: List of Money and Bet Percentage splits for each market and their respective outcome types available in this game. This specific endpoint will return current splits for each available market and no line movement.
- **Signature**: `NbaV3OddsBettingSplitsByGame(Format format, string gameId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `GameBettingSplit`
- **Error**: `SdkException<NbaV3OddsBettingSplitsByGameError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NbaV3OddsBettingTrendsByMatchup
- **HTTP**: `GET /v3/nba/odds/{format}/MatchupTrends/{team}/{opponent}` (Default (api))
- **Notes**: Returns trends data for a given pairing of teams. Will return data even if the teams are not set to play this season. Intended for use on a specific game, though it will work for other comparisons if applicable.
- **Signature**: `NbaV3OddsBettingTrendsByMatchup(Format format, string team, string opponent, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `MatchupTrends2`
- **Error**: `SdkException<NbaV3OddsBettingTrendsByMatchupError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NbaV3OddsBettingTrendsByTeam
- **HTTP**: `GET /v3/nba/odds/{format}/TeamTrends/{team}` (Default (api))
- **Notes**: Describes recent team trends and performance against betting data in recent sets of games.
- **Signature**: `NbaV3OddsBettingTrendsByTeam(Format format, string team, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TeamTrends2`
- **Error**: `SdkException<NbaV3OddsBettingTrendsByTeamError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NbaV3OddsInGameOddsByDate
- **HTTP**: `GET /v3/nba/odds/{format}/LiveGameOddsByDate/{date}` (Default (api))
- **Notes**: Returns in-play game odds (spread, moneyline, total) for games on a given date. Only returns the most recently seen odds, not inclusive of line movement. As this is in-game, it will only return results while the game is in progress.
- **Signature**: `NbaV3OddsInGameOddsByDate(Format format, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<GameInfo>`
- **Error**: `SdkException<NbaV3OddsInGameOddsByDateError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NbaV3OddsInGameOddsByDateSportsbookGroup
- **HTTP**: `GET /v3/nba/odds/{format}/InGameOddsByDate/{date}/{sportsbookgroup}` (Default (api))
- **Notes**: Returns in-play game odds (spread, moneyline, total) for games on a given date. Only returns the most recently seen odds, not inclusive of line movement. As this is in-game, it will only return results while the game is in progress. A Sportsbook Group must be specified as a URL parameter.
- **Signature**: `NbaV3OddsInGameOddsByDateSportsbookGroup(Format format, string date, string sportsbookgroup, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<GameInfo>`
- **Error**: `SdkException<NbaV3OddsInGameOddsByDateSportsbookGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NbaV3OddsInGameOddsLineMovement
- **HTTP**: `GET /v3/nba/odds/{format}/LiveGameOddsLineMovement/{gameid}` (Default (api))
- **Notes**: Returns in-play game odds (spread, moneyline, total) for games on a given date. Returns the full line movement for the given game. This endpoint has a longer cache as it is meant for historical data/line movement rather than the most up to the second line.
- **Signature**: `NbaV3OddsInGameOddsLineMovement(Format format, string gameid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<GameInfo>`
- **Error**: `SdkException<NbaV3OddsInGameOddsLineMovementError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NbaV3OddsInGameOddsLineMovementSportsbookGroup
- **HTTP**: `GET /v3/nba/odds/{format}/InGameLineMovement/{gameid}/{sportsbookgroup}` (Default (api))
- **Notes**: Returns in-play game odds (spread, moneyline, total) for games on a given date. Returns the full line movement for the given game. This endpoint has a longer cache as it is meant for historical data/line movement rather than the most up to the second line. A Sportsbook Group must be specified as a URL parameter.
- **Signature**: `NbaV3OddsInGameOddsLineMovementSportsbookGroup(Format format, string gameid, string sportsbookgroup, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<GameInfo>`
- **Error**: `SdkException<NbaV3OddsInGameOddsLineMovementSportsbookGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NbaV3OddsInGameOddsLineMovementWithResultingSportsbookGroup
- **HTTP**: `GET /v3/nba/odds/{format}/InGameLineMovementWithResulting/{gameid}/{sportsbookgroup}` (Default (api))
- **Notes**: Returns in-play game odds (spread, moneyline, total) for games on a given date. This also includes Resulting: for markets with a ResultType, each line will be graded and it will be determined whether the bet would have won or lost. Returns the full line movement for the given game. This endpoint has a longer cache as it is meant for historical data/line movement rather than the most up to the second line. A Sportsbook Group must be specified as a URL parameter.
- **Signature**: `NbaV3OddsInGameOddsLineMovementWithResultingSportsbookGroup(Format format, string gameid, string sportsbookgroup, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<GameInfoResult3>`
- **Error**: `SdkException<NbaV3OddsInGameOddsLineMovementWithResultingSportsbookGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NbaV3OddsPeriodGameOddsByDate
- **HTTP**: `GET /v3/nba/odds/{format}/AlternateMarketGameOddsByDate/{date}` (Default (api))
- **Notes**: Returns the non-full-game odds (spread, moneyline, total) for games on a given date. Non-full-game means 1st-half or 1st-quarter, for example, rather than full game. Only returns the most recently seen odds, not inclusive of line movement.
- **Signature**: `NbaV3OddsPeriodGameOddsByDate(Format format, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<GameInfo>`
- **Error**: `SdkException<NbaV3OddsPeriodGameOddsByDateError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NbaV3OddsPeriodGameOddsLineMovement
- **HTTP**: `GET /v3/nba/odds/{format}/AlternateMarketGameOddsLineMovement/{gameid}` (Default (api))
- **Notes**: Returns the non-full-game odds (spread, moneyline, total) for games on a given date. Non-full-game means 1st-half or 1st-quarter, for example, rather than full game. Returns the full line movement for the given game. This endpoint has a longer cache as it is meant for historical data/line movement rather than the most up to the second line.
- **Signature**: `NbaV3OddsPeriodGameOddsLineMovement(Format format, string gameid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<GameInfo>`
- **Error**: `SdkException<NbaV3OddsPeriodGameOddsLineMovementError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NbaV3OddsPreGameAndPeriodGameOddsByDateSportsbookGroup
- **HTTP**: `GET /v3/nba/odds/{format}/PreGameOddsByDate/{date}/{sportsbookgroup}` (Default (api))
- **Notes**: Returns the full-game and non-full-game odds (spread, moneyline, total) for games in a given week and season. Only returns the most recently seen odds, not inclusive of line movement. A Sportsbook Group must be specified as a URL parameter.
- **Signature**: `NbaV3OddsPreGameAndPeriodGameOddsByDateSportsbookGroup(Format format, string date, string sportsbookgroup, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<GameInfo>`
- **Error**: `SdkException<NbaV3OddsPreGameAndPeriodGameOddsByDateSportsbookGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NbaV3OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroup
- **HTTP**: `GET /v3/nba/odds/{format}/PreGameOddsLineMovement/{gameid}/{sportsbookgroup}` (Default (api))
- **Notes**: Returns the game odds ( for games on a given date. In this endpoint both full-game and partial-game odds are included. Returns the full line movement for the given game. This endpoint has a longer cache as it is meant for historical data/line movement rather than the most up to the second line. A Sportsbook Group must be specified as a URL parameter.
- **Signature**: `NbaV3OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroup(Format format, string gameid, string sportsbookgroup, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<GameInfo>`
- **Error**: `SdkException<NbaV3OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NbaV3OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroup
- **HTTP**: `GET /v3/nba/odds/{format}/PreGameOddsLineMovementWithResulting/{gameid}/{sportsbookgroup}` (Default (api))
- **Notes**: Returns the game odds ( for games on a given date. In this endpoint both full-game and partial-game odds are included. This also includes Resulting: for markets with a ResultType, each line will be graded and it will be determined whether the bet would have won or lost. Returns the full line movement for the given game. This endpoint has a longer cache as it is meant for historical data/line movement rather than the most up to the second line. A Sportsbook Group must be specified as a URL parameter.
- **Signature**: `NbaV3OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroup(Format format, string gameid, string sportsbookgroup, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<GameInfoResult3>`
- **Error**: `SdkException<NbaV3OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NbaV3OddsPreGameOddsByDate
- **HTTP**: `GET /v3/nba/odds/{format}/GameOddsByDate/{date}` (Default (api))
- **Notes**: Returns full game odds (spread, moneyline, total) for games on a given date. Only returns the most recently seen odds, not inclusive of line movement.
- **Signature**: `NbaV3OddsPreGameOddsByDate(Format format, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<GameInfo>`
- **Error**: `SdkException<NbaV3OddsPreGameOddsByDateError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NbaV3OddsPreGameOddsLineMovement
- **HTTP**: `GET /v3/nba/odds/{format}/GameOddsLineMovement/{gameid}` (Default (api))
- **Notes**: Returns the non-full-game odds (spread, moneyline, total) for games on a given date. Non-full-game means 1st-half or 1st-quarter, for example, rather than full game. Returns the full line movement for the given game. This endpoint has a longer cache as it is meant for historical data/line movement rather than the most up to the second line.
- **Signature**: `NbaV3OddsPreGameOddsLineMovement(Format format, string gameid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<GameInfo>`
- **Error**: `SdkException<NbaV3OddsPreGameOddsLineMovementError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NbaV3OddsSportsbooksByActive
- **HTTP**: `GET /v3/nba/odds/{format}/ActiveSportsbooks` (Default (api))
- **Notes**: A list of all available sportsbooks with their associated unique IDs.
- **Signature**: `NbaV3OddsSportsbooksByActive(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Sportsbook>`
- **Error**: `SdkException<NbaV3OddsSportsbooksByActiveError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
