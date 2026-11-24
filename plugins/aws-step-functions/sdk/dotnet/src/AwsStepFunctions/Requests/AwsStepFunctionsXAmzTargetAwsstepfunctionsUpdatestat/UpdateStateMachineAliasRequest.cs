using AwsStepFunctions.Models.Enums;

namespace AwsStepFunctions.Requests.AwsStepFunctionsXAmzTargetAwsstepfunctionsUpdatestat;

/// <summary>
/// The inputs of the UpdateStateMachineAlias operation.
/// </summary>
public sealed record UpdateStateMachineAliasRequest
{
    public required XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsUpdatestatApi XAmzTarget { get; init; }
}
