# MlbV3Headshots — operations

Accessor: `client.MlbV3Headshots` · Source: `Api/MlbV3Headshots.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### MlbV3HeadshotsHeadshots
- **HTTP**: `GET /v3/mlb/headshots/{format}/Headshots` (Default (api))
- **Notes**: USA Today/IMAGN cropped action headshots for all active NFL players, delivered shortly after the season starts.
- **Signature**: `MlbV3HeadshotsHeadshots(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Headshot1>`
- **Error**: `SdkException<MlbV3HeadshotsHeadshotsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
