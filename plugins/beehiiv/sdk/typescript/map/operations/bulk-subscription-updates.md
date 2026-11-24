<!-- Generated file — do not edit; regenerated with the SDK. -->

# BulkSubscriptionUpdates — operations

Accessor: `client.bulkSubscriptionUpdates` · Source: `src/resources/bulk-subscription-updates.ts` · 6 operations · Request and error types: namespace `BulkSubscriptionUpdates`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `beehiiv`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### index7

- **Signature**: `index7(request: BulkSubscriptionUpdates.Index7Request, options?: RequestOptions): ApiPromise<BulkSubscriptionUpdatesListResponse, BulkSubscriptionUpdates.Index7Error>`
- **Wire**: `GET /publications/{publicationId}/bulk_subscription_updates`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BulkSubscriptionUpdatesListResponse`
- **Error**: `BeehiivError` with `kind: "api"`, an instance of `BulkSubscriptionUpdates.Index7Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BulkSubscriptionUpdates.Index7Request` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `publicationId` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BulkSubscriptionUpdatesListResponse` | `bulkSubscriptionUpdatesListResponseSchema` | `src/models/bulk-subscription-updates-list-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### patch

- **Signature**: `patch(request: BulkSubscriptionUpdates.PatchRequest, options?: RequestOptions): ApiPromise<SubscriptionsPatchResponse, BulkSubscriptionUpdates.PatchError>`
- **Wire**: `PATCH /publications/{publicationId}/subscriptions/bulk_actions`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SubscriptionsPatchResponse`
- **Error**: `BeehiivError` with `kind: "api"`, an instance of `BulkSubscriptionUpdates.PatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BulkSubscriptionUpdates.PatchRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `publicationId` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `body` | `body` | — | `PublicationsSubscriptionsBulkActionsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicationsSubscriptionsBulkActionsRequest` | `publicationsSubscriptionsBulkActionsRequestSchema` | `src/models/publications-subscriptions-bulk-actions-request.ts` |
| `SubscriptionsPatchResponse` | `subscriptionsPatchResponseSchema` | `src/models/subscriptions-patch-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### patchStatus

- **Signature**: `patchStatus(request: BulkSubscriptionUpdates.PatchStatusRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `PATCH /publications/{publicationId}/subscriptions`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `BeehiivError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `BulkSubscriptionUpdates.PatchStatusRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `publicationId` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `body` | `body` | — | `PublicationsSubscriptionsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicationsSubscriptionsRequest` | `publicationsSubscriptionsRequestSchema` | `src/models/publications-subscriptions-request.ts` |

### put

- **Signature**: `put(request: BulkSubscriptionUpdates.PutRequest, options?: RequestOptions): ApiPromise<SubscriptionsPatchResponse, BulkSubscriptionUpdates.PutError>`
- **Wire**: `PUT /publications/{publicationId}/subscriptions/bulk_actions`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SubscriptionsPatchResponse`
- **Error**: `BeehiivError` with `kind: "api"`, an instance of `BulkSubscriptionUpdates.PutError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BulkSubscriptionUpdates.PutRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `publicationId` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `body` | `body` | — | `PublicationsSubscriptionsBulkActionsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicationsSubscriptionsBulkActionsRequest` | `publicationsSubscriptionsBulkActionsRequestSchema` | `src/models/publications-subscriptions-bulk-actions-request.ts` |
| `SubscriptionsPatchResponse` | `subscriptionsPatchResponseSchema` | `src/models/subscriptions-patch-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### putStatus

- **Signature**: `putStatus(request: BulkSubscriptionUpdates.PutStatusRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `PUT /publications/{publicationId}/subscriptions`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `BeehiivError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `BulkSubscriptionUpdates.PutStatusRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `publicationId` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `body` | `body` | — | `PublicationsSubscriptionsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicationsSubscriptionsRequest` | `publicationsSubscriptionsRequestSchema` | `src/models/publications-subscriptions-request.ts` |

### show4

- **Signature**: `show4(request: BulkSubscriptionUpdates.Show4Request, options?: RequestOptions): ApiPromise<BulkSubscriptionUpdatesGetResponse, BulkSubscriptionUpdates.Show4Error>`
- **Wire**: `GET /publications/{publicationId}/bulk_subscription_updates/{id}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BulkSubscriptionUpdatesGetResponse`
- **Error**: `BeehiivError` with `kind: "api"`, an instance of `BulkSubscriptionUpdates.Show4Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BulkSubscriptionUpdates.Show4Request` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `publicationId` | `path` | — | `string` | yes |
| `id` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BulkSubscriptionUpdatesGetResponse` | `bulkSubscriptionUpdatesGetResponseSchema` | `src/models/bulk-subscription-updates-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

