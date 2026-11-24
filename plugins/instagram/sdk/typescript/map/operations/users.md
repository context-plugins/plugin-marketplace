<!-- Generated file — do not edit; regenerated with the SDK. -->

# Users — operations

Accessor: `client.users` · Source: `src/resources/users.ts` · 2 operations · Request types: namespace `Users`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `instagram`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getBusinessDiscovery

- **Signature**: `getBusinessDiscovery(request: Users.GetBusinessDiscoveryRequest, options?: RequestOptions): ApiPromise<BusinessDiscoveryResponse, ApiError>`
- **Wire**: `GET /{user_id}/business_discovery`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BusinessDiscoveryResponse`
- **Error**: `InstagramError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Users.GetBusinessDiscoveryRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `userId` | `path` | `user_id` | `string` | yes |
| `fields` | `query` | — | `string` | yes |
| `accessToken` | `query` | `access_token` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BusinessDiscoveryResponse` | `businessDiscoveryResponseSchema` | `src/models/business-discovery-response.ts` |

### getUser

- **Signature**: `getUser(request: Users.GetUserRequest, options?: RequestOptions): ApiPromise<User, ApiError>`
- **Wire**: `GET /{user_id}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `User`
- **Error**: `InstagramError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Users.GetUserRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `userId` | `path` | `user_id` | `string` | yes |
| `accessToken` | `query` | `access_token` | `string` | yes |
| `fields` | `query` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `User` | `userSchema` | `src/models/user.ts` |

