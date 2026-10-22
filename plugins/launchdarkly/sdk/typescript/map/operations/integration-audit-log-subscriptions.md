<!-- Generated file — do not edit; regenerated with the SDK. -->

# IntegrationAuditLogSubscriptions — operations

Accessor: `client.integrationAuditLogSubscriptions` · Source: `src/resources/integration-audit-log-subscriptions.ts` · 5 operations · Request and error types: namespace `IntegrationAuditLogSubscriptions`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `launch-darkly-rest-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createSubscription

- **Signature**: `createSubscription(request: IntegrationAuditLogSubscriptions.CreateSubscriptionRequest, options?: RequestOptions): ApiPromise<Integration, IntegrationAuditLogSubscriptions.CreateSubscriptionError>`
- **Wire**: `POST /api/v2/integrations/{integrationKey}`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Integration`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `IntegrationAuditLogSubscriptions.CreateSubscriptionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `IntegrationAuditLogSubscriptions.CreateSubscriptionRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `integrationKey` | `path` | `string` | yes |
| `body` | `body` | `SubscriptionPost` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SubscriptionPost` | `subscriptionPostSchema` | `src/models/subscription-post.ts` |
| `Integration` | `integrationSchema` | `src/models/integration.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### deleteSubscription

- **Signature**: `deleteSubscription(request: IntegrationAuditLogSubscriptions.DeleteSubscriptionRequest, options?: RequestOptions): ApiPromise<undefined, IntegrationAuditLogSubscriptions.DeleteSubscriptionError>`
- **Wire**: `DELETE /api/v2/integrations/{integrationKey}/{id}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `IntegrationAuditLogSubscriptions.DeleteSubscriptionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `IntegrationAuditLogSubscriptions.DeleteSubscriptionRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `integrationKey` | `path` | `string` | yes |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### getSubscriptionById

- **Signature**: `getSubscriptionById(request: IntegrationAuditLogSubscriptions.GetSubscriptionByIdRequest, options?: RequestOptions): ApiPromise<Integration, IntegrationAuditLogSubscriptions.GetSubscriptionByIdError>`
- **Wire**: `GET /api/v2/integrations/{integrationKey}/{id}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Integration`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `IntegrationAuditLogSubscriptions.GetSubscriptionByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `IntegrationAuditLogSubscriptions.GetSubscriptionByIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `integrationKey` | `path` | `string` | yes |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Integration` | `integrationSchema` | `src/models/integration.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### getSubscriptions

- **Signature**: `getSubscriptions(request: IntegrationAuditLogSubscriptions.GetSubscriptionsRequest, options?: RequestOptions): ApiPromise<Integrations, IntegrationAuditLogSubscriptions.GetSubscriptionsError>`
- **Wire**: `GET /api/v2/integrations/{integrationKey}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Integrations`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `IntegrationAuditLogSubscriptions.GetSubscriptionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `IntegrationAuditLogSubscriptions.GetSubscriptionsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `integrationKey` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Integrations` | `integrationsSchema` | `src/models/integrations.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### updateSubscription

- **Signature**: `updateSubscription(request: IntegrationAuditLogSubscriptions.UpdateSubscriptionRequest, options?: RequestOptions): ApiPromise<Integration, IntegrationAuditLogSubscriptions.UpdateSubscriptionError>`
- **Wire**: `PATCH /api/v2/integrations/{integrationKey}/{id}`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field, a bare top-level JSON array
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Integration`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `IntegrationAuditLogSubscriptions.UpdateSubscriptionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"statusConflictErrorRep"` [409] `StatusConflictErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `IntegrationAuditLogSubscriptions.UpdateSubscriptionRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `integrationKey` | `path` | `string` | yes |
| `id` | `path` | `string` | yes |
| `body` | `body` | `PatchOperation[]` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PatchOperation` | `patchOperationSchema` | `src/models/patch-operation.ts` |
| `Integration` | `integrationSchema` | `src/models/integration.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `StatusConflictErrorRep` | `statusConflictErrorRepSchema` | `src/models/status-conflict-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

