<!-- Generated file — do not edit; regenerated with the SDK. -->

# Authentication — operations

Accessor: `client.authentication` · Source: `src/resources/authentication.ts` · 2 operations · Request and error types: namespace `Authentication`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `glean-client-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### checkdatasourceauth

- **Signature**: `checkdatasourceauth(request: Authentication.CheckdatasourceauthRequest, options?: RequestOptions): ApiPromise<CheckDatasourceAuthResponse, Authentication.CheckdatasourceauthError>`
- **Wire**: `POST /rest/api/v1/checkdatasourceauth`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CheckDatasourceAuthResponse`
- **Error**: `GleanClientApiError` with `kind: "api"`, an instance of `Authentication.CheckdatasourceauthError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Authentication.CheckdatasourceauthRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xGleanActAs` | `header` | `X-Glean-ActAs` | `string` | no |
| `xGleanAuthType` | `header` | `X-Glean-Auth-Type` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CheckDatasourceAuthResponse` | `checkDatasourceAuthResponseSchema` | `src/models/check-datasource-auth-response.ts` |

### createauthtoken

- **Signature**: `createauthtoken(request: Authentication.CreateauthtokenRequest, options?: RequestOptions): ApiPromise<CreateAuthTokenResponse, Authentication.CreateauthtokenError>`
- **Wire**: `POST /rest/api/v1/createauthtoken`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreateAuthTokenResponse`
- **Error**: `GleanClientApiError` with `kind: "api"`, an instance of `Authentication.CreateauthtokenError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Authentication.CreateauthtokenRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xGleanActAs` | `header` | `X-Glean-ActAs` | `string` | no |
| `xGleanAuthType` | `header` | `X-Glean-Auth-Type` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateAuthTokenResponse` | `createAuthTokenResponseSchema` | `src/models/create-auth-token-response.ts` |

