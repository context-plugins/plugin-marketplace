# NflV3PlayByPlay — operations

Accessor: `client.NflV3PlayByPlay` · Source: `Api/NflV3PlayByPlay.cs` · 6 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### NflV3PbpPlayByPlayByTeamFinal
- **HTTP**: `GET /v3/nfl/pbp/{format}/PlayByPlayFinal/{season}/{week}/{hometeam}` (Default (api))
- **Notes**: Each invididual play, its type and outcome, complete with player and team stats down to the play level, delivered final (after the game ends), called by team.
- **Signature**: `NflV3PbpPlayByPlayByTeamFinal(Format format, string season, string week, string hometeam, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `PlayByPlay2`
- **Error**: `SdkException<NflV3PbpPlayByPlayByTeamFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3PbpPlayByPlayByTeamLiveFinal
- **HTTP**: `GET /v3/nfl/pbp/{format}/PlayByPlay/{season}/{week}/{hometeam}` (Default (api))
- **Notes**: Each invididual play, its type and outcome, complete with player and team stats down to the play level, delivered live in real-time, called by team.
- **Signature**: `NflV3PbpPlayByPlayByTeamLiveFinal(Format format, string season, string week, string hometeam, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `PlayByPlay2`
- **Error**: `SdkException<NflV3PbpPlayByPlayByTeamLiveFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3PbpPlayByPlayFinal
- **HTTP**: `GET /v3/nfl/pbp/{format}/PlayByPlayFinal/{gameid}` (Default (api))
- **Notes**: Each invididual play, its type and outcome, complete with player and team stats down to the play level, delivered final (after the game ends), called by team.
- **Signature**: `NflV3PbpPlayByPlayFinal(Format format, string gameid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `PlayByPlay2`
- **Error**: `SdkException<NflV3PbpPlayByPlayFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3PbpPlayByPlayLiveFinal
- **HTTP**: `GET /v3/nfl/pbp/{format}/PlayByPlay/{gameid}` (Default (api))
- **Notes**: Each invididual play, its type and outcome, complete with player and team stats down to the play level, delivered live in real-time, called by game.
- **Signature**: `NflV3PbpPlayByPlayLiveFinal(Format format, string gameid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `PlayByPlay2`
- **Error**: `SdkException<NflV3PbpPlayByPlayLiveFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3PbpPlayByPlayDelta
- **HTTP**: `GET /v3/nfl/pbp/{format}/PlayByPlayDelta/{season}/{week}/{minutes}` (Default (api))
- **Notes**: This method returns all play-by-plays for a given season and week, but only returnsplays that have changed in the last X minutes as specified in your API call. by definition this is a live endpoint, not final.
- **Signature**: `NflV3PbpPlayByPlayDelta(Format format, string season, string week, string minutes, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<PlayByPlay2>`
- **Error**: `SdkException<NflV3PbpPlayByPlayDeltaError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NflV3PbpPlayByPlaySimulation
- **HTTP**: `GET /v3/nfl/pbp/{format}/SimulatedPlayByPlay/{numberofplays}` (Default (api))
- **Notes**: Gets simulated live play-by-play of NFL games, covering the Conference Championship games on January 21, 2018.
- **Signature**: `NflV3PbpPlayByPlaySimulation(Format format, string numberofplays, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<PlayByPlay2>`
- **Error**: `SdkException<NflV3PbpPlayByPlaySimulationError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
