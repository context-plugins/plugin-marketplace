<!-- Generated file — do not edit; regenerated with the SDK. -->

# China — operations

Accessor: `client.China` · Source: `src/DynamicFeed/Api/China.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ChinaEpChinaGet

- **Signature**: `ChinaEpChinaGet(ChinaEpChinaGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `metric` ← `Metric`
- **Returns**: `object`
- **Error**: `ApiException<ChinaEpChinaGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ChinaEpChinaGetRequest` | `src/DynamicFeed/Requests/China/ChinaEpChinaGetRequest.cs` |
| `XApiKey` | `src/DynamicFeed/Models/AnyOf/XApiKey.cs` |
| `XRapidapiProxySecret` | `src/DynamicFeed/Models/AnyOf/XRapidapiProxySecret.cs` |
| `XRapidapiUser` | `src/DynamicFeed/Models/AnyOf/XRapidapiUser.cs` |
| `ChinaEpChinaGetError` | `src/DynamicFeed/Errors/ChinaEpChinaGetError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

