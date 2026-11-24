<!-- Generated file — do not edit; regenerated with the SDK. -->

# Projects — operations

Accessor: `client.Projects` · Source: `src/Bitbucket/Api/Projects.cs` · 16 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteWorkspacesByWorkspaceProjectsByProjectKey

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `DeleteWorkspacesByWorkspaceProjectsByProjectKey(DeleteWorkspacesByWorkspaceProjectsByProjectKeyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectKey`, `Workspace`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteWorkspacesByWorkspaceProjectsByProjectKeyError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteWorkspacesByWorkspaceProjectsByProjectKeyRequest` | `src/Bitbucket/Requests/Projects/DeleteWorkspacesByWorkspaceProjectsByProjectKeyRequest.cs` |
| `DeleteWorkspacesByWorkspaceProjectsByProjectKeyError` | `src/Bitbucket/Errors/DeleteWorkspacesByWorkspaceProjectsByProjectKeyError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### DeleteWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersBySelectedUser

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `DeleteWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersBySelectedUser(DeleteWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersBySelectedUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectKey`, `SelectedUser`, `Workspace`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersBySelectedUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersBySelectedUserRequest` | `src/Bitbucket/Requests/Projects/DeleteWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersBySelectedUserRequest.cs` |
| `DeleteWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersBySelectedUserError` | `src/Bitbucket/Errors/DeleteWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersBySelectedUserError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### DeleteWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsByGroupSlug

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `DeleteWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsByGroupSlug(DeleteWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsByGroupSlugRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `GroupSlug`, `ProjectKey`, `Workspace`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsByGroupSlugError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsByGroupSlugRequest` | `src/Bitbucket/Requests/Projects/DeleteWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsByGroupSlugRequest.cs` |
| `DeleteWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsByGroupSlugError` | `src/Bitbucket/Errors/DeleteWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsByGroupSlugError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### DeleteWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersBySelectedUserId

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `DeleteWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersBySelectedUserId(DeleteWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersBySelectedUserIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectKey`, `SelectedUserId`, `Workspace`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersBySelectedUserIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersBySelectedUserIdRequest` | `src/Bitbucket/Requests/Projects/DeleteWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersBySelectedUserIdRequest.cs` |
| `DeleteWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersBySelectedUserIdError` | `src/Bitbucket/Errors/DeleteWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersBySelectedUserIdError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetWorkspacesByWorkspaceProjectsByProjectKey

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetWorkspacesByWorkspaceProjectsByProjectKey(GetWorkspacesByWorkspaceProjectsByProjectKeyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectKey`, `Workspace`
- **Returns**: `ProjectBitbucketProjectsApi`
- **Error**: `ApiException<GetWorkspacesByWorkspaceProjectsByProjectKeyError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetWorkspacesByWorkspaceProjectsByProjectKeyRequest` | `src/Bitbucket/Requests/Projects/GetWorkspacesByWorkspaceProjectsByProjectKeyRequest.cs` |
| `ProjectBitbucketProjectsApi` | `src/Bitbucket/Models/AllOf/ProjectBitbucketProjectsApi.cs` |
| `GetWorkspacesByWorkspaceProjectsByProjectKeyError` | `src/Bitbucket/Errors/GetWorkspacesByWorkspaceProjectsByProjectKeyError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewers

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewers(GetWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectKey`, `Workspace`
- **Returns**: `PaginatedDefaultReviewerAndType`
- **Error**: `ApiException<GetWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersRequest` | `src/Bitbucket/Requests/Projects/GetWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersRequest.cs` |
| `PaginatedDefaultReviewerAndType` | `src/Bitbucket/Models/PaginatedDefaultReviewerAndType.cs` |
| `GetWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersError` | `src/Bitbucket/Errors/GetWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersBySelectedUser

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersBySelectedUser(GetWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersBySelectedUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectKey`, `SelectedUser`, `Workspace`
- **Returns**: `User`
- **Error**: `ApiException<GetWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersBySelectedUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersBySelectedUserRequest` | `src/Bitbucket/Requests/Projects/GetWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersBySelectedUserRequest.cs` |
| `User` | `src/Bitbucket/Models/AllOf/User.cs` |
| `GetWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersBySelectedUserError` | `src/Bitbucket/Errors/GetWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersBySelectedUserError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroups

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroups(GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectKey`, `Workspace`
- **Returns**: `PaginatedProjectGroupPermissions`
- **Error**: `ApiException<GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsRequest` | `src/Bitbucket/Requests/Projects/GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsRequest.cs` |
| `PaginatedProjectGroupPermissions` | `src/Bitbucket/Models/PaginatedProjectGroupPermissions.cs` |
| `GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsError` | `src/Bitbucket/Errors/GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsByGroupSlug

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsByGroupSlug(GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsByGroupSlugRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `GroupSlug`, `ProjectKey`, `Workspace`
- **Returns**: `ProjectGroupPermission`
- **Error**: `ApiException<GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsByGroupSlugError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsByGroupSlugRequest` | `src/Bitbucket/Requests/Projects/GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsByGroupSlugRequest.cs` |
| `ProjectGroupPermission` | `src/Bitbucket/Models/ProjectGroupPermission.cs` |
| `GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsByGroupSlugError` | `src/Bitbucket/Errors/GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsByGroupSlugError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsers

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsers(GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectKey`, `Workspace`
- **Returns**: `PaginatedProjectUserPermissions`
- **Error**: `ApiException<GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersRequest` | `src/Bitbucket/Requests/Projects/GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersRequest.cs` |
| `PaginatedProjectUserPermissions` | `src/Bitbucket/Models/PaginatedProjectUserPermissions.cs` |
| `GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersError` | `src/Bitbucket/Errors/GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersBySelectedUserId

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersBySelectedUserId(GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersBySelectedUserIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectKey`, `SelectedUserId`, `Workspace`
- **Returns**: `ProjectUserPermission`
- **Error**: `ApiException<GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersBySelectedUserIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersBySelectedUserIdRequest` | `src/Bitbucket/Requests/Projects/GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersBySelectedUserIdRequest.cs` |
| `ProjectUserPermission` | `src/Bitbucket/Models/ProjectUserPermission.cs` |
| `GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersBySelectedUserIdError` | `src/Bitbucket/Errors/GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersBySelectedUserIdError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### PostWorkspacesByWorkspaceProjects

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `PostWorkspacesByWorkspaceProjects(PostWorkspacesByWorkspaceProjectsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`, `Body`
- **Returns**: `ProjectBitbucketProjectsApi`
- **Error**: `ApiException<PostWorkspacesByWorkspaceProjectsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostWorkspacesByWorkspaceProjectsRequest` | `src/Bitbucket/Requests/Projects/PostWorkspacesByWorkspaceProjectsRequest.cs` |
| `ProjectBitbucketProjectsApi` | `src/Bitbucket/Models/AllOf/ProjectBitbucketProjectsApi.cs` |
| `PostWorkspacesByWorkspaceProjectsError` | `src/Bitbucket/Errors/PostWorkspacesByWorkspaceProjectsError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### PutWorkspacesByWorkspaceProjectsByProjectKey

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `PutWorkspacesByWorkspaceProjectsByProjectKey(PutWorkspacesByWorkspaceProjectsByProjectKeyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectKey`, `Workspace`, `Body`
- **Returns**: `ProjectBitbucketProjectsApi`
- **Error**: `ApiException<PutWorkspacesByWorkspaceProjectsByProjectKeyError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PutWorkspacesByWorkspaceProjectsByProjectKeyRequest` | `src/Bitbucket/Requests/Projects/PutWorkspacesByWorkspaceProjectsByProjectKeyRequest.cs` |
| `ProjectBitbucketProjectsApi` | `src/Bitbucket/Models/AllOf/ProjectBitbucketProjectsApi.cs` |
| `PutWorkspacesByWorkspaceProjectsByProjectKeyError` | `src/Bitbucket/Errors/PutWorkspacesByWorkspaceProjectsByProjectKeyError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### PutWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersBySelectedUser

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `PutWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersBySelectedUser(PutWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersBySelectedUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectKey`, `SelectedUser`, `Workspace`
- **Returns**: `User`
- **Error**: `ApiException<PutWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersBySelectedUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PutWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersBySelectedUserRequest` | `src/Bitbucket/Requests/Projects/PutWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersBySelectedUserRequest.cs` |
| `User` | `src/Bitbucket/Models/AllOf/User.cs` |
| `PutWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersBySelectedUserError` | `src/Bitbucket/Errors/PutWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersBySelectedUserError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### PutWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsByGroupSlug

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `PutWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsByGroupSlug(PutWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsByGroupSlugRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `GroupSlug`, `ProjectKey`, `Workspace`, `Body`
- **Returns**: `ProjectGroupPermission`
- **Error**: `ApiException<PutWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsByGroupSlugError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 402, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PutWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsByGroupSlugRequest` | `src/Bitbucket/Requests/Projects/PutWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsByGroupSlugRequest.cs` |
| `BitbucketAppsPermissionsSerializersProjectPermissionUpdateSchema` | `src/Bitbucket/Models/BitbucketAppsPermissionsSerializersProjectPermissionUpdateSchema.cs` |
| `ProjectGroupPermission` | `src/Bitbucket/Models/ProjectGroupPermission.cs` |
| `PutWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsByGroupSlugError` | `src/Bitbucket/Errors/PutWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsByGroupSlugError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### PutWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersBySelectedUserId

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `PutWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersBySelectedUserId(PutWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersBySelectedUserIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectKey`, `SelectedUserId`, `Workspace`, `Body`
- **Returns**: `ProjectUserPermission`
- **Error**: `ApiException<PutWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersBySelectedUserIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 402, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PutWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersBySelectedUserIdRequest` | `src/Bitbucket/Requests/Projects/PutWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersBySelectedUserIdRequest.cs` |
| `BitbucketAppsPermissionsSerializersProjectPermissionUpdateSchema` | `src/Bitbucket/Models/BitbucketAppsPermissionsSerializersProjectPermissionUpdateSchema.cs` |
| `ProjectUserPermission` | `src/Bitbucket/Models/ProjectUserPermission.cs` |
| `PutWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersBySelectedUserIdError` | `src/Bitbucket/Errors/PutWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersBySelectedUserIdError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

