<!-- Generated file — do not edit; regenerated with the SDK. -->

# WorldPulse — operations

Accessor: `client.WorldPulse` · Source: `src/DynamicFeed/Api/WorldPulse.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### WorldPulseEpWorldPulseGet

- **Signature**: `WorldPulseEpWorldPulseGet(WorldPulseEpWorldPulseGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `object`
- **Error**: `ApiException<WorldPulseEpWorldPulseGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `WorldPulseEpWorldPulseGetRequest` | `src/DynamicFeed/Requests/WorldPulse/WorldPulseEpWorldPulseGetRequest.cs` |
| `XApiKey` | `src/DynamicFeed/Models/AnyOf/XApiKey.cs` |
| `XRapidapiProxySecret` | `src/DynamicFeed/Models/AnyOf/XRapidapiProxySecret.cs` |
| `XRapidapiUser` | `src/DynamicFeed/Models/AnyOf/XRapidapiUser.cs` |
| `WorldPulseEpWorldPulseGetError` | `src/DynamicFeed/Errors/WorldPulseEpWorldPulseGetError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

