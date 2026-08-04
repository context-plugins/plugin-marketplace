# MmaV3Stats — operations

Accessor: `client.MmaV3Stats` · Source: `Api/MmaV3Stats.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### MmaV3StatsFightBasicFinal
- **HTTP**: `GET /v3/mma/stats/{format}/FightBasicFinal/{fightid}` (Default (api))
- **Notes**: Simple fight information, such as the number of rounds, the clock etc., delivered after the fight only.
- **Signature**: `MmaV3StatsFightBasicFinal(Format format, string fightid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `FightBasic`
- **Error**: `SdkException<MmaV3StatsFightBasicFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### MmaV3StatsFightBasicLiveFinal
- **HTTP**: `GET /v3/mma/stats/{format}/FightBasic/{fightid}` (Default (api))
- **Notes**: Simple fight information, such as the number of rounds, the clock etc., delivered live and after the fight.
- **Signature**: `MmaV3StatsFightBasicLiveFinal(Format format, string fightid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `FightBasic`
- **Error**: `SdkException<MmaV3StatsFightBasicLiveFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### MmaV3StatsFightFinal
- **HTTP**: `GET /v3/mma/stats/{format}/FightFinal/{fightid}` (Default (api))
- **Notes**: Statistical, round-by-round data for a given FightId, delivered after the fight ends.
- **Signature**: `MmaV3StatsFightFinal(Format format, string fightid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `FightDetail`
- **Error**: `SdkException<MmaV3StatsFightFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### MmaV3StatsFightLiveFinal
- **HTTP**: `GET /v3/mma/stats/{format}/Fight/{fightid}` (Default (api))
- **Notes**: Statistical, round-by-round data for a given FightId, delivered round-by-round and confirmed post-fight.
- **Signature**: `MmaV3StatsFightLiveFinal(Format format, string fightid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `FightDetail`
- **Error**: `SdkException<MmaV3StatsFightLiveFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
