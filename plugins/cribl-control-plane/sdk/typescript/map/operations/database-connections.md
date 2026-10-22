<!-- Generated file — do not edit; regenerated with the SDK. -->

# DatabaseConnections — operations

Accessor: `client.databaseConnections` · Source: `src/resources/database-connections.ts` · 5 operations · Request and error types: namespace `DatabaseConnections`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `cribl-api-reference`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createDatabaseConnectionConfig

- **Signature**: `createDatabaseConnectionConfig(request: DatabaseConnections.CreateDatabaseConnectionConfigRequest, options?: RequestOptions): ApiPromise<DatabaseConnectionResponseEnvelope, DatabaseConnections.CreateDatabaseConnectionConfigError>`
- **Wire**: `POST /lib/database-connections`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DatabaseConnectionResponseEnvelope`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `DatabaseConnections.CreateDatabaseConnectionConfigError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restApiJsonError"` [400] `RestApiJsonError` · `"error"` [401] `Error` · `"error423"` [423] no body · `"error2"` [500] `Error` · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DatabaseConnections.CreateDatabaseConnectionConfigRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `DatabaseConnectionConfig` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DatabaseConnectionConfig` | `databaseConnectionConfigSchema` | `src/models/database-connection-config.ts` |
| `DatabaseConnectionResponseEnvelope` | `databaseConnectionResponseEnvelopeSchema` | `src/models/database-connection-response-envelope.ts` |
| `RestApiJsonError` | `restApiJsonErrorSchema` | `src/models/rest-api-json-error.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### deleteDatabaseConnectionConfigById

- **Signature**: `deleteDatabaseConnectionConfigById(request: DatabaseConnections.DeleteDatabaseConnectionConfigByIdRequest, options?: RequestOptions): ApiPromise<DatabaseConnectionResponseEnvelope, DatabaseConnections.DeleteDatabaseConnectionConfigByIdError>`
- **Wire**: `DELETE /lib/database-connections/{id}`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DatabaseConnectionResponseEnvelope`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `DatabaseConnections.DeleteDatabaseConnectionConfigByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"restApiJsonError"` [404] `RestApiJsonError` · `"error409"` [409] no body · `"error423"` [423] no body · `"error2"` [500] `Error` · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DatabaseConnections.DeleteDatabaseConnectionConfigByIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DatabaseConnectionResponseEnvelope` | `databaseConnectionResponseEnvelopeSchema` | `src/models/database-connection-response-envelope.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `RestApiJsonError` | `restApiJsonErrorSchema` | `src/models/rest-api-json-error.ts` |

### getDatabaseConnectionConfig

- **Signature**: `getDatabaseConnectionConfig(request: DatabaseConnections.GetDatabaseConnectionConfigRequest, options?: RequestOptions): ApiPromise<DatabaseConnectionResponseEnvelope, DatabaseConnections.GetDatabaseConnectionConfigError>`
- **Wire**: `GET /lib/database-connections`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DatabaseConnectionResponseEnvelope`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `DatabaseConnections.GetDatabaseConnectionConfigError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DatabaseConnections.GetDatabaseConnectionConfigRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `databaseType` | `query` | `DatabaseConnectionType` | no |
| `limit` | `query` | `number` | no |
| `offset` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DatabaseConnectionType` | `databaseConnectionTypeSchema` | `src/models/database-connection-type.ts` |
| `DatabaseConnectionResponseEnvelope` | `databaseConnectionResponseEnvelopeSchema` | `src/models/database-connection-response-envelope.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getDatabaseConnectionConfigById

- **Signature**: `getDatabaseConnectionConfigById(request: DatabaseConnections.GetDatabaseConnectionConfigByIdRequest, options?: RequestOptions): ApiPromise<DatabaseConnectionResponseEnvelope, DatabaseConnections.GetDatabaseConnectionConfigByIdError>`
- **Wire**: `GET /lib/database-connections/{id}`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DatabaseConnectionResponseEnvelope`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `DatabaseConnections.GetDatabaseConnectionConfigByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"restApiJsonError"` [404] `RestApiJsonError` · `"error2"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DatabaseConnections.GetDatabaseConnectionConfigByIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DatabaseConnectionResponseEnvelope` | `databaseConnectionResponseEnvelopeSchema` | `src/models/database-connection-response-envelope.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `RestApiJsonError` | `restApiJsonErrorSchema` | `src/models/rest-api-json-error.ts` |

### updateDatabaseConnectionConfigById

- **Signature**: `updateDatabaseConnectionConfigById(request: DatabaseConnections.UpdateDatabaseConnectionConfigByIdRequest, options?: RequestOptions): ApiPromise<DatabaseConnectionResponseEnvelope, DatabaseConnections.UpdateDatabaseConnectionConfigByIdError>`
- **Wire**: `PATCH /lib/database-connections/{id}`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DatabaseConnectionResponseEnvelope`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `DatabaseConnections.UpdateDatabaseConnectionConfigByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restApiJsonError"` [400] `RestApiJsonError` · `"error"` [401] `Error` · `"restApiJsonError2"` [404] `RestApiJsonError` · `"error423"` [423] no body · `"error2"` [500] `Error` · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DatabaseConnections.UpdateDatabaseConnectionConfigByIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `DatabaseConnectionConfig` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DatabaseConnectionConfig` | `databaseConnectionConfigSchema` | `src/models/database-connection-config.ts` |
| `DatabaseConnectionResponseEnvelope` | `databaseConnectionResponseEnvelopeSchema` | `src/models/database-connection-response-envelope.ts` |
| `RestApiJsonError` | `restApiJsonErrorSchema` | `src/models/rest-api-json-error.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

