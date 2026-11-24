<!-- Generated file — do not edit; regenerated with the SDK. -->

# VehicleHistory — operations

Accessor: `client.VehicleHistory` · Source: `src/Apibara/Api/VehicleHistory.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetVehicleHistory

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `GetVehicleHistory(GetVehicleHistoryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SlugVin`
- **Query params (wire ← C#)**: `per_page` ← `PerPage`, `cursor` ← `Cursor`
- **Returns**: `VehicleHistoryResponse`
- **Error**: `ApiException<GetVehicleHistoryError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 401, 429, 500] · `TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value)` [403, 404, 422, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetVehicleHistoryRequest` | `src/Apibara/Requests/VehicleHistory/GetVehicleHistoryRequest.cs` |
| `VehicleHistoryResponse` | `src/Apibara/Models/VehicleHistoryResponse.cs` |
| `GetVehicleHistoryError` | `src/Apibara/Errors/GetVehicleHistoryError.cs` |
| `ApiErrorModel` | `src/Apibara/Models/ApiErrorModel.cs` |

