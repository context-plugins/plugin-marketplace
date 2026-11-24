using AwsStepFunctions.Models.Enums;

namespace AwsStepFunctions.Requests.AwsStepFunctionsApi;

/// <summary>
/// The inputs of the DescribeStateMachine operation.
/// </summary>
public sealed record DescribeStateMachineRequest
{
    public required XAmzTarget6 XAmzTarget { get; init; }
}
