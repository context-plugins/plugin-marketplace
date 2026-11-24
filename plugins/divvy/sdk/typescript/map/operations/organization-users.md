<!-- Generated file — do not edit; regenerated with the SDK. -->

# OrganizationUsers — operations

Accessor: `client.organizationUsers` · Source: `src/resources/organization-users.ts` · 6 operations · Request and error types: namespace `OrganizationUsers`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `divvy`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### archiveOrganizationUser

- **Signature**: `archiveOrganizationUser(request: OrganizationUsers.ArchiveOrganizationUserRequest, options?: RequestOptions): ApiPromise<OrganizationUserResponseDto, OrganizationUsers.ArchiveOrganizationUserError>`
- **Wire**: `POST /v3/users/{userId}/archive`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `OrganizationUserResponseDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `OrganizationUsers.ArchiveOrganizationUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OrganizationUsers.ArchiveOrganizationUserRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `userId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `OrganizationUserResponseDto` | `organizationUserResponseDtoSchema` | `src/models/organization-user-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### createOrganizationUser

- **Signature**: `createOrganizationUser(request: OrganizationUsers.CreateOrganizationUserRequest, options?: RequestOptions): ApiPromise<OrganizationUserResponseDto, OrganizationUsers.CreateOrganizationUserError>`
- **Wire**: `POST /v3/users`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `OrganizationUserResponseDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `OrganizationUsers.CreateOrganizationUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OrganizationUsers.CreateOrganizationUserRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `body` | `body` | `OrganizationUserCreateRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `OrganizationUserCreateRequestDto` | `organizationUserCreateRequestDtoSchema` | `src/models/organization-user-create-request-dto.ts` |
| `OrganizationUserResponseDto` | `organizationUserResponseDtoSchema` | `src/models/organization-user-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### getOrganizationUser

- **Signature**: `getOrganizationUser(request: OrganizationUsers.GetOrganizationUserRequest, options?: RequestOptions): ApiPromise<OrganizationUserResponseDto, OrganizationUsers.GetOrganizationUserError>`
- **Wire**: `GET /v3/users/{userId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `OrganizationUserResponseDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `OrganizationUsers.GetOrganizationUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OrganizationUsers.GetOrganizationUserRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `userId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `OrganizationUserResponseDto` | `organizationUserResponseDtoSchema` | `src/models/organization-user-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### listOrganizationUsers

- **Signature**: `listOrganizationUsers(request?: OrganizationUsers.ListOrganizationUsersRequest, options?: RequestOptions): ApiPromise<ListResponseDtoOrganizationUserResponseDto, OrganizationUsers.ListOrganizationUsersError>`
- **Wire**: `GET /v3/users`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListResponseDtoOrganizationUserResponseDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `OrganizationUsers.ListOrganizationUsersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OrganizationUsers.ListOrganizationUsersRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `max` | `query` | `number` | no |
| `sort` | `query` | `string` | no |
| `filters` | `query` | `string` | no |
| `page` | `query` | `string` | no |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListResponseDtoOrganizationUserResponseDto` | `listResponseDtoOrganizationUserResponseDtoSchema` | `src/models/list-response-dto-organization-user-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### restoreOrganizationUser

- **Signature**: `restoreOrganizationUser(request: OrganizationUsers.RestoreOrganizationUserRequest, options?: RequestOptions): ApiPromise<OrganizationUserResponseDto, OrganizationUsers.RestoreOrganizationUserError>`
- **Wire**: `POST /v3/users/{userId}/restore`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `OrganizationUserResponseDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `OrganizationUsers.RestoreOrganizationUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OrganizationUsers.RestoreOrganizationUserRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `userId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `OrganizationUserResponseDto` | `organizationUserResponseDtoSchema` | `src/models/organization-user-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### updateOrganizationUser

- **Signature**: `updateOrganizationUser(request: OrganizationUsers.UpdateOrganizationUserRequest, options?: RequestOptions): ApiPromise<OrganizationUserResponseDto, OrganizationUsers.UpdateOrganizationUserError>`
- **Wire**: `PATCH /v3/users/{userId}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `OrganizationUserResponseDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `OrganizationUsers.UpdateOrganizationUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OrganizationUsers.UpdateOrganizationUserRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `userId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `body` | `body` | `OrganizationUserUpdateRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `OrganizationUserUpdateRequestDto` | `organizationUserUpdateRequestDtoSchema` | `src/models/organization-user-update-request-dto.ts` |
| `OrganizationUserResponseDto` | `organizationUserResponseDtoSchema` | `src/models/organization-user-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

