<!-- Generated file — do not edit; regenerated with the SDK. -->

# Stories — operations

Accessor: `client.Stories` · Source: `src/AlphaAi/Api/Stories.cs` · 4 operations

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
| `GetApiStoriesRequest` | `src/AlphaAi/Requests/Stories/GetApiStoriesRequest.cs` |
| `StoriesPage` | `src/AlphaAi/Models/StoriesPage.cs` |
| `GetApiStoriesError` | `src/AlphaAi/Errors/GetApiStoriesError.cs` |
| `Error` | `src/AlphaAi/Models/Error.cs` |

### GetApiStoriesByStoryId

- **Auth**: `options.ApiKey`
- **Signature**: `GetApiStoriesByStoryId(GetApiStoriesByStoryIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `StoryId`
- **Returns**: `StoryLookup`
- **Error**: `ApiException<GetApiStoriesByStoryIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 429] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiStoriesByStoryIdRequest` | `src/AlphaAi/Requests/Stories/GetApiStoriesByStoryIdRequest.cs` |
| `StoryLookup` | `src/AlphaAi/Models/StoryLookup.cs` |
| `GetApiStoriesByStoryIdError` | `src/AlphaAi/Errors/GetApiStoriesByStoryIdError.cs` |
| `Error` | `src/AlphaAi/Models/Error.cs` |

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
| `GetApiStoriesByStoryIdMaterialsRequest` | `src/AlphaAi/Requests/Stories/GetApiStoriesByStoryIdMaterialsRequest.cs` |
| `StoryMaterials` | `src/AlphaAi/Models/StoryMaterials.cs` |
| `GetApiStoriesByStoryIdMaterialsError` | `src/AlphaAi/Errors/GetApiStoriesByStoryIdMaterialsError.cs` |
| `Error` | `src/AlphaAi/Models/Error.cs` |

### GetApiStoriesTop

- **Auth**: `options.ApiKey`
- **Signature**: `GetApiStoriesTop(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `TopStories`
- **Error**: `ApiException<GetApiStoriesTopError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 429] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TopStories` | `src/AlphaAi/Models/TopStories.cs` |
| `GetApiStoriesTopError` | `src/AlphaAi/Errors/GetApiStoriesTopError.cs` |
| `Error` | `src/AlphaAi/Models/Error.cs` |

