<!-- Generated file — do not edit; regenerated with the SDK. -->

# Movers — operations

Accessor: `client.Movers` · Source: `src/DynamicFeed/Api/Movers.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### MoversMoversGet

- **Signature**: `MoversMoversGet(MoversMoversGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `direction` ← `Direction`, `asset_class` ← `AssetClass`, `limit` ← `Limit`
- **Returns**: `object`
- **Error**: `ApiException<MoversMoversGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MoversMoversGetRequest` | `src/DynamicFeed/Requests/Movers/MoversMoversGetRequest.cs` |
| `AssetClass` | `src/DynamicFeed/Models/AnyOf/AssetClass.cs` |
| `XApiKey` | `src/DynamicFeed/Models/AnyOf/XApiKey.cs` |
| `XRapidapiProxySecret` | `src/DynamicFeed/Models/AnyOf/XRapidapiProxySecret.cs` |
| `XRapidapiUser` | `src/DynamicFeed/Models/AnyOf/XRapidapiUser.cs` |
| `MoversMoversGetError` | `src/DynamicFeed/Errors/MoversMoversGetError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

