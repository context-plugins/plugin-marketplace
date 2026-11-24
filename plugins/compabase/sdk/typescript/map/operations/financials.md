<!-- Generated file — do not edit; regenerated with the SDK. -->

# Financials — operations

Accessor: `client.financials` · Source: `src/resources/financials.ts` · 3 operations · Request and error types: namespace `Financials`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `compabase`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getCompaniesKrsByKrsFinancialDocuments

- **Signature**: `getCompaniesKrsByKrsFinancialDocuments(request: Financials.GetCompaniesKrsByKrsFinancialDocumentsRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Financials.GetCompaniesKrsByKrsFinancialDocumentsError>`
- **Wire**: `GET /companies/krs/{krs}/financial-documents`
- **Auth**: any of `apiKeyAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `CompabaseError` with `kind: "api"`, an instance of `Financials.GetCompaniesKrsByKrsFinancialDocumentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [404] `ErrorResponse` · `"errorResponse2"` [400] `ErrorResponse` · `"errorResponse3"` [401] `ErrorResponse` · `"errorResponse4"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Financials.GetCompaniesKrsByKrsFinancialDocumentsRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `krs` | `path` | `string` | yes | — |
| `limit` | `query` | `number` | no | `25` |
| `offset` | `query` | `number` | no | `0` |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getCompaniesKrsByKrsFinancialStatements

- **Signature**: `getCompaniesKrsByKrsFinancialStatements(request: Financials.GetCompaniesKrsByKrsFinancialStatementsRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Financials.GetCompaniesKrsByKrsFinancialStatementsError>`
- **Wire**: `GET /companies/krs/{krs}/financial-statements`
- **Auth**: any of `apiKeyAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `CompabaseError` with `kind: "api"`, an instance of `Financials.GetCompaniesKrsByKrsFinancialStatementsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [404] `ErrorResponse` · `"errorResponse2"` [400] `ErrorResponse` · `"errorResponse3"` [401] `ErrorResponse` · `"errorResponse4"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Financials.GetCompaniesKrsByKrsFinancialStatementsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `krs` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getCompaniesKrsByKrsStatistics

- **Signature**: `getCompaniesKrsByKrsStatistics(request: Financials.GetCompaniesKrsByKrsStatisticsRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Financials.GetCompaniesKrsByKrsStatisticsError>`
- **Wire**: `GET /companies/krs/{krs}/statistics`
- **Auth**: any of `apiKeyAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `CompabaseError` with `kind: "api"`, an instance of `Financials.GetCompaniesKrsByKrsStatisticsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [404] `ErrorResponse` · `"errorResponse2"` [400] `ErrorResponse` · `"errorResponse3"` [401] `ErrorResponse` · `"errorResponse4"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Financials.GetCompaniesKrsByKrsStatisticsRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `krs` | `path` | `string` | yes | — |
| `locale` | `query` | `string` | no | `"en"` |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

