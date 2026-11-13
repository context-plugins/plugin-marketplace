<!-- Generated file — do not edit; regenerated with the SDK. -->

# Records — operations

Accessor: `client.records` · Source: `src/resources/records.ts` · 5 operations · Request types: namespace `Records`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `grist-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### addRecords

- **Signature**: `addRecords(request: Records.AddRecordsRequest, options?: RequestOptions): ApiPromise<RecordsWithoutFields, ApiError>`
- **Wire**: `POST /docs/{docId}/tables/{tableId}/records`
- **Auth**: any of `apiKey`, `oAuth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `RecordsWithoutFields`
- **Error**: `GristApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Records.AddRecordsRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `docId` | `path` | `string` | yes |
| `tableId` | `path` | `string` | yes |
| `noparse` | `query` | `boolean` | no |
| `body` | `body` | `RecordsWithoutId` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RecordsWithoutId` | `recordsWithoutIdSchema` | `src/models/records-without-id.ts` |
| `RecordsWithoutFields` | `recordsWithoutFieldsSchema` | `src/models/records-without-fields.ts` |

### deleteRecords

- **Signature**: `deleteRecords(request: Records.DeleteRecordsRequest, options?: RequestOptions): ApiPromise<DocsTablesRecordsDeleteResponse, ApiError>`
- **Wire**: `POST /docs/{docId}/tables/{tableId}/records/delete`
- **Auth**: any of `apiKey`, `oAuth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field, a bare top-level JSON array
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DocsTablesRecordsDeleteResponse`
- **Error**: `GristApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Records.DeleteRecordsRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `docId` | `path` | `string` | yes |
| `tableId` | `path` | `string` | yes |
| `body` | `body` | `number[]` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DocsTablesRecordsDeleteResponse` | `docsTablesRecordsDeleteResponseSchema` | `src/models/unions/docs-tables-records-delete-response.ts` |

### listRecords

- **Signature**: `listRecords(request: Records.ListRecordsRequest, options?: RequestOptions): ApiPromise<RecordsList, ApiError>`
- **Wire**: `GET /docs/{docId}/tables/{tableId}/records`
- **Auth**: any of `apiKey`, `oAuth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RecordsList`
- **Error**: `GristApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Records.ListRecordsRequest` (9):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `docId` | `path` | — | `string` | yes |
| `tableId` | `path` | — | `string` | yes |
| `filter` | `query` | — | `string` | no |
| `sort` | `query` | — | `string` | no |
| `limit` | `query` | — | `number` | no |
| `hidden` | `query` | — | `boolean` | no |
| `cellFormat` | `query` | — | `CellFormat` | no |
| `xSort` | `header` | `X-Sort` | `string` | no |
| `xLimit` | `header` | `X-Limit` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CellFormat` | `cellFormatSchema` | `src/models/cell-format.ts` |
| `RecordsList` | `recordsListSchema` | `src/models/records-list.ts` |

### modifyRecords

- **Signature**: `modifyRecords(request: Records.ModifyRecordsRequest, options?: RequestOptions): ApiPromise<DocsTablesRecordsResponse, ApiError>`
- **Wire**: `PATCH /docs/{docId}/tables/{tableId}/records`
- **Auth**: any of `apiKey`, `oAuth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DocsTablesRecordsResponse`
- **Error**: `GristApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Records.ModifyRecordsRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `docId` | `path` | `string` | yes |
| `tableId` | `path` | `string` | yes |
| `noparse` | `query` | `boolean` | no |
| `body` | `body` | `RecordsList` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RecordsList` | `recordsListSchema` | `src/models/records-list.ts` |
| `DocsTablesRecordsResponse` | `docsTablesRecordsResponseSchema` | `src/models/unions/docs-tables-records-response.ts` |

### replaceRecords

- **Signature**: `replaceRecords(request: Records.ReplaceRecordsRequest, options?: RequestOptions): ApiPromise<DocsTablesRecordsResponse, ApiError>`
- **Wire**: `PUT /docs/{docId}/tables/{tableId}/records`
- **Auth**: any of `apiKey`, `oAuth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DocsTablesRecordsResponse`
- **Error**: `GristApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Records.ReplaceRecordsRequest` (8):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `docId` | `path` | — | `string` | yes |
| `tableId` | `path` | — | `string` | yes |
| `noparse` | `query` | — | `boolean` | no |
| `onmany` | `query` | — | `Onmany` | no |
| `noadd` | `query` | — | `boolean` | no |
| `noupdate` | `query` | — | `boolean` | no |
| `allowEmptyRequire` | `query` | `allow_empty_require` | `boolean` | no |
| `body` | `body` | — | `RecordsWithRequire` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Onmany` | `onmanySchema` | `src/models/onmany.ts` |
| `RecordsWithRequire` | `recordsWithRequireSchema` | `src/models/records-with-require.ts` |
| `DocsTablesRecordsResponse` | `docsTablesRecordsResponseSchema` | `src/models/unions/docs-tables-records-response.ts` |

