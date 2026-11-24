<!-- Generated file — do not edit; regenerated with the SDK. -->

# Employees — operations

Accessor: `client.employees` · Source: `src/resources/employees.ts` · 1 operation · Request and error types: namespace `Employees`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `microsoft-dynamics-nav`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### listEmployees

- **Signature**: `listEmployees(request: Employees.ListEmployeesRequest, options?: RequestOptions): ApiPromise<CompaniesApiEmployeesResponse, Employees.ListEmployeesError>`
- **Wire**: `GET /companies({company_id})/employees`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CompaniesApiEmployeesResponse`
- **Error**: `MicrosoftDynamicsNavError` with `kind: "api"`, an instance of `Employees.ListEmployeesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Employees.ListEmployeesRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `companyId` | `path` | `company_id` | `string` | yes |
| `top` | `query` | `$top` | `number` | no |
| `skip` | `query` | `$skip` | `number` | no |
| `filter` | `query` | `$filter` | `string` | no |
| `orderby` | `query` | `$orderby` | `string` | no |
| `select` | `query` | `$select` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CompaniesApiEmployeesResponse` | `companiesApiEmployeesResponseSchema` | `src/models/companies-api-employees-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

