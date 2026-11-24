using AwsStepFunctions.Models.Enums;

namespace AwsStepFunctions.Requests.AwsStepFunctionsXAmzTargetAwsstepfunctionsPublishsta;

/// <summary>
/// The inputs of the PublishStateMachineVersion operation.
/// </summary>
public sealed record PublishStateMachineVersionRequest
{
    public required XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsPublishstaApi XAmzTarget { get; init; }
}
