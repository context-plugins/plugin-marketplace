using AwsStepFunctions.Models.Enums;

namespace AwsStepFunctions.Requests.AwsStepFunctionsApi;

/// <summary>
/// The inputs of the StopExecution operation.
/// </summary>
public sealed record StopExecutionRequest
{
    public required XAmzTarget13 XAmzTarget { get; init; }
}
