<!-- Generated file — do not edit; regenerated with the SDK. -->

# DelayedRoutingApi — operations

Accessor: `client.delayedRoutingApi` · Source: `src/resources/delayed-routing-api.ts` · 3 operations · Request and error types: namespace `DelayedRoutingApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `mollie-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### paymentCreateRoute

- **Signature**: `paymentCreateRoute(request: DelayedRoutingApi.PaymentCreateRouteRequest, options?: RequestOptions): ApiPromise<undefined, DelayedRoutingApi.PaymentCreateRouteError>`
- **Wire**: `POST /v2/payments/{paymentId}/routes`
- **Auth**: any of `apiKey`, `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `DelayedRoutingApi.PaymentCreateRouteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DelayedRoutingApi.PaymentCreateRouteRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `paymentId` | `path` | — | `string` | yes |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |
| `body` | `body` | — | `RouteCreateRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `RouteCreateRequest` | `routeCreateRequestSchema` | `src/models/route-create-request.ts` |

### paymentGetRoute

- **Signature**: `paymentGetRoute(request: DelayedRoutingApi.PaymentGetRouteRequest, options?: RequestOptions): ApiPromise<undefined, DelayedRoutingApi.PaymentGetRouteError>`
- **Wire**: `GET /v2/payments/{paymentId}/routes/{routeId}`
- **Auth**: any of `apiKey`, `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `DelayedRoutingApi.PaymentGetRouteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DelayedRoutingApi.PaymentGetRouteRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `paymentId` | `path` | — | `string` | yes |
| `routeId` | `path` | — | `string` | yes |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |

### paymentListRoutes

- **Signature**: `paymentListRoutes(request: DelayedRoutingApi.PaymentListRoutesRequest, options?: RequestOptions): ApiPromise<undefined, DelayedRoutingApi.PaymentListRoutesError>`
- **Wire**: `GET /v2/payments/{paymentId}/routes`
- **Auth**: any of `apiKey`, `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `DelayedRoutingApi.PaymentListRoutesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DelayedRoutingApi.PaymentListRoutesRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `paymentId` | `path` | — | `string` | yes |
| `testmode` | `query` | — | `boolean` | no |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |

