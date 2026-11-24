<!-- Generated file — do not edit; regenerated with the SDK. -->

# Flights — operations

Accessor: `client.Flights` · Source: `src/DynamicFeed/Api/Flights.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### FlightsFlightsGet

- **Signature**: `FlightsFlightsGet(FlightsFlightsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `region` ← `Region`, `callsign` ← `Callsign`, `limit` ← `Limit`
- **Returns**: `object`
- **Error**: `ApiException<FlightsFlightsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FlightsFlightsGetRequest` | `src/DynamicFeed/Requests/Flights/FlightsFlightsGetRequest.cs` |
| `Region` | `src/DynamicFeed/Models/AnyOf/Region.cs` |
| `Callsign` | `src/DynamicFeed/Models/AnyOf/Callsign.cs` |
| `XApiKey` | `src/DynamicFeed/Models/AnyOf/XApiKey.cs` |
| `XRapidapiProxySecret` | `src/DynamicFeed/Models/AnyOf/XRapidapiProxySecret.cs` |
| `XRapidapiUser` | `src/DynamicFeed/Models/AnyOf/XRapidapiUser.cs` |
| `FlightsFlightsGetError` | `src/DynamicFeed/Errors/FlightsFlightsGetError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

