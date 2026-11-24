<!-- Generated file — do not edit; regenerated with the SDK. -->

# Signup — operations

Accessor: `client.signup` · Source: `doi_t/apis/signup.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.signup.create_signup_request

- **Route**: `POST /signup/v1/requests`
- **Server**: `default`
- **Signature**: `def create_signup_request(idempotency_key: str, body: SignupRequestCreate | SignupRequestCreateDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `idempotency_key`, `body`
- **Params**: `idempotency_key` — header `Idempotency-Key` · `body` — JSON body
- **Returns (parsed)**: `SignupRequest`
- **Returns (raw)**: `ApiResult[SignupRequest, CreateSignupRequestErrorBody]`
- **Error**: `CreateSignupRequestErrorBody` — **Case A (typed)**
- **Error arms**: `SignupProblem` [400, 403, 409, 429, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SignupRequestCreate` | `doi_t/models/signup_request_create.py` |
| `SignupRequestCreateDict` | `doi_t/models/signup_request_create.py` |
| `SignupRequest` | `doi_t/models/signup_request.py` |
| `CreateSignupRequestErrorBody` | `doi_t/errors/create_signup_request_error.py` |
| `SignupProblem` | `doi_t/models/signup_problem.py` |

### client.signup.create_signup_session

- **Route**: `POST /signup/v1/requests/{signupRequestId}/session`
- **Server**: `default`
- **Signature**: `def create_signup_session(signup_request_id: str, body: SignupSessionRequest | SignupSessionRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `signup_request_id`, `body`
- **Params**: `signup_request_id` — path `signupRequestId` · `body` — JSON body
- **Returns (parsed)**: `SignupSession`
- **Returns (raw)**: `ApiResult[SignupSession, CreateSignupSessionErrorBody]`
- **Error**: `CreateSignupSessionErrorBody` — **Case A (typed)**
- **Error arms**: `SignupProblem` [400, 404, 409, 410] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SignupSessionRequest` | `doi_t/models/signup_session_request.py` |
| `SignupSessionRequestDict` | `doi_t/models/signup_session_request.py` |
| `SignupSession` | `doi_t/models/signup_session.py` |
| `CreateSignupSessionErrorBody` | `doi_t/errors/create_signup_session_error.py` |
| `SignupProblem` | `doi_t/models/signup_problem.py` |

### client.signup.get_signup_request

- **Route**: `GET /signup/v1/requests/{signupRequestId}`
- **Server**: `default`
- **Signature**: `def get_signup_request(signup_request_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `signup_request_id`
- **Params**: `signup_request_id` — path `signupRequestId`
- **Returns (parsed)**: `SignupRequest`
- **Returns (raw)**: `ApiResult[SignupRequest, GetSignupRequestErrorBody]`
- **Error**: `GetSignupRequestErrorBody` — **Case A (typed)**
- **Error arms**: `SignupProblem` [404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SignupRequest` | `doi_t/models/signup_request.py` |
| `GetSignupRequestErrorBody` | `doi_t/errors/get_signup_request_error.py` |
| `SignupProblem` | `doi_t/models/signup_problem.py` |

### client.signup.resend_signup_verification

- **Route**: `POST /signup/v1/requests/{signupRequestId}/verification`
- **Server**: `default`
- **Signature**: `def resend_signup_verification(signup_request_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `signup_request_id`
- **Params**: `signup_request_id` — path `signupRequestId`
- **Returns (parsed)**: `SignupRequest`
- **Returns (raw)**: `ApiResult[SignupRequest, ResendSignupVerificationErrorBody]`
- **Error**: `ResendSignupVerificationErrorBody` — **Case A (typed)**
- **Error arms**: `SignupProblem` [404, 409, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SignupRequest` | `doi_t/models/signup_request.py` |
| `ResendSignupVerificationErrorBody` | `doi_t/errors/resend_signup_verification_error.py` |
| `SignupProblem` | `doi_t/models/signup_problem.py` |

### client.signup.verify_signup_request

- **Route**: `POST /signup/v1/requests/{signupRequestId}/verify`
- **Server**: `default`
- **Signature**: `def verify_signup_request(signup_request_id: str, body: SignupVerificationCode | SignupVerificationCodeDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `signup_request_id`, `body`
- **Params**: `signup_request_id` — path `signupRequestId` · `body` — JSON body
- **Returns (parsed)**: `SignupRequest`
- **Returns (raw)**: `ApiResult[SignupRequest, VerifySignupRequestErrorBody]`
- **Error**: `VerifySignupRequestErrorBody` — **Case A (typed)**
- **Error arms**: `SignupProblem` [400, 404, 409, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SignupVerificationCode` | `doi_t/models/signup_verification_code.py` |
| `SignupVerificationCodeDict` | `doi_t/models/signup_verification_code.py` |
| `SignupRequest` | `doi_t/models/signup_request.py` |
| `VerifySignupRequestErrorBody` | `doi_t/errors/verify_signup_request_error.py` |
| `SignupProblem` | `doi_t/models/signup_problem.py` |

