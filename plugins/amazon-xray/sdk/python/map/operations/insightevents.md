<!-- Generated file — do not edit; regenerated with the SDK. -->

# Insightevents — operations

Accessor: `client.insightevents` · Source: `aws_x_ray/apis/insightevents.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.insightevents.get_insight_events

- **Route**: `POST /InsightEvents`
- **Auth**: `sigv4`
- **Signature**: `def get_insight_events(*, body: InsightEventsRequest | InsightEventsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `GetInsightEventsResult`
- **Returns (raw)**: `ApiResult[GetInsightEventsResult, GetInsightEventsErrorBody]`
- **Error**: `GetInsightEventsErrorBody` — **Case A (typed)**
- **Error arms**: `InvalidRequestException` [400] · `ThrottledException` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `InsightEventsRequest` | `aws_x_ray/models/insight_events_request.py` |
| `InsightEventsRequestDict` | `aws_x_ray/models/insight_events_request.py` |
| `GetInsightEventsResult` | `aws_x_ray/models/get_insight_events_result.py` |
| `GetInsightEventsErrorBody` | `aws_x_ray/errors/get_insight_events_error.py` |
| `InvalidRequestException` | `aws_x_ray/models/invalid_request_exception.py` |
| `ThrottledException` | `aws_x_ray/models/throttled_exception.py` |

