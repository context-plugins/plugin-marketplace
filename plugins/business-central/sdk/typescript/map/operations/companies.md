<!-- Generated file — do not edit; regenerated with the SDK. -->

# Companies — operations

Accessor: `client.companies` · Source: `src/resources/companies.ts` · 6 operations · Request and error types: namespace `Companies`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `dynamics-365-business-central`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createAutomationCompany

- **Server**: `defaultBusinessCentralAutomationApiV20CompaniesApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createAutomationCompany(request: Companies.CreateAutomationCompanyRequest, options?: RequestOptions): ApiPromise<AutomationCompany, Companies.CreateAutomationCompanyError>`
- **Wire**: `POST /companies({company_id})/automationCompanies`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearerAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AutomationCompany`
- **Error**: `Dynamics365BusinessCentralError` with `kind: "api"`, an instance of `Companies.CreateAutomationCompanyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Companies.CreateAutomationCompanyRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `companyId` | `path` | `company_id` | `string` | yes |
| `body` | `body` | — | `AutomationCompanyCreate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AutomationCompanyCreate` | `automationCompanyCreateSchema` | `src/models/automation-company-create.ts` |
| `AutomationCompany` | `automationCompanySchema` | `src/models/automation-company.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### deleteAutomationCompany

- **Server**: `defaultBusinessCentralAutomationApiV20CompaniesApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteAutomationCompany(request: Companies.DeleteAutomationCompanyRequest, options?: RequestOptions): ApiPromise<undefined, Companies.DeleteAutomationCompanyError>`
- **Wire**: `DELETE /companies({company_id})/automationCompanies({automationCompany_id})`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `Dynamics365BusinessCentralError` with `kind: "api"`, an instance of `Companies.DeleteAutomationCompanyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [404] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Companies.DeleteAutomationCompanyRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `companyId` | `path` | `company_id` | `string` | yes |
| `automationCompanyId` | `path` | `automationCompany_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getAutomationCompany

- **Server**: `defaultBusinessCentralAutomationApiV20CompaniesApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getAutomationCompany(request: Companies.GetAutomationCompanyRequest, options?: RequestOptions): ApiPromise<AutomationCompany, Companies.GetAutomationCompanyError>`
- **Wire**: `GET /companies({company_id})/automationCompanies({automationCompany_id})`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AutomationCompany`
- **Error**: `Dynamics365BusinessCentralError` with `kind: "api"`, an instance of `Companies.GetAutomationCompanyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [404] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Companies.GetAutomationCompanyRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `companyId` | `path` | `company_id` | `string` | yes |
| `automationCompanyId` | `path` | `automationCompany_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AutomationCompany` | `automationCompanySchema` | `src/models/automation-company.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listAutomationCompanies

- **Server**: `defaultBusinessCentralAutomationApiV20CompaniesApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listAutomationCompanies(request: Companies.ListAutomationCompaniesRequest, options?: RequestOptions): ApiPromise<CompaniesApiAutomationCompaniesResponse, Companies.ListAutomationCompaniesError>`
- **Wire**: `GET /companies({company_id})/automationCompanies`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CompaniesApiAutomationCompaniesResponse`
- **Error**: `Dynamics365BusinessCentralError` with `kind: "api"`, an instance of `Companies.ListAutomationCompaniesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Companies.ListAutomationCompaniesRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `companyId` | `path` | `company_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CompaniesApiAutomationCompaniesResponse` | `companiesApiAutomationCompaniesResponseSchema` | `src/models/companies-api-automation-companies-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listCompanies

- **Server**: `defaultBusinessCentralAutomationApiV20CompaniesApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listCompanies(request?: Companies.ListCompaniesRequest, options?: RequestOptions): ApiPromise<CompaniesResponse, Companies.ListCompaniesError>`
- **Wire**: `GET /companies`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CompaniesResponse`
- **Error**: `Dynamics365BusinessCentralError` with `kind: "api"`, an instance of `Companies.ListCompaniesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Companies.ListCompaniesRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `filter` | `query` | `$filter` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CompaniesResponse` | `companiesResponseSchema` | `src/models/companies-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### updateAutomationCompany

- **Server**: `defaultBusinessCentralAutomationApiV20CompaniesApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateAutomationCompany(request: Companies.UpdateAutomationCompanyRequest, options?: RequestOptions): ApiPromise<AutomationCompany, Companies.UpdateAutomationCompanyError>`
- **Wire**: `PATCH /companies({company_id})/automationCompanies({automationCompany_id})`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearerAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AutomationCompany`
- **Error**: `Dynamics365BusinessCentralError` with `kind: "api"`, an instance of `Companies.UpdateAutomationCompanyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Companies.UpdateAutomationCompanyRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `companyId` | `path` | `company_id` | `string` | yes |
| `automationCompanyId` | `path` | `automationCompany_id` | `string` | yes |
| `ifMatch` | `header` | `If-Match` | `string` | yes |
| `body` | `body` | — | `AutomationCompanyUpdate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AutomationCompanyUpdate` | `automationCompanyUpdateSchema` | `src/models/automation-company-update.ts` |
| `AutomationCompany` | `automationCompanySchema` | `src/models/automation-company.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

