using AwsStepFunctions.Models.Enums;

namespace AwsStepFunctions.Requests.StateMachines;

/// <summary>
/// The inputs of the DescribeStateMachine2 operation.
/// </summary>
public sealed record DescribeStateMachine2Request
{
    public required XAmzTarget2AwsStepFunctionsStateMachinesApi XAmzTarget { get; init; }
}
