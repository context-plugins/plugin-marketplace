using AwsStepFunctions.Models.Enums;

namespace AwsStepFunctions.Requests.AwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestat;

/// <summary>
/// The inputs of the DeleteStateMachineVersion operation.
/// </summary>
public sealed record DeleteStateMachineVersionRequest
{
    public required XAmzTarget1AwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestatApi XAmzTarget { get; init; }
}
