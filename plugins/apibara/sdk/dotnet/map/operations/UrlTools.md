<!-- Generated file — do not edit; regenerated with the SDK. -->

# UrlTools — operations

Accessor: `client.UrlTools` · Source: `src/Apibara/Api/UrlTools.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetVehicleDetailsFromUrl

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `GetVehicleDetailsFromUrl(GetVehicleDetailsFromUrlRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Url`
- **Query params (wire ← C#)**: `url` ← `Url`
- **Returns**: `VehicleDetailsResponse`
- **Error**: `ApiException<GetVehicleDetailsFromUrlError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 401, 429, 500] · `TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value)` [403, 404, 422, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetVehicleDetailsFromUrlRequest` | `src/Apibara/Requests/UrlTools/GetVehicleDetailsFromUrlRequest.cs` |
| `VehicleDetailsResponse` | `src/Apibara/Models/VehicleDetailsResponse.cs` |
| `GetVehicleDetailsFromUrlError` | `src/Apibara/Errors/GetVehicleDetailsFromUrlError.cs` |
| `ApiErrorModel` | `src/Apibara/Models/ApiErrorModel.cs` |

