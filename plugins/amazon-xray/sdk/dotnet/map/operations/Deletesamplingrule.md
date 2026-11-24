<!-- Generated file — do not edit; regenerated with the SDK. -->

# Deletesamplingrule — operations

Accessor: `client.Deletesamplingrule` · Source: `src/AwsXRay/Api/Deletesamplingrule.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteSamplingRule

- **Auth**: `options.Sigv4`
- **Signature**: `DeleteSamplingRule(DeleteSamplingRuleOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `DeleteSamplingRuleResult`
- **Error**: `ApiException<DeleteSamplingRuleError>` — **Case A (typed)**
- **Error accessors**: `TryGetInvalidRequestException([NotNullWhen(true)] out InvalidRequestException? value)` [400] · `TryGetThrottledException([NotNullWhen(true)] out ThrottledException? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteSamplingRuleOperationRequest` | `src/AwsXRay/Requests/Deletesamplingrule/DeleteSamplingRuleOperationRequest.cs` |
| `DeleteSamplingRuleRequest` | `src/AwsXRay/Models/DeleteSamplingRuleRequest.cs` |
| `DeleteSamplingRuleResult` | `src/AwsXRay/Models/DeleteSamplingRuleResult.cs` |
| `DeleteSamplingRuleError` | `src/AwsXRay/Errors/DeleteSamplingRuleError.cs` |
| `InvalidRequestException` | `src/AwsXRay/Models/InvalidRequestException.cs` |
| `ThrottledException` | `src/AwsXRay/Models/ThrottledException.cs` |

