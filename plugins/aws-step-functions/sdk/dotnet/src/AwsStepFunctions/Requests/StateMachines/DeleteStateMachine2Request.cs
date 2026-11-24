using AwsStepFunctions.Models.Enums;

namespace AwsStepFunctions.Requests.StateMachines;

/// <summary>
/// The inputs of the DeleteStateMachine2 operation.
/// </summary>
public sealed record DeleteStateMachine2Request
{
    public required XAmzTarget1AwsStepFunctionsStateMachinesApi XAmzTarget { get; init; }
}
