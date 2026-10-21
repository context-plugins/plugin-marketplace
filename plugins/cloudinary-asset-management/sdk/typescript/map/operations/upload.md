<!-- Generated file — do not edit; regenerated with the SDK. -->

# Upload — operations

Accessor: `client.upload` · Source: `src/resources/upload.ts` · 7 operations · Request and error types: namespace `Upload`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `cloudinary-asset-management-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### concat

- **Signature**: `concat(request: Upload.ConcatRequestParams, options?: RequestOptions): ApiPromise<ConcatResponse, Upload.ConcatError>`
- **Wire**: `POST /v1_1/{cloud_name}/video/concat`
- **Auth**: any of `basicAuth`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ConcatResponse`
- **Error**: `CloudinaryAssetManagementApiError` with `kind: "api"`, an instance of `Upload.ConcatError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [400] `ApiErrorModel` · `"apiErrorModel2"` [401] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Upload.ConcatRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `cloudName` | `path` | `cloud_name` | `string` | yes |
| `body` | `body` | — | `ConcatRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConcatRequest` | `concatRequestSchema` | `src/models/concat-request.ts` |
| `ConcatResponse` | `concatResponseSchema` | `src/models/concat-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

### destroyAsset

- **Signature**: `destroyAsset(request: Upload.DestroyAssetRequest, options?: RequestOptions): ApiPromise<DestroyResponse, Upload.DestroyAssetError>`
- **Wire**: `POST /v1_1/{cloud_name}/{resource_type}/destroy`
- **Auth**: any of `basicAuth`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DestroyResponse`
- **Error**: `CloudinaryAssetManagementApiError` with `kind: "api"`, an instance of `Upload.DestroyAssetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [400] `ApiErrorModel` · `"apiErrorModel2"` [401] `ApiErrorModel` · `"apiErrorModel3"` [403] `ApiErrorModel` · `"apiErrorModel4"` [404] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Upload.DestroyAssetRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `cloudName` | `path` | `cloud_name` | `string` | yes |
| `resourceType` | `path` | `resource_type` | `ResourceType` | yes |
| `body` | `body` | — | `DestroyRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ResourceType` | `resourceTypeSchema` | `src/models/resource-type.ts` |
| `DestroyRequest` | `destroyRequestSchema` | `src/models/destroy-request.ts` |
| `DestroyResponse` | `destroyResponseSchema` | `src/models/destroy-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

### evalUploadParams

- **Signature**: `evalUploadParams(request: Upload.EvalUploadParamsRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Upload.EvalUploadParamsError>`
- **Wire**: `POST /v1_1/{cloud_name}/eval`
- **Auth**: any of `basicAuth`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `CloudinaryAssetManagementApiError` with `kind: "api"`, an instance of `Upload.EvalUploadParamsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [400] `ApiErrorModel` · `"apiErrorModel2"` [401] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Upload.EvalUploadParamsRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `cloudName` | `path` | `cloud_name` | `string` | yes |
| `body` | `body` | — | `EvalRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `EvalRequest` | `evalRequestSchema` | `src/models/eval-request.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

### text

- **Signature**: `text(request: Upload.TextRequestParams, options?: RequestOptions): ApiPromise<TextResponse, Upload.TextError>`
- **Wire**: `POST /v1_1/{cloud_name}/{resource_type}/text`
- **Auth**: any of `basicAuth`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TextResponse`
- **Error**: `CloudinaryAssetManagementApiError` with `kind: "api"`, an instance of `Upload.TextError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [400] `ApiErrorModel` · `"apiErrorModel2"` [401] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Upload.TextRequestParams` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `cloudName` | `path` | `cloud_name` | `string` | yes |
| `resourceType` | `path` | `resource_type` | `ResourceType9` | yes |
| `body` | `body` | — | `TextRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ResourceType9` | `resourceType9Schema` | `src/models/resource-type9.ts` |
| `TextRequest` | `textRequestSchema` | `src/models/text-request.ts` |
| `TextResponse` | `textResponseSchema` | `src/models/text-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

### upload

- **Signature**: `upload(request: Upload.UploadRequestParams, options?: RequestOptions): ApiPromise<V11UploadResponse, Upload.UploadError>`
- **Wire**: `POST /v1_1/{cloud_name}/{resource_type}/upload`
- **Auth**: any of `basicAuth`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V11UploadResponse`
- **Error**: `CloudinaryAssetManagementApiError` with `kind: "api"`, an instance of `Upload.UploadError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error302"` [302] no body · `"apiErrorModel"` [400] `ApiErrorModel` · `"apiErrorModel2"` [401] `ApiErrorModel` · `"apiErrorModel3"` [403] `ApiErrorModel` · `"apiErrorModel4"` [404] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Upload.UploadRequestParams` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `cloudName` | `path` | `cloud_name` | `string` | yes | — |
| `resourceType` | `path` | `resource_type` | `UploadResourceType` | no | `UploadResourceType.Auto` |
| `body` | `body` | — | `UploadRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `UploadResourceType` | `uploadResourceTypeSchema` | `src/models/upload-resource-type.ts` |
| `UploadRequest` | `uploadRequestSchema` | `src/models/upload-request.ts` |
| `V11UploadResponse` | `v11UploadResponseSchema` | `src/models/unions/v11-upload-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

### uploadChunk

- **Signature**: `uploadChunk(request: Upload.UploadChunkRequest, options?: RequestOptions): ApiPromise<V11UploadChunkedResponse, Upload.UploadChunkError>`
- **Wire**: `POST /v1_1/{cloud_name}/{resource_type}/upload_chunked`
- **Auth**: any of `basicAuth`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V11UploadChunkedResponse`
- **Error**: `CloudinaryAssetManagementApiError` with `kind: "api"`, an instance of `Upload.UploadChunkError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error302"` [302] no body · `"apiErrorModel"` [400] `ApiErrorModel` · `"apiErrorModel2"` [401] `ApiErrorModel` · `"apiErrorModel3"` [403] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Upload.UploadChunkRequest` (7):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `cloudName` | `path` | `cloud_name` | `string` | yes | — |
| `resourceType` | `path` | `resource_type` | `UploadResourceType` | no | `UploadResourceType.Auto` |
| `xUniqueUploadId` | `header` | `X-Unique-Upload-Id` | `string` | yes | — |
| `contentRange` | `header` | `Content-Range` | `string` | no | — |
| `xUploadPartNumber` | `header` | `X-Upload-Part-Number` | `number` | no | — |
| `xUploadTotalParts` | `header` | `X-Upload-Total-Parts` | `number` | no | — |
| `body` | `body` | — | `UploadRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `UploadResourceType` | `uploadResourceTypeSchema` | `src/models/upload-resource-type.ts` |
| `UploadRequest` | `uploadRequestSchema` | `src/models/upload-request.ts` |
| `V11UploadChunkedResponse` | `v11UploadChunkedResponseSchema` | `src/models/unions/v11-upload-chunked-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

### uploadNoResourceType

- **Signature**: `uploadNoResourceType(request: Upload.UploadNoResourceTypeRequest, options?: RequestOptions): ApiPromise<V11UploadResponse, Upload.UploadNoResourceTypeError>`
- **Wire**: `POST /v1_1/{cloud_name}/upload`
- **Auth**: any of `basicAuth`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V11UploadResponse`
- **Error**: `CloudinaryAssetManagementApiError` with `kind: "api"`, an instance of `Upload.UploadNoResourceTypeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error302"` [302] no body · `"apiErrorModel"` [400] `ApiErrorModel` · `"apiErrorModel2"` [401] `ApiErrorModel` · `"apiErrorModel3"` [403] `ApiErrorModel` · `"apiErrorModel4"` [404] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Upload.UploadNoResourceTypeRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `cloudName` | `path` | `cloud_name` | `string` | yes |
| `body` | `body` | — | `UploadRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UploadRequest` | `uploadRequestSchema` | `src/models/upload-request.ts` |
| `V11UploadResponse` | `v11UploadResponseSchema` | `src/models/unions/v11-upload-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

