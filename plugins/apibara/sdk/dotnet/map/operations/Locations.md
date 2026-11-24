<!-- Generated file — do not edit; regenerated with the SDK. -->

# Locations — operations

Accessor: `client.Locations` · Source: `src/Apibara/Api/Locations.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ListAuctionLocations

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `ListAuctionLocations(ListAuctionLocationsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `platform` ← `Platform`, `state` ← `State`, `facility_id` ← `FacilityId`, `q` ← `Q`, `zip` ← `Zip`, `radius` ← `Radius`, `units` ← `Units`, `per_page` ← `PerPage`
- **Returns**: `LocationsResponse`
- **Error**: `ApiException<ListAuctionLocationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 401, 429, 500] · `TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value)` [403, 404, 422, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListAuctionLocationsRequest` | `src/Apibara/Requests/Locations/ListAuctionLocationsRequest.cs` |
| `Platform` | `src/Apibara/Models/Enums/Platform.cs` |
| `Units` | `src/Apibara/Models/Enums/Units.cs` |
| `LocationsResponse` | `src/Apibara/Models/LocationsResponse.cs` |
| `ListAuctionLocationsError` | `src/Apibara/Errors/ListAuctionLocationsError.cs` |
| `ApiErrorModel` | `src/Apibara/Models/ApiErrorModel.cs` |

