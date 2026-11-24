<!-- Generated file — do not edit; regenerated with the SDK. -->

# Users — operations

Accessor: `client.users` · Source: `src/resources/users.ts` · 5 operations · Request and error types: namespace `Users`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `microsoft-dynamics-nav`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getNewUsersFromOffice365

- **Server**: `defaultBusinessCentralAutomationApiV20CompaniesApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getNewUsersFromOffice365(request: Users.GetNewUsersFromOffice365Request, options?: RequestOptions): ApiPromise<undefined, Users.GetNewUsersFromOffice365Error>`
- **Wire**: `POST /companies({company_id})/users/Microsoft.NAV.getNewUsersFromOffice365`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MicrosoftDynamicsNavError` with `kind: "api"`, an instance of `Users.GetNewUsersFromOffice365Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Users.GetNewUsersFromOffice365Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `companyId` | `path` | `company_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getNewUsersFromOffice365Async

- **Server**: `defaultBusinessCentralAutomationApiV20CompaniesApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getNewUsersFromOffice365Async(request: Users.GetNewUsersFromOffice365AsyncRequest, options?: RequestOptions): ApiPromise<undefined, Users.GetNewUsersFromOffice365AsyncError>`
- **Wire**: `POST /companies({company_id})/users/Microsoft.NAV.getNewUsersFromOffice365Async`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MicrosoftDynamicsNavError` with `kind: "api"`, an instance of `Users.GetNewUsersFromOffice365AsyncError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Users.GetNewUsersFromOffice365AsyncRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `companyId` | `path` | `company_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getUser

- **Server**: `defaultBusinessCentralAutomationApiV20CompaniesApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getUser(request: Users.GetUserRequest, options?: RequestOptions): ApiPromise<User, Users.GetUserError>`
- **Wire**: `GET /companies({company_id})/users({user_id})`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `User`
- **Error**: `MicrosoftDynamicsNavError` with `kind: "api"`, an instance of `Users.GetUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [404] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Users.GetUserRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `companyId` | `path` | `company_id` | `string` | yes |
| `userId` | `path` | `user_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `User` | `userSchema` | `src/models/user.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listUsers

- **Server**: `defaultBusinessCentralAutomationApiV20CompaniesApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listUsers(request: Users.ListUsersRequest, options?: RequestOptions): ApiPromise<CompaniesApiUsersResponse, Users.ListUsersError>`
- **Wire**: `GET /companies({company_id})/users`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CompaniesApiUsersResponse`
- **Error**: `MicrosoftDynamicsNavError` with `kind: "api"`, an instance of `Users.ListUsersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Users.ListUsersRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `companyId` | `path` | `company_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CompaniesApiUsersResponse` | `companiesApiUsersResponseSchema` | `src/models/companies-api-users-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### updateUser

- **Server**: `defaultBusinessCentralAutomationApiV20CompaniesApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateUser(request: Users.UpdateUserRequest, options?: RequestOptions): ApiPromise<User, Users.UpdateUserError>`
- **Wire**: `PATCH /companies({company_id})/users({user_id})`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearerAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `User`
- **Error**: `MicrosoftDynamicsNavError` with `kind: "api"`, an instance of `Users.UpdateUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Users.UpdateUserRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `companyId` | `path` | `company_id` | `string` | yes |
| `userId` | `path` | `user_id` | `string` | yes |
| `ifMatch` | `header` | `If-Match` | `string` | yes |
| `body` | `body` | — | `UserUpdate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UserUpdate` | `userUpdateSchema` | `src/models/user-update.ts` |
| `User` | `userSchema` | `src/models/user.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

