<!-- Generated file — do not edit; regenerated with the SDK. -->

# Tables — operations

Accessor: `client.tables` · Source: `src/resources/tables.ts` · 2 operations · Request and error types: namespace `Tables`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `airtable`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createTable

- **Signature**: `createTable(request: Tables.CreateTableRequestParams, options?: RequestOptions): ApiPromise<TableSchema, Tables.CreateTableError>`
- **Wire**: `POST /meta/bases/{baseId}/tables`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TableSchema`
- **Error**: `AirtableError` with `kind: "api"`, an instance of `Tables.CreateTableError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [422] `Error` · `"error5"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tables.CreateTableRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `baseId` | `path` | `string` | yes |
| `body` | `body` | `CreateTableRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateTableRequest` | `createTableRequestSchema` | `src/models/create-table-request.ts` |
| `TableSchema` | `tableSchemaSchema` | `src/models/table-schema.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### updateTable

- **Signature**: `updateTable(request: Tables.UpdateTableRequest, options?: RequestOptions): ApiPromise<TableSchema, Tables.UpdateTableError>`
- **Wire**: `PATCH /meta/bases/{baseId}/tables/{tableId}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TableSchema`
- **Error**: `AirtableError` with `kind: "api"`, an instance of `Tables.UpdateTableError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [422] `Error` · `"error5"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tables.UpdateTableRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `baseId` | `path` | `string` | yes |
| `tableId` | `path` | `string` | yes |
| `body` | `body` | `MetaBasesTablesRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MetaBasesTablesRequest` | `metaBasesTablesRequestSchema` | `src/models/meta-bases-tables-request.ts` |
| `TableSchema` | `tableSchemaSchema` | `src/models/table-schema.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

