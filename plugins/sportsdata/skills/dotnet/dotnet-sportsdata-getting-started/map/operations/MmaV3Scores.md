# MmaV3Scores — operations

Accessor: `client.MmaV3Scores` · Source: `Api/MmaV3Scores.cs` · 6 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### MmaV3ScoresEvent
- **HTTP**: `GET /v3/mma/scores/{format}/Event/{eventid}` (Default (api))
- **Notes**: Returns all fights that will take place within a given EventId (fight card.)
- **Signature**: `MmaV3ScoresEvent(Format format, string eventid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `EventDetail`
- **Error**: `SdkException<MmaV3ScoresEventError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### MmaV3ScoresFighterProfileByFighter
- **HTTP**: `GET /v3/mma/scores/{format}/Fighter/{fighterid}` (Default (api))
- **Notes**: An individual fighter profile.
- **Signature**: `MmaV3ScoresFighterProfileByFighter(Format format, string fighterid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Fighter`
- **Error**: `SdkException<MmaV3ScoresFighterProfileByFighterError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### MmaV3ScoresFighterProfilesAll
- **HTTP**: `GET /v3/mma/scores/{format}/Fighters` (Default (api))
- **Notes**: A list of all fighters with their basic biographical information and career records.
- **Signature**: `MmaV3ScoresFighterProfilesAll(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Fighter>`
- **Error**: `SdkException<MmaV3ScoresFighterProfilesAllError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### MmaV3ScoresFighterProfilesBasicAll
- **HTTP**: `GET /v3/mma/scores/{format}/FightersBasic` (Default (api))
- **Notes**: A stripped-down list of all fighters with basic profile information, ideal for simple applications.
- **Signature**: `MmaV3ScoresFighterProfilesBasicAll(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<FighterBasic>`
- **Error**: `SdkException<MmaV3ScoresFighterProfilesBasicAllError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### MmaV3ScoresLeagues
- **HTTP**: `GET /v3/mma/scores/{format}/Leagues` (Default (api))
- **Notes**: A list of all leagues (currently this returns just UFC.)
- **Signature**: `MmaV3ScoresLeagues(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<League>`
- **Error**: `SdkException<MmaV3ScoresLeaguesError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### MmaV3ScoresSchedules
- **HTTP**: `GET /v3/mma/scores/{format}/Schedule/{league}/{season}` (Default (api))
- **Notes**: A list of all upcoming Events, from which the Fights can be discovered.
- **Signature**: `MmaV3ScoresSchedules(Format format, string league, string season, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Event>`
- **Error**: `SdkException<MmaV3ScoresSchedulesError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
