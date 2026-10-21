<!-- Generated file — do not edit; regenerated with the SDK. -->

# HardwareSecurityKey — operations

Accessor: `client.hardwareSecurityKey` · Source: `src/resources/hardware-security-key.ts` · 4 operations · Request and error types: namespace `HardwareSecurityKey`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `authlete-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### hskCreateApi

- **Signature**: `hskCreateApi(request: HardwareSecurityKey.HskCreateApiRequest, options?: RequestOptions): ApiPromise<HskCreateResponse, HardwareSecurityKey.HskCreateApiError>`
- **Wire**: `POST /api/{serviceId}/hsk/create`
- **Auth**: `bearer`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `HskCreateResponse`
- **Error**: `AuthleteApiError` with `kind: "api"`, an instance of `HardwareSecurityKey.HskCreateApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"result"` [400] `Result` · `"result2"` [401] `Result` · `"result3"` [403] `Result` · `"result4"` [429] `Result` · `"result5"` [500] `Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `HardwareSecurityKey.HskCreateApiRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `serviceId` | `path` | `string` | yes |
| `kty` | `form` | `string` | no |
| `use` | `form` | `string` | no |
| `kid` | `form` | `string` | no |
| `hsmName` | `form` | `string` | no |
| `alg` | `form` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `HskCreateResponse` | `hskCreateResponseSchema` | `src/models/hsk-create-response.ts` |
| `Result` | `resultSchema` | `src/models/result.ts` |

### hskDeleteApi

- **Signature**: `hskDeleteApi(request: HardwareSecurityKey.HskDeleteApiRequest, options?: RequestOptions): ApiPromise<HskDeleteResponse, HardwareSecurityKey.HskDeleteApiError>`
- **Wire**: `DELETE /api/{serviceId}/hsk/delete/{handle}`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `HskDeleteResponse`
- **Error**: `AuthleteApiError` with `kind: "api"`, an instance of `HardwareSecurityKey.HskDeleteApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"result"` [400] `Result` · `"result2"` [401] `Result` · `"result3"` [403] `Result` · `"result4"` [429] `Result` · `"result5"` [500] `Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `HardwareSecurityKey.HskDeleteApiRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `serviceId` | `path` | `string` | yes |
| `handle` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `HskDeleteResponse` | `hskDeleteResponseSchema` | `src/models/hsk-delete-response.ts` |
| `Result` | `resultSchema` | `src/models/result.ts` |

### hskGetApi

- **Signature**: `hskGetApi(request: HardwareSecurityKey.HskGetApiRequest, options?: RequestOptions): ApiPromise<HskDeleteResponse, HardwareSecurityKey.HskGetApiError>`
- **Wire**: `GET /api/{serviceId}/hsk/get/{handle}`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `HskDeleteResponse`
- **Error**: `AuthleteApiError` with `kind: "api"`, an instance of `HardwareSecurityKey.HskGetApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"result"` [400] `Result` · `"result2"` [401] `Result` · `"result3"` [403] `Result` · `"result4"` [429] `Result` · `"result5"` [500] `Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `HardwareSecurityKey.HskGetApiRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `serviceId` | `path` | `string` | yes |
| `handle` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `HskDeleteResponse` | `hskDeleteResponseSchema` | `src/models/hsk-delete-response.ts` |
| `Result` | `resultSchema` | `src/models/result.ts` |

### hskGetListApi

- **Signature**: `hskGetListApi(request: HardwareSecurityKey.HskGetListApiRequest, options?: RequestOptions): ApiPromise<HskGetListResponse, HardwareSecurityKey.HskGetListApiError>`
- **Wire**: `GET /api/{serviceId}/hsk/get/list`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `HskGetListResponse`
- **Error**: `AuthleteApiError` with `kind: "api"`, an instance of `HardwareSecurityKey.HskGetListApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"result"` [400] `Result` · `"result2"` [401] `Result` · `"result3"` [403] `Result` · `"result4"` [429] `Result` · `"result5"` [500] `Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `HardwareSecurityKey.HskGetListApiRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `serviceId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `HskGetListResponse` | `hskGetListResponseSchema` | `src/models/hsk-get-list-response.ts` |
| `Result` | `resultSchema` | `src/models/result.ts` |

