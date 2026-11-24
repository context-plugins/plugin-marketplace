<!-- Generated file — do not edit; regenerated with the SDK. -->

# RealityCheck — operations

Accessor: `client.RealityCheck` · Source: `src/DynamicFeed/Api/RealityCheck.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### RealityCheckEpRealityCheckGet

- **Signature**: `RealityCheckEpRealityCheckGet(RealityCheckEpRealityCheckGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `claim` ← `Claim`
- **Returns**: `object`
- **Error**: `ApiException<RealityCheckEpRealityCheckGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RealityCheckEpRealityCheckGetRequest` | `src/DynamicFeed/Requests/RealityCheck/RealityCheckEpRealityCheckGetRequest.cs` |
| `XApiKey` | `src/DynamicFeed/Models/AnyOf/XApiKey.cs` |
| `XRapidapiProxySecret` | `src/DynamicFeed/Models/AnyOf/XRapidapiProxySecret.cs` |
| `XRapidapiUser` | `src/DynamicFeed/Models/AnyOf/XRapidapiUser.cs` |
| `RealityCheckEpRealityCheckGetError` | `src/DynamicFeed/Errors/RealityCheckEpRealityCheckGetError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

