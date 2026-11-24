<!-- Generated file — do not edit; regenerated with the SDK. -->

# Search — operations

Accessor: `client.search` · Source: `shortcut/apis/search.py` · 7 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.search.search

- **Route**: `GET /api/v3/search`
- **Auth**: `api_token`
- **Signature**: `def search(query: str, *, page_size: int | None = None, detail: DetailOrStr | None = None, next_: str | None = None, entity_types: list[EntityTypeOrStr] | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `query`
- **Params**: `query` — query · `page_size` — query · `detail` — query · `next_` — query `next` · `entity_types` — query
- **Returns (parsed)**: `SearchResults`
- **Returns (raw)**: `ApiResult[SearchResults, SearchErrorBody]`
- **Error**: `SearchErrorBody` — **Case A (typed)**
- **Error arms**: `MaxSearchResultsExceededError` [400] · `RawError` [404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `DetailOrStr` | `shortcut/models/enums/detail.py` |
| `EntityTypeOrStr` | `shortcut/models/enums/entity_type.py` |
| `SearchResults` | `shortcut/models/search_results.py` |
| `SearchErrorBody` | `shortcut/errors/search_error.py` |
| `MaxSearchResultsExceededError` | `shortcut/models/max_search_results_exceeded_error.py` |

### client.search.search_documents

- **Route**: `GET /api/v3/search/documents`
- **Auth**: `api_token`
- **Signature**: `def search_documents(title: str, *, archived: bool | None = None, created_by_me: bool | None = None, followed_by_me: bool | None = None, page_size: int | None = None, next_: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `title`
- **Params**: `title` — query · `archived` — query · `created_by_me` — query · `followed_by_me` — query · `page_size` — query · `next_` — query `next`
- **Returns (parsed)**: `DocSearchResults`
- **Returns (raw)**: `ApiResult[DocSearchResults, SearchDocumentsErrorBody]`
- **Error**: `SearchDocumentsErrorBody` — **Case A (typed)**
- **Error arms**: `MaxSearchResultsExceededError` [400] · `DisabledFeatureError` [403] · `RawError` [404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `DocSearchResults` | `shortcut/models/doc_search_results.py` |
| `SearchDocumentsErrorBody` | `shortcut/errors/search_documents_error.py` |
| `MaxSearchResultsExceededError` | `shortcut/models/max_search_results_exceeded_error.py` |
| `DisabledFeatureError` | `shortcut/models/disabled_feature_error.py` |

### client.search.search_epics

- **Route**: `GET /api/v3/search/epics`
- **Auth**: `api_token`
- **Signature**: `def search_epics(query: str, *, page_size: int | None = None, detail: DetailOrStr | None = None, next_: str | None = None, entity_types: list[EntityTypeOrStr] | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `query`
- **Params**: `query` — query · `page_size` — query · `detail` — query · `next_` — query `next` · `entity_types` — query
- **Returns (parsed)**: `EpicSearchResults`
- **Returns (raw)**: `ApiResult[EpicSearchResults, SearchEpicsErrorBody]`
- **Error**: `SearchEpicsErrorBody` — **Case A (typed)**
- **Error arms**: `MaxSearchResultsExceededError` [400] · `RawError` [404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `DetailOrStr` | `shortcut/models/enums/detail.py` |
| `EntityTypeOrStr` | `shortcut/models/enums/entity_type.py` |
| `EpicSearchResults` | `shortcut/models/epic_search_results.py` |
| `SearchEpicsErrorBody` | `shortcut/errors/search_epics_error.py` |
| `MaxSearchResultsExceededError` | `shortcut/models/max_search_results_exceeded_error.py` |

### client.search.search_iterations

- **Route**: `GET /api/v3/search/iterations`
- **Auth**: `api_token`
- **Signature**: `def search_iterations(query: str, *, page_size: int | None = None, detail: DetailOrStr | None = None, next_: str | None = None, entity_types: list[EntityTypeOrStr] | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `query`
- **Params**: `query` — query · `page_size` — query · `detail` — query · `next_` — query `next` · `entity_types` — query
- **Returns (parsed)**: `IterationSearchResults`
- **Returns (raw)**: `ApiResult[IterationSearchResults, SearchIterationsErrorBody]`
- **Error**: `SearchIterationsErrorBody` — **Case A (typed)**
- **Error arms**: `MaxSearchResultsExceededError` [400] · `RawError` [404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `DetailOrStr` | `shortcut/models/enums/detail.py` |
| `EntityTypeOrStr` | `shortcut/models/enums/entity_type.py` |
| `IterationSearchResults` | `shortcut/models/iteration_search_results.py` |
| `SearchIterationsErrorBody` | `shortcut/errors/search_iterations_error.py` |
| `MaxSearchResultsExceededError` | `shortcut/models/max_search_results_exceeded_error.py` |

### client.search.search_milestones

- **Route**: `GET /api/v3/search/milestones`
- **Auth**: `api_token`
- **Signature**: `def search_milestones(query: str, *, page_size: int | None = None, detail: DetailOrStr | None = None, next_: str | None = None, entity_types: list[EntityTypeOrStr] | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `query`
- **Params**: `query` — query · `page_size` — query · `detail` — query · `next_` — query `next` · `entity_types` — query
- **Returns (parsed)**: `ObjectiveSearchResults`
- **Returns (raw)**: `ApiResult[ObjectiveSearchResults, SearchMilestonesErrorBody]`
- **Error**: `SearchMilestonesErrorBody` — **Case A (typed)**
- **Error arms**: `MaxSearchResultsExceededError` [400] · `RawError` [404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `DetailOrStr` | `shortcut/models/enums/detail.py` |
| `EntityTypeOrStr` | `shortcut/models/enums/entity_type.py` |
| `ObjectiveSearchResults` | `shortcut/models/objective_search_results.py` |
| `SearchMilestonesErrorBody` | `shortcut/errors/search_milestones_error.py` |
| `MaxSearchResultsExceededError` | `shortcut/models/max_search_results_exceeded_error.py` |

### client.search.search_objectives

- **Route**: `GET /api/v3/search/objectives`
- **Auth**: `api_token`
- **Signature**: `def search_objectives(query: str, *, page_size: int | None = None, detail: DetailOrStr | None = None, next_: str | None = None, entity_types: list[EntityTypeOrStr] | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `query`
- **Params**: `query` — query · `page_size` — query · `detail` — query · `next_` — query `next` · `entity_types` — query
- **Returns (parsed)**: `ObjectiveSearchResults`
- **Returns (raw)**: `ApiResult[ObjectiveSearchResults, SearchObjectivesErrorBody]`
- **Error**: `SearchObjectivesErrorBody` — **Case A (typed)**
- **Error arms**: `MaxSearchResultsExceededError` [400] · `RawError` [404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `DetailOrStr` | `shortcut/models/enums/detail.py` |
| `EntityTypeOrStr` | `shortcut/models/enums/entity_type.py` |
| `ObjectiveSearchResults` | `shortcut/models/objective_search_results.py` |
| `SearchObjectivesErrorBody` | `shortcut/errors/search_objectives_error.py` |
| `MaxSearchResultsExceededError` | `shortcut/models/max_search_results_exceeded_error.py` |

### client.search.search_stories

- **Route**: `GET /api/v3/search/stories`
- **Auth**: `api_token`
- **Signature**: `def search_stories(query: str, *, page_size: int | None = None, detail: DetailOrStr | None = None, next_: str | None = None, entity_types: list[EntityTypeOrStr] | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `query`
- **Params**: `query` — query · `page_size` — query · `detail` — query · `next_` — query `next` · `entity_types` — query
- **Returns (parsed)**: `StorySearchResults`
- **Returns (raw)**: `ApiResult[StorySearchResults, SearchStoriesErrorBody]`
- **Error**: `SearchStoriesErrorBody` — **Case A (typed)**
- **Error arms**: `MaxSearchResultsExceededError` [400] · `RawError` [404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `DetailOrStr` | `shortcut/models/enums/detail.py` |
| `EntityTypeOrStr` | `shortcut/models/enums/entity_type.py` |
| `StorySearchResults` | `shortcut/models/story_search_results.py` |
| `SearchStoriesErrorBody` | `shortcut/errors/search_stories_error.py` |
| `MaxSearchResultsExceededError` | `shortcut/models/max_search_results_exceeded_error.py` |

