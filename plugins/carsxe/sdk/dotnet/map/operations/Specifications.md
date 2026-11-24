<!-- Generated file — do not edit; regenerated with the SDK. -->

# Specifications — operations

Accessor: `client.Specifications` · Source: `src/CarsXe/Api/Specifications.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetInternationalVinDecoder

- **Auth**: `options.ApiKeyQuery` OR `options.X402Payment` OR anonymous
- **Signature**: `GetInternationalVinDecoder(GetInternationalVinDecoderRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Vin`
- **Query params (wire ← C#)**: `vin` ← `Vin`
- **Returns**: `V1InternationalVinDecoderResponse`
- **Error**: `ApiException<GetInternationalVinDecoderError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 500] · `TryGetUsageLimitError([NotNullWhen(true)] out UsageLimitError? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetInternationalVinDecoderRequest` | `src/CarsXe/Requests/Specifications/GetInternationalVinDecoderRequest.cs` |
| `V1InternationalVinDecoderResponse` | `src/CarsXe/Models/V1InternationalVinDecoderResponse.cs` |
| `GetInternationalVinDecoderError` | `src/CarsXe/Errors/GetInternationalVinDecoderError.cs` |
| `Error` | `src/CarsXe/Models/Error.cs` |
| `UsageLimitError` | `src/CarsXe/Models/UsageLimitError.cs` |

### GetVehicleSpecs

- **Auth**: `options.ApiKeyQuery` OR `options.X402Payment` OR anonymous
- **Signature**: `GetVehicleSpecs(GetVehicleSpecsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Vin`
- **Query params (wire ← C#)**: `vin` ← `Vin`, `format` ← `Format`, `deepdata` ← `Deepdata`, `disableIntVINDecoding` ← `DisableIntVinDecoding`
- **Returns**: `SpecsResponse`
- **Error**: `ApiException<GetVehicleSpecsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 500] · `TryGetUsageLimitError([NotNullWhen(true)] out UsageLimitError? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetVehicleSpecsRequest` | `src/CarsXe/Requests/Specifications/GetVehicleSpecsRequest.cs` |
| `Format` | `src/CarsXe/Models/Enums/Format.cs` |
| `Deepdata` | `src/CarsXe/Models/Enums/Deepdata.cs` |
| `DisableIntVinDecoding` | `src/CarsXe/Models/Enums/DisableIntVinDecoding.cs` |
| `SpecsResponse` | `src/CarsXe/Models/SpecsResponse.cs` |
| `GetVehicleSpecsError` | `src/CarsXe/Errors/GetVehicleSpecsError.cs` |
| `Error` | `src/CarsXe/Models/Error.cs` |
| `UsageLimitError` | `src/CarsXe/Models/UsageLimitError.cs` |

