using AwsStepFunctions.Models.Enums;

namespace AwsStepFunctions.Requests.Operations;

/// <summary>
/// The inputs of the RedriveExecution operation.
/// </summary>
public sealed record RedriveExecutionRequest
{
    public required XAmzTarget1AwsStepFunctionsOperationsApi XAmzTarget { get; init; }
}
