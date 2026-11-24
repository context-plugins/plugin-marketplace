<!-- Generated file — do not edit; regenerated with the SDK. -->

# Recommendations — operations

Accessor: `client.recommendations` · Source: `surfe/apis/recommendations.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.recommendations.fetch_recommendations

- **Route**: `POST /recommendations/fetch`
- **Auth**: `bearer_auth`
- **Signature**: `def fetch_recommendations(body: RecommendationsFetchRequest | RecommendationsFetchRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `RecommendationsFetchResponse`
- **Returns (raw)**: `ApiResult[RecommendationsFetchResponse, FetchRecommendationsErrorBody]`
- **Error**: `FetchRecommendationsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RecommendationsFetchRequest` | `surfe/models/recommendations_fetch_request.py` |
| `RecommendationsFetchRequestDict` | `surfe/models/recommendations_fetch_request.py` |
| `RecommendationsFetchResponse` | `surfe/models/recommendations_fetch_response.py` |
| `FetchRecommendationsErrorBody` | `surfe/errors/fetch_recommendations_error.py` |
| `Error` | `surfe/models/error.py` |

### client.recommendations.upsert_icp

- **Route**: `POST /recommendations/icp`
- **Auth**: `bearer_auth`
- **Signature**: `def upsert_icp(body: IcpDefinition | IcpDefinitionDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `IcpDefinition`
- **Returns (raw)**: `ApiResult[IcpDefinition, UpsertIcpErrorBody]`
- **Error**: `UpsertIcpErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `IcpDefinition` | `surfe/models/icp_definition.py` |
| `IcpDefinitionDict` | `surfe/models/icp_definition.py` |
| `UpsertIcpErrorBody` | `surfe/errors/upsert_icp_error.py` |
| `Error` | `surfe/models/error.py` |

