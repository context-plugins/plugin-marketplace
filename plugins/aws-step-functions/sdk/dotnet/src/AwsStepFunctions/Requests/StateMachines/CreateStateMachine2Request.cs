using AwsStepFunctions.Models.Enums;

namespace AwsStepFunctions.Requests.StateMachines;

/// <summary>
/// The inputs of the CreateStateMachine2 operation.
/// </summary>
public sealed record CreateStateMachine2Request
{
    public required XAmzTargetAwsStepFunctionsStateMachinesApi XAmzTarget { get; init; }
}
