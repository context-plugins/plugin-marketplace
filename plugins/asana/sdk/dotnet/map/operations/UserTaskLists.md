<!-- Generated file — do not edit; regenerated with the SDK. -->

# UserTaskLists — operations

Accessor: `client.UserTaskLists` · Source: `src/Asana/Api/UserTaskLists.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetUserTaskList

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `GetUserTaskList(GetUserTaskListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserTaskListGid`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated)
- **Returns**: `UserTaskListsResponse`
- **Error**: `ApiException<GetUserTaskListError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetUserTaskListRequest` | `src/Asana/Requests/UserTaskLists/GetUserTaskListRequest.cs` |
| `UserTaskListsResponse` | `src/Asana/Models/UserTaskListsResponse.cs` |
| `GetUserTaskListError` | `src/Asana/Errors/GetUserTaskListError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### GetUserTaskListForUser

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `GetUserTaskListForUser(GetUserTaskListForUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserGid`, `Workspace`
- **Query params (wire ← C#)**: `workspace` ← `Workspace`, `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated)
- **Returns**: `UsersUserTaskListResponse`
- **Error**: `ApiException<GetUserTaskListForUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetUserTaskListForUserRequest` | `src/Asana/Requests/UserTaskLists/GetUserTaskListForUserRequest.cs` |
| `UsersUserTaskListResponse` | `src/Asana/Models/UsersUserTaskListResponse.cs` |
| `GetUserTaskListForUserError` | `src/Asana/Errors/GetUserTaskListForUserError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

