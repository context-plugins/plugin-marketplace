<!-- Generated file — do not edit; regenerated with the SDK. -->

# News — operations

Accessor: `client.News` · Source: `src/DynamicFeed/Api/News.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### NewsNewsGet

- **Signature**: `NewsNewsGet(NewsNewsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `q` ← `Q`, `source` ← `Source`, `limit` ← `Limit`
- **Returns**: `object`
- **Error**: `ApiException<NewsNewsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `NewsNewsGetRequest` | `src/DynamicFeed/Requests/News/NewsNewsGetRequest.cs` |
| `Q` | `src/DynamicFeed/Models/AnyOf/Q.cs` |
| `Source` | `src/DynamicFeed/Models/AnyOf/Source.cs` |
| `XApiKey` | `src/DynamicFeed/Models/AnyOf/XApiKey.cs` |
| `XRapidapiProxySecret` | `src/DynamicFeed/Models/AnyOf/XRapidapiProxySecret.cs` |
| `XRapidapiUser` | `src/DynamicFeed/Models/AnyOf/XRapidapiUser.cs` |
| `NewsNewsGetError` | `src/DynamicFeed/Errors/NewsNewsGetError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

