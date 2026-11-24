<!-- Generated file — do not edit; regenerated with the SDK. -->

# Partner — operations

Accessor: `client.partner` · Source: `divvy/apis/partner.py` · 14 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.partner.archive_partner_user

- **Route**: `POST /v3/partner/users/{userId}/archive`
- **Server**: `default`
- **Signature**: `def archive_partner_user(user_id: str, *, session_id: str | None = None, app_key: str | None = None, organization_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `user_id`
- **Params**: `user_id` — path `userId` · `session_id` — header `sessionId` · `app_key` — header `appKey` · `organization_id` — header `organizationId`
- **Returns (parsed)**: `OrganizationUserResponseDto`
- **Returns (raw)**: `ApiResult[OrganizationUserResponseDto, ArchivePartnerUserErrorBody]`
- **Error**: `ArchivePartnerUserErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `OrganizationUserResponseDto` | `divvy/models/organization_user_response_dto.py` |
| `ArchivePartnerUserErrorBody` | `divvy/errors/archive_partner_user_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.partner.create_organization

- **Route**: `POST /v3/partner/organizations`
- **Server**: `default`
- **Signature**: `def create_organization(body: OrganizationCreateRequestDto | OrganizationCreateRequestDtoDict, *, session_id: str | None = None, app_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `session_id` — header `sessionId` · `app_key` — header `appKey` · `body` — JSON body
- **Returns (parsed)**: `OrganizationResponseDto`
- **Returns (raw)**: `ApiResult[OrganizationResponseDto, CreateOrganizationErrorBody]`
- **Error**: `CreateOrganizationErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `OrganizationCreateRequestDto` | `divvy/models/organization_create_request_dto.py` |
| `OrganizationCreateRequestDtoDict` | `divvy/models/organization_create_request_dto.py` |
| `OrganizationResponseDto` | `divvy/models/organization_response_dto.py` |
| `CreateOrganizationErrorBody` | `divvy/errors/create_organization_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.partner.create_partner_user

- **Route**: `POST /v3/partner/users`
- **Server**: `default`
- **Signature**: `def create_partner_user(body: PartnerUserCreateRequestDto | PartnerUserCreateRequestDtoDict, *, session_id: str | None = None, app_key: str | None = None, organization_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `session_id` — header `sessionId` · `app_key` — header `appKey` · `organization_id` — header `organizationId` · `body` — JSON body
- **Returns (parsed)**: `OrganizationUserResponseDto`
- **Returns (raw)**: `ApiResult[OrganizationUserResponseDto, CreatePartnerUserErrorBody]`
- **Error**: `CreatePartnerUserErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PartnerUserCreateRequestDto` | `divvy/models/partner_user_create_request_dto.py` |
| `PartnerUserCreateRequestDtoDict` | `divvy/models/partner_user_create_request_dto.py` |
| `OrganizationUserResponseDto` | `divvy/models/organization_user_response_dto.py` |
| `CreatePartnerUserErrorBody` | `divvy/errors/create_partner_user_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.partner.create_phone

- **Route**: `POST /v3/partner/risk-verifications/{userId}/phone`
- **Server**: `default`
- **Signature**: `def create_phone(user_id: str, body: PhoneVerificationRequestDto | PhoneVerificationRequestDtoDict, *, session_id: str | None = None, app_key: str | None = None, organization_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `user_id`, `body`
- **Params**: `user_id` — path `userId` · `session_id` — header `sessionId` · `app_key` — header `appKey` · `organization_id` — header `organizationId` · `body` — JSON body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CreatePhoneErrorBody]`
- **Error**: `CreatePhoneErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PhoneVerificationRequestDto` | `divvy/models/phone_verification_request_dto.py` |
| `PhoneVerificationRequestDtoDict` | `divvy/models/phone_verification_request_dto.py` |
| `CreatePhoneErrorBody` | `divvy/errors/create_phone_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.partner.get_partner_user

- **Route**: `GET /v3/partner/users/{userId}`
- **Server**: `default`
- **Signature**: `def get_partner_user(user_id: str, *, session_id: str | None = None, app_key: str | None = None, organization_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `user_id`
- **Params**: `user_id` — path `userId` · `session_id` — header `sessionId` · `app_key` — header `appKey` · `organization_id` — header `organizationId`
- **Returns (parsed)**: `OrganizationUserResponseDto`
- **Returns (raw)**: `ApiResult[OrganizationUserResponseDto, GetPartnerUserErrorBody]`
- **Error**: `GetPartnerUserErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `OrganizationUserResponseDto` | `divvy/models/organization_user_response_dto.py` |
| `GetPartnerUserErrorBody` | `divvy/errors/get_partner_user_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.partner.get_partner_user_role

- **Route**: `GET /v3/partner/roles/{roleId}`
- **Server**: `default`
- **Signature**: `def get_partner_user_role(role_id: str, *, session_id: str | None = None, app_key: str | None = None, organization_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `role_id`
- **Params**: `role_id` — path `roleId` · `session_id` — header `sessionId` · `app_key` — header `appKey` · `organization_id` — header `organizationId`
- **Returns (parsed)**: `RoleResponseDto`
- **Returns (raw)**: `ApiResult[RoleResponseDto, GetPartnerUserRoleErrorBody]`
- **Error**: `GetPartnerUserRoleErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RoleResponseDto` | `divvy/models/role_response_dto.py` |
| `GetPartnerUserRoleErrorBody` | `divvy/errors/get_partner_user_role_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.partner.list_partner_organizations

- **Route**: `GET /v3/partner/organizations`
- **Server**: `default`
- **Signature**: `def list_partner_organizations(*, max_: int | None = None, sort: str | None = None, filters: str | None = None, page: str | None = None, session_id: str | None = None, app_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `max_` — query `max` · `sort` — query · `filters` — query · `page` — query · `session_id` — header `sessionId` · `app_key` — header `appKey`
- **Returns (parsed)**: `ListResponseDtoOrganizationResponseDto`
- **Returns (raw)**: `ApiResult[ListResponseDtoOrganizationResponseDto, ListPartnerOrganizationsErrorBody]`
- **Error**: `ListPartnerOrganizationsErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListResponseDtoOrganizationResponseDto` | `divvy/models/list_response_dto_organization_response_dto.py` |
| `ListPartnerOrganizationsErrorBody` | `divvy/errors/list_partner_organizations_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.partner.list_partner_user_roles

- **Route**: `GET /v3/partner/roles`
- **Server**: `default`
- **Signature**: `def list_partner_user_roles(*, max_: int | None = None, sort: str | None = None, filters: str | None = None, page: str | None = None, session_id: str | None = None, app_key: str | None = None, organization_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `max_` — query `max` · `sort` — query · `filters` — query · `page` — query · `session_id` — header `sessionId` · `app_key` — header `appKey` · `organization_id` — header `organizationId`
- **Returns (parsed)**: `ListResponseDtoRoleResponseDto`
- **Returns (raw)**: `ApiResult[ListResponseDtoRoleResponseDto, ListPartnerUserRolesErrorBody]`
- **Error**: `ListPartnerUserRolesErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListResponseDtoRoleResponseDto` | `divvy/models/list_response_dto_role_response_dto.py` |
| `ListPartnerUserRolesErrorBody` | `divvy/errors/list_partner_user_roles_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.partner.list_partner_users

- **Route**: `GET /v3/partner/users`
- **Server**: `default`
- **Signature**: `def list_partner_users(*, max_: int | None = None, sort: str | None = None, filters: str | None = None, page: str | None = None, session_id: str | None = None, app_key: str | None = None, organization_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `max_` — query `max` · `sort` — query · `filters` — query · `page` — query · `session_id` — header `sessionId` · `app_key` — header `appKey` · `organization_id` — header `organizationId`
- **Returns (parsed)**: `ListResponseDtoOrganizationUserResponseDto`
- **Returns (raw)**: `ApiResult[ListResponseDtoOrganizationUserResponseDto, ListPartnerUsersErrorBody]`
- **Error**: `ListPartnerUsersErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListResponseDtoOrganizationUserResponseDto` | `divvy/models/list_response_dto_organization_user_response_dto.py` |
| `ListPartnerUsersErrorBody` | `divvy/errors/list_partner_users_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.partner.login_as_user

- **Route**: `POST /v3/partner/login-as-user`
- **Server**: `default`
- **Signature**: `def login_as_user(body: LoginAsUserRequestDto | LoginAsUserRequestDtoDict, *, session_id: str | None = None, app_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `session_id` — header `sessionId` · `app_key` — header `appKey` · `body` — JSON body
- **Returns (parsed)**: `LoginAsUserResponseDto`
- **Returns (raw)**: `ApiResult[LoginAsUserResponseDto, LoginAsUserErrorBody]`
- **Error**: `LoginAsUserErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `LoginAsUserRequestDto` | `divvy/models/login_as_user_request_dto.py` |
| `LoginAsUserRequestDtoDict` | `divvy/models/login_as_user_request_dto.py` |
| `LoginAsUserResponseDto` | `divvy/models/login_as_user_response_dto.py` |
| `LoginAsUserErrorBody` | `divvy/errors/login_as_user_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.partner.partner_login

- **Route**: `POST /v3/partner/login`
- **Server**: `default`
- **Signature**: `def partner_login(body: PartnerLoginRequestDto | PartnerLoginRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `PartnerLoginResponseDto`
- **Returns (raw)**: `ApiResult[PartnerLoginResponseDto, PartnerLoginErrorBody]`
- **Error**: `PartnerLoginErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PartnerLoginRequestDto` | `divvy/models/partner_login_request_dto.py` |
| `PartnerLoginRequestDtoDict` | `divvy/models/partner_login_request_dto.py` |
| `PartnerLoginResponseDto` | `divvy/models/partner_login_response_dto.py` |
| `PartnerLoginErrorBody` | `divvy/errors/partner_login_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.partner.restore_partner_user

- **Route**: `POST /v3/partner/users/{userId}/restore`
- **Server**: `default`
- **Signature**: `def restore_partner_user(user_id: str, *, session_id: str | None = None, app_key: str | None = None, organization_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `user_id`
- **Params**: `user_id` — path `userId` · `session_id` — header `sessionId` · `app_key` — header `appKey` · `organization_id` — header `organizationId`
- **Returns (parsed)**: `OrganizationUserResponseDto`
- **Returns (raw)**: `ApiResult[OrganizationUserResponseDto, RestorePartnerUserErrorBody]`
- **Error**: `RestorePartnerUserErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `OrganizationUserResponseDto` | `divvy/models/organization_user_response_dto.py` |
| `RestorePartnerUserErrorBody` | `divvy/errors/restore_partner_user_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.partner.update_org_partner_price_plan

- **Route**: `PATCH /v3/partner/organizations/{organizationId}/price-plan`
- **Server**: `default`
- **Signature**: `def update_org_partner_price_plan(organization_id: str, body: UpdateOrgPricePlanRequest | UpdateOrgPricePlanRequestDict, *, session_id: str | None = None, app_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organization_id`, `body`
- **Params**: `organization_id` — path `organizationId` · `session_id` — header `sessionId` · `app_key` — header `appKey` · `body` — JSON body
- **Returns (parsed)**: `StatusDto`
- **Returns (raw)**: `ApiResult[StatusDto, UpdateOrgPartnerPricePlanErrorBody]`
- **Error**: `UpdateOrgPartnerPricePlanErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateOrgPricePlanRequest` | `divvy/models/update_org_price_plan_request.py` |
| `UpdateOrgPricePlanRequestDict` | `divvy/models/update_org_price_plan_request.py` |
| `StatusDto` | `divvy/models/status_dto.py` |
| `UpdateOrgPartnerPricePlanErrorBody` | `divvy/errors/update_org_partner_price_plan_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.partner.update_partner_user

- **Route**: `PATCH /v3/partner/users/{userId}`
- **Server**: `default`
- **Signature**: `def update_partner_user(user_id: str, body: PartnerUserUpdateRequestDto | PartnerUserUpdateRequestDtoDict, *, session_id: str | None = None, app_key: str | None = None, organization_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `user_id`, `body`
- **Params**: `user_id` — path `userId` · `session_id` — header `sessionId` · `app_key` — header `appKey` · `organization_id` — header `organizationId` · `body` — JSON body
- **Returns (parsed)**: `OrganizationUserResponseDto`
- **Returns (raw)**: `ApiResult[OrganizationUserResponseDto, UpdatePartnerUserErrorBody]`
- **Error**: `UpdatePartnerUserErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PartnerUserUpdateRequestDto` | `divvy/models/partner_user_update_request_dto.py` |
| `PartnerUserUpdateRequestDtoDict` | `divvy/models/partner_user_update_request_dto.py` |
| `OrganizationUserResponseDto` | `divvy/models/organization_user_response_dto.py` |
| `UpdatePartnerUserErrorBody` | `divvy/errors/update_partner_user_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

