<!-- Generated file — do not edit; regenerated with the SDK. -->

# UtilityEndpoints — operations

Accessor: `client.utilityEndpoints` · Source: `src/resources/utility-endpoints.ts` · 2 operations · Request and error types: namespace `UtilityEndpoints`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `authlete-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### infoApi

- **Signature**: `infoApi(options?: RequestOptions): ApiPromise<InfoResponse, UtilityEndpoints.InfoApiError>`
- **Wire**: `GET /api/info`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `InfoResponse`
- **Error**: `AuthleteApiError` with `kind: "api"`, an instance of `UtilityEndpoints.InfoApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"result"` [400] `Result` · `"result2"` [401] `Result` · `"result3"` [403] `Result` · `"result4"` [429] `Result` · `"result5"` [500] `Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `InfoResponse` | `infoResponseSchema` | `src/models/info-response.ts` |
| `Result` | `resultSchema` | `src/models/result.ts` |

### miscEchoApi

- **Signature**: `miscEchoApi(options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `GET /api/misc/echo`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AuthleteApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

