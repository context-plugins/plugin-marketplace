<!-- Generated file — do not edit; regenerated with the SDK. -->

# Listresourcepolicies — operations

Accessor: `client.Listresourcepolicies` · Source: `src/AwsXRay/Api/Listresourcepolicies.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ListResourcePolicies

- **Auth**: `options.Sigv4`
- **Signature**: `ListResourcePolicies(ListResourcePoliciesOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ListResourcePoliciesResult`
- **Error**: `ApiException<ListResourcePoliciesError>` — **Case A (typed)**
- **Error accessors**: `TryGetInvalidRequestException([NotNullWhen(true)] out InvalidRequestException? value)` [400] · `TryGetThrottledException([NotNullWhen(true)] out ThrottledException? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListResourcePoliciesOperationRequest` | `src/AwsXRay/Requests/Listresourcepolicies/ListResourcePoliciesOperationRequest.cs` |
| `ListResourcePoliciesRequest` | `src/AwsXRay/Models/ListResourcePoliciesRequest.cs` |
| `ListResourcePoliciesResult` | `src/AwsXRay/Models/ListResourcePoliciesResult.cs` |
| `ListResourcePoliciesError` | `src/AwsXRay/Errors/ListResourcePoliciesError.cs` |
| `InvalidRequestException` | `src/AwsXRay/Models/InvalidRequestException.cs` |
| `ThrottledException` | `src/AwsXRay/Models/ThrottledException.cs` |

