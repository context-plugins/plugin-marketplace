# Locations — operations

Accessor: `client.Locations` · Source: `Api/Locations.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateLocation
- **HTTP**: `POST /v2/locations` (Default (connect))
- **Notes**: Creates a location . Creating new locations allows for separate configuration of receipt layouts, item prices, and sales reports. Developers can use locations to separate sales activity through applications that integrate with Square from sales activity elsewhere in a seller's account. Locations created programmatically with the Locations API last forever and are visible to the seller for their own management. Therefore, ensure that each location has a sensible and unique name.
- **Signature**: `CreateLocation(CreateLocationRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CreateLocationResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListLocations
- **HTTP**: `GET /v2/locations` (Default (connect))
- **Notes**: Provides details about all of the seller's locations , including those with an inactive status. Locations are listed alphabetically by `name`.
- **Signature**: `ListLocations(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ListLocationsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### RetrieveLocation
- **HTTP**: `GET /v2/locations/{location_id}` (Default (connect))
- **Notes**: Retrieves details of a single location. Specify "main" as the location ID to retrieve details of the main location .
- **Signature**: `RetrieveLocation(string locationId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `RetrieveLocationResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpdateLocation
- **HTTP**: `PUT /v2/locations/{location_id}` (Default (connect))
- **Notes**: Updates a location .
- **Signature**: `UpdateLocation(string locationId, UpdateLocationRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `UpdateLocationResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
