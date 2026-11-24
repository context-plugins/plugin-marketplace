<!-- Generated file — do not edit; regenerated with the SDK. -->

# Operations — operations

Accessor: `client.Operations` · Source: `src/AwsStepFunctions/Api/Operations.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### PublishStateMachineVersion2

- **Auth**: `options.Sigv4`
- **Signature**: `PublishStateMachineVersion2(PublishStateMachineVersion2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<PublishStateMachineVersion2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 402, 409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PublishStateMachineVersion2Request` | `src/AwsStepFunctions/Requests/Operations/PublishStateMachineVersion2Request.cs` |
| `XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsPublishstaApi` | `src/AwsStepFunctions/Models/Enums/XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsPublishstaApi.cs` |
| `PublishStateMachineVersion2Error` | `src/AwsStepFunctions/Errors/PublishStateMachineVersion2Error.cs` |

### RedriveExecution

- **Auth**: `options.Sigv4`
- **Signature**: `RedriveExecution(RedriveExecutionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RedriveExecutionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RedriveExecutionRequest` | `src/AwsStepFunctions/Requests/Operations/RedriveExecutionRequest.cs` |
| `XAmzTarget1AwsStepFunctionsOperationsApi` | `src/AwsStepFunctions/Models/Enums/XAmzTarget1AwsStepFunctionsOperationsApi.cs` |
| `RedriveExecutionError` | `src/AwsStepFunctions/Errors/RedriveExecutionError.cs` |

### TestState

- **Auth**: `options.Sigv4`
- **Signature**: `TestState(TestStateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<TestStateError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TestStateRequest` | `src/AwsStepFunctions/Requests/Operations/TestStateRequest.cs` |
| `XAmzTarget2AwsStepFunctionsOperationsApi` | `src/AwsStepFunctions/Models/Enums/XAmzTarget2AwsStepFunctionsOperationsApi.cs` |
| `TestStateError` | `src/AwsStepFunctions/Errors/TestStateError.cs` |

### ValidateStateMachineDefinition

- **Auth**: `options.Sigv4`
- **Signature**: `ValidateStateMachineDefinition(ValidateStateMachineDefinitionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ValidateStateMachineDefinitionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ValidateStateMachineDefinitionRequest` | `src/AwsStepFunctions/Requests/Operations/ValidateStateMachineDefinitionRequest.cs` |
| `XAmzTarget3AwsStepFunctionsOperationsApi` | `src/AwsStepFunctions/Models/Enums/XAmzTarget3AwsStepFunctionsOperationsApi.cs` |
| `ValidateStateMachineDefinitionError` | `src/AwsStepFunctions/Errors/ValidateStateMachineDefinitionError.cs` |

