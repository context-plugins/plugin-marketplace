<!-- Generated file — do not edit; regenerated with the SDK. -->

# Tides — operations

Accessor: `client.Tides` · Source: `src/DynamicFeed/Api/Tides.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### TidesEpTidesGet

- **Signature**: `TidesEpTidesGet(TidesEpTidesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `station` ← `Station`, `location` ← `Location`, `units` ← `Units`, `limit` ← `Limit`
- **Returns**: `object`
- **Error**: `ApiException<TidesEpTidesGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TidesEpTidesGetRequest` | `src/DynamicFeed/Requests/Tides/TidesEpTidesGetRequest.cs` |
| `XApiKey` | `src/DynamicFeed/Models/AnyOf/XApiKey.cs` |
| `XRapidapiProxySecret` | `src/DynamicFeed/Models/AnyOf/XRapidapiProxySecret.cs` |
| `XRapidapiUser` | `src/DynamicFeed/Models/AnyOf/XRapidapiUser.cs` |
| `TidesEpTidesGetError` | `src/DynamicFeed/Errors/TidesEpTidesGetError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

