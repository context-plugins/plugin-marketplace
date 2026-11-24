<!-- Generated file — do not edit; regenerated with the SDK. -->

# AuthLinks — operations

Accessor: `client.authLinks` · Source: `src/resources/auth-links.ts` · 3 operations · Request and error types: namespace `AuthLinks`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `basiq`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteAuthLink

- **Signature**: `deleteAuthLink(request: AuthLinks.DeleteAuthLinkRequest, options?: RequestOptions): ApiPromise<undefined, AuthLinks.DeleteAuthLinkError>`
- **Wire**: `DELETE /users/{userId}/auth_link`
- **Auth**: `servicesToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `BasiqError` with `kind: "api"`, an instance of `AuthLinks.DeleteAuthLinkError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"usersAuthLink400Error1"` [400] `UsersAuthLink400Error1` · `"usersAuthLink401Error1"` [401] `UsersAuthLink401Error1` · `"usersAuthLink404Error1"` [404] `UsersAuthLink404Error1` · `"usersAuthLink500Error1"` [500] `UsersAuthLink500Error1` · `"usersAuthLink503Error1"` [503] `UsersAuthLink503Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AuthLinks.DeleteAuthLinkRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `userId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UsersAuthLink400Error1` | `usersAuthLink400Error1Schema` | `src/models/users-auth-link400-error1.ts` |
| `UsersAuthLink401Error1` | `usersAuthLink401Error1Schema` | `src/models/users-auth-link401-error1.ts` |
| `UsersAuthLink404Error1` | `usersAuthLink404Error1Schema` | `src/models/users-auth-link404-error1.ts` |
| `UsersAuthLink500Error1` | `usersAuthLink500Error1Schema` | `src/models/users-auth-link500-error1.ts` |
| `UsersAuthLink503Error1` | `usersAuthLink503Error1Schema` | `src/models/users-auth-link503-error1.ts` |

### getAuthLink

- **Signature**: `getAuthLink(request: AuthLinks.GetAuthLinkRequest, options?: RequestOptions): ApiPromise<UsersAuthLinkResponse1, AuthLinks.GetAuthLinkError>`
- **Wire**: `GET /users/{userId}/auth_link`
- **Auth**: `servicesToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `UsersAuthLinkResponse1`
- **Error**: `BasiqError` with `kind: "api"`, an instance of `AuthLinks.GetAuthLinkError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"usersAuthLink400Error1"` [400] `UsersAuthLink400Error1` · `"usersAuthLink401Error1"` [401] `UsersAuthLink401Error1` · `"usersAuthLink403Error1"` [403] `UsersAuthLink403Error1` · `"usersAuthLink404Error1"` [404] `UsersAuthLink404Error1` · `"usersAuthLink410Error1"` [410] `UsersAuthLink410Error1` · `"usersAuthLink500Error1"` [500] `UsersAuthLink500Error1` · `"usersAuthLink503Error1"` [503] `UsersAuthLink503Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AuthLinks.GetAuthLinkRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `userId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UsersAuthLinkResponse1` | `usersAuthLinkResponse1Schema` | `src/models/users-auth-link-response1.ts` |
| `UsersAuthLink400Error1` | `usersAuthLink400Error1Schema` | `src/models/users-auth-link400-error1.ts` |
| `UsersAuthLink401Error1` | `usersAuthLink401Error1Schema` | `src/models/users-auth-link401-error1.ts` |
| `UsersAuthLink403Error1` | `usersAuthLink403Error1Schema` | `src/models/users-auth-link403-error1.ts` |
| `UsersAuthLink404Error1` | `usersAuthLink404Error1Schema` | `src/models/users-auth-link404-error1.ts` |
| `UsersAuthLink410Error1` | `usersAuthLink410Error1Schema` | `src/models/users-auth-link410-error1.ts` |
| `UsersAuthLink500Error1` | `usersAuthLink500Error1Schema` | `src/models/users-auth-link500-error1.ts` |
| `UsersAuthLink503Error1` | `usersAuthLink503Error1Schema` | `src/models/users-auth-link503-error1.ts` |

### postAuthLink

- **Signature**: `postAuthLink(request: AuthLinks.PostAuthLinkRequest, options?: RequestOptions): ApiPromise<UsersAuthLinkResponse, AuthLinks.PostAuthLinkError>`
- **Wire**: `POST /users/{userId}/auth_link`
- **Auth**: `servicesToken`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UsersAuthLinkResponse`
- **Error**: `BasiqError` with `kind: "api"`, an instance of `AuthLinks.PostAuthLinkError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"usersAuthLink400Error1"` [400] `UsersAuthLink400Error1` · `"usersAuthLink401Error1"` [401] `UsersAuthLink401Error1` · `"usersAuthLink403Error1"` [403] `UsersAuthLink403Error1` · `"usersAuthLink404Error1"` [404] `UsersAuthLink404Error1` · `"usersAuthLink500Error1"` [500] `UsersAuthLink500Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AuthLinks.PostAuthLinkRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `userId` | `path` | `string` | yes |
| `body` | `body` | `UsersAuthLinkRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UsersAuthLinkRequest` | `usersAuthLinkRequestSchema` | `src/models/users-auth-link-request.ts` |
| `UsersAuthLinkResponse` | `usersAuthLinkResponseSchema` | `src/models/users-auth-link-response.ts` |
| `UsersAuthLink400Error1` | `usersAuthLink400Error1Schema` | `src/models/users-auth-link400-error1.ts` |
| `UsersAuthLink401Error1` | `usersAuthLink401Error1Schema` | `src/models/users-auth-link401-error1.ts` |
| `UsersAuthLink403Error1` | `usersAuthLink403Error1Schema` | `src/models/users-auth-link403-error1.ts` |
| `UsersAuthLink404Error1` | `usersAuthLink404Error1Schema` | `src/models/users-auth-link404-error1.ts` |
| `UsersAuthLink500Error1` | `usersAuthLink500Error1Schema` | `src/models/users-auth-link500-error1.ts` |

