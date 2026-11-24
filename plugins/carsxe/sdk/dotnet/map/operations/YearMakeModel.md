<!-- Generated file — do not edit; regenerated with the SDK. -->

# YearMakeModel — operations

Accessor: `client.YearMakeModel` · Source: `src/CarsXe/Api/YearMakeModel.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DecodeObdCode

- **Auth**: `options.ApiKeyQuery` OR `options.X402Payment` OR anonymous
- **Signature**: `DecodeObdCode(DecodeObdCodeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Code`
- **Query params (wire ← C#)**: `code` ← `Code`
- **Returns**: `ObdcodesdecoderResponse`
- **Error**: `ApiException<DecodeObdCodeError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404] · `TryGetUsageLimitError([NotNullWhen(true)] out UsageLimitError? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DecodeObdCodeRequest` | `src/CarsXe/Requests/YearMakeModel/DecodeObdCodeRequest.cs` |
| `ObdcodesdecoderResponse` | `src/CarsXe/Models/ObdcodesdecoderResponse.cs` |
| `DecodeObdCodeError` | `src/CarsXe/Errors/DecodeObdCodeError.cs` |
| `Error` | `src/CarsXe/Models/Error.cs` |
| `UsageLimitError` | `src/CarsXe/Models/UsageLimitError.cs` |

### GetYearMakeModel

- **Auth**: `options.ApiKeyQuery` OR `options.X402Payment` OR anonymous
- **Signature**: `GetYearMakeModel(GetYearMakeModelRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Year`, `Make`, `Model`
- **Query params (wire ← C#)**: `year` ← `Year`, `make` ← `Make`, `model` ← `Model`, `trim` ← `Trim`, `allTrimOptions` ← `AllTrimOptions`
- **Returns**: `V1YmmResponse`
- **Error**: `ApiException<GetYearMakeModelError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 500] · `TryGetUsageLimitError([NotNullWhen(true)] out UsageLimitError? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetYearMakeModelRequest` | `src/CarsXe/Requests/YearMakeModel/GetYearMakeModelRequest.cs` |
| `AllTrimOptions` | `src/CarsXe/Models/Enums/AllTrimOptions.cs` |
| `V1YmmResponse` | `src/CarsXe/Models/V1YmmResponse.cs` |
| `GetYearMakeModelError` | `src/CarsXe/Errors/GetYearMakeModelError.cs` |
| `Error` | `src/CarsXe/Models/Error.cs` |
| `UsageLimitError` | `src/CarsXe/Models/UsageLimitError.cs` |

### GetYearMakeModelOptions

- **Auth**: `options.ApiKeyQuery` OR `options.X402Payment` OR anonymous
- **Signature**: `GetYearMakeModelOptions(GetYearMakeModelOptionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `dimension` ← `Dimension`, `year` ← `Year`, `make` ← `Make`, `model` ← `Model`, `trim` ← `Trim`
- **Returns**: `V1YmmOptionsResponse`
- **Error**: `ApiException<GetYearMakeModelOptionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 500] · `TryGetUsageLimitError([NotNullWhen(true)] out UsageLimitError? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetYearMakeModelOptionsRequest` | `src/CarsXe/Requests/YearMakeModel/GetYearMakeModelOptionsRequest.cs` |
| `Dimension` | `src/CarsXe/Models/Enums/Dimension.cs` |
| `V1YmmOptionsResponse` | `src/CarsXe/Models/V1YmmOptionsResponse.cs` |
| `GetYearMakeModelOptionsError` | `src/CarsXe/Errors/GetYearMakeModelOptionsError.cs` |
| `Error` | `src/CarsXe/Models/Error.cs` |
| `UsageLimitError` | `src/CarsXe/Models/UsageLimitError.cs` |

