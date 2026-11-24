using AwsStepFunctions.Models.Enums;

namespace AwsStepFunctions.Requests.Operations;

/// <summary>
/// The inputs of the TestState operation.
/// </summary>
public sealed record TestStateRequest
{
    public required XAmzTarget2AwsStepFunctionsOperationsApi XAmzTarget { get; init; }
}
