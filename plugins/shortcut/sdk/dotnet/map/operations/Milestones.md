<!-- Generated file — do not edit; regenerated with the SDK. -->

# Milestones — operations

Accessor: `client.Milestones` · Source: `src/Shortcut/Api/Milestones.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateMilestone

- **Auth**: `options.ApiToken`
- **Signature**: `CreateMilestone(CreateMilestoneRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `Milestone`
- **Error**: `ApiException<CreateMilestoneError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetUnusableEntitlementError([NotNullWhen(true)] out UnusableEntitlementError? value)` [403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateMilestoneRequest` | `src/Shortcut/Requests/Milestones/CreateMilestoneRequest.cs` |
| `CreateMilestone` | `src/Shortcut/Models/CreateMilestone.cs` |
| `Milestone` | `src/Shortcut/Models/Milestone.cs` |
| `CreateMilestoneError` | `src/Shortcut/Errors/CreateMilestoneError.cs` |
| `UnusableEntitlementError` | `src/Shortcut/Models/UnusableEntitlementError.cs` |

### DeleteMilestone

- **Auth**: `options.ApiToken`
- **Signature**: `DeleteMilestone(DeleteMilestoneRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `MilestonePublicId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteMilestoneError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteMilestoneRequest` | `src/Shortcut/Requests/Milestones/DeleteMilestoneRequest.cs` |
| `DeleteMilestoneError` | `src/Shortcut/Errors/DeleteMilestoneError.cs` |

### GetMilestone

- **Auth**: `options.ApiToken`
- **Signature**: `GetMilestone(GetMilestoneRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `MilestonePublicId`
- **Returns**: `Milestone`
- **Error**: `ApiException<GetMilestoneError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetMilestoneRequest` | `src/Shortcut/Requests/Milestones/GetMilestoneRequest.cs` |
| `Milestone` | `src/Shortcut/Models/Milestone.cs` |
| `GetMilestoneError` | `src/Shortcut/Errors/GetMilestoneError.cs` |

### ListMilestoneEpics

- **Auth**: `options.ApiToken`
- **Signature**: `ListMilestoneEpics(ListMilestoneEpicsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `MilestonePublicId`
- **Returns**: `IReadOnlyList<EpicSlim>`
- **Error**: `ApiException<ListMilestoneEpicsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListMilestoneEpicsRequest` | `src/Shortcut/Requests/Milestones/ListMilestoneEpicsRequest.cs` |
| `EpicSlim` | `src/Shortcut/Models/EpicSlim.cs` |
| `ListMilestoneEpicsError` | `src/Shortcut/Errors/ListMilestoneEpicsError.cs` |

### ListMilestones

- **Auth**: `options.ApiToken`
- **Signature**: `ListMilestones(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `IReadOnlyList<Milestone>`
- **Error**: `ApiException<ListMilestonesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `Milestone` | `src/Shortcut/Models/Milestone.cs` |
| `ListMilestonesError` | `src/Shortcut/Errors/ListMilestonesError.cs` |

### UpdateMilestone

- **Auth**: `options.ApiToken`
- **Signature**: `UpdateMilestone(UpdateMilestoneRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `MilestonePublicId`, `Body`
- **Returns**: `Milestone`
- **Error**: `ApiException<UpdateMilestoneError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateMilestoneRequest` | `src/Shortcut/Requests/Milestones/UpdateMilestoneRequest.cs` |
| `UpdateMilestone` | `src/Shortcut/Models/UpdateMilestone.cs` |
| `Milestone` | `src/Shortcut/Models/Milestone.cs` |
| `UpdateMilestoneError` | `src/Shortcut/Errors/UpdateMilestoneError.cs` |

