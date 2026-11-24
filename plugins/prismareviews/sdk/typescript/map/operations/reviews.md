<!-- Generated file — do not edit; regenerated with the SDK. -->

# Reviews — operations

Accessor: `client.reviews` · Source: `src/resources/reviews.ts` · 2 operations · Request and error types: namespace `Reviews`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `prisma-reviews`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getReview

- **Signature**: `getReview(request: Reviews.GetReviewRequest, options?: RequestOptions): ApiPromise<Review, Reviews.GetReviewError>`
- **Wire**: `GET /v1/reviews/{id}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Review`
- **Error**: `PrismaReviewsError` with `kind: "api"`, an instance of `Reviews.GetReviewError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"error6"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Reviews.GetReviewRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Review` | `reviewSchema` | `src/models/review.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listReviews

- **Signature**: `listReviews(request?: Reviews.ListReviewsRequest, options?: RequestOptions): ApiPromise<ReviewList, Reviews.ListReviewsError>`
- **Wire**: `GET /v1/reviews`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ReviewList`
- **Error**: `PrismaReviewsError` with `kind: "api"`, an instance of `Reviews.ListReviewsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"error3"` [422] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"error6"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Reviews.ListReviewsRequest` (6):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `locationId` | `query` | `location_id` | `string` | no | — |
| `platform` | `query` | — | `PlatformId` | no | — |
| `since` | `query` | — | `Since` | no | — |
| `hasReply` | `query` | `has_reply` | `HasReply` | no | — |
| `limit` | `query` | — | `number` | no | `50` |
| `cursor` | `query` | — | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `PlatformId` | `platformIdSchema` | `src/models/platform-id.ts` |
| `Since` | `sinceSchema` | `src/models/unions/since.ts` |
| `HasReply` | `hasReplySchema` | `src/models/has-reply.ts` |
| `ReviewList` | `reviewListSchema` | `src/models/review-list.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

