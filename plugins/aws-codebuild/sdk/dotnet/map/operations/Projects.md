<!-- Generated file — do not edit; regenerated with the SDK. -->

# Projects — operations

Accessor: `client.Projects` · Source: `src/AwsCodeBuild/Api/Projects.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### BatchGetProjects2

- **Auth**: `options.Sigv4`
- **Signature**: `BatchGetProjects2(BatchGetProjects2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<BatchGetProjects2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BatchGetProjects2Request` | `src/AwsCodeBuild/Requests/Projects/BatchGetProjects2Request.cs` |
| `XAmzTargetAwsCodeBuildProjectsApi` | `src/AwsCodeBuild/Models/Enums/XAmzTargetAwsCodeBuildProjectsApi.cs` |
| `BatchGetProjects2Error` | `src/AwsCodeBuild/Errors/BatchGetProjects2Error.cs` |

### CreateProject2

- **Auth**: `options.Sigv4`
- **Signature**: `CreateProject2(CreateProject2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CreateProject2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateProject2Request` | `src/AwsCodeBuild/Requests/Projects/CreateProject2Request.cs` |
| `XAmzTarget1AwsCodeBuildProjectsApi` | `src/AwsCodeBuild/Models/Enums/XAmzTarget1AwsCodeBuildProjectsApi.cs` |
| `CreateProject2Error` | `src/AwsCodeBuild/Errors/CreateProject2Error.cs` |

### DeleteProject2

- **Auth**: `options.Sigv4`
- **Signature**: `DeleteProject2(DeleteProject2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteProject2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteProject2Request` | `src/AwsCodeBuild/Requests/Projects/DeleteProject2Request.cs` |
| `XAmzTarget2AwsCodeBuildProjectsApi` | `src/AwsCodeBuild/Models/Enums/XAmzTarget2AwsCodeBuildProjectsApi.cs` |
| `DeleteProject2Error` | `src/AwsCodeBuild/Errors/DeleteProject2Error.cs` |

### ListProjects2

- **Auth**: `options.Sigv4`
- **Signature**: `ListProjects2(ListProjects2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListProjects2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListProjects2Request` | `src/AwsCodeBuild/Requests/Projects/ListProjects2Request.cs` |
| `XAmzTarget3AwsCodeBuildProjectsApi` | `src/AwsCodeBuild/Models/Enums/XAmzTarget3AwsCodeBuildProjectsApi.cs` |
| `ListProjects2Error` | `src/AwsCodeBuild/Errors/ListProjects2Error.cs` |

### UpdateProject2

- **Auth**: `options.Sigv4`
- **Signature**: `UpdateProject2(UpdateProject2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<UpdateProject2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateProject2Request` | `src/AwsCodeBuild/Requests/Projects/UpdateProject2Request.cs` |
| `XAmzTarget4AwsCodeBuildProjectsApi` | `src/AwsCodeBuild/Models/Enums/XAmzTarget4AwsCodeBuildProjectsApi.cs` |
| `UpdateProject2Error` | `src/AwsCodeBuild/Errors/UpdateProject2Error.cs` |

