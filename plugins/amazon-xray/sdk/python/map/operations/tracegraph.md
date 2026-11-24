<!-- Generated file — do not edit; regenerated with the SDK. -->

# Tracegraph — operations

Accessor: `client.tracegraph` · Source: `aws_x_ray/apis/tracegraph.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.tracegraph.get_trace_graph

- **Route**: `POST /TraceGraph`
- **Auth**: `sigv4`
- **Signature**: `def get_trace_graph(*, body: TraceGraphRequest | TraceGraphRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `GetTraceGraphResult`
- **Returns (raw)**: `ApiResult[GetTraceGraphResult, GetTraceGraphErrorBody]`
- **Error**: `GetTraceGraphErrorBody` — **Case A (typed)**
- **Error arms**: `InvalidRequestException` [400] · `ThrottledException` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TraceGraphRequest` | `aws_x_ray/models/trace_graph_request.py` |
| `TraceGraphRequestDict` | `aws_x_ray/models/trace_graph_request.py` |
| `GetTraceGraphResult` | `aws_x_ray/models/get_trace_graph_result.py` |
| `GetTraceGraphErrorBody` | `aws_x_ray/errors/get_trace_graph_error.py` |
| `InvalidRequestException` | `aws_x_ray/models/invalid_request_exception.py` |
| `ThrottledException` | `aws_x_ray/models/throttled_exception.py` |

