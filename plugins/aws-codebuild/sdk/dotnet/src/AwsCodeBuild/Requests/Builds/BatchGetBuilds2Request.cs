using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Requests.Builds;

/// <summary>
/// The inputs of the BatchGetBuilds2 operation.
/// </summary>
public sealed record BatchGetBuilds2Request
{
    public required XAmzTarget1AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi XAmzTarget { get; init; }
}
