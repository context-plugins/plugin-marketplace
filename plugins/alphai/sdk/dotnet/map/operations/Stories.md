<!-- Generated file — do not edit; regenerated with the SDK. -->

# Stories — operations

Accessor: `client.Stories` · Source: `src/AlphAi/Api/Stories.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetApiStories

- **Auth**: `options.ApiKey`
- **Signature**: `GetApiStories(GetApiStoriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `cursor` ← `Cursor`, `page_size` ← `PageSize`
- **Returns**: `StoriesPage`
- **Error**: `ApiException<GetApiStoriesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404] · `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiStoriesRequest` | `src/AlphAi/Requests/Stories/GetApiStoriesRequest.cs` |
| `StoriesPage` | `src/AlphAi/Models/StoriesPage.cs` |
| `GetApiStoriesError` | `src/AlphAi/Errors/GetApiStoriesError.cs` |
| `Error` | `src/AlphAi/Models/Error.cs` |

### GetApiStoriesByStoryId

- **Auth**: `options.ApiKey`
- **Signature**: `GetApiStoriesByStoryId(GetApiStoriesByStoryIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `StoryId`
- **Returns**: `StoryLookup`
- **Error**: `ApiException<GetApiStoriesByStoryIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 429] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiStoriesByStoryIdRequest` | `src/AlphAi/Requests/Stories/GetApiStoriesByStoryIdRequest.cs` |
| `StoryLookup` | `src/AlphAi/Models/StoryLookup.cs` |
| `GetApiStoriesByStoryIdError` | `src/AlphAi/Errors/GetApiStoriesByStoryIdError.cs` |
| `Error` | `src/AlphAi/Models/Error.cs` |

### GetApiStoriesByStoryIdMaterials

- **Auth**: `options.ApiKey`
- **Signature**: `GetApiStoriesByStoryIdMaterials(GetApiStoriesByStoryIdMaterialsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `StoryId`
- **Query params (wire ← C#)**: `cursor` ← `Cursor`, `page_size` ← `PageSize`
- **Returns**: `StoryMaterials`
- **Error**: `ApiException<GetApiStoriesByStoryIdMaterialsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404] · `TryGetError([NotNullWhen(true)] out Error? value)` [401, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiStoriesByStoryIdMaterialsRequest` | `src/AlphAi/Requests/Stories/GetApiStoriesByStoryIdMaterialsRequest.cs` |
| `StoryMaterials` | `src/AlphAi/Models/StoryMaterials.cs` |
| `GetApiStoriesByStoryIdMaterialsError` | `src/AlphAi/Errors/GetApiStoriesByStoryIdMaterialsError.cs` |
| `Error` | `src/AlphAi/Models/Error.cs` |

### GetApiStoriesTop

- **Auth**: `options.ApiKey`
- **Signature**: `GetApiStoriesTop(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `TopStories`
- **Error**: `ApiException<GetApiStoriesTopError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 429] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TopStories` | `src/AlphAi/Models/TopStories.cs` |
| `GetApiStoriesTopError` | `src/AlphAi/Errors/GetApiStoriesTopError.cs` |
| `Error` | `src/AlphAi/Models/Error.cs` |

