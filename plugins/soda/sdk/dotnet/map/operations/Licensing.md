<!-- Generated file — do not edit; regenerated with the SDK. -->

# Licensing — operations

Accessor: `client.Licensing` · Source: `src/Soda/Api/Licensing.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetApiV1LicensingSpuConsumption

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `GetApiV1LicensingSpuConsumption(GetApiV1LicensingSpuConsumptionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `from` ← `From`, `to` ← `To`
- **Returns**: `PublicApiSpuConsumptionResponse`
- **Error**: `ApiException<GetApiV1LicensingSpuConsumptionError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiV1LicensingSpuConsumptionRequest` | `src/Soda/Requests/Licensing/GetApiV1LicensingSpuConsumptionRequest.cs` |
| `PublicApiSpuConsumptionResponse` | `src/Soda/Models/PublicApiSpuConsumptionResponse.cs` |
| `GetApiV1LicensingSpuConsumptionError` | `src/Soda/Errors/GetApiV1LicensingSpuConsumptionError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

