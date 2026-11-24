<!-- Generated file — do not edit; regenerated with the SDK. -->

# Subscriptions — operations

Accessor: `client.subscriptions` · Source: `src/resources/subscriptions.ts` · 10 operations · Request and error types: namespace `Subscriptions`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `curlec`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### cancelSubscription

- **Signature**: `cancelSubscription(request: Subscriptions.CancelSubscriptionRequest, options?: RequestOptions): ApiPromise<Subscription, Subscriptions.CancelSubscriptionError>`
- **Wire**: `POST /subscriptions/{id}/cancel`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Subscription`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `Subscriptions.CancelSubscriptionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Subscriptions.CancelSubscriptionRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `SubscriptionsCancelRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SubscriptionsCancelRequest` | `subscriptionsCancelRequestSchema` | `src/models/subscriptions-cancel-request.ts` |
| `Subscription` | `subscriptionSchema` | `src/models/subscription.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### cancelSubscriptionScheduledChanges

- **Signature**: `cancelSubscriptionScheduledChanges(request: Subscriptions.CancelSubscriptionScheduledChangesRequest, options?: RequestOptions): ApiPromise<Subscription, Subscriptions.CancelSubscriptionScheduledChangesError>`
- **Wire**: `POST /subscriptions/{id}/cancel_scheduled_changes`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Subscription`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `Subscriptions.CancelSubscriptionScheduledChangesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Subscriptions.CancelSubscriptionScheduledChangesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Subscription` | `subscriptionSchema` | `src/models/subscription.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### createSubscription

- **Signature**: `createSubscription(request: Subscriptions.CreateSubscriptionRequest, options?: RequestOptions): ApiPromise<Subscription, Subscriptions.CreateSubscriptionError>`
- **Wire**: `POST /subscriptions`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Subscription`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `Subscriptions.CreateSubscriptionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Subscriptions.CreateSubscriptionRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SubscriptionsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SubscriptionsRequest` | `subscriptionsRequestSchema` | `src/models/subscriptions-request.ts` |
| `Subscription` | `subscriptionSchema` | `src/models/subscription.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### deleteSubscriptionOffer

- **Signature**: `deleteSubscriptionOffer(request: Subscriptions.DeleteSubscriptionOfferRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Subscriptions.DeleteSubscriptionOfferError>`
- **Wire**: `DELETE /subscriptions/{sub_id}/{offer_id}`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `CurlecError` with `kind: "api"`, an instance of `Subscriptions.DeleteSubscriptionOfferError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Subscriptions.DeleteSubscriptionOfferRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `subId` | `path` | `sub_id` | `string` | yes |
| `offerId` | `path` | `offer_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Error` | `errorSchema` | `src/models/error.ts` |

### fetchSubscription

- **Signature**: `fetchSubscription(request: Subscriptions.FetchSubscriptionRequest, options?: RequestOptions): ApiPromise<Subscription, Subscriptions.FetchSubscriptionError>`
- **Wire**: `GET /subscriptions/{id}`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Subscription`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `Subscriptions.FetchSubscriptionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [404] `Error` · `"error3"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Subscriptions.FetchSubscriptionRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Subscription` | `subscriptionSchema` | `src/models/subscription.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### fetchSubscriptionScheduledChanges

- **Signature**: `fetchSubscriptionScheduledChanges(request: Subscriptions.FetchSubscriptionScheduledChangesRequest, options?: RequestOptions): ApiPromise<SubscriptionsRetrieveScheduledChangesResponse, Subscriptions.FetchSubscriptionScheduledChangesError>`
- **Wire**: `GET /subscriptions/{id}/retrieve_scheduled_changes`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SubscriptionsRetrieveScheduledChangesResponse`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `Subscriptions.FetchSubscriptionScheduledChangesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [404] `Error` · `"error3"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Subscriptions.FetchSubscriptionScheduledChangesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SubscriptionsRetrieveScheduledChangesResponse` | `subscriptionsRetrieveScheduledChangesResponseSchema` | `src/models/subscriptions-retrieve-scheduled-changes-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listSubscriptions

- **Signature**: `listSubscriptions(request?: Subscriptions.ListSubscriptionsRequest, options?: RequestOptions): ApiPromise<SubscriptionsResponse, Subscriptions.ListSubscriptionsError>`
- **Wire**: `GET /subscriptions`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SubscriptionsResponse`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `Subscriptions.ListSubscriptionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Subscriptions.ListSubscriptionsRequest` (5):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `planId` | `query` | `plan_id` | `string` | no | — |
| `from` | `query` | — | `number` | no | — |
| `to` | `query` | — | `number` | no | — |
| `count` | `query` | — | `number` | no | `10` |
| `skip` | `query` | — | `number` | no | `0` |

| Type | Schema value | Source |
| --- | --- | --- |
| `SubscriptionsResponse` | `subscriptionsResponseSchema` | `src/models/subscriptions-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### pauseSubscription

- **Signature**: `pauseSubscription(request: Subscriptions.PauseSubscriptionRequest, options?: RequestOptions): ApiPromise<Subscription, Subscriptions.PauseSubscriptionError>`
- **Wire**: `POST /subscriptions/{id}/pause`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Subscription`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `Subscriptions.PauseSubscriptionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Subscriptions.PauseSubscriptionRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `SubscriptionsPauseRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SubscriptionsPauseRequest` | `subscriptionsPauseRequestSchema` | `src/models/subscriptions-pause-request.ts` |
| `Subscription` | `subscriptionSchema` | `src/models/subscription.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### resumeSubscription

- **Signature**: `resumeSubscription(request: Subscriptions.ResumeSubscriptionRequest, options?: RequestOptions): ApiPromise<Subscription, Subscriptions.ResumeSubscriptionError>`
- **Wire**: `POST /subscriptions/{id}/resume`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Subscription`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `Subscriptions.ResumeSubscriptionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Subscriptions.ResumeSubscriptionRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `SubscriptionsResumeRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SubscriptionsResumeRequest` | `subscriptionsResumeRequestSchema` | `src/models/subscriptions-resume-request.ts` |
| `Subscription` | `subscriptionSchema` | `src/models/subscription.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### updateSubscription

- **Signature**: `updateSubscription(request: Subscriptions.UpdateSubscriptionRequest, options?: RequestOptions): ApiPromise<Subscription, Subscriptions.UpdateSubscriptionError>`
- **Wire**: `PATCH /subscriptions/{id}`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Subscription`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `Subscriptions.UpdateSubscriptionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Subscriptions.UpdateSubscriptionRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `SubscriptionsRequest1` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SubscriptionsRequest1` | `subscriptionsRequest1Schema` | `src/models/subscriptions-request1.ts` |
| `Subscription` | `subscriptionSchema` | `src/models/subscription.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

