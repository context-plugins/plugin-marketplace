<!-- Generated file — do not edit; regenerated with the SDK. -->

# Insightsummaries — operations

Accessor: `client.insightsummaries` · Source: `aws_x_ray/apis/insightsummaries.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.insightsummaries.get_insight_summaries

- **Route**: `POST /InsightSummaries`
- **Auth**: `sigv4`
- **Signature**: `def get_insight_summaries(*, body: InsightSummariesRequest | InsightSummariesRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `GetInsightSummariesResult`
- **Returns (raw)**: `ApiResult[GetInsightSummariesResult, GetInsightSummariesErrorBody]`
- **Error**: `GetInsightSummariesErrorBody` — **Case A (typed)**
- **Error arms**: `InvalidRequestException` [400] · `ThrottledException` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `InsightSummariesRequest` | `aws_x_ray/models/insight_summaries_request.py` |
| `InsightSummariesRequestDict` | `aws_x_ray/models/insight_summaries_request.py` |
| `GetInsightSummariesResult` | `aws_x_ray/models/get_insight_summaries_result.py` |
| `GetInsightSummariesErrorBody` | `aws_x_ray/errors/get_insight_summaries_error.py` |
| `InvalidRequestException` | `aws_x_ray/models/invalid_request_exception.py` |
| `ThrottledException` | `aws_x_ray/models/throttled_exception.py` |

