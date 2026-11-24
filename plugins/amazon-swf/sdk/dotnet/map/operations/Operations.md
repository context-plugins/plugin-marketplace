<!-- Generated file — do not edit; regenerated with the SDK. -->

# Operations — operations

Accessor: `client.Operations` · Source: `src/AmazonSwf/Api/Operations.cs` · 22 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CountClosedWorkflowExecutions2

- **Auth**: `options.Sigv4`
- **Signature**: `CountClosedWorkflowExecutions2(CountClosedWorkflowExecutions2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CountClosedWorkflowExecutions2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CountClosedWorkflowExecutions2Request` | `src/AmazonSwf/Requests/Operations/CountClosedWorkflowExecutions2Request.cs` |
| `XAmzTarget` | `src/AmazonSwf/Models/Enums/XAmzTarget.cs` |
| `CountClosedWorkflowExecutions2Error` | `src/AmazonSwf/Errors/CountClosedWorkflowExecutions2Error.cs` |

### CountOpenWorkflowExecutions2

- **Auth**: `options.Sigv4`
- **Signature**: `CountOpenWorkflowExecutions2(CountOpenWorkflowExecutions2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CountOpenWorkflowExecutions2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CountOpenWorkflowExecutions2Request` | `src/AmazonSwf/Requests/Operations/CountOpenWorkflowExecutions2Request.cs` |
| `XAmzTarget1` | `src/AmazonSwf/Models/Enums/XAmzTarget1.cs` |
| `CountOpenWorkflowExecutions2Error` | `src/AmazonSwf/Errors/CountOpenWorkflowExecutions2Error.cs` |

### CountPendingActivityTasks2

- **Auth**: `options.Sigv4`
- **Signature**: `CountPendingActivityTasks2(CountPendingActivityTasks2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CountPendingActivityTasks2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CountPendingActivityTasks2Request` | `src/AmazonSwf/Requests/Operations/CountPendingActivityTasks2Request.cs` |
| `XAmzTarget2` | `src/AmazonSwf/Models/Enums/XAmzTarget2.cs` |
| `CountPendingActivityTasks2Error` | `src/AmazonSwf/Errors/CountPendingActivityTasks2Error.cs` |

### CountPendingDecisionTasks2

- **Auth**: `options.Sigv4`
- **Signature**: `CountPendingDecisionTasks2(CountPendingDecisionTasks2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CountPendingDecisionTasks2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CountPendingDecisionTasks2Request` | `src/AmazonSwf/Requests/Operations/CountPendingDecisionTasks2Request.cs` |
| `XAmzTarget3` | `src/AmazonSwf/Models/Enums/XAmzTarget3.cs` |
| `CountPendingDecisionTasks2Error` | `src/AmazonSwf/Errors/CountPendingDecisionTasks2Error.cs` |

### DeleteActivityType

- **Auth**: `options.Sigv4`
- **Signature**: `DeleteActivityType(DeleteActivityTypeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteActivityTypeError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteActivityTypeRequest` | `src/AmazonSwf/Requests/Operations/DeleteActivityTypeRequest.cs` |
| `XAmzTarget20AmazonSimpleWorkflowServiceOperationsApi` | `src/AmazonSwf/Models/Enums/XAmzTarget20AmazonSimpleWorkflowServiceOperationsApi.cs` |
| `DeleteActivityTypeError` | `src/AmazonSwf/Errors/DeleteActivityTypeError.cs` |

### DeleteWorkflowType

- **Auth**: `options.Sigv4`
- **Signature**: `DeleteWorkflowType(DeleteWorkflowTypeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteWorkflowTypeError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteWorkflowTypeRequest` | `src/AmazonSwf/Requests/Operations/DeleteWorkflowTypeRequest.cs` |
| `XAmzTarget21AmazonSimpleWorkflowServiceOperationsApi` | `src/AmazonSwf/Models/Enums/XAmzTarget21AmazonSimpleWorkflowServiceOperationsApi.cs` |
| `DeleteWorkflowTypeError` | `src/AmazonSwf/Errors/DeleteWorkflowTypeError.cs` |

### DeprecateActivityType2

- **Auth**: `options.Sigv4`
- **Signature**: `DeprecateActivityType2(DeprecateActivityType2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeprecateActivityType2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeprecateActivityType2Request` | `src/AmazonSwf/Requests/Operations/DeprecateActivityType2Request.cs` |
| `XAmzTarget4` | `src/AmazonSwf/Models/Enums/XAmzTarget4.cs` |
| `DeprecateActivityType2Error` | `src/AmazonSwf/Errors/DeprecateActivityType2Error.cs` |

### DeprecateDomain2

- **Auth**: `options.Sigv4`
- **Signature**: `DeprecateDomain2(DeprecateDomain2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeprecateDomain2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeprecateDomain2Request` | `src/AmazonSwf/Requests/Operations/DeprecateDomain2Request.cs` |
| `XAmzTarget5` | `src/AmazonSwf/Models/Enums/XAmzTarget5.cs` |
| `DeprecateDomain2Error` | `src/AmazonSwf/Errors/DeprecateDomain2Error.cs` |

### DeprecateWorkflowType2

- **Auth**: `options.Sigv4`
- **Signature**: `DeprecateWorkflowType2(DeprecateWorkflowType2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeprecateWorkflowType2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeprecateWorkflowType2Request` | `src/AmazonSwf/Requests/Operations/DeprecateWorkflowType2Request.cs` |
| `XAmzTarget6` | `src/AmazonSwf/Models/Enums/XAmzTarget6.cs` |
| `DeprecateWorkflowType2Error` | `src/AmazonSwf/Errors/DeprecateWorkflowType2Error.cs` |

### PollForActivityTask2

- **Auth**: `options.Sigv4`
- **Signature**: `PollForActivityTask2(PollForActivityTask2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<PollForActivityTask2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PollForActivityTask2Request` | `src/AmazonSwf/Requests/Operations/PollForActivityTask2Request.cs` |
| `XAmzTarget7` | `src/AmazonSwf/Models/Enums/XAmzTarget7.cs` |
| `PollForActivityTask2Error` | `src/AmazonSwf/Errors/PollForActivityTask2Error.cs` |

### PollForDecisionTask2

- **Auth**: `options.Sigv4`
- **Signature**: `PollForDecisionTask2(PollForDecisionTask2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<PollForDecisionTask2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PollForDecisionTask2Request` | `src/AmazonSwf/Requests/Operations/PollForDecisionTask2Request.cs` |
| `XAmzTarget8` | `src/AmazonSwf/Models/Enums/XAmzTarget8.cs` |
| `PollForDecisionTask2Error` | `src/AmazonSwf/Errors/PollForDecisionTask2Error.cs` |

### RecordActivityTaskHeartbeat2

- **Auth**: `options.Sigv4`
- **Signature**: `RecordActivityTaskHeartbeat2(RecordActivityTaskHeartbeat2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RecordActivityTaskHeartbeat2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RecordActivityTaskHeartbeat2Request` | `src/AmazonSwf/Requests/Operations/RecordActivityTaskHeartbeat2Request.cs` |
| `XAmzTarget9` | `src/AmazonSwf/Models/Enums/XAmzTarget9.cs` |
| `RecordActivityTaskHeartbeat2Error` | `src/AmazonSwf/Errors/RecordActivityTaskHeartbeat2Error.cs` |

### RequestCancelWorkflowExecution2

- **Auth**: `options.Sigv4`
- **Signature**: `RequestCancelWorkflowExecution2(RequestCancelWorkflowExecution2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RequestCancelWorkflowExecution2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RequestCancelWorkflowExecution2Request` | `src/AmazonSwf/Requests/Operations/RequestCancelWorkflowExecution2Request.cs` |
| `XAmzTarget10` | `src/AmazonSwf/Models/Enums/XAmzTarget10.cs` |
| `RequestCancelWorkflowExecution2Error` | `src/AmazonSwf/Errors/RequestCancelWorkflowExecution2Error.cs` |

### RespondActivityTaskCanceled2

- **Auth**: `options.Sigv4`
- **Signature**: `RespondActivityTaskCanceled2(RespondActivityTaskCanceled2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RespondActivityTaskCanceled2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RespondActivityTaskCanceled2Request` | `src/AmazonSwf/Requests/Operations/RespondActivityTaskCanceled2Request.cs` |
| `XAmzTarget11` | `src/AmazonSwf/Models/Enums/XAmzTarget11.cs` |
| `RespondActivityTaskCanceled2Error` | `src/AmazonSwf/Errors/RespondActivityTaskCanceled2Error.cs` |

### RespondActivityTaskCompleted2

- **Auth**: `options.Sigv4`
- **Signature**: `RespondActivityTaskCompleted2(RespondActivityTaskCompleted2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RespondActivityTaskCompleted2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RespondActivityTaskCompleted2Request` | `src/AmazonSwf/Requests/Operations/RespondActivityTaskCompleted2Request.cs` |
| `XAmzTarget12` | `src/AmazonSwf/Models/Enums/XAmzTarget12.cs` |
| `RespondActivityTaskCompleted2Error` | `src/AmazonSwf/Errors/RespondActivityTaskCompleted2Error.cs` |

### RespondActivityTaskFailed2

- **Auth**: `options.Sigv4`
- **Signature**: `RespondActivityTaskFailed2(RespondActivityTaskFailed2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RespondActivityTaskFailed2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RespondActivityTaskFailed2Request` | `src/AmazonSwf/Requests/Operations/RespondActivityTaskFailed2Request.cs` |
| `XAmzTarget13` | `src/AmazonSwf/Models/Enums/XAmzTarget13.cs` |
| `RespondActivityTaskFailed2Error` | `src/AmazonSwf/Errors/RespondActivityTaskFailed2Error.cs` |

### RespondDecisionTaskCompleted2

- **Auth**: `options.Sigv4`
- **Signature**: `RespondDecisionTaskCompleted2(RespondDecisionTaskCompleted2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RespondDecisionTaskCompleted2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RespondDecisionTaskCompleted2Request` | `src/AmazonSwf/Requests/Operations/RespondDecisionTaskCompleted2Request.cs` |
| `XAmzTarget14` | `src/AmazonSwf/Models/Enums/XAmzTarget14.cs` |
| `RespondDecisionTaskCompleted2Error` | `src/AmazonSwf/Errors/RespondDecisionTaskCompleted2Error.cs` |

### SignalWorkflowExecution2

- **Auth**: `options.Sigv4`
- **Signature**: `SignalWorkflowExecution2(SignalWorkflowExecution2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<SignalWorkflowExecution2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SignalWorkflowExecution2Request` | `src/AmazonSwf/Requests/Operations/SignalWorkflowExecution2Request.cs` |
| `XAmzTarget15` | `src/AmazonSwf/Models/Enums/XAmzTarget15.cs` |
| `SignalWorkflowExecution2Error` | `src/AmazonSwf/Errors/SignalWorkflowExecution2Error.cs` |

### TerminateWorkflowExecution2

- **Auth**: `options.Sigv4`
- **Signature**: `TerminateWorkflowExecution2(TerminateWorkflowExecution2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<TerminateWorkflowExecution2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TerminateWorkflowExecution2Request` | `src/AmazonSwf/Requests/Operations/TerminateWorkflowExecution2Request.cs` |
| `XAmzTarget16` | `src/AmazonSwf/Models/Enums/XAmzTarget16.cs` |
| `TerminateWorkflowExecution2Error` | `src/AmazonSwf/Errors/TerminateWorkflowExecution2Error.cs` |

### UndeprecateActivityType2

- **Auth**: `options.Sigv4`
- **Signature**: `UndeprecateActivityType2(UndeprecateActivityType2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<UndeprecateActivityType2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UndeprecateActivityType2Request` | `src/AmazonSwf/Requests/Operations/UndeprecateActivityType2Request.cs` |
| `XAmzTarget17` | `src/AmazonSwf/Models/Enums/XAmzTarget17.cs` |
| `UndeprecateActivityType2Error` | `src/AmazonSwf/Errors/UndeprecateActivityType2Error.cs` |

### UndeprecateDomain2

- **Auth**: `options.Sigv4`
- **Signature**: `UndeprecateDomain2(UndeprecateDomain2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<UndeprecateDomain2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UndeprecateDomain2Request` | `src/AmazonSwf/Requests/Operations/UndeprecateDomain2Request.cs` |
| `XAmzTarget18` | `src/AmazonSwf/Models/Enums/XAmzTarget18.cs` |
| `UndeprecateDomain2Error` | `src/AmazonSwf/Errors/UndeprecateDomain2Error.cs` |

### UndeprecateWorkflowType2

- **Auth**: `options.Sigv4`
- **Signature**: `UndeprecateWorkflowType2(UndeprecateWorkflowType2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<UndeprecateWorkflowType2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UndeprecateWorkflowType2Request` | `src/AmazonSwf/Requests/Operations/UndeprecateWorkflowType2Request.cs` |
| `XAmzTarget19` | `src/AmazonSwf/Models/Enums/XAmzTarget19.cs` |
| `UndeprecateWorkflowType2Error` | `src/AmazonSwf/Errors/UndeprecateWorkflowType2Error.cs` |

