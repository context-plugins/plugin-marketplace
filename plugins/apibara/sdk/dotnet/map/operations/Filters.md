<!-- Generated file — do not edit; regenerated with the SDK. -->

# Filters — operations

Accessor: `client.Filters` · Source: `src/Apibara/Api/Filters.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetVehicleFilters

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `GetVehicleFilters(GetVehicleFiltersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `make` ← `Make`, `series` ← `Series`, `model` ← `Model`
- **Returns**: `FiltersResponse`
- **Error**: `ApiException<GetVehicleFiltersError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 401, 429, 500] · `TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value)` [403, 404, 422, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetVehicleFiltersRequest` | `src/Apibara/Requests/Filters/GetVehicleFiltersRequest.cs` |
| `FiltersResponse` | `src/Apibara/Models/FiltersResponse.cs` |
| `GetVehicleFiltersError` | `src/Apibara/Errors/GetVehicleFiltersError.cs` |
| `ApiErrorModel` | `src/Apibara/Models/ApiErrorModel.cs` |

