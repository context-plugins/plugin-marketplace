<!-- Generated file — do not edit; regenerated with the SDK. -->

# SecurityGroups — operations

Accessor: `client.securityGroups` · Source: `src/resources/security-groups.ts` · 1 operation · Request and error types: namespace `SecurityGroups`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `dynamics-365-business-central`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### listSecurityGroups

- **Server**: `defaultBusinessCentralAutomationApiV20CompaniesApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listSecurityGroups(request: SecurityGroups.ListSecurityGroupsRequest, options?: RequestOptions): ApiPromise<CompaniesApiSecurityGroupsResponse, SecurityGroups.ListSecurityGroupsError>`
- **Wire**: `GET /companies({company_id})/securityGroups`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CompaniesApiSecurityGroupsResponse`
- **Error**: `Dynamics365BusinessCentralError` with `kind: "api"`, an instance of `SecurityGroups.ListSecurityGroupsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SecurityGroups.ListSecurityGroupsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `companyId` | `path` | `company_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CompaniesApiSecurityGroupsResponse` | `companiesApiSecurityGroupsResponseSchema` | `src/models/companies-api-security-groups-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

