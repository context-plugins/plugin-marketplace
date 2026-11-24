using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Requests.AwsCodebuildXAmzTargetCodebuild;

/// <summary>
/// The inputs of the DescribeCodeCoverages operation.
/// </summary>
public sealed record DescribeCodeCoveragesRequest
{
    public required XAmzTarget29 XAmzTarget { get; init; }
}
