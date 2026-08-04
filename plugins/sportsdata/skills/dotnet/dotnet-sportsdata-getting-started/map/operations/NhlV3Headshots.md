# NhlV3Headshots — operations

Accessor: `client.NhlV3Headshots` · Source: `Api/NhlV3Headshots.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### NhlV3HeadshotsHeadshots
- **HTTP**: `GET /v3/nhl/headshots/{format}/Headshots` (Default (api))
- **Notes**: Headshots
- **Signature**: `NhlV3HeadshotsHeadshots(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Headshot1>`
- **Error**: `SdkException<NhlV3HeadshotsHeadshotsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
