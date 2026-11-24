<!-- Generated file — do not edit; regenerated with the SDK. -->

# ProjectVersion — operations

Accessor: `client.ProjectVersion` · Source: `src/AmazonRekognition/Api/ProjectVersion.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateProjectVersion

- **Auth**: `options.Sigv4`
- **Signature**: `CreateProjectVersion(CreateProjectVersionOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CreateProjectVersionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateProjectVersionOperationRequest` | `src/AmazonRekognition/Requests/ProjectVersion/CreateProjectVersionOperationRequest.cs` |
| `XAmzTargetAmazonRekognitionProjectVersionApi` | `src/AmazonRekognition/Models/Enums/XAmzTargetAmazonRekognitionProjectVersionApi.cs` |
| `CreateProjectVersionError` | `src/AmazonRekognition/Errors/CreateProjectVersionError.cs` |

### DeleteProjectVersion

- **Auth**: `options.Sigv4`
- **Signature**: `DeleteProjectVersion(DeleteProjectVersionOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteProjectVersionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteProjectVersionOperationRequest` | `src/AmazonRekognition/Requests/ProjectVersion/DeleteProjectVersionOperationRequest.cs` |
| `XAmzTarget1AmazonRekognitionProjectVersionApi` | `src/AmazonRekognition/Models/Enums/XAmzTarget1AmazonRekognitionProjectVersionApi.cs` |
| `DeleteProjectVersionError` | `src/AmazonRekognition/Errors/DeleteProjectVersionError.cs` |

### DescribeProjectVersions

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeProjectVersions(DescribeProjectVersionsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DescribeProjectVersionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeProjectVersionsOperationRequest` | `src/AmazonRekognition/Requests/ProjectVersion/DescribeProjectVersionsOperationRequest.cs` |
| `XAmzTarget2AmazonRekognitionProjectVersionApi` | `src/AmazonRekognition/Models/Enums/XAmzTarget2AmazonRekognitionProjectVersionApi.cs` |
| `DescribeProjectVersionsError` | `src/AmazonRekognition/Errors/DescribeProjectVersionsError.cs` |

### StartProjectVersion

- **Auth**: `options.Sigv4`
- **Signature**: `StartProjectVersion(StartProjectVersionOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<StartProjectVersionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StartProjectVersionOperationRequest` | `src/AmazonRekognition/Requests/ProjectVersion/StartProjectVersionOperationRequest.cs` |
| `XAmzTarget3AmazonRekognitionProjectVersionApi` | `src/AmazonRekognition/Models/Enums/XAmzTarget3AmazonRekognitionProjectVersionApi.cs` |
| `StartProjectVersionError` | `src/AmazonRekognition/Errors/StartProjectVersionError.cs` |

### StopProjectVersion

- **Auth**: `options.Sigv4`
- **Signature**: `StopProjectVersion(StopProjectVersionOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<StopProjectVersionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StopProjectVersionOperationRequest` | `src/AmazonRekognition/Requests/ProjectVersion/StopProjectVersionOperationRequest.cs` |
| `XAmzTarget4AmazonRekognitionProjectVersionApi` | `src/AmazonRekognition/Models/Enums/XAmzTarget4AmazonRekognitionProjectVersionApi.cs` |
| `StopProjectVersionError` | `src/AmazonRekognition/Errors/StopProjectVersionError.cs` |

