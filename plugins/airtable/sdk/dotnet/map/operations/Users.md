<!-- Generated file — do not edit; regenerated with the SDK. -->

# Users — operations

Accessor: `client.Users` · Source: `src/Airtable/Api/Users.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateScimUser

- **Server group**: `DefaultAirtableScimGroupsApi`
- **Auth**: `options.BearerAuth`
- **Signature**: `CreateScimUser(CreateScimUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ScimUser`
- **Error**: `ApiException<CreateScimUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetScimError([NotNullWhen(true)] out ScimError? value)` [400, 401, 403, 409, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateScimUserRequest` | `src/Airtable/Requests/Users/CreateScimUserRequest.cs` |
| `ScimUserCreateRequest` | `src/Airtable/Models/ScimUserCreateRequest.cs` |
| `ScimUser` | `src/Airtable/Models/ScimUser.cs` |
| `CreateScimUserError` | `src/Airtable/Errors/CreateScimUserError.cs` |
| `ScimError` | `src/Airtable/Models/ScimError.cs` |

### DeleteScimUser

- **Server group**: `DefaultAirtableScimGroupsApi`
- **Auth**: `options.BearerAuth`
- **Signature**: `DeleteScimUser(DeleteScimUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteScimUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetScimError([NotNullWhen(true)] out ScimError? value)` [401, 403, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteScimUserRequest` | `src/Airtable/Requests/Users/DeleteScimUserRequest.cs` |
| `DeleteScimUserError` | `src/Airtable/Errors/DeleteScimUserError.cs` |
| `ScimError` | `src/Airtable/Models/ScimError.cs` |

### GetScimUser

- **Server group**: `DefaultAirtableScimGroupsApi`
- **Auth**: `options.BearerAuth`
- **Signature**: `GetScimUser(GetScimUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserId`
- **Returns**: `ScimUser`
- **Error**: `ApiException<GetScimUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetScimError([NotNullWhen(true)] out ScimError? value)` [401, 403, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetScimUserRequest` | `src/Airtable/Requests/Users/GetScimUserRequest.cs` |
| `ScimUser` | `src/Airtable/Models/ScimUser.cs` |
| `GetScimUserError` | `src/Airtable/Errors/GetScimUserError.cs` |
| `ScimError` | `src/Airtable/Models/ScimError.cs` |

### ListScimUsers

- **Server group**: `DefaultAirtableScimGroupsApi`
- **Auth**: `options.BearerAuth`
- **Signature**: `ListScimUsers(ListScimUsersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `filter` ← `Filter`, `startIndex` ← `StartIndex`, `count` ← `Count`
- **Returns**: `ScimUserListResponse`
- **Error**: `ApiException<ListScimUsersError>` — **Case A (typed)**
- **Error accessors**: `TryGetScimError([NotNullWhen(true)] out ScimError? value)` [401, 403, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListScimUsersRequest` | `src/Airtable/Requests/Users/ListScimUsersRequest.cs` |
| `ScimUserListResponse` | `src/Airtable/Models/ScimUserListResponse.cs` |
| `ListScimUsersError` | `src/Airtable/Errors/ListScimUsersError.cs` |
| `ScimError` | `src/Airtable/Models/ScimError.cs` |

### ReplaceScimUser

- **Server group**: `DefaultAirtableScimGroupsApi`
- **Auth**: `options.BearerAuth`
- **Signature**: `ReplaceScimUser(ReplaceScimUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserId`, `Body`
- **Returns**: `ScimUser`
- **Error**: `ApiException<ReplaceScimUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetScimError([NotNullWhen(true)] out ScimError? value)` [400, 401, 403, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ReplaceScimUserRequest` | `src/Airtable/Requests/Users/ReplaceScimUserRequest.cs` |
| `ScimUserCreateRequest` | `src/Airtable/Models/ScimUserCreateRequest.cs` |
| `ScimUser` | `src/Airtable/Models/ScimUser.cs` |
| `ReplaceScimUserError` | `src/Airtable/Errors/ReplaceScimUserError.cs` |
| `ScimError` | `src/Airtable/Models/ScimError.cs` |

### UpdateScimUser

- **Server group**: `DefaultAirtableScimGroupsApi`
- **Auth**: `options.BearerAuth`
- **Signature**: `UpdateScimUser(UpdateScimUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserId`, `Body`
- **Returns**: `ScimUser`
- **Error**: `ApiException<UpdateScimUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetScimError([NotNullWhen(true)] out ScimError? value)` [400, 401, 403, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateScimUserRequest` | `src/Airtable/Requests/Users/UpdateScimUserRequest.cs` |
| `ScimPatchRequest` | `src/Airtable/Models/ScimPatchRequest.cs` |
| `ScimUser` | `src/Airtable/Models/ScimUser.cs` |
| `UpdateScimUserError` | `src/Airtable/Errors/UpdateScimUserError.cs` |
| `ScimError` | `src/Airtable/Models/ScimError.cs` |

