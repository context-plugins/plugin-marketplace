<!-- Generated file — do not edit; regenerated with the SDK. -->

# StoryLinks — operations

Accessor: `client.StoryLinks` · Source: `src/Shortcut/Api/StoryLinks.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateStoryLink

- **Auth**: `options.ApiToken`
- **Signature**: `CreateStoryLink(CreateStoryLinkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `StoryLink`
- **Error**: `ApiException<CreateStoryLinkError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateStoryLinkRequest` | `src/Shortcut/Requests/StoryLinks/CreateStoryLinkRequest.cs` |
| `CreateStoryLink` | `src/Shortcut/Models/CreateStoryLink.cs` |
| `StoryLink` | `src/Shortcut/Models/StoryLink.cs` |
| `CreateStoryLinkError` | `src/Shortcut/Errors/CreateStoryLinkError.cs` |

### DeleteStoryLink

- **Auth**: `options.ApiToken`
- **Signature**: `DeleteStoryLink(DeleteStoryLinkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `StoryLinkPublicId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteStoryLinkError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteStoryLinkRequest` | `src/Shortcut/Requests/StoryLinks/DeleteStoryLinkRequest.cs` |
| `DeleteStoryLinkError` | `src/Shortcut/Errors/DeleteStoryLinkError.cs` |

### GetStoryLink

- **Auth**: `options.ApiToken`
- **Signature**: `GetStoryLink(GetStoryLinkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `StoryLinkPublicId`
- **Returns**: `StoryLink`
- **Error**: `ApiException<GetStoryLinkError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetStoryLinkRequest` | `src/Shortcut/Requests/StoryLinks/GetStoryLinkRequest.cs` |
| `StoryLink` | `src/Shortcut/Models/StoryLink.cs` |
| `GetStoryLinkError` | `src/Shortcut/Errors/GetStoryLinkError.cs` |

### UpdateStoryLink

- **Auth**: `options.ApiToken`
- **Signature**: `UpdateStoryLink(UpdateStoryLinkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `StoryLinkPublicId`, `Body`
- **Returns**: `StoryLink`
- **Error**: `ApiException<UpdateStoryLinkError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateStoryLinkRequest` | `src/Shortcut/Requests/StoryLinks/UpdateStoryLinkRequest.cs` |
| `UpdateStoryLink` | `src/Shortcut/Models/UpdateStoryLink.cs` |
| `StoryLink` | `src/Shortcut/Models/StoryLink.cs` |
| `UpdateStoryLinkError` | `src/Shortcut/Errors/UpdateStoryLinkError.cs` |

