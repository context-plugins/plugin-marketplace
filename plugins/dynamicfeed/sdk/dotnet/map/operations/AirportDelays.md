<!-- Generated file — do not edit; regenerated with the SDK. -->

# AirportDelays — operations

Accessor: `client.AirportDelays` · Source: `src/DynamicFeed/Api/AirportDelays.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### AirportDelaysAirportDelaysGet

- **Signature**: `AirportDelaysAirportDelaysGet(AirportDelaysAirportDelaysGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `airport` ← `Airport`, `limit` ← `Limit`
- **Returns**: `object`
- **Error**: `ApiException<AirportDelaysAirportDelaysGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AirportDelaysAirportDelaysGetRequest` | `src/DynamicFeed/Requests/AirportDelays/AirportDelaysAirportDelaysGetRequest.cs` |
| `XApiKey` | `src/DynamicFeed/Models/AnyOf/XApiKey.cs` |
| `XRapidapiProxySecret` | `src/DynamicFeed/Models/AnyOf/XRapidapiProxySecret.cs` |
| `XRapidapiUser` | `src/DynamicFeed/Models/AnyOf/XRapidapiUser.cs` |
| `AirportDelaysAirportDelaysGetError` | `src/DynamicFeed/Errors/AirportDelaysAirportDelaysGetError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

