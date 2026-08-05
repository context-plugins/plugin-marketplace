# RoutingApi — operations

Accessor: `client.RoutingApi` · Source: `Api/RoutingApi.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CalculateRoute
- **HTTP**: `GET /routing` (Default (api))
- **Notes**: Calculates the optimal route between two or more waypoints for various transportation modes, including cars, trucks, bicycles, and walking. The API allows customization through parameters such as road type avoidance (e.g., tolls, highways) and specific route preferences (e.g., shortest or fastest). The response includes detailed directions and turn-by-turn navigation for seamless travel planning.
- **Signature**: `CalculateRoute(string apiKey, string waypoints, Mode mode, RouteTypeEnum? type, UnitsEnum? units, string? lang, string? avoid, string? details, TrafficEnum? traffic, int? maxSpeed, Format? format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 8 params (`type` … `format`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `apiKey` ← `apiKey`, `waypoints` ← `waypoints`, `mode` ← `mode`, `type` ← `type`, `units` ← `units`, `lang` ← `lang`, `avoid` ← `avoid`, `details` ← `details`, `traffic` ← `traffic`, `max_speed` ← `maxSpeed`, `format` ← `format`
- **Returns**: `RoutingResponse`
- **Error**: `SdkException<CalculateRouteError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 429, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
