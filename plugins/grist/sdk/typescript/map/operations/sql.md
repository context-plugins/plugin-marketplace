<!-- Generated file — do not edit; regenerated with the SDK. -->

# Sql — operations

Accessor: `client.sql` · Source: `src/resources/sql.ts` · 2 operations · Request types: namespace `Sql`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `grist-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### runSql

- **Signature**: `runSql(request: Sql.RunSqlRequest, options?: RequestOptions): ApiPromise<SqlResultSet, ApiError>`
- **Wire**: `POST /docs/{docId}/sql`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SqlResultSet`
- **Error**: `GristApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Sql.RunSqlRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `docId` | `path` | `string` | yes |
| `body` | `body` | `DocsSqlRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DocsSqlRequest` | `docsSqlRequestSchema` | `src/models/docs-sql-request.ts` |
| `SqlResultSet` | `sqlResultSetSchema` | `src/models/sql-result-set.ts` |

### runSqlGet

- **Signature**: `runSqlGet(request: Sql.RunSqlGetRequest, options?: RequestOptions): ApiPromise<SqlResultSet, ApiError>`
- **Wire**: `GET /docs/{docId}/sql`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SqlResultSet`
- **Error**: `GristApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Sql.RunSqlGetRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `docId` | `path` | `string` | yes |
| `q` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SqlResultSet` | `sqlResultSetSchema` | `src/models/sql-result-set.ts` |

