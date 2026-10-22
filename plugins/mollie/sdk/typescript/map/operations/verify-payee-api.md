<!-- Generated file — do not edit; regenerated with the SDK. -->

# VerifyPayeeApi — operations

Accessor: `client.verifyPayeeApi` · Source: `src/resources/verify-payee-api.ts` · 1 operation · Request and error types: namespace `VerifyPayeeApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `mollie-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### verifyPayee

- **Signature**: `verifyPayee(request: VerifyPayeeApi.VerifyPayeeRequest, options?: RequestOptions): ApiPromise<undefined, VerifyPayeeApi.VerifyPayeeError>`
- **Wire**: `POST /v2/business-accounts/payee-verifications`
- **Auth**: `advancedAccessToken`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `VerifyPayeeApi.VerifyPayeeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error422"` [422] no body · `"error429"` [429] no body · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VerifyPayeeApi.VerifyPayeeRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |
| `body` | `body` | — | `VerificationOfPayeeRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `VerificationOfPayeeRequest` | `verificationOfPayeeRequestSchema` | `src/models/verification-of-payee-request.ts` |

