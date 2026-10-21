<!-- Generated file — do not edit; regenerated with the SDK. -->

# UsersBeta — operations

Accessor: `client.usersBeta` · Source: `src/resources/users-beta.ts` · 1 operation · Request and error types: namespace `UsersBeta`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `launch-darkly-rest-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getUserAttributeNames

- **Signature**: `getUserAttributeNames(request: UsersBeta.GetUserAttributeNamesRequest, options?: RequestOptions): ApiPromise<UserAttributeNamesRep, UsersBeta.GetUserAttributeNamesError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `GET /api/v2/user-attributes/{projectKey}/{environmentKey}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `UserAttributeNamesRep`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `UsersBeta.GetUserAttributeNamesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `UsersBeta.GetUserAttributeNamesRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `environmentKey` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UserAttributeNamesRep` | `userAttributeNamesRepSchema` | `src/models/user-attribute-names-rep.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |

