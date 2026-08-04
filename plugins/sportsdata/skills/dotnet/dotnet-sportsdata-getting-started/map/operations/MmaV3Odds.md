# MmaV3Odds — operations

Accessor: `client.MmaV3Odds` · Source: `Api/MmaV3Odds.cs` · 10 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### MmaV3OddsBettingEventsByEvent
- **HTTP**: `GET /v3/mma/odds/{format}/BettingEventsByEvent/{eventId}` (Default (api))
- **Notes**: The list of current BettingEvents for the given fight event (i.e. card of fights), from which Betting Market data can be gathered via the Betting Markets by Event endpoint, for all available Betting Market types (e.g. Player Props, Team Props.)
- **Signature**: `MmaV3OddsBettingEventsByEvent(Format format, string eventId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<BettingEvent3>`
- **Error**: `SdkException<MmaV3OddsBettingEventsByEventError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### MmaV3OddsBettingEventsUpcoming
- **HTTP**: `GET /v3/mma/odds/{format}/UpcomingBettingEvents` (Default (api))
- **Notes**: A list of all BettingEvents that are currently scheduled and that have associated FightIds.
- **Signature**: `MmaV3OddsBettingEventsUpcoming(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<BettingEvent3>`
- **Error**: `SdkException<MmaV3OddsBettingEventsUpcomingError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### MmaV3OddsBettingFighterPropsByEvent
- **HTTP**: `GET /v3/mma/odds/{format}/BettingFighterPropsByEvent/{eventId}` (Default (api))
- **Notes**: This works in the same way as Betting Markets by Market Type but is prefiltered to the Player (Fighter) Props type only. Ideal if your application will only ever require Player Props, but if you also want Fight Props etc. it is recommended to use the by Market Type endpoint.
- **Signature**: `MmaV3OddsBettingFighterPropsByEvent(Format format, string eventId, Include? include, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `include` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `include` ← `include`
- **Returns**: `IReadOnlyList<BettingMarket2>`
- **Error**: `SdkException<MmaV3OddsBettingFighterPropsByEventError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### MmaV3OddsBettingMarket
- **HTTP**: `GET /v3/mma/odds/{format}/BettingMarket/{marketId}` (Default (api))
- **Notes**: Returns full line movement for a given BettingMarket. Due to the sheer size of the output and the level of detail, it is intended for historical data purposes and not for the most up-to-the-second lines.
- **Signature**: `MmaV3OddsBettingMarket(Format format, string marketId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BettingMarket2`
- **Error**: `SdkException<MmaV3OddsBettingMarketError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### MmaV3OddsBettingMarketsByEvent
- **HTTP**: `GET /v3/mma/odds/{format}/BettingMarketsByBettingEvent/{bettingEventId}` (Default (api))
- **Notes**: Returns the markets of all available types (e.g. Player Props, Fight Props) and available outcomes for a given BettingEventID.
- **Signature**: `MmaV3OddsBettingMarketsByEvent(Format format, string bettingEventId, Include? include, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `include` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `include` ← `include`
- **Returns**: `IReadOnlyList<BettingMarket2>`
- **Error**: `SdkException<MmaV3OddsBettingMarketsByEventError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### MmaV3OddsBettingMarketsByMarketType
- **HTTP**: `GET /v3/mma/odds/{format}/BettingMarketsByMarketType/{eventId}/{marketTypeId}` (Default (api))
- **Notes**: Returns Markets and available outcomes for a given event and market type requested. A lighter call than by BettingEventID as it only includes markets tagged with the specific MarketType, a full list of which is available for each sport in its Betting Metadata endpoint.
- **Signature**: `MmaV3OddsBettingMarketsByMarketType(Format format, string eventId, string marketTypeId, Include? include, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `include` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `include` ← `include`
- **Returns**: `IReadOnlyList<BettingMarket2>`
- **Error**: `SdkException<MmaV3OddsBettingMarketsByMarketTypeError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### MmaV3OddsBettingMetadata
- **HTTP**: `GET /v3/mma/odds/{format}/BettingMetadata` (Default (api))
- **Notes**: Returns the list of MarketTypes, BetTypes, PeriodTypes, OutcomeTypes, and ResultTypes to map the IDs to descriptive names. Also includes a list of the MarketType, BetType &amp; PeriodType combinations which we will have resulting for.
- **Signature**: `MmaV3OddsBettingMetadata(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BettingEntityMetadataCollection1`
- **Error**: `SdkException<MmaV3OddsBettingMetadataError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### MmaV3OddsEventFightOdds
- **HTTP**: `GET /v3/mma/odds/{format}/EventOdds/{eventid}` (Default (api))
- **Notes**: Returns basic fight odds (e.g. moneyline) for all fights in a given event. Only returns the most recently seen odds, not inclusive of line movement.
- **Signature**: `MmaV3OddsEventFightOdds(Format format, string eventid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `EventOdds`
- **Error**: `SdkException<MmaV3OddsEventFightOddsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### MmaV3OddsEventFightOddsLineMovement
- **HTTP**: `GET /v3/mma/odds/{format}/EventOddsLineMovement/{eventid}` (Default (api))
- **Notes**: Returns basic fight odds (e.g. moneyline) for all fights in a given event. Returns the full line movement for the fights. This endpoint has a longer cache as it is meant for historical data/line movement rather than the most up to the second line.
- **Signature**: `MmaV3OddsEventFightOddsLineMovement(Format format, string eventid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `EventOdds`
- **Error**: `SdkException<MmaV3OddsEventFightOddsLineMovementError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### MmaV3OddsSportsbooksByActive
- **HTTP**: `GET /v3/mma/odds/{format}/ActiveSportsbooks` (Default (api))
- **Notes**: A list of all available sportsbooks with their associated unique IDs.
- **Signature**: `MmaV3OddsSportsbooksByActive(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Sportsbook>`
- **Error**: `SdkException<MmaV3OddsSportsbooksByActiveError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
