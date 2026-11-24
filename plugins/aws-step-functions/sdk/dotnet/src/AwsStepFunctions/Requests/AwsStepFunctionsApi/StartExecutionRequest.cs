using AwsStepFunctions.Models.Enums;

namespace AwsStepFunctions.Requests.AwsStepFunctionsApi;

/// <summary>
/// The inputs of the StartExecution operation.
/// </summary>
public sealed record StartExecutionRequest
{
    public required XAmzTarget12 XAmzTarget { get; init; }
}
