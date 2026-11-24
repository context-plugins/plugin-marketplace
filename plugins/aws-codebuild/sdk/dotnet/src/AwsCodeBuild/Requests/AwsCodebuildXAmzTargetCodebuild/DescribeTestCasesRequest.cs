using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Requests.AwsCodebuildXAmzTargetCodebuild;

/// <summary>
/// The inputs of the DescribeTestCases operation.
/// </summary>
public sealed record DescribeTestCasesRequest
{
    public required XAmzTarget30 XAmzTarget { get; init; }
}
