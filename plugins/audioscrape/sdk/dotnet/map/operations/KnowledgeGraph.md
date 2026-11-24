<!-- Generated file — do not edit; regenerated with the SDK. -->

# KnowledgeGraph — operations

Accessor: `client.KnowledgeGraph` · Source: `src/Audioscrape/Api/KnowledgeGraph.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetEntity

- **Auth**: `options.BearerAuth`
- **Signature**: `GetEntity(GetEntityRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `EntitySlug`
- **Query params (wire ← C#)**: `dataset_id` ← `DatasetId`
- **Returns**: `EntityDetail`
- **Error**: `ApiException<GetEntityError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorBody([NotNullWhen(true)] out ApiErrorBody? value)` [401, 402, 403, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetEntityRequest` | `src/Audioscrape/Requests/KnowledgeGraph/GetEntityRequest.cs` |
| `EntityDetail` | `src/Audioscrape/Models/EntityDetail.cs` |
| `GetEntityError` | `src/Audioscrape/Errors/GetEntityError.cs` |
| `ApiErrorBody` | `src/Audioscrape/Models/ApiErrorBody.cs` |

### GetRealTrending

- **Auth**: `options.BearerAuth`
- **Signature**: `GetRealTrending(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `TrendingResponse`
- **Error**: `ApiException<GetRealTrendingError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorBody([NotNullWhen(true)] out ApiErrorBody? value)` [401, 402, 403, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TrendingResponse` | `src/Audioscrape/Models/TrendingResponse.cs` |
| `GetRealTrendingError` | `src/Audioscrape/Errors/GetRealTrendingError.cs` |
| `ApiErrorBody` | `src/Audioscrape/Models/ApiErrorBody.cs` |

### SearchEntities

- **Auth**: `options.BearerAuth`
- **Signature**: `SearchEntities(SearchEntitiesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `q` ← `Q`, `type` ← `Type`, `limit` ← `Limit`, `dataset_id` ← `DatasetId`
- **Returns**: `EntitySearchResponse`
- **Error**: `ApiException<SearchEntitiesError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorBody([NotNullWhen(true)] out ApiErrorBody? value)` [401, 402, 403, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SearchEntitiesRequest` | `src/Audioscrape/Requests/KnowledgeGraph/SearchEntitiesRequest.cs` |
| `EntitySearchResponse` | `src/Audioscrape/Models/EntitySearchResponse.cs` |
| `SearchEntitiesError` | `src/Audioscrape/Errors/SearchEntitiesError.cs` |
| `ApiErrorBody` | `src/Audioscrape/Models/ApiErrorBody.cs` |

