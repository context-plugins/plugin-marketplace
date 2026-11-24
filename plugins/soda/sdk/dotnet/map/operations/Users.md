<!-- Generated file — do not edit; regenerated with the SDK. -->

# Users — operations

Accessor: `client.Users` · Source: `src/Soda/Api/Users.cs` · 8 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteApiV1UserGroupsUserGroupId

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `DeleteApiV1UserGroupsUserGroupId(DeleteApiV1UserGroupsUserGroupIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserGroupId`
- **Returns**: `object`
- **Error**: `ApiException<DeleteApiV1UserGroupsUserGroupIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteApiV1UserGroupsUserGroupIdRequest` | `src/Soda/Requests/Users/DeleteApiV1UserGroupsUserGroupIdRequest.cs` |
| `DeleteApiV1UserGroupsUserGroupIdError` | `src/Soda/Errors/DeleteApiV1UserGroupsUserGroupIdError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

### GetApiV1UserGroups

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `GetApiV1UserGroups(GetApiV1UserGroupsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `page` ← `Page`, `search` ← `Search`, `size` ← `Size`
- **Returns**: `PublicApiUserGroupsResponse`
- **Error**: `ApiException<GetApiV1UserGroupsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiV1UserGroupsRequest` | `src/Soda/Requests/Users/GetApiV1UserGroupsRequest.cs` |
| `PublicApiUserGroupsResponse` | `src/Soda/Models/PublicApiUserGroupsResponse.cs` |
| `GetApiV1UserGroupsError` | `src/Soda/Errors/GetApiV1UserGroupsError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

### GetApiV1UserGroupsUserGroupId

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `GetApiV1UserGroupsUserGroupId(GetApiV1UserGroupsUserGroupIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserGroupId`
- **Returns**: `UserGroupContentDto`
- **Error**: `ApiException<GetApiV1UserGroupsUserGroupIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiV1UserGroupsUserGroupIdRequest` | `src/Soda/Requests/Users/GetApiV1UserGroupsUserGroupIdRequest.cs` |
| `UserGroupContentDto` | `src/Soda/Models/UserGroupContentDto.cs` |
| `GetApiV1UserGroupsUserGroupIdError` | `src/Soda/Errors/GetApiV1UserGroupsUserGroupIdError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

### GetApiV1Users

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `GetApiV1Users(GetApiV1UsersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `page` ← `Page`, `search` ← `Search`, `size` ← `Size`
- **Returns**: `PublicApiUsersResponse`
- **Error**: `ApiException<GetApiV1UsersError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiV1UsersRequest` | `src/Soda/Requests/Users/GetApiV1UsersRequest.cs` |
| `PublicApiUsersResponse` | `src/Soda/Models/PublicApiUsersResponse.cs` |
| `GetApiV1UsersError` | `src/Soda/Errors/GetApiV1UsersError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

### PostApiV1UserGroups

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `PostApiV1UserGroups(PostApiV1UserGroupsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `void` (Task)
- **Error**: `ApiException<PostApiV1UserGroupsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV1UserGroupsRequest` | `src/Soda/Requests/Users/PostApiV1UserGroupsRequest.cs` |
| `PublicApiCreateUserGroupRequestDto` | `src/Soda/Models/PublicApiCreateUserGroupRequestDto.cs` |
| `PostApiV1UserGroupsError` | `src/Soda/Errors/PostApiV1UserGroupsError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

### PostApiV1UserGroupsUserGroupId

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `PostApiV1UserGroupsUserGroupId(PostApiV1UserGroupsUserGroupIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserGroupId`, `Body`
- **Returns**: `UserGroupContentDto`
- **Error**: `ApiException<PostApiV1UserGroupsUserGroupIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV1UserGroupsUserGroupIdRequest` | `src/Soda/Requests/Users/PostApiV1UserGroupsUserGroupIdRequest.cs` |
| `PublicApiUpdateUserGroupRequestDto` | `src/Soda/Models/PublicApiUpdateUserGroupRequestDto.cs` |
| `UserGroupContentDto` | `src/Soda/Models/UserGroupContentDto.cs` |
| `PostApiV1UserGroupsUserGroupIdError` | `src/Soda/Errors/PostApiV1UserGroupsUserGroupIdError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

### PostApiV1Users

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `PostApiV1Users(PostApiV1UsersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `PublicApiInviteUserResponse`
- **Error**: `ApiException<PostApiV1UsersError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV1UsersRequest` | `src/Soda/Requests/Users/PostApiV1UsersRequest.cs` |
| `PublicApiInviteUserRequestDto` | `src/Soda/Models/PublicApiInviteUserRequestDto.cs` |
| `PublicApiInviteUserResponse` | `src/Soda/Models/PublicApiInviteUserResponse.cs` |
| `PostApiV1UsersError` | `src/Soda/Errors/PostApiV1UsersError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

### PostApiV1UsersUserIdDisable

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `PostApiV1UsersUserIdDisable(PostApiV1UsersUserIdDisableRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserId`
- **Returns**: `object`
- **Error**: `ApiException<PostApiV1UsersUserIdDisableError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV1UsersUserIdDisableRequest` | `src/Soda/Requests/Users/PostApiV1UsersUserIdDisableRequest.cs` |
| `PostApiV1UsersUserIdDisableError` | `src/Soda/Errors/PostApiV1UsersUserIdDisableError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

