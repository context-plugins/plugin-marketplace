<!-- Generated file — do not edit; regenerated with the SDK. -->

# DataApi — operations

Accessor: `client.dataApi` · Source: `src/resources/data-api.ts` · 4 operations · Request types: namespace `DataApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `grist-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### addRows

- **Signature**: `addRows(request: DataApi.AddRowsRequest, options?: RequestOptions): ApiPromise<number[], ApiError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `POST /docs/{docId}/tables/{tableId}/data`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field, a bare top-level JSON map with no fixed keys
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `number[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `GristApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `DataApi.AddRowsRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `docId` | `path` | `string` | yes |
| `tableId` | `path` | `string` | yes |
| `noparse` | `query` | `boolean` | no |
| `body` | `body` | `Record<string, unknown>` | yes |

### deleteRows

- **Signature**: `deleteRows(request: DataApi.DeleteRowsRequest, options?: RequestOptions): ApiPromise<DocsTablesDataDeleteResponse, ApiError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `POST /docs/{docId}/tables/{tableId}/data/delete`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field, a bare top-level JSON array
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DocsTablesDataDeleteResponse`
- **Error**: `GristApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `DataApi.DeleteRowsRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `docId` | `path` | `string` | yes |
| `tableId` | `path` | `string` | yes |
| `body` | `body` | `number[]` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DocsTablesDataDeleteResponse` | `docsTablesDataDeleteResponseSchema` | `src/models/unions/docs-tables-data-delete-response.ts` |

### getTableData

- **Signature**: `getTableData(request: DataApi.GetTableDataRequest, options?: RequestOptions): ApiPromise<Data, ApiError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `GET /docs/{docId}/tables/{tableId}/data`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Data`
- **Error**: `GristApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `DataApi.GetTableDataRequest` (8):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `docId` | `path` | — | `string` | yes |
| `tableId` | `path` | — | `string` | yes |
| `filter` | `query` | — | `string` | no |
| `sort` | `query` | — | `string` | no |
| `limit` | `query` | — | `number` | no |
| `cellFormat` | `query` | — | `CellFormat` | no |
| `xSort` | `header` | `X-Sort` | `string` | no |
| `xLimit` | `header` | `X-Limit` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CellFormat` | `cellFormatSchema` | `src/models/cell-format.ts` |
| `Data` | `dataSchema` | `src/models/data.ts` |

### modifyRows

- **Signature**: `modifyRows(request: DataApi.ModifyRowsRequest, options?: RequestOptions): ApiPromise<number[], ApiError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `PATCH /docs/{docId}/tables/{tableId}/data`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `number[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `GristApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `DataApi.ModifyRowsRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `docId` | `path` | `string` | yes |
| `tableId` | `path` | `string` | yes |
| `noparse` | `query` | `boolean` | no |
| `body` | `body` | `Data` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Data` | `dataSchema` | `src/models/data.ts` |

