# StationLocator — operations

Accessor: `client.StationLocator` · Source: `Api/StationLocator.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### StationlocatorV1StationsGetAroundLocation
- **HTTP**: `GET /SiteData/v1/stations` (Shell (api-test))
- **Notes**: Returns all sites within specified radius of specified GPS location. Sites of all Types are returned. This call must be used when attempting to establish the station the user is located at as part of fuelling journey (i.e. user has to be within 300m of station to be considered located at the station). This API could also be used as a general query to find nearby Shell locations
- **Signature**: `StationlocatorV1StationsGetAroundLocation(string? offerCode, int? n, IReadOnlyList<string>? amenities, IReadOnlyList<string>? countries, TypeEnum? type, string m = "aroundLocation", double lon = 77.6730103d, double lat = 12.9132169d, double radius = 0.3d, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`offerCode` … `type`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `m` = "aroundLocation", `lon` = 77.6730103d, `lat` = 12.9132169d, `radius` = 0.3d, `requestOptions` = null
- **Query params (wire ← C#)**: `m` ← `m`, `lon` ← `lon`, `lat` ← `lat`, `radius` ← `radius`, `offer_code` ← `offerCode`, `n` ← `n`, `amenities` ← `amenities`, `countries` ← `countries`, `type` ← `type`
- **Returns**: `AroundLocationArray`
- **Error**: `SdkException<StationlocatorV1StationsGetAroundLocationError>` — **Case A (typed)**
- **Error accessors**: `TryGetStationLocatorBadRequest(out StationLocatorBadRequest)` [400] · `TryGetStationLocatorUnauthorized(out StationLocatorUnauthorized)` [401] · `TryGetStationLocatorForbidden(out StationLocatorForbidden)` [403] · `TryGetStationLocatorNotFound(out StationLocatorNotFound)` [404] · `TryGetStationLocatorInternalServerError(out StationLocatorInternalServerError)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
