# NhlV3Projections — operations

Accessor: `client.NhlV3Projections` · Source: `Api/NhlV3Projections.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### NhlV3ProjectionsDfsSlatesByDate
- **HTTP**: `GET /v3/nhl/projections/{format}/DfsSlatesByDate/{date}` (Default (api))
- **Notes**: Returns DFS Slates which have not yet started, with their player and salary information.
- **Signature**: `NhlV3ProjectionsDfsSlatesByDate(Format format, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<DfsSlate4>`
- **Error**: `SdkException<NhlV3ProjectionsDfsSlatesByDateError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NhlV3ProjectionsPlayerDetailsByInjured
- **HTTP**: `GET /v3/nhl/projections/{format}/InjuredPlayers` (Default (api))
- **Notes**: This endpoint provides all currently injured NHL players, along with injury details.
- **Signature**: `NhlV3ProjectionsPlayerDetailsByInjured(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Player6>`
- **Error**: `SdkException<NhlV3ProjectionsPlayerDetailsByInjuredError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NhlV3ProjectionsProjectedPlayerGameStatsByDate
- **HTTP**: `GET /v3/nhl/projections/{format}/PlayerGameProjectionStatsByDate/{date}` (Default (api))
- **Notes**: SportsDataIO's proprietary projections, including DFS salary information and injuries, for fantasy players, called by date.
- **Signature**: `NhlV3ProjectionsProjectedPlayerGameStatsByDate(Format format, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<PlayerGameProjection3>`
- **Error**: `SdkException<NhlV3ProjectionsProjectedPlayerGameStatsByDateError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NhlV3ProjectionsStartingGoaltendersByDate
- **HTTP**: `GET /v3/nhl/projections/{format}/StartingGoaltendersByDate/{date}` (Default (api))
- **Notes**: This endpoint provides the projected and confirmed starting goaltenders for NHL games on a given date.
- **Signature**: `NhlV3ProjectionsStartingGoaltendersByDate(Format format, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<StartingGoaltenders>`
- **Error**: `SdkException<NhlV3ProjectionsStartingGoaltendersByDateError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
