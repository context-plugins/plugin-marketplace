<!-- Generated file — do not edit; regenerated with the SDK. -->

# Authorization — operations

Accessor: `client.authorization` · Source: `src/resources/authorization.ts` · 2 operations · Request and error types: namespace `Authorization`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `leadspace`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createAuthorizationToken

- **Signature**: `createAuthorizationToken(request: Authorization.CreateAuthorizationTokenRequest, options?: RequestOptions): ApiPromise<AuthorizationResponse, Authorization.CreateAuthorizationTokenError>`
- **Wire**: `POST /oauth/authorize`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AuthorizationResponse`
- **Error**: `LeadspaceError` with `kind: "api"`, an instance of `Authorization.CreateAuthorizationTokenError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Authorization.CreateAuthorizationTokenRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `AuthorizationRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AuthorizationRequest` | `authorizationRequestSchema` | `src/models/authorization-request.ts` |
| `AuthorizationResponse` | `authorizationResponseSchema` | `src/models/authorization-response.ts` |

### refreshAuthorizationToken

- **Signature**: `refreshAuthorizationToken(request: Authorization.RefreshAuthorizationTokenRequest, options?: RequestOptions): ApiPromise<AuthorizationResponse, Authorization.RefreshAuthorizationTokenError>`
- **Wire**: `PUT /oauth/authorize`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AuthorizationResponse`
- **Error**: `LeadspaceError` with `kind: "api"`, an instance of `Authorization.RefreshAuthorizationTokenError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Authorization.RefreshAuthorizationTokenRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `RefreshRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RefreshRequest` | `refreshRequestSchema` | `src/models/refresh-request.ts` |
| `AuthorizationResponse` | `authorizationResponseSchema` | `src/models/authorization-response.ts` |

