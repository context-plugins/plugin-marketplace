using AwsStepFunctions.Models.Enums;

namespace AwsStepFunctions.Requests.StateMachines;

/// <summary>
/// The inputs of the DescribeStateMachineForExecution2 operation.
/// </summary>
public sealed record DescribeStateMachineForExecution2Request
{
    public required XAmzTarget3AwsStepFunctionsStateMachinesApi XAmzTarget { get; init; }
}
