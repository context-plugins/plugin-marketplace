<!-- Generated file — do not edit; regenerated with the SDK. -->

# Labels — operations

Accessor: `client.Labels` · Source: `src/Shortcut/Api/Labels.cs` · 7 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateLabel

- **Auth**: `options.ApiToken`
- **Signature**: `CreateLabel(CreateLabelRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `Label`
- **Error**: `ApiException<CreateLabelError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateLabelRequest` | `src/Shortcut/Requests/Labels/CreateLabelRequest.cs` |
| `CreateLabelParams` | `src/Shortcut/Models/CreateLabelParams.cs` |
| `Label` | `src/Shortcut/Models/Label.cs` |
| `CreateLabelError` | `src/Shortcut/Errors/CreateLabelError.cs` |

### DeleteLabel

- **Auth**: `options.ApiToken`
- **Signature**: `DeleteLabel(DeleteLabelRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `LabelPublicId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteLabelError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteLabelRequest` | `src/Shortcut/Requests/Labels/DeleteLabelRequest.cs` |
| `DeleteLabelError` | `src/Shortcut/Errors/DeleteLabelError.cs` |

### GetLabel

- **Auth**: `options.ApiToken`
- **Signature**: `GetLabel(GetLabelRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `LabelPublicId`
- **Returns**: `Label`
- **Error**: `ApiException<GetLabelError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetLabelRequest` | `src/Shortcut/Requests/Labels/GetLabelRequest.cs` |
| `Label` | `src/Shortcut/Models/Label.cs` |
| `GetLabelError` | `src/Shortcut/Errors/GetLabelError.cs` |

### ListLabelEpics

- **Auth**: `options.ApiToken`
- **Signature**: `ListLabelEpics(ListLabelEpicsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `LabelPublicId`
- **Returns**: `IReadOnlyList<EpicSlim>`
- **Error**: `ApiException<ListLabelEpicsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListLabelEpicsRequest` | `src/Shortcut/Requests/Labels/ListLabelEpicsRequest.cs` |
| `EpicSlim` | `src/Shortcut/Models/EpicSlim.cs` |
| `ListLabelEpicsError` | `src/Shortcut/Errors/ListLabelEpicsError.cs` |

### ListLabelStories

- **Auth**: `options.ApiToken`
- **Signature**: `ListLabelStories(ListLabelStoriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `LabelPublicId`
- **Query params (wire ← C#)**: `includes_description` ← `IncludesDescription`
- **Returns**: `IReadOnlyList<StorySlim>`
- **Error**: `ApiException<ListLabelStoriesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListLabelStoriesRequest` | `src/Shortcut/Requests/Labels/ListLabelStoriesRequest.cs` |
| `StorySlim` | `src/Shortcut/Models/StorySlim.cs` |
| `ListLabelStoriesError` | `src/Shortcut/Errors/ListLabelStoriesError.cs` |

### ListLabels

- **Auth**: `options.ApiToken`
- **Signature**: `ListLabels(ListLabelsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `slim` ← `Slim`
- **Returns**: `IReadOnlyList<Label>`
- **Error**: `ApiException<ListLabelsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListLabelsRequest` | `src/Shortcut/Requests/Labels/ListLabelsRequest.cs` |
| `Label` | `src/Shortcut/Models/Label.cs` |
| `ListLabelsError` | `src/Shortcut/Errors/ListLabelsError.cs` |

### UpdateLabel

- **Auth**: `options.ApiToken`
- **Signature**: `UpdateLabel(UpdateLabelRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `LabelPublicId`, `Body`
- **Returns**: `Label`
- **Error**: `ApiException<UpdateLabelError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateLabelRequest` | `src/Shortcut/Requests/Labels/UpdateLabelRequest.cs` |
| `UpdateLabel` | `src/Shortcut/Models/UpdateLabel.cs` |
| `Label` | `src/Shortcut/Models/Label.cs` |
| `UpdateLabelError` | `src/Shortcut/Errors/UpdateLabelError.cs` |

