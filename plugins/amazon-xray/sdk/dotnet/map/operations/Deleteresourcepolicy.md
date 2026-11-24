<!-- Generated file — do not edit; regenerated with the SDK. -->

# Deleteresourcepolicy — operations

Accessor: `client.Deleteresourcepolicy` · Source: `src/AwsXRay/Api/Deleteresourcepolicy.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteResourcePolicy

- **Auth**: `options.Sigv4`
- **Signature**: `DeleteResourcePolicy(DeleteResourcePolicyOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `object`
- **Error**: `ApiException<DeleteResourcePolicyError>` — **Case A (typed)**
- **Error accessors**: `TryGetInvalidPolicyRevisionIdException([NotNullWhen(true)] out InvalidPolicyRevisionIdException? value)` [400] · `TryGetThrottledException([NotNullWhen(true)] out ThrottledException? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteResourcePolicyOperationRequest` | `src/AwsXRay/Requests/Deleteresourcepolicy/DeleteResourcePolicyOperationRequest.cs` |
| `DeleteResourcePolicyRequest` | `src/AwsXRay/Models/DeleteResourcePolicyRequest.cs` |
| `DeleteResourcePolicyError` | `src/AwsXRay/Errors/DeleteResourcePolicyError.cs` |
| `InvalidPolicyRevisionIdException` | `src/AwsXRay/Models/InvalidPolicyRevisionIdException.cs` |
| `ThrottledException` | `src/AwsXRay/Models/ThrottledException.cs` |

