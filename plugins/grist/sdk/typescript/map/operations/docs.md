<!-- Generated file — do not edit; regenerated with the SDK. -->

# Docs — operations

Accessor: `client.docs` · Source: `src/resources/docs.ts` · 42 operations · Request and error types: namespace `Docs`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `grist-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### applyProposal

- **Signature**: `applyProposal(request: Docs.ApplyProposalRequest, options?: RequestOptions): ApiPromise<DocsProposalsApplyResponse, ApiError>`
- **Wire**: `POST /docs/{docId}/proposals/{proposalId}/apply`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DocsProposalsApplyResponse`
- **Error**: `GristApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Docs.ApplyProposalRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `docId` | `path` | `string` | yes |
| `proposalId` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DocsProposalsApplyResponse` | `docsProposalsApplyResponseSchema` | `src/models/docs-proposals-apply-response.ts` |

### applyUserActions

- **Signature**: `applyUserActions(request: Docs.ApplyUserActionsRequest, options?: RequestOptions): ApiPromise<DocsApplyResponse, ApiError>`
- **Wire**: `POST /docs/{docId}/apply`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field, a bare top-level JSON array
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DocsApplyResponse`
- **Error**: `GristApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Docs.ApplyUserActionsRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `docId` | `path` | `string` | yes |
| `noparse` | `query` | `boolean` | no |
| `body` | `body` | `Record<string, unknown>[][]` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DocsApplyResponse` | `docsApplyResponseSchema` | `src/models/docs-apply-response.ts` |

### assignDoc

- **Signature**: `assignDoc(request: Docs.AssignDocRequest, options?: RequestOptions): ApiPromise<boolean, ApiError>`
- **Wire**: `POST /docs/{docId}/assign`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `boolean` — a bare `application/json` boolean; the success type *is* the boolean
- **Error**: `GristApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Docs.AssignDocRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `docId` | `path` | `string` | yes |
| `group` | `query` | `string` | no |

### compareDocuments

- **Signature**: `compareDocuments(request: Docs.CompareDocumentsRequest, options?: RequestOptions): ApiPromise<DocComparison, Docs.CompareDocumentsError>`
- **Wire**: `GET /docs/{docId}/compare/{docId2}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DocComparison`
- **Error**: `GristApiError` with `kind: "api"`, an instance of `Docs.CompareDocumentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"gristError"` [403] `GristError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Docs.CompareDocumentsRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `docId` | `path` | `string` | yes |
| `docId2` | `path` | `string` | yes |
| `detail` | `query` | `boolean` | no |
| `maxRows` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DocComparison` | `docComparisonSchema` | `src/models/doc-comparison.ts` |
| `GristError` | `gristErrorSchema` | `src/models/grist-error.ts` |

### compareVersions

- **Signature**: `compareVersions(request: Docs.CompareVersionsRequest, options?: RequestOptions): ApiPromise<DocComparison, Docs.CompareVersionsError>`
- **Wire**: `GET /docs/{docId}/compare`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DocComparison`
- **Error**: `GristApiError` with `kind: "api"`, an instance of `Docs.CompareVersionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"gristError"` [403] `GristError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Docs.CompareVersionsRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `docId` | `path` | `string` | yes |
| `left` | `query` | `string` | no |
| `right` | `query` | `string` | no |
| `maxRows` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DocComparison` | `docComparisonSchema` | `src/models/doc-comparison.ts` |
| `GristError` | `gristErrorSchema` | `src/models/grist-error.ts` |

### copyDoc

- **Signature**: `copyDoc(request: Docs.CopyDocRequest, options?: RequestOptions): ApiPromise<string, ApiError>`
- **Wire**: `POST /docs/{docId}/copy`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `string` — a bare `application/json` string; the success type *is* the string
- **Error**: `GristApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Docs.CopyDocRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `docId` | `path` | `string` | yes |
| `body` | `body` | `DocsCopyRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DocsCopyRequest` | `docsCopyRequestSchema` | `src/models/docs-copy-request.ts` |

### createDoc

- **Signature**: `createDoc(request: Docs.CreateDocRequest, options?: RequestOptions): ApiPromise<string, ApiError>`
- **Wire**: `POST /workspaces/{workspaceId}/docs`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `string` — a bare `application/json` string; the success type *is* the string
- **Error**: `GristApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Docs.CreateDocRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `workspaceId` | `path` | `number` | yes |
| `body` | `body` | `DocParameters` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DocParameters` | `docParametersSchema` | `src/models/doc-parameters.ts` |

### createDocUnified

- **Signature**: `createDocUnified(request?: Docs.CreateDocUnifiedRequest, options?: RequestOptions): ApiPromise<string, ApiError>`
- **Wire**: `POST /docs`
- **Auth**: `apiKey`
- **Request body**: `multipart/form-data` — every field marked `form`. `upload` is a file part, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `string` — a bare `application/json` string; the success type *is* the string
- **Error**: `GristApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Docs.CreateDocUnifiedRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `upload` | `form` | `FileInput` | no |
| `workspaceId` | `form` | `number` | no |
| `documentName` | `form` | `string` | no |

### createProposal

- **Signature**: `createProposal(request: Docs.CreateProposalRequest, options?: RequestOptions): ApiPromise<DocsProposeResponse, Docs.CreateProposalError>`
- **Wire**: `POST /docs/{docId}/propose`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DocsProposeResponse`
- **Error**: `GristApiError` with `kind: "api"`, an instance of `Docs.CreateProposalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"gristError"` [400] `GristError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Docs.CreateProposalRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `docId` | `path` | `string` | yes |
| `body` | `body` | `DocsProposeRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DocsProposeRequest` | `docsProposeRequestSchema` | `src/models/docs-propose-request.ts` |
| `DocsProposeResponse` | `docsProposeResponseSchema` | `src/models/docs-propose-response.ts` |
| `GristError` | `gristErrorSchema` | `src/models/grist-error.ts` |

### deleteActions

- **Signature**: `deleteActions(request: Docs.DeleteActionsRequest, options?: RequestOptions): ApiPromise<DocsStatesRemoveResponse, ApiError>`
- **Wire**: `POST /docs/{docId}/states/remove`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DocsStatesRemoveResponse`
- **Error**: `GristApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Docs.DeleteActionsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `docId` | `path` | `string` | yes |
| `body` | `body` | `DocsStatesRemoveRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DocsStatesRemoveRequest` | `docsStatesRemoveRequestSchema` | `src/models/docs-states-remove-request.ts` |
| `DocsStatesRemoveResponse` | `docsStatesRemoveResponseSchema` | `src/models/unions/docs-states-remove-response.ts` |

### deleteDoc

- **Signature**: `deleteDoc(request: Docs.DeleteDocRequest, options?: RequestOptions): ApiPromise<DocsResponse, ApiError>`
- **Wire**: `DELETE /docs/{docId}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DocsResponse`
- **Error**: `GristApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Docs.DeleteDocRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `docId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DocsResponse` | `docsResponseSchema` | `src/models/unions/docs-response.ts` |

### describeDoc

- **Signature**: `describeDoc(request: Docs.DescribeDocRequest, options?: RequestOptions): ApiPromise<DocWithWorkspace, ApiError>`
- **Wire**: `GET /docs/{docId}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DocWithWorkspace`
- **Error**: `GristApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Docs.DescribeDocRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `docId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DocWithWorkspace` | `docWithWorkspaceSchema` | `src/models/doc-with-workspace.ts` |

### disableDoc

- **Signature**: `disableDoc(request: Docs.DisableDocRequest, options?: RequestOptions): ApiPromise<DocsDisableResponse, Docs.DisableDocError>`
- **Wire**: `POST /docs/{docId}/disable`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DocsDisableResponse`
- **Error**: `GristApiError` with `kind: "api"`, an instance of `Docs.DisableDocError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"gristError"` [403] `GristError` · `"gristError2"` [404] `GristError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Docs.DisableDocRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `docId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DocsDisableResponse` | `docsDisableResponseSchema` | `src/models/unions/docs-disable-response.ts` |
| `GristError` | `gristErrorSchema` | `src/models/grist-error.ts` |

### downloadDoc

- **Signature**: `downloadDoc(request: Docs.DownloadDocRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `GET /docs/{docId}/download`
- **Auth**: any of `apiKey`, `oAuth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `GristApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Docs.DownloadDocRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `docId` | `path` | `string` | yes |
| `nohistory` | `query` | `boolean` | no |
| `template` | `query` | `boolean` | no |

### downloadDocCsv

- **Signature**: `downloadDocCsv(request: Docs.DownloadDocCsvRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `GET /docs/{docId}/download/csv`
- **Auth**: any of `apiKey`, `oAuth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `GristApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Docs.DownloadDocCsvRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `docId` | `path` | `string` | yes |
| `tableId` | `query` | `string` | yes |
| `header` | `query` | `Header` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Header` | `headerSchema` | `src/models/header.ts` |

### downloadDocDsv

- **Signature**: `downloadDocDsv(request: Docs.DownloadDocDsvRequest, options?: RequestOptions): ApiPromise<string, ApiError>`
- **Wire**: `GET /docs/{docId}/download/dsv`
- **Auth**: any of `apiKey`, `oAuth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `string` — `text/plain;charset=utf-8`, decoded by the plain-text scalar decoder, not by a model
- **Error**: `GristApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Docs.DownloadDocDsvRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `docId` | `path` | `string` | yes |
| `tableId` | `query` | `string` | yes |
| `header` | `query` | `Header` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Header` | `headerSchema` | `src/models/header.ts` |

### downloadDocTsv

- **Signature**: `downloadDocTsv(request: Docs.DownloadDocTsvRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `GET /docs/{docId}/download/tsv`
- **Auth**: any of `apiKey`, `oAuth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `GristApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Docs.DownloadDocTsvRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `docId` | `path` | `string` | yes |
| `tableId` | `query` | `string` | yes |
| `header` | `query` | `Header` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Header` | `headerSchema` | `src/models/header.ts` |

### downloadDocXlsx

- **Signature**: `downloadDocXlsx(request: Docs.DownloadDocXlsxRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `GET /docs/{docId}/download/xlsx`
- **Auth**: any of `apiKey`, `oAuth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `GristApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Docs.DownloadDocXlsxRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `docId` | `path` | `string` | yes |
| `header` | `query` | `Header` | no |
| `tableId` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Header` | `headerSchema` | `src/models/header.ts` |

### downloadTableSchema

- **Signature**: `downloadTableSchema(request: Docs.DownloadTableSchemaRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `GET /docs/{docId}/download/table-schema`
- **Auth**: any of `apiKey`, `oAuth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `GristApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Docs.DownloadTableSchemaRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `docId` | `path` | `string` | yes |
| `tableId` | `query` | `string` | yes |
| `header` | `query` | `Header` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Header` | `headerSchema` | `src/models/header.ts` |

### enableDoc

- **Signature**: `enableDoc(request: Docs.EnableDocRequest, options?: RequestOptions): ApiPromise<DocsEnableResponse, Docs.EnableDocError>`
- **Wire**: `POST /docs/{docId}/enable`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DocsEnableResponse`
- **Error**: `GristApiError` with `kind: "api"`, an instance of `Docs.EnableDocError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"gristError"` [403] `GristError` · `"gristError2"` [404] `GristError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Docs.EnableDocRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `docId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DocsEnableResponse` | `docsEnableResponseSchema` | `src/models/unions/docs-enable-response.ts` |
| `GristError` | `gristErrorSchema` | `src/models/grist-error.ts` |

### flushDoc

- **Signature**: `flushDoc(request: Docs.FlushDocRequest, options?: RequestOptions): ApiPromise<boolean, ApiError>`
- **Wire**: `POST /docs/{docId}/flush`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `boolean` — a bare `application/json` boolean; the success type *is* the boolean
- **Error**: `GristApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Docs.FlushDocRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `docId` | `path` | `string` | yes |

### forceReload

- **Signature**: `forceReload(request: Docs.ForceReloadRequest, options?: RequestOptions): ApiPromise<DocsForceReloadResponse, ApiError>`
- **Wire**: `POST /docs/{docId}/force-reload`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DocsForceReloadResponse`
- **Error**: `GristApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Docs.ForceReloadRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `docId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DocsForceReloadResponse` | `docsForceReloadResponseSchema` | `src/models/unions/docs-force-reload-response.ts` |

### forkDoc

- **Signature**: `forkDoc(request: Docs.ForkDocRequest, options?: RequestOptions): ApiPromise<DocsForkResponse, Docs.ForkDocError>`
- **Wire**: `POST /docs/{docId}/fork`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DocsForkResponse`
- **Error**: `GristApiError` with `kind: "api"`, an instance of `Docs.ForkDocError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"gristError"` [400] `GristError` · `"gristError2"` [403] `GristError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Docs.ForkDocRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `docId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DocsForkResponse` | `docsForkResponseSchema` | `src/models/docs-fork-response.ts` |
| `GristError` | `gristErrorSchema` | `src/models/grist-error.ts` |

### getStates

- **Signature**: `getStates(request: Docs.GetStatesRequest, options?: RequestOptions): ApiPromise<DocsStatesResponse, ApiError>`
- **Wire**: `GET /docs/{docId}/states`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DocsStatesResponse`
- **Error**: `GristApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Docs.GetStatesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `docId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DocsStatesResponse` | `docsStatesResponseSchema` | `src/models/docs-states-response.ts` |

### getTimingStatus

- **Signature**: `getTimingStatus(request: Docs.GetTimingStatusRequest, options?: RequestOptions): ApiPromise<DocsTimingResponse, ApiError>`
- **Wire**: `GET /docs/{docId}/timing`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DocsTimingResponse`
- **Error**: `GristApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Docs.GetTimingStatusRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `docId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DocsTimingResponse` | `docsTimingResponseSchema` | `src/models/docs-timing-response.ts` |

### getUsersForViewAs

- **Signature**: `getUsersForViewAs(request: Docs.GetUsersForViewAsRequest, options?: RequestOptions): ApiPromise<DocsUsersForViewAsResponse, ApiError>`
- **Wire**: `GET /docs/{docId}/usersForViewAs`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DocsUsersForViewAsResponse`
- **Error**: `GristApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Docs.GetUsersForViewAsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `docId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DocsUsersForViewAsResponse` | `docsUsersForViewAsResponseSchema` | `src/models/docs-users-for-view-as-response.ts` |

### importDoc

- **Signature**: `importDoc(request: Docs.ImportDocRequest, options?: RequestOptions): ApiPromise<WorkspacesImportResponse, ApiError>`
- **Wire**: `POST /workspaces/{workspaceId}/import`
- **Auth**: `apiKey`
- **Request body**: `multipart/form-data` — every field marked `form`. `upload` is a file part, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `WorkspacesImportResponse`
- **Error**: `GristApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Docs.ImportDocRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `workspaceId` | `path` | `number` | yes |
| `upload` | `form` | `FileInput` | no |
| `documentName` | `form` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `WorkspacesImportResponse` | `workspacesImportResponseSchema` | `src/models/workspaces-import-response.ts` |

### listDocAccess

- **Signature**: `listDocAccess(request: Docs.ListDocAccessRequest, options?: RequestOptions): ApiPromise<DocAccessRead, ApiError>`
- **Wire**: `GET /docs/{docId}/access`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DocAccessRead`
- **Error**: `GristApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Docs.ListDocAccessRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `docId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DocAccessRead` | `docAccessReadSchema` | `src/models/doc-access-read.ts` |

### listProposals

- **Signature**: `listProposals(request: Docs.ListProposalsRequest, options?: RequestOptions): ApiPromise<DocsProposalsResponse, ApiError>`
- **Wire**: `GET /docs/{docId}/proposals`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DocsProposalsResponse`
- **Error**: `GristApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Docs.ListProposalsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `docId` | `path` | `string` | yes |
| `outgoing` | `query` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DocsProposalsResponse` | `docsProposalsResponseSchema` | `src/models/docs-proposals-response.ts` |

### listSnapshots

- **Signature**: `listSnapshots(request: Docs.ListSnapshotsRequest, options?: RequestOptions): ApiPromise<DocsSnapshotsResponse, ApiError>`
- **Wire**: `GET /docs/{docId}/snapshots`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DocsSnapshotsResponse`
- **Error**: `GristApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Docs.ListSnapshotsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `docId` | `path` | `string` | yes |
| `raw` | `query` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DocsSnapshotsResponse` | `docsSnapshotsResponseSchema` | `src/models/docs-snapshots-response.ts` |

### modifyDoc

- **Signature**: `modifyDoc(request: Docs.ModifyDocRequest, options?: RequestOptions): ApiPromise<DocsResponse, ApiError>`
- **Wire**: `PATCH /docs/{docId}`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DocsResponse`
- **Error**: `GristApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Docs.ModifyDocRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `docId` | `path` | `string` | yes |
| `body` | `body` | `DocParameters` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DocParameters` | `docParametersSchema` | `src/models/doc-parameters.ts` |
| `DocsResponse` | `docsResponseSchema` | `src/models/unions/docs-response.ts` |

### modifyDocAccess

- **Signature**: `modifyDocAccess(request: Docs.ModifyDocAccessRequest, options?: RequestOptions): ApiPromise<DocsAccessResponse, ApiError>`
- **Wire**: `PATCH /docs/{docId}/access`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DocsAccessResponse`
- **Error**: `GristApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Docs.ModifyDocAccessRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `docId` | `path` | `string` | yes |
| `body` | `body` | `DocsAccessRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DocsAccessRequest` | `docsAccessRequestSchema` | `src/models/docs-access-request.ts` |
| `DocsAccessResponse` | `docsAccessResponseSchema` | `src/models/unions/docs-access-response.ts` |

### moveDoc

- **Signature**: `moveDoc(request: Docs.MoveDocRequest, options?: RequestOptions): ApiPromise<DocsMoveResponse, ApiError>`
- **Wire**: `PATCH /docs/{docId}/move`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DocsMoveResponse`
- **Error**: `GristApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Docs.MoveDocRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `docId` | `path` | `string` | yes |
| `body` | `body` | `DocsMoveRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DocsMoveRequest` | `docsMoveRequestSchema` | `src/models/docs-move-request.ts` |
| `DocsMoveResponse` | `docsMoveResponseSchema` | `src/models/unions/docs-move-response.ts` |

### pinDoc

- **Signature**: `pinDoc(request: Docs.PinDocRequest, options?: RequestOptions): ApiPromise<DocsPinResponse, ApiError>`
- **Wire**: `PATCH /docs/{docId}/pin`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DocsPinResponse`
- **Error**: `GristApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Docs.PinDocRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `docId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DocsPinResponse` | `docsPinResponseSchema` | `src/models/unions/docs-pin-response.ts` |

### recoverDoc

- **Signature**: `recoverDoc(request: Docs.RecoverDocRequest, options?: RequestOptions): ApiPromise<DocsRecoverResponse, Docs.RecoverDocError>`
- **Wire**: `POST /docs/{docId}/recover`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DocsRecoverResponse`
- **Error**: `GristApiError` with `kind: "api"`, an instance of `Docs.RecoverDocError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"gristError"` [403] `GristError` · `"gristError2"` [404] `GristError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Docs.RecoverDocRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `docId` | `path` | `string` | yes |
| `body` | `body` | `DocsRecoverRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DocsRecoverRequest` | `docsRecoverRequestSchema` | `src/models/docs-recover-request.ts` |
| `DocsRecoverResponse` | `docsRecoverResponseSchema` | `src/models/docs-recover-response.ts` |
| `GristError` | `gristErrorSchema` | `src/models/grist-error.ts` |

### removeDoc

- **Signature**: `removeDoc(request: Docs.RemoveDocRequest, options?: RequestOptions): ApiPromise<DocsRemoveResponse, ApiError>`
- **Wire**: `POST /docs/{docId}/remove`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DocsRemoveResponse`
- **Error**: `GristApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Docs.RemoveDocRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `docId` | `path` | `string` | yes |
| `permanent` | `query` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DocsRemoveResponse` | `docsRemoveResponseSchema` | `src/models/unions/docs-remove-response.ts` |

### removeSnapshots

- **Signature**: `removeSnapshots(request: Docs.RemoveSnapshotsRequest, options?: RequestOptions): ApiPromise<DocsSnapshotsRemoveResponse, ApiError>`
- **Wire**: `POST /docs/{docId}/snapshots/remove`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DocsSnapshotsRemoveResponse`
- **Error**: `GristApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Docs.RemoveSnapshotsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `docId` | `path` | `string` | yes |
| `body` | `body` | `DocsSnapshotsRemoveRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DocsSnapshotsRemoveRequest` | `docsSnapshotsRemoveRequestSchema` | `src/models/docs-snapshots-remove-request.ts` |
| `DocsSnapshotsRemoveResponse` | `docsSnapshotsRemoveResponseSchema` | `src/models/docs-snapshots-remove-response.ts` |

### replaceDoc

- **Signature**: `replaceDoc(request: Docs.ReplaceDocRequest, options?: RequestOptions): ApiPromise<DocsReplaceResponse, ApiError>`
- **Wire**: `POST /docs/{docId}/replace`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DocsReplaceResponse`
- **Error**: `GristApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Docs.ReplaceDocRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `docId` | `path` | `string` | yes |
| `body` | `body` | `DocsReplaceRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DocsReplaceRequest` | `docsReplaceRequestSchema` | `src/models/docs-replace-request.ts` |
| `DocsReplaceResponse` | `docsReplaceResponseSchema` | `src/models/unions/docs-replace-response.ts` |

### startTiming

- **Signature**: `startTiming(request: Docs.StartTimingRequest, options?: RequestOptions): ApiPromise<DocsTimingStartResponse, Docs.StartTimingError>`
- **Wire**: `POST /docs/{docId}/timing/start`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DocsTimingStartResponse`
- **Error**: `GristApiError` with `kind: "api"`, an instance of `Docs.StartTimingError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"gristError"` [400] `GristError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Docs.StartTimingRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `docId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DocsTimingStartResponse` | `docsTimingStartResponseSchema` | `src/models/unions/docs-timing-start-response.ts` |
| `GristError` | `gristErrorSchema` | `src/models/grist-error.ts` |

### stopTiming

- **Signature**: `stopTiming(request: Docs.StopTimingRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Docs.StopTimingError>`
- **Wire**: `POST /docs/{docId}/timing/stop`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `GristApiError` with `kind: "api"`, an instance of `Docs.StopTimingError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"gristError"` [400] `GristError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Docs.StopTimingRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `docId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GristError` | `gristErrorSchema` | `src/models/grist-error.ts` |

### unpinDoc

- **Signature**: `unpinDoc(request: Docs.UnpinDocRequest, options?: RequestOptions): ApiPromise<DocsUnpinResponse, ApiError>`
- **Wire**: `PATCH /docs/{docId}/unpin`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DocsUnpinResponse`
- **Error**: `GristApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Docs.UnpinDocRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `docId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DocsUnpinResponse` | `docsUnpinResponseSchema` | `src/models/unions/docs-unpin-response.ts` |

### unremoveDoc

- **Signature**: `unremoveDoc(request: Docs.UnremoveDocRequest, options?: RequestOptions): ApiPromise<DocsUnremoveResponse, ApiError>`
- **Wire**: `POST /docs/{docId}/unremove`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DocsUnremoveResponse`
- **Error**: `GristApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Docs.UnremoveDocRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `docId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DocsUnremoveResponse` | `docsUnremoveResponseSchema` | `src/models/unions/docs-unremove-response.ts` |

