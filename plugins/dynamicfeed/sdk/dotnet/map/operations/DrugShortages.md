<!-- Generated file — do not edit; regenerated with the SDK. -->

# DrugShortages — operations

Accessor: `client.DrugShortages` · Source: `src/DynamicFeed/Api/DrugShortages.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DrugShortagesDrugShortagesGet

- **Signature**: `DrugShortagesDrugShortagesGet(DrugShortagesDrugShortagesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `query` ← `Query`, `limit` ← `Limit`
- **Returns**: `object`
- **Error**: `ApiException<DrugShortagesDrugShortagesGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DrugShortagesDrugShortagesGetRequest` | `src/DynamicFeed/Requests/DrugShortages/DrugShortagesDrugShortagesGetRequest.cs` |
| `XApiKey` | `src/DynamicFeed/Models/AnyOf/XApiKey.cs` |
| `XRapidapiProxySecret` | `src/DynamicFeed/Models/AnyOf/XRapidapiProxySecret.cs` |
| `XRapidapiUser` | `src/DynamicFeed/Models/AnyOf/XRapidapiUser.cs` |
| `DrugShortagesDrugShortagesGetError` | `src/DynamicFeed/Errors/DrugShortagesDrugShortagesGetError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

