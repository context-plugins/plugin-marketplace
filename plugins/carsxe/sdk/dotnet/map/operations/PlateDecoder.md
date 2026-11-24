<!-- Generated file — do not edit; regenerated with the SDK. -->

# PlateDecoder — operations

Accessor: `client.PlateDecoder` · Source: `src/CarsXe/Api/PlateDecoder.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DecodePlate

- **Auth**: `options.ApiKeyQuery` OR `options.X402Payment` OR anonymous
- **Signature**: `DecodePlate(DecodePlateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Plate`, `State`
- **Query params (wire ← C#)**: `plate` ← `Plate`, `state` ← `State`, `country` ← `Country`, `format` ← `Format`
- **Returns**: `PlatedecoderResponse`
- **Error**: `ApiException<DecodePlateError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 502, 504] · `TryGetUsageLimitError([NotNullWhen(true)] out UsageLimitError? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DecodePlateRequest` | `src/CarsXe/Requests/PlateDecoder/DecodePlateRequest.cs` |
| `Format` | `src/CarsXe/Models/Enums/Format.cs` |
| `PlatedecoderResponse` | `src/CarsXe/Models/PlatedecoderResponse.cs` |
| `DecodePlateError` | `src/CarsXe/Errors/DecodePlateError.cs` |
| `Error` | `src/CarsXe/Models/Error.cs` |
| `UsageLimitError` | `src/CarsXe/Models/UsageLimitError.cs` |

### DecodePlateV2

- **Auth**: `options.ApiKeyQuery` OR `options.X402Payment` OR anonymous
- **Signature**: `DecodePlateV2(DecodePlateV2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Plate`
- **Query params (wire ← C#)**: `plate` ← `Plate`, `country` ← `Country`, `state` ← `State`, `district` ← `District`, `require_vin` ← `RequireVin`
- **Returns**: `V2PlatedecoderResponse`
- **Error**: `ApiException<DecodePlateV2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404] · `TryGetUsageLimitError([NotNullWhen(true)] out UsageLimitError? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DecodePlateV2Request` | `src/CarsXe/Requests/PlateDecoder/DecodePlateV2Request.cs` |
| `V2PlatedecoderResponse` | `src/CarsXe/Models/V2PlatedecoderResponse.cs` |
| `DecodePlateV2Error` | `src/CarsXe/Errors/DecodePlateV2Error.cs` |
| `Error` | `src/CarsXe/Models/Error.cs` |
| `UsageLimitError` | `src/CarsXe/Models/UsageLimitError.cs` |

### DecodeUsPlate

- **Auth**: `options.ApiKeyQuery` OR `options.X402Payment` OR anonymous
- **Signature**: `DecodeUsPlate(DecodeUsPlateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Plate`, `State`
- **Query params (wire ← C#)**: `plate` ← `Plate`, `state` ← `State`, `decodeVIN` ← `DecodeVin`
- **Returns**: `V1UsPlatedecoderResponse`
- **Error**: `ApiException<DecodeUsPlateError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 500] · `TryGetUsageLimitError([NotNullWhen(true)] out UsageLimitError? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DecodeUsPlateRequest` | `src/CarsXe/Requests/PlateDecoder/DecodeUsPlateRequest.cs` |
| `DecodeVin` | `src/CarsXe/Models/Enums/DecodeVin.cs` |
| `V1UsPlatedecoderResponse` | `src/CarsXe/Models/V1UsPlatedecoderResponse.cs` |
| `DecodeUsPlateError` | `src/CarsXe/Errors/DecodeUsPlateError.cs` |
| `Error` | `src/CarsXe/Models/Error.cs` |
| `UsageLimitError` | `src/CarsXe/Models/UsageLimitError.cs` |

