<!-- Generated file — do not edit; regenerated with the SDK. -->

# Partner — operations

Accessor: `client.Partner` · Source: `src/Bill/Api/Partner.cs` · 14 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ArchivePartnerUser

- **Signature**: `ArchivePartnerUser(ArchivePartnerUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserId`
- **Returns**: `OrganizationUserResponseDto`
- **Error**: `ApiException<ArchivePartnerUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ArchivePartnerUserRequest` | `src/Bill/Requests/Partner/ArchivePartnerUserRequest.cs` |
| `OrganizationUserResponseDto` | `src/Bill/Models/OrganizationUserResponseDto.cs` |
| `ArchivePartnerUserError` | `src/Bill/Errors/ArchivePartnerUserError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### CreateOrganization

- **Signature**: `CreateOrganization(CreateOrganizationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `OrganizationResponseDto`
- **Error**: `ApiException<CreateOrganizationError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateOrganizationRequest` | `src/Bill/Requests/Partner/CreateOrganizationRequest.cs` |
| `OrganizationCreateRequestDto` | `src/Bill/Models/OrganizationCreateRequestDto.cs` |
| `OrganizationResponseDto` | `src/Bill/Models/OrganizationResponseDto.cs` |
| `CreateOrganizationError` | `src/Bill/Errors/CreateOrganizationError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### CreatePartnerUser

- **Signature**: `CreatePartnerUser(CreatePartnerUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `OrganizationUserResponseDto`
- **Error**: `ApiException<CreatePartnerUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreatePartnerUserRequest` | `src/Bill/Requests/Partner/CreatePartnerUserRequest.cs` |
| `PartnerUserCreateRequestDto` | `src/Bill/Models/PartnerUserCreateRequestDto.cs` |
| `OrganizationUserResponseDto` | `src/Bill/Models/OrganizationUserResponseDto.cs` |
| `CreatePartnerUserError` | `src/Bill/Errors/CreatePartnerUserError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### CreatePhone

- **Signature**: `CreatePhone(CreatePhoneRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserId`, `Body`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CreatePhoneError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreatePhoneRequest` | `src/Bill/Requests/Partner/CreatePhoneRequest.cs` |
| `PhoneVerificationRequestDto` | `src/Bill/Models/PhoneVerificationRequestDto.cs` |
| `CreatePhoneError` | `src/Bill/Errors/CreatePhoneError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### GetPartnerUser

- **Signature**: `GetPartnerUser(GetPartnerUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserId`
- **Returns**: `OrganizationUserResponseDto`
- **Error**: `ApiException<GetPartnerUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetPartnerUserRequest` | `src/Bill/Requests/Partner/GetPartnerUserRequest.cs` |
| `OrganizationUserResponseDto` | `src/Bill/Models/OrganizationUserResponseDto.cs` |
| `GetPartnerUserError` | `src/Bill/Errors/GetPartnerUserError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### GetPartnerUserRole

- **Signature**: `GetPartnerUserRole(GetPartnerUserRoleRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RoleId`
- **Returns**: `RoleResponseDto`
- **Error**: `ApiException<GetPartnerUserRoleError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetPartnerUserRoleRequest` | `src/Bill/Requests/Partner/GetPartnerUserRoleRequest.cs` |
| `RoleResponseDto` | `src/Bill/Models/RoleResponseDto.cs` |
| `GetPartnerUserRoleError` | `src/Bill/Errors/GetPartnerUserRoleError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### ListPartnerOrganizations

- **Signature**: `ListPartnerOrganizations(ListPartnerOrganizationsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `max` ← `Max`, `sort` ← `Sort`, `filters` ← `Filters`, `page` ← `Page`
- **Returns**: `ListResponseDtoOrganizationResponseDto`
- **Error**: `ApiException<ListPartnerOrganizationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListPartnerOrganizationsRequest` | `src/Bill/Requests/Partner/ListPartnerOrganizationsRequest.cs` |
| `ListResponseDtoOrganizationResponseDto` | `src/Bill/Models/ListResponseDtoOrganizationResponseDto.cs` |
| `ListPartnerOrganizationsError` | `src/Bill/Errors/ListPartnerOrganizationsError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### ListPartnerUserRoles

- **Signature**: `ListPartnerUserRoles(ListPartnerUserRolesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `max` ← `Max`, `sort` ← `Sort`, `filters` ← `Filters`, `page` ← `Page`
- **Returns**: `ListResponseDtoRoleResponseDto`
- **Error**: `ApiException<ListPartnerUserRolesError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListPartnerUserRolesRequest` | `src/Bill/Requests/Partner/ListPartnerUserRolesRequest.cs` |
| `ListResponseDtoRoleResponseDto` | `src/Bill/Models/ListResponseDtoRoleResponseDto.cs` |
| `ListPartnerUserRolesError` | `src/Bill/Errors/ListPartnerUserRolesError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### ListPartnerUsers

- **Signature**: `ListPartnerUsers(ListPartnerUsersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `max` ← `Max`, `sort` ← `Sort`, `filters` ← `Filters`, `page` ← `Page`
- **Returns**: `ListResponseDtoOrganizationUserResponseDto`
- **Error**: `ApiException<ListPartnerUsersError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListPartnerUsersRequest` | `src/Bill/Requests/Partner/ListPartnerUsersRequest.cs` |
| `ListResponseDtoOrganizationUserResponseDto` | `src/Bill/Models/ListResponseDtoOrganizationUserResponseDto.cs` |
| `ListPartnerUsersError` | `src/Bill/Errors/ListPartnerUsersError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### LoginAsUser

- **Signature**: `LoginAsUser(LoginAsUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `LoginAsUserResponseDto`
- **Error**: `ApiException<LoginAsUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `LoginAsUserRequest` | `src/Bill/Requests/Partner/LoginAsUserRequest.cs` |
| `LoginAsUserRequestDto` | `src/Bill/Models/LoginAsUserRequestDto.cs` |
| `LoginAsUserResponseDto` | `src/Bill/Models/LoginAsUserResponseDto.cs` |
| `LoginAsUserError` | `src/Bill/Errors/LoginAsUserError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### PartnerLogin

- **Signature**: `PartnerLogin(PartnerLoginRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `PartnerLoginResponseDto`
- **Error**: `ApiException<PartnerLoginError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PartnerLoginRequest` | `src/Bill/Requests/Partner/PartnerLoginRequest.cs` |
| `PartnerLoginRequestDto` | `src/Bill/Models/PartnerLoginRequestDto.cs` |
| `PartnerLoginResponseDto` | `src/Bill/Models/PartnerLoginResponseDto.cs` |
| `PartnerLoginError` | `src/Bill/Errors/PartnerLoginError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### RestorePartnerUser

- **Signature**: `RestorePartnerUser(RestorePartnerUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserId`
- **Returns**: `OrganizationUserResponseDto`
- **Error**: `ApiException<RestorePartnerUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RestorePartnerUserRequest` | `src/Bill/Requests/Partner/RestorePartnerUserRequest.cs` |
| `OrganizationUserResponseDto` | `src/Bill/Models/OrganizationUserResponseDto.cs` |
| `RestorePartnerUserError` | `src/Bill/Errors/RestorePartnerUserError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### UpdateOrgPartnerPricePlan

- **Signature**: `UpdateOrgPartnerPricePlan(UpdateOrgPartnerPricePlanRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationId`, `Body`
- **Returns**: `StatusDto`
- **Error**: `ApiException<UpdateOrgPartnerPricePlanError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateOrgPartnerPricePlanRequest` | `src/Bill/Requests/Partner/UpdateOrgPartnerPricePlanRequest.cs` |
| `UpdateOrgPricePlanRequest` | `src/Bill/Models/UpdateOrgPricePlanRequest.cs` |
| `StatusDto` | `src/Bill/Models/StatusDto.cs` |
| `UpdateOrgPartnerPricePlanError` | `src/Bill/Errors/UpdateOrgPartnerPricePlanError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### UpdatePartnerUser

- **Signature**: `UpdatePartnerUser(UpdatePartnerUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserId`, `Body`
- **Returns**: `OrganizationUserResponseDto`
- **Error**: `ApiException<UpdatePartnerUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdatePartnerUserRequest` | `src/Bill/Requests/Partner/UpdatePartnerUserRequest.cs` |
| `PartnerUserUpdateRequestDto` | `src/Bill/Models/PartnerUserUpdateRequestDto.cs` |
| `OrganizationUserResponseDto` | `src/Bill/Models/OrganizationUserResponseDto.cs` |
| `UpdatePartnerUserError` | `src/Bill/Errors/UpdatePartnerUserError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

