using AwsStepFunctions.Models.Enums;

namespace AwsStepFunctions.Requests.AwsStepFunctionsApi;

/// <summary>
/// The inputs of the DescribeStateMachineForExecution operation.
/// </summary>
public sealed record DescribeStateMachineForExecutionRequest
{
    public required XAmzTarget7 XAmzTarget { get; init; }
}
