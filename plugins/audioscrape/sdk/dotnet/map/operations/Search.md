<!-- Generated file — do not edit; regenerated with the SDK. -->

# Search — operations

Accessor: `client.Search` · Source: `src/Audioscrape/Api/Search.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### SearchApiV1

- **Auth**: `options.BearerAuth`
- **Signature**: `SearchApiV1(SearchApiV1Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `SearchResponse`
- **Error**: `ApiException<SearchApiV1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorBody([NotNullWhen(true)] out ApiErrorBody? value)` [400, 401, 402, 403, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SearchApiV1Request` | `src/Audioscrape/Requests/Search/SearchApiV1Request.cs` |
| `SearchRequest` | `src/Audioscrape/Models/SearchRequest.cs` |
| `SearchResponse` | `src/Audioscrape/Models/SearchResponse.cs` |
| `SearchApiV1Error` | `src/Audioscrape/Errors/SearchApiV1Error.cs` |
| `ApiErrorBody` | `src/Audioscrape/Models/ApiErrorBody.cs` |

