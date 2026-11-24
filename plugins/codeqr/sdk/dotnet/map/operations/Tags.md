<!-- Generated file — do not edit; regenerated with the SDK. -->

# Tags — operations

Accessor: `client.Tags` · Source: `src/CodeQr/Api/Tags.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateTag

- **Auth**: `options.Token`
- **Signature**: `CreateTag(CreateTagRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `Tag`
- **Error**: `ApiException<CreateTagError>` — **Case A (typed)**
- **Error accessors**: `TryGetM4001([NotNullWhen(true)] out M4001? value)` [400, 401, 403, 404, 409, 410, 422, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateTagRequest` | `src/CodeQr/Requests/Tags/CreateTagRequest.cs` |
| `TagsRequest` | `src/CodeQr/Models/TagsRequest.cs` |
| `Tag` | `src/CodeQr/Models/Tag.cs` |
| `CreateTagError` | `src/CodeQr/Errors/CreateTagError.cs` |
| `M4001` | `src/CodeQr/Models/M4001.cs` |

### DeleteTag

- **Auth**: `options.Token`
- **Signature**: `DeleteTag(DeleteTagRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `TagsResponse`
- **Error**: `ApiException<DeleteTagError>` — **Case A (typed)**
- **Error accessors**: `TryGetM4001([NotNullWhen(true)] out M4001? value)` [400, 401, 403, 404, 409, 410, 422, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteTagRequest` | `src/CodeQr/Requests/Tags/DeleteTagRequest.cs` |
| `TagsResponse` | `src/CodeQr/Models/TagsResponse.cs` |
| `DeleteTagError` | `src/CodeQr/Errors/DeleteTagError.cs` |
| `M4001` | `src/CodeQr/Models/M4001.cs` |

### GetTags

- **Auth**: `options.Token`
- **Signature**: `GetTags(GetTagsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `sortBy` ← `SortBy`, `sortOrder` ← `SortOrder`, `search` ← `Search`, `ids` ← `Ids`, `page` ← `Page`, `pageSize` ← `PageSize`
- **Returns**: `IReadOnlyList<Tag>`
- **Error**: `ApiException<GetTagsError>` — **Case A (typed)**
- **Error accessors**: `TryGetM4001([NotNullWhen(true)] out M4001? value)` [400, 401, 403, 404, 409, 410, 422, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetTagsRequest` | `src/CodeQr/Requests/Tags/GetTagsRequest.cs` |
| `SortByCodeqrIoTagsApi` | `src/CodeQr/Models/Enums/SortByCodeqrIoTagsApi.cs` |
| `SortOrder` | `src/CodeQr/Models/Enums/SortOrder.cs` |
| `Ids` | `src/CodeQr/Models/AnyOf/Ids.cs` |
| `Tag` | `src/CodeQr/Models/Tag.cs` |
| `GetTagsError` | `src/CodeQr/Errors/GetTagsError.cs` |
| `M4001` | `src/CodeQr/Models/M4001.cs` |

### UpdateTag

- **Auth**: `options.Token`
- **Signature**: `UpdateTag(UpdateTagRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `Tag`
- **Error**: `ApiException<UpdateTagError>` — **Case A (typed)**
- **Error accessors**: `TryGetM4001([NotNullWhen(true)] out M4001? value)` [400, 401, 403, 404, 409, 410, 422, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateTagRequest` | `src/CodeQr/Requests/Tags/UpdateTagRequest.cs` |
| `TagsRequest1` | `src/CodeQr/Models/TagsRequest1.cs` |
| `Tag` | `src/CodeQr/Models/Tag.cs` |
| `UpdateTagError` | `src/CodeQr/Errors/UpdateTagError.cs` |
| `M4001` | `src/CodeQr/Models/M4001.cs` |

