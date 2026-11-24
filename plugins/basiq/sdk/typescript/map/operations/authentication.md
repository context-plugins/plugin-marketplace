<!-- Generated file — do not edit; regenerated with the SDK. -->

# Authentication — operations

Accessor: `client.authentication` · Source: `src/resources/authentication.ts` · 1 operation · Request and error types: namespace `Authentication`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `basiq`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### postToken

- **Signature**: `postToken(request: Authentication.PostTokenRequest, options?: RequestOptions): ApiPromise<TokenResponse, Authentication.PostTokenError>`
- **Wire**: `POST /token`
- **Auth**: `apiKey`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TokenResponse`
- **Error**: `BasiqError` with `kind: "api"`, an instance of `Authentication.PostTokenError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"token400Error1"` [400] `Token400Error1` · `"token404Error1"` [404] `Token404Error1` · `"token500Error1"` [500] `Token500Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Authentication.PostTokenRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `basiqVersion` | `header` | `basiq-version` | `string` | yes |
| `scope` | `form` | — | `string` | no |
| `userId` | `form` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TokenResponse` | `tokenResponseSchema` | `src/models/token-response.ts` |
| `Token400Error1` | `token400Error1Schema` | `src/models/token400-error1.ts` |
| `Token404Error1` | `token404Error1Schema` | `src/models/token404-error1.ts` |
| `Token500Error1` | `token500Error1Schema` | `src/models/token500-error1.ts` |

