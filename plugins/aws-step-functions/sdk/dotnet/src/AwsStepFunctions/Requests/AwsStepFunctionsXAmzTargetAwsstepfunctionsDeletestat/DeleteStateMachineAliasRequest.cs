using AwsStepFunctions.Models.Enums;

namespace AwsStepFunctions.Requests.AwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestat;

/// <summary>
/// The inputs of the DeleteStateMachineAlias operation.
/// </summary>
public sealed record DeleteStateMachineAliasRequest
{
    public required XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestatApi XAmzTarget { get; init; }
}
