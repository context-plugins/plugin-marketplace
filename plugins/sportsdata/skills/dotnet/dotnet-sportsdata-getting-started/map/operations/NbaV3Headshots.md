# NbaV3Headshots — operations

Accessor: `client.NbaV3Headshots` · Source: `Api/NbaV3Headshots.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### NbaV3HeadshotsHeadshots
- **HTTP**: `GET /v3/nba/headshots/{format}/Headshots` (Default (api))
- **Notes**: Headshots
- **Signature**: `NbaV3HeadshotsHeadshots(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Headshot1>`
- **Error**: `SdkException<NbaV3HeadshotsHeadshotsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
