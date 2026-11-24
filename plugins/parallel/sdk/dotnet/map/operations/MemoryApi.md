<!-- Generated file — do not edit; regenerated with the SDK. -->

# MemoryApi — operations

Accessor: `client.MemoryApi` · Source: `src/ParallelSdk/Api/MemoryApi.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ClearMemoryV1BetaMemoryClearPost

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `ClearMemoryV1BetaMemoryClearPost(ClearMemoryV1BetaMemoryClearPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ClearMemoryV1BetaMemoryClearPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ClearMemoryV1BetaMemoryClearPostRequest` | `src/ParallelSdk/Requests/MemoryApi/ClearMemoryV1BetaMemoryClearPostRequest.cs` |
| `MemoryClearRequest` | `src/ParallelSdk/Models/MemoryClearRequest.cs` |
| `ClearMemoryV1BetaMemoryClearPostError` | `src/ParallelSdk/Errors/ClearMemoryV1BetaMemoryClearPostError.cs` |
| `HttpValidationError` | `src/ParallelSdk/Models/HttpValidationError.cs` |

### EvictMemorySourceV1BetaMemoryEvictPost

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `EvictMemorySourceV1BetaMemoryEvictPost(EvictMemorySourceV1BetaMemoryEvictPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `void` (Task)
- **Error**: `ApiException<EvictMemorySourceV1BetaMemoryEvictPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EvictMemorySourceV1BetaMemoryEvictPostRequest` | `src/ParallelSdk/Requests/MemoryApi/EvictMemorySourceV1BetaMemoryEvictPostRequest.cs` |
| `MemoryEvictRequest` | `src/ParallelSdk/Models/MemoryEvictRequest.cs` |
| `EvictMemorySourceV1BetaMemoryEvictPostError` | `src/ParallelSdk/Errors/EvictMemorySourceV1BetaMemoryEvictPostError.cs` |
| `HttpValidationError` | `src/ParallelSdk/Models/HttpValidationError.cs` |

### RetrieveMemoryV1BetaMemoryRetrievePost

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `RetrieveMemoryV1BetaMemoryRetrievePost(RetrieveMemoryV1BetaMemoryRetrievePostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `MemoryRetrieveResponse`
- **Error**: `ApiException<RetrieveMemoryV1BetaMemoryRetrievePostError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RetrieveMemoryV1BetaMemoryRetrievePostRequest` | `src/ParallelSdk/Requests/MemoryApi/RetrieveMemoryV1BetaMemoryRetrievePostRequest.cs` |
| `MemoryRetrieveRequest` | `src/ParallelSdk/Models/MemoryRetrieveRequest.cs` |
| `MemoryRetrieveResponse` | `src/ParallelSdk/Models/MemoryRetrieveResponse.cs` |
| `RetrieveMemoryV1BetaMemoryRetrievePostError` | `src/ParallelSdk/Errors/RetrieveMemoryV1BetaMemoryRetrievePostError.cs` |
| `HttpValidationError` | `src/ParallelSdk/Models/HttpValidationError.cs` |

