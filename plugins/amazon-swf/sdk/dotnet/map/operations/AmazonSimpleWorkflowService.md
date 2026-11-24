<!-- Generated file — do not edit; regenerated with the SDK. -->

# AmazonSimpleWorkflowService — operations

Accessor: `client.AmazonSimpleWorkflowService` · Source: `src/AmazonSwf/Api/AmazonSimpleWorkflowService.cs` · 37 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CountClosedWorkflowExecutions

- **Auth**: `options.Sigv4`
- **Signature**: `CountClosedWorkflowExecutions(CountClosedWorkflowExecutionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CountClosedWorkflowExecutionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CountClosedWorkflowExecutionsRequest` | `src/AmazonSwf/Requests/AmazonSimpleWorkflowService/CountClosedWorkflowExecutionsRequest.cs` |
| `XAmzTarget` | `src/AmazonSwf/Models/Enums/XAmzTarget.cs` |
| `CountClosedWorkflowExecutionsError` | `src/AmazonSwf/Errors/CountClosedWorkflowExecutionsError.cs` |

### CountOpenWorkflowExecutions

- **Auth**: `options.Sigv4`
- **Signature**: `CountOpenWorkflowExecutions(CountOpenWorkflowExecutionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CountOpenWorkflowExecutionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CountOpenWorkflowExecutionsRequest` | `src/AmazonSwf/Requests/AmazonSimpleWorkflowService/CountOpenWorkflowExecutionsRequest.cs` |
| `XAmzTarget1` | `src/AmazonSwf/Models/Enums/XAmzTarget1.cs` |
| `CountOpenWorkflowExecutionsError` | `src/AmazonSwf/Errors/CountOpenWorkflowExecutionsError.cs` |

### CountPendingActivityTasks

- **Auth**: `options.Sigv4`
- **Signature**: `CountPendingActivityTasks(CountPendingActivityTasksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CountPendingActivityTasksError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CountPendingActivityTasksRequest` | `src/AmazonSwf/Requests/AmazonSimpleWorkflowService/CountPendingActivityTasksRequest.cs` |
| `XAmzTarget2` | `src/AmazonSwf/Models/Enums/XAmzTarget2.cs` |
| `CountPendingActivityTasksError` | `src/AmazonSwf/Errors/CountPendingActivityTasksError.cs` |

### CountPendingDecisionTasks

- **Auth**: `options.Sigv4`
- **Signature**: `CountPendingDecisionTasks(CountPendingDecisionTasksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CountPendingDecisionTasksError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CountPendingDecisionTasksRequest` | `src/AmazonSwf/Requests/AmazonSimpleWorkflowService/CountPendingDecisionTasksRequest.cs` |
| `XAmzTarget3` | `src/AmazonSwf/Models/Enums/XAmzTarget3.cs` |
| `CountPendingDecisionTasksError` | `src/AmazonSwf/Errors/CountPendingDecisionTasksError.cs` |

### DeprecateActivityType

- **Auth**: `options.Sigv4`
- **Signature**: `DeprecateActivityType(DeprecateActivityTypeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeprecateActivityTypeError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeprecateActivityTypeRequest` | `src/AmazonSwf/Requests/AmazonSimpleWorkflowService/DeprecateActivityTypeRequest.cs` |
| `XAmzTarget4` | `src/AmazonSwf/Models/Enums/XAmzTarget4.cs` |
| `DeprecateActivityTypeError` | `src/AmazonSwf/Errors/DeprecateActivityTypeError.cs` |

### DeprecateDomain

- **Auth**: `options.Sigv4`
- **Signature**: `DeprecateDomain(DeprecateDomainRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeprecateDomainError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeprecateDomainRequest` | `src/AmazonSwf/Requests/AmazonSimpleWorkflowService/DeprecateDomainRequest.cs` |
| `XAmzTarget5` | `src/AmazonSwf/Models/Enums/XAmzTarget5.cs` |
| `DeprecateDomainError` | `src/AmazonSwf/Errors/DeprecateDomainError.cs` |

### DeprecateWorkflowType

- **Auth**: `options.Sigv4`
- **Signature**: `DeprecateWorkflowType(DeprecateWorkflowTypeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeprecateWorkflowTypeError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeprecateWorkflowTypeRequest` | `src/AmazonSwf/Requests/AmazonSimpleWorkflowService/DeprecateWorkflowTypeRequest.cs` |
| `XAmzTarget6` | `src/AmazonSwf/Models/Enums/XAmzTarget6.cs` |
| `DeprecateWorkflowTypeError` | `src/AmazonSwf/Errors/DeprecateWorkflowTypeError.cs` |

### DescribeActivityType

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeActivityType(DescribeActivityTypeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DescribeActivityTypeError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeActivityTypeRequest` | `src/AmazonSwf/Requests/AmazonSimpleWorkflowService/DescribeActivityTypeRequest.cs` |
| `XAmzTarget20` | `src/AmazonSwf/Models/Enums/XAmzTarget20.cs` |
| `DescribeActivityTypeError` | `src/AmazonSwf/Errors/DescribeActivityTypeError.cs` |

### DescribeDomain

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeDomain(DescribeDomainRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DescribeDomainError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeDomainRequest` | `src/AmazonSwf/Requests/AmazonSimpleWorkflowService/DescribeDomainRequest.cs` |
| `XAmzTarget26` | `src/AmazonSwf/Models/Enums/XAmzTarget26.cs` |
| `DescribeDomainError` | `src/AmazonSwf/Errors/DescribeDomainError.cs` |

### DescribeWorkflowExecution

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeWorkflowExecution(DescribeWorkflowExecutionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DescribeWorkflowExecutionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeWorkflowExecutionRequest` | `src/AmazonSwf/Requests/AmazonSimpleWorkflowService/DescribeWorkflowExecutionRequest.cs` |
| `XAmzTarget29` | `src/AmazonSwf/Models/Enums/XAmzTarget29.cs` |
| `DescribeWorkflowExecutionError` | `src/AmazonSwf/Errors/DescribeWorkflowExecutionError.cs` |

### DescribeWorkflowType

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeWorkflowType(DescribeWorkflowTypeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DescribeWorkflowTypeError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeWorkflowTypeRequest` | `src/AmazonSwf/Requests/AmazonSimpleWorkflowService/DescribeWorkflowTypeRequest.cs` |
| `XAmzTarget23` | `src/AmazonSwf/Models/Enums/XAmzTarget23.cs` |
| `DescribeWorkflowTypeError` | `src/AmazonSwf/Errors/DescribeWorkflowTypeError.cs` |

### GetWorkflowExecutionHistory

- **Auth**: `options.Sigv4`
- **Signature**: `GetWorkflowExecutionHistory(GetWorkflowExecutionHistoryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<GetWorkflowExecutionHistoryError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetWorkflowExecutionHistoryRequest` | `src/AmazonSwf/Requests/AmazonSimpleWorkflowService/GetWorkflowExecutionHistoryRequest.cs` |
| `XAmzTarget31` | `src/AmazonSwf/Models/Enums/XAmzTarget31.cs` |
| `GetWorkflowExecutionHistoryError` | `src/AmazonSwf/Errors/GetWorkflowExecutionHistoryError.cs` |

### ListActivityTypes

- **Auth**: `options.Sigv4`
- **Signature**: `ListActivityTypes(ListActivityTypesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListActivityTypesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListActivityTypesRequest` | `src/AmazonSwf/Requests/AmazonSimpleWorkflowService/ListActivityTypesRequest.cs` |
| `XAmzTarget21` | `src/AmazonSwf/Models/Enums/XAmzTarget21.cs` |
| `ListActivityTypesError` | `src/AmazonSwf/Errors/ListActivityTypesError.cs` |

### ListClosedWorkflowExecutions

- **Auth**: `options.Sigv4`
- **Signature**: `ListClosedWorkflowExecutions(ListClosedWorkflowExecutionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListClosedWorkflowExecutionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListClosedWorkflowExecutionsRequest` | `src/AmazonSwf/Requests/AmazonSimpleWorkflowService/ListClosedWorkflowExecutionsRequest.cs` |
| `XAmzTarget32` | `src/AmazonSwf/Models/Enums/XAmzTarget32.cs` |
| `ListClosedWorkflowExecutionsError` | `src/AmazonSwf/Errors/ListClosedWorkflowExecutionsError.cs` |

### ListDomains

- **Auth**: `options.Sigv4`
- **Signature**: `ListDomains(ListDomainsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListDomainsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListDomainsRequest` | `src/AmazonSwf/Requests/AmazonSimpleWorkflowService/ListDomainsRequest.cs` |
| `XAmzTarget27` | `src/AmazonSwf/Models/Enums/XAmzTarget27.cs` |
| `ListDomainsError` | `src/AmazonSwf/Errors/ListDomainsError.cs` |

### ListOpenWorkflowExecutions

- **Auth**: `options.Sigv4`
- **Signature**: `ListOpenWorkflowExecutions(ListOpenWorkflowExecutionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListOpenWorkflowExecutionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListOpenWorkflowExecutionsRequest` | `src/AmazonSwf/Requests/AmazonSimpleWorkflowService/ListOpenWorkflowExecutionsRequest.cs` |
| `XAmzTarget33` | `src/AmazonSwf/Models/Enums/XAmzTarget33.cs` |
| `ListOpenWorkflowExecutionsError` | `src/AmazonSwf/Errors/ListOpenWorkflowExecutionsError.cs` |

### ListTagsForResource

- **Auth**: `options.Sigv4`
- **Signature**: `ListTagsForResource(ListTagsForResourceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListTagsForResourceError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListTagsForResourceRequest` | `src/AmazonSwf/Requests/AmazonSimpleWorkflowService/ListTagsForResourceRequest.cs` |
| `XAmzTarget34` | `src/AmazonSwf/Models/Enums/XAmzTarget34.cs` |
| `ListTagsForResourceError` | `src/AmazonSwf/Errors/ListTagsForResourceError.cs` |

### ListWorkflowTypes

- **Auth**: `options.Sigv4`
- **Signature**: `ListWorkflowTypes(ListWorkflowTypesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListWorkflowTypesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListWorkflowTypesRequest` | `src/AmazonSwf/Requests/AmazonSimpleWorkflowService/ListWorkflowTypesRequest.cs` |
| `XAmzTarget24` | `src/AmazonSwf/Models/Enums/XAmzTarget24.cs` |
| `ListWorkflowTypesError` | `src/AmazonSwf/Errors/ListWorkflowTypesError.cs` |

### PollForActivityTask

- **Auth**: `options.Sigv4`
- **Signature**: `PollForActivityTask(PollForActivityTaskRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<PollForActivityTaskError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PollForActivityTaskRequest` | `src/AmazonSwf/Requests/AmazonSimpleWorkflowService/PollForActivityTaskRequest.cs` |
| `XAmzTarget7` | `src/AmazonSwf/Models/Enums/XAmzTarget7.cs` |
| `PollForActivityTaskError` | `src/AmazonSwf/Errors/PollForActivityTaskError.cs` |

### PollForDecisionTask

- **Auth**: `options.Sigv4`
- **Signature**: `PollForDecisionTask(PollForDecisionTaskRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<PollForDecisionTaskError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PollForDecisionTaskRequest` | `src/AmazonSwf/Requests/AmazonSimpleWorkflowService/PollForDecisionTaskRequest.cs` |
| `XAmzTarget8` | `src/AmazonSwf/Models/Enums/XAmzTarget8.cs` |
| `PollForDecisionTaskError` | `src/AmazonSwf/Errors/PollForDecisionTaskError.cs` |

### RecordActivityTaskHeartbeat

- **Auth**: `options.Sigv4`
- **Signature**: `RecordActivityTaskHeartbeat(RecordActivityTaskHeartbeatRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RecordActivityTaskHeartbeatError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RecordActivityTaskHeartbeatRequest` | `src/AmazonSwf/Requests/AmazonSimpleWorkflowService/RecordActivityTaskHeartbeatRequest.cs` |
| `XAmzTarget9` | `src/AmazonSwf/Models/Enums/XAmzTarget9.cs` |
| `RecordActivityTaskHeartbeatError` | `src/AmazonSwf/Errors/RecordActivityTaskHeartbeatError.cs` |

### RegisterActivityType

- **Auth**: `options.Sigv4`
- **Signature**: `RegisterActivityType(RegisterActivityTypeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RegisterActivityTypeError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RegisterActivityTypeRequest` | `src/AmazonSwf/Requests/AmazonSimpleWorkflowService/RegisterActivityTypeRequest.cs` |
| `XAmzTarget22` | `src/AmazonSwf/Models/Enums/XAmzTarget22.cs` |
| `RegisterActivityTypeError` | `src/AmazonSwf/Errors/RegisterActivityTypeError.cs` |

### RegisterDomain

- **Auth**: `options.Sigv4`
- **Signature**: `RegisterDomain(RegisterDomainRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RegisterDomainError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RegisterDomainRequest` | `src/AmazonSwf/Requests/AmazonSimpleWorkflowService/RegisterDomainRequest.cs` |
| `XAmzTarget28` | `src/AmazonSwf/Models/Enums/XAmzTarget28.cs` |
| `RegisterDomainError` | `src/AmazonSwf/Errors/RegisterDomainError.cs` |

### RegisterWorkflowType

- **Auth**: `options.Sigv4`
- **Signature**: `RegisterWorkflowType(RegisterWorkflowTypeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RegisterWorkflowTypeError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RegisterWorkflowTypeRequest` | `src/AmazonSwf/Requests/AmazonSimpleWorkflowService/RegisterWorkflowTypeRequest.cs` |
| `XAmzTarget25` | `src/AmazonSwf/Models/Enums/XAmzTarget25.cs` |
| `RegisterWorkflowTypeError` | `src/AmazonSwf/Errors/RegisterWorkflowTypeError.cs` |

### RequestCancelWorkflowExecution

- **Auth**: `options.Sigv4`
- **Signature**: `RequestCancelWorkflowExecution(RequestCancelWorkflowExecutionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RequestCancelWorkflowExecutionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RequestCancelWorkflowExecutionRequest` | `src/AmazonSwf/Requests/AmazonSimpleWorkflowService/RequestCancelWorkflowExecutionRequest.cs` |
| `XAmzTarget10` | `src/AmazonSwf/Models/Enums/XAmzTarget10.cs` |
| `RequestCancelWorkflowExecutionError` | `src/AmazonSwf/Errors/RequestCancelWorkflowExecutionError.cs` |

### RespondActivityTaskCanceled

- **Auth**: `options.Sigv4`
- **Signature**: `RespondActivityTaskCanceled(RespondActivityTaskCanceledRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RespondActivityTaskCanceledError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RespondActivityTaskCanceledRequest` | `src/AmazonSwf/Requests/AmazonSimpleWorkflowService/RespondActivityTaskCanceledRequest.cs` |
| `XAmzTarget11` | `src/AmazonSwf/Models/Enums/XAmzTarget11.cs` |
| `RespondActivityTaskCanceledError` | `src/AmazonSwf/Errors/RespondActivityTaskCanceledError.cs` |

### RespondActivityTaskCompleted

- **Auth**: `options.Sigv4`
- **Signature**: `RespondActivityTaskCompleted(RespondActivityTaskCompletedRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RespondActivityTaskCompletedError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RespondActivityTaskCompletedRequest` | `src/AmazonSwf/Requests/AmazonSimpleWorkflowService/RespondActivityTaskCompletedRequest.cs` |
| `XAmzTarget12` | `src/AmazonSwf/Models/Enums/XAmzTarget12.cs` |
| `RespondActivityTaskCompletedError` | `src/AmazonSwf/Errors/RespondActivityTaskCompletedError.cs` |

### RespondActivityTaskFailed

- **Auth**: `options.Sigv4`
- **Signature**: `RespondActivityTaskFailed(RespondActivityTaskFailedRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RespondActivityTaskFailedError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RespondActivityTaskFailedRequest` | `src/AmazonSwf/Requests/AmazonSimpleWorkflowService/RespondActivityTaskFailedRequest.cs` |
| `XAmzTarget13` | `src/AmazonSwf/Models/Enums/XAmzTarget13.cs` |
| `RespondActivityTaskFailedError` | `src/AmazonSwf/Errors/RespondActivityTaskFailedError.cs` |

### RespondDecisionTaskCompleted

- **Auth**: `options.Sigv4`
- **Signature**: `RespondDecisionTaskCompleted(RespondDecisionTaskCompletedRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RespondDecisionTaskCompletedError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RespondDecisionTaskCompletedRequest` | `src/AmazonSwf/Requests/AmazonSimpleWorkflowService/RespondDecisionTaskCompletedRequest.cs` |
| `XAmzTarget14` | `src/AmazonSwf/Models/Enums/XAmzTarget14.cs` |
| `RespondDecisionTaskCompletedError` | `src/AmazonSwf/Errors/RespondDecisionTaskCompletedError.cs` |

### SignalWorkflowExecution

- **Auth**: `options.Sigv4`
- **Signature**: `SignalWorkflowExecution(SignalWorkflowExecutionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<SignalWorkflowExecutionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SignalWorkflowExecutionRequest` | `src/AmazonSwf/Requests/AmazonSimpleWorkflowService/SignalWorkflowExecutionRequest.cs` |
| `XAmzTarget15` | `src/AmazonSwf/Models/Enums/XAmzTarget15.cs` |
| `SignalWorkflowExecutionError` | `src/AmazonSwf/Errors/SignalWorkflowExecutionError.cs` |

### StartWorkflowExecution

- **Auth**: `options.Sigv4`
- **Signature**: `StartWorkflowExecution(StartWorkflowExecutionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<StartWorkflowExecutionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StartWorkflowExecutionRequest` | `src/AmazonSwf/Requests/AmazonSimpleWorkflowService/StartWorkflowExecutionRequest.cs` |
| `XAmzTarget30` | `src/AmazonSwf/Models/Enums/XAmzTarget30.cs` |
| `StartWorkflowExecutionError` | `src/AmazonSwf/Errors/StartWorkflowExecutionError.cs` |

### TagResource

- **Auth**: `options.Sigv4`
- **Signature**: `TagResource(TagResourceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<TagResourceError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TagResourceRequest` | `src/AmazonSwf/Requests/AmazonSimpleWorkflowService/TagResourceRequest.cs` |
| `XAmzTarget35` | `src/AmazonSwf/Models/Enums/XAmzTarget35.cs` |
| `TagResourceError` | `src/AmazonSwf/Errors/TagResourceError.cs` |

### TerminateWorkflowExecution

- **Auth**: `options.Sigv4`
- **Signature**: `TerminateWorkflowExecution(TerminateWorkflowExecutionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<TerminateWorkflowExecutionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TerminateWorkflowExecutionRequest` | `src/AmazonSwf/Requests/AmazonSimpleWorkflowService/TerminateWorkflowExecutionRequest.cs` |
| `XAmzTarget16` | `src/AmazonSwf/Models/Enums/XAmzTarget16.cs` |
| `TerminateWorkflowExecutionError` | `src/AmazonSwf/Errors/TerminateWorkflowExecutionError.cs` |

### UndeprecateActivityType

- **Auth**: `options.Sigv4`
- **Signature**: `UndeprecateActivityType(UndeprecateActivityTypeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<UndeprecateActivityTypeError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UndeprecateActivityTypeRequest` | `src/AmazonSwf/Requests/AmazonSimpleWorkflowService/UndeprecateActivityTypeRequest.cs` |
| `XAmzTarget17` | `src/AmazonSwf/Models/Enums/XAmzTarget17.cs` |
| `UndeprecateActivityTypeError` | `src/AmazonSwf/Errors/UndeprecateActivityTypeError.cs` |

### UndeprecateDomain

- **Auth**: `options.Sigv4`
- **Signature**: `UndeprecateDomain(UndeprecateDomainRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<UndeprecateDomainError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UndeprecateDomainRequest` | `src/AmazonSwf/Requests/AmazonSimpleWorkflowService/UndeprecateDomainRequest.cs` |
| `XAmzTarget18` | `src/AmazonSwf/Models/Enums/XAmzTarget18.cs` |
| `UndeprecateDomainError` | `src/AmazonSwf/Errors/UndeprecateDomainError.cs` |

### UndeprecateWorkflowType

- **Auth**: `options.Sigv4`
- **Signature**: `UndeprecateWorkflowType(UndeprecateWorkflowTypeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<UndeprecateWorkflowTypeError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UndeprecateWorkflowTypeRequest` | `src/AmazonSwf/Requests/AmazonSimpleWorkflowService/UndeprecateWorkflowTypeRequest.cs` |
| `XAmzTarget19` | `src/AmazonSwf/Models/Enums/XAmzTarget19.cs` |
| `UndeprecateWorkflowTypeError` | `src/AmazonSwf/Errors/UndeprecateWorkflowTypeError.cs` |

### UntagResource

- **Auth**: `options.Sigv4`
- **Signature**: `UntagResource(UntagResourceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<UntagResourceError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UntagResourceRequest` | `src/AmazonSwf/Requests/AmazonSimpleWorkflowService/UntagResourceRequest.cs` |
| `XAmzTarget36` | `src/AmazonSwf/Models/Enums/XAmzTarget36.cs` |
| `UntagResourceError` | `src/AmazonSwf/Errors/UntagResourceError.cs` |

