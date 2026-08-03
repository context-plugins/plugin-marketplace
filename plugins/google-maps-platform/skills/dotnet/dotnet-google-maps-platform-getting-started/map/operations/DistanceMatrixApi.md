# DistanceMatrixApi — operations

Accessor: `client.DistanceMatrixApi` · Source: `Api/DistanceMatrixApi.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DistanceMatrix
- **HTTP**: `GET /maps/api/distancematrix/json` (Default (www))
- **Notes**: The Distance Matrix API is a service that provides travel distance and time for a matrix of origins and destinations. The API returns information based on the recommended route between start and end points, as calculated by the Google Maps API, and consists of rows containing duration and distance values for each pair.
- **Signature**: `DistanceMatrix(IReadOnlyList<string> destinations, IReadOnlyList<string> origins, double? arrivalTime, double? departureTime, string? avoid, Units2? units, Language1? language, Mode1? mode, Region1? region, TrafficModel1? trafficModel, string? transitMode, TransitRoutingPreference1? transitRoutingPreference, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 10 params (`arrivalTime` … `transitRoutingPreference`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `destinations` ← `destinations`, `origins` ← `origins`, `arrival_time` ← `arrivalTime`, `departure_time` ← `departureTime`, `avoid` ← `avoid`, `units` ← `units`, `language` ← `language`, `mode` ← `mode`, `region` ← `region`, `traffic_model` ← `trafficModel`, `transit_mode` ← `transitMode`, `transit_routing_preference` ← `transitRoutingPreference`
- **Returns**: `DistanceMatrixResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
