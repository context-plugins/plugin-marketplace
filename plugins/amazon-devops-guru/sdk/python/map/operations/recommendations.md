<!-- Generated file — do not edit; regenerated with the SDK. -->

# Recommendations — operations

Accessor: `client.recommendations` · Source: `amazon_dev_ops_guru/apis/recommendations.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.recommendations.list_recommendations

- **Route**: `POST /recommendations`
- **Auth**: `sigv4`
- **Signature**: `def list_recommendations(*, body: RecommendationsRequest | RecommendationsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ListRecommendationsResponse`
- **Returns (raw)**: `ApiResult[ListRecommendationsResponse, ListRecommendationsErrorBody]`
- **Error**: `ListRecommendationsErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `AccessDeniedException` [403] · `ResourceNotFoundException` [404] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RecommendationsRequest` | `amazon_dev_ops_guru/models/recommendations_request.py` |
| `RecommendationsRequestDict` | `amazon_dev_ops_guru/models/recommendations_request.py` |
| `ListRecommendationsResponse` | `amazon_dev_ops_guru/models/list_recommendations_response.py` |
| `ListRecommendationsErrorBody` | `amazon_dev_ops_guru/errors/list_recommendations_error.py` |
| `ValidationException` | `amazon_dev_ops_guru/models/validation_exception.py` |
| `AccessDeniedException` | `amazon_dev_ops_guru/models/access_denied_exception.py` |
| `ResourceNotFoundException` | `amazon_dev_ops_guru/models/resource_not_found_exception.py` |
| `ThrottlingException` | `amazon_dev_ops_guru/models/throttling_exception.py` |
| `InternalServerException` | `amazon_dev_ops_guru/models/internal_server_exception.py` |

