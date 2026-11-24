using AwsStepFunctions.Models.Enums;

namespace AwsStepFunctions.Requests.AwsStepFunctionsXAmzTargetAwsstepfunctionsListstatem;

/// <summary>
/// The inputs of the ListStateMachineAliases operation.
/// </summary>
public sealed record ListStateMachineAliasesRequest
{
    public required XAmzTarget1AwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsListstatemApi XAmzTarget { get; init; }
}
