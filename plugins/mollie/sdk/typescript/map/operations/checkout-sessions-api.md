<!-- Generated file — do not edit; regenerated with the SDK. -->

# CheckoutSessionsApi — operations

Accessor: `client.checkoutSessionsApi` · Source: `src/resources/checkout-sessions-api.ts` · 2 operations · Request and error types: namespace `CheckoutSessionsApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `mollie-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createSession

- **Signature**: `createSession(request: CheckoutSessionsApi.CreateSessionRequest, options?: RequestOptions): ApiPromise<undefined, CheckoutSessionsApi.CreateSessionError>`
- **Wire**: `POST /v2/sessions`
- **Auth**: any of `apiKey`, `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `CheckoutSessionsApi.CreateSessionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error422"` [422] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CheckoutSessionsApi.CreateSessionRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |
| `body` | `body` | — | `SessionRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SessionRequest` | `sessionRequestSchema` | `src/models/session-request.ts` |

### getSession

- **Signature**: `getSession(request: CheckoutSessionsApi.GetSessionRequest, options?: RequestOptions): ApiPromise<undefined, CheckoutSessionsApi.GetSessionError>`
- **Wire**: `GET /v2/sessions/{sessionId}`
- **Auth**: any of `apiKey`, `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `CheckoutSessionsApi.GetSessionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CheckoutSessionsApi.GetSessionRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sessionId` | `path` | — | `string` | yes |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |

