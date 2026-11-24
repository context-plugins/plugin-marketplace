<!-- Generated file — do not edit; regenerated with the SDK. -->

# InsightApi — operations

Accessor: `client.insight_api` · Source: `aws_x_ray/apis/insight_api.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.insight_api.get_insight

- **Route**: `POST /Insight`
- **Auth**: `sigv4`
- **Signature**: `def get_insight(*, body: InsightRequest | InsightRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `GetInsightResult`
- **Returns (raw)**: `ApiResult[GetInsightResult, GetInsightErrorBody]`
- **Error**: `GetInsightErrorBody` — **Case A (typed)**
- **Error arms**: `InvalidRequestException` [400] · `ThrottledException` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `InsightRequest` | `aws_x_ray/models/insight_request.py` |
| `InsightRequestDict` | `aws_x_ray/models/insight_request.py` |
| `GetInsightResult` | `aws_x_ray/models/get_insight_result.py` |
| `GetInsightErrorBody` | `aws_x_ray/errors/get_insight_error.py` |
| `InvalidRequestException` | `aws_x_ray/models/invalid_request_exception.py` |
| `ThrottledException` | `aws_x_ray/models/throttled_exception.py` |

