<!-- Generated file — do not edit; regenerated with the SDK. -->

# AwsStepFunctionsApi — operations

Accessor: `client.AwsStepFunctionsApi` · Source: `src/AwsStepFunctions/Api/AwsStepFunctionsApi.cs` · 26 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateActivity

- **Auth**: `options.Sigv4`
- **Signature**: `CreateActivity(CreateActivityRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CreateActivityError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateActivityRequest` | `src/AwsStepFunctions/Requests/AwsStepFunctionsApi/CreateActivityRequest.cs` |
| `XAmzTarget` | `src/AwsStepFunctions/Models/Enums/XAmzTarget.cs` |
| `CreateActivityError` | `src/AwsStepFunctions/Errors/CreateActivityError.cs` |

### CreateStateMachine

- **Auth**: `options.Sigv4`
- **Signature**: `CreateStateMachine(CreateStateMachineRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CreateStateMachineError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateStateMachineRequest` | `src/AwsStepFunctions/Requests/AwsStepFunctionsApi/CreateStateMachineRequest.cs` |
| `XAmzTarget4` | `src/AwsStepFunctions/Models/Enums/XAmzTarget4.cs` |
| `CreateStateMachineError` | `src/AwsStepFunctions/Errors/CreateStateMachineError.cs` |

### DeleteActivity

- **Auth**: `options.Sigv4`
- **Signature**: `DeleteActivity(DeleteActivityRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteActivityError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteActivityRequest` | `src/AwsStepFunctions/Requests/AwsStepFunctionsApi/DeleteActivityRequest.cs` |
| `XAmzTarget1` | `src/AwsStepFunctions/Models/Enums/XAmzTarget1.cs` |
| `DeleteActivityError` | `src/AwsStepFunctions/Errors/DeleteActivityError.cs` |

### DeleteStateMachine

- **Auth**: `options.Sigv4`
- **Signature**: `DeleteStateMachine(DeleteStateMachineRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteStateMachineError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteStateMachineRequest` | `src/AwsStepFunctions/Requests/AwsStepFunctionsApi/DeleteStateMachineRequest.cs` |
| `XAmzTarget5` | `src/AwsStepFunctions/Models/Enums/XAmzTarget5.cs` |
| `DeleteStateMachineError` | `src/AwsStepFunctions/Errors/DeleteStateMachineError.cs` |

### DescribeActivity

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeActivity(DescribeActivityRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DescribeActivityError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeActivityRequest` | `src/AwsStepFunctions/Requests/AwsStepFunctionsApi/DescribeActivityRequest.cs` |
| `XAmzTarget2` | `src/AwsStepFunctions/Models/Enums/XAmzTarget2.cs` |
| `DescribeActivityError` | `src/AwsStepFunctions/Errors/DescribeActivityError.cs` |

### DescribeExecution

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeExecution(DescribeExecutionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DescribeExecutionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeExecutionRequest` | `src/AwsStepFunctions/Requests/AwsStepFunctionsApi/DescribeExecutionRequest.cs` |
| `XAmzTarget10` | `src/AwsStepFunctions/Models/Enums/XAmzTarget10.cs` |
| `DescribeExecutionError` | `src/AwsStepFunctions/Errors/DescribeExecutionError.cs` |

### DescribeMapRun

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeMapRun(DescribeMapRunRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DescribeMapRunError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeMapRunRequest` | `src/AwsStepFunctions/Requests/AwsStepFunctionsApi/DescribeMapRunRequest.cs` |
| `XAmzTarget14` | `src/AwsStepFunctions/Models/Enums/XAmzTarget14.cs` |
| `DescribeMapRunError` | `src/AwsStepFunctions/Errors/DescribeMapRunError.cs` |

### DescribeStateMachine

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeStateMachine(DescribeStateMachineRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DescribeStateMachineError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeStateMachineRequest` | `src/AwsStepFunctions/Requests/AwsStepFunctionsApi/DescribeStateMachineRequest.cs` |
| `XAmzTarget6` | `src/AwsStepFunctions/Models/Enums/XAmzTarget6.cs` |
| `DescribeStateMachineError` | `src/AwsStepFunctions/Errors/DescribeStateMachineError.cs` |

### DescribeStateMachineForExecution

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeStateMachineForExecution(DescribeStateMachineForExecutionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DescribeStateMachineForExecutionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeStateMachineForExecutionRequest` | `src/AwsStepFunctions/Requests/AwsStepFunctionsApi/DescribeStateMachineForExecutionRequest.cs` |
| `XAmzTarget7` | `src/AwsStepFunctions/Models/Enums/XAmzTarget7.cs` |
| `DescribeStateMachineForExecutionError` | `src/AwsStepFunctions/Errors/DescribeStateMachineForExecutionError.cs` |

### GetActivityTask

- **Auth**: `options.Sigv4`
- **Signature**: `GetActivityTask(GetActivityTaskRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<GetActivityTaskError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetActivityTaskRequest` | `src/AwsStepFunctions/Requests/AwsStepFunctionsApi/GetActivityTaskRequest.cs` |
| `XAmzTarget17` | `src/AwsStepFunctions/Models/Enums/XAmzTarget17.cs` |
| `GetActivityTaskError` | `src/AwsStepFunctions/Errors/GetActivityTaskError.cs` |

### GetExecutionHistory

- **Auth**: `options.Sigv4`
- **Signature**: `GetExecutionHistory(GetExecutionHistoryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<GetExecutionHistoryError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetExecutionHistoryRequest` | `src/AwsStepFunctions/Requests/AwsStepFunctionsApi/GetExecutionHistoryRequest.cs` |
| `XAmzTarget18` | `src/AwsStepFunctions/Models/Enums/XAmzTarget18.cs` |
| `GetExecutionHistoryError` | `src/AwsStepFunctions/Errors/GetExecutionHistoryError.cs` |

### ListActivities

- **Auth**: `options.Sigv4`
- **Signature**: `ListActivities(ListActivitiesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListActivitiesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListActivitiesRequest` | `src/AwsStepFunctions/Requests/AwsStepFunctionsApi/ListActivitiesRequest.cs` |
| `XAmzTarget3` | `src/AwsStepFunctions/Models/Enums/XAmzTarget3.cs` |
| `ListActivitiesError` | `src/AwsStepFunctions/Errors/ListActivitiesError.cs` |

### ListExecutions

- **Auth**: `options.Sigv4`
- **Signature**: `ListExecutions(ListExecutionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListExecutionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListExecutionsRequest` | `src/AwsStepFunctions/Requests/AwsStepFunctionsApi/ListExecutionsRequest.cs` |
| `XAmzTarget11` | `src/AwsStepFunctions/Models/Enums/XAmzTarget11.cs` |
| `ListExecutionsError` | `src/AwsStepFunctions/Errors/ListExecutionsError.cs` |

### ListMapRuns

- **Auth**: `options.Sigv4`
- **Signature**: `ListMapRuns(ListMapRunsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListMapRunsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListMapRunsRequest` | `src/AwsStepFunctions/Requests/AwsStepFunctionsApi/ListMapRunsRequest.cs` |
| `XAmzTarget15` | `src/AwsStepFunctions/Models/Enums/XAmzTarget15.cs` |
| `ListMapRunsError` | `src/AwsStepFunctions/Errors/ListMapRunsError.cs` |

### ListStateMachines

- **Auth**: `options.Sigv4`
- **Signature**: `ListStateMachines(ListStateMachinesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListStateMachinesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListStateMachinesRequest` | `src/AwsStepFunctions/Requests/AwsStepFunctionsApi/ListStateMachinesRequest.cs` |
| `XAmzTarget8` | `src/AwsStepFunctions/Models/Enums/XAmzTarget8.cs` |
| `ListStateMachinesError` | `src/AwsStepFunctions/Errors/ListStateMachinesError.cs` |

### ListTagsForResource

- **Auth**: `options.Sigv4`
- **Signature**: `ListTagsForResource(ListTagsForResourceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListTagsForResourceError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListTagsForResourceRequest` | `src/AwsStepFunctions/Requests/AwsStepFunctionsApi/ListTagsForResourceRequest.cs` |
| `XAmzTarget19` | `src/AwsStepFunctions/Models/Enums/XAmzTarget19.cs` |
| `ListTagsForResourceError` | `src/AwsStepFunctions/Errors/ListTagsForResourceError.cs` |

### SendTaskFailure

- **Auth**: `options.Sigv4`
- **Signature**: `SendTaskFailure(SendTaskFailureRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<SendTaskFailureError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SendTaskFailureRequest` | `src/AwsStepFunctions/Requests/AwsStepFunctionsApi/SendTaskFailureRequest.cs` |
| `XAmzTarget20` | `src/AwsStepFunctions/Models/Enums/XAmzTarget20.cs` |
| `SendTaskFailureError` | `src/AwsStepFunctions/Errors/SendTaskFailureError.cs` |

### SendTaskHeartbeat

- **Auth**: `options.Sigv4`
- **Signature**: `SendTaskHeartbeat(SendTaskHeartbeatRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<SendTaskHeartbeatError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SendTaskHeartbeatRequest` | `src/AwsStepFunctions/Requests/AwsStepFunctionsApi/SendTaskHeartbeatRequest.cs` |
| `XAmzTarget21` | `src/AwsStepFunctions/Models/Enums/XAmzTarget21.cs` |
| `SendTaskHeartbeatError` | `src/AwsStepFunctions/Errors/SendTaskHeartbeatError.cs` |

### SendTaskSuccess

- **Auth**: `options.Sigv4`
- **Signature**: `SendTaskSuccess(SendTaskSuccessRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<SendTaskSuccessError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SendTaskSuccessRequest` | `src/AwsStepFunctions/Requests/AwsStepFunctionsApi/SendTaskSuccessRequest.cs` |
| `XAmzTarget22` | `src/AwsStepFunctions/Models/Enums/XAmzTarget22.cs` |
| `SendTaskSuccessError` | `src/AwsStepFunctions/Errors/SendTaskSuccessError.cs` |

### StartExecution

- **Auth**: `options.Sigv4`
- **Signature**: `StartExecution(StartExecutionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<StartExecutionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StartExecutionRequest` | `src/AwsStepFunctions/Requests/AwsStepFunctionsApi/StartExecutionRequest.cs` |
| `XAmzTarget12` | `src/AwsStepFunctions/Models/Enums/XAmzTarget12.cs` |
| `StartExecutionError` | `src/AwsStepFunctions/Errors/StartExecutionError.cs` |

### StartSyncExecution

- **Auth**: `options.Sigv4`
- **Signature**: `StartSyncExecution(StartSyncExecutionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<StartSyncExecutionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StartSyncExecutionRequest` | `src/AwsStepFunctions/Requests/AwsStepFunctionsApi/StartSyncExecutionRequest.cs` |
| `XAmzTarget23` | `src/AwsStepFunctions/Models/Enums/XAmzTarget23.cs` |
| `StartSyncExecutionError` | `src/AwsStepFunctions/Errors/StartSyncExecutionError.cs` |

### StopExecution

- **Auth**: `options.Sigv4`
- **Signature**: `StopExecution(StopExecutionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<StopExecutionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StopExecutionRequest` | `src/AwsStepFunctions/Requests/AwsStepFunctionsApi/StopExecutionRequest.cs` |
| `XAmzTarget13` | `src/AwsStepFunctions/Models/Enums/XAmzTarget13.cs` |
| `StopExecutionError` | `src/AwsStepFunctions/Errors/StopExecutionError.cs` |

### TagResource

- **Auth**: `options.Sigv4`
- **Signature**: `TagResource(TagResourceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<TagResourceError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TagResourceRequest` | `src/AwsStepFunctions/Requests/AwsStepFunctionsApi/TagResourceRequest.cs` |
| `XAmzTarget24` | `src/AwsStepFunctions/Models/Enums/XAmzTarget24.cs` |
| `TagResourceError` | `src/AwsStepFunctions/Errors/TagResourceError.cs` |

### UntagResource

- **Auth**: `options.Sigv4`
- **Signature**: `UntagResource(UntagResourceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<UntagResourceError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UntagResourceRequest` | `src/AwsStepFunctions/Requests/AwsStepFunctionsApi/UntagResourceRequest.cs` |
| `XAmzTarget25` | `src/AwsStepFunctions/Models/Enums/XAmzTarget25.cs` |
| `UntagResourceError` | `src/AwsStepFunctions/Errors/UntagResourceError.cs` |

### UpdateMapRun

- **Auth**: `options.Sigv4`
- **Signature**: `UpdateMapRun(UpdateMapRunRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<UpdateMapRunError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateMapRunRequest` | `src/AwsStepFunctions/Requests/AwsStepFunctionsApi/UpdateMapRunRequest.cs` |
| `XAmzTarget16` | `src/AwsStepFunctions/Models/Enums/XAmzTarget16.cs` |
| `UpdateMapRunError` | `src/AwsStepFunctions/Errors/UpdateMapRunError.cs` |

### UpdateStateMachine

- **Auth**: `options.Sigv4`
- **Signature**: `UpdateStateMachine(UpdateStateMachineRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<UpdateStateMachineError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 402, 409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateStateMachineRequest` | `src/AwsStepFunctions/Requests/AwsStepFunctionsApi/UpdateStateMachineRequest.cs` |
| `XAmzTarget9` | `src/AwsStepFunctions/Models/Enums/XAmzTarget9.cs` |
| `UpdateStateMachineError` | `src/AwsStepFunctions/Errors/UpdateStateMachineError.cs` |

