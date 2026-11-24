<!-- Generated file — do not edit; regenerated with the SDK. -->

# StreamProcessorApi — operations

Accessor: `client.StreamProcessorApi` · Source: `src/AmazonRekognition/Api/StreamProcessorApi.cs` · 7 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateStreamProcessor

- **Auth**: `options.Sigv4`
- **Signature**: `CreateStreamProcessor(CreateStreamProcessorOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CreateStreamProcessorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateStreamProcessorOperationRequest` | `src/AmazonRekognition/Requests/StreamProcessorApi/CreateStreamProcessorOperationRequest.cs` |
| `XAmzTargetAmazonRekognitionStreamProcessorApi` | `src/AmazonRekognition/Models/Enums/XAmzTargetAmazonRekognitionStreamProcessorApi.cs` |
| `CreateStreamProcessorError` | `src/AmazonRekognition/Errors/CreateStreamProcessorError.cs` |

### DeleteStreamProcessor

- **Auth**: `options.Sigv4`
- **Signature**: `DeleteStreamProcessor(DeleteStreamProcessorOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteStreamProcessorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteStreamProcessorOperationRequest` | `src/AmazonRekognition/Requests/StreamProcessorApi/DeleteStreamProcessorOperationRequest.cs` |
| `XAmzTarget1AmazonRekognitionStreamProcessorApi` | `src/AmazonRekognition/Models/Enums/XAmzTarget1AmazonRekognitionStreamProcessorApi.cs` |
| `DeleteStreamProcessorError` | `src/AmazonRekognition/Errors/DeleteStreamProcessorError.cs` |

### DescribeStreamProcessor

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeStreamProcessor(DescribeStreamProcessorOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DescribeStreamProcessorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeStreamProcessorOperationRequest` | `src/AmazonRekognition/Requests/StreamProcessorApi/DescribeStreamProcessorOperationRequest.cs` |
| `XAmzTarget2AmazonRekognitionStreamProcessorApi` | `src/AmazonRekognition/Models/Enums/XAmzTarget2AmazonRekognitionStreamProcessorApi.cs` |
| `DescribeStreamProcessorError` | `src/AmazonRekognition/Errors/DescribeStreamProcessorError.cs` |

### ListStreamProcessors

- **Auth**: `options.Sigv4`
- **Signature**: `ListStreamProcessors(ListStreamProcessorsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListStreamProcessorsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListStreamProcessorsOperationRequest` | `src/AmazonRekognition/Requests/StreamProcessorApi/ListStreamProcessorsOperationRequest.cs` |
| `XAmzTarget3AmazonRekognitionStreamProcessorApi` | `src/AmazonRekognition/Models/Enums/XAmzTarget3AmazonRekognitionStreamProcessorApi.cs` |
| `ListStreamProcessorsError` | `src/AmazonRekognition/Errors/ListStreamProcessorsError.cs` |

### StartStreamProcessor

- **Auth**: `options.Sigv4`
- **Signature**: `StartStreamProcessor(StartStreamProcessorOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<StartStreamProcessorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StartStreamProcessorOperationRequest` | `src/AmazonRekognition/Requests/StreamProcessorApi/StartStreamProcessorOperationRequest.cs` |
| `XAmzTarget4AmazonRekognitionStreamProcessorApi` | `src/AmazonRekognition/Models/Enums/XAmzTarget4AmazonRekognitionStreamProcessorApi.cs` |
| `StartStreamProcessorError` | `src/AmazonRekognition/Errors/StartStreamProcessorError.cs` |

### StopStreamProcessor

- **Auth**: `options.Sigv4`
- **Signature**: `StopStreamProcessor(StopStreamProcessorOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<StopStreamProcessorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StopStreamProcessorOperationRequest` | `src/AmazonRekognition/Requests/StreamProcessorApi/StopStreamProcessorOperationRequest.cs` |
| `XAmzTarget5AmazonRekognitionStreamProcessorApi` | `src/AmazonRekognition/Models/Enums/XAmzTarget5AmazonRekognitionStreamProcessorApi.cs` |
| `StopStreamProcessorError` | `src/AmazonRekognition/Errors/StopStreamProcessorError.cs` |

### UpdateStreamProcessor

- **Auth**: `options.Sigv4`
- **Signature**: `UpdateStreamProcessor(UpdateStreamProcessorOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<UpdateStreamProcessorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateStreamProcessorOperationRequest` | `src/AmazonRekognition/Requests/StreamProcessorApi/UpdateStreamProcessorOperationRequest.cs` |
| `XAmzTarget6AmazonRekognitionStreamProcessorApi` | `src/AmazonRekognition/Models/Enums/XAmzTarget6AmazonRekognitionStreamProcessorApi.cs` |
| `UpdateStreamProcessorError` | `src/AmazonRekognition/Errors/UpdateStreamProcessorError.cs` |

