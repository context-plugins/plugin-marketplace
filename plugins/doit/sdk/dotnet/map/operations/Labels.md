<!-- Generated file — do not edit; regenerated with the SDK. -->

# Labels — operations

Accessor: `client.Labels` · Source: `src/DoiT/Api/Labels.cs` · 7 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### AssignObjectsToLabel

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `AssignObjectsToLabel(AssignObjectsToLabelOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Body`
- **Returns**: `void` (Task)
- **Error**: `ApiException<AssignObjectsToLabelError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AssignObjectsToLabelOperationRequest` | `src/DoiT/Requests/Labels/AssignObjectsToLabelOperationRequest.cs` |
| `AssignObjectsToLabelRequest` | `src/DoiT/Models/AssignObjectsToLabelRequest.cs` |
| `AssignObjectsToLabelError` | `src/DoiT/Errors/AssignObjectsToLabelError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### CreateLabel

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `CreateLabel(CreateLabelOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `LabelListItem`
- **Error**: `ApiException<CreateLabelError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateLabelOperationRequest` | `src/DoiT/Requests/Labels/CreateLabelOperationRequest.cs` |
| `CreateLabelRequest` | `src/DoiT/Models/CreateLabelRequest.cs` |
| `LabelListItem` | `src/DoiT/Models/LabelListItem.cs` |
| `CreateLabelError` | `src/DoiT/Errors/CreateLabelError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### DeleteLabel

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `DeleteLabel(DeleteLabelRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `object`
- **Error**: `ApiException<DeleteLabelError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteLabelRequest` | `src/DoiT/Requests/Labels/DeleteLabelRequest.cs` |
| `DeleteLabelError` | `src/DoiT/Errors/DeleteLabelError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### GetLabel

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `GetLabel(GetLabelRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `LabelListItem`
- **Error**: `ApiException<GetLabelError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetLabelRequest` | `src/DoiT/Requests/Labels/GetLabelRequest.cs` |
| `LabelListItem` | `src/DoiT/Models/LabelListItem.cs` |
| `GetLabelError` | `src/DoiT/Errors/GetLabelError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### GetLabelAssignments

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `GetLabelAssignments(GetLabelAssignmentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `LabelAssignmentsResponse`
- **Error**: `ApiException<GetLabelAssignmentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetLabelAssignmentsRequest` | `src/DoiT/Requests/Labels/GetLabelAssignmentsRequest.cs` |
| `LabelAssignmentsResponse` | `src/DoiT/Models/LabelAssignmentsResponse.cs` |
| `GetLabelAssignmentsError` | `src/DoiT/Errors/GetLabelAssignmentsError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### ListLabels

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `ListLabels(ListLabelsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `maxResults` ← `MaxResults`, `pageToken` ← `PageToken`, `filter` ← `Filter`, `nameContains` ← `NameContains`, `sortBy` ← `SortBy`, `sortOrder` ← `SortOrder`
- **Returns**: `LabelList`
- **Error**: `ApiException<ListLabelsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListLabelsRequest` | `src/DoiT/Requests/Labels/ListLabelsRequest.cs` |
| `SortByDoiTLabelsApi` | `src/DoiT/Models/Enums/SortByDoiTLabelsApi.cs` |
| `SortOrder` | `src/DoiT/Models/Enums/SortOrder.cs` |
| `LabelList` | `src/DoiT/Models/LabelList.cs` |
| `ListLabelsError` | `src/DoiT/Errors/ListLabelsError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### UpdateLabel

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `UpdateLabel(UpdateLabelOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `LabelListItem`
- **Error**: `ApiException<UpdateLabelError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateLabelOperationRequest` | `src/DoiT/Requests/Labels/UpdateLabelOperationRequest.cs` |
| `UpdateLabelRequest` | `src/DoiT/Models/UpdateLabelRequest.cs` |
| `LabelListItem` | `src/DoiT/Models/LabelListItem.cs` |
| `UpdateLabelError` | `src/DoiT/Errors/UpdateLabelError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

