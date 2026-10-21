<!-- Generated file — do not edit; regenerated with the SDK. -->

# Approvals — operations

Accessor: `client.approvals` · Source: `src/resources/approvals.ts` · 13 operations · Request and error types: namespace `Approvals`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `launch-darkly-rest-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteApprovalRequest

- **Signature**: `deleteApprovalRequest(request: Approvals.DeleteApprovalRequestRequest, options?: RequestOptions): ApiPromise<undefined, Approvals.DeleteApprovalRequestError>`
- **Wire**: `DELETE /api/v2/approval-requests/{id}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `Approvals.DeleteApprovalRequestError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Approvals.DeleteApprovalRequestRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### deleteApprovalRequestForFlag

- **Signature**: `deleteApprovalRequestForFlag(request: Approvals.DeleteApprovalRequestForFlagRequest, options?: RequestOptions): ApiPromise<undefined, Approvals.DeleteApprovalRequestForFlagError>`
- **Wire**: `DELETE /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/approval-requests/{id}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `Approvals.DeleteApprovalRequestForFlagError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Approvals.DeleteApprovalRequestForFlagRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `featureFlagKey` | `path` | `string` | yes |
| `environmentKey` | `path` | `string` | yes |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### getApprovalForFlag

- **Signature**: `getApprovalForFlag(request: Approvals.GetApprovalForFlagRequest, options?: RequestOptions): ApiPromise<FlagConfigApprovalRequestResponse, Approvals.GetApprovalForFlagError>`
- **Wire**: `GET /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/approval-requests/{id}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FlagConfigApprovalRequestResponse`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `Approvals.GetApprovalForFlagError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Approvals.GetApprovalForFlagRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `featureFlagKey` | `path` | `string` | yes |
| `environmentKey` | `path` | `string` | yes |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FlagConfigApprovalRequestResponse` | `flagConfigApprovalRequestResponseSchema` | `src/models/flag-config-approval-request-response.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### getApprovalRequest

- **Signature**: `getApprovalRequest(request: Approvals.GetApprovalRequestRequest, options?: RequestOptions): ApiPromise<ExpandableApprovalRequestResponse, Approvals.GetApprovalRequestError>`
- **Wire**: `GET /api/v2/approval-requests/{id}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ExpandableApprovalRequestResponse`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `Approvals.GetApprovalRequestError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Approvals.GetApprovalRequestRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `expand` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ExpandableApprovalRequestResponse` | `expandableApprovalRequestResponseSchema` | `src/models/expandable-approval-request-response.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### getApprovalRequests

- **Signature**: `getApprovalRequests(request: Approvals.GetApprovalRequestsRequest, options?: RequestOptions): ApiPromise<ExpandableApprovalRequestsResponse, Approvals.GetApprovalRequestsError>`
- **Wire**: `GET /api/v2/approval-requests`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ExpandableApprovalRequestsResponse`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `Approvals.GetApprovalRequestsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Approvals.GetApprovalRequestsRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `filter` | `query` | `string` | no |
| `expand` | `query` | `string` | no |
| `limit` | `query` | `number` | no |
| `offset` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ExpandableApprovalRequestsResponse` | `expandableApprovalRequestsResponseSchema` | `src/models/expandable-approval-requests-response.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### getApprovalsForFlag

- **Signature**: `getApprovalsForFlag(request: Approvals.GetApprovalsForFlagRequest, options?: RequestOptions): ApiPromise<FlagConfigApprovalRequestsResponse, Approvals.GetApprovalsForFlagError>`
- **Wire**: `GET /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/approval-requests`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FlagConfigApprovalRequestsResponse`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `Approvals.GetApprovalsForFlagError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Approvals.GetApprovalsForFlagRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `featureFlagKey` | `path` | `string` | yes |
| `environmentKey` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FlagConfigApprovalRequestsResponse` | `flagConfigApprovalRequestsResponseSchema` | `src/models/flag-config-approval-requests-response.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### postApprovalRequest

- **Signature**: `postApprovalRequest(request: Approvals.PostApprovalRequestRequest, options?: RequestOptions): ApiPromise<ApprovalRequestResponse, Approvals.PostApprovalRequestError>`
- **Wire**: `POST /api/v2/approval-requests`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApprovalRequestResponse`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `Approvals.PostApprovalRequestError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Approvals.PostApprovalRequestRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateApprovalRequestRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateApprovalRequestRequest` | `createApprovalRequestRequestSchema` | `src/models/create-approval-request-request.ts` |
| `ApprovalRequestResponse` | `approvalRequestResponseSchema` | `src/models/approval-request-response.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### postApprovalRequestApply

- **Signature**: `postApprovalRequestApply(request: Approvals.PostApprovalRequestApplyRequestParams, options?: RequestOptions): ApiPromise<ApprovalRequestResponse, Approvals.PostApprovalRequestApplyError>`
- **Wire**: `POST /api/v2/approval-requests/{id}/apply`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApprovalRequestResponse`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `Approvals.PostApprovalRequestApplyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Approvals.PostApprovalRequestApplyRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `PostApprovalRequestApplyRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PostApprovalRequestApplyRequest` | `postApprovalRequestApplyRequestSchema` | `src/models/post-approval-request-apply-request.ts` |
| `ApprovalRequestResponse` | `approvalRequestResponseSchema` | `src/models/approval-request-response.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### postApprovalRequestApplyForFlag

- **Signature**: `postApprovalRequestApplyForFlag(request: Approvals.PostApprovalRequestApplyForFlagRequest, options?: RequestOptions): ApiPromise<FlagConfigApprovalRequestResponse, Approvals.PostApprovalRequestApplyForFlagError>`
- **Wire**: `POST /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/approval-requests/{id}/apply`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FlagConfigApprovalRequestResponse`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `Approvals.PostApprovalRequestApplyForFlagError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Approvals.PostApprovalRequestApplyForFlagRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `featureFlagKey` | `path` | `string` | yes |
| `environmentKey` | `path` | `string` | yes |
| `id` | `path` | `string` | yes |
| `body` | `body` | `PostApprovalRequestApplyRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PostApprovalRequestApplyRequest` | `postApprovalRequestApplyRequestSchema` | `src/models/post-approval-request-apply-request.ts` |
| `FlagConfigApprovalRequestResponse` | `flagConfigApprovalRequestResponseSchema` | `src/models/flag-config-approval-request-response.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### postApprovalRequestForFlag

- **Signature**: `postApprovalRequestForFlag(request: Approvals.PostApprovalRequestForFlagRequest, options?: RequestOptions): ApiPromise<FlagConfigApprovalRequestResponse, Approvals.PostApprovalRequestForFlagError>`
- **Wire**: `POST /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/approval-requests`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FlagConfigApprovalRequestResponse`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `Approvals.PostApprovalRequestForFlagError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Approvals.PostApprovalRequestForFlagRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `featureFlagKey` | `path` | `string` | yes |
| `environmentKey` | `path` | `string` | yes |
| `body` | `body` | `CreateFlagConfigApprovalRequestRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateFlagConfigApprovalRequestRequest` | `createFlagConfigApprovalRequestRequestSchema` | `src/models/create-flag-config-approval-request-request.ts` |
| `FlagConfigApprovalRequestResponse` | `flagConfigApprovalRequestResponseSchema` | `src/models/flag-config-approval-request-response.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### postApprovalRequestReview

- **Signature**: `postApprovalRequestReview(request: Approvals.PostApprovalRequestReviewRequestParams, options?: RequestOptions): ApiPromise<ApprovalRequestResponse, Approvals.PostApprovalRequestReviewError>`
- **Wire**: `POST /api/v2/approval-requests/{id}/reviews`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApprovalRequestResponse`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `Approvals.PostApprovalRequestReviewError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"methodNotAllowedErrorRep"` [405] `MethodNotAllowedErrorRep` · `"statusConflictErrorRep"` [409] `StatusConflictErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Approvals.PostApprovalRequestReviewRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `PostApprovalRequestReviewRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PostApprovalRequestReviewRequest` | `postApprovalRequestReviewRequestSchema` | `src/models/post-approval-request-review-request.ts` |
| `ApprovalRequestResponse` | `approvalRequestResponseSchema` | `src/models/approval-request-response.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `MethodNotAllowedErrorRep` | `methodNotAllowedErrorRepSchema` | `src/models/method-not-allowed-error-rep.ts` |
| `StatusConflictErrorRep` | `statusConflictErrorRepSchema` | `src/models/status-conflict-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### postApprovalRequestReviewForFlag

- **Signature**: `postApprovalRequestReviewForFlag(request: Approvals.PostApprovalRequestReviewForFlagRequest, options?: RequestOptions): ApiPromise<FlagConfigApprovalRequestResponse, Approvals.PostApprovalRequestReviewForFlagError>`
- **Wire**: `POST /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/approval-requests/{id}/reviews`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FlagConfigApprovalRequestResponse`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `Approvals.PostApprovalRequestReviewForFlagError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Approvals.PostApprovalRequestReviewForFlagRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `featureFlagKey` | `path` | `string` | yes |
| `environmentKey` | `path` | `string` | yes |
| `id` | `path` | `string` | yes |
| `body` | `body` | `PostApprovalRequestReviewRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PostApprovalRequestReviewRequest` | `postApprovalRequestReviewRequestSchema` | `src/models/post-approval-request-review-request.ts` |
| `FlagConfigApprovalRequestResponse` | `flagConfigApprovalRequestResponseSchema` | `src/models/flag-config-approval-request-response.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### postFlagCopyConfigApprovalRequest

- **Signature**: `postFlagCopyConfigApprovalRequest(request: Approvals.PostFlagCopyConfigApprovalRequestRequest, options?: RequestOptions): ApiPromise<FlagConfigApprovalRequestResponse, Approvals.PostFlagCopyConfigApprovalRequestError>`
- **Wire**: `POST /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/approval-requests-flag-copy`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FlagConfigApprovalRequestResponse`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `Approvals.PostFlagCopyConfigApprovalRequestError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"statusConflictErrorRep"` [409] `StatusConflictErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Approvals.PostFlagCopyConfigApprovalRequestRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `featureFlagKey` | `path` | `string` | yes |
| `environmentKey` | `path` | `string` | yes |
| `body` | `body` | `CreateCopyFlagConfigApprovalRequestRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateCopyFlagConfigApprovalRequestRequest` | `createCopyFlagConfigApprovalRequestRequestSchema` | `src/models/create-copy-flag-config-approval-request-request.ts` |
| `FlagConfigApprovalRequestResponse` | `flagConfigApprovalRequestResponseSchema` | `src/models/flag-config-approval-request-response.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `StatusConflictErrorRep` | `statusConflictErrorRepSchema` | `src/models/status-conflict-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

