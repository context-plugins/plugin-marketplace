<!-- Generated file — do not edit; regenerated with the SDK. -->

# History — operations

Accessor: `client.History` · Source: `src/CarsXe/Api/History.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetVehicleHistory

- **Auth**: `options.ApiKeyQuery` OR `options.X402Payment` OR anonymous
- **Signature**: `GetVehicleHistory(GetVehicleHistoryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Vin`
- **Query params (wire ← C#)**: `vin` ← `Vin`, `format` ← `Format`
- **Returns**: `HistoryResponse`
- **Error**: `ApiException<GetVehicleHistoryError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 500] · `TryGetUsageLimitError([NotNullWhen(true)] out UsageLimitError? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetVehicleHistoryRequest` | `src/CarsXe/Requests/History/GetVehicleHistoryRequest.cs` |
| `Format` | `src/CarsXe/Models/Enums/Format.cs` |
| `HistoryResponse` | `src/CarsXe/Models/HistoryResponse.cs` |
| `GetVehicleHistoryError` | `src/CarsXe/Errors/GetVehicleHistoryError.cs` |
| `Error` | `src/CarsXe/Models/Error.cs` |
| `UsageLimitError` | `src/CarsXe/Models/UsageLimitError.cs` |

