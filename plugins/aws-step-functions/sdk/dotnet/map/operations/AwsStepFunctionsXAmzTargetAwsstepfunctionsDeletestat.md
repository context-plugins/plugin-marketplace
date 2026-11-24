<!-- Generated file — do not edit; regenerated with the SDK. -->

# AwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestat — operations

Accessor: `client.AwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestat` · Source: `src/AwsStepFunctions/Api/AwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestat.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteStateMachineAlias

- **Auth**: `options.Sigv4`
- **Signature**: `DeleteStateMachineAlias(DeleteStateMachineAliasRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteStateMachineAliasError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteStateMachineAliasRequest` | `src/AwsStepFunctions/Requests/AwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestat/DeleteStateMachineAliasRequest.cs` |
| `XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestatApi` | `src/AwsStepFunctions/Models/Enums/XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestatApi.cs` |
| `DeleteStateMachineAliasError` | `src/AwsStepFunctions/Errors/DeleteStateMachineAliasError.cs` |

### DeleteStateMachineVersion

- **Auth**: `options.Sigv4`
- **Signature**: `DeleteStateMachineVersion(DeleteStateMachineVersionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteStateMachineVersionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteStateMachineVersionRequest` | `src/AwsStepFunctions/Requests/AwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestat/DeleteStateMachineVersionRequest.cs` |
| `XAmzTarget1AwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestatApi` | `src/AwsStepFunctions/Models/Enums/XAmzTarget1AwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestatApi.cs` |
| `DeleteStateMachineVersionError` | `src/AwsStepFunctions/Errors/DeleteStateMachineVersionError.cs` |

