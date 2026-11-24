using AwsStepFunctions.Models.Enums;

namespace AwsStepFunctions.Requests.AwsStepFunctionsApi;

/// <summary>
/// The inputs of the DeleteStateMachine operation.
/// </summary>
public sealed record DeleteStateMachineRequest
{
    public required XAmzTarget5 XAmzTarget { get; init; }
}
