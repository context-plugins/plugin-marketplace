<!-- Generated file — do not edit; regenerated with the SDK. -->

# WeatherAlerts — operations

Accessor: `client.WeatherAlerts` · Source: `src/DynamicFeed/Api/WeatherAlerts.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### WeatherAlertsWeatherAlertsGet

- **Signature**: `WeatherAlertsWeatherAlertsGet(WeatherAlertsWeatherAlertsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `area` ← `Area`, `event` ← `Event`, `limit` ← `Limit`
- **Returns**: `object`
- **Error**: `ApiException<WeatherAlertsWeatherAlertsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `WeatherAlertsWeatherAlertsGetRequest` | `src/DynamicFeed/Requests/WeatherAlerts/WeatherAlertsWeatherAlertsGetRequest.cs` |
| `XApiKey` | `src/DynamicFeed/Models/AnyOf/XApiKey.cs` |
| `XRapidapiProxySecret` | `src/DynamicFeed/Models/AnyOf/XRapidapiProxySecret.cs` |
| `XRapidapiUser` | `src/DynamicFeed/Models/AnyOf/XRapidapiUser.cs` |
| `WeatherAlertsWeatherAlertsGetError` | `src/DynamicFeed/Errors/WeatherAlertsWeatherAlertsGetError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

