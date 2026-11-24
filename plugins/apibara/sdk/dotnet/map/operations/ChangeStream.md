<!-- Generated file — do not edit; regenerated with the SDK. -->

# ChangeStream — operations

Accessor: `client.ChangeStream` · Source: `src/Apibara/Api/ChangeStream.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ListVehicleChanges

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `ListVehicleChanges(ListVehicleChangesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `after` ← `After`, `limit` ← `Limit`, `platform` ← `Platform`, `event_type` ← `EventType`, `terminal` ← `Terminal`, `lot_number` ← `LotNumber`, `vin` ← `Vin`, `include_record` ← `IncludeRecord`
- **Returns**: `VehicleChangesResponse`
- **Error**: `ApiException<ListVehicleChangesError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value)` [401, 422] · `TryGetChangeCursorExpiredResponse([NotNullWhen(true)] out ChangeCursorExpiredResponse? value)` [410] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListVehicleChangesRequest` | `src/Apibara/Requests/ChangeStream/ListVehicleChangesRequest.cs` |
| `Platform` | `src/Apibara/Models/Enums/Platform.cs` |
| `EventType` | `src/Apibara/Models/Enums/EventType.cs` |
| `IncludeRecord1` | `src/Apibara/Models/AnyOf/IncludeRecord1.cs` |
| `VehicleChangesResponse` | `src/Apibara/Models/VehicleChangesResponse.cs` |
| `ListVehicleChangesError` | `src/Apibara/Errors/ListVehicleChangesError.cs` |
| `ApiErrorModel` | `src/Apibara/Models/ApiErrorModel.cs` |
| `ChangeCursorExpiredResponse` | `src/Apibara/Models/ChangeCursorExpiredResponse.cs` |

