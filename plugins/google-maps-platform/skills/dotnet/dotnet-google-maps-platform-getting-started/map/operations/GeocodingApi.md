# GeocodingApi — operations

Accessor: `client.GeocodingApi` · Source: `Api/GeocodingApi.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### Geocode
- **HTTP**: `GET /maps/api/geocode/json` (Default (www))
- **Notes**: The Geocoding API is a service that provides geocoding and reverse geocoding of addresses. Geocoding is the process of converting addresses (like a street address) into geographic coordinates (like latitude and longitude), which you can use to place markers on a map, or position the map. Reverse geocoding is the process of converting geographic coordinates into a human-readable address. You can also use the Geocoding API to find the address for a given place ID. To see countries currently supported by the Google Maps Platform Geocoding API, please consult the Google Maps coverage data . The accuracy of geocoded locations may vary per country, so you should consider using the returned `location_type` field to determine if a good enough match has been found for the purposes of your application. Please note that the availability of geocoding data depends on our contracts with data providers, so it is subject to change.
- **Signature**: `Geocode(string? address, IReadOnlyList<string>? bounds, IReadOnlyList<string>? components, string? latlng, IReadOnlyList<LocationType>? locationType, string? placeId, IReadOnlyList<ResultType>? resultType, Language1? language, Region1? region, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 9 params (`address` … `region`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `address` ← `address`, `bounds` ← `bounds`, `components` ← `components`, `latlng` ← `latlng`, `location_type` ← `locationType`, `place_id` ← `placeId`, `result_type` ← `resultType`, `language` ← `language`, `region` ← `region`
- **Returns**: `GeocodingResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
