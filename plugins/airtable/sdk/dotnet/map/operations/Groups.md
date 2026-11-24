<!-- Generated file — do not edit; regenerated with the SDK. -->

# Groups — operations

Accessor: `client.Groups` · Source: `src/Airtable/Api/Groups.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateScimGroup

- **Server group**: `DefaultAirtableScimGroupsApi`
- **Auth**: `options.BearerAuth`
- **Signature**: `CreateScimGroup(CreateScimGroupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ScimGroup`
- **Error**: `ApiException<CreateScimGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetScimError([NotNullWhen(true)] out ScimError? value)` [400, 401, 403, 409, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateScimGroupRequest` | `src/Airtable/Requests/Groups/CreateScimGroupRequest.cs` |
| `ScimGroupCreateRequest` | `src/Airtable/Models/ScimGroupCreateRequest.cs` |
| `ScimGroup` | `src/Airtable/Models/ScimGroup.cs` |
| `CreateScimGroupError` | `src/Airtable/Errors/CreateScimGroupError.cs` |
| `ScimError` | `src/Airtable/Models/ScimError.cs` |

### DeleteScimGroup

- **Server group**: `DefaultAirtableScimGroupsApi`
- **Auth**: `options.BearerAuth`
- **Signature**: `DeleteScimGroup(DeleteScimGroupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `GroupId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteScimGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetScimError([NotNullWhen(true)] out ScimError? value)` [401, 403, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteScimGroupRequest` | `src/Airtable/Requests/Groups/DeleteScimGroupRequest.cs` |
| `DeleteScimGroupError` | `src/Airtable/Errors/DeleteScimGroupError.cs` |
| `ScimError` | `src/Airtable/Models/ScimError.cs` |

### GetScimGroup

- **Server group**: `DefaultAirtableScimGroupsApi`
- **Auth**: `options.BearerAuth`
- **Signature**: `GetScimGroup(GetScimGroupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `GroupId`
- **Returns**: `ScimGroup`
- **Error**: `ApiException<GetScimGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetScimError([NotNullWhen(true)] out ScimError? value)` [401, 403, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetScimGroupRequest` | `src/Airtable/Requests/Groups/GetScimGroupRequest.cs` |
| `ScimGroup` | `src/Airtable/Models/ScimGroup.cs` |
| `GetScimGroupError` | `src/Airtable/Errors/GetScimGroupError.cs` |
| `ScimError` | `src/Airtable/Models/ScimError.cs` |

### ListScimGroups

- **Server group**: `DefaultAirtableScimGroupsApi`
- **Auth**: `options.BearerAuth`
- **Signature**: `ListScimGroups(ListScimGroupsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `filter` ← `Filter`, `startIndex` ← `StartIndex`, `count` ← `Count`
- **Returns**: `ScimGroupListResponse`
- **Error**: `ApiException<ListScimGroupsError>` — **Case A (typed)**
- **Error accessors**: `TryGetScimError([NotNullWhen(true)] out ScimError? value)` [401, 403, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListScimGroupsRequest` | `src/Airtable/Requests/Groups/ListScimGroupsRequest.cs` |
| `ScimGroupListResponse` | `src/Airtable/Models/ScimGroupListResponse.cs` |
| `ListScimGroupsError` | `src/Airtable/Errors/ListScimGroupsError.cs` |
| `ScimError` | `src/Airtable/Models/ScimError.cs` |

### ReplaceScimGroup

- **Server group**: `DefaultAirtableScimGroupsApi`
- **Auth**: `options.BearerAuth`
- **Signature**: `ReplaceScimGroup(ReplaceScimGroupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `GroupId`, `Body`
- **Returns**: `ScimGroup`
- **Error**: `ApiException<ReplaceScimGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetScimError([NotNullWhen(true)] out ScimError? value)` [400, 401, 403, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ReplaceScimGroupRequest` | `src/Airtable/Requests/Groups/ReplaceScimGroupRequest.cs` |
| `ScimGroupCreateRequest` | `src/Airtable/Models/ScimGroupCreateRequest.cs` |
| `ScimGroup` | `src/Airtable/Models/ScimGroup.cs` |
| `ReplaceScimGroupError` | `src/Airtable/Errors/ReplaceScimGroupError.cs` |
| `ScimError` | `src/Airtable/Models/ScimError.cs` |

### UpdateScimGroup

- **Server group**: `DefaultAirtableScimGroupsApi`
- **Auth**: `options.BearerAuth`
- **Signature**: `UpdateScimGroup(UpdateScimGroupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `GroupId`, `Body`
- **Returns**: `ScimGroup`
- **Error**: `ApiException<UpdateScimGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetScimError([NotNullWhen(true)] out ScimError? value)` [400, 401, 403, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateScimGroupRequest` | `src/Airtable/Requests/Groups/UpdateScimGroupRequest.cs` |
| `ScimPatchRequest` | `src/Airtable/Models/ScimPatchRequest.cs` |
| `ScimGroup` | `src/Airtable/Models/ScimGroup.cs` |
| `UpdateScimGroupError` | `src/Airtable/Errors/UpdateScimGroupError.cs` |
| `ScimError` | `src/Airtable/Models/ScimError.cs` |

