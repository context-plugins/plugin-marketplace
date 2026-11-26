<!-- Generated file — do not edit; regenerated with the SDK. -->

# Subscriptions — operations

Accessor: `client.subscriptions` · Source: `src/resources/subscriptions.ts` · 8 operations · Request types: namespace `Subscriptions`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `bill`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createNewSecurityKey

- **Server**: `defaultConnectEventsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createNewSecurityKey(request: Subscriptions.CreateNewSecurityKeyRequest, options?: RequestOptions): ApiPromise<SecurityKeyDto, ApiError>`
- **Wire**: `POST /v3/subscriptions/{subscriptionId}/security_key`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SecurityKeyDto`
- **Error**: `BillError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Subscriptions.CreateNewSecurityKeyRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `subscriptionId` | `path` | — | `string` | yes |
| `xIdempotentKey` | `header` | `X-Idempotent-Key` | `string` | yes |
| `sessionId` | `header` | — | `string` | no |
| `devKey` | `header` | — | `string` | no |
| `appKey` | `header` | — | `string` | no |
| `apiToken` | `header` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SecurityKeyDto` | `securityKeyDtoSchema` | `src/models/security-key-dto.ts` |

### createSubscription

- **Server**: `defaultConnectEventsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createSubscription(request: Subscriptions.CreateSubscriptionRequest, options?: RequestOptions): ApiPromise<SubscriptionWithSecurityKeyResponseDto, ApiError>`
- **Wire**: `POST /v3/subscriptions`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SubscriptionWithSecurityKeyResponseDto`
- **Error**: `BillError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Subscriptions.CreateSubscriptionRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xIdempotentKey` | `header` | `X-Idempotent-Key` | `string` | yes |
| `sessionId` | `header` | — | `string` | no |
| `devKey` | `header` | — | `string` | no |
| `appKey` | `header` | — | `string` | no |
| `apiToken` | `header` | — | `string` | no |
| `body` | `body` | — | `SubscriptionRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SubscriptionRequestDto` | `subscriptionRequestDtoSchema` | `src/models/subscription-request-dto.ts` |
| `SubscriptionWithSecurityKeyResponseDto` | `subscriptionWithSecurityKeyResponseDtoSchema` | `src/models/subscription-with-security-key-response-dto.ts` |

### deleteSubscription

- **Server**: `defaultConnectEventsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteSubscription(request: Subscriptions.DeleteSubscriptionRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `DELETE /v3/subscriptions/{subscriptionId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `BillError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Subscriptions.DeleteSubscriptionRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `subscriptionId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `appKey` | `header` | `string` | no |
| `apiToken` | `header` | `string` | no |

### getAllSubscriptions

- **Server**: `defaultConnectEventsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getAllSubscriptions(request?: Subscriptions.GetAllSubscriptionsRequest, options?: RequestOptions): ApiPromise<PaginationDtoSubscriptionResponseDto, ApiError>`
- **Wire**: `GET /v3/subscriptions`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PaginationDtoSubscriptionResponseDto`
- **Error**: `BillError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Subscriptions.GetAllSubscriptionsRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `max` | `query` | `number` | no |
| `page` | `query` | `string` | no |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `appKey` | `header` | `string` | no |
| `apiToken` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaginationDtoSubscriptionResponseDto` | `paginationDtoSubscriptionResponseDtoSchema` | `src/models/pagination-dto-subscription-response-dto.ts` |

### getSubscription

- **Server**: `defaultConnectEventsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getSubscription(request: Subscriptions.GetSubscriptionRequest, options?: RequestOptions): ApiPromise<SubscriptionResponseDto, ApiError>`
- **Wire**: `GET /v3/subscriptions/{subscriptionId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SubscriptionResponseDto`
- **Error**: `BillError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Subscriptions.GetSubscriptionRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `subscriptionId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `appKey` | `header` | `string` | no |
| `apiToken` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SubscriptionResponseDto` | `subscriptionResponseDtoSchema` | `src/models/subscription-response-dto.ts` |

### replaceSubscription

- **Server**: `defaultConnectEventsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `replaceSubscription(request: Subscriptions.ReplaceSubscriptionRequest, options?: RequestOptions): ApiPromise<SubscriptionResponseDto, ApiError>`
- **Wire**: `PUT /v3/subscriptions/{subscriptionId}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SubscriptionResponseDto`
- **Error**: `BillError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Subscriptions.ReplaceSubscriptionRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `subscriptionId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `appKey` | `header` | `string` | no |
| `apiToken` | `header` | `string` | no |
| `body` | `body` | `SubscriptionRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SubscriptionRequestDto` | `subscriptionRequestDtoSchema` | `src/models/subscription-request-dto.ts` |
| `SubscriptionResponseDto` | `subscriptionResponseDtoSchema` | `src/models/subscription-response-dto.ts` |

### sendTestEvent

- **Server**: `defaultConnectEventsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `sendTestEvent(request: Subscriptions.SendTestEventRequest, options?: RequestOptions): ApiPromise<EventDto, ApiError>`
- **Wire**: `POST /v3/subscriptions/{subscriptionId}/test`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `EventDto`
- **Error**: `BillError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Subscriptions.SendTestEventRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `subscriptionId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `appKey` | `header` | `string` | no |
| `apiToken` | `header` | `string` | no |
| `body` | `body` | `SendTestEventRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SendTestEventRequestDto` | `sendTestEventRequestDtoSchema` | `src/models/send-test-event-request-dto.ts` |
| `EventDto` | `eventDtoSchema` | `src/models/event-dto.ts` |

### updateSubscription

- **Server**: `defaultConnectEventsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateSubscription(request: Subscriptions.UpdateSubscriptionRequest, options?: RequestOptions): ApiPromise<SubscriptionResponseDto, ApiError>`
- **Wire**: `PATCH /v3/subscriptions/{subscriptionId}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SubscriptionResponseDto`
- **Error**: `BillError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Subscriptions.UpdateSubscriptionRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `subscriptionId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `appKey` | `header` | `string` | no |
| `apiToken` | `header` | `string` | no |
| `body` | `body` | `SubscriptionUpdateRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SubscriptionUpdateRequestDto` | `subscriptionUpdateRequestDtoSchema` | `src/models/subscription-update-request-dto.ts` |
| `SubscriptionResponseDto` | `subscriptionResponseDtoSchema` | `src/models/subscription-response-dto.ts` |

