<!-- Generated file — do not edit; regenerated with the SDK. -->

# Access — operations

Accessor: `client.access` · Source: `src/resources/access.ts` · 1 operation · Request and error types: namespace `Access`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `skribble`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### accessLogin

- **Signature**: `accessLogin(request: Access.AccessLoginRequest, options?: RequestOptions): ApiPromise<string, Access.AccessLoginError>`
- **Wire**: `POST /access/login`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `string` — `text/plain;charset=utf-8`, decoded by the plain-text scalar decoder, not by a model
- **Error**: `SkribbleError` with `kind: "api"`, an instance of `Access.AccessLoginError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problem"` [400] `Problem` · `"problem2"` [403] `Problem` · `"problem3"` [406] `Problem` · `"problem4"` [429] `Problem` · `"problem5"` [500] `Problem` · `"problem6"` [503] `Problem` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Access.AccessLoginRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `username` | `form` | — | `string` | yes |
| `apiKey` | `form` | `api-key` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Problem` | `problemSchema` | `src/models/problem.ts` |

