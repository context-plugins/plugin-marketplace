<!-- Generated file — do not edit; regenerated with the SDK. -->

# CustomerGroups — operations

Accessor: `client.CustomerGroups` · Source: `src/DoiT/Api/CustomerGroups.cs` · 11 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### AssignCustomerGroupUser

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `AssignCustomerGroupUser(AssignCustomerGroupUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomerGroupId`, `UserId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<AssignCustomerGroupUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemDetails([NotNullWhen(true)] out ProblemDetails? value)` [400, 401, 403, 404, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AssignCustomerGroupUserRequest` | `src/DoiT/Requests/CustomerGroups/AssignCustomerGroupUserRequest.cs` |
| `AssignCustomerGroupUserError` | `src/DoiT/Errors/AssignCustomerGroupUserError.cs` |
| `ProblemDetails` | `src/DoiT/Models/ProblemDetails.cs` |

### AssignCustomerGroupUserGroup

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `AssignCustomerGroupUserGroup(AssignCustomerGroupUserGroupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomerGroupId`, `UserGroupId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<AssignCustomerGroupUserGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemDetails([NotNullWhen(true)] out ProblemDetails? value)` [400, 401, 403, 404, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AssignCustomerGroupUserGroupRequest` | `src/DoiT/Requests/CustomerGroups/AssignCustomerGroupUserGroupRequest.cs` |
| `AssignCustomerGroupUserGroupError` | `src/DoiT/Errors/AssignCustomerGroupUserGroupError.cs` |
| `ProblemDetails` | `src/DoiT/Models/ProblemDetails.cs` |

### CreateCustomerGroup

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `CreateCustomerGroup(CreateCustomerGroupOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `CustomerGroup`
- **Error**: `ApiException<CreateCustomerGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemDetails([NotNullWhen(true)] out ProblemDetails? value)` [400, 401, 403, 404, 409, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateCustomerGroupOperationRequest` | `src/DoiT/Requests/CustomerGroups/CreateCustomerGroupOperationRequest.cs` |
| `CreateCustomerGroupRequest` | `src/DoiT/Models/CreateCustomerGroupRequest.cs` |
| `CustomerGroup` | `src/DoiT/Models/CustomerGroup.cs` |
| `CreateCustomerGroupError` | `src/DoiT/Errors/CreateCustomerGroupError.cs` |
| `ProblemDetails` | `src/DoiT/Models/ProblemDetails.cs` |

### DeleteCustomerGroup

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `DeleteCustomerGroup(DeleteCustomerGroupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomerGroupId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteCustomerGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemDetails([NotNullWhen(true)] out ProblemDetails? value)` [400, 401, 403, 404, 409, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteCustomerGroupRequest` | `src/DoiT/Requests/CustomerGroups/DeleteCustomerGroupRequest.cs` |
| `DeleteCustomerGroupError` | `src/DoiT/Errors/DeleteCustomerGroupError.cs` |
| `ProblemDetails` | `src/DoiT/Models/ProblemDetails.cs` |

### GetCustomerGroup

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `GetCustomerGroup(GetCustomerGroupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomerGroupId`
- **Returns**: `CustomerGroup`
- **Error**: `ApiException<GetCustomerGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemDetails([NotNullWhen(true)] out ProblemDetails? value)` [400, 401, 403, 404, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCustomerGroupRequest` | `src/DoiT/Requests/CustomerGroups/GetCustomerGroupRequest.cs` |
| `CustomerGroup` | `src/DoiT/Models/CustomerGroup.cs` |
| `GetCustomerGroupError` | `src/DoiT/Errors/GetCustomerGroupError.cs` |
| `ProblemDetails` | `src/DoiT/Models/ProblemDetails.cs` |

### ListCustomerGroupUserGroups

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `ListCustomerGroupUserGroups(ListCustomerGroupUserGroupsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomerGroupId`
- **Returns**: `CustomerGroupUserGroupsResponse`
- **Error**: `ApiException<ListCustomerGroupUserGroupsError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemDetails([NotNullWhen(true)] out ProblemDetails? value)` [400, 401, 403, 404, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListCustomerGroupUserGroupsRequest` | `src/DoiT/Requests/CustomerGroups/ListCustomerGroupUserGroupsRequest.cs` |
| `CustomerGroupUserGroupsResponse` | `src/DoiT/Models/CustomerGroupUserGroupsResponse.cs` |
| `ListCustomerGroupUserGroupsError` | `src/DoiT/Errors/ListCustomerGroupUserGroupsError.cs` |
| `ProblemDetails` | `src/DoiT/Models/ProblemDetails.cs` |

### ListCustomerGroupUsers

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `ListCustomerGroupUsers(ListCustomerGroupUsersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomerGroupId`
- **Returns**: `CustomerGroupUsersResponse`
- **Error**: `ApiException<ListCustomerGroupUsersError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemDetails([NotNullWhen(true)] out ProblemDetails? value)` [400, 401, 403, 404, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListCustomerGroupUsersRequest` | `src/DoiT/Requests/CustomerGroups/ListCustomerGroupUsersRequest.cs` |
| `CustomerGroupUsersResponse` | `src/DoiT/Models/CustomerGroupUsersResponse.cs` |
| `ListCustomerGroupUsersError` | `src/DoiT/Errors/ListCustomerGroupUsersError.cs` |
| `ProblemDetails` | `src/DoiT/Models/ProblemDetails.cs` |

### ListCustomerGroups

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `ListCustomerGroups(ListCustomerGroupsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `CustomerGroupsResponse`
- **Error**: `ApiException<ListCustomerGroupsError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemDetails([NotNullWhen(true)] out ProblemDetails? value)` [400, 401, 403, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListCustomerGroupsRequest` | `src/DoiT/Requests/CustomerGroups/ListCustomerGroupsRequest.cs` |
| `CustomerGroupsResponse` | `src/DoiT/Models/CustomerGroupsResponse.cs` |
| `ListCustomerGroupsError` | `src/DoiT/Errors/ListCustomerGroupsError.cs` |
| `ProblemDetails` | `src/DoiT/Models/ProblemDetails.cs` |

### UnassignCustomerGroupUser

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `UnassignCustomerGroupUser(UnassignCustomerGroupUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomerGroupId`, `UserId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<UnassignCustomerGroupUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemDetails([NotNullWhen(true)] out ProblemDetails? value)` [400, 401, 403, 404, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UnassignCustomerGroupUserRequest` | `src/DoiT/Requests/CustomerGroups/UnassignCustomerGroupUserRequest.cs` |
| `UnassignCustomerGroupUserError` | `src/DoiT/Errors/UnassignCustomerGroupUserError.cs` |
| `ProblemDetails` | `src/DoiT/Models/ProblemDetails.cs` |

### UnassignCustomerGroupUserGroup

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `UnassignCustomerGroupUserGroup(UnassignCustomerGroupUserGroupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomerGroupId`, `UserGroupId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<UnassignCustomerGroupUserGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemDetails([NotNullWhen(true)] out ProblemDetails? value)` [400, 401, 403, 404, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UnassignCustomerGroupUserGroupRequest` | `src/DoiT/Requests/CustomerGroups/UnassignCustomerGroupUserGroupRequest.cs` |
| `UnassignCustomerGroupUserGroupError` | `src/DoiT/Errors/UnassignCustomerGroupUserGroupError.cs` |
| `ProblemDetails` | `src/DoiT/Models/ProblemDetails.cs` |

### UpdateCustomerGroup

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `UpdateCustomerGroup(UpdateCustomerGroupOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomerGroupId`, `Body`
- **Returns**: `CustomerGroup`
- **Error**: `ApiException<UpdateCustomerGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemDetails([NotNullWhen(true)] out ProblemDetails? value)` [400, 401, 403, 404, 409, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateCustomerGroupOperationRequest` | `src/DoiT/Requests/CustomerGroups/UpdateCustomerGroupOperationRequest.cs` |
| `UpdateCustomerGroupRequest` | `src/DoiT/Models/UpdateCustomerGroupRequest.cs` |
| `CustomerGroup` | `src/DoiT/Models/CustomerGroup.cs` |
| `UpdateCustomerGroupError` | `src/DoiT/Errors/UpdateCustomerGroupError.cs` |
| `ProblemDetails` | `src/DoiT/Models/ProblemDetails.cs` |

