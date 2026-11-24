<!-- Generated file — do not edit; regenerated with the SDK. -->

# ScimUsers — operations

Accessor: `client.ScimUsers` · Source: `src/Contentstack/Api/ScimUsers.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateScimUser

- **Server group**: `DefaultContentstackScimScimGroupsApi`
- **Auth**: `options.BearerAuth`
- **Signature**: `CreateScimUser(CreateScimUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationUid`, `Body`
- **Returns**: `ScimUser`
- **Error**: `ApiException<CreateScimUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetScimError([NotNullWhen(true)] out ScimError? value)` [400, 401, 409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateScimUserRequest` | `src/Contentstack/Requests/ScimUsers/CreateScimUserRequest.cs` |
| `ScimUser` | `src/Contentstack/Models/ScimUser.cs` |
| `CreateScimUserError` | `src/Contentstack/Errors/CreateScimUserError.cs` |
| `ScimError` | `src/Contentstack/Models/ScimError.cs` |

### GetScimUser

- **Server group**: `DefaultContentstackScimScimGroupsApi`
- **Auth**: `options.BearerAuth`
- **Signature**: `GetScimUser(GetScimUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationUid`, `UserId`
- **Returns**: `ScimUser`
- **Error**: `ApiException<GetScimUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetScimError([NotNullWhen(true)] out ScimError? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetScimUserRequest` | `src/Contentstack/Requests/ScimUsers/GetScimUserRequest.cs` |
| `ScimUser` | `src/Contentstack/Models/ScimUser.cs` |
| `GetScimUserError` | `src/Contentstack/Errors/GetScimUserError.cs` |
| `ScimError` | `src/Contentstack/Models/ScimError.cs` |

### ListScimUsers

- **Server group**: `DefaultContentstackScimScimGroupsApi`
- **Auth**: `options.BearerAuth`
- **Signature**: `ListScimUsers(ListScimUsersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationUid`
- **Query params (wire ← C#)**: `filter` ← `Filter`
- **Returns**: `ScimListResponse`
- **Error**: `ApiException<ListScimUsersError>` — **Case A (typed)**
- **Error accessors**: `TryGetScimError([NotNullWhen(true)] out ScimError? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListScimUsersRequest` | `src/Contentstack/Requests/ScimUsers/ListScimUsersRequest.cs` |
| `ScimListResponse` | `src/Contentstack/Models/ScimListResponse.cs` |
| `ListScimUsersError` | `src/Contentstack/Errors/ListScimUsersError.cs` |
| `ScimError` | `src/Contentstack/Models/ScimError.cs` |

### ReplaceScimUser

- **Server group**: `DefaultContentstackScimScimGroupsApi`
- **Auth**: `options.BearerAuth`
- **Signature**: `ReplaceScimUser(ReplaceScimUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationUid`, `UserId`, `Body`
- **Returns**: `ScimUser`
- **Error**: `ApiException<ReplaceScimUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetScimError([NotNullWhen(true)] out ScimError? value)` [400, 401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ReplaceScimUserRequest` | `src/Contentstack/Requests/ScimUsers/ReplaceScimUserRequest.cs` |
| `ScimUser` | `src/Contentstack/Models/ScimUser.cs` |
| `ReplaceScimUserError` | `src/Contentstack/Errors/ReplaceScimUserError.cs` |
| `ScimError` | `src/Contentstack/Models/ScimError.cs` |

### UpdateScimUser

- **Server group**: `DefaultContentstackScimScimGroupsApi`
- **Auth**: `options.BearerAuth`
- **Signature**: `UpdateScimUser(UpdateScimUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationUid`, `UserId`, `Body`
- **Returns**: `ScimUser`
- **Error**: `ApiException<UpdateScimUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetScimError([NotNullWhen(true)] out ScimError? value)` [400, 401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateScimUserRequest` | `src/Contentstack/Requests/ScimUsers/UpdateScimUserRequest.cs` |
| `ScimPatchRequest` | `src/Contentstack/Models/ScimPatchRequest.cs` |
| `ScimUser` | `src/Contentstack/Models/ScimUser.cs` |
| `UpdateScimUserError` | `src/Contentstack/Errors/UpdateScimUserError.cs` |
| `ScimError` | `src/Contentstack/Models/ScimError.cs` |

