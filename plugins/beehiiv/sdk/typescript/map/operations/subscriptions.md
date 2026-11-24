<!-- Generated file — do not edit; regenerated with the SDK. -->

# Subscriptions — operations

Accessor: `client.subscriptions` · Source: `src/resources/subscriptions.ts` · 8 operations · Request and error types: namespace `Subscriptions`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `beehiiv`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### create11

- **Signature**: `create11(request: Subscriptions.Create11Request, options?: RequestOptions): ApiPromise<SubscriptionResponse, Subscriptions.Create11Error>`
- **Wire**: `POST /publications/{publicationId}/subscriptions`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SubscriptionResponse`
- **Error**: `BeehiivError` with `kind: "api"`, an instance of `Subscriptions.Create11Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Subscriptions.Create11Request` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `publicationId` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `body` | `body` | — | `SubscriptionRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SubscriptionRequest` | `subscriptionRequestSchema` | `src/models/subscription-request.ts` |
| `SubscriptionResponse` | `subscriptionResponseSchema` | `src/models/subscription-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### delete5

- **Signature**: `delete5(request: Subscriptions.Delete5Request, options?: RequestOptions): ApiPromise<SubscriptionDeleteResponse, Subscriptions.Delete5Error>`
- **Wire**: `DELETE /publications/{publicationId}/subscriptions/{subscriptionId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SubscriptionDeleteResponse`
- **Error**: `BeehiivError` with `kind: "api"`, an instance of `Subscriptions.Delete5Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Subscriptions.Delete5Request` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `publicationId` | `path` | — | `string` | yes |
| `subscriptionId` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SubscriptionDeleteResponse` | `subscriptionDeleteResponseSchema` | `src/models/subscription-delete-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getByEmail

- **Signature**: `getByEmail(request: Subscriptions.GetByEmailRequest, options?: RequestOptions): ApiPromise<SubscriptionResponse, Subscriptions.GetByEmailError>`
- **Wire**: `GET /publications/{publicationId}/subscriptions/by_email/{email}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SubscriptionResponse`
- **Error**: `BeehiivError` with `kind: "api"`, an instance of `Subscriptions.GetByEmailError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Subscriptions.GetByEmailRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `publicationId` | `path` | — | `string` | yes |
| `email` | `path` | — | `string` | yes |
| `expand` | `query` | `expand[]` | `SubscriptionsGetRequestExpandItem` | no |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SubscriptionsGetRequestExpandItem` | `subscriptionsGetRequestExpandItemSchema` | `src/models/subscriptions-get-request-expand-item.ts` |
| `SubscriptionResponse` | `subscriptionResponseSchema` | `src/models/subscription-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getById

- **Signature**: `getById(request: Subscriptions.GetByIdRequest, options?: RequestOptions): ApiPromise<SubscriptionResponse, Subscriptions.GetByIdError>`
- **Wire**: `GET /publications/{publicationId}/subscriptions/{subscriptionId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SubscriptionResponse`
- **Error**: `BeehiivError` with `kind: "api"`, an instance of `Subscriptions.GetByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Subscriptions.GetByIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `publicationId` | `path` | — | `string` | yes |
| `subscriptionId` | `path` | — | `string` | yes |
| `expand` | `query` | `expand[]` | `SubscriptionsGetRequestExpandItem` | no |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SubscriptionsGetRequestExpandItem` | `subscriptionsGetRequestExpandItemSchema` | `src/models/subscriptions-get-request-expand-item.ts` |
| `SubscriptionResponse` | `subscriptionResponseSchema` | `src/models/subscription-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### index20

- **Signature**: `index20(request: Subscriptions.Index20Request, options?: RequestOptions): ApiPromise<SubscriptionsListResponse, Subscriptions.Index20Error>`
- **Wire**: `GET /publications/{publicationId}/subscriptions`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SubscriptionsListResponse`
- **Error**: `BeehiivError` with `kind: "api"`, an instance of `Subscriptions.Index20Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Subscriptions.Index20Request` (14):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `publicationId` | `path` | — | `string` | yes | — |
| `expand` | `query` | `expand[]` | `SubscriptionsListRequestExpandItem` | no | — |
| `status` | `query` | — | `SubscriptionsListRequestStatus` | no | `SubscriptionsListRequestStatus.All` |
| `tier` | `query` | — | `SubscriptionsListRequestTier` | no | `SubscriptionsListRequestTier.All` |
| `premiumTiers` | `query` | `premium_tiers[]` | `string` | no | — |
| `premiumTierIds` | `query` | `premium_tier_ids[]` | `string` | no | — |
| `limit` | `query` | — | `number` | no | — |
| `cursor` | `query` | — | `string` | no | — |
| `page` | `query` | — | `number` | no | — |
| `email` | `query` | — | `string` | no | — |
| `orderBy` | `query` | `order_by` | `SubscriptionsListRequestOrderBy` | no | `SubscriptionsListRequestOrderBy.Created` |
| `direction` | `query` | — | `RequestDirection` | no | `RequestDirection.Asc` |
| `creationDate` | `query` | `creation_date` | `string` | no | — |
| `authorization` | `header` | `Authorization` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `SubscriptionsListRequestExpandItem` | `subscriptionsListRequestExpandItemSchema` | `src/models/subscriptions-list-request-expand-item.ts` |
| `SubscriptionsListRequestStatus` | `subscriptionsListRequestStatusSchema` | `src/models/subscriptions-list-request-status.ts` |
| `SubscriptionsListRequestTier` | `subscriptionsListRequestTierSchema` | `src/models/subscriptions-list-request-tier.ts` |
| `SubscriptionsListRequestOrderBy` | `subscriptionsListRequestOrderBySchema` | `src/models/subscriptions-list-request-order-by.ts` |
| `RequestDirection` | `requestDirectionSchema` | `src/models/request-direction.ts` |
| `SubscriptionsListResponse` | `subscriptionsListResponseSchema` | `src/models/subscriptions-list-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### patch3

- **Signature**: `patch3(request: Subscriptions.Patch3Request, options?: RequestOptions): ApiPromise<SubscriptionResponse, Subscriptions.Patch3Error>`
- **Wire**: `PATCH /publications/{publicationId}/subscriptions/{subscriptionId}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SubscriptionResponse`
- **Error**: `BeehiivError` with `kind: "api"`, an instance of `Subscriptions.Patch3Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Subscriptions.Patch3Request` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `publicationId` | `path` | — | `string` | yes |
| `subscriptionId` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `body` | `body` | — | `PublicationsSubscriptionsRequest1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicationsSubscriptionsRequest1` | `publicationsSubscriptionsRequest1Schema` | `src/models/publications-subscriptions-request1.ts` |
| `SubscriptionResponse` | `subscriptionResponseSchema` | `src/models/subscription-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### put3

- **Signature**: `put3(request: Subscriptions.Put3Request, options?: RequestOptions): ApiPromise<SubscriptionResponse, Subscriptions.Put3Error>`
- **Wire**: `PUT /publications/{publicationId}/subscriptions/{subscriptionId}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SubscriptionResponse`
- **Error**: `BeehiivError` with `kind: "api"`, an instance of `Subscriptions.Put3Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Subscriptions.Put3Request` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `publicationId` | `path` | — | `string` | yes |
| `subscriptionId` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `body` | `body` | — | `PublicationsSubscriptionsRequestReferenceSubscriptionsApi` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicationsSubscriptionsRequestReferenceSubscriptionsApi` | `publicationsSubscriptionsRequestReferenceSubscriptionsApiSchema` | `src/models/publications-subscriptions-request-reference-subscriptions-api.ts` |
| `SubscriptionResponse` | `subscriptionResponseSchema` | `src/models/subscription-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### updateByEmail

- **Signature**: `updateByEmail(request: Subscriptions.UpdateByEmailRequest, options?: RequestOptions): ApiPromise<SubscriptionResponse, Subscriptions.UpdateByEmailError>`
- **Wire**: `PUT /publications/{publicationId}/subscriptions/by_email/{email}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SubscriptionResponse`
- **Error**: `BeehiivError` with `kind: "api"`, an instance of `Subscriptions.UpdateByEmailError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Subscriptions.UpdateByEmailRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `publicationId` | `path` | — | `string` | yes |
| `email` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `body` | `body` | — | `PublicationsSubscriptionsByEmailRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicationsSubscriptionsByEmailRequest` | `publicationsSubscriptionsByEmailRequestSchema` | `src/models/publications-subscriptions-by-email-request.ts` |
| `SubscriptionResponse` | `subscriptionResponseSchema` | `src/models/subscription-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

