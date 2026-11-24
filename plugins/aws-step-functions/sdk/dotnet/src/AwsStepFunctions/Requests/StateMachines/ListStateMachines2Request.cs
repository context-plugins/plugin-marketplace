using AwsStepFunctions.Models.Enums;

namespace AwsStepFunctions.Requests.StateMachines;

/// <summary>
/// The inputs of the ListStateMachines2 operation.
/// </summary>
public sealed record ListStateMachines2Request
{
    public required XAmzTarget4AwsStepFunctionsStateMachinesApi XAmzTarget { get; init; }
}
