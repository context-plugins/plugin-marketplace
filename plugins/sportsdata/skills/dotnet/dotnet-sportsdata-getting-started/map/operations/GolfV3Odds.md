# GolfV3Odds — operations

Accessor: `client.GolfV3Odds` · Source: `Api/GolfV3Odds.cs` · 21 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GolfV3OddsBettingEventsByDate
- **HTTP**: `GET /v3/golf/odds/{format}/BettingEventsByDate/{date}` (Default (api))
- **Notes**: The list of current BettingEvents for the given date, from which Betting Market data can be gathered via the Betting Markets by Event endpoint, for all available Betting Market types (e.g. Player Props, Team Props.)
- **Signature**: `GolfV3OddsBettingEventsByDate(Format format, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<BettingEvent1>`
- **Error**: `SdkException<GolfV3OddsBettingEventsByDateError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GolfV3OddsBettingEventsBySeason
- **HTTP**: `GET /v3/golf/odds/{format}/BettingEvents/{season}` (Default (api))
- **Notes**: The list of current BettingEvents for the given season, from which Betting Market data can be gathered via the Betting Markets by Event endpoint, for all available Betting Market types (e.g. Player Props, Team Props.)
- **Signature**: `GolfV3OddsBettingEventsBySeason(Format format, string season, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<BettingEvent1>`
- **Error**: `SdkException<GolfV3OddsBettingEventsBySeasonError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GolfV3OddsBettingMarket
- **HTTP**: `GET /v3/golf/odds/{format}/BettingMarket/{marketId}` (Default (api))
- **Notes**: Betting MarketReturns full line movement for a given BettingMarket. Due to the sheer size of the output and the level of detail, it is intended for historical data purposes and not for the most up-to-the-second lines.
- **Signature**: `GolfV3OddsBettingMarket(Format format, string marketId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BettingMarket1`
- **Error**: `SdkException<GolfV3OddsBettingMarketError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GolfV3OddsBettingMarketSportsbookGroup
- **HTTP**: `GET /v3/golf/odds/{format}/BettingMarket/{marketId}/{sportsbookgroup}` (Default (api))
- **Notes**: Returns full line movement for a given BettingMarket. Due to the sheer size of the output and the level of detail, it is intended for historical data purposes and not for the most up-to-the-second lines. A Sportsbook Group must be specified as a URL parameter.
- **Signature**: `GolfV3OddsBettingMarketSportsbookGroup(Format format, string marketId, string sportsbookgroup, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BettingMarket1`
- **Error**: `SdkException<GolfV3OddsBettingMarketSportsbookGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GolfV3OddsBettingMarketsByEvent
- **HTTP**: `GET /v3/golf/odds/{format}/BettingMarkets/{eventId}` (Default (api))
- **Notes**: Returns the markets of all available types (e.g. Player Props, Team Props) and available outcomes for a given BettingEventID.
- **Signature**: `GolfV3OddsBettingMarketsByEvent(Format format, string eventId, Include? include, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `include` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `include` ← `include`
- **Returns**: `IReadOnlyList<BettingMarket1>`
- **Error**: `SdkException<GolfV3OddsBettingMarketsByEventError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GolfV3OddsBettingMarketsByEventSportsbookGroup
- **HTTP**: `GET /v3/golf/odds/{format}/BettingMarketsByEvent/{eventId}/{sportsbookgroup}` (Default (api))
- **Notes**: Returns the markets and available outcomes for a given BettingEventID. A Sportsbook Group must be specified as a URL parameter.
- **Signature**: `GolfV3OddsBettingMarketsByEventSportsbookGroup(Format format, string eventId, string sportsbookgroup, Include? include, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `include` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `include` ← `include`
- **Returns**: `IReadOnlyList<BettingMarket1>`
- **Error**: `SdkException<GolfV3OddsBettingMarketsByEventSportsbookGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GolfV3OddsBettingMarketsByMarketType
- **HTTP**: `GET /v3/golf/odds/{format}/BettingMarketsByMarketType/{eventId}/{marketTypeID}` (Default (api))
- **Notes**: Returns Markets and available outcomes for a given event and market type requested. A lighter call than by BettingEventID as it only includes markets tagged with the specific MarketType, a full list of which is available for each sport in its Betting Metadata endpoint.
- **Signature**: `GolfV3OddsBettingMarketsByMarketType(Format format, string eventId, string marketTypeId, Include? include, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `include` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `include` ← `include`
- **Returns**: `IReadOnlyList<BettingMarket1>`
- **Error**: `SdkException<GolfV3OddsBettingMarketsByMarketTypeError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GolfV3OddsBettingMarketsByMarketTypeSportsbookGroup
- **HTTP**: `GET /v3/golf/odds/{format}/BettingMarketsByMarketType/{eventId}/{marketTypeID}/{sportsbookgroup}` (Default (api))
- **Notes**: Returns Markets and available outcomes for a given event and market type requested. A lighter call than by BettingEventID as it only includes markets tagged with the specific MarketType, a full list of which is available for each sport in its Betting Metadata endpoint. A Sportsbook Group must be specified as a URL parameter.
- **Signature**: `GolfV3OddsBettingMarketsByMarketTypeSportsbookGroup(Format format, string eventId, string marketTypeId, string sportsbookgroup, Include? include, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `include` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `include` ← `include`
- **Returns**: `IReadOnlyList<BettingMarket1>`
- **Error**: `SdkException<GolfV3OddsBettingMarketsByMarketTypeSportsbookGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GolfV3OddsBettingMarketsByTournament
- **HTTP**: `GET /v3/golf/odds/{format}/BettingMarketsByTournamentID/{tournamentid}` (Default (api))
- **Notes**: Returns the markets of all available types (e.g. Player Props) and available outcomes for a given TournamentID.
- **Signature**: `GolfV3OddsBettingMarketsByTournament(Format format, string tournamentid, Include? include, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `include` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `include` ← `include`
- **Returns**: `IReadOnlyList<BettingMarket1>`
- **Error**: `SdkException<GolfV3OddsBettingMarketsByTournamentError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GolfV3OddsBettingMarketsByTournamentSportsbookGroup
- **HTTP**: `GET /v3/golf/odds/{format}/BettingMarketsByTournamentID/{tournamentid}/{sportsbookgroup}` (Default (api))
- **Notes**: Returns the markets of all available types (e.g. Player Props) and available outcomes for a given TournamentID. A Sportsbook Group must be specified as a URL parameter.
- **Signature**: `GolfV3OddsBettingMarketsByTournamentSportsbookGroup(Format format, string tournamentid, string sportsbookgroup, Include? include, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `include` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `include` ← `include`
- **Returns**: `IReadOnlyList<BettingMarket1>`
- **Error**: `SdkException<GolfV3OddsBettingMarketsByTournamentSportsbookGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GolfV3OddsBettingMetadata
- **HTTP**: `GET /v3/golf/odds/{format}/BettingMetadata` (Default (api))
- **Notes**: Returns the list of MarketTypes, BetTypes, PeriodTypes, OutcomeTypes, and ResultTypes to map the IDs to descriptive names. Also includes a list of the MarketType, BetType &amp; PeriodType combinations which we will have resulting for.
- **Signature**: `GolfV3OddsBettingMetadata(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BettingEntityMetadataCollection1`
- **Error**: `SdkException<GolfV3OddsBettingMetadataError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GolfV3OddsBettingPlayerPropsByTournamentSportsbookGroup
- **HTTP**: `GET /v3/golf/odds/{format}/BettingPlayerPropsByTournamentID/{tournamentid}/{sportsbookgroup}` (Default (api))
- **Notes**: This works in the same way as Betting Markets by Market Type but is prefiltered to the Player Props type only. Ideal if your application will only ever require Player Props, but if you also want other types of props it is recommended to use the by Market Type endpoint.
- **Signature**: `GolfV3OddsBettingPlayerPropsByTournamentSportsbookGroup(Format format, string tournamentid, string sportsbookgroup, Include? include, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `include` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `include` ← `include`
- **Returns**: `IReadOnlyList<BettingMarket1>`
- **Error**: `SdkException<GolfV3OddsBettingPlayerPropsByTournamentSportsbookGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GolfV3OddsInPlayTournamentOdds
- **HTTP**: `GET /v3/golf/odds/{format}/InPlayTournamentOdds/{tournamentid}` (Default (api))
- **Notes**: In-tournament odds, updating constantly throughout the tournament, without line movement.
- **Signature**: `GolfV3OddsInPlayTournamentOdds(Format format, string tournamentid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TournamentOdds`
- **Error**: `SdkException<GolfV3OddsInPlayTournamentOddsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GolfV3OddsInPlayTournamentOddsSportsbookGroup
- **HTTP**: `GET /v3/golf/odds/{format}/InPlayTournamentOdds/{tournamentid}/{sportsbookgroup}` (Default (api))
- **Notes**: Pre-tournament odds, updating constantly until the tournament begins, with line movement. As this is for historical line movement, the cache time is set slower than the normal Tournament Odds endpoint. Called by Sportsbook Group.
- **Signature**: `GolfV3OddsInPlayTournamentOddsSportsbookGroup(Format format, string tournamentid, string sportsbookgroup, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TournamentOdds`
- **Error**: `SdkException<GolfV3OddsInPlayTournamentOddsSportsbookGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GolfV3OddsInPlayTournamentOddsLineMovement
- **HTTP**: `GET /v3/golf/odds/{format}/InPlayTournamentOddsLineMovement/{tournamentid}` (Default (api))
- **Notes**: In-tournament odds, updating constantly throughout the tournament, with line movement. As this is for historical line movement, the cache time is set slower than the normal In-Play Tournament Odds endpoint.
- **Signature**: `GolfV3OddsInPlayTournamentOddsLineMovement(Format format, string tournamentid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TournamentOdds`
- **Error**: `SdkException<GolfV3OddsInPlayTournamentOddsLineMovementError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GolfV3OddsInPlayTournamentOddsLineMovementSportsbookGroup
- **HTTP**: `GET /v3/golf/odds/{format}/InPlayTournamentOddsLineMovement/{tournamentid}/{sportsbookgroup}` (Default (api))
- **Notes**: Pre-tournament odds, updating constantly until the tournament begins, with line movement. As this is for historical line movement, the cache time is set slower than the normal Tournament Odds endpoint. Called by Sportsbook Group.
- **Signature**: `GolfV3OddsInPlayTournamentOddsLineMovementSportsbookGroup(Format format, string tournamentid, string sportsbookgroup, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TournamentOdds`
- **Error**: `SdkException<GolfV3OddsInPlayTournamentOddsLineMovementSportsbookGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GolfV3OddsSportsbooksByActive
- **HTTP**: `GET /v3/golf/odds/{format}/ActiveSportsbooks` (Default (api))
- **Notes**: A list of all available sportsbooks with their associated unique IDs.
- **Signature**: `GolfV3OddsSportsbooksByActive(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Sportsbook>`
- **Error**: `SdkException<GolfV3OddsSportsbooksByActiveError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GolfV3OddsTournamentOdds
- **HTTP**: `GET /v3/golf/odds/{format}/TournamentOdds/{tournamentid}` (Default (api))
- **Notes**: Pre-tournament odds, updating constantly until the tournament begins, without line movement.
- **Signature**: `GolfV3OddsTournamentOdds(Format format, string tournamentid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TournamentOdds`
- **Error**: `SdkException<GolfV3OddsTournamentOddsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GolfV3OddsTournamentOddsSportsbookGroup
- **HTTP**: `GET /v3/golf/odds/{format}/TournamentOdds/{tournamentid}/{sportsbookgroup}` (Default (api))
- **Notes**: Pre-tournament odds, updating constantly until the tournament begins, with line movement. As this is for historical line movement, the cache time is set slower than the normal Tournament Odds endpoint. Called by Sportsbook Group.
- **Signature**: `GolfV3OddsTournamentOddsSportsbookGroup(Format format, string tournamentid, string sportsbookgroup, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TournamentOdds`
- **Error**: `SdkException<GolfV3OddsTournamentOddsSportsbookGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GolfV3OddsTournamentOddsLineMovement
- **HTTP**: `GET /v3/golf/odds/{format}/TournamentOddsLineMovement/{tournamentid}` (Default (api))
- **Notes**: Pre-tournament odds, updating constantly until the tournament begins, with line movement. As this is for historical line movement, the cache time is set slower than the normal Tournament Odds endpoint.
- **Signature**: `GolfV3OddsTournamentOddsLineMovement(Format format, string tournamentid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TournamentOdds`
- **Error**: `SdkException<GolfV3OddsTournamentOddsLineMovementError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GolfV3OddsTournamentOddsLineMovementSportsbookGroup
- **HTTP**: `GET /v3/golf/odds/{format}/TournamentOddsLineMovement/{tournamentid}/{sportsbookgroup}` (Default (api))
- **Notes**: Pre-tournament odds, updating constantly until the tournament begins, with line movement. As this is for historical line movement, the cache time is set slower than the normal Tournament Odds endpoint. Called by Sportsbook Group.
- **Signature**: `GolfV3OddsTournamentOddsLineMovementSportsbookGroup(Format format, string tournamentid, string sportsbookgroup, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TournamentOdds`
- **Error**: `SdkException<GolfV3OddsTournamentOddsLineMovementSportsbookGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
