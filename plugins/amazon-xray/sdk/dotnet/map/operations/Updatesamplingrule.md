<!-- Generated file — do not edit; regenerated with the SDK. -->

# Updatesamplingrule — operations

Accessor: `client.Updatesamplingrule` · Source: `src/AwsXRay/Api/Updatesamplingrule.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### UpdateSamplingRule

- **Auth**: `options.Sigv4`
- **Signature**: `UpdateSamplingRule(UpdateSamplingRuleOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `UpdateSamplingRuleResult`
- **Error**: `ApiException<UpdateSamplingRuleError>` — **Case A (typed)**
- **Error accessors**: `TryGetInvalidRequestException([NotNullWhen(true)] out InvalidRequestException? value)` [400] · `TryGetThrottledException([NotNullWhen(true)] out ThrottledException? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateSamplingRuleOperationRequest` | `src/AwsXRay/Requests/Updatesamplingrule/UpdateSamplingRuleOperationRequest.cs` |
| `UpdateSamplingRuleRequest` | `src/AwsXRay/Models/UpdateSamplingRuleRequest.cs` |
| `UpdateSamplingRuleResult` | `src/AwsXRay/Models/UpdateSamplingRuleResult.cs` |
| `UpdateSamplingRuleError` | `src/AwsXRay/Errors/UpdateSamplingRuleError.cs` |
| `InvalidRequestException` | `src/AwsXRay/Models/InvalidRequestException.cs` |
| `ThrottledException` | `src/AwsXRay/Models/ThrottledException.cs` |

