<!-- Generated file — do not edit; regenerated with the SDK. -->

# Tables — operations

Accessor: `client.tables` · Source: `src/resources/tables.ts` · 3 operations · Request types: namespace `Tables`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `grist-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### addTables

- **Signature**: `addTables(request: Tables.AddTablesRequest, options?: RequestOptions): ApiPromise<TablesWithoutFields, ApiError>`
- **Wire**: `POST /docs/{docId}/tables`
- **Auth**: any of `apiKey`, `oAuth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TablesWithoutFields`
- **Error**: `GristApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Tables.AddTablesRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `docId` | `path` | `string` | yes |
| `body` | `body` | `CreateTables` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateTables` | `createTablesSchema` | `src/models/create-tables.ts` |
| `TablesWithoutFields` | `tablesWithoutFieldsSchema` | `src/models/tables-without-fields.ts` |

### listTables

- **Signature**: `listTables(request: Tables.ListTablesRequest, options?: RequestOptions): ApiPromise<TablesList, ApiError>`
- **Wire**: `GET /docs/{docId}/tables`
- **Auth**: any of `apiKey`, `oAuth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TablesList`
- **Error**: `GristApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Tables.ListTablesRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `docId` | `path` | `string` | yes |
| `expand` | `query` | `Expand` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Expand` | `expandSchema` | `src/models/expand.ts` |
| `TablesList` | `tablesListSchema` | `src/models/tables-list.ts` |

### modifyTables

- **Signature**: `modifyTables(request: Tables.ModifyTablesRequest, options?: RequestOptions): ApiPromise<DocsTablesResponse, ApiError>`
- **Wire**: `PATCH /docs/{docId}/tables`
- **Auth**: any of `apiKey`, `oAuth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DocsTablesResponse`
- **Error**: `GristApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Tables.ModifyTablesRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `docId` | `path` | `string` | yes |
| `body` | `body` | `UpdateTables` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateTables` | `updateTablesSchema` | `src/models/update-tables.ts` |
| `DocsTablesResponse` | `docsTablesResponseSchema` | `src/models/unions/docs-tables-response.ts` |

