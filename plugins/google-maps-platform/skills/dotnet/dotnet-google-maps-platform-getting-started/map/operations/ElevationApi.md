# ElevationApi — operations

Accessor: `client.ElevationApi` · Source: `Api/ElevationApi.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### Elevation
- **HTTP**: `GET /maps/api/elevation/json` (Default (www))
- **Notes**: The Elevation API provides a simple interface to query locations on the earth for elevation data. Additionally, you may request sampled elevation data along paths, allowing you to calculate elevation changes along routes. With the Elevation API, you can develop hiking and biking applications, positioning applications, or low resolution surveying applications. Elevation data is available for all locations on the surface of the earth, including depth locations on the ocean floor (which return negative values). In those cases where Google does not possess exact elevation measurements at the precise location you request, the service interpolates and returns an averaged value using the four nearest locations. Elevation values are expressed relative to local mean sea level (LMSL). Requests to the Elevation API utilize different parameters based on whether the request is for discrete locations or for an ordered path. For discrete locations, requests for elevation return data on the specific locations passed in the request; for paths, elevation requests are instead sampled along the given path.
- **Signature**: `Elevation(IReadOnlyList<string>? locations, IReadOnlyList<string>? path, double? samples, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `locations` — nullable, no default → **must pass explicitly**
  - `path` — nullable, no default → **must pass explicitly**
  - `samples` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `locations` ← `locations`, `path` ← `path`, `samples` ← `samples`
- **Returns**: `MapsApiElevationJsonResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
