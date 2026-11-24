using AwsStepFunctions.Models.Enums;

namespace AwsStepFunctions.Requests.AwsStepFunctionsXAmzTargetAwsstepfunctionsDescribest;

/// <summary>
/// The inputs of the DescribeStateMachineAlias operation.
/// </summary>
public sealed record DescribeStateMachineAliasRequest
{
    public required XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDescribestApi XAmzTarget { get; init; }
}
