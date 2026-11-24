<!-- Generated file — do not edit; regenerated with the SDK. -->

# Search — operations

Accessor: `client.Search` · Source: `src/RelmCrm/Api/Search.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### SearchInvoke

- **Auth**: `options.BearerAuth` OR `options.Oauth2`
- **Signature**: `SearchInvoke(SearchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Q`
- **Query params (wire ← C#)**: `q` ← `Q`, `limit` ← `Limit`
- **Returns**: `SearchResult`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `SearchRequest` | `src/RelmCrm/Requests/Search/SearchRequest.cs` |
| `SearchResult` | `src/RelmCrm/Models/SearchResult.cs` |

