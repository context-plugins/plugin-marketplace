using AwsStepFunctions.Models.Enums;

namespace AwsStepFunctions.Requests.AwsStepFunctionsXAmzTargetAwsstepfunctionsCreatestat;

/// <summary>
/// The inputs of the CreateStateMachineAlias operation.
/// </summary>
public sealed record CreateStateMachineAliasRequest
{
    public required XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsCreatestatApi XAmzTarget { get; init; }
}
