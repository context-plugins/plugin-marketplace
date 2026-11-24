<!-- Generated file — do not edit; regenerated with the SDK. -->

# Identities — operations

Accessor: `client.identities` · Source: `src/resources/identities.ts` · 2 operations · Request and error types: namespace `Identities`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `basiq`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getUserIdentities

- **Signature**: `getUserIdentities(request: Identities.GetUserIdentitiesRequest, options?: RequestOptions): ApiPromise<IdentitiesGetResponseResource, Identities.GetUserIdentitiesError>`
- **Wire**: `GET /users/{userId}/identities`
- **Auth**: `servicesToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `IdentitiesGetResponseResource`
- **Error**: `BasiqError` with `kind: "api"`, an instance of `Identities.GetUserIdentitiesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"usersIdentities400Error1"` [400] `UsersIdentities400Error1` · `"usersIdentities403Error1"` [403] `UsersIdentities403Error1` · `"usersIdentities500Error1"` [500] `UsersIdentities500Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Identities.GetUserIdentitiesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `userId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `IdentitiesGetResponseResource` | `identitiesGetResponseResourceSchema` | `src/models/identities-get-response-resource.ts` |
| `UsersIdentities400Error1` | `usersIdentities400Error1Schema` | `src/models/users-identities400-error1.ts` |
| `UsersIdentities403Error1` | `usersIdentities403Error1Schema` | `src/models/users-identities403-error1.ts` |
| `UsersIdentities500Error1` | `usersIdentities500Error1Schema` | `src/models/users-identities500-error1.ts` |

### getUserIdentity

- **Signature**: `getUserIdentity(request: Identities.GetUserIdentityRequest, options?: RequestOptions): ApiPromise<UsersIdentitiesResponse, Identities.GetUserIdentityError>`
- **Wire**: `GET /users/{userId}/identities/{identityId}`
- **Auth**: `servicesToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `UsersIdentitiesResponse`
- **Error**: `BasiqError` with `kind: "api"`, an instance of `Identities.GetUserIdentityError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"usersIdentities400Error1"` [400] `UsersIdentities400Error1` · `"usersIdentities403Error1"` [403] `UsersIdentities403Error1` · `"usersIdentities404Error1"` [404] `UsersIdentities404Error1` · `"usersIdentities500Error1"` [500] `UsersIdentities500Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Identities.GetUserIdentityRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `userId` | `path` | `string` | yes |
| `identityId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UsersIdentitiesResponse` | `usersIdentitiesResponseSchema` | `src/models/users-identities-response.ts` |
| `UsersIdentities400Error1` | `usersIdentities400Error1Schema` | `src/models/users-identities400-error1.ts` |
| `UsersIdentities403Error1` | `usersIdentities403Error1Schema` | `src/models/users-identities403-error1.ts` |
| `UsersIdentities404Error1` | `usersIdentities404Error1Schema` | `src/models/users-identities404-error1.ts` |
| `UsersIdentities500Error1` | `usersIdentities500Error1Schema` | `src/models/users-identities500-error1.ts` |

