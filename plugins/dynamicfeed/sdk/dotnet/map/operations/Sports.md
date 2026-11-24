<!-- Generated file — do not edit; regenerated with the SDK. -->

# Sports — operations

Accessor: `client.Sports` · Source: `src/DynamicFeed/Api/Sports.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### SportsSportsGet

- **Signature**: `SportsSportsGet(SportsSportsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `topic` ← `Topic`, `days` ← `Days`, `lang` ← `Lang`
- **Returns**: `object`
- **Error**: `ApiException<SportsSportsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SportsSportsGetRequest` | `src/DynamicFeed/Requests/Sports/SportsSportsGetRequest.cs` |
| `XApiKey` | `src/DynamicFeed/Models/AnyOf/XApiKey.cs` |
| `XRapidapiProxySecret` | `src/DynamicFeed/Models/AnyOf/XRapidapiProxySecret.cs` |
| `XRapidapiUser` | `src/DynamicFeed/Models/AnyOf/XRapidapiUser.cs` |
| `SportsSportsGetError` | `src/DynamicFeed/Errors/SportsSportsGetError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

### WorldcupRouteWorldcupGet

- **Signature**: `WorldcupRouteWorldcupGet(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `object`
- **Error**: `ApiException<RawError>` — **Case B**

