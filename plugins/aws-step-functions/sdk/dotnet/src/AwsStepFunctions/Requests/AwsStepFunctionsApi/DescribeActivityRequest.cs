using AwsStepFunctions.Models.Enums;

namespace AwsStepFunctions.Requests.AwsStepFunctionsApi;

/// <summary>
/// The inputs of the DescribeActivity operation.
/// </summary>
public sealed record DescribeActivityRequest
{
    public required XAmzTarget2 XAmzTarget { get; init; }
}
