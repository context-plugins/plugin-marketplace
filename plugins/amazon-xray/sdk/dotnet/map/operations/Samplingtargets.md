<!-- Generated file — do not edit; regenerated with the SDK. -->

# Samplingtargets — operations

Accessor: `client.Samplingtargets` · Source: `src/AwsXRay/Api/Samplingtargets.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetSamplingTargets

- **Auth**: `options.Sigv4`
- **Signature**: `GetSamplingTargets(GetSamplingTargetsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `GetSamplingTargetsResult`
- **Error**: `ApiException<GetSamplingTargetsError>` — **Case A (typed)**
- **Error accessors**: `TryGetInvalidRequestException([NotNullWhen(true)] out InvalidRequestException? value)` [400] · `TryGetThrottledException([NotNullWhen(true)] out ThrottledException? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetSamplingTargetsRequest` | `src/AwsXRay/Requests/Samplingtargets/GetSamplingTargetsRequest.cs` |
| `SamplingTargetsRequest` | `src/AwsXRay/Models/SamplingTargetsRequest.cs` |
| `GetSamplingTargetsResult` | `src/AwsXRay/Models/GetSamplingTargetsResult.cs` |
| `GetSamplingTargetsError` | `src/AwsXRay/Errors/GetSamplingTargetsError.cs` |
| `InvalidRequestException` | `src/AwsXRay/Models/InvalidRequestException.cs` |
| `ThrottledException` | `src/AwsXRay/Models/ThrottledException.cs` |

