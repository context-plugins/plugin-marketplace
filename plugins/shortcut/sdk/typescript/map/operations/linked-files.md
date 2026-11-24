<!-- Generated file — do not edit; regenerated with the SDK. -->

# LinkedFiles — operations

Accessor: `client.linkedFiles` · Source: `src/resources/linked-files.ts` · 5 operations · Request and error types: namespace `LinkedFiles`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `shortcut`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createLinkedFile

- **Signature**: `createLinkedFile(request: LinkedFiles.CreateLinkedFileRequest, options?: RequestOptions): ApiPromise<LinkedFile, LinkedFiles.CreateLinkedFileError>`
- **Wire**: `POST /api/v3/linked-files`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `LinkedFile`
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `LinkedFiles.CreateLinkedFileError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LinkedFiles.CreateLinkedFileRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateLinkedFile` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateLinkedFile` | `createLinkedFileSchema` | `src/models/create-linked-file.ts` |
| `LinkedFile` | `linkedFileSchema` | `src/models/linked-file.ts` |

### deleteLinkedFile

- **Signature**: `deleteLinkedFile(request: LinkedFiles.DeleteLinkedFileRequest, options?: RequestOptions): ApiPromise<undefined, LinkedFiles.DeleteLinkedFileError>`
- **Wire**: `DELETE /api/v3/linked-files/{linked-file-public-id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `LinkedFiles.DeleteLinkedFileError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LinkedFiles.DeleteLinkedFileRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `linkedFilePublicId` | `path` | `linked-file-public-id` | `number` | yes |

### getLinkedFile

- **Signature**: `getLinkedFile(request: LinkedFiles.GetLinkedFileRequest, options?: RequestOptions): ApiPromise<LinkedFile, LinkedFiles.GetLinkedFileError>`
- **Wire**: `GET /api/v3/linked-files/{linked-file-public-id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `LinkedFile`
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `LinkedFiles.GetLinkedFileError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LinkedFiles.GetLinkedFileRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `linkedFilePublicId` | `path` | `linked-file-public-id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LinkedFile` | `linkedFileSchema` | `src/models/linked-file.ts` |

### listLinkedFiles

- **Signature**: `listLinkedFiles(options?: RequestOptions): ApiPromise<LinkedFile[], LinkedFiles.ListLinkedFilesError>`
- **Wire**: `GET /api/v3/linked-files`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `LinkedFile[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `LinkedFiles.ListLinkedFilesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `LinkedFile` | `linkedFileSchema` | `src/models/linked-file.ts` |

### updateLinkedFile

- **Signature**: `updateLinkedFile(request: LinkedFiles.UpdateLinkedFileRequest, options?: RequestOptions): ApiPromise<LinkedFile, LinkedFiles.UpdateLinkedFileError>`
- **Wire**: `PUT /api/v3/linked-files/{linked-file-public-id}`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `LinkedFile`
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `LinkedFiles.UpdateLinkedFileError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LinkedFiles.UpdateLinkedFileRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `linkedFilePublicId` | `path` | `linked-file-public-id` | `number` | yes |
| `body` | `body` | — | `UpdateLinkedFile` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateLinkedFile` | `updateLinkedFileSchema` | `src/models/update-linked-file.ts` |
| `LinkedFile` | `linkedFileSchema` | `src/models/linked-file.ts` |

