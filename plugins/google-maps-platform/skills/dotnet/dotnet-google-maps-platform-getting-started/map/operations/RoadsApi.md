# RoadsApi — operations

Accessor: `client.RoadsApi` · Source: `Api/RoadsApi.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### NearestRoads
- **HTTP**: `GET /v1/nearestRoads` (Default (www))
- **Notes**: This service returns individual road segments for a given set of GPS coordinates. This services takes up to 100 GPS points and returns the closest road segments for each point. The points passed do not need to be part of a continuous path.
- **Signature**: `NearestRoads(IReadOnlyList<string> points, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `points` ← `points`
- **Returns**: `NearestRoadsResponse`
- **Error**: `SdkException<NearestRoadsApiError>` — **Case A (typed)**
- **Error accessors**: `TryGetNearestRoadsErrorResponse(out NearestRoadsErrorResponse)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SnapToRoads
- **HTTP**: `GET /v1/snaptoroads` (Default (www))
- **Notes**: This service returns the best-fit road geometry for a given set of GPS coordinates. This service takes up to 100 GPS points collected along a route, and returns a similar set of data with the points snapped to the most likely roads the vehicle was traveling along. Optionally, you can request that the points be interpolated, resulting in a path that smoothly follows the geometry of the road.
- **Signature**: `SnapToRoads(IReadOnlyList<string> path, bool? interpolate, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `interpolate` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `path` ← `path`, `interpolate` ← `interpolate`
- **Returns**: `SnapToRoadsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
