<!-- Generated file — do not edit; regenerated with the SDK. -->

# Insightimpactgraph — operations

Accessor: `client.insightimpactgraph` · Source: `aws_x_ray/apis/insightimpactgraph.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.insightimpactgraph.get_insight_impact_graph

- **Route**: `POST /InsightImpactGraph`
- **Auth**: `sigv4`
- **Signature**: `def get_insight_impact_graph(*, body: InsightImpactGraphRequest | InsightImpactGraphRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `GetInsightImpactGraphResult`
- **Returns (raw)**: `ApiResult[GetInsightImpactGraphResult, GetInsightImpactGraphErrorBody]`
- **Error**: `GetInsightImpactGraphErrorBody` — **Case A (typed)**
- **Error arms**: `InvalidRequestException` [400] · `ThrottledException` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `InsightImpactGraphRequest` | `aws_x_ray/models/insight_impact_graph_request.py` |
| `InsightImpactGraphRequestDict` | `aws_x_ray/models/insight_impact_graph_request.py` |
| `GetInsightImpactGraphResult` | `aws_x_ray/models/get_insight_impact_graph_result.py` |
| `GetInsightImpactGraphErrorBody` | `aws_x_ray/errors/get_insight_impact_graph_error.py` |
| `InvalidRequestException` | `aws_x_ray/models/invalid_request_exception.py` |
| `ThrottledException` | `aws_x_ray/models/throttled_exception.py` |

