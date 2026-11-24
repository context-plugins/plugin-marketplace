<!-- Generated file — do not edit; regenerated with the SDK. -->

# SourceGroups — operations

Accessor: `client.SourceGroups` · Source: `src/Perigon/Api/SourceGroups.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateSourceGroup

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `CreateSourceGroup(CreateSourceGroupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `SourceGroupResult`
- **Error**: `ApiException<CreateSourceGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateSourceGroupRequest` | `src/Perigon/Requests/SourceGroups/CreateSourceGroupRequest.cs` |
| `CreateSourceGroupParams` | `src/Perigon/Models/CreateSourceGroupParams.cs` |
| `SourceGroupResult` | `src/Perigon/Models/SourceGroupResult.cs` |
| `CreateSourceGroupError` | `src/Perigon/Errors/CreateSourceGroupError.cs` |
| `ErrorResponseModel` | `src/Perigon/Models/ErrorResponseModel.cs` |

### DeleteSourceGroup

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `DeleteSourceGroup(DeleteSourceGroupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `SourceGroupResult`
- **Error**: `ApiException<DeleteSourceGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteSourceGroupRequest` | `src/Perigon/Requests/SourceGroups/DeleteSourceGroupRequest.cs` |
| `SourceGroupResult` | `src/Perigon/Models/SourceGroupResult.cs` |
| `DeleteSourceGroupError` | `src/Perigon/Errors/DeleteSourceGroupError.cs` |
| `ErrorResponseModel` | `src/Perigon/Models/ErrorResponseModel.cs` |

### GetSourceGroup

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `GetSourceGroup(GetSourceGroupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `SourceGroupResult`
- **Error**: `ApiException<GetSourceGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetSourceGroupRequest` | `src/Perigon/Requests/SourceGroups/GetSourceGroupRequest.cs` |
| `SourceGroupResult` | `src/Perigon/Models/SourceGroupResult.cs` |
| `GetSourceGroupError` | `src/Perigon/Errors/GetSourceGroupError.cs` |
| `ErrorResponseModel` | `src/Perigon/Models/ErrorResponseModel.cs` |

### ListSourceGroups

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `ListSourceGroups(ListSourceGroupsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SortBy`, `SortOrder`
- **Query params (wire ← C#)**: `sortBy` ← `SortBy`, `sortOrder` ← `SortOrder`, `name` ← `Name`, `domain` ← `Domain`, `page` ← `Page`, `size` ← `Size`, `nulls` ← `Nulls`
- **Returns**: `SourceGroupListResult`
- **Error**: `ApiException<ListSourceGroupsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListSourceGroupsRequest` | `src/Perigon/Requests/SourceGroups/ListSourceGroupsRequest.cs` |
| `SourceGroupSortBy` | `src/Perigon/Models/Enums/SourceGroupSortBy.cs` |
| `SortOrder` | `src/Perigon/Models/Enums/SortOrder.cs` |
| `Nulls` | `src/Perigon/Models/Enums/Nulls.cs` |
| `SourceGroupListResult` | `src/Perigon/Models/SourceGroupListResult.cs` |
| `ListSourceGroupsError` | `src/Perigon/Errors/ListSourceGroupsError.cs` |
| `ErrorResponseModel` | `src/Perigon/Models/ErrorResponseModel.cs` |

### ResolveSourceGroups

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `ResolveSourceGroups(ResolveSourceGroupsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `name` ← `Name`
- **Returns**: `SourceGroupResolveResult`
- **Error**: `ApiException<ResolveSourceGroupsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ResolveSourceGroupsRequest` | `src/Perigon/Requests/SourceGroups/ResolveSourceGroupsRequest.cs` |
| `SourceGroupResolveResult` | `src/Perigon/Models/SourceGroupResolveResult.cs` |
| `ResolveSourceGroupsError` | `src/Perigon/Errors/ResolveSourceGroupsError.cs` |
| `ErrorResponseModel` | `src/Perigon/Models/ErrorResponseModel.cs` |

### UpdateSourceGroup

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `UpdateSourceGroup(UpdateSourceGroupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Body`
- **Returns**: `SourceGroupResult`
- **Error**: `ApiException<UpdateSourceGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateSourceGroupRequest` | `src/Perigon/Requests/SourceGroups/UpdateSourceGroupRequest.cs` |
| `PatchSourceGroupParams` | `src/Perigon/Models/PatchSourceGroupParams.cs` |
| `SourceGroupResult` | `src/Perigon/Models/SourceGroupResult.cs` |
| `UpdateSourceGroupError` | `src/Perigon/Errors/UpdateSourceGroupError.cs` |
| `ErrorResponseModel` | `src/Perigon/Models/ErrorResponseModel.cs` |

