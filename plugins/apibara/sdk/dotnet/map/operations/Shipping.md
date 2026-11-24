<!-- Generated file — do not edit; regenerated with the SDK. -->

# Shipping — operations

Accessor: `client.Shipping` · Source: `src/Apibara/Api/Shipping.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetAuctionToPortShipping

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `GetAuctionToPortShipping(GetAuctionToPortShippingRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `vin` ← `Vin`, `lot_number` ← `LotNumber`, `ports` ← `Ports`
- **Returns**: `ShippingResponse`
- **Error**: `ApiException<GetAuctionToPortShippingError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 401, 429, 500] · `TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value)` [403, 404, 422, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetAuctionToPortShippingRequest` | `src/Apibara/Requests/Shipping/GetAuctionToPortShippingRequest.cs` |
| `ShippingResponse` | `src/Apibara/Models/ShippingResponse.cs` |
| `GetAuctionToPortShippingError` | `src/Apibara/Errors/GetAuctionToPortShippingError.cs` |
| `ApiErrorModel` | `src/Apibara/Models/ApiErrorModel.cs` |

### GetVehicleShipping

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `GetVehicleShipping(GetVehicleShippingRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SlugVin`
- **Query params (wire ← C#)**: `ports` ← `Ports`
- **Returns**: `ShippingResponse`
- **Error**: `ApiException<GetVehicleShippingError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 401, 429, 500] · `TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value)` [403, 404, 422, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetVehicleShippingRequest` | `src/Apibara/Requests/Shipping/GetVehicleShippingRequest.cs` |
| `ShippingResponse` | `src/Apibara/Models/ShippingResponse.cs` |
| `GetVehicleShippingError` | `src/Apibara/Errors/GetVehicleShippingError.cs` |
| `ApiErrorModel` | `src/Apibara/Models/ApiErrorModel.cs` |

