<!-- Generated file — do not edit; regenerated with the SDK. -->

# CommandExecutionApi — operations

Accessor: `client.CommandExecutionApi` · Source: `src/AwsCodeBuild/Api/CommandExecutionApi.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### BatchGetCommandExecutions

- **Auth**: `options.Sigv4`
- **Signature**: `BatchGetCommandExecutions(BatchGetCommandExecutionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<BatchGetCommandExecutionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BatchGetCommandExecutionsRequest` | `src/AwsCodeBuild/Requests/CommandExecutionApi/BatchGetCommandExecutionsRequest.cs` |
| `XAmzTargetAwsCodeBuildCommandExecutionApi` | `src/AwsCodeBuild/Models/Enums/XAmzTargetAwsCodeBuildCommandExecutionApi.cs` |
| `BatchGetCommandExecutionsError` | `src/AwsCodeBuild/Errors/BatchGetCommandExecutionsError.cs` |

### ListCommandExecutionsForSandbox

- **Auth**: `options.Sigv4`
- **Signature**: `ListCommandExecutionsForSandbox(ListCommandExecutionsForSandboxRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListCommandExecutionsForSandboxError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListCommandExecutionsForSandboxRequest` | `src/AwsCodeBuild/Requests/CommandExecutionApi/ListCommandExecutionsForSandboxRequest.cs` |
| `XAmzTarget1AwsCodeBuildCommandExecutionApi` | `src/AwsCodeBuild/Models/Enums/XAmzTarget1AwsCodeBuildCommandExecutionApi.cs` |
| `ListCommandExecutionsForSandboxError` | `src/AwsCodeBuild/Errors/ListCommandExecutionsForSandboxError.cs` |

### StartCommandExecution

- **Auth**: `options.Sigv4`
- **Signature**: `StartCommandExecution(StartCommandExecutionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<StartCommandExecutionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StartCommandExecutionRequest` | `src/AwsCodeBuild/Requests/CommandExecutionApi/StartCommandExecutionRequest.cs` |
| `XAmzTarget2AwsCodeBuildCommandExecutionApi` | `src/AwsCodeBuild/Models/Enums/XAmzTarget2AwsCodeBuildCommandExecutionApi.cs` |
| `StartCommandExecutionError` | `src/AwsCodeBuild/Errors/StartCommandExecutionError.cs` |

