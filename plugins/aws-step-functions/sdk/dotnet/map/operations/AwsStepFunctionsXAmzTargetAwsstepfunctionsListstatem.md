<!-- Generated file — do not edit; regenerated with the SDK. -->

# AwsStepFunctionsXAmzTargetAwsstepfunctionsListstatem — operations

Accessor: `client.AwsStepFunctionsXAmzTargetAwsstepfunctionsListstatem` · Source: `src/AwsStepFunctions/Api/AwsStepFunctionsXAmzTargetAwsstepfunctionsListstatem.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ListStateMachineAliases

- **Auth**: `options.Sigv4`
- **Signature**: `ListStateMachineAliases(ListStateMachineAliasesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListStateMachineAliasesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListStateMachineAliasesRequest` | `src/AwsStepFunctions/Requests/AwsStepFunctionsXAmzTargetAwsstepfunctionsListstatem/ListStateMachineAliasesRequest.cs` |
| `XAmzTarget1AwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsListstatemApi` | `src/AwsStepFunctions/Models/Enums/XAmzTarget1AwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsListstatemApi.cs` |
| `ListStateMachineAliasesError` | `src/AwsStepFunctions/Errors/ListStateMachineAliasesError.cs` |

### ListStateMachineVersions

- **Auth**: `options.Sigv4`
- **Signature**: `ListStateMachineVersions(ListStateMachineVersionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListStateMachineVersionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListStateMachineVersionsRequest` | `src/AwsStepFunctions/Requests/AwsStepFunctionsXAmzTargetAwsstepfunctionsListstatem/ListStateMachineVersionsRequest.cs` |
| `XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsListstatemApi` | `src/AwsStepFunctions/Models/Enums/XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsListstatemApi.cs` |
| `ListStateMachineVersionsError` | `src/AwsStepFunctions/Errors/ListStateMachineVersionsError.cs` |

