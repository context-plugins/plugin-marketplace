<!-- Generated file — do not edit; regenerated with the SDK. -->

# WaterLevels — operations

Accessor: `client.WaterLevels` · Source: `src/DynamicFeed/Api/WaterLevels.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### WaterLevelsWaterLevelsGet

- **Signature**: `WaterLevelsWaterLevelsGet(WaterLevelsWaterLevelsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `state` ← `State`, `site` ← `Site`, `limit` ← `Limit`
- **Returns**: `object`
- **Error**: `ApiException<WaterLevelsWaterLevelsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `WaterLevelsWaterLevelsGetRequest` | `src/DynamicFeed/Requests/WaterLevels/WaterLevelsWaterLevelsGetRequest.cs` |
| `XApiKey` | `src/DynamicFeed/Models/AnyOf/XApiKey.cs` |
| `XRapidapiProxySecret` | `src/DynamicFeed/Models/AnyOf/XRapidapiProxySecret.cs` |
| `XRapidapiUser` | `src/DynamicFeed/Models/AnyOf/XRapidapiUser.cs` |
| `WaterLevelsWaterLevelsGetError` | `src/DynamicFeed/Errors/WaterLevelsWaterLevelsGetError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

