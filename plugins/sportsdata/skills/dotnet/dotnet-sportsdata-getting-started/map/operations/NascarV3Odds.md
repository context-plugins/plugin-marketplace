# NascarV3Odds — operations

Accessor: `client.NascarV3Odds` · Source: `Api/NascarV3Odds.cs` · 10 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### NascarV3OddsBettingEventsByDate
- **HTTP**: `GET /v3/nascar/odds/{format}/BettingEventsByDate/{date}` (Default (api))
- **Notes**: The list of current BettingEvents for the given date, from which Betting Market data can be gathered via the Betting Markets by Event endpoint, for all available Betting Market types (e.g. Player Props, Team Props.)
- **Signature**: `NascarV3OddsBettingEventsByDate(Format format, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<BettingEvent4>`
- **Error**: `SdkException<NascarV3OddsBettingEventsByDateError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NascarV3OddsBettingEventsBySeason
- **HTTP**: `GET /v3/nascar/odds/{format}/BettingEvents/{season}` (Default (api))
- **Notes**: The list of current BettingEvents for the given season, from which Betting Market data can be gathered via the Betting Markets by Event endpoint, for all available Betting Market types (e.g. Player Props, Team Props.)
- **Signature**: `NascarV3OddsBettingEventsBySeason(Format format, string season, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<BettingEvent4>`
- **Error**: `SdkException<NascarV3OddsBettingEventsBySeasonError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NascarV3OddsBettingMarket
- **HTTP**: `GET /v3/nascar/odds/{format}/BettingMarket/{marketId}` (Default (api))
- **Notes**: Returns full line movement for a given BettingMarket. Due to the sheer size of the output and the level of detail, it is intended for historical data purposes and not for the most up-to-the-second lines.
- **Signature**: `NascarV3OddsBettingMarket(Format format, string marketId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BettingMarket3`
- **Error**: `SdkException<NascarV3OddsBettingMarketError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NascarV3OddsBettingMarketsByEvent
- **HTTP**: `GET /v3/nascar/odds/{format}/BettingMarkets/{eventId}` (Default (api))
- **Notes**: Returns the markets of all available types (e.g. Player Props, Team Props) and available outcomes for a given BettingEventID.
- **Signature**: `NascarV3OddsBettingMarketsByEvent(Format format, string eventId, Include? include, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `include` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `include` ← `include`
- **Returns**: `IReadOnlyList<BettingMarket3>`
- **Error**: `SdkException<NascarV3OddsBettingMarketsByEventError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NascarV3OddsBettingMarketsByMarketType
- **HTTP**: `GET /v3/nascar/odds/{format}/BettingMarketsByMarketType/{eventID}/{marketTypeID}` (Default (api))
- **Notes**: Returns Markets and available outcomes for a given event and market type requested. A lighter call than by BettingEventID as it only includes markets tagged with the specific MarketType, a full list of which is available for each sport in its Betting Metadata endpoint.
- **Signature**: `NascarV3OddsBettingMarketsByMarketType(Format format, string eventId, string marketTypeId, Include? include, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `include` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `include` ← `include`
- **Returns**: `IReadOnlyList<BettingMarket3>`
- **Error**: `SdkException<NascarV3OddsBettingMarketsByMarketTypeError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NascarV3OddsBettingMarketsByRace
- **HTTP**: `GET /v3/nascar/odds/{format}/BettingMarketsByRaceID/{raceID}` (Default (api))
- **Notes**: Returns the markets and available outcomes for a given RaceID. Works the same as by BettingEventID but requires less ID mapping.
- **Signature**: `NascarV3OddsBettingMarketsByRace(Format format, string raceId, Include? include, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `include` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `include` ← `include`
- **Returns**: `IReadOnlyList<BettingMarket3>`
- **Error**: `SdkException<NascarV3OddsBettingMarketsByRaceError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NascarV3OddsBettingMetadata
- **HTTP**: `GET /v3/nascar/odds/{format}/BettingMetaData` (Default (api))
- **Notes**: Returns the list of MarketTypes, BetTypes, PeriodTypes, OutcomeTypes, and ResultTypes to map the IDs to descriptive names. Also includes a list of the MarketType, BetType &amp; PeriodType combinations which we will have resulting for.
- **Signature**: `NascarV3OddsBettingMetadata(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BettingEntityMetadataCollection1`
- **Error**: `SdkException<NascarV3OddsBettingMetadataError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NascarV3OddsRaceOdds
- **HTTP**: `GET /v3/nascar/odds/{format}/RaceOdds/{Raceid}` (Default (api))
- **Notes**: Returns pre-race for a given race. Only returns the most recently seen odds, not inclusive of line movement.
- **Signature**: `NascarV3OddsRaceOdds(Format format, string raceid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `RaceOdds`
- **Error**: `SdkException<NascarV3OddsRaceOddsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NascarV3OddsRaceOddsLineMovement
- **HTTP**: `GET /v3/nascar/odds/{format}/RaceOddsLineMovement/{Raceid}` (Default (api))
- **Notes**: Returns pre-race for a given race. Only returns the most recently seen odds. This is inclusive of line movement; as it is best suited for viewing historical odds, its cache time is slower than the Race Odds endpoint.
- **Signature**: `NascarV3OddsRaceOddsLineMovement(Format format, string raceid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `RaceOdds`
- **Error**: `SdkException<NascarV3OddsRaceOddsLineMovementError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NascarV3OddsSportsbooksByActive
- **HTTP**: `GET /v3/nascar/odds/{format}/ActiveSportsbooks` (Default (api))
- **Notes**: A list of all available sportsbooks with their associated unique IDs.
- **Signature**: `NascarV3OddsSportsbooksByActive(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Sportsbook>`
- **Error**: `SdkException<NascarV3OddsSportsbooksByActiveError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
