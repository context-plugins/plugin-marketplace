<!-- Generated file — do not edit; regenerated with the SDK. -->

# OtaUpdates — operations

Accessor: `client.otaUpdates` · Source: `src/resources/ota-updates.ts` · 4 operations · Request and error types: namespace `OtaUpdates`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-free-rtos`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createOtaUpdate

- **Signature**: `createOtaUpdate(request: OtaUpdates.CreateOtaUpdateRequestParams, options?: RequestOptions): ApiPromise<OtaUpdate, OtaUpdates.CreateOtaUpdateError>`
- **Wire**: `POST /otaUpdates`
- **Auth**: `awsSigV4`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `OtaUpdate`
- **Error**: `AmazonFreeRtosError` with `kind: "api"`, an instance of `OtaUpdates.CreateOtaUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OtaUpdates.CreateOtaUpdateRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateOtaUpdateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateOtaUpdateRequest` | `createOtaUpdateRequestSchema` | `src/models/create-ota-update-request.ts` |
| `OtaUpdate` | `otaUpdateSchema` | `src/models/ota-update.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### deleteOtaUpdate

- **Signature**: `deleteOtaUpdate(request: OtaUpdates.DeleteOtaUpdateRequest, options?: RequestOptions): ApiPromise<undefined, OtaUpdates.DeleteOtaUpdateError>`
- **Wire**: `DELETE /otaUpdates/{otaUpdateId}`
- **Auth**: `awsSigV4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonFreeRtosError` with `kind: "api"`, an instance of `OtaUpdates.DeleteOtaUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [404] `ErrorResponse` · `"errorResponse3"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OtaUpdates.DeleteOtaUpdateRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `otaUpdateId` | `path` | — | `string` | yes |
| `deleteStream` | `query` | — | `boolean` | no |
| `forceDeleteAwsJob` | `query` | `forceDeleteAWSJob` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getOtaUpdate

- **Signature**: `getOtaUpdate(request: OtaUpdates.GetOtaUpdateRequest, options?: RequestOptions): ApiPromise<OtaUpdateInfo, OtaUpdates.GetOtaUpdateError>`
- **Wire**: `GET /otaUpdates/{otaUpdateId}`
- **Auth**: `awsSigV4`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `OtaUpdateInfo`
- **Error**: `AmazonFreeRtosError` with `kind: "api"`, an instance of `OtaUpdates.GetOtaUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [404] `ErrorResponse` · `"errorResponse3"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OtaUpdates.GetOtaUpdateRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `otaUpdateId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `OtaUpdateInfo` | `otaUpdateInfoSchema` | `src/models/ota-update-info.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listOtaUpdates

- **Signature**: `listOtaUpdates(request?: OtaUpdates.ListOtaUpdatesRequest, options?: RequestOptions): ApiPromise<OtaUpdatesResponse, OtaUpdates.ListOtaUpdatesError>`
- **Wire**: `GET /otaUpdates`
- **Auth**: `awsSigV4`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `OtaUpdatesResponse`
- **Error**: `AmazonFreeRtosError` with `kind: "api"`, an instance of `OtaUpdates.ListOtaUpdatesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OtaUpdates.ListOtaUpdatesRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `maxResults` | `query` | `number` | no |
| `nextToken` | `query` | `string` | no |
| `otaUpdateStatus` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `OtaUpdatesResponse` | `otaUpdatesResponseSchema` | `src/models/ota-updates-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

