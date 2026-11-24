<!-- Generated file — do not edit; regenerated with the SDK. -->

# Recognition — operations

Accessor: `client.Recognition` · Source: `src/CarsXe/Api/Recognition.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### RecognizePlate

- **Auth**: `options.ApiKeyQuery` OR `options.X402Payment` OR anonymous
- **Signature**: `RecognizePlate(RecognizePlateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `PlaterecognitionResponse`
- **Error**: `ApiException<RecognizePlateError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 500] · `TryGetUsageLimitError([NotNullWhen(true)] out UsageLimitError? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RecognizePlateRequest` | `src/CarsXe/Requests/Recognition/RecognizePlateRequest.cs` |
| `PlaterecognitionRequest` | `src/CarsXe/Models/PlaterecognitionRequest.cs` |
| `PlaterecognitionResponse` | `src/CarsXe/Models/PlaterecognitionResponse.cs` |
| `RecognizePlateError` | `src/CarsXe/Errors/RecognizePlateError.cs` |
| `Error` | `src/CarsXe/Models/Error.cs` |
| `UsageLimitError` | `src/CarsXe/Models/UsageLimitError.cs` |

### VinOcr

- **Auth**: `options.ApiKeyQuery` OR `options.X402Payment` OR anonymous
- **Signature**: `VinOcr(VinOcrRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1VinocrResponse`
- **Error**: `ApiException<VinOcrError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404] · `TryGetUsageLimitError([NotNullWhen(true)] out UsageLimitError? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `VinOcrRequest` | `src/CarsXe/Requests/Recognition/VinOcrRequest.cs` |
| `V1VinocrRequest` | `src/CarsXe/Models/V1VinocrRequest.cs` |
| `V1VinocrResponse` | `src/CarsXe/Models/V1VinocrResponse.cs` |
| `VinOcrError` | `src/CarsXe/Errors/VinOcrError.cs` |
| `Error` | `src/CarsXe/Models/Error.cs` |
| `UsageLimitError` | `src/CarsXe/Models/UsageLimitError.cs` |

