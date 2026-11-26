<!-- Generated file — do not edit; regenerated with the SDK. -->

# Partner — operations

Accessor: `client.partner` · Source: `src/resources/partner.ts` · 14 operations · Request and error types: namespace `Partner`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `bill`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### archivePartnerUser

- **Signature**: `archivePartnerUser(request: Partner.ArchivePartnerUserRequest, options?: RequestOptions): ApiPromise<OrganizationUserResponseDto, Partner.ArchivePartnerUserError>`
- **Wire**: `POST /v3/partner/users/{userId}/archive`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `OrganizationUserResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `Partner.ArchivePartnerUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Partner.ArchivePartnerUserRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `userId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `appKey` | `header` | `string` | no |
| `organizationId` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `OrganizationUserResponseDto` | `organizationUserResponseDtoSchema` | `src/models/organization-user-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### createOrganization

- **Signature**: `createOrganization(request: Partner.CreateOrganizationRequest, options?: RequestOptions): ApiPromise<OrganizationResponseDto, Partner.CreateOrganizationError>`
- **Wire**: `POST /v3/partner/organizations`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `OrganizationResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `Partner.CreateOrganizationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Partner.CreateOrganizationRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sessionId` | `header` | `string` | no |
| `appKey` | `header` | `string` | no |
| `body` | `body` | `OrganizationCreateRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `OrganizationCreateRequestDto` | `organizationCreateRequestDtoSchema` | `src/models/organization-create-request-dto.ts` |
| `OrganizationResponseDto` | `organizationResponseDtoSchema` | `src/models/organization-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### createPartnerUser

- **Signature**: `createPartnerUser(request: Partner.CreatePartnerUserRequest, options?: RequestOptions): ApiPromise<OrganizationUserResponseDto, Partner.CreatePartnerUserError>`
- **Wire**: `POST /v3/partner/users`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `OrganizationUserResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `Partner.CreatePartnerUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Partner.CreatePartnerUserRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sessionId` | `header` | `string` | no |
| `appKey` | `header` | `string` | no |
| `organizationId` | `header` | `string` | no |
| `body` | `body` | `PartnerUserCreateRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PartnerUserCreateRequestDto` | `partnerUserCreateRequestDtoSchema` | `src/models/partner-user-create-request-dto.ts` |
| `OrganizationUserResponseDto` | `organizationUserResponseDtoSchema` | `src/models/organization-user-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### createPhone

- **Signature**: `createPhone(request: Partner.CreatePhoneRequest, options?: RequestOptions): ApiPromise<undefined, Partner.CreatePhoneError>`
- **Wire**: `POST /v3/partner/risk-verifications/{userId}/phone`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `BillError` with `kind: "api"`, an instance of `Partner.CreatePhoneError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Partner.CreatePhoneRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `userId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `appKey` | `header` | `string` | no |
| `organizationId` | `header` | `string` | no |
| `body` | `body` | `PhoneVerificationRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PhoneVerificationRequestDto` | `phoneVerificationRequestDtoSchema` | `src/models/phone-verification-request-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### getPartnerUser

- **Signature**: `getPartnerUser(request: Partner.GetPartnerUserRequest, options?: RequestOptions): ApiPromise<OrganizationUserResponseDto, Partner.GetPartnerUserError>`
- **Wire**: `GET /v3/partner/users/{userId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `OrganizationUserResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `Partner.GetPartnerUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Partner.GetPartnerUserRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `userId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `appKey` | `header` | `string` | no |
| `organizationId` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `OrganizationUserResponseDto` | `organizationUserResponseDtoSchema` | `src/models/organization-user-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### getPartnerUserRole

- **Signature**: `getPartnerUserRole(request: Partner.GetPartnerUserRoleRequest, options?: RequestOptions): ApiPromise<RoleResponseDto, Partner.GetPartnerUserRoleError>`
- **Wire**: `GET /v3/partner/roles/{roleId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RoleResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `Partner.GetPartnerUserRoleError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Partner.GetPartnerUserRoleRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `roleId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `appKey` | `header` | `string` | no |
| `organizationId` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `RoleResponseDto` | `roleResponseDtoSchema` | `src/models/role-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### listPartnerOrganizations

- **Signature**: `listPartnerOrganizations(request?: Partner.ListPartnerOrganizationsRequest, options?: RequestOptions): ApiPromise<ListResponseDtoOrganizationResponseDto, Partner.ListPartnerOrganizationsError>`
- **Wire**: `GET /v3/partner/organizations`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListResponseDtoOrganizationResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `Partner.ListPartnerOrganizationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Partner.ListPartnerOrganizationsRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `max` | `query` | `number` | no |
| `sort` | `query` | `string` | no |
| `filters` | `query` | `string` | no |
| `page` | `query` | `string` | no |
| `sessionId` | `header` | `string` | no |
| `appKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListResponseDtoOrganizationResponseDto` | `listResponseDtoOrganizationResponseDtoSchema` | `src/models/list-response-dto-organization-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### listPartnerUserRoles

- **Signature**: `listPartnerUserRoles(request?: Partner.ListPartnerUserRolesRequest, options?: RequestOptions): ApiPromise<ListResponseDtoRoleResponseDto, Partner.ListPartnerUserRolesError>`
- **Wire**: `GET /v3/partner/roles`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListResponseDtoRoleResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `Partner.ListPartnerUserRolesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Partner.ListPartnerUserRolesRequest` (7):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `max` | `query` | `number` | no |
| `sort` | `query` | `string` | no |
| `filters` | `query` | `string` | no |
| `page` | `query` | `string` | no |
| `sessionId` | `header` | `string` | no |
| `appKey` | `header` | `string` | no |
| `organizationId` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListResponseDtoRoleResponseDto` | `listResponseDtoRoleResponseDtoSchema` | `src/models/list-response-dto-role-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### listPartnerUsers

- **Signature**: `listPartnerUsers(request?: Partner.ListPartnerUsersRequest, options?: RequestOptions): ApiPromise<ListResponseDtoOrganizationUserResponseDto, Partner.ListPartnerUsersError>`
- **Wire**: `GET /v3/partner/users`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListResponseDtoOrganizationUserResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `Partner.ListPartnerUsersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Partner.ListPartnerUsersRequest` (7):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `max` | `query` | `number` | no |
| `sort` | `query` | `string` | no |
| `filters` | `query` | `string` | no |
| `page` | `query` | `string` | no |
| `sessionId` | `header` | `string` | no |
| `appKey` | `header` | `string` | no |
| `organizationId` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListResponseDtoOrganizationUserResponseDto` | `listResponseDtoOrganizationUserResponseDtoSchema` | `src/models/list-response-dto-organization-user-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### loginAsUser

- **Signature**: `loginAsUser(request: Partner.LoginAsUserRequest, options?: RequestOptions): ApiPromise<LoginAsUserResponseDto, Partner.LoginAsUserError>`
- **Wire**: `POST /v3/partner/login-as-user`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `LoginAsUserResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `Partner.LoginAsUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Partner.LoginAsUserRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sessionId` | `header` | `string` | no |
| `appKey` | `header` | `string` | no |
| `body` | `body` | `LoginAsUserRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LoginAsUserRequestDto` | `loginAsUserRequestDtoSchema` | `src/models/login-as-user-request-dto.ts` |
| `LoginAsUserResponseDto` | `loginAsUserResponseDtoSchema` | `src/models/login-as-user-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### partnerLogin

- **Signature**: `partnerLogin(request: Partner.PartnerLoginRequest, options?: RequestOptions): ApiPromise<PartnerLoginResponseDto, Partner.PartnerLoginError>`
- **Wire**: `POST /v3/partner/login`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PartnerLoginResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `Partner.PartnerLoginError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Partner.PartnerLoginRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `PartnerLoginRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PartnerLoginRequestDto` | `partnerLoginRequestDtoSchema` | `src/models/partner-login-request-dto.ts` |
| `PartnerLoginResponseDto` | `partnerLoginResponseDtoSchema` | `src/models/partner-login-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### restorePartnerUser

- **Signature**: `restorePartnerUser(request: Partner.RestorePartnerUserRequest, options?: RequestOptions): ApiPromise<OrganizationUserResponseDto, Partner.RestorePartnerUserError>`
- **Wire**: `POST /v3/partner/users/{userId}/restore`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `OrganizationUserResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `Partner.RestorePartnerUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Partner.RestorePartnerUserRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `userId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `appKey` | `header` | `string` | no |
| `organizationId` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `OrganizationUserResponseDto` | `organizationUserResponseDtoSchema` | `src/models/organization-user-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### updateOrgPartnerPricePlan

- **Signature**: `updateOrgPartnerPricePlan(request: Partner.UpdateOrgPartnerPricePlanRequest, options?: RequestOptions): ApiPromise<StatusDto, Partner.UpdateOrgPartnerPricePlanError>`
- **Wire**: `PATCH /v3/partner/organizations/{organizationId}/price-plan`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `StatusDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `Partner.UpdateOrgPartnerPricePlanError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Partner.UpdateOrgPartnerPricePlanRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `appKey` | `header` | `string` | no |
| `body` | `body` | `UpdateOrgPricePlanRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateOrgPricePlanRequest` | `updateOrgPricePlanRequestSchema` | `src/models/update-org-price-plan-request.ts` |
| `StatusDto` | `statusDtoSchema` | `src/models/status-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### updatePartnerUser

- **Signature**: `updatePartnerUser(request: Partner.UpdatePartnerUserRequest, options?: RequestOptions): ApiPromise<OrganizationUserResponseDto, Partner.UpdatePartnerUserError>`
- **Wire**: `PATCH /v3/partner/users/{userId}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `OrganizationUserResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `Partner.UpdatePartnerUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Partner.UpdatePartnerUserRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `userId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `appKey` | `header` | `string` | no |
| `organizationId` | `header` | `string` | no |
| `body` | `body` | `PartnerUserUpdateRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PartnerUserUpdateRequestDto` | `partnerUserUpdateRequestDtoSchema` | `src/models/partner-user-update-request-dto.ts` |
| `OrganizationUserResponseDto` | `organizationUserResponseDtoSchema` | `src/models/organization-user-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

