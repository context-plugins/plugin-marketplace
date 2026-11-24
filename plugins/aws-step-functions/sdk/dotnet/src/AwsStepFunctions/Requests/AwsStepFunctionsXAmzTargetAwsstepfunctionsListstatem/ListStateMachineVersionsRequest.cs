using AwsStepFunctions.Models.Enums;

namespace AwsStepFunctions.Requests.AwsStepFunctionsXAmzTargetAwsstepfunctionsListstatem;

/// <summary>
/// The inputs of the ListStateMachineVersions operation.
/// </summary>
public sealed record ListStateMachineVersionsRequest
{
    public required XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsListstatemApi XAmzTarget { get; init; }
}
