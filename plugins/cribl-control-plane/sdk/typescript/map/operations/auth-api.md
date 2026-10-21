<!-- Generated file — do not edit; regenerated with the SDK. -->

# AuthApi — operations

Accessor: `client.authApi` · Source: `src/resources/auth-api.ts` · 1 operation · Request and error types: namespace `AuthApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `cribl-api-reference`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createAuthLogin

- **Signature**: `createAuthLogin(request: AuthApi.CreateAuthLoginRequest, options?: RequestOptions): ApiPromise<AuthTokenModel, AuthApi.CreateAuthLoginError>`
- **Wire**: `POST /auth/login`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AuthTokenModel`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `AuthApi.CreateAuthLoginError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error429"` [429] no body · `"error2"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AuthApi.CreateAuthLoginRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `LoginInfo` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LoginInfo` | `loginInfoSchema` | `src/models/login-info.ts` |
| `AuthTokenModel` | `authTokenModelSchema` | `src/models/auth-token-model.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

