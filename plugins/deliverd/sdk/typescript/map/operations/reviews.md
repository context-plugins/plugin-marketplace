<!-- Generated file — do not edit; regenerated with the SDK. -->

# Reviews — operations

Accessor: `client.reviews` · Source: `src/resources/reviews.ts` · 4 operations · Request and error types: namespace `Reviews`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `deliverd`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getApiV1Reviews

- **Signature**: `getApiV1Reviews(request?: Reviews.GetApiV1ReviewsRequest, options?: RequestOptions): ApiPromise<ApiV1ReviewsResponse1, ApiError>`
- **Wire**: `GET /api/v1/reviews`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1ReviewsResponse1`
- **Error**: `DeliverdError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Reviews.GetApiV1ReviewsRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `limit` | `query` | `number` | no |
| `cursor` | `query` | `string` | no |
| `status` | `query` | `StatusDeliverdDevReviewsApi` | no |
| `externalId` | `query` | `string` | no |
| `reportId` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `StatusDeliverdDevReviewsApi` | `statusDeliverdDevReviewsApiSchema` | `src/models/status-deliverd-dev-reviews-api.ts` |
| `ApiV1ReviewsResponse1` | `apiV1ReviewsResponse1Schema` | `src/models/api-v1-reviews-response1.ts` |

### getApiV1ReviewsById

- **Signature**: `getApiV1ReviewsById(request: Reviews.GetApiV1ReviewsByIdRequest, options?: RequestOptions): ApiPromise<ApiV1ReviewsResponse, Reviews.GetApiV1ReviewsByIdError>`
- **Wire**: `GET /api/v1/reviews/{id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1ReviewsResponse`
- **Error**: `DeliverdError` with `kind: "api"`, an instance of `Reviews.GetApiV1ReviewsByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Reviews.GetApiV1ReviewsByIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1ReviewsResponse` | `apiV1ReviewsResponseSchema` | `src/models/api-v1-reviews-response.ts` |

### postApiV1Reviews

- **Signature**: `postApiV1Reviews(request?: Reviews.PostApiV1ReviewsRequest, options?: RequestOptions): ApiPromise<ApiV1ReviewsResponse, Reviews.PostApiV1ReviewsError>`
- **Wire**: `POST /api/v1/reviews`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1ReviewsResponse`
- **Error**: `DeliverdError` with `kind: "api"`, an instance of `Reviews.PostApiV1ReviewsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Reviews.PostApiV1ReviewsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1ReviewsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1ReviewsRequest` | `apiV1ReviewsRequestSchema` | `src/models/api-v1-reviews-request.ts` |
| `ApiV1ReviewsResponse` | `apiV1ReviewsResponseSchema` | `src/models/api-v1-reviews-response.ts` |

### postApiV1ReviewsByIdCancel

- **Signature**: `postApiV1ReviewsByIdCancel(request: Reviews.PostApiV1ReviewsByIdCancelRequest, options?: RequestOptions): ApiPromise<ApiV1ReviewsCancelResponse, Reviews.PostApiV1ReviewsByIdCancelError>`
- **Wire**: `POST /api/v1/reviews/{id}/cancel`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1ReviewsCancelResponse`
- **Error**: `DeliverdError` with `kind: "api"`, an instance of `Reviews.PostApiV1ReviewsByIdCancelError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error403"` [403] no body · `"error409"` [409] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Reviews.PostApiV1ReviewsByIdCancelRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1ReviewsCancelResponse` | `apiV1ReviewsCancelResponseSchema` | `src/models/api-v1-reviews-cancel-response.ts` |

