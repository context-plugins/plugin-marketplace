# GolfV3Headshots — operations

Accessor: `client.GolfV3Headshots` · Source: `Api/GolfV3Headshots.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GolfV3HeadshotsHeadshots
- **HTTP**: `GET /v3/golf/headshots/{format}/Headshots` (Default (api))
- **Notes**: Headshots
- **Signature**: `GolfV3HeadshotsHeadshots(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Headshot>`
- **Error**: `SdkException<GolfV3HeadshotsHeadshotsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
