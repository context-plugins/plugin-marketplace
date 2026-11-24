<!-- Generated file — do not edit; regenerated with the SDK. -->

# MarketHours — operations

Accessor: `client.MarketHours` · Source: `src/DynamicFeed/Api/MarketHours.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### MarketHoursMarketHoursGet

- **Signature**: `MarketHoursMarketHoursGet(MarketHoursMarketHoursGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `market` ← `Market`
- **Returns**: `object`
- **Error**: `ApiException<MarketHoursMarketHoursGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MarketHoursMarketHoursGetRequest` | `src/DynamicFeed/Requests/MarketHours/MarketHoursMarketHoursGetRequest.cs` |
| `Market` | `src/DynamicFeed/Models/AnyOf/Market.cs` |
| `XApiKey` | `src/DynamicFeed/Models/AnyOf/XApiKey.cs` |
| `XRapidapiProxySecret` | `src/DynamicFeed/Models/AnyOf/XRapidapiProxySecret.cs` |
| `XRapidapiUser` | `src/DynamicFeed/Models/AnyOf/XRapidapiUser.cs` |
| `MarketHoursMarketHoursGetError` | `src/DynamicFeed/Errors/MarketHoursMarketHoursGetError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

