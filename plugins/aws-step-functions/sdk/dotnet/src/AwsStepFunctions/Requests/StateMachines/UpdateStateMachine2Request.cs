using AwsStepFunctions.Models.Enums;

namespace AwsStepFunctions.Requests.StateMachines;

/// <summary>
/// The inputs of the UpdateStateMachine2 operation.
/// </summary>
public sealed record UpdateStateMachine2Request
{
    public required XAmzTarget5AwsStepFunctionsStateMachinesApi XAmzTarget { get; init; }
}
