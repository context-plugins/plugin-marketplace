<!-- Generated file — do not edit; regenerated with the SDK. -->

# OauthUsers — operations

Accessor: `client.oauthUsers` · Source: `src/resources/oauth-users.ts` · 1 operation · Request and error types: namespace `OauthUsers`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `beehiiv`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### identify

- **Signature**: `identify(request: OauthUsers.IdentifyRequest, options?: RequestOptions): ApiPromise<UserIdentifyResponse, OauthUsers.IdentifyError>`
- **Wire**: `GET /users/identify`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `UserIdentifyResponse`
- **Error**: `BeehiivError` with `kind: "api"`, an instance of `OauthUsers.IdentifyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OauthUsers.IdentifyRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UserIdentifyResponse` | `userIdentifyResponseSchema` | `src/models/user-identify-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

