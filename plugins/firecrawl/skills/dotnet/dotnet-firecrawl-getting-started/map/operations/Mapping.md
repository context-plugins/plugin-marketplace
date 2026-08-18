# Mapping — operations

Accessor: `client.Mapping` · Source: `Api/Mapping.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### MapUrls
- **HTTP**: `POST /map` (Default (api))
- **Signature**: `MapUrls(MapRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `MapResponse`
- **Error**: `SdkException<MapUrlsError>` — **Case A (typed)**
- **Error accessors**: `TryGetMap402Error1(out Map402Error1)` [402] · `TryGetMap429Error1(out Map429Error1)` [429] · `TryGetMap500Error1(out Map500Error1)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
