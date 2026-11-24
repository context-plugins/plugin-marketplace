<!-- Generated file — do not edit; regenerated with the SDK. -->

# RelatedVehicles — operations

Accessor: `client.RelatedVehicles` · Source: `src/Apibara/Api/RelatedVehicles.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetRelatedVehicles

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `GetRelatedVehicles(GetRelatedVehiclesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SlugVin`
- **Returns**: `VehicleListResponse`
- **Error**: `ApiException<GetRelatedVehiclesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 401, 429, 500] · `TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value)` [403, 404, 422, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRelatedVehiclesRequest` | `src/Apibara/Requests/RelatedVehicles/GetRelatedVehiclesRequest.cs` |
| `VehicleListResponse` | `src/Apibara/Models/VehicleListResponse.cs` |
| `GetRelatedVehiclesError` | `src/Apibara/Errors/GetRelatedVehiclesError.cs` |
| `ApiErrorModel` | `src/Apibara/Models/ApiErrorModel.cs` |

