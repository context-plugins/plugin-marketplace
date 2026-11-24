<!-- Generated file — do not edit; regenerated with the SDK. -->

# Subscribers — operations

Accessor: `client.subscribers` · Source: `src/resources/subscribers.ts` · 3 operations · Request and error types: namespace `Subscribers`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `postscript`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getSubscriber

- **Signature**: `getSubscriber(request: Subscribers.GetSubscriberRequest, options?: RequestOptions): ApiPromise<unknown, Subscribers.GetSubscriberError>`
- **Wire**: `GET /api/v2/subscribers/{id}`
- **Auth**: `sec0`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `unknown` — a bare `application/json` unknown; the success type *is* the unknown
- **Error**: `PostscriptError` with `kind: "api"`, an instance of `Subscribers.GetSubscriberError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] `Record<string, unknown>` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Subscribers.GetSubscriberRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `xPostscriptShopToken` | `header` | `X-Postscript-Shop-Token` | `string` | no |

### getSubscribers

- **Signature**: `getSubscribers(request?: Subscribers.GetSubscribersRequest, options?: RequestOptions): ApiPromise<unknown, Subscribers.GetSubscribersError>`
- **Wire**: `GET /api/v2/subscribers`
- **Auth**: `sec0`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `unknown` — a bare `application/json` unknown; the success type *is* the unknown
- **Error**: `PostscriptError` with `kind: "api"`, an instance of `Subscribers.GetSubscribersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] `Record<string, unknown>` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Subscribers.GetSubscribersRequest` (23):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `createdAtEq` | `query` | `created_at__eq` | `Date` (date-time) | no |
| `createdAtGt` | `query` | `created_at__gt` | `Date` (date-time) | no |
| `createdAtGte` | `query` | `created_at__gte` | `Date` (date-time) | no |
| `createdAtLt` | `query` | `created_at__lt` | `Date` (date-time) | no |
| `createdAtLte` | `query` | `created_at__lte` | `Date` (date-time) | no |
| `emailContains` | `query` | `email__contains` | `string` | no |
| `emailEq` | `query` | `email__eq` | `string` | no |
| `emailIn` | `query` | `email__in` | `string[]` | no |
| `page` | `query` | — | `number` | no |
| `phoneNumberContains` | `query` | `phone_number__contains` | `string` | no |
| `phoneNumberEq` | `query` | `phone_number__eq` | `string` | no |
| `phoneNumberIn` | `query` | `phone_number__in` | `string[]` | no |
| `shopifyCustomerIdContains` | `query` | `shopify_customer_id__contains` | `string` | no |
| `shopifyCustomerIdEq` | `query` | `shopify_customer_id__eq` | `string` | no |
| `shopifyCustomerIdIn` | `query` | `shopify_customer_id__in` | `string[]` | no |
| `sort` | `query` | — | `string` | no |
| `updatedAtEq` | `query` | `updated_at__eq` | `Date` (date-time) | no |
| `updatedAtGt` | `query` | `updated_at__gt` | `string` (date) | no |
| `updatedAtGte` | `query` | `updated_at__gte` | `Date` (date-time) | no |
| `updatedAtLt` | `query` | `updated_at__lt` | `Date` (date-time) | no |
| `updatedAtLte` | `query` | `updated_at__lte` | `Date` (date-time) | no |
| `psIdEq` | `query` | `ps_id__eq` | `number` | no |
| `xPostscriptShopToken` | `header` | `X-Postscript-Shop-Token` | `string` | no |

### updateSubscriberById

- **Signature**: `updateSubscriberById(request: Subscribers.UpdateSubscriberByIdRequest, options?: RequestOptions): ApiPromise<unknown, Subscribers.UpdateSubscriberByIdError>`
- **Wire**: `PATCH /api/v2/subscribers/{id}`
- **Auth**: `sec0`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `unknown` — a bare `application/json` unknown; the success type *is* the unknown
- **Error**: `PostscriptError` with `kind: "api"`, an instance of `Subscribers.UpdateSubscriberByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] `Record<string, unknown>` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Subscribers.UpdateSubscriberByIdRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `xPostscriptShopToken` | `header` | `X-Postscript-Shop-Token` | `string` | no |
| `body` | `body` | — | `ApiV2SubscribersRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV2SubscribersRequest` | `apiV2SubscribersRequestSchema` | `src/models/api-v2-subscribers-request.ts` |

