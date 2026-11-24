<!-- Generated file — do not edit; regenerated with the SDK. -->

# Getsamplingrules — operations

Accessor: `client.Getsamplingrules` · Source: `src/AwsXRay/Api/Getsamplingrules.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetSamplingRules

- **Auth**: `options.Sigv4`
- **Signature**: `GetSamplingRules(GetSamplingRulesOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `GetSamplingRulesResult`
- **Error**: `ApiException<GetSamplingRulesError>` — **Case A (typed)**
- **Error accessors**: `TryGetInvalidRequestException([NotNullWhen(true)] out InvalidRequestException? value)` [400] · `TryGetThrottledException([NotNullWhen(true)] out ThrottledException? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetSamplingRulesOperationRequest` | `src/AwsXRay/Requests/Getsamplingrules/GetSamplingRulesOperationRequest.cs` |
| `GetSamplingRulesRequest` | `src/AwsXRay/Models/GetSamplingRulesRequest.cs` |
| `GetSamplingRulesResult` | `src/AwsXRay/Models/GetSamplingRulesResult.cs` |
| `GetSamplingRulesError` | `src/AwsXRay/Errors/GetSamplingRulesError.cs` |
| `InvalidRequestException` | `src/AwsXRay/Models/InvalidRequestException.cs` |
| `ThrottledException` | `src/AwsXRay/Models/ThrottledException.cs` |

