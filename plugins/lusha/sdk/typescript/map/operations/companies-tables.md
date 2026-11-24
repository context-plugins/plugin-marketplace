<!-- Generated file — do not edit; regenerated with the SDK. -->

# CompaniesTables — operations

Accessor: `client.companiesTables` · Source: `src/resources/companies-tables.ts` · 11 operations · Request and error types: namespace `CompaniesTables`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `lusha`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### addCompaniesTableEntities

- **Signature**: `addCompaniesTableEntities(request: CompaniesTables.AddCompaniesTableEntitiesRequest, options?: RequestOptions): ApiPromise<EntitiesAddResponse, CompaniesTables.AddCompaniesTableEntitiesError>`
- **Wire**: `POST /v3/companies/tables/{table_id}/entities`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `EntitiesAddResponse`
- **Error**: `LushaError` with `kind: "api"`, an instance of `CompaniesTables.AddCompaniesTableEntitiesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CompaniesTables.AddCompaniesTableEntitiesRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `tableId` | `path` | `table_id` | `string` | yes |
| `body` | `body` | — | `EntitiesAddRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `EntitiesAddRequest` | `entitiesAddRequestSchema` | `src/models/entities-add-request.ts` |
| `EntitiesAddResponse` | `entitiesAddResponseSchema` | `src/models/entities-add-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### createCompaniesTable

- **Signature**: `createCompaniesTable(request: CompaniesTables.CreateCompaniesTableRequest, options?: RequestOptions): ApiPromise<TableResponse, CompaniesTables.CreateCompaniesTableError>`
- **Wire**: `POST /v3/companies/tables`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TableResponse`
- **Error**: `LushaError` with `kind: "api"`, an instance of `CompaniesTables.CreateCompaniesTableError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [409] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CompaniesTables.CreateCompaniesTableRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TableCreateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TableCreateRequest` | `tableCreateRequestSchema` | `src/models/table-create-request.ts` |
| `TableResponse` | `tableResponseSchema` | `src/models/table-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### deleteCompaniesTable

- **Signature**: `deleteCompaniesTable(request: CompaniesTables.DeleteCompaniesTableRequest, options?: RequestOptions): ApiPromise<V3CompaniesTablesResponse, CompaniesTables.DeleteCompaniesTableError>`
- **Wire**: `DELETE /v3/companies/tables/{table_id}`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V3CompaniesTablesResponse`
- **Error**: `LushaError` with `kind: "api"`, an instance of `CompaniesTables.DeleteCompaniesTableError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [403] `ErrorResponse` · `"errorResponse3"` [404] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CompaniesTables.DeleteCompaniesTableRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `tableId` | `path` | `table_id` | `string` | yes |
| `email` | `query` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V3CompaniesTablesResponse` | `v3CompaniesTablesResponseSchema` | `src/models/v3-companies-tables-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getCompaniesTable

- **Signature**: `getCompaniesTable(request: CompaniesTables.GetCompaniesTableRequest, options?: RequestOptions): ApiPromise<TableResponse, CompaniesTables.GetCompaniesTableError>`
- **Wire**: `GET /v3/companies/tables/{table_id}`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TableResponse`
- **Error**: `LushaError` with `kind: "api"`, an instance of `CompaniesTables.GetCompaniesTableError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [403] `ErrorResponse` · `"errorResponse3"` [404] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CompaniesTables.GetCompaniesTableRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `tableId` | `path` | `table_id` | `string` | yes |
| `email` | `query` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TableResponse` | `tableResponseSchema` | `src/models/table-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getCompaniesTableEntities

- **Signature**: `getCompaniesTableEntities(request: CompaniesTables.GetCompaniesTableEntitiesRequest, options?: RequestOptions): ApiPromise<EntitiesGetResponse, CompaniesTables.GetCompaniesTableEntitiesError>`
- **Wire**: `GET /v3/companies/tables/{table_id}/entities`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EntitiesGetResponse`
- **Error**: `LushaError` with `kind: "api"`, an instance of `CompaniesTables.GetCompaniesTableEntitiesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [403] `ErrorResponse` · `"errorResponse3"` [404] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CompaniesTables.GetCompaniesTableEntitiesRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `tableId` | `path` | `table_id` | `string` | yes | — |
| `email` | `query` | — | `string` | no | — |
| `page` | `query` | — | `number` | no | `0` |
| `size` | `query` | — | `number` | no | `100` |

| Type | Schema value | Source |
| --- | --- | --- |
| `EntitiesGetResponse` | `entitiesGetResponseSchema` | `src/models/entities-get-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listCompaniesTableColumns

- **Signature**: `listCompaniesTableColumns(request: CompaniesTables.ListCompaniesTableColumnsRequest, options?: RequestOptions): ApiPromise<ColumnsListResponse, CompaniesTables.ListCompaniesTableColumnsError>`
- **Wire**: `GET /v3/companies/tables/{table_id}/columns`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ColumnsListResponse`
- **Error**: `LushaError` with `kind: "api"`, an instance of `CompaniesTables.ListCompaniesTableColumnsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [403] `ErrorResponse` · `"errorResponse3"` [404] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CompaniesTables.ListCompaniesTableColumnsRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `tableId` | `path` | `table_id` | `string` | yes |
| `email` | `query` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ColumnsListResponse` | `columnsListResponseSchema` | `src/models/columns-list-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listCompaniesTables

- **Signature**: `listCompaniesTables(request: CompaniesTables.ListCompaniesTablesRequest, options?: RequestOptions): ApiPromise<TableListResponse, CompaniesTables.ListCompaniesTablesError>`
- **Wire**: `POST /v3/companies/tables/list`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TableListResponse`
- **Error**: `LushaError` with `kind: "api"`, an instance of `CompaniesTables.ListCompaniesTablesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CompaniesTables.ListCompaniesTablesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TableListRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TableListRequest` | `tableListRequestSchema` | `src/models/table-list-request.ts` |
| `TableListResponse` | `tableListResponseSchema` | `src/models/table-list-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### removeCompaniesTableColumn

- **Signature**: `removeCompaniesTableColumn(request: CompaniesTables.RemoveCompaniesTableColumnRequest, options?: RequestOptions): ApiPromise<V3CompaniesTablesColumnsResponse, CompaniesTables.RemoveCompaniesTableColumnError>`
- **Wire**: `DELETE /v3/companies/tables/{table_id}/columns/{column_id}`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V3CompaniesTablesColumnsResponse`
- **Error**: `LushaError` with `kind: "api"`, an instance of `CompaniesTables.RemoveCompaniesTableColumnError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [403] `ErrorResponse` · `"errorResponse3"` [404] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CompaniesTables.RemoveCompaniesTableColumnRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `tableId` | `path` | `table_id` | `string` | yes |
| `columnId` | `path` | `column_id` | `string` | yes |
| `email` | `query` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V3CompaniesTablesColumnsResponse` | `v3CompaniesTablesColumnsResponseSchema` | `src/models/v3-companies-tables-columns-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### removeCompaniesTableEntities

- **Signature**: `removeCompaniesTableEntities(request: CompaniesTables.RemoveCompaniesTableEntitiesRequest, options?: RequestOptions): ApiPromise<EntitiesRemoveResponse, CompaniesTables.RemoveCompaniesTableEntitiesError>`
- **Wire**: `DELETE /v3/companies/tables/{table_id}/entities`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `EntitiesRemoveResponse`
- **Error**: `LushaError` with `kind: "api"`, an instance of `CompaniesTables.RemoveCompaniesTableEntitiesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CompaniesTables.RemoveCompaniesTableEntitiesRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `tableId` | `path` | `table_id` | `string` | yes |
| `body` | `body` | — | `EntitiesRemoveRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `EntitiesRemoveRequest` | `entitiesRemoveRequestSchema` | `src/models/entities-remove-request.ts` |
| `EntitiesRemoveResponse` | `entitiesRemoveResponseSchema` | `src/models/entities-remove-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### runCompaniesTableColumn

- **Signature**: `runCompaniesTableColumn(request: CompaniesTables.RunCompaniesTableColumnRequest, options?: RequestOptions): ApiPromise<ColumnsRunResponse, CompaniesTables.RunCompaniesTableColumnError>`
- **Wire**: `POST /v3/companies/tables/{table_id}/columns/{column_id}/run`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ColumnsRunResponse`
- **Error**: `LushaError` with `kind: "api"`, an instance of `CompaniesTables.RunCompaniesTableColumnError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CompaniesTables.RunCompaniesTableColumnRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `tableId` | `path` | `table_id` | `string` | yes |
| `columnId` | `path` | `column_id` | `string` | yes |
| `body` | `body` | — | `ColumnsRunRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ColumnsRunRequest` | `columnsRunRequestSchema` | `src/models/columns-run-request.ts` |
| `ColumnsRunResponse` | `columnsRunResponseSchema` | `src/models/columns-run-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### updateCompaniesTable

- **Signature**: `updateCompaniesTable(request: CompaniesTables.UpdateCompaniesTableRequest, options?: RequestOptions): ApiPromise<TableResponse, CompaniesTables.UpdateCompaniesTableError>`
- **Wire**: `PATCH /v3/companies/tables/{table_id}`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TableResponse`
- **Error**: `LushaError` with `kind: "api"`, an instance of `CompaniesTables.UpdateCompaniesTableError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CompaniesTables.UpdateCompaniesTableRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `tableId` | `path` | `table_id` | `string` | yes |
| `body` | `body` | — | `TableUpdateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TableUpdateRequest` | `tableUpdateRequestSchema` | `src/models/table-update-request.ts` |
| `TableResponse` | `tableResponseSchema` | `src/models/table-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

