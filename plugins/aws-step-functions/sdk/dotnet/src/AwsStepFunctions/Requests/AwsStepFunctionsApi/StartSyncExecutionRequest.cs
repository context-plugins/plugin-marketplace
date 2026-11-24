using AwsStepFunctions.Models.Enums;

namespace AwsStepFunctions.Requests.AwsStepFunctionsApi;

/// <summary>
/// The inputs of the StartSyncExecution operation.
/// </summary>
public sealed record StartSyncExecutionRequest
{
    public required XAmzTarget23 XAmzTarget { get; init; }
}
