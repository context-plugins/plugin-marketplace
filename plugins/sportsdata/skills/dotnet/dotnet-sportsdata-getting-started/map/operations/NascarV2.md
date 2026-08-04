# NascarV2 — operations

Accessor: `client.NascarV2` · Source: `Api/NascarV2.cs` · 13 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### NascarV2DriverDriverProfilesByDriver
- **HTTP**: `GET /nascar/v2/{format}/driver/{driverid}` (Default (api))
- **Notes**: Driver Profiles - by Driver
- **Signature**: `NascarV2DriverDriverProfilesByDriver(Format format, string driverid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Driver`
- **Error**: `SdkException<NascarV2DriverDriverProfilesByDriverError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NascarV2DriverraceprojectionsProjectedPlayerRaceStatsByRace
- **HTTP**: `GET /nascar/v2/{format}/DriverRaceProjections/{raceid}` (Default (api))
- **Notes**: Projected Player Race Stats - by Race
- **Signature**: `NascarV2DriverraceprojectionsProjectedPlayerRaceStatsByRace(Format format, string raceid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<DriverRaceProjection>`
- **Error**: `SdkException<NascarV2DriverraceprojectionsProjectedPlayerRaceStatsByRaceError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NascarV2DriversDriverProfilesAll
- **HTTP**: `GET /nascar/v2/{format}/drivers` (Default (api))
- **Notes**: Driver Profiles - All
- **Signature**: `NascarV2DriversDriverProfilesAll(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Driver>`
- **Error**: `SdkException<NascarV2DriversDriverProfilesAllError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NascarV2DriversbyactiveDriversByActive
- **HTTP**: `GET /nascar/v2/{format}/driversbyactive` (Default (api))
- **Notes**: Drivers - by Active
- **Signature**: `NascarV2DriversbyactiveDriversByActive(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<DriverBasic>`
- **Error**: `SdkException<NascarV2DriversbyactiveDriversByActiveError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NascarV2EntrylistbyraceEntryListByRace
- **HTTP**: `GET /nascar/v2/{format}/EntryListbyRace/{raceid}` (Default (api))
- **Notes**: Entry List - by Race
- **Signature**: `NascarV2EntrylistbyraceEntryListByRace(Format format, string raceid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<DriverRaceBasic>`
- **Error**: `SdkException<NascarV2EntrylistbyraceEntryListByRaceError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NascarV2FantasygamestatsbyraceFantasyPointsByRace
- **HTTP**: `GET /nascar/v2/{format}/FantasyGameStatsByRace/{raceid}` (Default (api))
- **Notes**: Fantasy Points - by Race
- **Signature**: `NascarV2FantasygamestatsbyraceFantasyPointsByRace(Format format, string raceid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `FantasyRace`
- **Error**: `SdkException<NascarV2FantasygamestatsbyraceFantasyPointsByRaceError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NascarV2LeaderboardbasicLeaderboardBasic
- **HTTP**: `GET /nascar/v2/{format}/LeaderboardBasic/{raceid}` (Default (api))
- **Notes**: Leaderboard (Basic)
- **Signature**: `NascarV2LeaderboardbasicLeaderboardBasic(Format format, string raceid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `RaceResultBasic`
- **Error**: `SdkException<NascarV2LeaderboardbasicLeaderboardBasicError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NascarV2LeaderboardbasicfinalLeaderboardBasicFinal
- **HTTP**: `GET /nascar/v2/{format}/LeaderboardBasicFinal/{raceid}` (Default (api))
- **Notes**: Leaderboard (Basic) [Final]
- **Signature**: `NascarV2LeaderboardbasicfinalLeaderboardBasicFinal(Format format, string raceid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `RaceResultBasic`
- **Error**: `SdkException<NascarV2LeaderboardbasicfinalLeaderboardBasicFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NascarV2RaceresultLeaderboardLiveFinal
- **HTTP**: `GET /nascar/v2/{format}/raceresult/{raceid}` (Default (api))
- **Notes**: Leaderboard [Live &amp; Final]
- **Signature**: `NascarV2RaceresultLeaderboardLiveFinal(Format format, string raceid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `RaceResult`
- **Error**: `SdkException<NascarV2RaceresultLeaderboardLiveFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NascarV2RaceresultfinalLeaderboardFinal
- **HTTP**: `GET /nascar/v2/{format}/raceresultfinal/{raceid}` (Default (api))
- **Notes**: Leaderboard [Final]
- **Signature**: `NascarV2RaceresultfinalLeaderboardFinal(Format format, string raceid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `RaceResult`
- **Error**: `SdkException<NascarV2RaceresultfinalLeaderboardFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NascarV2RacesSchedules
- **HTTP**: `GET /nascar/v2/{format}/races/{season}` (Default (api))
- **Notes**: Schedules
- **Signature**: `NascarV2RacesSchedules(Format format, string season, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Race>`
- **Error**: `SdkException<NascarV2RacesSchedulesError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NascarV2SeriesSeries
- **HTTP**: `GET /nascar/v2/{format}/series` (Default (api))
- **Notes**: Lists the different Series - the type of races administered by NASCAR - currently active.
- **Signature**: `NascarV2SeriesSeries(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Series1>`
- **Error**: `SdkException<NascarV2SeriesSeriesError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NascarV2TracksTracks
- **HTTP**: `GET /nascar/v2/{format}/tracks/{season}` (Default (api))
- **Notes**: Tracks
- **Signature**: `NascarV2TracksTracks(Format format, string season, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Tracks>`
- **Error**: `SdkException<NascarV2TracksTracksError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
