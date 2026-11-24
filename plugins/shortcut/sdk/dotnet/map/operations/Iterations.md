<!-- Generated file — do not edit; regenerated with the SDK. -->

# Iterations — operations

Accessor: `client.Iterations` · Source: `src/Shortcut/Api/Iterations.cs` · 8 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateIteration

- **Auth**: `options.ApiToken`
- **Signature**: `CreateIteration(CreateIterationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `Iteration`
- **Error**: `ApiException<CreateIterationError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateIterationRequest` | `src/Shortcut/Requests/Iterations/CreateIterationRequest.cs` |
| `CreateIteration` | `src/Shortcut/Models/CreateIteration.cs` |
| `Iteration` | `src/Shortcut/Models/Iteration.cs` |
| `CreateIterationError` | `src/Shortcut/Errors/CreateIterationError.cs` |

### DeleteIteration

- **Auth**: `options.ApiToken`
- **Signature**: `DeleteIteration(DeleteIterationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `IterationPublicId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteIterationError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteIterationRequest` | `src/Shortcut/Requests/Iterations/DeleteIterationRequest.cs` |
| `DeleteIterationError` | `src/Shortcut/Errors/DeleteIterationError.cs` |

### DisableIterations

- **Auth**: `options.ApiToken`
- **Signature**: `DisableIterations(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DisableIterationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DisableIterationsError` | `src/Shortcut/Errors/DisableIterationsError.cs` |

### EnableIterations

- **Auth**: `options.ApiToken`
- **Signature**: `EnableIterations(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `void` (Task)
- **Error**: `ApiException<EnableIterationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EnableIterationsError` | `src/Shortcut/Errors/EnableIterationsError.cs` |

### GetIteration

- **Auth**: `options.ApiToken`
- **Signature**: `GetIteration(GetIterationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `IterationPublicId`
- **Returns**: `Iteration`
- **Error**: `ApiException<GetIterationError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetIterationRequest` | `src/Shortcut/Requests/Iterations/GetIterationRequest.cs` |
| `Iteration` | `src/Shortcut/Models/Iteration.cs` |
| `GetIterationError` | `src/Shortcut/Errors/GetIterationError.cs` |

### ListIterationStories

- **Auth**: `options.ApiToken`
- **Signature**: `ListIterationStories(ListIterationStoriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `IterationPublicId`
- **Query params (wire ← C#)**: `includes_description` ← `IncludesDescription`
- **Returns**: `IReadOnlyList<StorySlim>`
- **Error**: `ApiException<ListIterationStoriesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListIterationStoriesRequest` | `src/Shortcut/Requests/Iterations/ListIterationStoriesRequest.cs` |
| `StorySlim` | `src/Shortcut/Models/StorySlim.cs` |
| `ListIterationStoriesError` | `src/Shortcut/Errors/ListIterationStoriesError.cs` |

### ListIterations

- **Auth**: `options.ApiToken`
- **Signature**: `ListIterations(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `IReadOnlyList<IterationSlim>`
- **Error**: `ApiException<ListIterationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `IterationSlim` | `src/Shortcut/Models/IterationSlim.cs` |
| `ListIterationsError` | `src/Shortcut/Errors/ListIterationsError.cs` |

### UpdateIteration

- **Auth**: `options.ApiToken`
- **Signature**: `UpdateIteration(UpdateIterationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `IterationPublicId`, `Body`
- **Returns**: `Iteration`
- **Error**: `ApiException<UpdateIterationError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateIterationRequest` | `src/Shortcut/Requests/Iterations/UpdateIterationRequest.cs` |
| `UpdateIteration` | `src/Shortcut/Models/UpdateIteration.cs` |
| `Iteration` | `src/Shortcut/Models/Iteration.cs` |
| `UpdateIterationError` | `src/Shortcut/Errors/UpdateIterationError.cs` |

