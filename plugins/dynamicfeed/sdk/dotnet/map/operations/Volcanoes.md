<!-- Generated file — do not edit; regenerated with the SDK. -->

# Volcanoes — operations

Accessor: `client.Volcanoes` · Source: `src/DynamicFeed/Api/Volcanoes.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### VolcanoesEpVolcanoesGet

- **Signature**: `VolcanoesEpVolcanoesGet(VolcanoesEpVolcanoesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `status` ← `Status`, `limit` ← `Limit`
- **Returns**: `object`
- **Error**: `ApiException<VolcanoesEpVolcanoesGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `VolcanoesEpVolcanoesGetRequest` | `src/DynamicFeed/Requests/Volcanoes/VolcanoesEpVolcanoesGetRequest.cs` |
| `XApiKey` | `src/DynamicFeed/Models/AnyOf/XApiKey.cs` |
| `XRapidapiProxySecret` | `src/DynamicFeed/Models/AnyOf/XRapidapiProxySecret.cs` |
| `XRapidapiUser` | `src/DynamicFeed/Models/AnyOf/XRapidapiUser.cs` |
| `VolcanoesEpVolcanoesGetError` | `src/DynamicFeed/Errors/VolcanoesEpVolcanoesGetError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

