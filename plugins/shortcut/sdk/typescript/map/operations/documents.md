<!-- Generated file — do not edit; regenerated with the SDK. -->

# Documents — operations

Accessor: `client.documents` · Source: `src/resources/documents.ts` · 8 operations · Request and error types: namespace `Documents`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `shortcut`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createDoc

- **Signature**: `createDoc(request: Documents.CreateDocRequest, options?: RequestOptions): ApiPromise<DocSlim, Documents.CreateDocError>`
- **Wire**: `POST /api/v3/documents`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DocSlim`
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Documents.CreateDocError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"disabledFeatureError"` [403] `DisabledFeatureError` · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Documents.CreateDocRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateDoc` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateDoc` | `createDocSchema` | `src/models/create-doc.ts` |
| `DocSlim` | `docSlimSchema` | `src/models/doc-slim.ts` |
| `DisabledFeatureError` | `disabledFeatureErrorSchema` | `src/models/disabled-feature-error.ts` |

### deleteDoc

- **Signature**: `deleteDoc(request: Documents.DeleteDocRequest, options?: RequestOptions): ApiPromise<undefined, Documents.DeleteDocError>`
- **Wire**: `DELETE /api/v3/documents/{doc-public-id}`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Documents.DeleteDocError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"disabledFeatureError"` [403] `DisabledFeatureError` · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Documents.DeleteDocRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `docPublicId` | `path` | `doc-public-id` | `string` | yes |
| `body` | `body` | — | `GetDoc` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetDoc` | `getDocSchema` | `src/models/get-doc.ts` |
| `DisabledFeatureError` | `disabledFeatureErrorSchema` | `src/models/disabled-feature-error.ts` |

### getDoc

- **Signature**: `getDoc(request: Documents.GetDocRequest, options?: RequestOptions): ApiPromise<Doc, Documents.GetDocError>`
- **Wire**: `GET /api/v3/documents/{doc-public-id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Doc`
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Documents.GetDocError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"disabledFeatureError"` [403] `DisabledFeatureError` · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Documents.GetDocRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `docPublicId` | `path` | `doc-public-id` | `string` | yes |
| `contentFormat` | `query` | `content_format` | `ContentFormat3` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentFormat3` | `contentFormat3Schema` | `src/models/content-format3.ts` |
| `Doc` | `docSchema` | `src/models/doc.ts` |
| `DisabledFeatureError` | `disabledFeatureErrorSchema` | `src/models/disabled-feature-error.ts` |

### linkDocumentToEpic

- **Signature**: `linkDocumentToEpic(request: Documents.LinkDocumentToEpicRequest, options?: RequestOptions): ApiPromise<undefined, Documents.LinkDocumentToEpicError>`
- **Wire**: `PUT /api/v3/documents/{doc-public-id}/epics/{epic-public-id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Documents.LinkDocumentToEpicError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"disabledFeatureError"` [403] `DisabledFeatureError` · `"error404"` [404] no body · `"unprocessableError"` [422] `UnprocessableError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Documents.LinkDocumentToEpicRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `docPublicId` | `path` | `doc-public-id` | `string` | yes |
| `epicPublicId` | `path` | `epic-public-id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DisabledFeatureError` | `disabledFeatureErrorSchema` | `src/models/disabled-feature-error.ts` |
| `UnprocessableError` | `unprocessableErrorSchema` | `src/models/unprocessable-error.ts` |

### listDocs

- **Signature**: `listDocs(options?: RequestOptions): ApiPromise<DocSlim[], Documents.ListDocsError>`
- **Wire**: `GET /api/v3/documents`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DocSlim[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Documents.ListDocsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"disabledFeatureError"` [403] `DisabledFeatureError` · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `DocSlim` | `docSlimSchema` | `src/models/doc-slim.ts` |
| `DisabledFeatureError` | `disabledFeatureErrorSchema` | `src/models/disabled-feature-error.ts` |

### listDocumentEpics

- **Signature**: `listDocumentEpics(request: Documents.ListDocumentEpicsRequest, options?: RequestOptions): ApiPromise<EpicSlim[], Documents.ListDocumentEpicsError>`
- **Wire**: `GET /api/v3/documents/{doc-public-id}/epics`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EpicSlim[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Documents.ListDocumentEpicsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"disabledFeatureError"` [403] `DisabledFeatureError` · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Documents.ListDocumentEpicsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `docPublicId` | `path` | `doc-public-id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `EpicSlim` | `epicSlimSchema` | `src/models/epic-slim.ts` |
| `DisabledFeatureError` | `disabledFeatureErrorSchema` | `src/models/disabled-feature-error.ts` |

### unlinkDocumentFromEpic

- **Signature**: `unlinkDocumentFromEpic(request: Documents.UnlinkDocumentFromEpicRequest, options?: RequestOptions): ApiPromise<undefined, Documents.UnlinkDocumentFromEpicError>`
- **Wire**: `DELETE /api/v3/documents/{doc-public-id}/epics/{epic-public-id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Documents.UnlinkDocumentFromEpicError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"disabledFeatureError"` [403] `DisabledFeatureError` · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Documents.UnlinkDocumentFromEpicRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `docPublicId` | `path` | `doc-public-id` | `string` | yes |
| `epicPublicId` | `path` | `epic-public-id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DisabledFeatureError` | `disabledFeatureErrorSchema` | `src/models/disabled-feature-error.ts` |

### updateDoc

- **Signature**: `updateDoc(request: Documents.UpdateDocRequest, options?: RequestOptions): ApiPromise<Doc, Documents.UpdateDocError>`
- **Wire**: `PUT /api/v3/documents/{doc-public-id}`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Doc`
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Documents.UpdateDocError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"disabledFeatureError"` [403] `DisabledFeatureError` · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Documents.UpdateDocRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `docPublicId` | `path` | `doc-public-id` | `string` | yes |
| `body` | `body` | — | `UpdateDoc` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateDoc` | `updateDocSchema` | `src/models/update-doc.ts` |
| `Doc` | `docSchema` | `src/models/doc.ts` |
| `DisabledFeatureError` | `disabledFeatureErrorSchema` | `src/models/disabled-feature-error.ts` |

