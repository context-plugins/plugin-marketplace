<!-- Generated file — do not edit; regenerated with the SDK. -->

# WalletsApi — operations

Accessor: `client.walletsApi` · Source: `src/resources/wallets-api.ts` · 1 operation · Request and error types: namespace `WalletsApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `mollie-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### requestApplePayPaymentSession

- **Signature**: `requestApplePayPaymentSession(request: WalletsApi.RequestApplePayPaymentSessionRequest, options?: RequestOptions): ApiPromise<undefined, WalletsApi.RequestApplePayPaymentSessionError>`
- **Wire**: `POST /v2/wallets/applepay/sessions`
- **Auth**: any of `apiKey`, `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `WalletsApi.RequestApplePayPaymentSessionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error422"` [422] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WalletsApi.RequestApplePayPaymentSessionRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |
| `body` | `body` | — | `V2WalletsApplepaySessionsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V2WalletsApplepaySessionsRequest` | `v2WalletsApplepaySessionsRequestSchema` | `src/models/v2-wallets-applepay-sessions-request.ts` |

