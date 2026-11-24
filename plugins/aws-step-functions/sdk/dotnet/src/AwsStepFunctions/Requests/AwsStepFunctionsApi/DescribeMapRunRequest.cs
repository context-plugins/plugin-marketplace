using AwsStepFunctions.Models.Enums;

namespace AwsStepFunctions.Requests.AwsStepFunctionsApi;

/// <summary>
/// The inputs of the DescribeMapRun operation.
/// </summary>
public sealed record DescribeMapRunRequest
{
    public required XAmzTarget14 XAmzTarget { get; init; }
}
