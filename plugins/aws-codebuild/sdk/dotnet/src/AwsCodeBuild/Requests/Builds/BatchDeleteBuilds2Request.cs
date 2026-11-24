using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Requests.Builds;

/// <summary>
/// The inputs of the BatchDeleteBuilds2 operation.
/// </summary>
public sealed record BatchDeleteBuilds2Request
{
    public required XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi XAmzTarget { get; init; }
}
