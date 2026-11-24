<!-- Generated file — do not edit; regenerated with the SDK. -->

# Authentication — operations

Accessor: `client.authentication` · Source: `src/resources/authentication.ts` · 4 operations · Request and error types: namespace `Authentication`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `juri-sign`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createSandboxToken

- **Signature**: `createSandboxToken(request: Authentication.CreateSandboxTokenRequest, options?: RequestOptions): ApiPromise<AuthSandboxTokenResponse, Authentication.CreateSandboxTokenError>`
- **Wire**: `POST /auth/sandbox-token`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AuthSandboxTokenResponse`
- **Error**: `JuriSignError` with `kind: "api"`, an instance of `Authentication.CreateSandboxTokenError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"messageResponse"` [403] `MessageResponse` · `"validationError1"` [422] `ValidationError1` · `"messageResponse2"` [429] `MessageResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Authentication.CreateSandboxTokenRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `AuthSandboxTokenRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AuthSandboxTokenRequest` | `authSandboxTokenRequestSchema` | `src/models/auth-sandbox-token-request.ts` |
| `AuthSandboxTokenResponse` | `authSandboxTokenResponseSchema` | `src/models/auth-sandbox-token-response.ts` |
| `MessageResponse` | `messageResponseSchema` | `src/models/message-response.ts` |
| `ValidationError1` | `validationError1Schema` | `src/models/validation-error1.ts` |

### createToken

- **Signature**: `createToken(request: Authentication.CreateTokenRequest, options?: RequestOptions): ApiPromise<AuthTokenResponse, Authentication.CreateTokenError>`
- **Wire**: `POST /auth/token`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AuthTokenResponse`
- **Error**: `JuriSignError` with `kind: "api"`, an instance of `Authentication.CreateTokenError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"messageResponse"` [403] `MessageResponse` · `"validationError1"` [422] `ValidationError1` · `"messageResponse2"` [429] `MessageResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Authentication.CreateTokenRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `AuthTokenRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AuthTokenRequest` | `authTokenRequestSchema` | `src/models/auth-token-request.ts` |
| `AuthTokenResponse` | `authTokenResponseSchema` | `src/models/auth-token-response.ts` |
| `MessageResponse` | `messageResponseSchema` | `src/models/message-response.ts` |
| `ValidationError1` | `validationError1Schema` | `src/models/validation-error1.ts` |

### getStatus

- **Signature**: `getStatus(options?: RequestOptions): ApiPromise<Response, ApiError>`
- **Wire**: `GET /`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Response`
- **Error**: `JuriSignError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `Response` | `responseSchema` | `src/models/response.ts` |

### revokeToken

- **Signature**: `revokeToken(options?: RequestOptions): ApiPromise<MessageResponse, Authentication.RevokeTokenError>`
- **Wire**: `DELETE /auth/token`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `MessageResponse`
- **Error**: `JuriSignError` with `kind: "api"`, an instance of `Authentication.RevokeTokenError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"messageResponse"` [401] `MessageResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `MessageResponse` | `messageResponseSchema` | `src/models/message-response.ts` |

