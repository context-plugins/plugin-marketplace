<!-- Generated file — do not edit; regenerated with the SDK. -->

# Search — operations

Accessor: `client.Search` · Source: `src/Shortcut/Api/Search.cs` · 7 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### SearchDocuments

- **Auth**: `options.ApiToken`
- **Signature**: `SearchDocuments(SearchDocumentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Title`
- **Query params (wire ← C#)**: `title` ← `Title`, `archived` ← `Archived`, `created_by_me` ← `CreatedByMe`, `followed_by_me` ← `FollowedByMe`, `page_size` ← `PageSize`, `next` ← `Next`
- **Returns**: `DocSearchResults`
- **Error**: `ApiException<SearchDocumentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetMaxSearchResultsExceededError([NotNullWhen(true)] out MaxSearchResultsExceededError? value)` [400] · `TryGetDisabledFeatureError([NotNullWhen(true)] out DisabledFeatureError? value)` [403] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SearchDocumentsRequest` | `src/Shortcut/Requests/Search/SearchDocumentsRequest.cs` |
| `DocSearchResults` | `src/Shortcut/Models/DocSearchResults.cs` |
| `SearchDocumentsError` | `src/Shortcut/Errors/SearchDocumentsError.cs` |
| `MaxSearchResultsExceededError` | `src/Shortcut/Models/MaxSearchResultsExceededError.cs` |
| `DisabledFeatureError` | `src/Shortcut/Models/DisabledFeatureError.cs` |

### SearchEpics

- **Auth**: `options.ApiToken`
- **Signature**: `SearchEpics(SearchEpicsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Query`
- **Query params (wire ← C#)**: `query` ← `Query`, `page_size` ← `PageSize`, `detail` ← `Detail`, `next` ← `Next`, `entity_types` ← `EntityTypes`
- **Returns**: `EpicSearchResults`
- **Error**: `ApiException<SearchEpicsError>` — **Case A (typed)**
- **Error accessors**: `TryGetMaxSearchResultsExceededError([NotNullWhen(true)] out MaxSearchResultsExceededError? value)` [400] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SearchEpicsRequest` | `src/Shortcut/Requests/Search/SearchEpicsRequest.cs` |
| `Detail` | `src/Shortcut/Models/Enums/Detail.cs` |
| `EntityType` | `src/Shortcut/Models/Enums/EntityType.cs` |
| `EpicSearchResults` | `src/Shortcut/Models/EpicSearchResults.cs` |
| `SearchEpicsError` | `src/Shortcut/Errors/SearchEpicsError.cs` |
| `MaxSearchResultsExceededError` | `src/Shortcut/Models/MaxSearchResultsExceededError.cs` |

### SearchInvoke

- **Auth**: `options.ApiToken`
- **Signature**: `SearchInvoke(SearchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Query`
- **Query params (wire ← C#)**: `query` ← `Query`, `page_size` ← `PageSize`, `detail` ← `Detail`, `next` ← `Next`, `entity_types` ← `EntityTypes`
- **Returns**: `SearchResults`
- **Error**: `ApiException<SearchError>` — **Case A (typed)**
- **Error accessors**: `TryGetMaxSearchResultsExceededError([NotNullWhen(true)] out MaxSearchResultsExceededError? value)` [400] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SearchRequest` | `src/Shortcut/Requests/Search/SearchRequest.cs` |
| `Detail` | `src/Shortcut/Models/Enums/Detail.cs` |
| `EntityType` | `src/Shortcut/Models/Enums/EntityType.cs` |
| `SearchResults` | `src/Shortcut/Models/SearchResults.cs` |
| `SearchError` | `src/Shortcut/Errors/SearchError.cs` |
| `MaxSearchResultsExceededError` | `src/Shortcut/Models/MaxSearchResultsExceededError.cs` |

### SearchIterations

- **Auth**: `options.ApiToken`
- **Signature**: `SearchIterations(SearchIterationsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Query`
- **Query params (wire ← C#)**: `query` ← `Query`, `page_size` ← `PageSize`, `detail` ← `Detail`, `next` ← `Next`, `entity_types` ← `EntityTypes`
- **Returns**: `IterationSearchResults`
- **Error**: `ApiException<SearchIterationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetMaxSearchResultsExceededError([NotNullWhen(true)] out MaxSearchResultsExceededError? value)` [400] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SearchIterationsRequest` | `src/Shortcut/Requests/Search/SearchIterationsRequest.cs` |
| `Detail` | `src/Shortcut/Models/Enums/Detail.cs` |
| `EntityType` | `src/Shortcut/Models/Enums/EntityType.cs` |
| `IterationSearchResults` | `src/Shortcut/Models/IterationSearchResults.cs` |
| `SearchIterationsError` | `src/Shortcut/Errors/SearchIterationsError.cs` |
| `MaxSearchResultsExceededError` | `src/Shortcut/Models/MaxSearchResultsExceededError.cs` |

### SearchMilestones

- **Auth**: `options.ApiToken`
- **Signature**: `SearchMilestones(SearchMilestonesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Query`
- **Query params (wire ← C#)**: `query` ← `Query`, `page_size` ← `PageSize`, `detail` ← `Detail`, `next` ← `Next`, `entity_types` ← `EntityTypes`
- **Returns**: `ObjectiveSearchResults`
- **Error**: `ApiException<SearchMilestonesError>` — **Case A (typed)**
- **Error accessors**: `TryGetMaxSearchResultsExceededError([NotNullWhen(true)] out MaxSearchResultsExceededError? value)` [400] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SearchMilestonesRequest` | `src/Shortcut/Requests/Search/SearchMilestonesRequest.cs` |
| `Detail` | `src/Shortcut/Models/Enums/Detail.cs` |
| `EntityType` | `src/Shortcut/Models/Enums/EntityType.cs` |
| `ObjectiveSearchResults` | `src/Shortcut/Models/ObjectiveSearchResults.cs` |
| `SearchMilestonesError` | `src/Shortcut/Errors/SearchMilestonesError.cs` |
| `MaxSearchResultsExceededError` | `src/Shortcut/Models/MaxSearchResultsExceededError.cs` |

### SearchObjectives

- **Auth**: `options.ApiToken`
- **Signature**: `SearchObjectives(SearchObjectivesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Query`
- **Query params (wire ← C#)**: `query` ← `Query`, `page_size` ← `PageSize`, `detail` ← `Detail`, `next` ← `Next`, `entity_types` ← `EntityTypes`
- **Returns**: `ObjectiveSearchResults`
- **Error**: `ApiException<SearchObjectivesError>` — **Case A (typed)**
- **Error accessors**: `TryGetMaxSearchResultsExceededError([NotNullWhen(true)] out MaxSearchResultsExceededError? value)` [400] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SearchObjectivesRequest` | `src/Shortcut/Requests/Search/SearchObjectivesRequest.cs` |
| `Detail` | `src/Shortcut/Models/Enums/Detail.cs` |
| `EntityType` | `src/Shortcut/Models/Enums/EntityType.cs` |
| `ObjectiveSearchResults` | `src/Shortcut/Models/ObjectiveSearchResults.cs` |
| `SearchObjectivesError` | `src/Shortcut/Errors/SearchObjectivesError.cs` |
| `MaxSearchResultsExceededError` | `src/Shortcut/Models/MaxSearchResultsExceededError.cs` |

### SearchStories

- **Auth**: `options.ApiToken`
- **Signature**: `SearchStories(SearchStoriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Query`
- **Query params (wire ← C#)**: `query` ← `Query`, `page_size` ← `PageSize`, `detail` ← `Detail`, `next` ← `Next`, `entity_types` ← `EntityTypes`
- **Returns**: `StorySearchResults`
- **Error**: `ApiException<SearchStoriesError>` — **Case A (typed)**
- **Error accessors**: `TryGetMaxSearchResultsExceededError([NotNullWhen(true)] out MaxSearchResultsExceededError? value)` [400] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SearchStoriesRequest` | `src/Shortcut/Requests/Search/SearchStoriesRequest.cs` |
| `Detail` | `src/Shortcut/Models/Enums/Detail.cs` |
| `EntityType` | `src/Shortcut/Models/Enums/EntityType.cs` |
| `StorySearchResults` | `src/Shortcut/Models/StorySearchResults.cs` |
| `SearchStoriesError` | `src/Shortcut/Errors/SearchStoriesError.cs` |
| `MaxSearchResultsExceededError` | `src/Shortcut/Models/MaxSearchResultsExceededError.cs` |

