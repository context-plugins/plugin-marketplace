<!-- Generated file — do not edit; regenerated with the SDK. -->

# News — operations

Accessor: `client.News` · Source: `src/ApiVerve/Api/News.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### NewsInvoke

- **Auth**: `options.ApiKey`
- **Signature**: `NewsInvoke(NewsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Category`
- **Query params (wire ← C#)**: `category` ← `Category`, `limit` ← `Limit`
- **Returns**: `V1NewsResponse`
- **Error**: `ApiException<NewsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `NewsRequest` | `src/ApiVerve/Requests/News/NewsRequest.cs` |
| `V1NewsResponse` | `src/ApiVerve/Models/V1NewsResponse.cs` |
| `NewsError` | `src/ApiVerve/Errors/NewsError.cs` |

