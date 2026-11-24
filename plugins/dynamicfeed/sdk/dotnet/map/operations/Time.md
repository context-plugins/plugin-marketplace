<!-- Generated file — do not edit; regenerated with the SDK. -->

# Time — operations

Accessor: `client.Time` · Source: `src/DynamicFeed/Api/Time.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### TimeEpTimeGet

- **Signature**: `TimeEpTimeGet(TimeEpTimeGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `tz` ← `Tz`
- **Returns**: `object`
- **Error**: `ApiException<TimeEpTimeGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TimeEpTimeGetRequest` | `src/DynamicFeed/Requests/Time/TimeEpTimeGetRequest.cs` |
| `XApiKey` | `src/DynamicFeed/Models/AnyOf/XApiKey.cs` |
| `XRapidapiProxySecret` | `src/DynamicFeed/Models/AnyOf/XRapidapiProxySecret.cs` |
| `XRapidapiUser` | `src/DynamicFeed/Models/AnyOf/XRapidapiUser.cs` |
| `TimeEpTimeGetError` | `src/DynamicFeed/Errors/TimeEpTimeGetError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

