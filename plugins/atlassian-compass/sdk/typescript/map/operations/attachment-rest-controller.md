<!-- Generated file — do not edit; regenerated with the SDK. -->

# AttachmentRestController — operations

Accessor: `client.attachmentRestController` · Source: `src/resources/attachment-rest-controller.ts` · 5 operations · Request and error types: namespace `AttachmentRestController`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `atlassian-compass`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteApiSpec

- **Signature**: `deleteApiSpec(request: AttachmentRestController.DeleteApiSpecRequest, options?: RequestOptions): ApiPromise<string, AttachmentRestController.DeleteApiSpecError>`
- **Wire**: `DELETE /compass/v1/component/{componentId}/api_specs`
- **Auth**: `basicAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `string` — a bare `application/json` string; the success type *is* the string
- **Error**: `AtlassianCompassError` with `kind: "api"`, an instance of `AttachmentRestController.DeleteApiSpecError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error403"` [403] `string` · `"error404"` [404] `string` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AttachmentRestController.DeleteApiSpecRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `componentId` | `path` | `string` | yes |

### deleteAttachment

- **Signature**: `deleteAttachment(request: AttachmentRestController.DeleteAttachmentRequest, options?: RequestOptions): ApiPromise<undefined, AttachmentRestController.DeleteAttachmentError>`
- **Wire**: `DELETE /compass/v1/component/{componentId}/app/{forgeAppId}/attachment/{key}`
- **Auth**: `basicAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AtlassianCompassError` with `kind: "api"`, an instance of `AttachmentRestController.DeleteAttachmentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseDto"` [400] `ErrorResponseDto` · `"errorResponseDto2"` [403] `ErrorResponseDto` · `"errorResponseDto3"` [404] `ErrorResponseDto` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AttachmentRestController.DeleteAttachmentRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `componentId` | `path` | `string` | yes |
| `forgeAppId` | `path` | `string` | yes |
| `key` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponseDto` | `errorResponseDtoSchema` | `src/models/error-response-dto.ts` |

### getAttachment

- **Signature**: `getAttachment(request: AttachmentRestController.GetAttachmentRequest, options?: RequestOptions): ApiPromise<Attachment, AttachmentRestController.GetAttachmentError>`
- **Wire**: `GET /compass/v1/component/{componentId}/app/{forgeAppId}/attachment/{key}`
- **Auth**: `basicAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Attachment`
- **Error**: `AtlassianCompassError` with `kind: "api"`, an instance of `AttachmentRestController.GetAttachmentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseDto"` [400] `ErrorResponseDto` · `"errorResponseDto2"` [403] `ErrorResponseDto` · `"errorResponseDto3"` [404] `ErrorResponseDto` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AttachmentRestController.GetAttachmentRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `componentId` | `path` | `string` | yes |
| `forgeAppId` | `path` | `string` | yes |
| `key` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Attachment` | `attachmentSchema` | `src/models/attachment.ts` |
| `ErrorResponseDto` | `errorResponseDtoSchema` | `src/models/error-response-dto.ts` |

### uploadApiSpec

- **Signature**: `uploadApiSpec(request: AttachmentRestController.UploadApiSpecRequest, options?: RequestOptions): ApiPromise<string, AttachmentRestController.UploadApiSpecError>`
- **Wire**: `PUT /compass/v1/component/{componentId}/api_specs`
- **Auth**: `basicAuth`
- **Request body**: `multipart/form-data` — every field marked `form`. `file` is a file part, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `string` — a bare `application/json` string; the success type *is* the string
- **Error**: `AtlassianCompassError` with `kind: "api"`, an instance of `AttachmentRestController.UploadApiSpecError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] `string` · `"error403"` [403] `string` · `"error422"` [422] `string` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AttachmentRestController.UploadApiSpecRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `componentId` | `path` | `string` | yes |
| `file` | `form` | `FileInput` | yes |

### uploadAttachment

- **Signature**: `uploadAttachment(request: AttachmentRestController.UploadAttachmentRequest, options?: RequestOptions): ApiPromise<Attachment, AttachmentRestController.UploadAttachmentError>`
- **Wire**: `PUT /compass/v1/component/{componentId}/app/{forgeAppId}/attachment/{key}`
- **Auth**: `basicAuth`
- **Request body**: `multipart/form-data` — every field marked `form`. `file` is a file part, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Attachment`
- **Error**: `AtlassianCompassError` with `kind: "api"`, an instance of `AttachmentRestController.UploadAttachmentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseDto"` [400] `ErrorResponseDto` · `"errorResponseDto2"` [403] `ErrorResponseDto` · `"errorResponseDto3"` [404] `ErrorResponseDto` · `"errorResponseDto4"` [422] `ErrorResponseDto` · `"errorResponseDto5"` [500] `ErrorResponseDto` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AttachmentRestController.UploadAttachmentRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `componentId` | `path` | `string` | yes |
| `forgeAppId` | `path` | `string` | yes |
| `key` | `path` | `string` | yes |
| `file` | `form` | `FileInput` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Attachment` | `attachmentSchema` | `src/models/attachment.ts` |
| `ErrorResponseDto` | `errorResponseDtoSchema` | `src/models/error-response-dto.ts` |

