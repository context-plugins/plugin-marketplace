<!-- Generated file — do not edit; regenerated with the SDK. -->

# Collect — operations

Accessor: `client.collect` · Source: `src/resources/collect.ts` · 2 operations · Request and error types: namespace `Collect`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `coresignal`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### bulkCollectCompanies

- **Signature**: `bulkCollectCompanies(request: Collect.BulkCollectCompaniesRequest, options?: RequestOptions): ApiPromise<Company[], ApiError>`
- **Wire**: `POST /bulk_collect`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Company[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CoresignalError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Collect.BulkCollectCompaniesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BulkCollectRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BulkCollectRequest` | `bulkCollectRequestSchema` | `src/models/bulk-collect-request.ts` |
| `Company` | `companySchema` | `src/models/company.ts` |

### collectCompany

- **Signature**: `collectCompany(request: Collect.CollectCompanyRequest, options?: RequestOptions): ApiPromise<Company, Collect.CollectCompanyError>`
- **Wire**: `GET /collect/{id}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Company`
- **Error**: `CoresignalError` with `kind: "api"`, an instance of `Collect.CollectCompanyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"error401"` [401] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Collect.CollectCompanyRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Company` | `companySchema` | `src/models/company.ts` |

