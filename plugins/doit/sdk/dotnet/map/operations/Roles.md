<!-- Generated file — do not edit; regenerated with the SDK. -->

# Roles — operations

Accessor: `client.Roles` · Source: `src/DoiT/Api/Roles.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateRole

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `CreateRole(CreateRoleOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `IdempotencyKey`, `Body`
- **Returns**: `RoleDoiTRolesApi`
- **Error**: `ApiException<CreateRoleError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 409, 500] · `TryGetProblemDetails([NotNullWhen(true)] out ProblemDetails? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateRoleOperationRequest` | `src/DoiT/Requests/Roles/CreateRoleOperationRequest.cs` |
| `CreateRoleRequest` | `src/DoiT/Models/CreateRoleRequest.cs` |
| `RoleDoiTRolesApi` | `src/DoiT/Models/RoleDoiTRolesApi.cs` |
| `CreateRoleError` | `src/DoiT/Errors/CreateRoleError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |
| `ProblemDetails` | `src/DoiT/Models/ProblemDetails.cs` |

### DeleteRole

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `DeleteRole(DeleteRoleRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteRoleError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 409, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteRoleRequest` | `src/DoiT/Requests/Roles/DeleteRoleRequest.cs` |
| `DeleteRoleError` | `src/DoiT/Errors/DeleteRoleError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### GetRole

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `GetRole(GetRoleRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `RoleDoiTRolesApi`
- **Error**: `ApiException<GetRoleError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRoleRequest` | `src/DoiT/Requests/Roles/GetRoleRequest.cs` |
| `RoleDoiTRolesApi` | `src/DoiT/Models/RoleDoiTRolesApi.cs` |
| `GetRoleError` | `src/DoiT/Errors/GetRoleError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### ListRoles

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `ListRoles(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `IamV1RolesResponse`
- **Error**: `ApiException<ListRolesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `IamV1RolesResponse` | `src/DoiT/Models/IamV1RolesResponse.cs` |
| `ListRolesError` | `src/DoiT/Errors/ListRolesError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### UpdateRole

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `UpdateRole(UpdateRoleOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Body`
- **Returns**: `RoleDoiTRolesApi`
- **Error**: `ApiException<UpdateRoleError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 409, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateRoleOperationRequest` | `src/DoiT/Requests/Roles/UpdateRoleOperationRequest.cs` |
| `UpdateRoleRequest` | `src/DoiT/Models/UpdateRoleRequest.cs` |
| `RoleDoiTRolesApi` | `src/DoiT/Models/RoleDoiTRolesApi.cs` |
| `UpdateRoleError` | `src/DoiT/Errors/UpdateRoleError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

