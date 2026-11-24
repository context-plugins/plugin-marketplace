<!-- Generated file — do not edit; regenerated with the SDK. -->

# NaturalEvents — operations

Accessor: `client.NaturalEvents` · Source: `src/DynamicFeed/Api/NaturalEvents.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### NaturalEventsNaturalEventsGet

- **Signature**: `NaturalEventsNaturalEventsGet(NaturalEventsNaturalEventsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `category` ← `Category`, `days` ← `Days`, `limit` ← `Limit`
- **Returns**: `object`
- **Error**: `ApiException<NaturalEventsNaturalEventsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `NaturalEventsNaturalEventsGetRequest` | `src/DynamicFeed/Requests/NaturalEvents/NaturalEventsNaturalEventsGetRequest.cs` |
| `Category` | `src/DynamicFeed/Models/AnyOf/Category.cs` |
| `XApiKey` | `src/DynamicFeed/Models/AnyOf/XApiKey.cs` |
| `XRapidapiProxySecret` | `src/DynamicFeed/Models/AnyOf/XRapidapiProxySecret.cs` |
| `XRapidapiUser` | `src/DynamicFeed/Models/AnyOf/XRapidapiUser.cs` |
| `NaturalEventsNaturalEventsGetError` | `src/DynamicFeed/Errors/NaturalEventsNaturalEventsGetError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

