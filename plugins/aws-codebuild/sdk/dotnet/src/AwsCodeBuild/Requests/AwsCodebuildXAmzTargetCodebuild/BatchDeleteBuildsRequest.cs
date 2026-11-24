using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Requests.AwsCodebuildXAmzTargetCodebuild;

/// <summary>
/// The inputs of the BatchDeleteBuilds operation.
/// </summary>
public sealed record BatchDeleteBuildsRequest
{
    public required XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi XAmzTarget { get; init; }
}
