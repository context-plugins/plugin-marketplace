<!-- Generated file — do not edit; regenerated with the SDK. -->

# Screen — operations

Accessor: `client.screen` · Source: `src/resources/screen.ts` · 1 operation · Request and error types: namespace `Screen`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `deliverd`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### postApiV1Screen

- **Signature**: `postApiV1Screen(request?: Screen.PostApiV1ScreenRequest, options?: RequestOptions): ApiPromise<ApiV1ScreenResponse, Screen.PostApiV1ScreenError>`
- **Wire**: `POST /api/v1/screen`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1ScreenResponse`
- **Error**: `DeliverdError` with `kind: "api"`, an instance of `Screen.PostApiV1ScreenError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Screen.PostApiV1ScreenRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1ScreenRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1ScreenRequest` | `apiV1ScreenRequestSchema` | `src/models/api-v1-screen-request.ts` |
| `ApiV1ScreenResponse` | `apiV1ScreenResponseSchema` | `src/models/api-v1-screen-response.ts` |

