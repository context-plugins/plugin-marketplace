<!-- Generated file — do not edit; regenerated with the SDK. -->

# OrganizationUsers — operations

Accessor: `client.OrganizationUsers` · Source: `src/Divvy/Api/OrganizationUsers.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ArchiveOrganizationUser

- **Signature**: `ArchiveOrganizationUser(ArchiveOrganizationUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserId`
- **Returns**: `OrganizationUserResponseDto`
- **Error**: `ApiException<ArchiveOrganizationUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ArchiveOrganizationUserRequest` | `src/Divvy/Requests/OrganizationUsers/ArchiveOrganizationUserRequest.cs` |
| `OrganizationUserResponseDto` | `src/Divvy/Models/OrganizationUserResponseDto.cs` |
| `ArchiveOrganizationUserError` | `src/Divvy/Errors/ArchiveOrganizationUserError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### CreateOrganizationUser

- **Signature**: `CreateOrganizationUser(CreateOrganizationUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `OrganizationUserResponseDto`
- **Error**: `ApiException<CreateOrganizationUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateOrganizationUserRequest` | `src/Divvy/Requests/OrganizationUsers/CreateOrganizationUserRequest.cs` |
| `OrganizationUserCreateRequestDto` | `src/Divvy/Models/OrganizationUserCreateRequestDto.cs` |
| `OrganizationUserResponseDto` | `src/Divvy/Models/OrganizationUserResponseDto.cs` |
| `CreateOrganizationUserError` | `src/Divvy/Errors/CreateOrganizationUserError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### GetOrganizationUser

- **Signature**: `GetOrganizationUser(GetOrganizationUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserId`
- **Returns**: `OrganizationUserResponseDto`
- **Error**: `ApiException<GetOrganizationUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetOrganizationUserRequest` | `src/Divvy/Requests/OrganizationUsers/GetOrganizationUserRequest.cs` |
| `OrganizationUserResponseDto` | `src/Divvy/Models/OrganizationUserResponseDto.cs` |
| `GetOrganizationUserError` | `src/Divvy/Errors/GetOrganizationUserError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### ListOrganizationUsers

- **Signature**: `ListOrganizationUsers(ListOrganizationUsersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `max` ← `Max`, `sort` ← `Sort`, `filters` ← `Filters`, `page` ← `Page`
- **Returns**: `ListResponseDtoOrganizationUserResponseDto`
- **Error**: `ApiException<ListOrganizationUsersError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListOrganizationUsersRequest` | `src/Divvy/Requests/OrganizationUsers/ListOrganizationUsersRequest.cs` |
| `ListResponseDtoOrganizationUserResponseDto` | `src/Divvy/Models/ListResponseDtoOrganizationUserResponseDto.cs` |
| `ListOrganizationUsersError` | `src/Divvy/Errors/ListOrganizationUsersError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### RestoreOrganizationUser

- **Signature**: `RestoreOrganizationUser(RestoreOrganizationUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserId`
- **Returns**: `OrganizationUserResponseDto`
- **Error**: `ApiException<RestoreOrganizationUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RestoreOrganizationUserRequest` | `src/Divvy/Requests/OrganizationUsers/RestoreOrganizationUserRequest.cs` |
| `OrganizationUserResponseDto` | `src/Divvy/Models/OrganizationUserResponseDto.cs` |
| `RestoreOrganizationUserError` | `src/Divvy/Errors/RestoreOrganizationUserError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### UpdateOrganizationUser

- **Signature**: `UpdateOrganizationUser(UpdateOrganizationUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserId`, `Body`
- **Returns**: `OrganizationUserResponseDto`
- **Error**: `ApiException<UpdateOrganizationUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateOrganizationUserRequest` | `src/Divvy/Requests/OrganizationUsers/UpdateOrganizationUserRequest.cs` |
| `OrganizationUserUpdateRequestDto` | `src/Divvy/Models/OrganizationUserUpdateRequestDto.cs` |
| `OrganizationUserResponseDto` | `src/Divvy/Models/OrganizationUserResponseDto.cs` |
| `UpdateOrganizationUserError` | `src/Divvy/Errors/UpdateOrganizationUserError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

