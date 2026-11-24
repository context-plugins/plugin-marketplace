<!-- Generated file — do not edit; regenerated with the SDK. -->

# CelebrityRecognitionApi — operations

Accessor: `client.CelebrityRecognitionApi` · Source: `src/AmazonRekognition/Api/CelebrityRecognitionApi.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetCelebrityRecognition

- **Auth**: `options.Sigv4`
- **Signature**: `GetCelebrityRecognition(GetCelebrityRecognitionOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<GetCelebrityRecognitionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCelebrityRecognitionOperationRequest` | `src/AmazonRekognition/Requests/CelebrityRecognitionApi/GetCelebrityRecognitionOperationRequest.cs` |
| `XAmzTarget` | `src/AmazonRekognition/Models/Enums/XAmzTarget.cs` |
| `GetCelebrityRecognitionError` | `src/AmazonRekognition/Errors/GetCelebrityRecognitionError.cs` |

### RecognizeCelebrities

- **Auth**: `options.Sigv4`
- **Signature**: `RecognizeCelebrities(RecognizeCelebritiesOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RecognizeCelebritiesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RecognizeCelebritiesOperationRequest` | `src/AmazonRekognition/Requests/CelebrityRecognitionApi/RecognizeCelebritiesOperationRequest.cs` |
| `XAmzTarget2` | `src/AmazonRekognition/Models/Enums/XAmzTarget2.cs` |
| `RecognizeCelebritiesError` | `src/AmazonRekognition/Errors/RecognizeCelebritiesError.cs` |

### StartCelebrityRecognition

- **Auth**: `options.Sigv4`
- **Signature**: `StartCelebrityRecognition(StartCelebrityRecognitionOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<StartCelebrityRecognitionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StartCelebrityRecognitionOperationRequest` | `src/AmazonRekognition/Requests/CelebrityRecognitionApi/StartCelebrityRecognitionOperationRequest.cs` |
| `XAmzTarget1` | `src/AmazonRekognition/Models/Enums/XAmzTarget1.cs` |
| `StartCelebrityRecognitionError` | `src/AmazonRekognition/Errors/StartCelebrityRecognitionError.cs` |

