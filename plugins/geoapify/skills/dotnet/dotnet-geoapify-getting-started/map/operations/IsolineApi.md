# IsolineApi — operations

Accessor: `client.IsolineApi` · Source: `Api/IsolineApi.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetIsoline
- **HTTP**: `GET /isoline` (Default (api))
- **Notes**: Returns isolines (Isochrones or Isodistances) based on a specified location, travel mode, and range. Isochrones represent areas accessible within a given travel time, while isodistances represent areas reachable within a certain distance.
- **Signature**: `GetIsoline(string apiKey, double lat, double lon, Type5 type, Mode mode, string range, string? avoid, TrafficEnum? traffic, RouteTypeEnum? routeType, double? maxSpeed, UnitsEnum? units, string? id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`avoid` … `id`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `apiKey` ← `apiKey`, `lat` ← `lat`, `lon` ← `lon`, `type` ← `type`, `mode` ← `mode`, `range` ← `range`, `avoid` ← `avoid`, `traffic` ← `traffic`, `route_type` ← `routeType`, `max_speed` ← `maxSpeed`, `units` ← `units`, `id` ← `id`
- **Returns**: `IsolineResponse`
- **Error**: `SdkException<GetIsolineError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 429, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
