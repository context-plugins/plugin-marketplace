<!-- Generated file — do not edit; regenerated with the SDK. -->

# Sql — operations

Accessor: `client.sql` · Source: `src/resources/sql.ts` · 2 operations · Request and error types: namespace `Sql`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `plinth-us-grants-data`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### postApiV1Sql

- **Signature**: `postApiV1Sql(request: Sql.PostApiV1SqlRequest, options?: RequestOptions): ApiPromise<SqlResponse, Sql.PostApiV1SqlError>`
- **Wire**: `POST /api/v1/sql`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SqlResponse`
- **Error**: `PlinthUsGrantsDataError` with `kind: "api"`, an instance of `Sql.PostApiV1SqlError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [401] `ApiErrorModel` · `"apiErrorModel2"` [402] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sql.PostApiV1SqlRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1SqlRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1SqlRequest` | `apiV1SqlRequestSchema` | `src/models/api-v1-sql-request.ts` |
| `SqlResponse` | `sqlResponseSchema` | `src/models/sql-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

### runSql

- **Signature**: `runSql(request: Sql.RunSqlRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Sql.RunSqlError>`
- **Wire**: `POST /api/sql`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `PlinthUsGrantsDataError` with `kind: "api"`, an instance of `Sql.RunSqlError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [401] `ApiErrorModel` · `"apiErrorModel2"` [402] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sql.RunSqlRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiSqlRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiSqlRequest` | `apiSqlRequestSchema` | `src/models/api-sql-request.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

