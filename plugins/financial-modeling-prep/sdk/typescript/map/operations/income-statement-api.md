<!-- Generated file — do not edit; regenerated with the SDK. -->

# IncomeStatementApi — operations

Accessor: `client.incomeStatementApi` · Source: `src/resources/income-statement-api.ts` · 1 operation · Request types: namespace `IncomeStatementApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `financial-modeling-prep`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getIncomeStatement

- **Signature**: `getIncomeStatement(request: IncomeStatementApi.GetIncomeStatementRequest, options?: RequestOptions): ApiPromise<IncomeStatement[], ApiError>`
- **Wire**: `GET /income-statement/{symbol}`
- **Auth**: `apiKeyQuery`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `IncomeStatement[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `FinancialModelingPrepError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `IncomeStatementApi.GetIncomeStatementRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `symbol` | `path` | `string` | yes | — |
| `period` | `query` | `Period` | no | `Period.Annual` |
| `limit` | `query` | `number` | no | `40` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Period` | `periodSchema` | `src/models/period.ts` |
| `IncomeStatement` | `incomeStatementSchema` | `src/models/income-statement.ts` |

