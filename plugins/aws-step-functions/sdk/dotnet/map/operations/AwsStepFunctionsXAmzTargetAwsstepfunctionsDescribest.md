<!-- Generated file — do not edit; regenerated with the SDK. -->

# AwsStepFunctionsXAmzTargetAwsstepfunctionsDescribest — operations

Accessor: `client.AwsStepFunctionsXAmzTargetAwsstepfunctionsDescribest` · Source: `src/AwsStepFunctions/Api/AwsStepFunctionsXAmzTargetAwsstepfunctionsDescribest.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DescribeStateMachineAlias

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeStateMachineAlias(DescribeStateMachineAliasRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DescribeStateMachineAliasError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeStateMachineAliasRequest` | `src/AwsStepFunctions/Requests/AwsStepFunctionsXAmzTargetAwsstepfunctionsDescribest/DescribeStateMachineAliasRequest.cs` |
| `XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDescribestApi` | `src/AwsStepFunctions/Models/Enums/XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDescribestApi.cs` |
| `DescribeStateMachineAliasError` | `src/AwsStepFunctions/Errors/DescribeStateMachineAliasError.cs` |

