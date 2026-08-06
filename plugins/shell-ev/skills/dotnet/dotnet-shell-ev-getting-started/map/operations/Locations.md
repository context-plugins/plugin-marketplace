# Locations — operations

Accessor: `client.Locations` · Source: `Api/Locations.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### EvLocationsById
- **HTTP**: `GET /locations/{id}` (Default (api))
- **Notes**: This API provides the details on a single Shell Recharge location. The query for a single location is to be made using the Unique Internal identifier used to refer to this Location by Shell Recharge. (Uid from List of locations API)
- **Signature**: `EvLocationsById(string id, string? providerId, string? since, Guid requestId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `providerId` — nullable, no default → **must pass explicitly**
  - `since` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `providerId` ← `providerId`, `since` ← `since`
- **Returns**: `ResponseModel`
- **Error**: `SdkException<EvLocationsByIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequest(out BadRequest)` [400] · `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetNotFound(out NotFound)` [404] · `TryGetTooManyRequests(out TooManyRequests)` [429] · `TryGetInternalServerError(out InternalServerError)` [500] · `TryGetServiceunavailable(out Serviceunavailable)` [503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetEvlocations
- **HTTP**: `GET /locations` (Default (api))
- **Notes**: This API provides the list of all Shell Recharge locations. The list includes all Shell Recharge network and all locations available through our roaming partners. The end point provides flexible search criteria in order to get the list of Shell Recharge Network. The end point provides the details such as the exact location/address of the site along with the up-to-date status information of all the charging units in the site. Supported Search Options Based on status of the Charging units. Eg : Available or Occupied Based on available connector types. Based on minimum Power output (in kW) available Based on a specific charging unit ID (EVSE ID)
- **Signature**: `GetEvlocations(GetEvlocationsEvseStatus? evseStatus, GetEvlocationsConnectorTypes? connectorTypes, double? connectorMinPower, GetEvlocationsAuthorizationMethods? authorizationMethods, bool? withOperatorName, string? evseId, string? locationExternalId, string? evseExternalId, int? pageNumber, int? perPage, string? updatedSince, IReadOnlyList<string>? country, IReadOnlyList<string>? excludeCountry, Guid requestId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 13 params (`evseStatus` … `excludeCountry`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `evseStatus` ← `evseStatus`, `connectorTypes` ← `connectorTypes`, `connectorMinPower` ← `connectorMinPower`, `authorizationMethods` ← `authorizationMethods`, `withOperatorName` ← `withOperatorName`, `evseId` ← `evseId`, `locationExternalId` ← `locationExternalId`, `evseExternalId` ← `evseExternalId`, `pageNumber` ← `pageNumber`, `perPage` ← `perPage`, `updatedSince` ← `updatedSince`, `country` ← `country`, `excludeCountry` ← `excludeCountry`
- **Returns**: `ResponseModel`
- **Error**: `SdkException<GetEvlocationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequest(out BadRequest)` [400] · `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetNotFound(out NotFound)` [404] · `TryGetTooManyRequests(out TooManyRequests)` [429] · `TryGetInternalServerError(out InternalServerError)` [500] · `TryGetServiceunavailable(out Serviceunavailable)` [503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### LocationsMarkers
- **HTTP**: `GET /locations/markers` (Default (api))
- **Notes**: This API, when given a set of bounds on the geographical front (East,West, North, South) will return a set of Markers that fall within the requested bounds. The API will automatically group locations at the same position on the map into one Marker. The API also provide further search options to filter the result set. Based on status of the Charging units. Eg : Available or Occupied Based on available connector types. Based on minimum Power output (in kW) available
- **Signature**: `LocationsMarkers(double west, double south, double east, double north, string zoom, GetEvlocationsEvseStatus? evseStatus, GetEvlocationsConnectorTypes? connectorTypes, double? connectorMinPower, GetEvlocationsAuthorizationMethods? authorizationMethods, bool? withOperatorName, bool? withMaxPower, string? locationExternalId, string? evseId, string? evseExternalId, string? operatorName, IReadOnlyList<string>? country, IReadOnlyList<string>? excludeCountry, Guid requestId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 12 params (`evseStatus` … `excludeCountry`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `west` ← `west`, `south` ← `south`, `east` ← `east`, `north` ← `north`, `zoom` ← `zoom`, `evseStatus` ← `evseStatus`, `connectorTypes` ← `connectorTypes`, `connectorMinPower` ← `connectorMinPower`, `authorizationMethods` ← `authorizationMethods`, `withOperatorName` ← `withOperatorName`, `withMaxPower` ← `withMaxPower`, `locationExternalId` ← `locationExternalId`, `evseId` ← `evseId`, `evseExternalId` ← `evseExternalId`, `operatorName` ← `operatorName`, `country` ← `country`, `excludeCountry` ← `excludeCountry`
- **Returns**: `SingleLocationMarkerResponse`
- **Error**: `SdkException<LocationsMarkersError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequest(out BadRequest)` [400] · `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetNotFound(out NotFound)` [404] · `TryGetTooManyRequests(out TooManyRequests)` [429] · `TryGetInternalServerError(out InternalServerError)` [500] · `TryGetServiceunavailable(out Serviceunavailable)` [503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NearbyLocations
- **HTTP**: `GET /locations/nearby` (Default (api))
- **Notes**: This API provides the list of all nearby Shell Recharge locations based on the latitude and longitude provided in the request. The list includes all Shell Recharge network and all sites available through our roaming partners. The end point provides the details such as the exact location/address of the site along with the up-to-date status information of all the charging units in the site. Supported Search Options Based on latitude and longitude of the location. (Mandatory) Based on status of the Charging units. Eg : Available or Occupied Based on available connector types. Based on minimum Power output (in kW) available
- **Signature**: `NearbyLocations(double latitude, double longitude, string? locationExternalId, string? evseId, string? evseExternalId, string? operatorName, GetEvlocationsEvseStatus? evseStatus, NearbyLocationsConnectorTypes? connectorTypes, double? connectorMinPower, GetEvlocationsAuthorizationMethods? authorizationMethods, bool? withOperatorName, bool? withMaxPower, IReadOnlyList<string>? country, IReadOnlyList<string>? excludeCountry, Guid requestId, double? limit = 25d, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 12 params (`locationExternalId` … `excludeCountry`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `limit` = 25d, `requestOptions` = null
- **Query params (wire ← C#)**: `latitude` ← `latitude`, `longitude` ← `longitude`, `limit` ← `limit`, `locationExternalId` ← `locationExternalId`, `evseId` ← `evseId`, `evseExternalId` ← `evseExternalId`, `operatorName` ← `operatorName`, `evseStatus` ← `evseStatus`, `connectorTypes` ← `connectorTypes`, `connectorMinPower` ← `connectorMinPower`, `authorizationMethods` ← `authorizationMethods`, `withOperatorName` ← `withOperatorName`, `withMaxPower` ← `withMaxPower`, `country` ← `country`, `excludeCountry` ← `excludeCountry`
- **Returns**: `ResponseModel`
- **Error**: `SdkException<NearbyLocationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequest(out BadRequest)` [400] · `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetNotFound(out NotFound)` [404] · `TryGetTooManyRequests(out TooManyRequests)` [429] · `TryGetInternalServerError(out InternalServerError)` [500] · `TryGetServiceunavailable(out Serviceunavailable)` [503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
