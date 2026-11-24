<!-- Generated file — do not edit; regenerated with the SDK. -->

# AiModels — operations

Accessor: `client.AiModels` · Source: `src/DynamicFeed/Api/AiModels.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### AiModelsEpAiModelsGet

- **Signature**: `AiModelsEpAiModelsGet(AiModelsEpAiModelsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `query` ← `Query`, `org` ← `Org`, `task` ← `Task`, `sort` ← `Sort`, `limit` ← `Limit`
- **Returns**: `object`
- **Error**: `ApiException<AiModelsEpAiModelsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AiModelsEpAiModelsGetRequest` | `src/DynamicFeed/Requests/AiModels/AiModelsEpAiModelsGetRequest.cs` |
| `Query` | `src/DynamicFeed/Models/AnyOf/Query.cs` |
| `Org` | `src/DynamicFeed/Models/AnyOf/Org.cs` |
| `XApiKey` | `src/DynamicFeed/Models/AnyOf/XApiKey.cs` |
| `XRapidapiProxySecret` | `src/DynamicFeed/Models/AnyOf/XRapidapiProxySecret.cs` |
| `XRapidapiUser` | `src/DynamicFeed/Models/AnyOf/XRapidapiUser.cs` |
| `AiModelsEpAiModelsGetError` | `src/DynamicFeed/Errors/AiModelsEpAiModelsGetError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

