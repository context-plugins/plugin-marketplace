<!-- Generated file — do not edit; regenerated with the SDK. -->

# VerifiedFacts — operations

Accessor: `client.VerifiedFacts` · Source: `src/DynamicFeed/Api/VerifiedFacts.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### PostV1Answer

- **Signature**: `PostV1Answer(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `object`
- **Error**: `ApiException<RawError>` — **Case B**

### PostV1Facts

- **Signature**: `PostV1Facts(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `object`
- **Error**: `ApiException<RawError>` — **Case B**

### V1AnswerV1AnswerGet

- **Signature**: `V1AnswerV1AnswerGet(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `object`
- **Error**: `ApiException<RawError>` — **Case B**

### V1FactsV1FactsGet

- **Signature**: `V1FactsV1FactsGet(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `object`
- **Error**: `ApiException<RawError>` — **Case B**

### V1StateOfMcpTrendV1StateOfMcpTrendGet

- **Signature**: `V1StateOfMcpTrendV1StateOfMcpTrendGet(V1StateOfMcpTrendV1StateOfMcpTrendGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `days` ← `Days`
- **Returns**: `object`
- **Error**: `ApiException<V1StateOfMcpTrendV1StateOfMcpTrendGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `V1StateOfMcpTrendV1StateOfMcpTrendGetRequest` | `src/DynamicFeed/Requests/VerifiedFacts/V1StateOfMcpTrendV1StateOfMcpTrendGetRequest.cs` |
| `V1StateOfMcpTrendV1StateOfMcpTrendGetError` | `src/DynamicFeed/Errors/V1StateOfMcpTrendV1StateOfMcpTrendGetError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

### V1StateOfMcpV1StateOfMcpGet

- **Signature**: `V1StateOfMcpV1StateOfMcpGet(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `object`
- **Error**: `ApiException<RawError>` — **Case B**

