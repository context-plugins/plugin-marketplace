# NhlV3PlayByPlay — operations

Accessor: `client.NhlV3PlayByPlay` · Source: `Api/NhlV3PlayByPlay.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### NhlV3PbpPlayByPlayFinal
- **HTTP**: `GET /v3/nhl/pbp/{format}/PlayByPlayFinal/{gameid}` (Default (api))
- **Notes**: Each invididual play, its type and outcome, complete with player and team stats down to the play level, delivered final (after the game ends), called by game.
- **Signature**: `NhlV3PbpPlayByPlayFinal(Format format, string gameid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `PlayByPlay3`
- **Error**: `SdkException<NhlV3PbpPlayByPlayFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NhlV3PbpPlayByPlayLiveFinal
- **HTTP**: `GET /v3/nhl/pbp/{format}/PlayByPlay/{gameid}` (Default (api))
- **Notes**: Each invididual play, its type and outcome, complete with player and team stats down to the play level, delivered live in real-time, called by game.
- **Signature**: `NhlV3PbpPlayByPlayLiveFinal(Format format, string gameid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `PlayByPlay3`
- **Error**: `SdkException<NhlV3PbpPlayByPlayLiveFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NhlV3PbpPlayByPlayDelta
- **HTTP**: `GET /v3/nhl/pbp/{format}/PlayByPlayDelta/{date}/{minutes}` (Default (api))
- **Notes**: This method returns all play-by-plays for a given season and week, but only returns plays that have changed in the last X minutes as specified in your API call. By definition this is a live endpoint, not final.
- **Signature**: `NhlV3PbpPlayByPlayDelta(Format format, string date, string minutes, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<PlayByPlay3>`
- **Error**: `SdkException<NhlV3PbpPlayByPlayDeltaError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
