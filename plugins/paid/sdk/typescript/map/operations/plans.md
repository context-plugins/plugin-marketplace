<!-- Generated file — do not edit; regenerated with the SDK. -->

# Plans — operations

Accessor: `client.plans` · Source: `src/resources/plans.ts` · 15 operations · Request and error types: namespace `Plans`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `paid`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createPlan

- **Signature**: `createPlan(request: Plans.CreatePlanRequestParams, options?: RequestOptions): ApiPromise<Plan1, Plans.CreatePlanError>`
- **Wire**: `POST /plans/`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Plan1`
- **Error**: `PaidError` with `kind: "api"`, an instance of `Plans.CreatePlanError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [403] `ErrorResponse` · `"errorResponse3"` [404] `ErrorResponse` · `"errorResponse4"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Plans.CreatePlanRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `body` | `body` | — | `CreatePlanRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreatePlanRequest` | `createPlanRequestSchema` | `src/models/create-plan-request.ts` |
| `Plan1` | `plan1Schema` | `src/models/plan1.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getById

- **Signature**: `getById(request: Plans.GetByIdRequest, options?: RequestOptions): ApiPromise<Plan, Plans.GetByIdError>`
- **Wire**: `GET /plans/{planId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Plan`
- **Error**: `PaidError` with `kind: "api"`, an instance of `Plans.GetByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [403] `Error` · `"error2"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Plans.GetByIdRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `planId` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Plan` | `planSchema` | `src/models/plan.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getCurrent

- **Signature**: `getCurrent(request: Plans.GetCurrentRequest, options?: RequestOptions): ApiPromise<PlansGetCurrentResponse200, Plans.GetCurrentError>`
- **Wire**: `GET /plans/current`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlansGetCurrentResponse200`
- **Error**: `PaidError` with `kind: "api"`, an instance of `Plans.GetCurrentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Plans.GetCurrentRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `customerExternalId` | `query` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PlansGetCurrentResponse200` | `plansGetCurrentResponse200Schema` | `src/models/plans-get-current-response200.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getGroupById

- **Signature**: `getGroupById(request: Plans.GetGroupByIdRequest, options?: RequestOptions): ApiPromise<PlanGroup, Plans.GetGroupByIdError>`
- **Wire**: `GET /plans/planGroup/{planGroupId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlanGroup`
- **Error**: `PaidError` with `kind: "api"`, an instance of `Plans.GetGroupByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [403] `Error` · `"error2"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Plans.GetGroupByIdRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `planGroupId` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PlanGroup` | `planGroupSchema` | `src/models/plan-group.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getGroupPlans

- **Signature**: `getGroupPlans(request: Plans.GetGroupPlansRequest, options?: RequestOptions): ApiPromise<PlanWithFeatures[], Plans.GetGroupPlansError>`
- **Wire**: `GET /plans/planGroup/{planGroupId}/plans`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlanWithFeatures[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `PaidError` with `kind: "api"`, an instance of `Plans.GetGroupPlansError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [403] `Error` · `"error2"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Plans.GetGroupPlansRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `planGroupId` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PlanWithFeatures` | `planWithFeaturesSchema` | `src/models/plan-with-features.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getPlanByExternalId

- **Signature**: `getPlanByExternalId(request: Plans.GetPlanByExternalIdRequest, options?: RequestOptions): ApiPromise<Plan1, Plans.GetPlanByExternalIdError>`
- **Wire**: `GET /plans/external/{externalId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Plan1`
- **Error**: `PaidError` with `kind: "api"`, an instance of `Plans.GetPlanByExternalIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [403] `ErrorResponse` · `"errorResponse2"` [404] `ErrorResponse` · `"errorResponse3"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Plans.GetPlanByExternalIdRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `externalId` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Plan1` | `plan1Schema` | `src/models/plan1.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getPlanById

- **Signature**: `getPlanById(request: Plans.GetPlanByIdRequest, options?: RequestOptions): ApiPromise<Plan1, Plans.GetPlanByIdError>`
- **Wire**: `GET /plans/{id}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Plan1`
- **Error**: `PaidError` with `kind: "api"`, an instance of `Plans.GetPlanByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [403] `ErrorResponse` · `"errorResponse2"` [404] `ErrorResponse` · `"errorResponse3"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Plans.GetPlanByIdRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Plan1` | `plan1Schema` | `src/models/plan1.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getUsage

- **Signature**: `getUsage(request: Plans.GetUsageRequest, options?: RequestOptions): ApiPromise<UsageSummariesResponse, Plans.GetUsageError>`
- **Wire**: `GET /plans/{planId}/usage`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `UsageSummariesResponse`
- **Error**: `PaidError` with `kind: "api"`, an instance of `Plans.GetUsageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Plans.GetUsageRequest` (7):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `planId` | `path` | — | `string` | yes | — |
| `externalId` | `query` | — | `string` | yes | — |
| `limit` | `query` | — | `number` | no | `100` |
| `offset` | `query` | — | `number` | no | `0` |
| `startTime` | `query` | — | `Date` (date-time) | no | — |
| `endTime` | `query` | — | `Date` (date-time) | no | — |
| `authorization` | `header` | `Authorization` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `UsageSummariesResponse` | `usageSummariesResponseSchema` | `src/models/usage-summaries-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listPlans

- **Signature**: `listPlans(request: Plans.ListPlansRequest, options?: RequestOptions): ApiPromise<PlanListResponse, Plans.ListPlansError>`
- **Wire**: `GET /plans/`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlanListResponse`
- **Error**: `PaidError` with `kind: "api"`, an instance of `Plans.ListPlansError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [403] `ErrorResponse` · `"errorResponse3"` [404] `ErrorResponse` · `"errorResponse4"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Plans.ListPlansRequest` (6):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `limit` | `query` | — | `number` | no | `10` |
| `offset` | `query` | — | `number` | no | — |
| `productId` | `query` | — | `string` | no | — |
| `externalProductId` | `query` | — | `string` | no | — |
| `includeArchived` | `query` | — | `boolean` | no | `true` |
| `authorization` | `header` | `Authorization` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `PlanListResponse` | `planListResponseSchema` | `src/models/plan-list-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### subscribe

- **Signature**: `subscribe(request: Plans.SubscribeRequest, options?: RequestOptions): ApiPromise<Order, Plans.SubscribeError>`
- **Wire**: `POST /plans/{planId}/subscribe`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Order`
- **Error**: `PaidError` with `kind: "api"`, an instance of `Plans.SubscribeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Plans.SubscribeRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `planId` | `path` | — | `string` | yes |
| `customerExternalId` | `query` | — | `string` | yes |
| `currency` | `query` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Order` | `orderSchema` | `src/models/order.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### unsubscribe

- **Signature**: `unsubscribe(request: Plans.UnsubscribeRequest, options?: RequestOptions): ApiPromise<CancelRenewalResponse, Plans.UnsubscribeError>`
- **Wire**: `POST /plans/{planId}/unsubscribe`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CancelRenewalResponse`
- **Error**: `PaidError` with `kind: "api"`, an instance of `Plans.UnsubscribeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Plans.UnsubscribeRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `planId` | `path` | — | `string` | yes |
| `customerExternalId` | `query` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CancelRenewalResponse` | `cancelRenewalResponseSchema` | `src/models/cancel-renewal-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### updatePlanByExternalId

- **Signature**: `updatePlanByExternalId(request: Plans.UpdatePlanByExternalIdRequest, options?: RequestOptions): ApiPromise<Plan1, Plans.UpdatePlanByExternalIdError>`
- **Wire**: `PUT /plans/external/{externalId}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Plan1`
- **Error**: `PaidError` with `kind: "api"`, an instance of `Plans.UpdatePlanByExternalIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [403] `ErrorResponse` · `"errorResponse3"` [404] `ErrorResponse` · `"errorResponse4"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Plans.UpdatePlanByExternalIdRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `externalId` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `body` | `body` | — | `UpdatePlanRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdatePlanRequest` | `updatePlanRequestSchema` | `src/models/update-plan-request.ts` |
| `Plan1` | `plan1Schema` | `src/models/plan1.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### updatePlanById

- **Signature**: `updatePlanById(request: Plans.UpdatePlanByIdRequest, options?: RequestOptions): ApiPromise<Plan1, Plans.UpdatePlanByIdError>`
- **Wire**: `PUT /plans/{id}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Plan1`
- **Error**: `PaidError` with `kind: "api"`, an instance of `Plans.UpdatePlanByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [403] `ErrorResponse` · `"errorResponse3"` [404] `ErrorResponse` · `"errorResponse4"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Plans.UpdatePlanByIdRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `body` | `body` | — | `UpdatePlanRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdatePlanRequest` | `updatePlanRequestSchema` | `src/models/update-plan-request.ts` |
| `Plan1` | `plan1Schema` | `src/models/plan1.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### updatePlanUpgradePath

- **Signature**: `updatePlanUpgradePath(request: Plans.UpdatePlanUpgradePathRequestParams, options?: RequestOptions): ApiPromise<PlanUpgradePathResponse, Plans.UpdatePlanUpgradePathError>`
- **Wire**: `PUT /plans/upgrade-path`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PlanUpgradePathResponse`
- **Error**: `PaidError` with `kind: "api"`, an instance of `Plans.UpdatePlanUpgradePathError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [403] `ErrorResponse` · `"errorResponse3"` [404] `ErrorResponse` · `"errorResponse4"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Plans.UpdatePlanUpgradePathRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `body` | `body` | — | `UpdatePlanUpgradePathRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdatePlanUpgradePathRequest` | `updatePlanUpgradePathRequestSchema` | `src/models/update-plan-upgrade-path-request.ts` |
| `PlanUpgradePathResponse` | `planUpgradePathResponseSchema` | `src/models/plan-upgrade-path-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### upgrade

- **Signature**: `upgrade(request: Plans.UpgradeRequest, options?: RequestOptions): ApiPromise<ProrationUpgradeResponse, Plans.UpgradeError>`
- **Wire**: `POST /plans/upgrade`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ProrationUpgradeResponse`
- **Error**: `PaidError` with `kind: "api"`, an instance of `Plans.UpgradeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Plans.UpgradeRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `customerExternalId` | `query` | — | `string` | yes |
| `oldPlanId` | `query` | — | `string` | yes |
| `newPlanId` | `query` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProrationUpgradeResponse` | `prorationUpgradeResponseSchema` | `src/models/proration-upgrade-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

