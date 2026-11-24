<!-- Generated file — do not edit; regenerated with the SDK. -->

# AwsStepFunctionsXAmzTargetAwsstepfunctionsCreatestat — operations

Accessor: `client.AwsStepFunctionsXAmzTargetAwsstepfunctionsCreatestat` · Source: `src/AwsStepFunctions/Api/AwsStepFunctionsXAmzTargetAwsstepfunctionsCreatestat.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateStateMachineAlias

- **Auth**: `options.Sigv4`
- **Signature**: `CreateStateMachineAlias(CreateStateMachineAliasRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CreateStateMachineAliasError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 402, 404, 409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateStateMachineAliasRequest` | `src/AwsStepFunctions/Requests/AwsStepFunctionsXAmzTargetAwsstepfunctionsCreatestat/CreateStateMachineAliasRequest.cs` |
| `XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsCreatestatApi` | `src/AwsStepFunctions/Models/Enums/XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsCreatestatApi.cs` |
| `CreateStateMachineAliasError` | `src/AwsStepFunctions/Errors/CreateStateMachineAliasError.cs` |

