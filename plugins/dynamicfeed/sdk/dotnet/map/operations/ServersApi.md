<!-- Generated file — do not edit; regenerated with the SDK. -->

# ServersApi — operations

Accessor: `client.ServersApi` · Source: `src/DynamicFeed/Api/ServersApi.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ServersServersGet

- **Signature**: `ServersServersGet(ServersServersGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `q` ← `Q`, `has_remote` ← `HasRemote`, `min_stars` ← `MinStars`, `limit` ← `Limit`
- **Returns**: `object`
- **Error**: `ApiException<ServersServersGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ServersServersGetRequest` | `src/DynamicFeed/Requests/ServersApi/ServersServersGetRequest.cs` |
| `Q` | `src/DynamicFeed/Models/AnyOf/Q.cs` |
| `HasRemote` | `src/DynamicFeed/Models/AnyOf/HasRemote.cs` |
| `MinStars` | `src/DynamicFeed/Models/AnyOf/MinStars.cs` |
| `XApiKey` | `src/DynamicFeed/Models/AnyOf/XApiKey.cs` |
| `XRapidapiProxySecret` | `src/DynamicFeed/Models/AnyOf/XRapidapiProxySecret.cs` |
| `XRapidapiUser` | `src/DynamicFeed/Models/AnyOf/XRapidapiUser.cs` |
| `ServersServersGetError` | `src/DynamicFeed/Errors/ServersServersGetError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

