<!-- Generated file — do not edit; regenerated with the SDK. -->

# OrganizationUsers — operations

Accessor: `client.OrganizationUsers` · Source: `src/Bill/Api/OrganizationUsers.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ArchiveOrganizationUser

- **Signature**: `ArchiveOrganizationUser(ArchiveOrganizationUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserId`
- **Returns**: `OrganizationUserResponseDto`
- **Error**: `ApiException<ArchiveOrganizationUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ArchiveOrganizationUserRequest` | `src/Bill/Requests/OrganizationUsers/ArchiveOrganizationUserRequest.cs` |
| `OrganizationUserResponseDto` | `src/Bill/Models/OrganizationUserResponseDto.cs` |
| `ArchiveOrganizationUserError` | `src/Bill/Errors/ArchiveOrganizationUserError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### CreateOrganizationUser

- **Signature**: `CreateOrganizationUser(CreateOrganizationUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `OrganizationUserResponseDto`
- **Error**: `ApiException<CreateOrganizationUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateOrganizationUserRequest` | `src/Bill/Requests/OrganizationUsers/CreateOrganizationUserRequest.cs` |
| `OrganizationUserCreateRequestDto` | `src/Bill/Models/OrganizationUserCreateRequestDto.cs` |
| `OrganizationUserResponseDto` | `src/Bill/Models/OrganizationUserResponseDto.cs` |
| `CreateOrganizationUserError` | `src/Bill/Errors/CreateOrganizationUserError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### GetOrganizationUser

- **Signature**: `GetOrganizationUser(GetOrganizationUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserId`
- **Returns**: `OrganizationUserResponseDto`
- **Error**: `ApiException<GetOrganizationUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetOrganizationUserRequest` | `src/Bill/Requests/OrganizationUsers/GetOrganizationUserRequest.cs` |
| `OrganizationUserResponseDto` | `src/Bill/Models/OrganizationUserResponseDto.cs` |
| `GetOrganizationUserError` | `src/Bill/Errors/GetOrganizationUserError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### ListOrganizationUsers

- **Signature**: `ListOrganizationUsers(ListOrganizationUsersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `max` ← `Max`, `sort` ← `Sort`, `filters` ← `Filters`, `page` ← `Page`
- **Returns**: `ListResponseDtoOrganizationUserResponseDto`
- **Error**: `ApiException<ListOrganizationUsersError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListOrganizationUsersRequest` | `src/Bill/Requests/OrganizationUsers/ListOrganizationUsersRequest.cs` |
| `ListResponseDtoOrganizationUserResponseDto` | `src/Bill/Models/ListResponseDtoOrganizationUserResponseDto.cs` |
| `ListOrganizationUsersError` | `src/Bill/Errors/ListOrganizationUsersError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### RestoreOrganizationUser

- **Signature**: `RestoreOrganizationUser(RestoreOrganizationUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserId`
- **Returns**: `OrganizationUserResponseDto`
- **Error**: `ApiException<RestoreOrganizationUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RestoreOrganizationUserRequest` | `src/Bill/Requests/OrganizationUsers/RestoreOrganizationUserRequest.cs` |
| `OrganizationUserResponseDto` | `src/Bill/Models/OrganizationUserResponseDto.cs` |
| `RestoreOrganizationUserError` | `src/Bill/Errors/RestoreOrganizationUserError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### UpdateOrganizationUser

- **Signature**: `UpdateOrganizationUser(UpdateOrganizationUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserId`, `Body`
- **Returns**: `OrganizationUserResponseDto`
- **Error**: `ApiException<UpdateOrganizationUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateOrganizationUserRequest` | `src/Bill/Requests/OrganizationUsers/UpdateOrganizationUserRequest.cs` |
| `OrganizationUserUpdateRequestDto` | `src/Bill/Models/OrganizationUserUpdateRequestDto.cs` |
| `OrganizationUserResponseDto` | `src/Bill/Models/OrganizationUserResponseDto.cs` |
| `UpdateOrganizationUserError` | `src/Bill/Errors/UpdateOrganizationUserError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

