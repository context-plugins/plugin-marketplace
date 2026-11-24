<!-- Generated file — do not edit; regenerated with the SDK. -->

# Attachments — operations

Accessor: `client.attachments` · Source: `src/resources/attachments.ts` · 4 operations · Request and error types: namespace `Attachments`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `asana`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createAttachmentForObject

- **Signature**: `createAttachmentForObject(request?: Attachments.CreateAttachmentForObjectRequest, options?: RequestOptions): ApiPromise<AttachmentsResponse, Attachments.CreateAttachmentForObjectError>`
- **Wire**: `POST /attachments`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: `multipart/form-data` — every field marked `form`. `file` is a file part, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AttachmentsResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Attachments.CreateAttachmentForObjectError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Attachments.CreateAttachmentForObjectRequest` (8):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `resourceSubtype` | `form` | `resource_subtype` | `ResourceSubtype1` | no | — |
| `file` | `form` | — | `FileInput` | no | — |
| `parent` | `form` | — | `string` | no | — |
| `url` | `form` | — | `string` | no | — |
| `name` | `form` | — | `string` | no | — |
| `connectToApp` | `form` | `connect_to_app` | `boolean` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ResourceSubtype1` | `resourceSubtype1Schema` | `src/models/resource-subtype1.ts` |
| `AttachmentsResponse` | `attachmentsResponseSchema` | `src/models/attachments-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### deleteAttachment

- **Signature**: `deleteAttachment(request: Attachments.DeleteAttachmentRequest, options?: RequestOptions): ApiPromise<AttachmentsResponse1, Attachments.DeleteAttachmentError>`
- **Wire**: `DELETE /attachments/{attachment_gid}`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AttachmentsResponse1`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Attachments.DeleteAttachmentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Attachments.DeleteAttachmentRequest` (3):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `attachmentGid` | `path` | `attachment_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |

| Type | Schema value | Source |
| --- | --- | --- |
| `AttachmentsResponse1` | `attachmentsResponse1Schema` | `src/models/attachments-response1.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getAttachment

- **Signature**: `getAttachment(request: Attachments.GetAttachmentRequest, options?: RequestOptions): ApiPromise<AttachmentsResponse, Attachments.GetAttachmentError>`
- **Wire**: `GET /attachments/{attachment_gid}`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AttachmentsResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Attachments.GetAttachmentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [402] `ErrorResponse` · `"errorResponse4"` [403] `ErrorResponse` · `"errorResponse5"` [404] `ErrorResponse` · `"errorResponse6"` [424] `ErrorResponse` · `"errorResponse7"` [500] `ErrorResponse` · `"errorResponse8"` [501] `ErrorResponse` · `"errorResponse9"` [503] `ErrorResponse` · `"errorResponse10"` [504] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Attachments.GetAttachmentRequest` (3):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `attachmentGid` | `path` | `attachment_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |

| Type | Schema value | Source |
| --- | --- | --- |
| `AttachmentsResponse` | `attachmentsResponseSchema` | `src/models/attachments-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getAttachmentsForObject

- **Signature**: `getAttachmentsForObject(request: Attachments.GetAttachmentsForObjectRequest, options?: RequestOptions): ApiPromise<AttachmentsResponse2, Attachments.GetAttachmentsForObjectError>`
- **Wire**: `GET /attachments`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AttachmentsResponse2`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Attachments.GetAttachmentsForObjectError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Attachments.GetAttachmentsForObjectRequest` (5):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `parent` | `query` | — | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `limit` | `query` | — | `number` | no | — |
| `offset` | `query` | — | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `AttachmentsResponse2` | `attachmentsResponse2Schema` | `src/models/attachments-response2.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

