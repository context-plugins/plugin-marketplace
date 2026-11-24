<!-- Generated file — do not edit; regenerated with the SDK. -->

# Objectives — operations

Accessor: `client.Objectives` · Source: `src/Shortcut/Api/Objectives.cs` · 9 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateObjective

- **Auth**: `options.ApiToken`
- **Signature**: `CreateObjective(CreateObjectiveRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `Objective`
- **Error**: `ApiException<CreateObjectiveError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetUnusableEntitlementError([NotNullWhen(true)] out UnusableEntitlementError? value)` [403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateObjectiveRequest` | `src/Shortcut/Requests/Objectives/CreateObjectiveRequest.cs` |
| `CreateObjective` | `src/Shortcut/Models/CreateObjective.cs` |
| `Objective` | `src/Shortcut/Models/Objective.cs` |
| `CreateObjectiveError` | `src/Shortcut/Errors/CreateObjectiveError.cs` |
| `UnusableEntitlementError` | `src/Shortcut/Models/UnusableEntitlementError.cs` |

### CreateObjectiveHealth

- **Auth**: `options.ApiToken`
- **Signature**: `CreateObjectiveHealth(CreateObjectiveHealthRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ObjectivePublicId`, `Body`
- **Returns**: `Health`
- **Error**: `ApiException<CreateObjectiveHealthError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateObjectiveHealthRequest` | `src/Shortcut/Requests/Objectives/CreateObjectiveHealthRequest.cs` |
| `CreateObjectiveHealth` | `src/Shortcut/Models/CreateObjectiveHealth.cs` |
| `Health` | `src/Shortcut/Models/Health.cs` |
| `CreateObjectiveHealthError` | `src/Shortcut/Errors/CreateObjectiveHealthError.cs` |

### DeleteObjective

- **Auth**: `options.ApiToken`
- **Signature**: `DeleteObjective(DeleteObjectiveRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ObjectivePublicId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteObjectiveError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteObjectiveRequest` | `src/Shortcut/Requests/Objectives/DeleteObjectiveRequest.cs` |
| `DeleteObjectiveError` | `src/Shortcut/Errors/DeleteObjectiveError.cs` |

### GetObjective

- **Auth**: `options.ApiToken`
- **Signature**: `GetObjective(GetObjectiveRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ObjectivePublicId`
- **Returns**: `Objective`
- **Error**: `ApiException<GetObjectiveError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetObjectiveRequest` | `src/Shortcut/Requests/Objectives/GetObjectiveRequest.cs` |
| `Objective` | `src/Shortcut/Models/Objective.cs` |
| `GetObjectiveError` | `src/Shortcut/Errors/GetObjectiveError.cs` |

### GetObjectiveHealth

- **Auth**: `options.ApiToken`
- **Signature**: `GetObjectiveHealth(GetObjectiveHealthRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ObjectivePublicId`
- **Returns**: `Health`
- **Error**: `ApiException<GetObjectiveHealthError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetObjectiveHealthRequest` | `src/Shortcut/Requests/Objectives/GetObjectiveHealthRequest.cs` |
| `Health` | `src/Shortcut/Models/Health.cs` |
| `GetObjectiveHealthError` | `src/Shortcut/Errors/GetObjectiveHealthError.cs` |

### ListObjectiveEpics

- **Auth**: `options.ApiToken`
- **Signature**: `ListObjectiveEpics(ListObjectiveEpicsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ObjectivePublicId`
- **Returns**: `IReadOnlyList<EpicSlim>`
- **Error**: `ApiException<ListObjectiveEpicsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListObjectiveEpicsRequest` | `src/Shortcut/Requests/Objectives/ListObjectiveEpicsRequest.cs` |
| `EpicSlim` | `src/Shortcut/Models/EpicSlim.cs` |
| `ListObjectiveEpicsError` | `src/Shortcut/Errors/ListObjectiveEpicsError.cs` |

### ListObjectiveHealths

- **Auth**: `options.ApiToken`
- **Signature**: `ListObjectiveHealths(ListObjectiveHealthsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ObjectivePublicId`
- **Returns**: `IReadOnlyList<Health>`
- **Error**: `ApiException<ListObjectiveHealthsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListObjectiveHealthsRequest` | `src/Shortcut/Requests/Objectives/ListObjectiveHealthsRequest.cs` |
| `Health` | `src/Shortcut/Models/Health.cs` |
| `ListObjectiveHealthsError` | `src/Shortcut/Errors/ListObjectiveHealthsError.cs` |

### ListObjectives

- **Auth**: `options.ApiToken`
- **Signature**: `ListObjectives(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `IReadOnlyList<Objective>`
- **Error**: `ApiException<ListObjectivesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `Objective` | `src/Shortcut/Models/Objective.cs` |
| `ListObjectivesError` | `src/Shortcut/Errors/ListObjectivesError.cs` |

### UpdateObjective

- **Auth**: `options.ApiToken`
- **Signature**: `UpdateObjective(UpdateObjectiveRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ObjectivePublicId`, `Body`
- **Returns**: `Objective`
- **Error**: `ApiException<UpdateObjectiveError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateObjectiveRequest` | `src/Shortcut/Requests/Objectives/UpdateObjectiveRequest.cs` |
| `UpdateObjective` | `src/Shortcut/Models/UpdateObjective.cs` |
| `Objective` | `src/Shortcut/Models/Objective.cs` |
| `UpdateObjectiveError` | `src/Shortcut/Errors/UpdateObjectiveError.cs` |

