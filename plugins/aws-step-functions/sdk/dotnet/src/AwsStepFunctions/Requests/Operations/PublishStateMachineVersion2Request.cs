using AwsStepFunctions.Models.Enums;

namespace AwsStepFunctions.Requests.Operations;

/// <summary>
/// The inputs of the PublishStateMachineVersion2 operation.
/// </summary>
public sealed record PublishStateMachineVersion2Request
{
    public required XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsPublishstaApi XAmzTarget { get; init; }
}
