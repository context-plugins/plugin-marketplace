<!-- Generated file — do not edit; regenerated with the SDK. -->

# Runners — operations

Accessor: `client.runners` · Source: `src/resources/runners.ts` · 4 operations · Request and error types: namespace `Runners`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `soda`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteApiV1RunnersRunnerId

- **Signature**: `deleteApiV1RunnersRunnerId(request: Runners.DeleteApiV1RunnersRunnerIdRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Runners.DeleteApiV1RunnersRunnerIdError>`
- **Wire**: `DELETE /api/v1/runners/{runnerId}`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `SodaError` with `kind: "api"`, an instance of `Runners.DeleteApiV1RunnersRunnerIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Runners.DeleteApiV1RunnersRunnerIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `runnerId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getApiV1Runners

- **Signature**: `getApiV1Runners(request?: Runners.GetApiV1RunnersRequest, options?: RequestOptions): ApiPromise<PublicApiListRunnersResponse, Runners.GetApiV1RunnersError>`
- **Wire**: `GET /api/v1/runners`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PublicApiListRunnersResponse`
- **Error**: `SodaError` with `kind: "api"`, an instance of `Runners.GetApiV1RunnersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [429] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Runners.GetApiV1RunnersRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `page` | `query` | `number` | no |
| `size` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicApiListRunnersResponse` | `publicApiListRunnersResponseSchema` | `src/models/public-api-list-runners-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getApiV1RunnersRunnerId

- **Signature**: `getApiV1RunnersRunnerId(request: Runners.GetApiV1RunnersRunnerIdRequest, options?: RequestOptions): ApiPromise<PublicApiGetRunnerResponse, Runners.GetApiV1RunnersRunnerIdError>`
- **Wire**: `GET /api/v1/runners/{runnerId}`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PublicApiGetRunnerResponse`
- **Error**: `SodaError` with `kind: "api"`, an instance of `Runners.GetApiV1RunnersRunnerIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Runners.GetApiV1RunnersRunnerIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `runnerId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicApiGetRunnerResponse` | `publicApiGetRunnerResponseSchema` | `src/models/public-api-get-runner-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### postApiV1Runners

- **Signature**: `postApiV1Runners(options?: RequestOptions): ApiPromise<PublicApiCreateRunnerResponse, Runners.PostApiV1RunnersError>`
- **Wire**: `POST /api/v1/runners`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PublicApiCreateRunnerResponse`
- **Error**: `SodaError` with `kind: "api"`, an instance of `Runners.PostApiV1RunnersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [429] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicApiCreateRunnerResponse` | `publicApiCreateRunnerResponseSchema` | `src/models/public-api-create-runner-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

