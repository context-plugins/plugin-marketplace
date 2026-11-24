<!-- Generated file — do not edit; regenerated with the SDK. -->

# VehicleAuction — operations

Accessor: `client.VehicleAuction` · Source: `src/Apibara/Api/VehicleAuction.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetVehicleSellerReserve

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `GetVehicleSellerReserve(GetVehicleSellerReserveRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SlugVin`
- **Query params (wire ← C#)**: `include_events` ← `IncludeEvents`, `limit` ← `Limit`
- **Returns**: `VehiclesReserveResponse`
- **Error**: `ApiException<GetVehicleSellerReserveError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 429] · `TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetVehicleSellerReserveRequest` | `src/Apibara/Requests/VehicleAuction/GetVehicleSellerReserveRequest.cs` |
| `VehiclesReserveResponse` | `src/Apibara/Models/VehiclesReserveResponse.cs` |
| `GetVehicleSellerReserveError` | `src/Apibara/Errors/GetVehicleSellerReserveError.cs` |
| `ApiErrorModel` | `src/Apibara/Models/ApiErrorModel.cs` |

