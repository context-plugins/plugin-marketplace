<!-- Generated file — do not edit; regenerated with the SDK. -->

# ScimGroups — operations

Accessor: `client.ScimGroups` · Source: `src/Contentstack/Api/ScimGroups.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateScimGroup

- **Server group**: `DefaultContentstackScimScimGroupsApi`
- **Auth**: `options.BearerAuth`
- **Signature**: `CreateScimGroup(CreateScimGroupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationUid`, `Body`
- **Returns**: `ScimGroup`
- **Error**: `ApiException<CreateScimGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetScimError([NotNullWhen(true)] out ScimError? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateScimGroupRequest` | `src/Contentstack/Requests/ScimGroups/CreateScimGroupRequest.cs` |
| `ScimGroup` | `src/Contentstack/Models/ScimGroup.cs` |
| `CreateScimGroupError` | `src/Contentstack/Errors/CreateScimGroupError.cs` |
| `ScimError` | `src/Contentstack/Models/ScimError.cs` |

### DeleteScimGroup

- **Server group**: `DefaultContentstackScimScimGroupsApi`
- **Auth**: `options.BearerAuth`
- **Signature**: `DeleteScimGroup(DeleteScimGroupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationUid`, `GroupId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteScimGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetScimError([NotNullWhen(true)] out ScimError? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteScimGroupRequest` | `src/Contentstack/Requests/ScimGroups/DeleteScimGroupRequest.cs` |
| `DeleteScimGroupError` | `src/Contentstack/Errors/DeleteScimGroupError.cs` |
| `ScimError` | `src/Contentstack/Models/ScimError.cs` |

### GetScimGroup

- **Server group**: `DefaultContentstackScimScimGroupsApi`
- **Auth**: `options.BearerAuth`
- **Signature**: `GetScimGroup(GetScimGroupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationUid`, `GroupId`
- **Returns**: `ScimGroup`
- **Error**: `ApiException<GetScimGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetScimError([NotNullWhen(true)] out ScimError? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetScimGroupRequest` | `src/Contentstack/Requests/ScimGroups/GetScimGroupRequest.cs` |
| `ScimGroup` | `src/Contentstack/Models/ScimGroup.cs` |
| `GetScimGroupError` | `src/Contentstack/Errors/GetScimGroupError.cs` |
| `ScimError` | `src/Contentstack/Models/ScimError.cs` |

### ListScimGroups

- **Server group**: `DefaultContentstackScimScimGroupsApi`
- **Auth**: `options.BearerAuth`
- **Signature**: `ListScimGroups(ListScimGroupsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationUid`
- **Query params (wire ← C#)**: `filter` ← `Filter`
- **Returns**: `ScimListResponse`
- **Error**: `ApiException<ListScimGroupsError>` — **Case A (typed)**
- **Error accessors**: `TryGetScimError([NotNullWhen(true)] out ScimError? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListScimGroupsRequest` | `src/Contentstack/Requests/ScimGroups/ListScimGroupsRequest.cs` |
| `ScimListResponse` | `src/Contentstack/Models/ScimListResponse.cs` |
| `ListScimGroupsError` | `src/Contentstack/Errors/ListScimGroupsError.cs` |
| `ScimError` | `src/Contentstack/Models/ScimError.cs` |

### ReplaceScimGroup

- **Server group**: `DefaultContentstackScimScimGroupsApi`
- **Auth**: `options.BearerAuth`
- **Signature**: `ReplaceScimGroup(ReplaceScimGroupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationUid`, `GroupId`, `Body`
- **Returns**: `ScimGroup`
- **Error**: `ApiException<ReplaceScimGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetScimError([NotNullWhen(true)] out ScimError? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ReplaceScimGroupRequest` | `src/Contentstack/Requests/ScimGroups/ReplaceScimGroupRequest.cs` |
| `ScimGroup` | `src/Contentstack/Models/ScimGroup.cs` |
| `ReplaceScimGroupError` | `src/Contentstack/Errors/ReplaceScimGroupError.cs` |
| `ScimError` | `src/Contentstack/Models/ScimError.cs` |

### UpdateScimGroup

- **Server group**: `DefaultContentstackScimScimGroupsApi`
- **Auth**: `options.BearerAuth`
- **Signature**: `UpdateScimGroup(UpdateScimGroupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationUid`, `GroupId`, `Body`
- **Returns**: `ScimGroup`
- **Error**: `ApiException<UpdateScimGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetScimError([NotNullWhen(true)] out ScimError? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateScimGroupRequest` | `src/Contentstack/Requests/ScimGroups/UpdateScimGroupRequest.cs` |
| `ScimPatchRequest` | `src/Contentstack/Models/ScimPatchRequest.cs` |
| `ScimGroup` | `src/Contentstack/Models/ScimGroup.cs` |
| `UpdateScimGroupError` | `src/Contentstack/Errors/UpdateScimGroupError.cs` |
| `ScimError` | `src/Contentstack/Models/ScimError.cs` |

