# MapMatchingApi — operations

Accessor: `client.MapMatchingApi` · Source: `Api/MapMatchingApi.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### MapMatching
- **HTTP**: `POST /mapmatching` (Default (api))
- **Notes**: Aligns geographical coordinates, such as GPS tracks, to the nearest roads and pathways on the existing road network. This endpoint supports various travel modes, including driving, walking, and cycling, to ensure accurate route matching based on the mode of transportation.
- **Signature**: `MapMatching(string apiKey, MapmatchingRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `apiKey` ← `apiKey`
- **Returns**: `MapMatchingResponse`
- **Error**: `SdkException<MapMatchingError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 429, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
