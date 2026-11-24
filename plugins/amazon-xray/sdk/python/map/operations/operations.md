<!-- Generated file — do not edit; regenerated with the SDK. -->

# Operations — operations

Accessor: `client.operations` · Source: `aws_x_ray/apis/operations.py` · 8 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.operations.cancel_trace_retrieval

- **Route**: `POST /CancelTraceRetrieval`
- **Auth**: `sigv4`
- **Signature**: `def cancel_trace_retrieval(*, body: CancelTraceRetrievalRequest | CancelTraceRetrievalRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, CancelTraceRetrievalErrorBody]`
- **Error**: `CancelTraceRetrievalErrorBody` — **Case A (typed)**
- **Error arms**: `InvalidRequestException` [400] · `ResourceNotFoundException` [404] · `ThrottledException` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CancelTraceRetrievalRequest` | `aws_x_ray/models/cancel_trace_retrieval_request.py` |
| `CancelTraceRetrievalRequestDict` | `aws_x_ray/models/cancel_trace_retrieval_request.py` |
| `CancelTraceRetrievalErrorBody` | `aws_x_ray/errors/cancel_trace_retrieval_error.py` |
| `InvalidRequestException` | `aws_x_ray/models/invalid_request_exception.py` |
| `ResourceNotFoundException` | `aws_x_ray/models/resource_not_found_exception.py` |
| `ThrottledException` | `aws_x_ray/models/throttled_exception.py` |

### client.operations.get_indexing_rules

- **Route**: `POST /GetIndexingRules`
- **Auth**: `sigv4`
- **Signature**: `def get_indexing_rules(*, body: GetIndexingRulesRequest | GetIndexingRulesRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `GetIndexingRulesResult`
- **Returns (raw)**: `ApiResult[GetIndexingRulesResult, GetIndexingRulesErrorBody]`
- **Error**: `GetIndexingRulesErrorBody` — **Case A (typed)**
- **Error arms**: `InvalidRequestException` [400] · `ThrottledException` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetIndexingRulesRequest` | `aws_x_ray/models/get_indexing_rules_request.py` |
| `GetIndexingRulesRequestDict` | `aws_x_ray/models/get_indexing_rules_request.py` |
| `GetIndexingRulesResult` | `aws_x_ray/models/get_indexing_rules_result.py` |
| `GetIndexingRulesErrorBody` | `aws_x_ray/errors/get_indexing_rules_error.py` |
| `InvalidRequestException` | `aws_x_ray/models/invalid_request_exception.py` |
| `ThrottledException` | `aws_x_ray/models/throttled_exception.py` |

### client.operations.get_retrieved_traces_graph

- **Route**: `POST /GetRetrievedTracesGraph`
- **Auth**: `sigv4`
- **Signature**: `def get_retrieved_traces_graph(*, body: GetRetrievedTracesGraphRequest | GetRetrievedTracesGraphRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `GetRetrievedTracesGraphResult`
- **Returns (raw)**: `ApiResult[GetRetrievedTracesGraphResult, GetRetrievedTracesGraphErrorBody]`
- **Error**: `GetRetrievedTracesGraphErrorBody` — **Case A (typed)**
- **Error arms**: `InvalidRequestException` [400] · `ResourceNotFoundException` [404] · `ThrottledException` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetRetrievedTracesGraphRequest` | `aws_x_ray/models/get_retrieved_traces_graph_request.py` |
| `GetRetrievedTracesGraphRequestDict` | `aws_x_ray/models/get_retrieved_traces_graph_request.py` |
| `GetRetrievedTracesGraphResult` | `aws_x_ray/models/get_retrieved_traces_graph_result.py` |
| `GetRetrievedTracesGraphErrorBody` | `aws_x_ray/errors/get_retrieved_traces_graph_error.py` |
| `InvalidRequestException` | `aws_x_ray/models/invalid_request_exception.py` |
| `ResourceNotFoundException` | `aws_x_ray/models/resource_not_found_exception.py` |
| `ThrottledException` | `aws_x_ray/models/throttled_exception.py` |

### client.operations.get_trace_segment_destination

- **Route**: `POST /GetTraceSegmentDestination`
- **Auth**: `sigv4`
- **Signature**: `def get_trace_segment_destination(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `GetTraceSegmentDestinationResult`
- **Returns (raw)**: `ApiResult[GetTraceSegmentDestinationResult, GetTraceSegmentDestinationErrorBody]`
- **Error**: `GetTraceSegmentDestinationErrorBody` — **Case A (typed)**
- **Error arms**: `InvalidRequestException` [400] · `ThrottledException` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetTraceSegmentDestinationResult` | `aws_x_ray/models/get_trace_segment_destination_result.py` |
| `GetTraceSegmentDestinationErrorBody` | `aws_x_ray/errors/get_trace_segment_destination_error.py` |
| `InvalidRequestException` | `aws_x_ray/models/invalid_request_exception.py` |
| `ThrottledException` | `aws_x_ray/models/throttled_exception.py` |

### client.operations.list_retrieved_traces

- **Route**: `POST /ListRetrievedTraces`
- **Auth**: `sigv4`
- **Signature**: `def list_retrieved_traces(*, body: ListRetrievedTracesRequest | ListRetrievedTracesRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ListRetrievedTracesResult`
- **Returns (raw)**: `ApiResult[ListRetrievedTracesResult, ListRetrievedTracesErrorBody]`
- **Error**: `ListRetrievedTracesErrorBody` — **Case A (typed)**
- **Error arms**: `InvalidRequestException` [400] · `ResourceNotFoundException` [404] · `ThrottledException` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListRetrievedTracesRequest` | `aws_x_ray/models/list_retrieved_traces_request.py` |
| `ListRetrievedTracesRequestDict` | `aws_x_ray/models/list_retrieved_traces_request.py` |
| `ListRetrievedTracesResult` | `aws_x_ray/models/list_retrieved_traces_result.py` |
| `ListRetrievedTracesErrorBody` | `aws_x_ray/errors/list_retrieved_traces_error.py` |
| `InvalidRequestException` | `aws_x_ray/models/invalid_request_exception.py` |
| `ResourceNotFoundException` | `aws_x_ray/models/resource_not_found_exception.py` |
| `ThrottledException` | `aws_x_ray/models/throttled_exception.py` |

### client.operations.start_trace_retrieval

- **Route**: `POST /StartTraceRetrieval`
- **Auth**: `sigv4`
- **Signature**: `def start_trace_retrieval(*, body: StartTraceRetrievalRequest | StartTraceRetrievalRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `StartTraceRetrievalResult`
- **Returns (raw)**: `ApiResult[StartTraceRetrievalResult, StartTraceRetrievalErrorBody]`
- **Error**: `StartTraceRetrievalErrorBody` — **Case A (typed)**
- **Error arms**: `InvalidRequestException` [400] · `ResourceNotFoundException` [404] · `ThrottledException` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `StartTraceRetrievalRequest` | `aws_x_ray/models/start_trace_retrieval_request.py` |
| `StartTraceRetrievalRequestDict` | `aws_x_ray/models/start_trace_retrieval_request.py` |
| `StartTraceRetrievalResult` | `aws_x_ray/models/start_trace_retrieval_result.py` |
| `StartTraceRetrievalErrorBody` | `aws_x_ray/errors/start_trace_retrieval_error.py` |
| `InvalidRequestException` | `aws_x_ray/models/invalid_request_exception.py` |
| `ResourceNotFoundException` | `aws_x_ray/models/resource_not_found_exception.py` |
| `ThrottledException` | `aws_x_ray/models/throttled_exception.py` |

### client.operations.update_indexing_rule

- **Route**: `POST /UpdateIndexingRule`
- **Auth**: `sigv4`
- **Signature**: `def update_indexing_rule(*, body: UpdateIndexingRuleRequest | UpdateIndexingRuleRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `UpdateIndexingRuleResult`
- **Returns (raw)**: `ApiResult[UpdateIndexingRuleResult, UpdateIndexingRuleErrorBody]`
- **Error**: `UpdateIndexingRuleErrorBody` — **Case A (typed)**
- **Error arms**: `InvalidRequestException` [400] · `ResourceNotFoundException` [404] · `ThrottledException` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateIndexingRuleRequest` | `aws_x_ray/models/update_indexing_rule_request.py` |
| `UpdateIndexingRuleRequestDict` | `aws_x_ray/models/update_indexing_rule_request.py` |
| `UpdateIndexingRuleResult` | `aws_x_ray/models/update_indexing_rule_result.py` |
| `UpdateIndexingRuleErrorBody` | `aws_x_ray/errors/update_indexing_rule_error.py` |
| `InvalidRequestException` | `aws_x_ray/models/invalid_request_exception.py` |
| `ResourceNotFoundException` | `aws_x_ray/models/resource_not_found_exception.py` |
| `ThrottledException` | `aws_x_ray/models/throttled_exception.py` |

### client.operations.update_trace_segment_destination

- **Route**: `POST /UpdateTraceSegmentDestination`
- **Auth**: `sigv4`
- **Signature**: `def update_trace_segment_destination(*, body: UpdateTraceSegmentDestinationRequest | UpdateTraceSegmentDestinationRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `UpdateTraceSegmentDestinationResult`
- **Returns (raw)**: `ApiResult[UpdateTraceSegmentDestinationResult, UpdateTraceSegmentDestinationErrorBody]`
- **Error**: `UpdateTraceSegmentDestinationErrorBody` — **Case A (typed)**
- **Error arms**: `InvalidRequestException` [400] · `ThrottledException` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateTraceSegmentDestinationRequest` | `aws_x_ray/models/update_trace_segment_destination_request.py` |
| `UpdateTraceSegmentDestinationRequestDict` | `aws_x_ray/models/update_trace_segment_destination_request.py` |
| `UpdateTraceSegmentDestinationResult` | `aws_x_ray/models/update_trace_segment_destination_result.py` |
| `UpdateTraceSegmentDestinationErrorBody` | `aws_x_ray/errors/update_trace_segment_destination_error.py` |
| `InvalidRequestException` | `aws_x_ray/models/invalid_request_exception.py` |
| `ThrottledException` | `aws_x_ray/models/throttled_exception.py` |

