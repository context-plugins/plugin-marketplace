# NflV3Odds — operations

Accessor: `client.NflV3Odds` · Source: `Api/NflV3Odds.cs` · 34 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### NflV3OddsBettingEventsByDate
- **HTTP**: `GET /v3/nfl/odds/{format}/BettingEventsByDate/{date}` (Default (api))
- **Notes**: The list of current BettingEvents for the given date, from which Betting Market data can be gathered via the Betting Markets by Event endpoint, for all available Betting Market types (e.g. Player Props, Team Props.)
- **Signature**: `NflV3OddsBettingEventsByDate(Format format, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<BettingEvent5>`
- **Error**: `SdkException<NflV3OddsBettingEventsByDateError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3OddsBettingEventsBySeason
- **HTTP**: `GET /v3/nfl/odds/{format}/BettingEvents/{season}` (Default (api))
- **Notes**: The list of current BettingEvents for the given season, from which Betting Market data can be gathered via the Betting Markets by Event endpoint, for all available Betting Market types (e.g. Player Props, Team Props.)
- **Signature**: `NflV3OddsBettingEventsBySeason(Format format, string season, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<BettingEvent5>`
- **Error**: `SdkException<NflV3OddsBettingEventsBySeasonError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3OddsBettingFuturesBySeason
- **HTTP**: `GET /v3/nfl/odds/{format}/BettingFuturesBySeason/{season}` (Default (api))
- **Notes**: Returns available Futures markets for the given season. Does not include line movement.
- **Signature**: `NflV3OddsBettingFuturesBySeason(Format format, string season, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<BettingEvent5>`
- **Error**: `SdkException<NflV3OddsBettingFuturesBySeasonError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3OddsBettingFuturesBySeasonSportsbookGroup
- **HTTP**: `GET /v3/nfl/odds/{format}/BettingFuturesBySeason/{season}/{sportsbookgroup}` (Default (api))
- **Notes**: Returns available Futures markets for the given season. Does not include line movement. A Sportsbook Group must be specified as a URL parameter.
- **Signature**: `NflV3OddsBettingFuturesBySeasonSportsbookGroup(Format format, string season, string sportsbookgroup, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<BettingEvent5>`
- **Error**: `SdkException<NflV3OddsBettingFuturesBySeasonSportsbookGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3OddsBettingMarket
- **HTTP**: `GET /v3/nfl/odds/{format}/BettingMarket/{marketId}` (Default (api))
- **Notes**: Returns full line movement for a given BettingMarket. Due to the sheer size of the output and the level of detail, it is intended for historical data purposes and not for the most up-to-the-second lines.
- **Signature**: `NflV3OddsBettingMarket(Format format, string marketId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BettingMarket`
- **Error**: `SdkException<NflV3OddsBettingMarketError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3OddsBettingMarketSportsbookGroup
- **HTTP**: `GET /v3/nfl/odds/{format}/BettingMarket/{marketId}/{sportsbookgroup}` (Default (api))
- **Notes**: Returns full line movement for a given BettingMarket. Due to the sheer size of the output and the level of detail, it is intended for historical data purposes and not for the most up-to-the-second lines.&lt;br&gt;&lt;br&gt;A Sportsbook Group must be specified as a URL parameter.
- **Signature**: `NflV3OddsBettingMarketSportsbookGroup(Format format, string marketId, string sportsbookgroup, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BettingMarket`
- **Error**: `SdkException<NflV3OddsBettingMarketSportsbookGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3OddsBettingMarketsByEvent
- **HTTP**: `GET /v3/nfl/odds/{format}/BettingMarkets/{eventId}` (Default (api))
- **Notes**: Returns the markets of all available types (e.g. Player Props, Team Props) and available outcomes for a given BettingEventID.
- **Signature**: `NflV3OddsBettingMarketsByEvent(Format format, string eventId, Include? include, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `include` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `include` ← `include`
- **Returns**: `IReadOnlyList<BettingMarket>`
- **Error**: `SdkException<NflV3OddsBettingMarketsByEventError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3OddsBettingMarketsByEventSportsbookGroup
- **HTTP**: `GET /v3/nfl/odds/{format}/BettingMarketsByEvent/{eventId}/{sportsbookgroup}` (Default (api))
- **Notes**: Returns the markets and available outcomes for a given BettingEventID. A Sportsbook Group must be specified as a URL parameter.
- **Signature**: `NflV3OddsBettingMarketsByEventSportsbookGroup(Format format, string eventId, string sportsbookgroup, Include? include, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `include` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `include` ← `include`
- **Returns**: `IReadOnlyList<BettingMarket>`
- **Error**: `SdkException<NflV3OddsBettingMarketsByEventSportsbookGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3OddsBettingMarketsByGame
- **HTTP**: `GET /v3/nfl/odds/{format}/BettingMarketsByScoreID/{scoreid}` (Default (api))
- **Notes**: Returns the markets of all available types (e.g. Player Props, Team Props) and available outcomes for a given GameID.
- **Signature**: `NflV3OddsBettingMarketsByGame(Format format, string scoreid, Include? include, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `include` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `include` ← `include`
- **Returns**: `IReadOnlyList<BettingMarket>`
- **Error**: `SdkException<NflV3OddsBettingMarketsByGameError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3OddsBettingMarketsByGameSportsbookGroup
- **HTTP**: `GET /v3/nfl/odds/{format}/BettingMarketsByGameID/{gameid}/{sportsbookgroup}` (Default (api))
- **Notes**: Returns the markets of all available types (e.g. Player Props, Team Props) and available outcomes for a given GameID. A Sportsbook Group must be specified as a URL parameter.
- **Signature**: `NflV3OddsBettingMarketsByGameSportsbookGroup(Format format, string gameid, string sportsbookgroup, Include? include, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `include` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `include` ← `include`
- **Returns**: `IReadOnlyList<BettingMarket>`
- **Error**: `SdkException<NflV3OddsBettingMarketsByGameSportsbookGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3OddsBettingMarketsByMarketType
- **HTTP**: `GET /v3/nfl/odds/{format}/BettingMarketsByMarketType/{eventId}/{marketTypeID}` (Default (api))
- **Notes**: Returns Markets and available outcomes for a given event and market type requested. A lighter call than by BettingEventID as it only includes markets tagged with the specific MarketType, a full list of which is available for each sport in its Betting Metadata endpoint.
- **Signature**: `NflV3OddsBettingMarketsByMarketType(Format format, string eventId, string marketTypeId, Include? include, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `include` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `include` ← `include`
- **Returns**: `IReadOnlyList<BettingMarket>`
- **Error**: `SdkException<NflV3OddsBettingMarketsByMarketTypeError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3OddsBettingMarketsByMarketTypeSportsbookGroup
- **HTTP**: `GET /v3/nfl/odds/{format}/BettingMarketsByMarketType/{eventId}/{marketTypeID}/{sportsbookgroup}` (Default (api))
- **Notes**: Returns Markets and available outcomes for a given event and market type requested. A lighter call than by BettingEventID as it only includes markets tagged with the specific MarketType, a full list of which is available for each sport in its Betting Metadata endpoint. A Sportsbook Group must be specified as a URL parameter.
- **Signature**: `NflV3OddsBettingMarketsByMarketTypeSportsbookGroup(Format format, string eventId, string marketTypeId, string sportsbookgroup, Include? include, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `include` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `include` ← `include`
- **Returns**: `IReadOnlyList<BettingMarket>`
- **Error**: `SdkException<NflV3OddsBettingMarketsByMarketTypeSportsbookGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3OddsBettingMetadata
- **HTTP**: `GET /v3/nfl/odds/{format}/BettingMetadata` (Default (api))
- **Notes**: Returns the list of MarketTypes, BetTypes, PeriodTypes, OutcomeTypes, and ResultTypes to map the IDs to descriptive names. Also includes a list of the MarketType, BetType &amp; PeriodType combinations which we will have resulting for.
- **Signature**: `NflV3OddsBettingMetadata(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BettingEntityMetadataCollection`
- **Error**: `SdkException<NflV3OddsBettingMetadataError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3OddsBettingPlayerPropsByGame
- **HTTP**: `GET /v3/nfl/odds/{format}/BettingPlayerPropsByScoreID/{scoreid}` (Default (api))
- **Notes**: This works in the same way as Betting Markets by Market Type but is prefiltered to the Player Props type only. Ideal if your application will only ever require Player Props, but if you also want Team Props etc. it is recommended to use the by Market Type endpoint.
- **Signature**: `NflV3OddsBettingPlayerPropsByGame(Format format, string scoreid, Include? include, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `include` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `include` ← `include`
- **Returns**: `IReadOnlyList<BettingMarket>`
- **Error**: `SdkException<NflV3OddsBettingPlayerPropsByGameError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3OddsBettingPlayerPropsByGameSportsbookGroup
- **HTTP**: `GET /v3/nfl/odds/{format}/BettingPlayerPropsByScoreID/{scoreid}/{sportsbookgroup}` (Default (api))
- **Notes**: This works in the same way as Betting Markets by Market Type but is prefiltered to the Player Props type only. Ideal if your application will only ever require Player Props, but if you also want Team Props etc. it is recommended to use the by Market Type endpoint. A Sportsbook Group must be specified as a URL parameter.
- **Signature**: `NflV3OddsBettingPlayerPropsByGameSportsbookGroup(Format format, string scoreid, string sportsbookgroup, Include? include, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `include` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `include` ← `include`
- **Returns**: `IReadOnlyList<BettingMarket>`
- **Error**: `SdkException<NflV3OddsBettingPlayerPropsByGameSportsbookGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3OddsBettingResultsByMarket
- **HTTP**: `GET /v3/nfl/odds/{format}/BettingMarketResults/{marketId}` (Default (api))
- **Notes**: Provide a market ID that supports resulting (i.e. has a ResultType) and this endpoint will return a result: for markets with a ResultType, each line will be graded and it will be determined whether the bet would have won or lost.
- **Signature**: `NflV3OddsBettingResultsByMarket(Format format, string marketId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BettingMarketResult`
- **Error**: `SdkException<NflV3OddsBettingResultsByMarketError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3OddsBettingResultsByMarketSportsbookGroup
- **HTTP**: `GET /v3/nfl/odds/{format}/BettingResultsByMarket/{marketId}/{sportsbookgroup}` (Default (api))
- **Notes**: Provide a market ID that supports resulting (i.e. has a ResultType) and this endpoint will return a result: for markets with a ResultType, each line will be graded and it will be determined whether the bet would have won or lost. A Sportsbook Group must be specified as a URL parameter.
- **Signature**: `NflV3OddsBettingResultsByMarketSportsbookGroup(Format format, string marketId, string sportsbookgroup, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BettingMarketResult`
- **Error**: `SdkException<NflV3OddsBettingResultsByMarketSportsbookGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3OddsBettingSplitsByBettingMarket
- **HTTP**: `GET /v3/nfl/odds/{format}/BettingSplitsByMarketId/{marketId}` (Default (api))
- **Notes**: List of Money and Bet Percentage splits for each outcome type available in this market. This specific endpoint will return the movement from this market as well as the most recent.
- **Signature**: `NflV3OddsBettingSplitsByBettingMarket(Format format, string marketId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BettingMarketSplit`
- **Error**: `SdkException<NflV3OddsBettingSplitsByBettingMarketError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3OddsBettingSplitsByGame
- **HTTP**: `GET /v3/nfl/odds/{format}/BettingSplitsByScoreId/{scoreId}` (Default (api))
- **Notes**: List of Money and Bet Percentage splits for each market and their respective outcome types available in this game. This specific endpoint will return current splits for each available market and no line movement.
- **Signature**: `NflV3OddsBettingSplitsByGame(Format format, string scoreId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `GameBettingSplit2`
- **Error**: `SdkException<NflV3OddsBettingSplitsByGameError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3OddsBettingTrendsByMatchup
- **HTTP**: `GET /v3/nfl/odds/{format}/MatchupTrends/{team}/{opponent}` (Default (api))
- **Notes**: Returns trends data for a given pairing of teams. Will return data even if the teams are not set to play this season. Intended for use on a specific game, though it will work for other comparisons if applicable.
- **Signature**: `NflV3OddsBettingTrendsByMatchup(Format format, string team, string opponent, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `MatchupTrends3`
- **Error**: `SdkException<NflV3OddsBettingTrendsByMatchupError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3OddsBettingTrendsByTeam
- **HTTP**: `GET /v3/nfl/odds/{format}/TeamTrends/{team}` (Default (api))
- **Notes**: Describes recent team trends and performance against betting data in recent sets of games.
- **Signature**: `NflV3OddsBettingTrendsByTeam(Format format, string team, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TeamTrends3`
- **Error**: `SdkException<NflV3OddsBettingTrendsByTeamError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3OddsInGameOddsByWeek
- **HTTP**: `GET /v3/nfl/odds/{format}/LiveGameOddsByWeek/{season}/{week}` (Default (api))
- **Notes**: Returns in-play game odds (spread, moneyline, total) for games in a given week and season. Only returns the most recently seen odds, not inclusive of line movement. As this is in-game, it will only return results while the game is in progress.
- **Signature**: `NflV3OddsInGameOddsByWeek(Format format, string season, string week, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<GameInfo2>`
- **Error**: `SdkException<NflV3OddsInGameOddsByWeekError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3OddsInGameOddsByWeekSportsbookGroup
- **HTTP**: `GET /v3/nfl/odds/{format}/InGameOddsByWeek/{season}/{week}/{sportsbookgroup}` (Default (api))
- **Notes**: Returns in-play game odds (spread, moneyline, total) for games in a given week and season. Only returns the most recently seen odds, not inclusive of line movement. As this is in-game, it will only return results while the game is in progress. A Sportsbook Group must be specified as a URL parameter.
- **Signature**: `NflV3OddsInGameOddsByWeekSportsbookGroup(Format format, string season, string week, string sportsbookgroup, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<GameInfo2>`
- **Error**: `SdkException<NflV3OddsInGameOddsByWeekSportsbookGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3OddsInGameOddsLineMovement
- **HTTP**: `GET /v3/nfl/odds/{format}/LiveGameOddsLineMovement/{scoreid}` (Default (api))
- **Notes**: Returns in-play game odds (spread, moneyline, total) for games in a given week and season. Returns the full line movement for the given game. This endpoint has a longer cache as it is meant for historical data/line movement rather than the most up to the second line.
- **Signature**: `NflV3OddsInGameOddsLineMovement(Format format, string scoreid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<GameInfo2>`
- **Error**: `SdkException<NflV3OddsInGameOddsLineMovementError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3OddsInGameOddsLineMovementSportsbookGroup
- **HTTP**: `GET /v3/nfl/odds/{format}/InGameLineMovement/{scoreid}/{sportsbookgroup}` (Default (api))
- **Notes**: Returns in-play game odds (spread, moneyline, total) for games in a given week and season. Returns the full line movement for the given game. This endpoint has a longer cache as it is meant for historical data/line movement rather than the most up to the second line. A Sportsbook Group must be specified as a URL parameter.
- **Signature**: `NflV3OddsInGameOddsLineMovementSportsbookGroup(Format format, string scoreid, string sportsbookgroup, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<GameInfo2>`
- **Error**: `SdkException<NflV3OddsInGameOddsLineMovementSportsbookGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3OddsInGameOddsLineMovementWithResultingSportsbookGroup
- **HTTP**: `GET /v3/nfl/odds/{format}/InGameLineMovementWithResulting/{scoreid}/{sportsbookgroup}` (Default (api))
- **Notes**: Provides in-play odds line movement data for a given game. This means odds for games which are in-progress. Serves full line movement and is intended for showing the trend over a game rather than the most up-to-the second lines.
- **Signature**: `NflV3OddsInGameOddsLineMovementWithResultingSportsbookGroup(Format format, string scoreid, string sportsbookgroup, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<GameInfoResult4>`
- **Error**: `SdkException<NflV3OddsInGameOddsLineMovementWithResultingSportsbookGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3OddsPeriodGameOddsByWeek
- **HTTP**: `GET /v3/nfl/odds/{format}/AlternateMarketGameOddsByWeek/{season}/{week}` (Default (api))
- **Notes**: Returns the non-full-game odds (spread, moneyline, total) for games in a given week and season. Non-full-game means 1st-half or 1st-quarter, for example, rather than full game. Only returns the most recently seen odds, not inclusive of line movement.
- **Signature**: `NflV3OddsPeriodGameOddsByWeek(Format format, string season, string week, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<GameInfo2>`
- **Error**: `SdkException<NflV3OddsPeriodGameOddsByWeekError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3OddsPeriodGameOddsLineMovement
- **HTTP**: `GET /v3/nfl/odds/{format}/AlternateMarketGameOddsLineMovement/{scoreid}` (Default (api))
- **Notes**: Returns the non-full-game odds (spread, moneyline, total) for games in a given week and season. Non-full-game means 1st-half or 1st-quarter, for example, rather than full game. Only returns the most recently seen odds, not inclusive of line movement.
- **Signature**: `NflV3OddsPeriodGameOddsLineMovement(Format format, string scoreid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<GameInfo2>`
- **Error**: `SdkException<NflV3OddsPeriodGameOddsLineMovementError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3OddsPreGameAndPeriodGameOddsByWeekSportsbookGroup
- **HTTP**: `GET /v3/nfl/odds/{format}/PreGameOddsByWeek/{season}/{week}/{sportsbookgroup}` (Default (api))
- **Notes**: Returns the full-game and non-full-game odds (spread, moneyline, total) for games in a given week and season. Only returns the most recently seen odds, not inclusive of line movement. A Sportsbook Group must be specified as a URL parameter.
- **Signature**: `NflV3OddsPreGameAndPeriodGameOddsByWeekSportsbookGroup(Format format, string season, string week, string sportsbookgroup, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<GameInfo2>`
- **Error**: `SdkException<NflV3OddsPreGameAndPeriodGameOddsByWeekSportsbookGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroup
- **HTTP**: `GET /v3/nfl/odds/{format}/PreGameOddsLineMovement/{scoreid}/{sportsbookgroup}` (Default (api))
- **Notes**: Returns the game odds (for games in a given week and season. In this endpoint both full-game and partial-game odds are included. Returns the full line movement for the given game. This endpoint has a longer cache as it is meant for historical data/line movement rather than the most up to the second line. A Sportsbook Group must be specified as a URL parameter.
- **Signature**: `NflV3OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroup(Format format, string scoreid, string sportsbookgroup, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<GameInfo2>`
- **Error**: `SdkException<NflV3OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroup
- **HTTP**: `GET /v3/nfl/odds/{format}/PreGameOddsLineMovementWithResulting/{scoreid}/{sportsbookgroup}` (Default (api))
- **Notes**: Returns the game odds ( for games in a given week and season. In this endpoint both full-game and partial-game odds are included.&lt;br&gt;&lt;br&gt;This also includes Resulting: for markets with a ResultType, each line will be graded and it will be determined whether the bet would have won or lost.&lt;br&gt;&lt;br&gt;Returns the full line movement for the given game. This endpoint has a longer cache as it is meant for historical data/line movement rather than the most up to the second line.&lt;br&gt;&lt;br&gt;A Sportsbook Group must be specified as a URL parameter.
- **Signature**: `NflV3OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroup(Format format, string scoreid, string sportsbookgroup, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<GameInfoResult4>`
- **Error**: `SdkException<NflV3OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3OddsPreGameOddsByWeek
- **HTTP**: `GET /v3/nfl/odds/{format}/GameOddsByWeek/{season}/{week}` (Default (api))
- **Notes**: Returns the full-game core odds for games in a given week &amp; season. This means moneyline, spread, and total. Only returns the most recently seen odds, not-including line movement.
- **Signature**: `NflV3OddsPreGameOddsByWeek(Format format, string season, string week, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<GameInfo2>`
- **Error**: `SdkException<NflV3OddsPreGameOddsByWeekError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3OddsPreGameOddsLineMovement
- **HTTP**: `GET /v3/nfl/odds/{format}/GameOddsLineMovement/{scoreid}` (Default (api))
- **Notes**: Returns the full-game core odds for a given ScoreID. This means moneyline, spread, and total. Only returns the most recently seen odds, not-including line movement. This endpoint has a longer cache as it is meant for historical data/line movement rather than the most up to the second line.
- **Signature**: `NflV3OddsPreGameOddsLineMovement(Format format, string scoreid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<GameInfo2>`
- **Error**: `SdkException<NflV3OddsPreGameOddsLineMovementError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3OddsSportsbooksActive
- **HTTP**: `GET /v3/nfl/odds/{format}/ActiveSportsbooks` (Default (api))
- **Notes**: Returns a list for mapping SportsbookID to the Sportsbook name.
- **Signature**: `NflV3OddsSportsbooksActive(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Sportsbook>`
- **Error**: `SdkException<NflV3OddsSportsbooksActiveError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
