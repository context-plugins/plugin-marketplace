<!-- Generated file — do not edit; regenerated with the SDK. -->

# Reviews — operations

Accessor: `client.reviews` · Source: `deliverd/apis/reviews.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.reviews.get_api_v1_reviews

- **Route**: `GET /api/v1/reviews`
- **Auth**: `bearer_auth`
- **Signature**: `def get_api_v1_reviews(*, limit: int | None = None, cursor: str | None = None, status: StatusDeliverdDevReviewsApiOrStr | None = None, external_id: str | None = None, report_id: UUID | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `limit` — query · `cursor` — query · `status` — query · `external_id` — query `externalId` · `report_id` — query `reportId`
- **Returns (parsed)**: `ApiV1ReviewsResponse1`
- **Returns (raw)**: `ApiResult[ApiV1ReviewsResponse1, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `StatusDeliverdDevReviewsApiOrStr` | `deliverd/models/enums/status_deliverd_dev_reviews_api.py` |
| `ApiV1ReviewsResponse1` | `deliverd/models/api_v1_reviews_response1.py` |

### client.reviews.get_api_v1_reviews_by_id

- **Route**: `GET /api/v1/reviews/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def get_api_v1_reviews_by_id(id_: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `ApiV1ReviewsResponse`
- **Returns (raw)**: `ApiResult[ApiV1ReviewsResponse, GetApiV1ReviewsByIdErrorBody]`
- **Error**: `GetApiV1ReviewsByIdErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [404, anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1ReviewsResponse` | `deliverd/models/api_v1_reviews_response.py` |
| `GetApiV1ReviewsByIdErrorBody` | `deliverd/errors/get_api_v1_reviews_by_id_error.py` |

### client.reviews.post_api_v1_reviews

- **Route**: `POST /api/v1/reviews`
- **Auth**: `bearer_auth`
- **Signature**: `def post_api_v1_reviews(*, body: ApiV1ReviewsRequest | ApiV1ReviewsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1ReviewsResponse`
- **Returns (raw)**: `ApiResult[ApiV1ReviewsResponse, PostApiV1ReviewsErrorBody]`
- **Error**: `PostApiV1ReviewsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1ReviewsRequest` | `deliverd/models/api_v1_reviews_request.py` |
| `ApiV1ReviewsRequestDict` | `deliverd/models/api_v1_reviews_request.py` |
| `ApiV1ReviewsResponse` | `deliverd/models/api_v1_reviews_response.py` |
| `PostApiV1ReviewsErrorBody` | `deliverd/errors/post_api_v1_reviews_error.py` |

### client.reviews.post_api_v1_reviews_by_id_cancel

- **Route**: `POST /api/v1/reviews/{id}/cancel`
- **Auth**: `bearer_auth`
- **Signature**: `def post_api_v1_reviews_by_id_cancel(id_: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `ApiV1ReviewsCancelResponse`
- **Returns (raw)**: `ApiResult[ApiV1ReviewsCancelResponse, PostApiV1ReviewsByIdCancelErrorBody]`
- **Error**: `PostApiV1ReviewsByIdCancelErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [403, 409, anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1ReviewsCancelResponse` | `deliverd/models/api_v1_reviews_cancel_response.py` |
| `PostApiV1ReviewsByIdCancelErrorBody` | `deliverd/errors/post_api_v1_reviews_by_id_cancel_error.py` |

