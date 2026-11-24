<!-- Generated file — do not edit; regenerated with the SDK. -->

# Wildfires — operations

Accessor: `client.Wildfires` · Source: `src/DynamicFeed/Api/Wildfires.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### WildfiresWildfiresGet

- **Signature**: `WildfiresWildfiresGet(WildfiresWildfiresGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `state` ← `State`, `only_uncontained` ← `OnlyUncontained`, `min_acres` ← `MinAcres`, `limit` ← `Limit`
- **Returns**: `object`
- **Error**: `ApiException<WildfiresWildfiresGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `WildfiresWildfiresGetRequest` | `src/DynamicFeed/Requests/Wildfires/WildfiresWildfiresGetRequest.cs` |
| `State` | `src/DynamicFeed/Models/AnyOf/State.cs` |
| `XApiKey` | `src/DynamicFeed/Models/AnyOf/XApiKey.cs` |
| `XRapidapiProxySecret` | `src/DynamicFeed/Models/AnyOf/XRapidapiProxySecret.cs` |
| `XRapidapiUser` | `src/DynamicFeed/Models/AnyOf/XRapidapiUser.cs` |
| `WildfiresWildfiresGetError` | `src/DynamicFeed/Errors/WildfiresWildfiresGetError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

