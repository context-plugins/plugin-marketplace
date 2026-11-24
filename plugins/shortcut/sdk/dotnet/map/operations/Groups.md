<!-- Generated file — do not edit; regenerated with the SDK. -->

# Groups — operations

Accessor: `client.Groups` · Source: `src/Shortcut/Api/Groups.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateGroup

- **Auth**: `options.ApiToken`
- **Signature**: `CreateGroup(CreateGroupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `Group`
- **Error**: `ApiException<CreateGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetUnusableEntitlementError([NotNullWhen(true)] out UnusableEntitlementError? value)` [403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateGroupRequest` | `src/Shortcut/Requests/Groups/CreateGroupRequest.cs` |
| `CreateGroup` | `src/Shortcut/Models/CreateGroup.cs` |
| `Group` | `src/Shortcut/Models/Group.cs` |
| `CreateGroupError` | `src/Shortcut/Errors/CreateGroupError.cs` |
| `UnusableEntitlementError` | `src/Shortcut/Models/UnusableEntitlementError.cs` |

### GetGroup

- **Auth**: `options.ApiToken`
- **Signature**: `GetGroup(GetGroupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `GroupPublicId`
- **Returns**: `Group`
- **Error**: `ApiException<GetGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetGroupRequest` | `src/Shortcut/Requests/Groups/GetGroupRequest.cs` |
| `Group` | `src/Shortcut/Models/Group.cs` |
| `GetGroupError` | `src/Shortcut/Errors/GetGroupError.cs` |

### ListGroupStories

- **Auth**: `options.ApiToken`
- **Signature**: `ListGroupStories(ListGroupStoriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `GroupPublicId`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `IReadOnlyList<StorySlim>`
- **Error**: `ApiException<ListGroupStoriesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListGroupStoriesRequest` | `src/Shortcut/Requests/Groups/ListGroupStoriesRequest.cs` |
| `StorySlim` | `src/Shortcut/Models/StorySlim.cs` |
| `ListGroupStoriesError` | `src/Shortcut/Errors/ListGroupStoriesError.cs` |

### ListGroups

- **Auth**: `options.ApiToken`
- **Signature**: `ListGroups(ListGroupsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `archived` ← `Archived`
- **Returns**: `IReadOnlyList<Group>`
- **Error**: `ApiException<ListGroupsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListGroupsRequest` | `src/Shortcut/Requests/Groups/ListGroupsRequest.cs` |
| `Group` | `src/Shortcut/Models/Group.cs` |
| `ListGroupsError` | `src/Shortcut/Errors/ListGroupsError.cs` |

### UpdateGroup

- **Auth**: `options.ApiToken`
- **Signature**: `UpdateGroup(UpdateGroupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `GroupPublicId`, `Body`
- **Returns**: `Group`
- **Error**: `ApiException<UpdateGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetUnusableEntitlementError([NotNullWhen(true)] out UnusableEntitlementError? value)` [403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateGroupRequest` | `src/Shortcut/Requests/Groups/UpdateGroupRequest.cs` |
| `UpdateGroup` | `src/Shortcut/Models/UpdateGroup.cs` |
| `Group` | `src/Shortcut/Models/Group.cs` |
| `UpdateGroupError` | `src/Shortcut/Errors/UpdateGroupError.cs` |
| `UnusableEntitlementError` | `src/Shortcut/Models/UnusableEntitlementError.cs` |

