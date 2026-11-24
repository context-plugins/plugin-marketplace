using AwsStepFunctions.Models.Enums;

namespace AwsStepFunctions.Requests.AwsStepFunctionsApi;

/// <summary>
/// The inputs of the DescribeExecution operation.
/// </summary>
public sealed record DescribeExecutionRequest
{
    public required XAmzTarget10 XAmzTarget { get; init; }
}
