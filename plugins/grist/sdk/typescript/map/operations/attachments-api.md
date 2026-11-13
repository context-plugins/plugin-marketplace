<!-- Generated file — do not edit; regenerated with the SDK. -->

# AttachmentsApi — operations

Accessor: `client.attachmentsApi` · Source: `src/resources/attachments-api.ts` · 14 operations · Request types: namespace `AttachmentsApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `grist-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### downloadAttachment

- **Signature**: `downloadAttachment(request: AttachmentsApi.DownloadAttachmentRequest, options?: RequestOptions): ApiPromise<DocsAttachmentsDownloadResponse, ApiError>`
- **Wire**: `GET /docs/{docId}/attachments/{attachmentId}/download`
- **Auth**: any of `apiKey`, `oAuth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DocsAttachmentsDownloadResponse`
- **Error**: `GristApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `AttachmentsApi.DownloadAttachmentRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `docId` | `path` | `string` | yes |
| `attachmentId` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DocsAttachmentsDownloadResponse` | `docsAttachmentsDownloadResponseSchema` | `src/models/unions/docs-attachments-download-response.ts` |

### downloadAttachments

- **Signature**: `downloadAttachments(request: AttachmentsApi.DownloadAttachmentsRequest, options?: RequestOptions): ApiPromise<DocsAttachmentsArchiveResponse1, ApiError>`
- **Wire**: `GET /docs/{docId}/attachments/archive`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DocsAttachmentsArchiveResponse1`
- **Error**: `GristApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `AttachmentsApi.DownloadAttachmentsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `docId` | `path` | `string` | yes |
| `format` | `query` | `Format12` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format12` | `format12Schema` | `src/models/format12.ts` |
| `DocsAttachmentsArchiveResponse1` | `docsAttachmentsArchiveResponse1Schema` | `src/models/unions/docs-attachments-archive-response1.ts` |

### getAttachmentMetadata

- **Signature**: `getAttachmentMetadata(request: AttachmentsApi.GetAttachmentMetadataRequest, options?: RequestOptions): ApiPromise<AttachmentMetadata, ApiError>`
- **Wire**: `GET /docs/{docId}/attachments/{attachmentId}`
- **Auth**: any of `apiKey`, `oAuth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AttachmentMetadata`
- **Error**: `GristApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `AttachmentsApi.GetAttachmentMetadataRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `docId` | `path` | `string` | yes |
| `attachmentId` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AttachmentMetadata` | `attachmentMetadataSchema` | `src/models/attachment-metadata.ts` |

### getAttachmentTransferStatus

- **Signature**: `getAttachmentTransferStatus(request: AttachmentsApi.GetAttachmentTransferStatusRequest, options?: RequestOptions): ApiPromise<AttachmentsTransferStatus, ApiError>`
- **Wire**: `GET /docs/{docId}/attachments/transferStatus`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AttachmentsTransferStatus`
- **Error**: `GristApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `AttachmentsApi.GetAttachmentTransferStatusRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `docId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AttachmentsTransferStatus` | `attachmentsTransferStatusSchema` | `src/models/attachments-transfer-status.ts` |

### getDocumentAttachmentStore

- **Signature**: `getDocumentAttachmentStore(request: AttachmentsApi.GetDocumentAttachmentStoreRequest, options?: RequestOptions): ApiPromise<DocumentStoreSetting, ApiError>`
- **Wire**: `GET /docs/{docId}/attachments/store`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DocumentStoreSetting`
- **Error**: `GristApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `AttachmentsApi.GetDocumentAttachmentStoreRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `docId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DocumentStoreSetting` | `documentStoreSettingSchema` | `src/models/document-store-setting.ts` |

### listAttachmentStores

- **Signature**: `listAttachmentStores(request: AttachmentsApi.ListAttachmentStoresRequest, options?: RequestOptions): ApiPromise<DocumentStoreSetting, ApiError>`
- **Wire**: `GET /docs/{docId}/attachments/stores`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DocumentStoreSetting`
- **Error**: `GristApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `AttachmentsApi.ListAttachmentStoresRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `docId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DocumentStoreSetting` | `documentStoreSettingSchema` | `src/models/document-store-setting.ts` |

### listAttachments

- **Signature**: `listAttachments(request: AttachmentsApi.ListAttachmentsRequest, options?: RequestOptions): ApiPromise<AttachmentMetadataList, ApiError>`
- **Wire**: `GET /docs/{docId}/attachments`
- **Auth**: any of `apiKey`, `oAuth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AttachmentMetadataList`
- **Error**: `GristApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `AttachmentsApi.ListAttachmentsRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `docId` | `path` | — | `string` | yes |
| `filter` | `query` | — | `string` | no |
| `sort` | `query` | — | `string` | no |
| `limit` | `query` | — | `number` | no |
| `xSort` | `header` | `X-Sort` | `string` | no |
| `xLimit` | `header` | `X-Limit` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AttachmentMetadataList` | `attachmentMetadataListSchema` | `src/models/attachment-metadata-list.ts` |

### removeUnusedAttachments

- **Signature**: `removeUnusedAttachments(request: AttachmentsApi.RemoveUnusedAttachmentsRequest, options?: RequestOptions): ApiPromise<DocsAttachmentsRemoveUnusedResponse, ApiError>`
- **Wire**: `POST /docs/{docId}/attachments/removeUnused`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DocsAttachmentsRemoveUnusedResponse`
- **Error**: `GristApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `AttachmentsApi.RemoveUnusedAttachmentsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `docId` | `path` | `string` | yes |
| `expiredOnly` | `query` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DocsAttachmentsRemoveUnusedResponse` | `docsAttachmentsRemoveUnusedResponseSchema` | `src/models/unions/docs-attachments-remove-unused-response.ts` |

### setDocumentAttachmentStore

- **Signature**: `setDocumentAttachmentStore(request: AttachmentsApi.SetDocumentAttachmentStoreRequest, options?: RequestOptions): ApiPromise<DocsAttachmentsStoreResponse, ApiError>`
- **Wire**: `POST /docs/{docId}/attachments/store`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DocsAttachmentsStoreResponse`
- **Error**: `GristApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `AttachmentsApi.SetDocumentAttachmentStoreRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `docId` | `path` | `string` | yes |
| `body` | `body` | `DocumentStoreSetting` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DocumentStoreSetting` | `documentStoreSettingSchema` | `src/models/document-store-setting.ts` |
| `DocsAttachmentsStoreResponse` | `docsAttachmentsStoreResponseSchema` | `src/models/docs-attachments-store-response.ts` |

### startAttachmentTransfer

- **Signature**: `startAttachmentTransfer(request: AttachmentsApi.StartAttachmentTransferRequest, options?: RequestOptions): ApiPromise<AttachmentsTransferStatus, ApiError>`
- **Wire**: `POST /docs/{docId}/attachments/transferAll`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AttachmentsTransferStatus`
- **Error**: `GristApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `AttachmentsApi.StartAttachmentTransferRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `docId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AttachmentsTransferStatus` | `attachmentsTransferStatusSchema` | `src/models/attachments-transfer-status.ts` |

### updateUsedAttachments

- **Signature**: `updateUsedAttachments(request: AttachmentsApi.UpdateUsedAttachmentsRequest, options?: RequestOptions): ApiPromise<DocsAttachmentsUpdateUsedResponse, ApiError>`
- **Wire**: `POST /docs/{docId}/attachments/updateUsed`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DocsAttachmentsUpdateUsedResponse`
- **Error**: `GristApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `AttachmentsApi.UpdateUsedAttachmentsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `docId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DocsAttachmentsUpdateUsedResponse` | `docsAttachmentsUpdateUsedResponseSchema` | `src/models/unions/docs-attachments-update-used-response.ts` |

### uploadAttachments

- **Signature**: `uploadAttachments(request: AttachmentsApi.UploadAttachmentsRequest, options?: RequestOptions): ApiPromise<number[], ApiError>`
- **Wire**: `POST /docs/{docId}/attachments`
- **Auth**: any of `apiKey`, `oAuth2` — the first one configured is sent
- **Request body**: `multipart/form-data` — every field marked `form`. `upload` is a file part, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `number[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `GristApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `AttachmentsApi.UploadAttachmentsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `docId` | `path` | `string` | yes |
| `upload` | `form` | `FileInput` | no |

### uploadMissingAttachments

- **Signature**: `uploadMissingAttachments(request: AttachmentsApi.UploadMissingAttachmentsRequest, options?: RequestOptions): ApiPromise<DocsAttachmentsArchiveResponse, ApiError>`
- **Wire**: `POST /docs/{docId}/attachments/archive`
- **Auth**: `apiKey`
- **Request body**: `multipart/form-data` — every field marked `form`. `file` is a file part, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DocsAttachmentsArchiveResponse`
- **Error**: `GristApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `AttachmentsApi.UploadMissingAttachmentsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `docId` | `path` | `string` | yes |
| `file` | `form` | `FileInput` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DocsAttachmentsArchiveResponse` | `docsAttachmentsArchiveResponseSchema` | `src/models/docs-attachments-archive-response.ts` |

### verifyAttachmentFiles

- **Signature**: `verifyAttachmentFiles(request: AttachmentsApi.VerifyAttachmentFilesRequest, options?: RequestOptions): ApiPromise<DocsAttachmentsVerifyFilesResponse, ApiError>`
- **Wire**: `POST /docs/{docId}/attachments/verifyFiles`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DocsAttachmentsVerifyFilesResponse`
- **Error**: `GristApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `AttachmentsApi.VerifyAttachmentFilesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `docId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DocsAttachmentsVerifyFilesResponse` | `docsAttachmentsVerifyFilesResponseSchema` | `src/models/unions/docs-attachments-verify-files-response.ts` |

