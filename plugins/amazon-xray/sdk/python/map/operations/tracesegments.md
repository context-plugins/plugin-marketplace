<!-- Generated file — do not edit; regenerated with the SDK. -->

# Tracesegments — operations

Accessor: `client.tracesegments` · Source: `aws_x_ray/apis/tracesegments.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.tracesegments.put_trace_segments

- **Route**: `POST /TraceSegments`
- **Auth**: `sigv4`
- **Signature**: `def put_trace_segments(*, body: TraceSegmentsRequest | TraceSegmentsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `PutTraceSegmentsResult`
- **Returns (raw)**: `ApiResult[PutTraceSegmentsResult, PutTraceSegmentsErrorBody]`
- **Error**: `PutTraceSegmentsErrorBody` — **Case A (typed)**
- **Error arms**: `InvalidRequestException` [400] · `ThrottledException` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TraceSegmentsRequest` | `aws_x_ray/models/trace_segments_request.py` |
| `TraceSegmentsRequestDict` | `aws_x_ray/models/trace_segments_request.py` |
| `PutTraceSegmentsResult` | `aws_x_ray/models/put_trace_segments_result.py` |
| `PutTraceSegmentsErrorBody` | `aws_x_ray/errors/put_trace_segments_error.py` |
| `InvalidRequestException` | `aws_x_ray/models/invalid_request_exception.py` |
| `ThrottledException` | `aws_x_ray/models/throttled_exception.py` |

