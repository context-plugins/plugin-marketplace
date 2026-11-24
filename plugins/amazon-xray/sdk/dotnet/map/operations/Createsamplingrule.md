<!-- Generated file — do not edit; regenerated with the SDK. -->

# Createsamplingrule — operations

Accessor: `client.Createsamplingrule` · Source: `src/AwsXRay/Api/Createsamplingrule.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateSamplingRule

- **Auth**: `options.Sigv4`
- **Signature**: `CreateSamplingRule(CreateSamplingRuleOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `CreateSamplingRuleResult`
- **Error**: `ApiException<CreateSamplingRuleError>` — **Case A (typed)**
- **Error accessors**: `TryGetInvalidRequestException([NotNullWhen(true)] out InvalidRequestException? value)` [400] · `TryGetThrottledException([NotNullWhen(true)] out ThrottledException? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateSamplingRuleOperationRequest` | `src/AwsXRay/Requests/Createsamplingrule/CreateSamplingRuleOperationRequest.cs` |
| `CreateSamplingRuleRequest` | `src/AwsXRay/Models/CreateSamplingRuleRequest.cs` |
| `CreateSamplingRuleResult` | `src/AwsXRay/Models/CreateSamplingRuleResult.cs` |
| `CreateSamplingRuleError` | `src/AwsXRay/Errors/CreateSamplingRuleError.cs` |
| `InvalidRequestException` | `src/AwsXRay/Models/InvalidRequestException.cs` |
| `ThrottledException` | `src/AwsXRay/Models/ThrottledException.cs` |

