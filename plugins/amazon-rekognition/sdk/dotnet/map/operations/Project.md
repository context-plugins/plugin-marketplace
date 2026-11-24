<!-- Generated file — do not edit; regenerated with the SDK. -->

# Project — operations

Accessor: `client.Project` · Source: `src/AmazonRekognition/Api/Project.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateProject

- **Auth**: `options.Sigv4`
- **Signature**: `CreateProject(CreateProjectOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CreateProjectError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateProjectOperationRequest` | `src/AmazonRekognition/Requests/Project/CreateProjectOperationRequest.cs` |
| `XAmzTargetAmazonRekognitionProjectApi` | `src/AmazonRekognition/Models/Enums/XAmzTargetAmazonRekognitionProjectApi.cs` |
| `CreateProjectError` | `src/AmazonRekognition/Errors/CreateProjectError.cs` |

### DeleteProject

- **Auth**: `options.Sigv4`
- **Signature**: `DeleteProject(DeleteProjectOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteProjectError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteProjectOperationRequest` | `src/AmazonRekognition/Requests/Project/DeleteProjectOperationRequest.cs` |
| `XAmzTarget1AmazonRekognitionProjectApi` | `src/AmazonRekognition/Models/Enums/XAmzTarget1AmazonRekognitionProjectApi.cs` |
| `DeleteProjectError` | `src/AmazonRekognition/Errors/DeleteProjectError.cs` |

### DescribeProjects

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeProjects(DescribeProjectsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DescribeProjectsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeProjectsOperationRequest` | `src/AmazonRekognition/Requests/Project/DescribeProjectsOperationRequest.cs` |
| `XAmzTarget2AmazonRekognitionProjectApi` | `src/AmazonRekognition/Models/Enums/XAmzTarget2AmazonRekognitionProjectApi.cs` |
| `DescribeProjectsError` | `src/AmazonRekognition/Errors/DescribeProjectsError.cs` |

