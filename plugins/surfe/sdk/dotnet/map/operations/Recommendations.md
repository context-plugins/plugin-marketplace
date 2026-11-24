<!-- Generated file — do not edit; regenerated with the SDK. -->

# Recommendations — operations

Accessor: `client.Recommendations` · Source: `src/Surfe/Api/Recommendations.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### FetchRecommendations

- **Auth**: `options.BearerAuth`
- **Signature**: `FetchRecommendations(FetchRecommendationsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `RecommendationsFetchResponse`
- **Error**: `ApiException<FetchRecommendationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FetchRecommendationsRequest` | `src/Surfe/Requests/Recommendations/FetchRecommendationsRequest.cs` |
| `RecommendationsFetchRequest` | `src/Surfe/Models/RecommendationsFetchRequest.cs` |
| `RecommendationsFetchResponse` | `src/Surfe/Models/RecommendationsFetchResponse.cs` |
| `FetchRecommendationsError` | `src/Surfe/Errors/FetchRecommendationsError.cs` |
| `Error` | `src/Surfe/Models/Error.cs` |

### UpsertIcp

- **Auth**: `options.BearerAuth`
- **Signature**: `UpsertIcp(UpsertIcpRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `IcpDefinition`
- **Error**: `ApiException<UpsertIcpError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpsertIcpRequest` | `src/Surfe/Requests/Recommendations/UpsertIcpRequest.cs` |
| `IcpDefinition` | `src/Surfe/Models/IcpDefinition.cs` |
| `UpsertIcpError` | `src/Surfe/Errors/UpsertIcpError.cs` |
| `Error` | `src/Surfe/Models/Error.cs` |

