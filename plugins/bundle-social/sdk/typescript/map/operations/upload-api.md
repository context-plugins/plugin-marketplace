<!-- Generated file — do not edit; regenerated with the SDK. -->

# UploadApi — operations

Accessor: `client.uploadApi` · Source: `src/resources/upload-api.ts` · 12 operations · Request and error types: namespace `UploadApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `bundle-social`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### uploadAbortMultipartUpload

- **Signature**: `uploadAbortMultipartUpload(request?: UploadApi.UploadAbortMultipartUploadRequest, options?: RequestOptions): ApiPromise<ApiV1UploadMultipartAbortResponse, UploadApi.UploadAbortMultipartUploadError>`
- **Wire**: `POST /api/v1/upload/multipart/abort`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1UploadMultipartAbortResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `UploadApi.UploadAbortMultipartUploadError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1UploadMultipartAbort400Error1"` [400] `ApiV1UploadMultipartAbort400Error1` · `"apiV1UploadMultipartAbort401Error1"` [401] `ApiV1UploadMultipartAbort401Error1` · `"apiV1UploadMultipartAbort403Error1"` [403] `ApiV1UploadMultipartAbort403Error1` · `"apiV1UploadMultipartAbort404Error1"` [404] `ApiV1UploadMultipartAbort404Error1` · `"apiV1UploadMultipartAbort429Error1"` [429] `ApiV1UploadMultipartAbort429Error1` · `"apiV1UploadMultipartAbort500Error1"` [500] `ApiV1UploadMultipartAbort500Error1` · `"apiV1UploadMultipartAbort502Error1"` [502] `ApiV1UploadMultipartAbort502Error1` · `"apiV1UploadMultipartAbort503Error1"` [503] `ApiV1UploadMultipartAbort503Error1` · `"apiV1UploadMultipartAbort504Error1"` [504] `ApiV1UploadMultipartAbort504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `UploadApi.UploadAbortMultipartUploadRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1UploadMultipartAbortRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1UploadMultipartAbortRequest` | `apiV1UploadMultipartAbortRequestSchema` | `src/models/api-v1-upload-multipart-abort-request.ts` |
| `ApiV1UploadMultipartAbortResponse` | `apiV1UploadMultipartAbortResponseSchema` | `src/models/api-v1-upload-multipart-abort-response.ts` |
| `ApiV1UploadMultipartAbort400Error1` | `apiV1UploadMultipartAbort400Error1Schema` | `src/models/api-v1-upload-multipart-abort400-error1.ts` |
| `ApiV1UploadMultipartAbort401Error1` | `apiV1UploadMultipartAbort401Error1Schema` | `src/models/api-v1-upload-multipart-abort401-error1.ts` |
| `ApiV1UploadMultipartAbort403Error1` | `apiV1UploadMultipartAbort403Error1Schema` | `src/models/api-v1-upload-multipart-abort403-error1.ts` |
| `ApiV1UploadMultipartAbort404Error1` | `apiV1UploadMultipartAbort404Error1Schema` | `src/models/api-v1-upload-multipart-abort404-error1.ts` |
| `ApiV1UploadMultipartAbort429Error1` | `apiV1UploadMultipartAbort429Error1Schema` | `src/models/api-v1-upload-multipart-abort429-error1.ts` |
| `ApiV1UploadMultipartAbort500Error1` | `apiV1UploadMultipartAbort500Error1Schema` | `src/models/api-v1-upload-multipart-abort500-error1.ts` |
| `ApiV1UploadMultipartAbort502Error1` | `apiV1UploadMultipartAbort502Error1Schema` | `src/models/api-v1-upload-multipart-abort502-error1.ts` |
| `ApiV1UploadMultipartAbort503Error1` | `apiV1UploadMultipartAbort503Error1Schema` | `src/models/api-v1-upload-multipart-abort503-error1.ts` |
| `ApiV1UploadMultipartAbort504Error1` | `apiV1UploadMultipartAbort504Error1Schema` | `src/models/api-v1-upload-multipart-abort504-error1.ts` |

### uploadCompleteMultipartUpload

- **Signature**: `uploadCompleteMultipartUpload(request?: UploadApi.UploadCompleteMultipartUploadRequest, options?: RequestOptions): ApiPromise<ApiV1UploadMultipartCompleteResponse, UploadApi.UploadCompleteMultipartUploadError>`
- **Wire**: `POST /api/v1/upload/multipart/complete`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1UploadMultipartCompleteResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `UploadApi.UploadCompleteMultipartUploadError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1UploadMultipartComplete400Error1"` [400] `ApiV1UploadMultipartComplete400Error1` · `"apiV1UploadMultipartComplete401Error1"` [401] `ApiV1UploadMultipartComplete401Error1` · `"apiV1UploadMultipartComplete403Error1"` [403] `ApiV1UploadMultipartComplete403Error1` · `"apiV1UploadMultipartComplete404Error1"` [404] `ApiV1UploadMultipartComplete404Error1` · `"apiV1UploadMultipartComplete429Error1"` [429] `ApiV1UploadMultipartComplete429Error1` · `"apiV1UploadMultipartComplete500Error1"` [500] `ApiV1UploadMultipartComplete500Error1` · `"apiV1UploadMultipartComplete502Error1"` [502] `ApiV1UploadMultipartComplete502Error1` · `"apiV1UploadMultipartComplete503Error1"` [503] `ApiV1UploadMultipartComplete503Error1` · `"apiV1UploadMultipartComplete504Error1"` [504] `ApiV1UploadMultipartComplete504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `UploadApi.UploadCompleteMultipartUploadRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1UploadMultipartCompleteRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1UploadMultipartCompleteRequest` | `apiV1UploadMultipartCompleteRequestSchema` | `src/models/api-v1-upload-multipart-complete-request.ts` |
| `ApiV1UploadMultipartCompleteResponse` | `apiV1UploadMultipartCompleteResponseSchema` | `src/models/api-v1-upload-multipart-complete-response.ts` |
| `ApiV1UploadMultipartComplete400Error1` | `apiV1UploadMultipartComplete400Error1Schema` | `src/models/api-v1-upload-multipart-complete400-error1.ts` |
| `ApiV1UploadMultipartComplete401Error1` | `apiV1UploadMultipartComplete401Error1Schema` | `src/models/api-v1-upload-multipart-complete401-error1.ts` |
| `ApiV1UploadMultipartComplete403Error1` | `apiV1UploadMultipartComplete403Error1Schema` | `src/models/api-v1-upload-multipart-complete403-error1.ts` |
| `ApiV1UploadMultipartComplete404Error1` | `apiV1UploadMultipartComplete404Error1Schema` | `src/models/api-v1-upload-multipart-complete404-error1.ts` |
| `ApiV1UploadMultipartComplete429Error1` | `apiV1UploadMultipartComplete429Error1Schema` | `src/models/api-v1-upload-multipart-complete429-error1.ts` |
| `ApiV1UploadMultipartComplete500Error1` | `apiV1UploadMultipartComplete500Error1Schema` | `src/models/api-v1-upload-multipart-complete500-error1.ts` |
| `ApiV1UploadMultipartComplete502Error1` | `apiV1UploadMultipartComplete502Error1Schema` | `src/models/api-v1-upload-multipart-complete502-error1.ts` |
| `ApiV1UploadMultipartComplete503Error1` | `apiV1UploadMultipartComplete503Error1Schema` | `src/models/api-v1-upload-multipart-complete503-error1.ts` |
| `ApiV1UploadMultipartComplete504Error1` | `apiV1UploadMultipartComplete504Error1Schema` | `src/models/api-v1-upload-multipart-complete504-error1.ts` |

### uploadCreate

- **Signature**: `uploadCreate(request?: UploadApi.UploadCreateRequest, options?: RequestOptions): ApiPromise<ApiV1UploadResponse1, UploadApi.UploadCreateError>`
- **Wire**: `POST /api/v1/upload/`
- **Auth**: `apiKeyAuth`
- **Request body**: `multipart/form-data` — every field marked `form`. `file` is a file part, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1UploadResponse1`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `UploadApi.UploadCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1Upload400Error1"` [400] `ApiV1Upload400Error1` · `"apiV1Upload401Error1"` [401] `ApiV1Upload401Error1` · `"apiV1Upload403Error1"` [403] `ApiV1Upload403Error1` · `"apiV1Upload404Error1"` [404] `ApiV1Upload404Error1` · `"apiV1Upload429Error1"` [429] `ApiV1Upload429Error1` · `"apiV1Upload500Error1"` [500] `ApiV1Upload500Error1` · `"apiV1Upload502Error1"` [502] `ApiV1Upload502Error1` · `"apiV1Upload503Error1"` [503] `ApiV1Upload503Error1` · `"apiV1Upload504Error1"` [504] `ApiV1Upload504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `UploadApi.UploadCreateRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `teamId` | `form` | `string` | no |
| `file` | `form` | `FileInput` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1UploadResponse1` | `apiV1UploadResponse1Schema` | `src/models/api-v1-upload-response1.ts` |
| `ApiV1Upload400Error1` | `apiV1Upload400Error1Schema` | `src/models/api-v1-upload400-error1.ts` |
| `ApiV1Upload401Error1` | `apiV1Upload401Error1Schema` | `src/models/api-v1-upload401-error1.ts` |
| `ApiV1Upload403Error1` | `apiV1Upload403Error1Schema` | `src/models/api-v1-upload403-error1.ts` |
| `ApiV1Upload404Error1` | `apiV1Upload404Error1Schema` | `src/models/api-v1-upload404-error1.ts` |
| `ApiV1Upload429Error1` | `apiV1Upload429Error1Schema` | `src/models/api-v1-upload429-error1.ts` |
| `ApiV1Upload500Error1` | `apiV1Upload500Error1Schema` | `src/models/api-v1-upload500-error1.ts` |
| `ApiV1Upload502Error1` | `apiV1Upload502Error1Schema` | `src/models/api-v1-upload502-error1.ts` |
| `ApiV1Upload503Error1` | `apiV1Upload503Error1Schema` | `src/models/api-v1-upload503-error1.ts` |
| `ApiV1Upload504Error1` | `apiV1Upload504Error1Schema` | `src/models/api-v1-upload504-error1.ts` |

### uploadCreateFromUrl

- **Signature**: `uploadCreateFromUrl(request?: UploadApi.UploadCreateFromUrlRequest, options?: RequestOptions): ApiPromise<ApiV1UploadFromUrlResponse, UploadApi.UploadCreateFromUrlError>`
- **Wire**: `POST /api/v1/upload/from-url`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1UploadFromUrlResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `UploadApi.UploadCreateFromUrlError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1UploadFromUrl400Error1"` [400] `ApiV1UploadFromUrl400Error1` · `"apiV1UploadFromUrl401Error1"` [401] `ApiV1UploadFromUrl401Error1` · `"apiV1UploadFromUrl403Error1"` [403] `ApiV1UploadFromUrl403Error1` · `"apiV1UploadFromUrl404Error1"` [404] `ApiV1UploadFromUrl404Error1` · `"apiV1UploadFromUrl429Error1"` [429] `ApiV1UploadFromUrl429Error1` · `"apiV1UploadFromUrl500Error1"` [500] `ApiV1UploadFromUrl500Error1` · `"apiV1UploadFromUrl502Error1"` [502] `ApiV1UploadFromUrl502Error1` · `"apiV1UploadFromUrl503Error1"` [503] `ApiV1UploadFromUrl503Error1` · `"apiV1UploadFromUrl504Error1"` [504] `ApiV1UploadFromUrl504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `UploadApi.UploadCreateFromUrlRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1UploadFromUrlRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1UploadFromUrlRequest` | `apiV1UploadFromUrlRequestSchema` | `src/models/api-v1-upload-from-url-request.ts` |
| `ApiV1UploadFromUrlResponse` | `apiV1UploadFromUrlResponseSchema` | `src/models/api-v1-upload-from-url-response.ts` |
| `ApiV1UploadFromUrl400Error1` | `apiV1UploadFromUrl400Error1Schema` | `src/models/api-v1-upload-from-url400-error1.ts` |
| `ApiV1UploadFromUrl401Error1` | `apiV1UploadFromUrl401Error1Schema` | `src/models/api-v1-upload-from-url401-error1.ts` |
| `ApiV1UploadFromUrl403Error1` | `apiV1UploadFromUrl403Error1Schema` | `src/models/api-v1-upload-from-url403-error1.ts` |
| `ApiV1UploadFromUrl404Error1` | `apiV1UploadFromUrl404Error1Schema` | `src/models/api-v1-upload-from-url404-error1.ts` |
| `ApiV1UploadFromUrl429Error1` | `apiV1UploadFromUrl429Error1Schema` | `src/models/api-v1-upload-from-url429-error1.ts` |
| `ApiV1UploadFromUrl500Error1` | `apiV1UploadFromUrl500Error1Schema` | `src/models/api-v1-upload-from-url500-error1.ts` |
| `ApiV1UploadFromUrl502Error1` | `apiV1UploadFromUrl502Error1Schema` | `src/models/api-v1-upload-from-url502-error1.ts` |
| `ApiV1UploadFromUrl503Error1` | `apiV1UploadFromUrl503Error1Schema` | `src/models/api-v1-upload-from-url503-error1.ts` |
| `ApiV1UploadFromUrl504Error1` | `apiV1UploadFromUrl504Error1Schema` | `src/models/api-v1-upload-from-url504-error1.ts` |

### uploadDelete

- **Signature**: `uploadDelete(request: UploadApi.UploadDeleteRequest, options?: RequestOptions): ApiPromise<ApiV1UploadResponse1, UploadApi.UploadDeleteError>`
- **Wire**: `DELETE /api/v1/upload/{id}`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1UploadResponse1`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `UploadApi.UploadDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1Upload400Error1"` [400] `ApiV1Upload400Error1` · `"apiV1Upload401Error1"` [401] `ApiV1Upload401Error1` · `"apiV1Upload403Error1"` [403] `ApiV1Upload403Error1` · `"apiV1Upload404Error1"` [404] `ApiV1Upload404Error1` · `"apiV1Upload429Error1"` [429] `ApiV1Upload429Error1` · `"apiV1Upload500Error1"` [500] `ApiV1Upload500Error1` · `"apiV1Upload502Error1"` [502] `ApiV1Upload502Error1` · `"apiV1Upload503Error1"` [503] `ApiV1Upload503Error1` · `"apiV1Upload504Error1"` [504] `ApiV1Upload504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `UploadApi.UploadDeleteRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1UploadResponse1` | `apiV1UploadResponse1Schema` | `src/models/api-v1-upload-response1.ts` |
| `ApiV1Upload400Error1` | `apiV1Upload400Error1Schema` | `src/models/api-v1-upload400-error1.ts` |
| `ApiV1Upload401Error1` | `apiV1Upload401Error1Schema` | `src/models/api-v1-upload401-error1.ts` |
| `ApiV1Upload403Error1` | `apiV1Upload403Error1Schema` | `src/models/api-v1-upload403-error1.ts` |
| `ApiV1Upload404Error1` | `apiV1Upload404Error1Schema` | `src/models/api-v1-upload404-error1.ts` |
| `ApiV1Upload429Error1` | `apiV1Upload429Error1Schema` | `src/models/api-v1-upload429-error1.ts` |
| `ApiV1Upload500Error1` | `apiV1Upload500Error1Schema` | `src/models/api-v1-upload500-error1.ts` |
| `ApiV1Upload502Error1` | `apiV1Upload502Error1Schema` | `src/models/api-v1-upload502-error1.ts` |
| `ApiV1Upload503Error1` | `apiV1Upload503Error1Schema` | `src/models/api-v1-upload503-error1.ts` |
| `ApiV1Upload504Error1` | `apiV1Upload504Error1Schema` | `src/models/api-v1-upload504-error1.ts` |

### uploadDeleteMany

- **Signature**: `uploadDeleteMany(request?: UploadApi.UploadDeleteManyRequest, options?: RequestOptions): ApiPromise<ApiV1UploadResponse1[], UploadApi.UploadDeleteManyError>`
- **Wire**: `DELETE /api/v1/upload/`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1UploadResponse1[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `UploadApi.UploadDeleteManyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1Upload400Error1"` [400] `ApiV1Upload400Error1` · `"apiV1Upload401Error1"` [401] `ApiV1Upload401Error1` · `"apiV1Upload403Error1"` [403] `ApiV1Upload403Error1` · `"apiV1Upload404Error1"` [404] `ApiV1Upload404Error1` · `"apiV1Upload429Error1"` [429] `ApiV1Upload429Error1` · `"apiV1Upload500Error1"` [500] `ApiV1Upload500Error1` · `"apiV1Upload502Error1"` [502] `ApiV1Upload502Error1` · `"apiV1Upload503Error1"` [503] `ApiV1Upload503Error1` · `"apiV1Upload504Error1"` [504] `ApiV1Upload504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `UploadApi.UploadDeleteManyRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1UploadRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1UploadRequest` | `apiV1UploadRequestSchema` | `src/models/api-v1-upload-request.ts` |
| `ApiV1UploadResponse1` | `apiV1UploadResponse1Schema` | `src/models/api-v1-upload-response1.ts` |
| `ApiV1Upload400Error1` | `apiV1Upload400Error1Schema` | `src/models/api-v1-upload400-error1.ts` |
| `ApiV1Upload401Error1` | `apiV1Upload401Error1Schema` | `src/models/api-v1-upload401-error1.ts` |
| `ApiV1Upload403Error1` | `apiV1Upload403Error1Schema` | `src/models/api-v1-upload403-error1.ts` |
| `ApiV1Upload404Error1` | `apiV1Upload404Error1Schema` | `src/models/api-v1-upload404-error1.ts` |
| `ApiV1Upload429Error1` | `apiV1Upload429Error1Schema` | `src/models/api-v1-upload429-error1.ts` |
| `ApiV1Upload500Error1` | `apiV1Upload500Error1Schema` | `src/models/api-v1-upload500-error1.ts` |
| `ApiV1Upload502Error1` | `apiV1Upload502Error1Schema` | `src/models/api-v1-upload502-error1.ts` |
| `ApiV1Upload503Error1` | `apiV1Upload503Error1Schema` | `src/models/api-v1-upload503-error1.ts` |
| `ApiV1Upload504Error1` | `apiV1Upload504Error1Schema` | `src/models/api-v1-upload504-error1.ts` |

### uploadFinalizeLargeUpload

- **Signature**: `uploadFinalizeLargeUpload(request?: UploadApi.UploadFinalizeLargeUploadRequest, options?: RequestOptions): ApiPromise<ApiV1UploadFinalizeResponse, UploadApi.UploadFinalizeLargeUploadError>`
- **Wire**: `POST /api/v1/upload/finalize`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1UploadFinalizeResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `UploadApi.UploadFinalizeLargeUploadError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1UploadFinalize400Error1"` [400] `ApiV1UploadFinalize400Error1` · `"apiV1UploadFinalize401Error1"` [401] `ApiV1UploadFinalize401Error1` · `"apiV1UploadFinalize403Error1"` [403] `ApiV1UploadFinalize403Error1` · `"apiV1UploadFinalize404Error1"` [404] `ApiV1UploadFinalize404Error1` · `"apiV1UploadFinalize429Error1"` [429] `ApiV1UploadFinalize429Error1` · `"apiV1UploadFinalize500Error1"` [500] `ApiV1UploadFinalize500Error1` · `"apiV1UploadFinalize502Error1"` [502] `ApiV1UploadFinalize502Error1` · `"apiV1UploadFinalize503Error1"` [503] `ApiV1UploadFinalize503Error1` · `"apiV1UploadFinalize504Error1"` [504] `ApiV1UploadFinalize504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `UploadApi.UploadFinalizeLargeUploadRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1UploadFinalizeRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1UploadFinalizeRequest` | `apiV1UploadFinalizeRequestSchema` | `src/models/api-v1-upload-finalize-request.ts` |
| `ApiV1UploadFinalizeResponse` | `apiV1UploadFinalizeResponseSchema` | `src/models/api-v1-upload-finalize-response.ts` |
| `ApiV1UploadFinalize400Error1` | `apiV1UploadFinalize400Error1Schema` | `src/models/api-v1-upload-finalize400-error1.ts` |
| `ApiV1UploadFinalize401Error1` | `apiV1UploadFinalize401Error1Schema` | `src/models/api-v1-upload-finalize401-error1.ts` |
| `ApiV1UploadFinalize403Error1` | `apiV1UploadFinalize403Error1Schema` | `src/models/api-v1-upload-finalize403-error1.ts` |
| `ApiV1UploadFinalize404Error1` | `apiV1UploadFinalize404Error1Schema` | `src/models/api-v1-upload-finalize404-error1.ts` |
| `ApiV1UploadFinalize429Error1` | `apiV1UploadFinalize429Error1Schema` | `src/models/api-v1-upload-finalize429-error1.ts` |
| `ApiV1UploadFinalize500Error1` | `apiV1UploadFinalize500Error1Schema` | `src/models/api-v1-upload-finalize500-error1.ts` |
| `ApiV1UploadFinalize502Error1` | `apiV1UploadFinalize502Error1Schema` | `src/models/api-v1-upload-finalize502-error1.ts` |
| `ApiV1UploadFinalize503Error1` | `apiV1UploadFinalize503Error1Schema` | `src/models/api-v1-upload-finalize503-error1.ts` |
| `ApiV1UploadFinalize504Error1` | `apiV1UploadFinalize504Error1Schema` | `src/models/api-v1-upload-finalize504-error1.ts` |

### uploadGet

- **Signature**: `uploadGet(request: UploadApi.UploadGetRequest, options?: RequestOptions): ApiPromise<ApiV1UploadResponse, UploadApi.UploadGetError>`
- **Wire**: `GET /api/v1/upload/{id}`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1UploadResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `UploadApi.UploadGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1Upload400Error1"` [400] `ApiV1Upload400Error1` · `"apiV1Upload401Error1"` [401] `ApiV1Upload401Error1` · `"apiV1Upload403Error1"` [403] `ApiV1Upload403Error1` · `"apiV1Upload404Error1"` [404] `ApiV1Upload404Error1` · `"apiV1Upload429Error1"` [429] `ApiV1Upload429Error1` · `"apiV1Upload500Error1"` [500] `ApiV1Upload500Error1` · `"apiV1Upload502Error1"` [502] `ApiV1Upload502Error1` · `"apiV1Upload503Error1"` [503] `ApiV1Upload503Error1` · `"apiV1Upload504Error1"` [504] `ApiV1Upload504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `UploadApi.UploadGetRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1UploadResponse` | `apiV1UploadResponseSchema` | `src/models/api-v1-upload-response.ts` |
| `ApiV1Upload400Error1` | `apiV1Upload400Error1Schema` | `src/models/api-v1-upload400-error1.ts` |
| `ApiV1Upload401Error1` | `apiV1Upload401Error1Schema` | `src/models/api-v1-upload401-error1.ts` |
| `ApiV1Upload403Error1` | `apiV1Upload403Error1Schema` | `src/models/api-v1-upload403-error1.ts` |
| `ApiV1Upload404Error1` | `apiV1Upload404Error1Schema` | `src/models/api-v1-upload404-error1.ts` |
| `ApiV1Upload429Error1` | `apiV1Upload429Error1Schema` | `src/models/api-v1-upload429-error1.ts` |
| `ApiV1Upload500Error1` | `apiV1Upload500Error1Schema` | `src/models/api-v1-upload500-error1.ts` |
| `ApiV1Upload502Error1` | `apiV1Upload502Error1Schema` | `src/models/api-v1-upload502-error1.ts` |
| `ApiV1Upload503Error1` | `apiV1Upload503Error1Schema` | `src/models/api-v1-upload503-error1.ts` |
| `ApiV1Upload504Error1` | `apiV1Upload504Error1Schema` | `src/models/api-v1-upload504-error1.ts` |

### uploadGetList

- **Signature**: `uploadGetList(request?: UploadApi.UploadGetListRequest, options?: RequestOptions): ApiPromise<ApiV1UploadResponse[], UploadApi.UploadGetListError>`
- **Wire**: `GET /api/v1/upload/`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1UploadResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `UploadApi.UploadGetListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1Upload400Error1"` [400] `ApiV1Upload400Error1` · `"apiV1Upload401Error1"` [401] `ApiV1Upload401Error1` · `"apiV1Upload403Error1"` [403] `ApiV1Upload403Error1` · `"apiV1Upload404Error1"` [404] `ApiV1Upload404Error1` · `"apiV1Upload429Error1"` [429] `ApiV1Upload429Error1` · `"apiV1Upload500Error1"` [500] `ApiV1Upload500Error1` · `"apiV1Upload502Error1"` [502] `ApiV1Upload502Error1` · `"apiV1Upload503Error1"` [503] `ApiV1Upload503Error1` · `"apiV1Upload504Error1"` [504] `ApiV1Upload504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `UploadApi.UploadGetListRequest` (9):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `teamId` | `query` | `string` | no | — |
| `type` | `query` | `TypeBundleSocialUploadApi` | no | — |
| `types` | `query` | `TypeBundleSocialUploadApi[]` | no | — |
| `status` | `query` | `StatusBundleSocialUploadApi` | no | — |
| `ids` | `query` | `string[]` | no | — |
| `urls` | `query` | `string[]` | no | — |
| `limit` | `query` | `number` | no | — |
| `includePosts` | `query` | `IncludePosts2` | no | — |
| `offset` | `query` | `number` | no | `0` |

| Type | Schema value | Source |
| --- | --- | --- |
| `TypeBundleSocialUploadApi` | `typeBundleSocialUploadApiSchema` | `src/models/type-bundle-social-upload-api.ts` |
| `StatusBundleSocialUploadApi` | `statusBundleSocialUploadApiSchema` | `src/models/status-bundle-social-upload-api.ts` |
| `IncludePosts2` | `includePosts2Schema` | `src/models/unions/include-posts2.ts` |
| `ApiV1UploadResponse` | `apiV1UploadResponseSchema` | `src/models/api-v1-upload-response.ts` |
| `ApiV1Upload400Error1` | `apiV1Upload400Error1Schema` | `src/models/api-v1-upload400-error1.ts` |
| `ApiV1Upload401Error1` | `apiV1Upload401Error1Schema` | `src/models/api-v1-upload401-error1.ts` |
| `ApiV1Upload403Error1` | `apiV1Upload403Error1Schema` | `src/models/api-v1-upload403-error1.ts` |
| `ApiV1Upload404Error1` | `apiV1Upload404Error1Schema` | `src/models/api-v1-upload404-error1.ts` |
| `ApiV1Upload429Error1` | `apiV1Upload429Error1Schema` | `src/models/api-v1-upload429-error1.ts` |
| `ApiV1Upload500Error1` | `apiV1Upload500Error1Schema` | `src/models/api-v1-upload500-error1.ts` |
| `ApiV1Upload502Error1` | `apiV1Upload502Error1Schema` | `src/models/api-v1-upload502-error1.ts` |
| `ApiV1Upload503Error1` | `apiV1Upload503Error1Schema` | `src/models/api-v1-upload503-error1.ts` |
| `ApiV1Upload504Error1` | `apiV1Upload504Error1Schema` | `src/models/api-v1-upload504-error1.ts` |

### uploadInitLargeUpload

- **Signature**: `uploadInitLargeUpload(request?: UploadApi.UploadInitLargeUploadRequest, options?: RequestOptions): ApiPromise<ApiV1UploadInitResponse, UploadApi.UploadInitLargeUploadError>`
- **Wire**: `POST /api/v1/upload/init`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1UploadInitResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `UploadApi.UploadInitLargeUploadError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1UploadInit400Error1"` [400] `ApiV1UploadInit400Error1` · `"apiV1UploadInit401Error1"` [401] `ApiV1UploadInit401Error1` · `"apiV1UploadInit403Error1"` [403] `ApiV1UploadInit403Error1` · `"apiV1UploadInit404Error1"` [404] `ApiV1UploadInit404Error1` · `"apiV1UploadInit429Error1"` [429] `ApiV1UploadInit429Error1` · `"apiV1UploadInit500Error1"` [500] `ApiV1UploadInit500Error1` · `"apiV1UploadInit502Error1"` [502] `ApiV1UploadInit502Error1` · `"apiV1UploadInit503Error1"` [503] `ApiV1UploadInit503Error1` · `"apiV1UploadInit504Error1"` [504] `ApiV1UploadInit504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `UploadApi.UploadInitLargeUploadRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1UploadInitRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1UploadInitRequest` | `apiV1UploadInitRequestSchema` | `src/models/api-v1-upload-init-request.ts` |
| `ApiV1UploadInitResponse` | `apiV1UploadInitResponseSchema` | `src/models/api-v1-upload-init-response.ts` |
| `ApiV1UploadInit400Error1` | `apiV1UploadInit400Error1Schema` | `src/models/api-v1-upload-init400-error1.ts` |
| `ApiV1UploadInit401Error1` | `apiV1UploadInit401Error1Schema` | `src/models/api-v1-upload-init401-error1.ts` |
| `ApiV1UploadInit403Error1` | `apiV1UploadInit403Error1Schema` | `src/models/api-v1-upload-init403-error1.ts` |
| `ApiV1UploadInit404Error1` | `apiV1UploadInit404Error1Schema` | `src/models/api-v1-upload-init404-error1.ts` |
| `ApiV1UploadInit429Error1` | `apiV1UploadInit429Error1Schema` | `src/models/api-v1-upload-init429-error1.ts` |
| `ApiV1UploadInit500Error1` | `apiV1UploadInit500Error1Schema` | `src/models/api-v1-upload-init500-error1.ts` |
| `ApiV1UploadInit502Error1` | `apiV1UploadInit502Error1Schema` | `src/models/api-v1-upload-init502-error1.ts` |
| `ApiV1UploadInit503Error1` | `apiV1UploadInit503Error1Schema` | `src/models/api-v1-upload-init503-error1.ts` |
| `ApiV1UploadInit504Error1` | `apiV1UploadInit504Error1Schema` | `src/models/api-v1-upload-init504-error1.ts` |

### uploadInitMultipartUpload

- **Signature**: `uploadInitMultipartUpload(request?: UploadApi.UploadInitMultipartUploadRequest, options?: RequestOptions): ApiPromise<ApiV1UploadMultipartInitResponse, UploadApi.UploadInitMultipartUploadError>`
- **Wire**: `POST /api/v1/upload/multipart/init`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1UploadMultipartInitResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `UploadApi.UploadInitMultipartUploadError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1UploadMultipartInit400Error1"` [400] `ApiV1UploadMultipartInit400Error1` · `"apiV1UploadMultipartInit401Error1"` [401] `ApiV1UploadMultipartInit401Error1` · `"apiV1UploadMultipartInit403Error1"` [403] `ApiV1UploadMultipartInit403Error1` · `"apiV1UploadMultipartInit404Error1"` [404] `ApiV1UploadMultipartInit404Error1` · `"apiV1UploadMultipartInit429Error1"` [429] `ApiV1UploadMultipartInit429Error1` · `"apiV1UploadMultipartInit500Error1"` [500] `ApiV1UploadMultipartInit500Error1` · `"apiV1UploadMultipartInit502Error1"` [502] `ApiV1UploadMultipartInit502Error1` · `"apiV1UploadMultipartInit503Error1"` [503] `ApiV1UploadMultipartInit503Error1` · `"apiV1UploadMultipartInit504Error1"` [504] `ApiV1UploadMultipartInit504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `UploadApi.UploadInitMultipartUploadRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1UploadMultipartInitRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1UploadMultipartInitRequest` | `apiV1UploadMultipartInitRequestSchema` | `src/models/api-v1-upload-multipart-init-request.ts` |
| `ApiV1UploadMultipartInitResponse` | `apiV1UploadMultipartInitResponseSchema` | `src/models/api-v1-upload-multipart-init-response.ts` |
| `ApiV1UploadMultipartInit400Error1` | `apiV1UploadMultipartInit400Error1Schema` | `src/models/api-v1-upload-multipart-init400-error1.ts` |
| `ApiV1UploadMultipartInit401Error1` | `apiV1UploadMultipartInit401Error1Schema` | `src/models/api-v1-upload-multipart-init401-error1.ts` |
| `ApiV1UploadMultipartInit403Error1` | `apiV1UploadMultipartInit403Error1Schema` | `src/models/api-v1-upload-multipart-init403-error1.ts` |
| `ApiV1UploadMultipartInit404Error1` | `apiV1UploadMultipartInit404Error1Schema` | `src/models/api-v1-upload-multipart-init404-error1.ts` |
| `ApiV1UploadMultipartInit429Error1` | `apiV1UploadMultipartInit429Error1Schema` | `src/models/api-v1-upload-multipart-init429-error1.ts` |
| `ApiV1UploadMultipartInit500Error1` | `apiV1UploadMultipartInit500Error1Schema` | `src/models/api-v1-upload-multipart-init500-error1.ts` |
| `ApiV1UploadMultipartInit502Error1` | `apiV1UploadMultipartInit502Error1Schema` | `src/models/api-v1-upload-multipart-init502-error1.ts` |
| `ApiV1UploadMultipartInit503Error1` | `apiV1UploadMultipartInit503Error1Schema` | `src/models/api-v1-upload-multipart-init503-error1.ts` |
| `ApiV1UploadMultipartInit504Error1` | `apiV1UploadMultipartInit504Error1Schema` | `src/models/api-v1-upload-multipart-init504-error1.ts` |

### uploadSignMultipartParts

- **Signature**: `uploadSignMultipartParts(request?: UploadApi.UploadSignMultipartPartsRequest, options?: RequestOptions): ApiPromise<ApiV1UploadMultipartSignResponse, UploadApi.UploadSignMultipartPartsError>`
- **Wire**: `POST /api/v1/upload/multipart/sign`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1UploadMultipartSignResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `UploadApi.UploadSignMultipartPartsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1UploadMultipartSign400Error1"` [400] `ApiV1UploadMultipartSign400Error1` · `"apiV1UploadMultipartSign401Error1"` [401] `ApiV1UploadMultipartSign401Error1` · `"apiV1UploadMultipartSign403Error1"` [403] `ApiV1UploadMultipartSign403Error1` · `"apiV1UploadMultipartSign404Error1"` [404] `ApiV1UploadMultipartSign404Error1` · `"apiV1UploadMultipartSign429Error1"` [429] `ApiV1UploadMultipartSign429Error1` · `"apiV1UploadMultipartSign500Error1"` [500] `ApiV1UploadMultipartSign500Error1` · `"apiV1UploadMultipartSign502Error1"` [502] `ApiV1UploadMultipartSign502Error1` · `"apiV1UploadMultipartSign503Error1"` [503] `ApiV1UploadMultipartSign503Error1` · `"apiV1UploadMultipartSign504Error1"` [504] `ApiV1UploadMultipartSign504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `UploadApi.UploadSignMultipartPartsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1UploadMultipartSignRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1UploadMultipartSignRequest` | `apiV1UploadMultipartSignRequestSchema` | `src/models/api-v1-upload-multipart-sign-request.ts` |
| `ApiV1UploadMultipartSignResponse` | `apiV1UploadMultipartSignResponseSchema` | `src/models/api-v1-upload-multipart-sign-response.ts` |
| `ApiV1UploadMultipartSign400Error1` | `apiV1UploadMultipartSign400Error1Schema` | `src/models/api-v1-upload-multipart-sign400-error1.ts` |
| `ApiV1UploadMultipartSign401Error1` | `apiV1UploadMultipartSign401Error1Schema` | `src/models/api-v1-upload-multipart-sign401-error1.ts` |
| `ApiV1UploadMultipartSign403Error1` | `apiV1UploadMultipartSign403Error1Schema` | `src/models/api-v1-upload-multipart-sign403-error1.ts` |
| `ApiV1UploadMultipartSign404Error1` | `apiV1UploadMultipartSign404Error1Schema` | `src/models/api-v1-upload-multipart-sign404-error1.ts` |
| `ApiV1UploadMultipartSign429Error1` | `apiV1UploadMultipartSign429Error1Schema` | `src/models/api-v1-upload-multipart-sign429-error1.ts` |
| `ApiV1UploadMultipartSign500Error1` | `apiV1UploadMultipartSign500Error1Schema` | `src/models/api-v1-upload-multipart-sign500-error1.ts` |
| `ApiV1UploadMultipartSign502Error1` | `apiV1UploadMultipartSign502Error1Schema` | `src/models/api-v1-upload-multipart-sign502-error1.ts` |
| `ApiV1UploadMultipartSign503Error1` | `apiV1UploadMultipartSign503Error1Schema` | `src/models/api-v1-upload-multipart-sign503-error1.ts` |
| `ApiV1UploadMultipartSign504Error1` | `apiV1UploadMultipartSign504Error1Schema` | `src/models/api-v1-upload-multipart-sign504-error1.ts` |

