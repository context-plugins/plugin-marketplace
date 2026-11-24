<!-- Generated file — do not edit; regenerated with the SDK. -->

# GlobalDisasters — operations

Accessor: `client.GlobalDisasters` · Source: `src/DynamicFeed/Api/GlobalDisasters.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GlobalDisastersEpGlobalDisastersGet

- **Signature**: `GlobalDisastersEpGlobalDisastersGet(GlobalDisastersEpGlobalDisastersGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `alert_level` ← `AlertLevel`, `event_type` ← `EventType`, `country` ← `Country`, `days` ← `Days`, `limit` ← `Limit`
- **Returns**: `object`
- **Error**: `ApiException<GlobalDisastersEpGlobalDisastersGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GlobalDisastersEpGlobalDisastersGetRequest` | `src/DynamicFeed/Requests/GlobalDisasters/GlobalDisastersEpGlobalDisastersGetRequest.cs` |
| `EventType` | `src/DynamicFeed/Models/AnyOf/EventType.cs` |
| `Country` | `src/DynamicFeed/Models/AnyOf/Country.cs` |
| `XApiKey` | `src/DynamicFeed/Models/AnyOf/XApiKey.cs` |
| `XRapidapiProxySecret` | `src/DynamicFeed/Models/AnyOf/XRapidapiProxySecret.cs` |
| `XRapidapiUser` | `src/DynamicFeed/Models/AnyOf/XRapidapiUser.cs` |
| `GlobalDisastersEpGlobalDisastersGetError` | `src/DynamicFeed/Errors/GlobalDisastersEpGlobalDisastersGetError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

