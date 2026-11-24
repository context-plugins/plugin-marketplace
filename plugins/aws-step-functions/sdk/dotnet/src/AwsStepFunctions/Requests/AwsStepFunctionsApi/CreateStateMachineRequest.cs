using AwsStepFunctions.Models.Enums;

namespace AwsStepFunctions.Requests.AwsStepFunctionsApi;

/// <summary>
/// The inputs of the CreateStateMachine operation.
/// </summary>
public sealed record CreateStateMachineRequest
{
    public required XAmzTarget4 XAmzTarget { get; init; }
}
