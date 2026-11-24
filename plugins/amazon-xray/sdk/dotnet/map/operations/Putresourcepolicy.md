<!-- Generated file — do not edit; regenerated with the SDK. -->

# Putresourcepolicy — operations

Accessor: `client.Putresourcepolicy` · Source: `src/AwsXRay/Api/Putresourcepolicy.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### PutResourcePolicy

- **Auth**: `options.Sigv4`
- **Signature**: `PutResourcePolicy(PutResourcePolicyOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `PutResourcePolicyResult`
- **Error**: `ApiException<PutResourcePolicyError>` — **Case A (typed)**
- **Error accessors**: `TryGetInvalidPolicyRevisionIdException([NotNullWhen(true)] out InvalidPolicyRevisionIdException? value)` [400] · `TryGetThrottledException([NotNullWhen(true)] out ThrottledException? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PutResourcePolicyOperationRequest` | `src/AwsXRay/Requests/Putresourcepolicy/PutResourcePolicyOperationRequest.cs` |
| `PutResourcePolicyRequest` | `src/AwsXRay/Models/PutResourcePolicyRequest.cs` |
| `PutResourcePolicyResult` | `src/AwsXRay/Models/PutResourcePolicyResult.cs` |
| `PutResourcePolicyError` | `src/AwsXRay/Errors/PutResourcePolicyError.cs` |
| `InvalidPolicyRevisionIdException` | `src/AwsXRay/Models/InvalidPolicyRevisionIdException.cs` |
| `ThrottledException` | `src/AwsXRay/Models/ThrottledException.cs` |

