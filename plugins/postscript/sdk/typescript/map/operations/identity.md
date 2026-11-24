<!-- Generated file — do not edit; regenerated with the SDK. -->

# Identity — operations

Accessor: `client.identity` · Source: `src/resources/identity.ts` · 1 operation · Request and error types: namespace `Identity`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `postscript`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### verifyIdentity

- **Signature**: `verifyIdentity(request?: Identity.VerifyIdentityRequest, options?: RequestOptions): ApiPromise<ApiV2MeResponse, Identity.VerifyIdentityError>`
- **Wire**: `GET /api/v2/me`
- **Auth**: `sec0`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV2MeResponse`
- **Error**: `PostscriptError` with `kind: "api"`, an instance of `Identity.VerifyIdentityError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV2Me400Error1"` [400] `ApiV2Me400Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Identity.VerifyIdentityRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xPostscriptShopToken` | `header` | `X-Postscript-Shop-Token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV2MeResponse` | `apiV2MeResponseSchema` | `src/models/api-v2-me-response.ts` |
| `ApiV2Me400Error1` | `apiV2Me400Error1Schema` | `src/models/api-v2-me400-error1.ts` |

