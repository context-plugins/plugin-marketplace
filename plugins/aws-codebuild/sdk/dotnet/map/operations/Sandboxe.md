<!-- Generated file — do not edit; regenerated with the SDK. -->

# Sandboxe — operations

Accessor: `client.Sandboxe` · Source: `src/AwsCodeBuild/Api/Sandboxe.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### BatchGetSandboxes

- **Auth**: `options.Sigv4`
- **Signature**: `BatchGetSandboxes(BatchGetSandboxesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<BatchGetSandboxesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BatchGetSandboxesRequest` | `src/AwsCodeBuild/Requests/Sandboxe/BatchGetSandboxesRequest.cs` |
| `XAmzTargetAwsCodeBuildSandboxeApi` | `src/AwsCodeBuild/Models/Enums/XAmzTargetAwsCodeBuildSandboxeApi.cs` |
| `BatchGetSandboxesError` | `src/AwsCodeBuild/Errors/BatchGetSandboxesError.cs` |

### ListSandboxes

- **Auth**: `options.Sigv4`
- **Signature**: `ListSandboxes(ListSandboxesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListSandboxesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListSandboxesRequest` | `src/AwsCodeBuild/Requests/Sandboxe/ListSandboxesRequest.cs` |
| `XAmzTarget1AwsCodeBuildSandboxeApi` | `src/AwsCodeBuild/Models/Enums/XAmzTarget1AwsCodeBuildSandboxeApi.cs` |
| `ListSandboxesError` | `src/AwsCodeBuild/Errors/ListSandboxesError.cs` |

### ListSandboxesForProject

- **Auth**: `options.Sigv4`
- **Signature**: `ListSandboxesForProject(ListSandboxesForProjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListSandboxesForProjectError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListSandboxesForProjectRequest` | `src/AwsCodeBuild/Requests/Sandboxe/ListSandboxesForProjectRequest.cs` |
| `XAmzTarget2AwsCodeBuildSandboxeApi` | `src/AwsCodeBuild/Models/Enums/XAmzTarget2AwsCodeBuildSandboxeApi.cs` |
| `ListSandboxesForProjectError` | `src/AwsCodeBuild/Errors/ListSandboxesForProjectError.cs` |

