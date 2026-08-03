# DirectionsApi — operations

Accessor: `client.DirectionsApi` · Source: `Api/DirectionsApi.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### Directions
- **HTTP**: `GET /maps/api/directions/json` (Default (www))
- **Notes**: The Directions API is a web service that uses an HTTP request to return JSON or XML-formatted directions between locations. You can receive directions for several modes of transportation, such as transit, driving, walking, or cycling.
- **Signature**: `Directions(string destination, string origin, double? arrivalTime, double? departureTime, bool? alternatives, string? avoid, Units1? units, string? waypoints, Language1? language, Mode1? mode, Region1? region, TrafficModel1? trafficModel, string? transitMode, TransitRoutingPreference1? transitRoutingPreference, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 12 params (`arrivalTime` … `transitRoutingPreference`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `destination` ← `destination`, `origin` ← `origin`, `arrival_time` ← `arrivalTime`, `departure_time` ← `departureTime`, `alternatives` ← `alternatives`, `avoid` ← `avoid`, `units` ← `units`, `waypoints` ← `waypoints`, `language` ← `language`, `mode` ← `mode`, `region` ← `region`, `traffic_model` ← `trafficModel`, `transit_mode` ← `transitMode`, `transit_routing_preference` ← `transitRoutingPreference`
- **Returns**: `DirectionsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
