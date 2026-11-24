<!-- Generated file — do not edit; regenerated with the SDK. -->

# Sampling — operations

Accessor: `client.Sampling` · Source: `src/AwsXRay/Api/Sampling.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetSamplingRules2

- **Auth**: `options.Sigv4`
- **Signature**: `GetSamplingRules2(GetSamplingRules2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `GetSamplingRulesResult`
- **Error**: `ApiException<GetSamplingRules2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetInvalidRequestException([NotNullWhen(true)] out InvalidRequestException? value)` [400] · `TryGetThrottledException([NotNullWhen(true)] out ThrottledException? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetSamplingRules2Request` | `src/AwsXRay/Requests/Sampling/GetSamplingRules2Request.cs` |
| `GetSamplingRulesRequest` | `src/AwsXRay/Models/GetSamplingRulesRequest.cs` |
| `GetSamplingRulesResult` | `src/AwsXRay/Models/GetSamplingRulesResult.cs` |
| `GetSamplingRules2Error` | `src/AwsXRay/Errors/GetSamplingRules2Error.cs` |
| `InvalidRequestException` | `src/AwsXRay/Models/InvalidRequestException.cs` |
| `ThrottledException` | `src/AwsXRay/Models/ThrottledException.cs` |

