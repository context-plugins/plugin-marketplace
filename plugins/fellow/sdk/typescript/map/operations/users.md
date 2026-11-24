<!-- Generated file — do not edit; regenerated with the SDK. -->

# Users — operations

Accessor: `client.users` · Source: `src/resources/users.ts` · 1 operation · Request types: namespace `Users`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `fellow`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### appsDeveloperApiApiGetAuthenticatedUser

- **Signature**: `appsDeveloperApiApiGetAuthenticatedUser(options?: RequestOptions): ApiPromise<AuthenticatedUserResponse, ApiError>`
- **Wire**: `GET /api/v1/me`
- **Auth**: `developerApiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AuthenticatedUserResponse`
- **Error**: `FellowError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `AuthenticatedUserResponse` | `authenticatedUserResponseSchema` | `src/models/authenticated-user-response.ts` |

