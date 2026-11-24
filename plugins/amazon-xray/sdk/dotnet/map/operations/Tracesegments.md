<!-- Generated file — do not edit; regenerated with the SDK. -->

# Tracesegments — operations

Accessor: `client.Tracesegments` · Source: `src/AwsXRay/Api/Tracesegments.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### PutTraceSegments

- **Auth**: `options.Sigv4`
- **Signature**: `PutTraceSegments(PutTraceSegmentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `PutTraceSegmentsResult`
- **Error**: `ApiException<PutTraceSegmentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetInvalidRequestException([NotNullWhen(true)] out InvalidRequestException? value)` [400] · `TryGetThrottledException([NotNullWhen(true)] out ThrottledException? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PutTraceSegmentsRequest` | `src/AwsXRay/Requests/Tracesegments/PutTraceSegmentsRequest.cs` |
| `TraceSegmentsRequest` | `src/AwsXRay/Models/TraceSegmentsRequest.cs` |
| `PutTraceSegmentsResult` | `src/AwsXRay/Models/PutTraceSegmentsResult.cs` |
| `PutTraceSegmentsError` | `src/AwsXRay/Errors/PutTraceSegmentsError.cs` |
| `InvalidRequestException` | `src/AwsXRay/Models/InvalidRequestException.cs` |
| `ThrottledException` | `src/AwsXRay/Models/ThrottledException.cs` |

