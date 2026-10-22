<!-- Generated file — do not edit; regenerated with the SDK. -->

# NativeSso — operations

Accessor: `client.nativeSso` · Source: `src/resources/native-sso.ts` · 2 operations · Request and error types: namespace `NativeSso`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `authlete-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### nativeSsoApi

- **Signature**: `nativeSsoApi(request: NativeSso.NativeSsoApiRequest, options?: RequestOptions): ApiPromise<NativeSsoResponse, NativeSso.NativeSsoApiError>`
- **Wire**: `POST /api/{serviceId}/nativesso`
- **Auth**: `bearer`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `NativeSsoResponse`
- **Error**: `AuthleteApiError` with `kind: "api"`, an instance of `NativeSso.NativeSsoApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"result"` [400] `Result` · `"result2"` [401] `Result` · `"result3"` [403] `Result` · `"result4"` [429] `Result` · `"result5"` [500] `Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NativeSso.NativeSsoApiRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `serviceId` | `path` | `string` | yes |
| `body` | `body` | `NativeSsoRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `NativeSsoRequest` | `nativeSsoRequestSchema` | `src/models/native-sso-request.ts` |
| `NativeSsoResponse` | `nativeSsoResponseSchema` | `src/models/native-sso-response.ts` |
| `Result` | `resultSchema` | `src/models/result.ts` |

### nativeSsoLogoutApi

- **Signature**: `nativeSsoLogoutApi(request: NativeSso.NativeSsoLogoutApiRequest, options?: RequestOptions): ApiPromise<NativeSsoLogoutResponse, NativeSso.NativeSsoLogoutApiError>`
- **Wire**: `POST /api/{serviceId}/nativesso/logout`
- **Auth**: `bearer`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `NativeSsoLogoutResponse`
- **Error**: `AuthleteApiError` with `kind: "api"`, an instance of `NativeSso.NativeSsoLogoutApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"result"` [400] `Result` · `"result2"` [401] `Result` · `"result3"` [403] `Result` · `"result4"` [429] `Result` · `"result5"` [500] `Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NativeSso.NativeSsoLogoutApiRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `serviceId` | `path` | `string` | yes |
| `body` | `body` | `NativeSsoLogoutRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `NativeSsoLogoutRequest` | `nativeSsoLogoutRequestSchema` | `src/models/native-sso-logout-request.ts` |
| `NativeSsoLogoutResponse` | `nativeSsoLogoutResponseSchema` | `src/models/native-sso-logout-response.ts` |
| `Result` | `resultSchema` | `src/models/result.ts` |

