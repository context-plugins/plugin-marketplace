<!-- Generated file — do not edit; regenerated with the SDK. -->

# ModelsApi — operations

Accessor: `client.ModelsApi` · Source: `src/DynamicFeed/Api/ModelsApi.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ModelsModelsGet

- **Signature**: `ModelsModelsGet(ModelsModelsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `q` ← `Q`, `provider` ← `Provider`, `max_input_price` ← `MaxInputPrice`, `min_context` ← `MinContext`, `needs_vision` ← `NeedsVision`, `limit` ← `Limit`
- **Returns**: `object`
- **Error**: `ApiException<ModelsModelsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ModelsModelsGetRequest` | `src/DynamicFeed/Requests/ModelsApi/ModelsModelsGetRequest.cs` |
| `Q` | `src/DynamicFeed/Models/AnyOf/Q.cs` |
| `Provider` | `src/DynamicFeed/Models/AnyOf/Provider.cs` |
| `MaxInputPrice` | `src/DynamicFeed/Models/AnyOf/MaxInputPrice.cs` |
| `MinContext` | `src/DynamicFeed/Models/AnyOf/MinContext.cs` |
| `NeedsVision` | `src/DynamicFeed/Models/AnyOf/NeedsVision.cs` |
| `XApiKey` | `src/DynamicFeed/Models/AnyOf/XApiKey.cs` |
| `XRapidapiProxySecret` | `src/DynamicFeed/Models/AnyOf/XRapidapiProxySecret.cs` |
| `XRapidapiUser` | `src/DynamicFeed/Models/AnyOf/XRapidapiUser.cs` |
| `ModelsModelsGetError` | `src/DynamicFeed/Errors/ModelsModelsGetError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

