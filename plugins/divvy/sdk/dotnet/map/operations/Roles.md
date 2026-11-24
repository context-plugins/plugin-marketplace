<!-- Generated file — do not edit; regenerated with the SDK. -->

# Roles — operations

Accessor: `client.Roles` · Source: `src/Divvy/Api/Roles.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetOrganizationUserRole

- **Signature**: `GetOrganizationUserRole(GetOrganizationUserRoleRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RoleId`
- **Returns**: `RoleResponseDto`
- **Error**: `ApiException<GetOrganizationUserRoleError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetOrganizationUserRoleRequest` | `src/Divvy/Requests/Roles/GetOrganizationUserRoleRequest.cs` |
| `RoleResponseDto` | `src/Divvy/Models/RoleResponseDto.cs` |
| `GetOrganizationUserRoleError` | `src/Divvy/Errors/GetOrganizationUserRoleError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### ListOrganizationUserRoles

- **Signature**: `ListOrganizationUserRoles(ListOrganizationUserRolesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `max` ← `Max`, `sort` ← `Sort`, `filters` ← `Filters`, `page` ← `Page`
- **Returns**: `ListResponseDtoRoleResponseDto`
- **Error**: `ApiException<ListOrganizationUserRolesError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListOrganizationUserRolesRequest` | `src/Divvy/Requests/Roles/ListOrganizationUserRolesRequest.cs` |
| `ListResponseDtoRoleResponseDto` | `src/Divvy/Models/ListResponseDtoRoleResponseDto.cs` |
| `ListOrganizationUserRolesError` | `src/Divvy/Errors/ListOrganizationUserRolesError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

