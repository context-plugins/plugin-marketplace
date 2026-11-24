<!-- Generated file — do not edit; regenerated with the SDK. -->

# Tracesummaries — operations

Accessor: `client.tracesummaries` · Source: `aws_x_ray/apis/tracesummaries.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.tracesummaries.get_trace_summaries2

- **Route**: `POST /TraceSummaries`
- **Auth**: `sigv4`
- **Signature**: `def get_trace_summaries2(*, body: TraceSummariesRequest | TraceSummariesRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `GetTraceSummariesResult`
- **Returns (raw)**: `ApiResult[GetTraceSummariesResult, GetTraceSummaries2ErrorBody]`
- **Error**: `GetTraceSummaries2ErrorBody` — **Case A (typed)**
- **Error arms**: `InvalidRequestException` [400] · `ThrottledException` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TraceSummariesRequest` | `aws_x_ray/models/trace_summaries_request.py` |
| `TraceSummariesRequestDict` | `aws_x_ray/models/trace_summaries_request.py` |
| `GetTraceSummariesResult` | `aws_x_ray/models/get_trace_summaries_result.py` |
| `GetTraceSummaries2ErrorBody` | `aws_x_ray/errors/get_trace_summaries2_error.py` |
| `InvalidRequestException` | `aws_x_ray/models/invalid_request_exception.py` |
| `ThrottledException` | `aws_x_ray/models/throttled_exception.py` |

