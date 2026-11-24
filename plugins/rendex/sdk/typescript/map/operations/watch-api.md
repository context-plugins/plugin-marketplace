<!-- Generated file — do not edit; regenerated with the SDK. -->

# WatchApi — operations

Accessor: `client.watchApi` · Source: `src/resources/watch-api.ts` · 8 operations · Request and error types: namespace `WatchApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `rendex`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createWatch

- **Signature**: `createWatch(request: WatchApi.CreateWatchRequestParams, options?: RequestOptions): ApiPromise<V1WatchesResponse, WatchApi.CreateWatchError>`
- **Wire**: `POST /v1/watches`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1WatchesResponse`
- **Error**: `RendexError` with `kind: "api"`, an instance of `WatchApi.CreateWatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [403] `ErrorResponse` · `"errorResponse3"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WatchApi.CreateWatchRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateWatchRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateWatchRequest` | `createWatchRequestSchema` | `src/models/create-watch-request.ts` |
| `V1WatchesResponse` | `v1WatchesResponseSchema` | `src/models/v1-watches-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### deleteWatch

- **Signature**: `deleteWatch(request: WatchApi.DeleteWatchRequest, options?: RequestOptions): ApiPromise<undefined, WatchApi.DeleteWatchError>`
- **Wire**: `DELETE /v1/watches/{id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `RendexError` with `kind: "api"`, an instance of `WatchApi.DeleteWatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [404] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WatchApi.DeleteWatchRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getWatch

- **Signature**: `getWatch(request: WatchApi.GetWatchRequest, options?: RequestOptions): ApiPromise<V1WatchesResponse, WatchApi.GetWatchError>`
- **Wire**: `GET /v1/watches/{id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1WatchesResponse`
- **Error**: `RendexError` with `kind: "api"`, an instance of `WatchApi.GetWatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [404] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WatchApi.GetWatchRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1WatchesResponse` | `v1WatchesResponseSchema` | `src/models/v1-watches-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listWatchRuns

- **Signature**: `listWatchRuns(request: WatchApi.ListWatchRunsRequest, options?: RequestOptions): ApiPromise<V1WatchesRunsResponse, WatchApi.ListWatchRunsError>`
- **Wire**: `GET /v1/watches/{id}/runs`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1WatchesRunsResponse`
- **Error**: `RendexError` with `kind: "api"`, an instance of `WatchApi.ListWatchRunsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [404] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WatchApi.ListWatchRunsRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `id` | `path` | `string` | yes | — |
| `cursor` | `query` | `string` | no | — |
| `limit` | `query` | `number` | no | `20` |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1WatchesRunsResponse` | `v1WatchesRunsResponseSchema` | `src/models/v1-watches-runs-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listWatches

- **Signature**: `listWatches(request?: WatchApi.ListWatchesRequest, options?: RequestOptions): ApiPromise<V1WatchesResponse1, ApiError>`
- **Wire**: `GET /v1/watches`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1WatchesResponse1`
- **Error**: `RendexError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `WatchApi.ListWatchesRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `status` | `query` | `Status2RendexRenderingWatchApi` | no | `Status2RendexRenderingWatchApi.All` |
| `cursor` | `query` | `string` | no | — |
| `limit` | `query` | `number` | no | `20` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Status2RendexRenderingWatchApi` | `status2RendexRenderingWatchApiSchema` | `src/models/status2-rendex-rendering-watch-api.ts` |
| `V1WatchesResponse1` | `v1WatchesResponse1Schema` | `src/models/v1-watches-response1.ts` |

### runWatchNow

- **Signature**: `runWatchNow(request: WatchApi.RunWatchNowRequest, options?: RequestOptions): ApiPromise<V1WatchesRunResponse, WatchApi.RunWatchNowError>`
- **Wire**: `POST /v1/watches/{id}/run`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1WatchesRunResponse`
- **Error**: `RendexError` with `kind: "api"`, an instance of `WatchApi.RunWatchNowError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [404] `ErrorResponse` · `"errorResponse2"` [409] `ErrorResponse` · `"errorResponse3"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WatchApi.RunWatchNowRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1WatchesRunResponse` | `v1WatchesRunResponseSchema` | `src/models/v1-watches-run-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### testWatch

- **Signature**: `testWatch(request: WatchApi.TestWatchRequest, options?: RequestOptions): ApiPromise<V1WatchesTestResponse, WatchApi.TestWatchError>`
- **Wire**: `POST /v1/watches/test`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1WatchesTestResponse`
- **Error**: `RendexError` with `kind: "api"`, an instance of `WatchApi.TestWatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [403] `ErrorResponse` · `"errorResponse3"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WatchApi.TestWatchRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateWatchRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateWatchRequest` | `createWatchRequestSchema` | `src/models/create-watch-request.ts` |
| `V1WatchesTestResponse` | `v1WatchesTestResponseSchema` | `src/models/v1-watches-test-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### updateWatch

- **Signature**: `updateWatch(request: WatchApi.UpdateWatchRequestParams, options?: RequestOptions): ApiPromise<V1WatchesResponse, WatchApi.UpdateWatchError>`
- **Wire**: `PATCH /v1/watches/{id}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1WatchesResponse`
- **Error**: `RendexError` with `kind: "api"`, an instance of `WatchApi.UpdateWatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [403] `ErrorResponse` · `"errorResponse2"` [404] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WatchApi.UpdateWatchRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `UpdateWatchRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateWatchRequest` | `updateWatchRequestSchema` | `src/models/update-watch-request.ts` |
| `V1WatchesResponse` | `v1WatchesResponseSchema` | `src/models/v1-watches-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

