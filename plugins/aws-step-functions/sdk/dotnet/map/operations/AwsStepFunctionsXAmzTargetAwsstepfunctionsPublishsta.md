<!-- Generated file — do not edit; regenerated with the SDK. -->

# AwsStepFunctionsXAmzTargetAwsstepfunctionsPublishsta — operations

Accessor: `client.AwsStepFunctionsXAmzTargetAwsstepfunctionsPublishsta` · Source: `src/AwsStepFunctions/Api/AwsStepFunctionsXAmzTargetAwsstepfunctionsPublishsta.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### PublishStateMachineVersion

- **Auth**: `options.Sigv4`
- **Signature**: `PublishStateMachineVersion(PublishStateMachineVersionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<PublishStateMachineVersionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 402, 409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PublishStateMachineVersionRequest` | `src/AwsStepFunctions/Requests/AwsStepFunctionsXAmzTargetAwsstepfunctionsPublishsta/PublishStateMachineVersionRequest.cs` |
| `XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsPublishstaApi` | `src/AwsStepFunctions/Models/Enums/XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsPublishstaApi.cs` |
| `PublishStateMachineVersionError` | `src/AwsStepFunctions/Errors/PublishStateMachineVersionError.cs` |

