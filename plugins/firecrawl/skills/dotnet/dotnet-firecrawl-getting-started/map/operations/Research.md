<!-- Generated file — do not edit; regenerated with the SDK. -->

# Research — operations

Accessor: `client.Research` · Source: `Api/Research.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetDeepResearchStatus

- **Signature**: `GetDeepResearchStatus(Guid id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `DeepResearchResponse1`
- **Error**: `SdkException<GetDeepResearchStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetDeepResearch404Error1(out DeepResearch404Error1)` [404] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `DeepResearchResponse1` | `Models/DeepResearchResponse1.cs` |
| `GetDeepResearchStatusError` | `Errors/GetDeepResearchStatusError.cs` |
| `DeepResearch404Error1` | `Models/DeepResearch404Error1.cs` |

### StartDeepResearch

- **Signature**: `StartDeepResearch(DeepResearchRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `DeepResearchResponse`
- **Error**: `SdkException<StartDeepResearchError>` — **Case A (typed)**
- **Error accessors**: `TryGetDeepResearch400Error1(out DeepResearch400Error1)` [400] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `DeepResearchRequest` | `Models/DeepResearchRequest.cs` |
| `DeepResearchResponse` | `Models/DeepResearchResponse.cs` |
| `StartDeepResearchError` | `Errors/StartDeepResearchError.cs` |
| `DeepResearch400Error1` | `Models/DeepResearch400Error1.cs` |

