<!-- Generated file — do not edit; regenerated with the SDK. -->

# PermissionSets — operations

Accessor: `client.permissionSets` · Source: `src/resources/permission-sets.ts` · 3 operations · Request and error types: namespace `PermissionSets`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `dynamics-365-business-central`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createUserPermission

- **Server**: `defaultBusinessCentralAutomationApiV20CompaniesApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createUserPermission(request: PermissionSets.CreateUserPermissionRequest, options?: RequestOptions): ApiPromise<UserPermission, PermissionSets.CreateUserPermissionError>`
- **Wire**: `POST /companies({company_id})/users({user_id})/userPermissions`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearerAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UserPermission`
- **Error**: `Dynamics365BusinessCentralError` with `kind: "api"`, an instance of `PermissionSets.CreateUserPermissionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PermissionSets.CreateUserPermissionRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `companyId` | `path` | `company_id` | `string` | yes |
| `userId` | `path` | `user_id` | `string` | yes |
| `body` | `body` | — | `CompaniesApiUsersApiUserPermissionsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CompaniesApiUsersApiUserPermissionsRequest` | `companiesApiUsersApiUserPermissionsRequestSchema` | `src/models/companies-api-users-api-user-permissions-request.ts` |
| `UserPermission` | `userPermissionSchema` | `src/models/user-permission.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listPermissionSets

- **Server**: `defaultBusinessCentralAutomationApiV20CompaniesApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listPermissionSets(request: PermissionSets.ListPermissionSetsRequest, options?: RequestOptions): ApiPromise<CompaniesApiPermissionSetsResponse, PermissionSets.ListPermissionSetsError>`
- **Wire**: `GET /companies({company_id})/permissionSets`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CompaniesApiPermissionSetsResponse`
- **Error**: `Dynamics365BusinessCentralError` with `kind: "api"`, an instance of `PermissionSets.ListPermissionSetsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PermissionSets.ListPermissionSetsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `companyId` | `path` | `company_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CompaniesApiPermissionSetsResponse` | `companiesApiPermissionSetsResponseSchema` | `src/models/companies-api-permission-sets-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listUserPermissions

- **Server**: `defaultBusinessCentralAutomationApiV20CompaniesApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listUserPermissions(request: PermissionSets.ListUserPermissionsRequest, options?: RequestOptions): ApiPromise<CompaniesApiUsersApiUserPermissionsResponse, PermissionSets.ListUserPermissionsError>`
- **Wire**: `GET /companies({company_id})/users({user_id})/userPermissions`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CompaniesApiUsersApiUserPermissionsResponse`
- **Error**: `Dynamics365BusinessCentralError` with `kind: "api"`, an instance of `PermissionSets.ListUserPermissionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PermissionSets.ListUserPermissionsRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `companyId` | `path` | `company_id` | `string` | yes |
| `userId` | `path` | `user_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CompaniesApiUsersApiUserPermissionsResponse` | `companiesApiUsersApiUserPermissionsResponseSchema` | `src/models/companies-api-users-api-user-permissions-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

