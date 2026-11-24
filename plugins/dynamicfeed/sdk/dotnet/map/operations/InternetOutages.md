<!-- Generated file — do not edit; regenerated with the SDK. -->

# InternetOutages — operations

Accessor: `client.InternetOutages` · Source: `src/DynamicFeed/Api/InternetOutages.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### InternetOutagesInternetOutagesGet

- **Signature**: `InternetOutagesInternetOutagesGet(InternetOutagesInternetOutagesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `resource` ← `Resource`
- **Returns**: `object`
- **Error**: `ApiException<InternetOutagesInternetOutagesGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `InternetOutagesInternetOutagesGetRequest` | `src/DynamicFeed/Requests/InternetOutages/InternetOutagesInternetOutagesGetRequest.cs` |
| `XApiKey` | `src/DynamicFeed/Models/AnyOf/XApiKey.cs` |
| `XRapidapiProxySecret` | `src/DynamicFeed/Models/AnyOf/XRapidapiProxySecret.cs` |
| `XRapidapiUser` | `src/DynamicFeed/Models/AnyOf/XRapidapiUser.cs` |
| `InternetOutagesInternetOutagesGetError` | `src/DynamicFeed/Errors/InternetOutagesInternetOutagesGetError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

