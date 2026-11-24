<!-- Generated file — do not edit; regenerated with the SDK. -->

# RunnerApi — operations

Accessor: `client.RunnerApi` · Source: `src/CircleCi/Api/RunnerApi.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ListRunners

- **Auth**: `options.ApiToken`
- **Signature**: `ListRunners(ListRunnersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `namespace` ← `Namespace`, `resource-class` ← `ResourceClass`
- **Returns**: `RunnerResponse`
- **Error**: `ApiException<ListRunnersError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListRunnersRequest` | `src/CircleCi/Requests/RunnerApi/ListRunnersRequest.cs` |
| `RunnerResponse` | `src/CircleCi/Models/RunnerResponse.cs` |
| `ListRunnersError` | `src/CircleCi/Errors/ListRunnersError.cs` |
| `ErrorResponseModel` | `src/CircleCi/Models/ErrorResponseModel.cs` |

