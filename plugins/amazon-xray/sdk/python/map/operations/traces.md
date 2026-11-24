<!-- Generated file — do not edit; regenerated with the SDK. -->

# Traces — operations

Accessor: `client.traces` · Source: `aws_x_ray/apis/traces.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.traces.batch_get_traces

- **Route**: `POST /Traces`
- **Auth**: `sigv4`
- **Signature**: `def batch_get_traces(*, body: TracesRequest | TracesRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `BatchGetTracesResult`
- **Returns (raw)**: `ApiResult[BatchGetTracesResult, BatchGetTracesErrorBody]`
- **Error**: `BatchGetTracesErrorBody` — **Case A (typed)**
- **Error arms**: `InvalidRequestException` [400] · `ThrottledException` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TracesRequest` | `aws_x_ray/models/traces_request.py` |
| `TracesRequestDict` | `aws_x_ray/models/traces_request.py` |
| `BatchGetTracesResult` | `aws_x_ray/models/batch_get_traces_result.py` |
| `BatchGetTracesErrorBody` | `aws_x_ray/errors/batch_get_traces_error.py` |
| `InvalidRequestException` | `aws_x_ray/models/invalid_request_exception.py` |
| `ThrottledException` | `aws_x_ray/models/throttled_exception.py` |

### client.traces.get_trace_summaries

- **Route**: `POST /TraceSummaries`
- **Auth**: `sigv4`
- **Signature**: `def get_trace_summaries(*, body: TraceSummariesRequest | TraceSummariesRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `GetTraceSummariesResult`
- **Returns (raw)**: `ApiResult[GetTraceSummariesResult, GetTraceSummariesErrorBody]`
- **Error**: `GetTraceSummariesErrorBody` — **Case A (typed)**
- **Error arms**: `InvalidRequestException` [400] · `ThrottledException` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TraceSummariesRequest` | `aws_x_ray/models/trace_summaries_request.py` |
| `TraceSummariesRequestDict` | `aws_x_ray/models/trace_summaries_request.py` |
| `GetTraceSummariesResult` | `aws_x_ray/models/get_trace_summaries_result.py` |
| `GetTraceSummariesErrorBody` | `aws_x_ray/errors/get_trace_summaries_error.py` |
| `InvalidRequestException` | `aws_x_ray/models/invalid_request_exception.py` |
| `ThrottledException` | `aws_x_ray/models/throttled_exception.py` |

