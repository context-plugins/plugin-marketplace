<!-- Generated file — do not edit; regenerated with the SDK. -->

# Columns — operations

Accessor: `client.columns` · Source: `src/resources/columns.ts` · 5 operations · Request types: namespace `Columns`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `grist-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### addColumns

- **Signature**: `addColumns(request: Columns.AddColumnsRequest, options?: RequestOptions): ApiPromise<ColumnsWithoutFields, ApiError>`
- **Wire**: `POST /docs/{docId}/tables/{tableId}/columns`
- **Auth**: any of `apiKey`, `oAuth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ColumnsWithoutFields`
- **Error**: `GristApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Columns.AddColumnsRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `docId` | `path` | `string` | yes |
| `tableId` | `path` | `string` | yes |
| `body` | `body` | `CreateColumns` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateColumns` | `createColumnsSchema` | `src/models/create-columns.ts` |
| `ColumnsWithoutFields` | `columnsWithoutFieldsSchema` | `src/models/columns-without-fields.ts` |

### deleteColumn

- **Signature**: `deleteColumn(request: Columns.DeleteColumnRequest, options?: RequestOptions): ApiPromise<DocsTablesColumnsColIdResponse, ApiError>`
- **Wire**: `DELETE /docs/{docId}/tables/{tableId}/columns/{colId}`
- **Auth**: any of `apiKey`, `oAuth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DocsTablesColumnsColIdResponse`
- **Error**: `GristApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Columns.DeleteColumnRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `docId` | `path` | `string` | yes |
| `tableId` | `path` | `string` | yes |
| `colId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DocsTablesColumnsColIdResponse` | `docsTablesColumnsColIdResponseSchema` | `src/models/unions/docs-tables-columns-col-id-response.ts` |

### listColumns

- **Signature**: `listColumns(request: Columns.ListColumnsRequest, options?: RequestOptions): ApiPromise<ColumnsList, ApiError>`
- **Wire**: `GET /docs/{docId}/tables/{tableId}/columns`
- **Auth**: any of `apiKey`, `oAuth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ColumnsList`
- **Error**: `GristApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Columns.ListColumnsRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `docId` | `path` | `string` | yes |
| `tableId` | `path` | `string` | yes |
| `hidden` | `query` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ColumnsList` | `columnsListSchema` | `src/models/columns-list.ts` |

### modifyColumns

- **Signature**: `modifyColumns(request: Columns.ModifyColumnsRequest, options?: RequestOptions): ApiPromise<DocsTablesColumnsResponse, ApiError>`
- **Wire**: `PATCH /docs/{docId}/tables/{tableId}/columns`
- **Auth**: any of `apiKey`, `oAuth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DocsTablesColumnsResponse`
- **Error**: `GristApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Columns.ModifyColumnsRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `docId` | `path` | `string` | yes |
| `tableId` | `path` | `string` | yes |
| `body` | `body` | `UpdateColumns` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateColumns` | `updateColumnsSchema` | `src/models/update-columns.ts` |
| `DocsTablesColumnsResponse` | `docsTablesColumnsResponseSchema` | `src/models/unions/docs-tables-columns-response.ts` |

### replaceColumns

- **Signature**: `replaceColumns(request: Columns.ReplaceColumnsRequest, options?: RequestOptions): ApiPromise<DocsTablesColumnsResponse, ApiError>`
- **Wire**: `PUT /docs/{docId}/tables/{tableId}/columns`
- **Auth**: any of `apiKey`, `oAuth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DocsTablesColumnsResponse`
- **Error**: `GristApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Columns.ReplaceColumnsRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `docId` | `path` | `string` | yes |
| `tableId` | `path` | `string` | yes |
| `noadd` | `query` | `boolean` | no |
| `noupdate` | `query` | `boolean` | no |
| `replaceall` | `query` | `boolean` | no |
| `body` | `body` | `UpdateColumns` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateColumns` | `updateColumnsSchema` | `src/models/update-columns.ts` |
| `DocsTablesColumnsResponse` | `docsTablesColumnsResponseSchema` | `src/models/unions/docs-tables-columns-response.ts` |

