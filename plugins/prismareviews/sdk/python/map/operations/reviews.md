<!-- Generated file — do not edit; regenerated with the SDK. -->

# Reviews — operations

Accessor: `client.reviews` · Source: `prisma_reviews/apis/reviews.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.reviews.get_review

- **Route**: `GET /v1/reviews/{id}`
- **Auth**: `api_key`
- **Signature**: `def get_review(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `Review`
- **Returns (raw)**: `ApiResult[Review, GetReviewErrorBody]`
- **Error**: `GetReviewErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 404, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Review` | `prisma_reviews/models/review.py` |
| `GetReviewErrorBody` | `prisma_reviews/errors/get_review_error.py` |
| `Error` | `prisma_reviews/models/error.py` |

### client.reviews.list_reviews

- **Route**: `GET /v1/reviews`
- **Auth**: `api_key`
- **Signature**: `def list_reviews(*, location_id: str | None = None, platform: PlatformIdOrStr | None = None, since: Since | SinceDict | None = None, has_reply: HasReplyOrStr | None = None, limit: int | None = 50, cursor: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `location_id` — query · `platform` — query · `since` — query · `has_reply` — query · `limit` — query · `cursor` — query
- **Returns (parsed)**: `ReviewList`
- **Returns (raw)**: `ApiResult[ReviewList, ListReviewsErrorBody]`
- **Error**: `ListReviewsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 422, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PlatformIdOrStr` | `prisma_reviews/models/enums/platform_id.py` |
| `Since` | `prisma_reviews/models/unions/since.py` |
| `SinceDict` | `prisma_reviews/models/unions/since.py` |
| `HasReplyOrStr` | `prisma_reviews/models/enums/has_reply.py` |
| `ReviewList` | `prisma_reviews/models/review_list.py` |
| `ListReviewsErrorBody` | `prisma_reviews/errors/list_reviews_error.py` |
| `Error` | `prisma_reviews/models/error.py` |

