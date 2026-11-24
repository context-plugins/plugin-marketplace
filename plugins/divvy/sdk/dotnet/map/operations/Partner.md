<!-- Generated file — do not edit; regenerated with the SDK. -->

# Partner — operations

Accessor: `client.Partner` · Source: `src/Divvy/Api/Partner.cs` · 14 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ArchivePartnerUser

- **Signature**: `ArchivePartnerUser(ArchivePartnerUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserId`
- **Returns**: `OrganizationUserResponseDto`
- **Error**: `ApiException<ArchivePartnerUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ArchivePartnerUserRequest` | `src/Divvy/Requests/Partner/ArchivePartnerUserRequest.cs` |
| `OrganizationUserResponseDto` | `src/Divvy/Models/OrganizationUserResponseDto.cs` |
| `ArchivePartnerUserError` | `src/Divvy/Errors/ArchivePartnerUserError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### CreateOrganization

- **Signature**: `CreateOrganization(CreateOrganizationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `OrganizationResponseDto`
- **Error**: `ApiException<CreateOrganizationError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateOrganizationRequest` | `src/Divvy/Requests/Partner/CreateOrganizationRequest.cs` |
| `OrganizationCreateRequestDto` | `src/Divvy/Models/OrganizationCreateRequestDto.cs` |
| `OrganizationResponseDto` | `src/Divvy/Models/OrganizationResponseDto.cs` |
| `CreateOrganizationError` | `src/Divvy/Errors/CreateOrganizationError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### CreatePartnerUser

- **Signature**: `CreatePartnerUser(CreatePartnerUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `OrganizationUserResponseDto`
- **Error**: `ApiException<CreatePartnerUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreatePartnerUserRequest` | `src/Divvy/Requests/Partner/CreatePartnerUserRequest.cs` |
| `PartnerUserCreateRequestDto` | `src/Divvy/Models/PartnerUserCreateRequestDto.cs` |
| `OrganizationUserResponseDto` | `src/Divvy/Models/OrganizationUserResponseDto.cs` |
| `CreatePartnerUserError` | `src/Divvy/Errors/CreatePartnerUserError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### CreatePhone

- **Signature**: `CreatePhone(CreatePhoneRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserId`, `Body`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CreatePhoneError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreatePhoneRequest` | `src/Divvy/Requests/Partner/CreatePhoneRequest.cs` |
| `PhoneVerificationRequestDto` | `src/Divvy/Models/PhoneVerificationRequestDto.cs` |
| `CreatePhoneError` | `src/Divvy/Errors/CreatePhoneError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### GetPartnerUser

- **Signature**: `GetPartnerUser(GetPartnerUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserId`
- **Returns**: `OrganizationUserResponseDto`
- **Error**: `ApiException<GetPartnerUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetPartnerUserRequest` | `src/Divvy/Requests/Partner/GetPartnerUserRequest.cs` |
| `OrganizationUserResponseDto` | `src/Divvy/Models/OrganizationUserResponseDto.cs` |
| `GetPartnerUserError` | `src/Divvy/Errors/GetPartnerUserError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### GetPartnerUserRole

- **Signature**: `GetPartnerUserRole(GetPartnerUserRoleRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RoleId`
- **Returns**: `RoleResponseDto`
- **Error**: `ApiException<GetPartnerUserRoleError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetPartnerUserRoleRequest` | `src/Divvy/Requests/Partner/GetPartnerUserRoleRequest.cs` |
| `RoleResponseDto` | `src/Divvy/Models/RoleResponseDto.cs` |
| `GetPartnerUserRoleError` | `src/Divvy/Errors/GetPartnerUserRoleError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### ListPartnerOrganizations

- **Signature**: `ListPartnerOrganizations(ListPartnerOrganizationsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `max` ← `Max`, `sort` ← `Sort`, `filters` ← `Filters`, `page` ← `Page`
- **Returns**: `ListResponseDtoOrganizationResponseDto`
- **Error**: `ApiException<ListPartnerOrganizationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListPartnerOrganizationsRequest` | `src/Divvy/Requests/Partner/ListPartnerOrganizationsRequest.cs` |
| `ListResponseDtoOrganizationResponseDto` | `src/Divvy/Models/ListResponseDtoOrganizationResponseDto.cs` |
| `ListPartnerOrganizationsError` | `src/Divvy/Errors/ListPartnerOrganizationsError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### ListPartnerUserRoles

- **Signature**: `ListPartnerUserRoles(ListPartnerUserRolesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `max` ← `Max`, `sort` ← `Sort`, `filters` ← `Filters`, `page` ← `Page`
- **Returns**: `ListResponseDtoRoleResponseDto`
- **Error**: `ApiException<ListPartnerUserRolesError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListPartnerUserRolesRequest` | `src/Divvy/Requests/Partner/ListPartnerUserRolesRequest.cs` |
| `ListResponseDtoRoleResponseDto` | `src/Divvy/Models/ListResponseDtoRoleResponseDto.cs` |
| `ListPartnerUserRolesError` | `src/Divvy/Errors/ListPartnerUserRolesError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### ListPartnerUsers

- **Signature**: `ListPartnerUsers(ListPartnerUsersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `max` ← `Max`, `sort` ← `Sort`, `filters` ← `Filters`, `page` ← `Page`
- **Returns**: `ListResponseDtoOrganizationUserResponseDto`
- **Error**: `ApiException<ListPartnerUsersError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListPartnerUsersRequest` | `src/Divvy/Requests/Partner/ListPartnerUsersRequest.cs` |
| `ListResponseDtoOrganizationUserResponseDto` | `src/Divvy/Models/ListResponseDtoOrganizationUserResponseDto.cs` |
| `ListPartnerUsersError` | `src/Divvy/Errors/ListPartnerUsersError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### LoginAsUser

- **Signature**: `LoginAsUser(LoginAsUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `LoginAsUserResponseDto`
- **Error**: `ApiException<LoginAsUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `LoginAsUserRequest` | `src/Divvy/Requests/Partner/LoginAsUserRequest.cs` |
| `LoginAsUserRequestDto` | `src/Divvy/Models/LoginAsUserRequestDto.cs` |
| `LoginAsUserResponseDto` | `src/Divvy/Models/LoginAsUserResponseDto.cs` |
| `LoginAsUserError` | `src/Divvy/Errors/LoginAsUserError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### PartnerLogin

- **Signature**: `PartnerLogin(PartnerLoginRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `PartnerLoginResponseDto`
- **Error**: `ApiException<PartnerLoginError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PartnerLoginRequest` | `src/Divvy/Requests/Partner/PartnerLoginRequest.cs` |
| `PartnerLoginRequestDto` | `src/Divvy/Models/PartnerLoginRequestDto.cs` |
| `PartnerLoginResponseDto` | `src/Divvy/Models/PartnerLoginResponseDto.cs` |
| `PartnerLoginError` | `src/Divvy/Errors/PartnerLoginError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### RestorePartnerUser

- **Signature**: `RestorePartnerUser(RestorePartnerUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserId`
- **Returns**: `OrganizationUserResponseDto`
- **Error**: `ApiException<RestorePartnerUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RestorePartnerUserRequest` | `src/Divvy/Requests/Partner/RestorePartnerUserRequest.cs` |
| `OrganizationUserResponseDto` | `src/Divvy/Models/OrganizationUserResponseDto.cs` |
| `RestorePartnerUserError` | `src/Divvy/Errors/RestorePartnerUserError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### UpdateOrgPartnerPricePlan

- **Signature**: `UpdateOrgPartnerPricePlan(UpdateOrgPartnerPricePlanRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationId`, `Body`
- **Returns**: `StatusDto`
- **Error**: `ApiException<UpdateOrgPartnerPricePlanError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateOrgPartnerPricePlanRequest` | `src/Divvy/Requests/Partner/UpdateOrgPartnerPricePlanRequest.cs` |
| `UpdateOrgPricePlanRequest` | `src/Divvy/Models/UpdateOrgPricePlanRequest.cs` |
| `StatusDto` | `src/Divvy/Models/StatusDto.cs` |
| `UpdateOrgPartnerPricePlanError` | `src/Divvy/Errors/UpdateOrgPartnerPricePlanError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### UpdatePartnerUser

- **Signature**: `UpdatePartnerUser(UpdatePartnerUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserId`, `Body`
- **Returns**: `OrganizationUserResponseDto`
- **Error**: `ApiException<UpdatePartnerUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdatePartnerUserRequest` | `src/Divvy/Requests/Partner/UpdatePartnerUserRequest.cs` |
| `PartnerUserUpdateRequestDto` | `src/Divvy/Models/PartnerUserUpdateRequestDto.cs` |
| `OrganizationUserResponseDto` | `src/Divvy/Models/OrganizationUserResponseDto.cs` |
| `UpdatePartnerUserError` | `src/Divvy/Errors/UpdatePartnerUserError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

