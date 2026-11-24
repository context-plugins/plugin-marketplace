<!-- Generated file — do not edit; regenerated with the SDK. -->

# Entities — operations

Accessor: `client.entities` · Source: `src/resources/entities.ts` · 6 operations · Request and error types: namespace `Entities`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `ui-path`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createEntityRecord

- **Server**: `defaultUiPathDataServiceEntitiesApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createEntityRecord(request: Entities.CreateEntityRecordRequest, options?: RequestOptions): ApiPromise<EntityRecord, Entities.CreateEntityRecordError>`
- **Wire**: `POST /{entityName}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field, a bare top-level JSON map with no fixed keys
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `EntityRecord`
- **Error**: `UiPathError` with `kind: "api"`, an instance of `Entities.CreateEntityRecordError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseUiPathPlatformManagementAuditLogsApi"` [400] `ErrorResponseUiPathPlatformManagementAuditLogsApi` · `"errorResponseUiPathPlatformManagementAuditLogsApi2"` [401] `ErrorResponseUiPathPlatformManagementAuditLogsApi` · `"errorResponseUiPathPlatformManagementAuditLogsApi3"` [403] `ErrorResponseUiPathPlatformManagementAuditLogsApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Entities.CreateEntityRecordRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `entityName` | `path` | `string` | yes |
| `body` | `body` | `Record<string, unknown>` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `EntityRecord` | `entityRecordSchema` | `src/models/entity-record.ts` |
| `ErrorResponseUiPathPlatformManagementAuditLogsApi` | `errorResponseUiPathPlatformManagementAuditLogsApiSchema` | `src/models/error-response-ui-path-platform-management-audit-logs-api.ts` |

### deleteEntityRecord

- **Server**: `defaultUiPathDataServiceEntitiesApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteEntityRecord(request: Entities.DeleteEntityRecordRequest, options?: RequestOptions): ApiPromise<undefined, Entities.DeleteEntityRecordError>`
- **Wire**: `DELETE /{entityName}/{recordId}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `UiPathError` with `kind: "api"`, an instance of `Entities.DeleteEntityRecordError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseUiPathPlatformManagementAuditLogsApi"` [401] `ErrorResponseUiPathPlatformManagementAuditLogsApi` · `"errorResponseUiPathPlatformManagementAuditLogsApi2"` [403] `ErrorResponseUiPathPlatformManagementAuditLogsApi` · `"errorResponseUiPathPlatformManagementAuditLogsApi3"` [404] `ErrorResponseUiPathPlatformManagementAuditLogsApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Entities.DeleteEntityRecordRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `entityName` | `path` | `string` | yes |
| `recordId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponseUiPathPlatformManagementAuditLogsApi` | `errorResponseUiPathPlatformManagementAuditLogsApiSchema` | `src/models/error-response-ui-path-platform-management-audit-logs-api.ts` |

### getEntityRecord

- **Server**: `defaultUiPathDataServiceEntitiesApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getEntityRecord(request: Entities.GetEntityRecordRequest, options?: RequestOptions): ApiPromise<EntityRecord, Entities.GetEntityRecordError>`
- **Wire**: `GET /{entityName}/{recordId}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EntityRecord`
- **Error**: `UiPathError` with `kind: "api"`, an instance of `Entities.GetEntityRecordError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseUiPathPlatformManagementAuditLogsApi"` [401] `ErrorResponseUiPathPlatformManagementAuditLogsApi` · `"errorResponseUiPathPlatformManagementAuditLogsApi2"` [403] `ErrorResponseUiPathPlatformManagementAuditLogsApi` · `"errorResponseUiPathPlatformManagementAuditLogsApi3"` [404] `ErrorResponseUiPathPlatformManagementAuditLogsApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Entities.GetEntityRecordRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `entityName` | `path` | — | `string` | yes |
| `recordId` | `path` | — | `string` | yes |
| `select` | `query` | `$select` | `string` | no |
| `expand` | `query` | `$expand` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `EntityRecord` | `entityRecordSchema` | `src/models/entity-record.ts` |
| `ErrorResponseUiPathPlatformManagementAuditLogsApi` | `errorResponseUiPathPlatformManagementAuditLogsApiSchema` | `src/models/error-response-ui-path-platform-management-audit-logs-api.ts` |

### listEntityRecords

- **Server**: `defaultUiPathDataServiceEntitiesApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listEntityRecords(request: Entities.ListEntityRecordsRequest, options?: RequestOptions): ApiPromise<EntityRecordCollection, Entities.ListEntityRecordsError>`
- **Wire**: `GET /{entityName}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EntityRecordCollection`
- **Error**: `UiPathError` with `kind: "api"`, an instance of `Entities.ListEntityRecordsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseUiPathPlatformManagementAuditLogsApi"` [400] `ErrorResponseUiPathPlatformManagementAuditLogsApi` · `"errorResponseUiPathPlatformManagementAuditLogsApi2"` [401] `ErrorResponseUiPathPlatformManagementAuditLogsApi` · `"errorResponseUiPathPlatformManagementAuditLogsApi3"` [403] `ErrorResponseUiPathPlatformManagementAuditLogsApi` · `"errorResponseUiPathPlatformManagementAuditLogsApi4"` [404] `ErrorResponseUiPathPlatformManagementAuditLogsApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Entities.ListEntityRecordsRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `entityName` | `path` | — | `string` | yes |
| `filter` | `query` | `$filter` | `string` | no |
| `orderby` | `query` | `$orderby` | `string` | no |
| `top` | `query` | `$top` | `number` | no |
| `skip` | `query` | `$skip` | `number` | no |
| `select` | `query` | `$select` | `string` | no |
| `expand` | `query` | `$expand` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `EntityRecordCollection` | `entityRecordCollectionSchema` | `src/models/entity-record-collection.ts` |
| `ErrorResponseUiPathPlatformManagementAuditLogsApi` | `errorResponseUiPathPlatformManagementAuditLogsApiSchema` | `src/models/error-response-ui-path-platform-management-audit-logs-api.ts` |

### queryEntityRecords

- **Server**: `defaultUiPathDataServiceEntitiesApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `queryEntityRecords(request: Entities.QueryEntityRecordsRequest, options?: RequestOptions): ApiPromise<EntityRecordCollection, Entities.QueryEntityRecordsError>`
- **Wire**: `POST /{entityName}/query`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `EntityRecordCollection`
- **Error**: `UiPathError` with `kind: "api"`, an instance of `Entities.QueryEntityRecordsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseUiPathPlatformManagementAuditLogsApi"` [400] `ErrorResponseUiPathPlatformManagementAuditLogsApi` · `"errorResponseUiPathPlatformManagementAuditLogsApi2"` [401] `ErrorResponseUiPathPlatformManagementAuditLogsApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Entities.QueryEntityRecordsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `entityName` | `path` | `string` | yes |
| `body` | `body` | `EntityQueryRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `EntityQueryRequest` | `entityQueryRequestSchema` | `src/models/entity-query-request.ts` |
| `EntityRecordCollection` | `entityRecordCollectionSchema` | `src/models/entity-record-collection.ts` |
| `ErrorResponseUiPathPlatformManagementAuditLogsApi` | `errorResponseUiPathPlatformManagementAuditLogsApiSchema` | `src/models/error-response-ui-path-platform-management-audit-logs-api.ts` |

### updateEntityRecord

- **Server**: `defaultUiPathDataServiceEntitiesApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateEntityRecord(request: Entities.UpdateEntityRecordRequest, options?: RequestOptions): ApiPromise<EntityRecord, Entities.UpdateEntityRecordError>`
- **Wire**: `PUT /{entityName}/{recordId}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field, a bare top-level JSON map with no fixed keys
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `EntityRecord`
- **Error**: `UiPathError` with `kind: "api"`, an instance of `Entities.UpdateEntityRecordError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseUiPathPlatformManagementAuditLogsApi"` [400] `ErrorResponseUiPathPlatformManagementAuditLogsApi` · `"errorResponseUiPathPlatformManagementAuditLogsApi2"` [401] `ErrorResponseUiPathPlatformManagementAuditLogsApi` · `"errorResponseUiPathPlatformManagementAuditLogsApi3"` [403] `ErrorResponseUiPathPlatformManagementAuditLogsApi` · `"errorResponseUiPathPlatformManagementAuditLogsApi4"` [404] `ErrorResponseUiPathPlatformManagementAuditLogsApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Entities.UpdateEntityRecordRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `entityName` | `path` | `string` | yes |
| `recordId` | `path` | `string` | yes |
| `body` | `body` | `Record<string, unknown>` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `EntityRecord` | `entityRecordSchema` | `src/models/entity-record.ts` |
| `ErrorResponseUiPathPlatformManagementAuditLogsApi` | `errorResponseUiPathPlatformManagementAuditLogsApiSchema` | `src/models/error-response-ui-path-platform-management-audit-logs-api.ts` |

