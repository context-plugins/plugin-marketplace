<!-- Generated file — do not edit; regenerated with the SDK. -->

# Signup — operations

Accessor: `client.signup` · Source: `src/resources/signup.ts` · 5 operations · Request and error types: namespace `Signup`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `doi-t`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createSignupRequest

- **Signature**: `createSignupRequest(request: Signup.CreateSignupRequestRequest, options?: RequestOptions): ApiPromise<SignupRequest, Signup.CreateSignupRequestError>`
- **Wire**: `POST /signup/v1/requests`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `SignupRequest`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Signup.CreateSignupRequestError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"signupProblem"` [400] `SignupProblem` · `"signupProblem2"` [403] `SignupProblem` · `"signupProblem3"` [409] `SignupProblem` · `"signupProblem4"` [429] `SignupProblem` · `"signupProblem5"` [503] `SignupProblem` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Signup.CreateSignupRequestRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `idempotencyKey` | `header` | `Idempotency-Key` | `string` | yes |
| `body` | `body` | — | `SignupRequestCreate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SignupRequestCreate` | `signupRequestCreateSchema` | `src/models/signup-request-create.ts` |
| `SignupRequest` | `signupRequestSchema` | `src/models/signup-request.ts` |
| `SignupProblem` | `signupProblemSchema` | `src/models/signup-problem.ts` |

### createSignupSession

- **Signature**: `createSignupSession(request: Signup.CreateSignupSessionRequest, options?: RequestOptions): ApiPromise<SignupSession, Signup.CreateSignupSessionError>`
- **Wire**: `POST /signup/v1/requests/{signupRequestId}/session`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SignupSession`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Signup.CreateSignupSessionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"signupProblem"` [400] `SignupProblem` · `"signupProblem2"` [404] `SignupProblem` · `"signupProblem3"` [409] `SignupProblem` · `"signupProblem4"` [410] `SignupProblem` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Signup.CreateSignupSessionRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `signupRequestId` | `path` | `string` | yes |
| `body` | `body` | `SignupSessionRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SignupSessionRequest` | `signupSessionRequestSchema` | `src/models/signup-session-request.ts` |
| `SignupSession` | `signupSessionSchema` | `src/models/signup-session.ts` |
| `SignupProblem` | `signupProblemSchema` | `src/models/signup-problem.ts` |

### getSignupRequest

- **Signature**: `getSignupRequest(request: Signup.GetSignupRequestRequest, options?: RequestOptions): ApiPromise<SignupRequest, Signup.GetSignupRequestError>`
- **Wire**: `GET /signup/v1/requests/{signupRequestId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SignupRequest`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Signup.GetSignupRequestError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"signupProblem"` [404] `SignupProblem` · `"signupProblem2"` [429] `SignupProblem` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Signup.GetSignupRequestRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `signupRequestId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SignupRequest` | `signupRequestSchema` | `src/models/signup-request.ts` |
| `SignupProblem` | `signupProblemSchema` | `src/models/signup-problem.ts` |

### resendSignupVerification

- **Signature**: `resendSignupVerification(request: Signup.ResendSignupVerificationRequest, options?: RequestOptions): ApiPromise<SignupRequest, Signup.ResendSignupVerificationError>`
- **Wire**: `POST /signup/v1/requests/{signupRequestId}/verification`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SignupRequest`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Signup.ResendSignupVerificationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"signupProblem"` [404] `SignupProblem` · `"signupProblem2"` [409] `SignupProblem` · `"signupProblem3"` [429] `SignupProblem` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Signup.ResendSignupVerificationRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `signupRequestId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SignupRequest` | `signupRequestSchema` | `src/models/signup-request.ts` |
| `SignupProblem` | `signupProblemSchema` | `src/models/signup-problem.ts` |

### verifySignupRequest

- **Signature**: `verifySignupRequest(request: Signup.VerifySignupRequestRequest, options?: RequestOptions): ApiPromise<SignupRequest, Signup.VerifySignupRequestError>`
- **Wire**: `POST /signup/v1/requests/{signupRequestId}/verify`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SignupRequest`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Signup.VerifySignupRequestError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"signupProblem"` [400] `SignupProblem` · `"signupProblem2"` [404] `SignupProblem` · `"signupProblem3"` [409] `SignupProblem` · `"signupProblem4"` [429] `SignupProblem` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Signup.VerifySignupRequestRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `signupRequestId` | `path` | `string` | yes |
| `body` | `body` | `SignupVerificationCode` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SignupVerificationCode` | `signupVerificationCodeSchema` | `src/models/signup-verification-code.ts` |
| `SignupRequest` | `signupRequestSchema` | `src/models/signup-request.ts` |
| `SignupProblem` | `signupProblemSchema` | `src/models/signup-problem.ts` |

