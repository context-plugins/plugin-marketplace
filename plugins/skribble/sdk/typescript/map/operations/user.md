<!-- Generated file — do not edit; regenerated with the SDK. -->

# User — operations

Accessor: `client.user` · Source: `src/resources/user.ts` · 1 operation · Request and error types: namespace `User`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `skribble`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getUserSignatureQualities

- **Server**: `defaultSkribbleUserApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getUserSignatureQualities(request?: User.GetUserSignatureQualitiesRequest, options?: RequestOptions): ApiPromise<UserSignatureQualitiesResponse, User.GetUserSignatureQualitiesError>`
- **Wire**: `GET /user/signature-qualities`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `UserSignatureQualitiesResponse`
- **Error**: `SkribbleError` with `kind: "api"`, an instance of `User.GetUserSignatureQualitiesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problem"` [400] `Problem` · `"problem2"` [401] `Problem` · `"problem3"` [404] `Problem` · `"problem4"` [429] `Problem` · `"problem5"` [500] `Problem` · `"problem6"` [503] `Problem` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `User.GetUserSignatureQualitiesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `username` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UserSignatureQualitiesResponse` | `userSignatureQualitiesResponseSchema` | `src/models/user-signature-qualities-response.ts` |
| `Problem` | `problemSchema` | `src/models/problem.ts` |

