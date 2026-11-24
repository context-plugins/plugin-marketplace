<!-- Generated file — do not edit; regenerated with the SDK. -->

# Operations — operations

Accessor: `client.Operations` · Source: `src/AwsXRay/Api/Operations.cs` · 8 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CancelTraceRetrieval

- **Auth**: `options.Sigv4`
- **Signature**: `CancelTraceRetrieval(CancelTraceRetrievalOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `object`
- **Error**: `ApiException<CancelTraceRetrievalError>` — **Case A (typed)**
- **Error accessors**: `TryGetInvalidRequestException([NotNullWhen(true)] out InvalidRequestException? value)` [400] · `TryGetResourceNotFoundException([NotNullWhen(true)] out ResourceNotFoundException? value)` [404] · `TryGetThrottledException([NotNullWhen(true)] out ThrottledException? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CancelTraceRetrievalOperationRequest` | `src/AwsXRay/Requests/Operations/CancelTraceRetrievalOperationRequest.cs` |
| `CancelTraceRetrievalRequest` | `src/AwsXRay/Models/CancelTraceRetrievalRequest.cs` |
| `CancelTraceRetrievalError` | `src/AwsXRay/Errors/CancelTraceRetrievalError.cs` |
| `InvalidRequestException` | `src/AwsXRay/Models/InvalidRequestException.cs` |
| `ResourceNotFoundException` | `src/AwsXRay/Models/ResourceNotFoundException.cs` |
| `ThrottledException` | `src/AwsXRay/Models/ThrottledException.cs` |

### GetIndexingRules

- **Auth**: `options.Sigv4`
- **Signature**: `GetIndexingRules(GetIndexingRulesOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `GetIndexingRulesResult`
- **Error**: `ApiException<GetIndexingRulesError>` — **Case A (typed)**
- **Error accessors**: `TryGetInvalidRequestException([NotNullWhen(true)] out InvalidRequestException? value)` [400] · `TryGetThrottledException([NotNullWhen(true)] out ThrottledException? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetIndexingRulesOperationRequest` | `src/AwsXRay/Requests/Operations/GetIndexingRulesOperationRequest.cs` |
| `GetIndexingRulesRequest` | `src/AwsXRay/Models/GetIndexingRulesRequest.cs` |
| `GetIndexingRulesResult` | `src/AwsXRay/Models/GetIndexingRulesResult.cs` |
| `GetIndexingRulesError` | `src/AwsXRay/Errors/GetIndexingRulesError.cs` |
| `InvalidRequestException` | `src/AwsXRay/Models/InvalidRequestException.cs` |
| `ThrottledException` | `src/AwsXRay/Models/ThrottledException.cs` |

### GetRetrievedTracesGraph

- **Auth**: `options.Sigv4`
- **Signature**: `GetRetrievedTracesGraph(GetRetrievedTracesGraphOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `GetRetrievedTracesGraphResult`
- **Error**: `ApiException<GetRetrievedTracesGraphError>` — **Case A (typed)**
- **Error accessors**: `TryGetInvalidRequestException([NotNullWhen(true)] out InvalidRequestException? value)` [400] · `TryGetResourceNotFoundException([NotNullWhen(true)] out ResourceNotFoundException? value)` [404] · `TryGetThrottledException([NotNullWhen(true)] out ThrottledException? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRetrievedTracesGraphOperationRequest` | `src/AwsXRay/Requests/Operations/GetRetrievedTracesGraphOperationRequest.cs` |
| `GetRetrievedTracesGraphRequest` | `src/AwsXRay/Models/GetRetrievedTracesGraphRequest.cs` |
| `GetRetrievedTracesGraphResult` | `src/AwsXRay/Models/GetRetrievedTracesGraphResult.cs` |
| `GetRetrievedTracesGraphError` | `src/AwsXRay/Errors/GetRetrievedTracesGraphError.cs` |
| `InvalidRequestException` | `src/AwsXRay/Models/InvalidRequestException.cs` |
| `ResourceNotFoundException` | `src/AwsXRay/Models/ResourceNotFoundException.cs` |
| `ThrottledException` | `src/AwsXRay/Models/ThrottledException.cs` |

### GetTraceSegmentDestination

- **Auth**: `options.Sigv4`
- **Signature**: `GetTraceSegmentDestination(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `GetTraceSegmentDestinationResult`
- **Error**: `ApiException<GetTraceSegmentDestinationError>` — **Case A (typed)**
- **Error accessors**: `TryGetInvalidRequestException([NotNullWhen(true)] out InvalidRequestException? value)` [400] · `TryGetThrottledException([NotNullWhen(true)] out ThrottledException? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetTraceSegmentDestinationResult` | `src/AwsXRay/Models/GetTraceSegmentDestinationResult.cs` |
| `GetTraceSegmentDestinationError` | `src/AwsXRay/Errors/GetTraceSegmentDestinationError.cs` |
| `InvalidRequestException` | `src/AwsXRay/Models/InvalidRequestException.cs` |
| `ThrottledException` | `src/AwsXRay/Models/ThrottledException.cs` |

### ListRetrievedTraces

- **Auth**: `options.Sigv4`
- **Signature**: `ListRetrievedTraces(ListRetrievedTracesOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ListRetrievedTracesResult`
- **Error**: `ApiException<ListRetrievedTracesError>` — **Case A (typed)**
- **Error accessors**: `TryGetInvalidRequestException([NotNullWhen(true)] out InvalidRequestException? value)` [400] · `TryGetResourceNotFoundException([NotNullWhen(true)] out ResourceNotFoundException? value)` [404] · `TryGetThrottledException([NotNullWhen(true)] out ThrottledException? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListRetrievedTracesOperationRequest` | `src/AwsXRay/Requests/Operations/ListRetrievedTracesOperationRequest.cs` |
| `ListRetrievedTracesRequest` | `src/AwsXRay/Models/ListRetrievedTracesRequest.cs` |
| `ListRetrievedTracesResult` | `src/AwsXRay/Models/ListRetrievedTracesResult.cs` |
| `ListRetrievedTracesError` | `src/AwsXRay/Errors/ListRetrievedTracesError.cs` |
| `InvalidRequestException` | `src/AwsXRay/Models/InvalidRequestException.cs` |
| `ResourceNotFoundException` | `src/AwsXRay/Models/ResourceNotFoundException.cs` |
| `ThrottledException` | `src/AwsXRay/Models/ThrottledException.cs` |

### StartTraceRetrieval

- **Auth**: `options.Sigv4`
- **Signature**: `StartTraceRetrieval(StartTraceRetrievalOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `StartTraceRetrievalResult`
- **Error**: `ApiException<StartTraceRetrievalError>` — **Case A (typed)**
- **Error accessors**: `TryGetInvalidRequestException([NotNullWhen(true)] out InvalidRequestException? value)` [400] · `TryGetResourceNotFoundException([NotNullWhen(true)] out ResourceNotFoundException? value)` [404] · `TryGetThrottledException([NotNullWhen(true)] out ThrottledException? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StartTraceRetrievalOperationRequest` | `src/AwsXRay/Requests/Operations/StartTraceRetrievalOperationRequest.cs` |
| `StartTraceRetrievalRequest` | `src/AwsXRay/Models/StartTraceRetrievalRequest.cs` |
| `StartTraceRetrievalResult` | `src/AwsXRay/Models/StartTraceRetrievalResult.cs` |
| `StartTraceRetrievalError` | `src/AwsXRay/Errors/StartTraceRetrievalError.cs` |
| `InvalidRequestException` | `src/AwsXRay/Models/InvalidRequestException.cs` |
| `ResourceNotFoundException` | `src/AwsXRay/Models/ResourceNotFoundException.cs` |
| `ThrottledException` | `src/AwsXRay/Models/ThrottledException.cs` |

### UpdateIndexingRule

- **Auth**: `options.Sigv4`
- **Signature**: `UpdateIndexingRule(UpdateIndexingRuleOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `UpdateIndexingRuleResult`
- **Error**: `ApiException<UpdateIndexingRuleError>` — **Case A (typed)**
- **Error accessors**: `TryGetInvalidRequestException([NotNullWhen(true)] out InvalidRequestException? value)` [400] · `TryGetResourceNotFoundException([NotNullWhen(true)] out ResourceNotFoundException? value)` [404] · `TryGetThrottledException([NotNullWhen(true)] out ThrottledException? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateIndexingRuleOperationRequest` | `src/AwsXRay/Requests/Operations/UpdateIndexingRuleOperationRequest.cs` |
| `UpdateIndexingRuleRequest` | `src/AwsXRay/Models/UpdateIndexingRuleRequest.cs` |
| `UpdateIndexingRuleResult` | `src/AwsXRay/Models/UpdateIndexingRuleResult.cs` |
| `UpdateIndexingRuleError` | `src/AwsXRay/Errors/UpdateIndexingRuleError.cs` |
| `InvalidRequestException` | `src/AwsXRay/Models/InvalidRequestException.cs` |
| `ResourceNotFoundException` | `src/AwsXRay/Models/ResourceNotFoundException.cs` |
| `ThrottledException` | `src/AwsXRay/Models/ThrottledException.cs` |

### UpdateTraceSegmentDestination

- **Auth**: `options.Sigv4`
- **Signature**: `UpdateTraceSegmentDestination(UpdateTraceSegmentDestinationOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `UpdateTraceSegmentDestinationResult`
- **Error**: `ApiException<UpdateTraceSegmentDestinationError>` — **Case A (typed)**
- **Error accessors**: `TryGetInvalidRequestException([NotNullWhen(true)] out InvalidRequestException? value)` [400] · `TryGetThrottledException([NotNullWhen(true)] out ThrottledException? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateTraceSegmentDestinationOperationRequest` | `src/AwsXRay/Requests/Operations/UpdateTraceSegmentDestinationOperationRequest.cs` |
| `UpdateTraceSegmentDestinationRequest` | `src/AwsXRay/Models/UpdateTraceSegmentDestinationRequest.cs` |
| `UpdateTraceSegmentDestinationResult` | `src/AwsXRay/Models/UpdateTraceSegmentDestinationResult.cs` |
| `UpdateTraceSegmentDestinationError` | `src/AwsXRay/Errors/UpdateTraceSegmentDestinationError.cs` |
| `InvalidRequestException` | `src/AwsXRay/Models/InvalidRequestException.cs` |
| `ThrottledException` | `src/AwsXRay/Models/ThrottledException.cs` |

