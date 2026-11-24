<!-- Generated file — do not edit; regenerated with the SDK. -->

# Webhooks — operations

Accessor: `client.webhooks` · Source: `src/resources/webhooks.ts` · 11 operations · Request and error types: namespace `Webhooks`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `lusha`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createOptOutSubscription

- **Signature**: `createOptOutSubscription(request: Webhooks.CreateOptOutSubscriptionRequestParams, options?: RequestOptions): ApiPromise<OptOutSubscriptionResponse, Webhooks.CreateOptOutSubscriptionError>`
- **Wire**: `POST /api/subscriptions/opt-out`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `OptOutSubscriptionResponse`
- **Error**: `LushaError` with `kind: "api"`, an instance of `Webhooks.CreateOptOutSubscriptionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Webhooks.CreateOptOutSubscriptionRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateOptOutSubscriptionRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateOptOutSubscriptionRequest` | `createOptOutSubscriptionRequestSchema` | `src/models/create-opt-out-subscription-request.ts` |
| `OptOutSubscriptionResponse` | `optOutSubscriptionResponseSchema` | `src/models/opt-out-subscription-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### createSubscription

- **Signature**: `createSubscription(request: Webhooks.CreateSubscriptionRequestParams, options?: RequestOptions): ApiPromise<CreateSubscriptionResponse, Webhooks.CreateSubscriptionError>`
- **Wire**: `POST /api/subscriptions`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreateSubscriptionResponse`
- **Error**: `LushaError` with `kind: "api"`, an instance of `Webhooks.CreateSubscriptionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Webhooks.CreateSubscriptionRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateSubscriptionRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateSubscriptionRequest` | `createSubscriptionRequestSchema` | `src/models/create-subscription-request.ts` |
| `CreateSubscriptionResponse` | `createSubscriptionResponseSchema` | `src/models/create-subscription-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### deleteSubscriptions

- **Signature**: `deleteSubscriptions(request: Webhooks.DeleteSubscriptionsRequest, options?: RequestOptions): ApiPromise<DeleteSubscriptionResponse, Webhooks.DeleteSubscriptionsError>`
- **Wire**: `POST /api/subscriptions/delete`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DeleteSubscriptionResponse`
- **Error**: `LushaError` with `kind: "api"`, an instance of `Webhooks.DeleteSubscriptionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Webhooks.DeleteSubscriptionsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiSubscriptionsDeleteRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiSubscriptionsDeleteRequest` | `apiSubscriptionsDeleteRequestSchema` | `src/models/api-subscriptions-delete-request.ts` |
| `DeleteSubscriptionResponse` | `deleteSubscriptionResponseSchema` | `src/models/delete-subscription-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getAccountSecret

- **Signature**: `getAccountSecret(options?: RequestOptions): ApiPromise<ApiAccountSecretResponse, Webhooks.GetAccountSecretError>`
- **Wire**: `GET /api/account/secret`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiAccountSecretResponse`
- **Error**: `LushaError` with `kind: "api"`, an instance of `Webhooks.GetAccountSecretError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [404] `ErrorResponse` · `"errorResponse3"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiAccountSecretResponse` | `apiAccountSecretResponseSchema` | `src/models/api-account-secret-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getAuditLogStats

- **Signature**: `getAuditLogStats(request?: Webhooks.GetAuditLogStatsRequest, options?: RequestOptions): ApiPromise<AuditLogStatsResponse, Webhooks.GetAuditLogStatsError>`
- **Wire**: `GET /api/audit-logs/stats`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AuditLogStatsResponse`
- **Error**: `LushaError` with `kind: "api"`, an instance of `Webhooks.GetAuditLogStatsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Webhooks.GetAuditLogStatsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `subscriptionId` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AuditLogStatsResponse` | `auditLogStatsResponseSchema` | `src/models/audit-log-stats-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getAuditLogs

- **Signature**: `getAuditLogs(request?: Webhooks.GetAuditLogsRequest, options?: RequestOptions): ApiPromise<AuditLogsResponse, Webhooks.GetAuditLogsError>`
- **Wire**: `GET /api/audit-logs`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AuditLogsResponse`
- **Error**: `LushaError` with `kind: "api"`, an instance of `Webhooks.GetAuditLogsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Webhooks.GetAuditLogsRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `subscriptionId` | `query` | `string` | no | — |
| `status` | `query` | `StatusLushaWebhooksApi` | no | — |
| `limit` | `query` | `number` | no | `50` |
| `offset` | `query` | `number` | no | `0` |

| Type | Schema value | Source |
| --- | --- | --- |
| `StatusLushaWebhooksApi` | `statusLushaWebhooksApiSchema` | `src/models/status-lusha-webhooks-api.ts` |
| `AuditLogsResponse` | `auditLogsResponseSchema` | `src/models/audit-logs-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getSubscriptionById

- **Signature**: `getSubscriptionById(request: Webhooks.GetSubscriptionByIdRequest, options?: RequestOptions): ApiPromise<SubscriptionWithoutSecret, Webhooks.GetSubscriptionByIdError>`
- **Wire**: `GET /api/subscriptions/{id}`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SubscriptionWithoutSecret`
- **Error**: `LushaError` with `kind: "api"`, an instance of `Webhooks.GetSubscriptionByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [404] `ErrorResponse` · `"errorResponse3"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Webhooks.GetSubscriptionByIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SubscriptionWithoutSecret` | `subscriptionWithoutSecretSchema` | `src/models/subscription-without-secret.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listSubscriptions

- **Signature**: `listSubscriptions(request?: Webhooks.ListSubscriptionsRequest, options?: RequestOptions): ApiPromise<SubscriptionListResponse, Webhooks.ListSubscriptionsError>`
- **Wire**: `GET /api/subscriptions`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SubscriptionListResponse`
- **Error**: `LushaError` with `kind: "api"`, an instance of `Webhooks.ListSubscriptionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Webhooks.ListSubscriptionsRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `limit` | `query` | `number` | no | `10` |
| `offset` | `query` | `number` | no | `0` |

| Type | Schema value | Source |
| --- | --- | --- |
| `SubscriptionListResponse` | `subscriptionListResponseSchema` | `src/models/subscription-list-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### regenerateAccountSecret

- **Signature**: `regenerateAccountSecret(options?: RequestOptions): ApiPromise<ApiAccountSecretRegenerateResponse, Webhooks.RegenerateAccountSecretError>`
- **Wire**: `POST /api/account/secret/regenerate`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiAccountSecretRegenerateResponse`
- **Error**: `LushaError` with `kind: "api"`, an instance of `Webhooks.RegenerateAccountSecretError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiAccountSecretRegenerateResponse` | `apiAccountSecretRegenerateResponseSchema` | `src/models/api-account-secret-regenerate-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### testSubscription

- **Signature**: `testSubscription(request: Webhooks.TestSubscriptionRequest, options?: RequestOptions): ApiPromise<TestSubscriptionResponse, Webhooks.TestSubscriptionError>`
- **Wire**: `POST /api/subscriptions/{id}/test`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TestSubscriptionResponse`
- **Error**: `LushaError` with `kind: "api"`, an instance of `Webhooks.TestSubscriptionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Webhooks.TestSubscriptionRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `id` | `path` | `string` | yes | — |
| `mode` | `query` | `Mode` | no | `Mode.Full` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Mode` | `modeSchema` | `src/models/mode.ts` |
| `TestSubscriptionResponse` | `testSubscriptionResponseSchema` | `src/models/test-subscription-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### updateSubscription

- **Signature**: `updateSubscription(request: Webhooks.UpdateSubscriptionRequestParams, options?: RequestOptions): ApiPromise<SubscriptionResponse, Webhooks.UpdateSubscriptionError>`
- **Wire**: `PATCH /api/subscriptions/{id}`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SubscriptionResponse`
- **Error**: `LushaError` with `kind: "api"`, an instance of `Webhooks.UpdateSubscriptionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [404] `ErrorResponse` · `"errorResponse3"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Webhooks.UpdateSubscriptionRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `UpdateSubscriptionRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateSubscriptionRequest` | `updateSubscriptionRequestSchema` | `src/models/update-subscription-request.ts` |
| `SubscriptionResponse` | `subscriptionResponseSchema` | `src/models/subscription-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

