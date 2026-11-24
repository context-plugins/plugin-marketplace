<!-- Generated file — do not edit; regenerated with the SDK. -->

# Users — operations

Accessor: `client.Users` · Source: `src/UiPath/Api/Users.cs` · 8 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### AddUser

- **Server group**: `DefaultUiPathAutomationHubAppInventoryApi`
- **Auth**: `options.ApiKeyAuth`
- **Signature**: `AddUser(AddUserOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `User`
- **Error**: `ApiException<AddUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseUiPathAutomationHubAppInventoryApi([NotNullWhen(true)] out ErrorResponseUiPathAutomationHubAppInventoryApi? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AddUserOperationRequest` | `src/UiPath/Requests/Users/AddUserOperationRequest.cs` |
| `AddUserRequest` | `src/UiPath/Models/AddUserRequest.cs` |
| `User` | `src/UiPath/Models/User.cs` |
| `AddUserError` | `src/UiPath/Errors/AddUserError.cs` |
| `ErrorResponseUiPathAutomationHubAppInventoryApi` | `src/UiPath/Models/ErrorResponseUiPathAutomationHubAppInventoryApi.cs` |

### CreateUser

- **Server group**: `DefaultUiPathAutomationHubAppInventoryApi`
- **Auth**: `options.BearerAuth`
- **Signature**: `CreateUser(CreateUserOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationName`, `Body`
- **Returns**: `User2`
- **Error**: `ApiException<CreateUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseUiPathAutomationHubAppInventoryApi([NotNullWhen(true)] out ErrorResponseUiPathAutomationHubAppInventoryApi? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateUserOperationRequest` | `src/UiPath/Requests/Users/CreateUserOperationRequest.cs` |
| `CreateUserRequest` | `src/UiPath/Models/CreateUserRequest.cs` |
| `User2` | `src/UiPath/Models/User2.cs` |
| `CreateUserError` | `src/UiPath/Errors/CreateUserError.cs` |
| `ErrorResponseUiPathAutomationHubAppInventoryApi` | `src/UiPath/Models/ErrorResponseUiPathAutomationHubAppInventoryApi.cs` |

### DeleteUser

- **Server group**: `DefaultUiPathAutomationHubAppInventoryApi`
- **Auth**: `options.BearerAuth`
- **Signature**: `DeleteUser(DeleteUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationName`, `UserId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseUiPathAutomationHubAppInventoryApi([NotNullWhen(true)] out ErrorResponseUiPathAutomationHubAppInventoryApi? value)` [401] · `TryGetErrorResponse3([NotNullWhen(true)] out ErrorResponse3? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteUserRequest` | `src/UiPath/Requests/Users/DeleteUserRequest.cs` |
| `DeleteUserError` | `src/UiPath/Errors/DeleteUserError.cs` |
| `ErrorResponseUiPathAutomationHubAppInventoryApi` | `src/UiPath/Models/ErrorResponseUiPathAutomationHubAppInventoryApi.cs` |
| `ErrorResponse3` | `src/UiPath/Models/ErrorResponse3.cs` |

### EditUser

- **Server group**: `DefaultUiPathAutomationHubAppInventoryApi`
- **Auth**: `options.ApiKeyAuth`
- **Signature**: `EditUser(EditUserOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `User`
- **Error**: `ApiException<EditUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseUiPathAutomationHubAppInventoryApi([NotNullWhen(true)] out ErrorResponseUiPathAutomationHubAppInventoryApi? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EditUserOperationRequest` | `src/UiPath/Requests/Users/EditUserOperationRequest.cs` |
| `EditUserRequest` | `src/UiPath/Models/EditUserRequest.cs` |
| `User` | `src/UiPath/Models/User.cs` |
| `EditUserError` | `src/UiPath/Errors/EditUserError.cs` |
| `ErrorResponseUiPathAutomationHubAppInventoryApi` | `src/UiPath/Models/ErrorResponseUiPathAutomationHubAppInventoryApi.cs` |

### GetOdataUsers

- **Server group**: `DefaultUiPathAutomationHubAppInventoryApi`
- **Auth**: `options.BearerAuth`
- **Signature**: `GetOdataUsers(GetOdataUsersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `$filter` ← `Filter`, `$top` ← `Top`, `$skip` ← `Skip`
- **Returns**: `ODataUserCollection`
- **Error**: `ApiException<GetOdataUsersError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseUiPathAutomationHubAppInventoryApi([NotNullWhen(true)] out ErrorResponseUiPathAutomationHubAppInventoryApi? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetOdataUsersRequest` | `src/UiPath/Requests/Users/GetOdataUsersRequest.cs` |
| `ODataUserCollection` | `src/UiPath/Models/ODataUserCollection.cs` |
| `GetOdataUsersError` | `src/UiPath/Errors/GetOdataUsersError.cs` |
| `ErrorResponseUiPathAutomationHubAppInventoryApi` | `src/UiPath/Models/ErrorResponseUiPathAutomationHubAppInventoryApi.cs` |

### GetUser

- **Server group**: `DefaultUiPathAutomationHubAppInventoryApi`
- **Auth**: `options.BearerAuth`
- **Signature**: `GetUser(GetUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationName`, `UserId`
- **Returns**: `User2`
- **Error**: `ApiException<GetUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseUiPathAutomationHubAppInventoryApi([NotNullWhen(true)] out ErrorResponseUiPathAutomationHubAppInventoryApi? value)` [401] · `TryGetErrorResponse3([NotNullWhen(true)] out ErrorResponse3? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetUserRequest` | `src/UiPath/Requests/Users/GetUserRequest.cs` |
| `User2` | `src/UiPath/Models/User2.cs` |
| `GetUserError` | `src/UiPath/Errors/GetUserError.cs` |
| `ErrorResponseUiPathAutomationHubAppInventoryApi` | `src/UiPath/Models/ErrorResponseUiPathAutomationHubAppInventoryApi.cs` |
| `ErrorResponse3` | `src/UiPath/Models/ErrorResponse3.cs` |

### ListRoles2

- **Server group**: `DefaultUiPathAutomationHubAppInventoryApi`
- **Auth**: `options.ApiKeyAuth`
- **Signature**: `ListRoles2(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `RolesResponse`
- **Error**: `ApiException<ListRoles2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseUiPathAutomationHubAppInventoryApi([NotNullWhen(true)] out ErrorResponseUiPathAutomationHubAppInventoryApi? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RolesResponse` | `src/UiPath/Models/RolesResponse.cs` |
| `ListRoles2Error` | `src/UiPath/Errors/ListRoles2Error.cs` |
| `ErrorResponseUiPathAutomationHubAppInventoryApi` | `src/UiPath/Models/ErrorResponseUiPathAutomationHubAppInventoryApi.cs` |

### ListUsers

- **Server group**: `DefaultUiPathAutomationHubAppInventoryApi`
- **Auth**: `options.ApiKeyAuth`
- **Signature**: `ListUsers(ListUsersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `page` ← `Page`, `pageSize` ← `PageSize`
- **Returns**: `UserListResponse`
- **Error**: `ApiException<ListUsersError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseUiPathAutomationHubAppInventoryApi([NotNullWhen(true)] out ErrorResponseUiPathAutomationHubAppInventoryApi? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListUsersRequest` | `src/UiPath/Requests/Users/ListUsersRequest.cs` |
| `UserListResponse` | `src/UiPath/Models/UserListResponse.cs` |
| `ListUsersError` | `src/UiPath/Errors/ListUsersError.cs` |
| `ErrorResponseUiPathAutomationHubAppInventoryApi` | `src/UiPath/Models/ErrorResponseUiPathAutomationHubAppInventoryApi.cs` |

