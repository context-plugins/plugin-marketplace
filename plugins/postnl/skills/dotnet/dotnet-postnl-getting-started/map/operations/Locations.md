# Locations — operations

Accessor: `client.Locations` · Source: `Api/Locations.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetPickupLocation
- **HTTP**: `GET /shipment/v2_1/locations/lookup` (Postnl (api))
- **Notes**: Request example: curl -X GET "https://api-sandbox.postnl.nl/shipment/v2_1/locations/lookup?LocationCode=216877" \ -H "Accept: application/json" \ -H "apikey: APIKEY-HERE"
- **Signature**: `GetPickupLocation(string locationCode, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `LocationCode` ← `locationCode`
- **Returns**: `LocationResponseSingle`
- **Error**: `SdkException<GetPickupLocationError>` — **Case A (typed)**
- **Error accessors**: `TryGetInvalidRequest(out InvalidRequest)` [400] · `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetMethodNotAllowedOnlyGetPost(out MethodNotAllowedOnlyGetPost)` [405] · `TryGetTooManyRequests(out TooManyRequests)` [429] · `TryGetInternalServerError(out InternalServerError)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetPickupLocationsByAddress
- **HTTP**: `GET /shipment/v2_1/locations/nearest` (Postnl (api))
- **Notes**: Request example: curl -X GET "https://api-sandbox.postnl.nl/shipment/v2_1/locations/nearest?CountryCode=NL&amp;PostalCode=2132WT&amp;City=Hoofddorp&amp;Street=Siriusdreef&amp;HouseNumber=42&amp;HouseNumberExtension=-60&amp;DeliveryDate=24-12-2022&amp;OpeningTime=09%3A00%3A00" \ -H "Accept: application/json" \ -H "apikey: APIKEY-HERE" \
- **Signature**: `GetPickupLocationsByAddress(Countrycode countryCode, string postalCode, string? city, string? street, int? houseNumber, string? houseNumberExtension, string? deliveryDate, string? openingTime, IReadOnlyList<LocationsDeliveryOption>? deliveryOptions, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`city` … `deliveryOptions`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `CountryCode` ← `countryCode`, `PostalCode` ← `postalCode`, `City` ← `city`, `Street` ← `street`, `HouseNumber` ← `houseNumber`, `HouseNumberExtension` ← `houseNumberExtension`, `DeliveryDate` ← `deliveryDate`, `OpeningTime` ← `openingTime`, `DeliveryOptions` ← `deliveryOptions`
- **Returns**: `LocationsResponseMultiple`
- **Error**: `SdkException<GetPickupLocationsByAddressError>` — **Case A (typed)**
- **Error accessors**: `TryGetInvalidRequest(out InvalidRequest)` [400] · `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetMethodNotAllowedOnlyGetPost(out MethodNotAllowedOnlyGetPost)` [405] · `TryGetTooManyRequests(out TooManyRequests)` [429] · `TryGetInternalServerError(out InternalServerError)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetPickupLocationsByCoordinates
- **HTTP**: `GET /shipment/v2_1/locations/nearest/geocode` (Postnl (api))
- **Notes**: Request example: curl -X GET "https://api-sandbox.postnl.nl/shipment/v2_1/locations/nearest/geocode?Latitude=52.2864669620795&amp;Longitude=4.68239055845954&amp;CountryCode=NL&amp;DeliveryDate=24-12-2022&amp;OpeningTime=09%3A00%3A00" \ -H "Accept: application/json" \ -H "apikey: APIKEY-HERE" \
- **Signature**: `GetPickupLocationsByCoordinates(double latitude, double longitude, Countrycode countryCode, string? deliveryDate, string? openingTime, IReadOnlyList<LocationsDeliveryOption>? deliveryOptions, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `deliveryDate` — nullable, no default → **must pass explicitly**
  - `openingTime` — nullable, no default → **must pass explicitly**
  - `deliveryOptions` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Latitude` ← `latitude`, `Longitude` ← `longitude`, `CountryCode` ← `countryCode`, `DeliveryDate` ← `deliveryDate`, `OpeningTime` ← `openingTime`, `DeliveryOptions` ← `deliveryOptions`
- **Returns**: `LocationsResponseMultiple`
- **Error**: `SdkException<GetPickupLocationsByCoordinatesError>` — **Case A (typed)**
- **Error accessors**: `TryGetInvalidRequest(out InvalidRequest)` [400] · `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetMethodNotAllowedOnlyGetPost(out MethodNotAllowedOnlyGetPost)` [405] · `TryGetTooManyRequests(out TooManyRequests)` [429] · `TryGetInternalServerError(out InternalServerError)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetPickupLocationsWithinArea
- **HTTP**: `GET /shipment/v2_1/locations/area` (Postnl (api))
- **Notes**: Request example: curl -X GET "https://api-sandbox.postnl.nl/shipment/v2_1/locations/area?LatitudeNorth=52.156439&amp;LongitudeWest=5.015643&amp;LatitudeSouth=52.017473&amp;LongitudeEast=5.065254&amp;CountryCode=NL&amp;DeliveryDate=24-12-2023&amp;OpeningTime=09%3A00%3A00" \ -H "Accept: application/json" \ -H "apikey: APIKEY-HERE" \
- **Signature**: `GetPickupLocationsWithinArea(double latitudeNorth, double longitudeWest, double latitudeSouth, double longitudeEast, Countrycode countryCode, string? deliveryDate, string? openingTime, IReadOnlyList<LocationsDeliveryOption>? deliveryOptions, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `deliveryDate` — nullable, no default → **must pass explicitly**
  - `openingTime` — nullable, no default → **must pass explicitly**
  - `deliveryOptions` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `LatitudeNorth` ← `latitudeNorth`, `LongitudeWest` ← `longitudeWest`, `LatitudeSouth` ← `latitudeSouth`, `LongitudeEast` ← `longitudeEast`, `CountryCode` ← `countryCode`, `DeliveryDate` ← `deliveryDate`, `OpeningTime` ← `openingTime`, `DeliveryOptions` ← `deliveryOptions`
- **Returns**: `LocationsResponseMultiple`
- **Error**: `SdkException<GetPickupLocationsWithinAreaError>` — **Case A (typed)**
- **Error accessors**: `TryGetInvalidRequest(out InvalidRequest)` [400] · `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetMethodNotAllowedOnlyGetPost(out MethodNotAllowedOnlyGetPost)` [405] · `TryGetTooManyRequests(out TooManyRequests)` [429] · `TryGetInternalServerError(out InternalServerError)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
