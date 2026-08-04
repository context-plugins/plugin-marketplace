# SoccerV4Projections — operations

Accessor: `client.SoccerV4Projections` · Source: `Api/SoccerV4Projections.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### SoccerV4ProjectionsDfsSlatesByDate
- **HTTP**: `GET /v4/soccer/projections/{format}/DfsSlatesByDate/{competition}/{date}` (Default (api))
- **Notes**: Returns DFS Slates which have not yet started, with their player and salary information.
- **Signature**: `SoccerV4ProjectionsDfsSlatesByDate(Format format, string competition, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<DfsSlate5>`
- **Error**: `SdkException<SoccerV4ProjectionsDfsSlatesByDateError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SoccerV4ProjectionsPlayerDetailsByInjured
- **HTTP**: `GET /v4/soccer/projections/{format}/InjuredPlayers/{competition}` (Default (api))
- **Notes**: This endpoint provides all currently injured soccer players by competition, along with injury details.
- **Signature**: `SoccerV4ProjectionsPlayerDetailsByInjured(Format format, string competition, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Player7>`
- **Error**: `SdkException<SoccerV4ProjectionsPlayerDetailsByInjuredError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SoccerV4ProjectionsProjectedPlayerGameStatsByDate
- **HTTP**: `GET /v4/soccer/projections/{format}/PlayerGameProjectionStatsByDate/{competition}/{date}` (Default (api))
- **Notes**: SportsDataIO's proprietary projections, including DFS salary information and injuries, for fantasy players, called by date.
- **Signature**: `SoccerV4ProjectionsProjectedPlayerGameStatsByDate(Format format, string competition, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<PlayerGameProjection4>`
- **Error**: `SdkException<SoccerV4ProjectionsProjectedPlayerGameStatsByDateError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SoccerV4ProjectionsUpcomingDfsSlatesByCompetition
- **HTTP**: `GET /v4/soccer/projections/{format}/UpcomingDfsSlatesByCompetition/{competition}` (Default (api))
- **Notes**: Returns upcoming DFS Slates which have not yet started, with their player and salary information, by competition.
- **Signature**: `SoccerV4ProjectionsUpcomingDfsSlatesByCompetition(Format format, string competition, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<DfsSlate5>`
- **Error**: `SdkException<SoccerV4ProjectionsUpcomingDfsSlatesByCompetitionError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
