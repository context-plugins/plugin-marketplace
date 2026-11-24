<!-- Generated file — do not edit; regenerated with the SDK. -->

# Groups — operations

Accessor: `client.Groups` · Source: `src/UiPath/Api/Groups.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateGroup

- **Server group**: `DefaultUiPathPlatformManagementAuditLogsApi`
- **Auth**: `options.BearerAuth`
- **Signature**: `CreateGroup(CreateGroupOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationName`, `Body`
- **Returns**: `Group`
- **Error**: `ApiException<CreateGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseUiPathPlatformManagementAuditLogsApi([NotNullWhen(true)] out ErrorResponseUiPathPlatformManagementAuditLogsApi? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateGroupOperationRequest` | `src/UiPath/Requests/Groups/CreateGroupOperationRequest.cs` |
| `CreateGroupRequest` | `src/UiPath/Models/CreateGroupRequest.cs` |
| `Group` | `src/UiPath/Models/Group.cs` |
| `CreateGroupError` | `src/UiPath/Errors/CreateGroupError.cs` |
| `ErrorResponseUiPathPlatformManagementAuditLogsApi` | `src/UiPath/Models/ErrorResponseUiPathPlatformManagementAuditLogsApi.cs` |

### GetGroup

- **Server group**: `DefaultUiPathPlatformManagementAuditLogsApi`
- **Auth**: `options.BearerAuth`
- **Signature**: `GetGroup(GetGroupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationName`, `PartitionGlobalId`, `GroupId`
- **Returns**: `Group`
- **Error**: `ApiException<GetGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseUiPathPlatformManagementAuditLogsApi([NotNullWhen(true)] out ErrorResponseUiPathPlatformManagementAuditLogsApi? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetGroupRequest` | `src/UiPath/Requests/Groups/GetGroupRequest.cs` |
| `Group` | `src/UiPath/Models/Group.cs` |
| `GetGroupError` | `src/UiPath/Errors/GetGroupError.cs` |
| `ErrorResponseUiPathPlatformManagementAuditLogsApi` | `src/UiPath/Models/ErrorResponseUiPathPlatformManagementAuditLogsApi.cs` |

### ListGroups

- **Server group**: `DefaultUiPathPlatformManagementAuditLogsApi`
- **Auth**: `options.BearerAuth`
- **Signature**: `ListGroups(ListGroupsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationName`, `PartitionGlobalId`
- **Returns**: `IdentityApiGroupResponse`
- **Error**: `ApiException<ListGroupsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseUiPathPlatformManagementAuditLogsApi([NotNullWhen(true)] out ErrorResponseUiPathPlatformManagementAuditLogsApi? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListGroupsRequest` | `src/UiPath/Requests/Groups/ListGroupsRequest.cs` |
| `IdentityApiGroupResponse` | `src/UiPath/Models/IdentityApiGroupResponse.cs` |
| `ListGroupsError` | `src/UiPath/Errors/ListGroupsError.cs` |
| `ErrorResponseUiPathPlatformManagementAuditLogsApi` | `src/UiPath/Models/ErrorResponseUiPathPlatformManagementAuditLogsApi.cs` |

