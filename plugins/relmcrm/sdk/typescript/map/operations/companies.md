<!-- Generated file — do not edit; regenerated with the SDK. -->

# Companies — operations

Accessor: `client.companies` · Source: `src/resources/companies.ts` · 6 operations · Request types: namespace `Companies`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `relm-crm`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createCompany

- **Signature**: `createCompany(request: Companies.CreateCompanyRequest, options?: RequestOptions): ApiPromise<Company, ApiError>`
- **Wire**: `POST /companies`
- **Auth**: any of `bearerAuth`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `Company`
- **Error**: `RelmCrmError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Companies.CreateCompanyRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `idempotencyKey` | `header` | `Idempotency-Key` | `string` | no |
| `body` | `body` | — | `CompanyInput` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CompanyInput` | `companyInputSchema` | `src/models/company-input.ts` |
| `Company` | `companySchema` | `src/models/company.ts` |

### deleteCompany

- **Signature**: `deleteCompany(request: Companies.DeleteCompanyRequest, options?: RequestOptions): ApiPromise<Deleted, ApiError>`
- **Wire**: `DELETE /companies/{id}`
- **Auth**: any of `bearerAuth`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Deleted`
- **Error**: `RelmCrmError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Companies.DeleteCompanyRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Deleted` | `deletedSchema` | `src/models/deleted.ts` |

### getCompany

- **Signature**: `getCompany(request: Companies.GetCompanyRequest, options?: RequestOptions): ApiPromise<Company, ApiError>`
- **Wire**: `GET /companies/{id}`
- **Auth**: any of `bearerAuth`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Company`
- **Error**: `RelmCrmError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Companies.GetCompanyRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Company` | `companySchema` | `src/models/company.ts` |

### listCompanies

- **Signature**: `listCompanies(request?: Companies.ListCompaniesRequest, options?: RequestOptions): ApiPromise<CompanyList, ApiError>`
- **Wire**: `GET /companies`
- **Auth**: any of `bearerAuth`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CompanyList`
- **Error**: `RelmCrmError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Companies.ListCompaniesRequest` (5):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `limit` | `query` | — | `number` | no | `25` |
| `cursor` | `query` | — | `string` | no | — |
| `includeDeleted` | `query` | `include_deleted` | `boolean` | no | — |
| `q` | `query` | — | `string` | no | — |
| `domain` | `query` | — | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `CompanyList` | `companyListSchema` | `src/models/company-list.ts` |

### restoreCompany

- **Signature**: `restoreCompany(request: Companies.RestoreCompanyRequest, options?: RequestOptions): ApiPromise<Company, ApiError>`
- **Wire**: `POST /companies/{id}/restore`
- **Auth**: any of `bearerAuth`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Company`
- **Error**: `RelmCrmError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Companies.RestoreCompanyRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Company` | `companySchema` | `src/models/company.ts` |

### updateCompany

- **Signature**: `updateCompany(request: Companies.UpdateCompanyRequest, options?: RequestOptions): ApiPromise<Company, ApiError>`
- **Wire**: `PATCH /companies/{id}`
- **Auth**: any of `bearerAuth`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Company`
- **Error**: `RelmCrmError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Companies.UpdateCompanyRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `ifMatch` | `header` | `If-Match` | `string` | no |
| `body` | `body` | — | `CompanyInput` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CompanyInput` | `companyInputSchema` | `src/models/company-input.ts` |
| `Company` | `companySchema` | `src/models/company.ts` |

