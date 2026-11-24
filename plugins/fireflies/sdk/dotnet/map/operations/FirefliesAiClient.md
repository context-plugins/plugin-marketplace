<!-- Generated file — do not edit; regenerated with the SDK. -->

# FirefliesAiClient — operations

Accessor: `client` · Source: `src/FirefliesAi/FirefliesAiClient.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GraphqlOperation

- **Auth**: `options.BearerAuth`
- **Signature**: `GraphqlOperation(GraphqlOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `GraphQlResponse`
- **Error**: `ApiException<GraphqlOperationError>` — **Case A (typed)**
- **Error accessors**: `TryGetGraphQlErrorResponse([NotNullWhen(true)] out GraphQlErrorResponse? value)` [401] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GraphqlOperationRequest` | `src/FirefliesAi/Requests/GraphqlOperationRequest.cs` |
| `GraphQlRequest` | `src/FirefliesAi/Models/GraphQlRequest.cs` |
| `GraphQlResponse` | `src/FirefliesAi/Models/GraphQlResponse.cs` |
| `GraphqlOperationError` | `src/FirefliesAi/Errors/GraphqlOperationError.cs` |
| `GraphQlErrorResponse` | `src/FirefliesAi/Models/GraphQlErrorResponse.cs` |

