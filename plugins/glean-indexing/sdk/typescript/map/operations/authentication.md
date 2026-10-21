<!-- Generated file — do not edit; regenerated with the SDK. -->

# Authentication — operations

Accessor: `client.authentication` · Source: `src/resources/authentication.ts` · 1 operation · Request and error types: namespace `Authentication`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `glean-indexing-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### rotateToken

- **Signature**: `rotateToken(options?: RequestOptions): ApiPromise<RotateTokenResponse, Authentication.RotateTokenError>`
- **Wire**: `POST /api/index/v1/rotatetoken`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `RotateTokenResponse`
- **Error**: `GleanIndexingApiError` with `kind: "api"`, an instance of `Authentication.RotateTokenError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `RotateTokenResponse` | `rotateTokenResponseSchema` | `src/models/rotate-token-response.ts` |

