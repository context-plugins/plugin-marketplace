# SoccerV4Headshots — operations

Accessor: `client.SoccerV4Headshots` · Source: `Api/SoccerV4Headshots.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### SoccerV4HeadshotsHeadshots
- **HTTP**: `GET /v4/soccer/headshots/{format}/Headshots` (Default (api))
- **Notes**: USA Today/IMAGN cropped action headshots for all active MLS players only, delivered shortly after the season starts.
- **Signature**: `SoccerV4HeadshotsHeadshots(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Headshot1>`
- **Error**: `SdkException<SoccerV4HeadshotsHeadshotsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
