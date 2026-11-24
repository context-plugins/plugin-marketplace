<!-- Generated file — do not edit; regenerated with the SDK. -->

# HermesPartnerApi — operations

Accessor: `client.hermesPartnerApi` · Source: `src/resources/hermes-partner-api.ts` · 4 operations · Request and error types: namespace `HermesPartnerApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `semrush`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getApisV4HermesV0EventById

- **Signature**: `getApisV4HermesV0EventById(request: HermesPartnerApi.GetApisV4HermesV0EventByIdRequest, options?: RequestOptions): ApiPromise<EventResponse, HermesPartnerApi.GetApisV4HermesV0EventByIdError>`
- **Wire**: `GET /apis/v4/hermes/v0/event/{id}`
- **Auth**: `jwtIssuerToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EventResponse`
- **Error**: `SemrushError` with `kind: "api"`, an instance of `HermesPartnerApi.GetApisV4HermesV0EventByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] `string` · `"error401"` [401] `string` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `HermesPartnerApi.GetApisV4HermesV0EventByIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `EventResponse` | `eventResponseSchema` | `src/models/event-response.ts` |

### getApisV4HermesV0Subscriptions

- **Signature**: `getApisV4HermesV0Subscriptions(options?: RequestOptions): ApiPromise<AppSubscriptionsResponse, HermesPartnerApi.GetApisV4HermesV0SubscriptionsError>`
- **Wire**: `GET /apis/v4/hermes/v0/subscriptions`
- **Auth**: `jwtIssuerToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AppSubscriptionsResponse`
- **Error**: `SemrushError` with `kind: "api"`, an instance of `HermesPartnerApi.GetApisV4HermesV0SubscriptionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] `string` · `"error401"` [401] `string` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `AppSubscriptionsResponse` | `appSubscriptionsResponseSchema` | `src/models/app-subscriptions-response.ts` |

### getApisV4HermesV0UserByUserIdSubscriptionById

- **Signature**: `getApisV4HermesV0UserByUserIdSubscriptionById(request: HermesPartnerApi.GetApisV4HermesV0UserByUserIdSubscriptionByIdRequest, options?: RequestOptions): ApiPromise<AppUserSubscriptionStatusResponse, HermesPartnerApi.GetApisV4HermesV0UserByUserIdSubscriptionByIdError>`
- **Wire**: `GET /apis/v4/hermes/v0/user/{user_id}/subscription/{id}`
- **Auth**: `jwtIssuerToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AppUserSubscriptionStatusResponse`
- **Error**: `SemrushError` with `kind: "api"`, an instance of `HermesPartnerApi.GetApisV4HermesV0UserByUserIdSubscriptionByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] `string` · `"error401"` [401] `string` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `HermesPartnerApi.GetApisV4HermesV0UserByUserIdSubscriptionByIdRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `userId` | `path` | `user_id` | `number` | yes |
| `id` | `path` | — | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AppUserSubscriptionStatusResponse` | `appUserSubscriptionStatusResponseSchema` | `src/models/app-user-subscription-status-response.ts` |

### postApisV4HermesV0Event

- **Signature**: `postApisV4HermesV0Event(request?: HermesPartnerApi.PostApisV4HermesV0EventRequest, options?: RequestOptions): ApiPromise<undefined, HermesPartnerApi.PostApisV4HermesV0EventError>`
- **Wire**: `POST /apis/v4/hermes/v0/event`
- **Auth**: `jwtIssuerToken`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `SemrushError` with `kind: "api"`, an instance of `HermesPartnerApi.PostApisV4HermesV0EventError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] `string` · `"error401"` [401] `string` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `HermesPartnerApi.PostApisV4HermesV0EventRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateEventRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateEventRequest` | `createEventRequestSchema` | `src/models/create-event-request.ts` |

