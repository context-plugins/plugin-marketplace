<!-- Generated file — do not edit; regenerated with the SDK. -->

# ContactsTables — operations

Accessor: `client.contactsTables` · Source: `src/resources/contacts-tables.ts` · 11 operations · Request and error types: namespace `ContactsTables`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `lusha`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### addContactsTableEntities

- **Signature**: `addContactsTableEntities(request: ContactsTables.AddContactsTableEntitiesRequest, options?: RequestOptions): ApiPromise<EntitiesAddResponse, ContactsTables.AddContactsTableEntitiesError>`
- **Wire**: `POST /v3/contacts/tables/{table_id}/entities`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `EntitiesAddResponse`
- **Error**: `LushaError` with `kind: "api"`, an instance of `ContactsTables.AddContactsTableEntitiesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ContactsTables.AddContactsTableEntitiesRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `tableId` | `path` | `table_id` | `string` | yes |
| `body` | `body` | — | `EntitiesAddRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `EntitiesAddRequest` | `entitiesAddRequestSchema` | `src/models/entities-add-request.ts` |
| `EntitiesAddResponse` | `entitiesAddResponseSchema` | `src/models/entities-add-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### createContactsTable

- **Signature**: `createContactsTable(request: ContactsTables.CreateContactsTableRequest, options?: RequestOptions): ApiPromise<TableResponse, ContactsTables.CreateContactsTableError>`
- **Wire**: `POST /v3/contacts/tables`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TableResponse`
- **Error**: `LushaError` with `kind: "api"`, an instance of `ContactsTables.CreateContactsTableError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [409] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ContactsTables.CreateContactsTableRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TableCreateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TableCreateRequest` | `tableCreateRequestSchema` | `src/models/table-create-request.ts` |
| `TableResponse` | `tableResponseSchema` | `src/models/table-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### deleteContactsTable

- **Signature**: `deleteContactsTable(request: ContactsTables.DeleteContactsTableRequest, options?: RequestOptions): ApiPromise<V3ContactsTablesResponse, ContactsTables.DeleteContactsTableError>`
- **Wire**: `DELETE /v3/contacts/tables/{table_id}`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V3ContactsTablesResponse`
- **Error**: `LushaError` with `kind: "api"`, an instance of `ContactsTables.DeleteContactsTableError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [403] `ErrorResponse` · `"errorResponse3"` [404] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ContactsTables.DeleteContactsTableRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `tableId` | `path` | `table_id` | `string` | yes |
| `email` | `query` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V3ContactsTablesResponse` | `v3ContactsTablesResponseSchema` | `src/models/v3-contacts-tables-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getContactsTable

- **Signature**: `getContactsTable(request: ContactsTables.GetContactsTableRequest, options?: RequestOptions): ApiPromise<TableResponse, ContactsTables.GetContactsTableError>`
- **Wire**: `GET /v3/contacts/tables/{table_id}`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TableResponse`
- **Error**: `LushaError` with `kind: "api"`, an instance of `ContactsTables.GetContactsTableError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [403] `ErrorResponse` · `"errorResponse3"` [404] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ContactsTables.GetContactsTableRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `tableId` | `path` | `table_id` | `string` | yes |
| `email` | `query` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TableResponse` | `tableResponseSchema` | `src/models/table-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getContactsTableEntities

- **Signature**: `getContactsTableEntities(request: ContactsTables.GetContactsTableEntitiesRequest, options?: RequestOptions): ApiPromise<EntitiesGetResponse, ContactsTables.GetContactsTableEntitiesError>`
- **Wire**: `GET /v3/contacts/tables/{table_id}/entities`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EntitiesGetResponse`
- **Error**: `LushaError` with `kind: "api"`, an instance of `ContactsTables.GetContactsTableEntitiesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [403] `ErrorResponse` · `"errorResponse3"` [404] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ContactsTables.GetContactsTableEntitiesRequest` (4):

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

### listContactsTableColumns

- **Signature**: `listContactsTableColumns(request: ContactsTables.ListContactsTableColumnsRequest, options?: RequestOptions): ApiPromise<ColumnsListResponse, ContactsTables.ListContactsTableColumnsError>`
- **Wire**: `GET /v3/contacts/tables/{table_id}/columns`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ColumnsListResponse`
- **Error**: `LushaError` with `kind: "api"`, an instance of `ContactsTables.ListContactsTableColumnsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [403] `ErrorResponse` · `"errorResponse3"` [404] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ContactsTables.ListContactsTableColumnsRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `tableId` | `path` | `table_id` | `string` | yes |
| `email` | `query` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ColumnsListResponse` | `columnsListResponseSchema` | `src/models/columns-list-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listContactsTables

- **Signature**: `listContactsTables(request: ContactsTables.ListContactsTablesRequest, options?: RequestOptions): ApiPromise<TableListResponse, ContactsTables.ListContactsTablesError>`
- **Wire**: `POST /v3/contacts/tables/list`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TableListResponse`
- **Error**: `LushaError` with `kind: "api"`, an instance of `ContactsTables.ListContactsTablesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ContactsTables.ListContactsTablesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TableListRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TableListRequest` | `tableListRequestSchema` | `src/models/table-list-request.ts` |
| `TableListResponse` | `tableListResponseSchema` | `src/models/table-list-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### removeContactsTableColumn

- **Signature**: `removeContactsTableColumn(request: ContactsTables.RemoveContactsTableColumnRequest, options?: RequestOptions): ApiPromise<V3ContactsTablesColumnsResponse, ContactsTables.RemoveContactsTableColumnError>`
- **Wire**: `DELETE /v3/contacts/tables/{table_id}/columns/{column_id}`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V3ContactsTablesColumnsResponse`
- **Error**: `LushaError` with `kind: "api"`, an instance of `ContactsTables.RemoveContactsTableColumnError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [403] `ErrorResponse` · `"errorResponse3"` [404] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ContactsTables.RemoveContactsTableColumnRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `tableId` | `path` | `table_id` | `string` | yes |
| `columnId` | `path` | `column_id` | `string` | yes |
| `email` | `query` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V3ContactsTablesColumnsResponse` | `v3ContactsTablesColumnsResponseSchema` | `src/models/v3-contacts-tables-columns-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### removeContactsTableEntities

- **Signature**: `removeContactsTableEntities(request: ContactsTables.RemoveContactsTableEntitiesRequest, options?: RequestOptions): ApiPromise<EntitiesRemoveResponse, ContactsTables.RemoveContactsTableEntitiesError>`
- **Wire**: `DELETE /v3/contacts/tables/{table_id}/entities`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `EntitiesRemoveResponse`
- **Error**: `LushaError` with `kind: "api"`, an instance of `ContactsTables.RemoveContactsTableEntitiesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ContactsTables.RemoveContactsTableEntitiesRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `tableId` | `path` | `table_id` | `string` | yes |
| `body` | `body` | — | `EntitiesRemoveRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `EntitiesRemoveRequest` | `entitiesRemoveRequestSchema` | `src/models/entities-remove-request.ts` |
| `EntitiesRemoveResponse` | `entitiesRemoveResponseSchema` | `src/models/entities-remove-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### runContactsTableColumn

- **Signature**: `runContactsTableColumn(request: ContactsTables.RunContactsTableColumnRequest, options?: RequestOptions): ApiPromise<ColumnsRunResponse, ContactsTables.RunContactsTableColumnError>`
- **Wire**: `POST /v3/contacts/tables/{table_id}/columns/{column_id}/run`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ColumnsRunResponse`
- **Error**: `LushaError` with `kind: "api"`, an instance of `ContactsTables.RunContactsTableColumnError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ContactsTables.RunContactsTableColumnRequest` (3):

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

### updateContactsTable

- **Signature**: `updateContactsTable(request: ContactsTables.UpdateContactsTableRequest, options?: RequestOptions): ApiPromise<TableResponse, ContactsTables.UpdateContactsTableError>`
- **Wire**: `PATCH /v3/contacts/tables/{table_id}`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TableResponse`
- **Error**: `LushaError` with `kind: "api"`, an instance of `ContactsTables.UpdateContactsTableError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ContactsTables.UpdateContactsTableRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `tableId` | `path` | `table_id` | `string` | yes |
| `body` | `body` | — | `TableUpdateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TableUpdateRequest` | `tableUpdateRequestSchema` | `src/models/table-update-request.ts` |
| `TableResponse` | `tableResponseSchema` | `src/models/table-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

