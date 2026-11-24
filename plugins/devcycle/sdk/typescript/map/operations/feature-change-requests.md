<!-- Generated file — do not edit; regenerated with the SDK. -->

# FeatureChangeRequests — operations

Accessor: `client.featureChangeRequests` · Source: `src/resources/feature-change-requests.ts` · 8 operations · Request and error types: namespace `FeatureChangeRequests`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `dev-cycle`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### featureChangeRequestsControllerApplyFeatureChangeRequest

- **Signature**: `featureChangeRequestsControllerApplyFeatureChangeRequest(request: FeatureChangeRequests.FeatureChangeRequestsControllerApplyFeatureChangeRequestRequest, options?: RequestOptions): ApiPromise<undefined, FeatureChangeRequests.FeatureChangeRequestsControllerApplyFeatureChangeRequestError>`
- **Wire**: `PATCH /v2/projects/{project}/features/{feature}/change-requests/{id}/apply`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `FeatureChangeRequests.FeatureChangeRequestsControllerApplyFeatureChangeRequestError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error403"` [403] no body · `"notFoundErrorResponse"` [404] `NotFoundErrorResponse` · `"error405"` [405] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FeatureChangeRequests.FeatureChangeRequestsControllerApplyFeatureChangeRequestRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `feature` | `path` | `string` | yes |
| `project` | `path` | `string` | yes |
| `body` | `body` | `ApplyFeatureChangeRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApplyFeatureChangeRequestDto` | `applyFeatureChangeRequestDtoSchema` | `src/models/apply-feature-change-request-dto.ts` |
| `NotFoundErrorResponse` | `notFoundErrorResponseSchema` | `src/models/not-found-error-response.ts` |

### featureChangeRequestsControllerCancelFeatureChangeRequest

- **Signature**: `featureChangeRequestsControllerCancelFeatureChangeRequest(request: FeatureChangeRequests.FeatureChangeRequestsControllerCancelFeatureChangeRequestRequest, options?: RequestOptions): ApiPromise<undefined, FeatureChangeRequests.FeatureChangeRequestsControllerCancelFeatureChangeRequestError>`
- **Wire**: `PATCH /v2/projects/{project}/features/{feature}/change-requests/{id}/cancel`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `FeatureChangeRequests.FeatureChangeRequestsControllerCancelFeatureChangeRequestError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error403"` [403] no body · `"notFoundErrorResponse"` [404] `NotFoundErrorResponse` · `"error405"` [405] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FeatureChangeRequests.FeatureChangeRequestsControllerCancelFeatureChangeRequestRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `feature` | `path` | `string` | yes |
| `project` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `NotFoundErrorResponse` | `notFoundErrorResponseSchema` | `src/models/not-found-error-response.ts` |

### featureChangeRequestsControllerCreateChangeRequest

- **Signature**: `featureChangeRequestsControllerCreateChangeRequest(request: FeatureChangeRequests.FeatureChangeRequestsControllerCreateChangeRequestRequest, options?: RequestOptions): ApiPromise<FeatureChangeRequest, FeatureChangeRequests.FeatureChangeRequestsControllerCreateChangeRequestError>`
- **Wire**: `POST /v2/projects/{project}/features/{feature}/change-requests`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FeatureChangeRequest`
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `FeatureChangeRequests.FeatureChangeRequestsControllerCreateChangeRequestError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error409"` [409] no body · `"error412"` [412] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FeatureChangeRequests.FeatureChangeRequestsControllerCreateChangeRequestRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `feature` | `path` | `string` | yes |
| `project` | `path` | `string` | yes |
| `body` | `body` | `CreateFeatureChangeRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateFeatureChangeRequestDto` | `createFeatureChangeRequestDtoSchema` | `src/models/create-feature-change-request-dto.ts` |
| `FeatureChangeRequest` | `featureChangeRequestSchema` | `src/models/feature-change-request.ts` |

### featureChangeRequestsControllerGetFeatureChangeRequest

- **Signature**: `featureChangeRequestsControllerGetFeatureChangeRequest(request: FeatureChangeRequests.FeatureChangeRequestsControllerGetFeatureChangeRequestRequest, options?: RequestOptions): ApiPromise<FeatureChangeRequest, FeatureChangeRequests.FeatureChangeRequestsControllerGetFeatureChangeRequestError>`
- **Wire**: `GET /v2/projects/{project}/features/{feature}/change-requests/{id}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FeatureChangeRequest`
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `FeatureChangeRequests.FeatureChangeRequestsControllerGetFeatureChangeRequestError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"notFoundErrorResponse"` [404] `NotFoundErrorResponse` · `"error405"` [405] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FeatureChangeRequests.FeatureChangeRequestsControllerGetFeatureChangeRequestRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `feature` | `path` | `string` | yes |
| `project` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FeatureChangeRequest` | `featureChangeRequestSchema` | `src/models/feature-change-request.ts` |
| `NotFoundErrorResponse` | `notFoundErrorResponseSchema` | `src/models/not-found-error-response.ts` |

### featureChangeRequestsControllerGetLatestFeatureChangeRequest

- **Signature**: `featureChangeRequestsControllerGetLatestFeatureChangeRequest(request: FeatureChangeRequests.FeatureChangeRequestsControllerGetLatestFeatureChangeRequestRequest, options?: RequestOptions): ApiPromise<FeatureChangeRequest, FeatureChangeRequests.FeatureChangeRequestsControllerGetLatestFeatureChangeRequestError>`
- **Wire**: `GET /v2/projects/{project}/features/{feature}/change-requests/latest`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FeatureChangeRequest`
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `FeatureChangeRequests.FeatureChangeRequestsControllerGetLatestFeatureChangeRequestError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"notFoundErrorResponse"` [404] `NotFoundErrorResponse` · `"error405"` [405] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FeatureChangeRequests.FeatureChangeRequestsControllerGetLatestFeatureChangeRequestRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `feature` | `path` | `string` | yes |
| `project` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FeatureChangeRequest` | `featureChangeRequestSchema` | `src/models/feature-change-request.ts` |
| `NotFoundErrorResponse` | `notFoundErrorResponseSchema` | `src/models/not-found-error-response.ts` |

### featureChangeRequestsControllerGetPendingFeatureChangeRequests

- **Signature**: `featureChangeRequestsControllerGetPendingFeatureChangeRequests(request: FeatureChangeRequests.FeatureChangeRequestsControllerGetPendingFeatureChangeRequestsRequest, options?: RequestOptions): ApiPromise<FeatureChangeRequest[], FeatureChangeRequests.FeatureChangeRequestsControllerGetPendingFeatureChangeRequestsError>`
- **Wire**: `GET /v2/projects/{project}/features/{feature}/change-requests`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FeatureChangeRequest[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `FeatureChangeRequests.FeatureChangeRequestsControllerGetPendingFeatureChangeRequestsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"notFoundErrorResponse"` [404] `NotFoundErrorResponse` · `"error405"` [405] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FeatureChangeRequests.FeatureChangeRequestsControllerGetPendingFeatureChangeRequestsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `feature` | `path` | `string` | yes |
| `project` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FeatureChangeRequest` | `featureChangeRequestSchema` | `src/models/feature-change-request.ts` |
| `NotFoundErrorResponse` | `notFoundErrorResponseSchema` | `src/models/not-found-error-response.ts` |

### featureChangeRequestsControllerReviewFeatureChangeRequest

- **Signature**: `featureChangeRequestsControllerReviewFeatureChangeRequest(request: FeatureChangeRequests.FeatureChangeRequestsControllerReviewFeatureChangeRequestRequest, options?: RequestOptions): ApiPromise<undefined, FeatureChangeRequests.FeatureChangeRequestsControllerReviewFeatureChangeRequestError>`
- **Wire**: `PATCH /v2/projects/{project}/features/{feature}/change-requests/{id}/review`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `FeatureChangeRequests.FeatureChangeRequestsControllerReviewFeatureChangeRequestError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error403"` [403] no body · `"notFoundErrorResponse"` [404] `NotFoundErrorResponse` · `"error405"` [405] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FeatureChangeRequests.FeatureChangeRequestsControllerReviewFeatureChangeRequestRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `feature` | `path` | `string` | yes |
| `project` | `path` | `string` | yes |
| `apply` | `query` | `boolean` | no |
| `body` | `body` | `ReviewFeatureChangeRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ReviewFeatureChangeRequestDto` | `reviewFeatureChangeRequestDtoSchema` | `src/models/review-feature-change-request-dto.ts` |
| `NotFoundErrorResponse` | `notFoundErrorResponseSchema` | `src/models/not-found-error-response.ts` |

### featureChangeRequestsControllerSubmitChangeRequestForReview

- **Signature**: `featureChangeRequestsControllerSubmitChangeRequestForReview(request: FeatureChangeRequests.FeatureChangeRequestsControllerSubmitChangeRequestForReviewRequest, options?: RequestOptions): ApiPromise<FeatureChangeRequest, FeatureChangeRequests.FeatureChangeRequestsControllerSubmitChangeRequestForReviewError>`
- **Wire**: `PATCH /v2/projects/{project}/features/{feature}/change-requests/{id}/submit`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FeatureChangeRequest`
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `FeatureChangeRequests.FeatureChangeRequestsControllerSubmitChangeRequestForReviewError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error403"` [403] no body · `"notFoundErrorResponse"` [404] `NotFoundErrorResponse` · `"error405"` [405] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FeatureChangeRequests.FeatureChangeRequestsControllerSubmitChangeRequestForReviewRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `feature` | `path` | `string` | yes |
| `project` | `path` | `string` | yes |
| `body` | `body` | `SubmitFeatureChangeRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SubmitFeatureChangeRequestDto` | `submitFeatureChangeRequestDtoSchema` | `src/models/submit-feature-change-request-dto.ts` |
| `FeatureChangeRequest` | `featureChangeRequestSchema` | `src/models/feature-change-request.ts` |
| `NotFoundErrorResponse` | `notFoundErrorResponseSchema` | `src/models/not-found-error-response.ts` |

