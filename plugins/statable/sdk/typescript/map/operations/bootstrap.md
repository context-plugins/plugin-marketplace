<!-- Generated file — do not edit; regenerated with the SDK. -->

# Bootstrap — operations

Accessor: `client.bootstrap` · Source: `src/resources/bootstrap.ts` · 2 operations · Request and error types: namespace `Bootstrap`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `statable`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### bootstrapSendOtp

- **Signature**: `bootstrapSendOtp(request: Bootstrap.BootstrapSendOtpRequestParams, options?: RequestOptions): ApiPromise<BootstrapSendOtpResponse, Bootstrap.BootstrapSendOtpError>`
- **Wire**: `POST /auth/send-otp`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BootstrapSendOtpResponse`
- **Error**: `StatableError` with `kind: "api"`, an instance of `Bootstrap.BootstrapSendOtpError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [404] `Error` · `"error3"` [429] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bootstrap.BootstrapSendOtpRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BootstrapSendOtpRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BootstrapSendOtpRequest` | `bootstrapSendOtpRequestSchema` | `src/models/bootstrap-send-otp-request.ts` |
| `BootstrapSendOtpResponse` | `bootstrapSendOtpResponseSchema` | `src/models/bootstrap-send-otp-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### bootstrapVerifyOtp

- **Signature**: `bootstrapVerifyOtp(request: Bootstrap.BootstrapVerifyOtpRequestParams, options?: RequestOptions): ApiPromise<BootstrapVerifyOtpResponse, Bootstrap.BootstrapVerifyOtpError>`
- **Wire**: `POST /auth/verify-otp`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BootstrapVerifyOtpResponse`
- **Error**: `StatableError` with `kind: "api"`, an instance of `Bootstrap.BootstrapVerifyOtpError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bootstrap.BootstrapVerifyOtpRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BootstrapVerifyOtpRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BootstrapVerifyOtpRequest` | `bootstrapVerifyOtpRequestSchema` | `src/models/bootstrap-verify-otp-request.ts` |
| `BootstrapVerifyOtpResponse` | `bootstrapVerifyOtpResponseSchema` | `src/models/bootstrap-verify-otp-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

