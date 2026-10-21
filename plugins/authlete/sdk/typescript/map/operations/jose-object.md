<!-- Generated file — do not edit; regenerated with the SDK. -->

# JoseObject — operations

Accessor: `client.joseObject` · Source: `src/resources/jose-object.ts` · 1 operation · Request and error types: namespace `JoseObject`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `authlete-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### joseVerifyApi

- **Signature**: `joseVerifyApi(request: JoseObject.JoseVerifyApiRequest, options?: RequestOptions): ApiPromise<JoseVerifyResponse, JoseObject.JoseVerifyApiError>`
- **Wire**: `POST /api/{serviceId}/jose/verify`
- **Auth**: `bearer`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `JoseVerifyResponse`
- **Error**: `AuthleteApiError` with `kind: "api"`, an instance of `JoseObject.JoseVerifyApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"result"` [400] `Result` · `"result2"` [401] `Result` · `"result3"` [403] `Result` · `"result4"` [429] `Result` · `"result5"` [500] `Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `JoseObject.JoseVerifyApiRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `serviceId` | `path` | `string` | yes |
| `jose` | `form` | `string` | yes |
| `mandatoryClaims` | `form` | `string[]` | no |
| `clockSkew` | `form` | `number` | no |
| `clientIdentifier` | `form` | `string` | no |
| `signedByClient` | `form` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `JoseVerifyResponse` | `joseVerifyResponseSchema` | `src/models/jose-verify-response.ts` |
| `Result` | `resultSchema` | `src/models/result.ts` |

