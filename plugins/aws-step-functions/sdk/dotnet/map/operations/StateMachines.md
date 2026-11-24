<!-- Generated file — do not edit; regenerated with the SDK. -->

# StateMachines — operations

Accessor: `client.StateMachines` · Source: `src/AwsStepFunctions/Api/StateMachines.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateStateMachine2

- **Auth**: `options.Sigv4`
- **Signature**: `CreateStateMachine2(CreateStateMachine2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CreateStateMachine2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateStateMachine2Request` | `src/AwsStepFunctions/Requests/StateMachines/CreateStateMachine2Request.cs` |
| `XAmzTargetAwsStepFunctionsStateMachinesApi` | `src/AwsStepFunctions/Models/Enums/XAmzTargetAwsStepFunctionsStateMachinesApi.cs` |
| `CreateStateMachine2Error` | `src/AwsStepFunctions/Errors/CreateStateMachine2Error.cs` |

### DeleteStateMachine2

- **Auth**: `options.Sigv4`
- **Signature**: `DeleteStateMachine2(DeleteStateMachine2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteStateMachine2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteStateMachine2Request` | `src/AwsStepFunctions/Requests/StateMachines/DeleteStateMachine2Request.cs` |
| `XAmzTarget1AwsStepFunctionsStateMachinesApi` | `src/AwsStepFunctions/Models/Enums/XAmzTarget1AwsStepFunctionsStateMachinesApi.cs` |
| `DeleteStateMachine2Error` | `src/AwsStepFunctions/Errors/DeleteStateMachine2Error.cs` |

### DescribeStateMachine2

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeStateMachine2(DescribeStateMachine2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DescribeStateMachine2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeStateMachine2Request` | `src/AwsStepFunctions/Requests/StateMachines/DescribeStateMachine2Request.cs` |
| `XAmzTarget2AwsStepFunctionsStateMachinesApi` | `src/AwsStepFunctions/Models/Enums/XAmzTarget2AwsStepFunctionsStateMachinesApi.cs` |
| `DescribeStateMachine2Error` | `src/AwsStepFunctions/Errors/DescribeStateMachine2Error.cs` |

### DescribeStateMachineForExecution2

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeStateMachineForExecution2(DescribeStateMachineForExecution2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DescribeStateMachineForExecution2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeStateMachineForExecution2Request` | `src/AwsStepFunctions/Requests/StateMachines/DescribeStateMachineForExecution2Request.cs` |
| `XAmzTarget3AwsStepFunctionsStateMachinesApi` | `src/AwsStepFunctions/Models/Enums/XAmzTarget3AwsStepFunctionsStateMachinesApi.cs` |
| `DescribeStateMachineForExecution2Error` | `src/AwsStepFunctions/Errors/DescribeStateMachineForExecution2Error.cs` |

### ListStateMachines2

- **Auth**: `options.Sigv4`
- **Signature**: `ListStateMachines2(ListStateMachines2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListStateMachines2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListStateMachines2Request` | `src/AwsStepFunctions/Requests/StateMachines/ListStateMachines2Request.cs` |
| `XAmzTarget4AwsStepFunctionsStateMachinesApi` | `src/AwsStepFunctions/Models/Enums/XAmzTarget4AwsStepFunctionsStateMachinesApi.cs` |
| `ListStateMachines2Error` | `src/AwsStepFunctions/Errors/ListStateMachines2Error.cs` |

### UpdateStateMachine2

- **Auth**: `options.Sigv4`
- **Signature**: `UpdateStateMachine2(UpdateStateMachine2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<UpdateStateMachine2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 402, 409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateStateMachine2Request` | `src/AwsStepFunctions/Requests/StateMachines/UpdateStateMachine2Request.cs` |
| `XAmzTarget5AwsStepFunctionsStateMachinesApi` | `src/AwsStepFunctions/Models/Enums/XAmzTarget5AwsStepFunctionsStateMachinesApi.cs` |
| `UpdateStateMachine2Error` | `src/AwsStepFunctions/Errors/UpdateStateMachine2Error.cs` |

