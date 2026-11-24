using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Requests.AwsCodebuildXAmzTargetCodebuild;

/// <summary>
/// The inputs of the BatchGetBuilds operation.
/// </summary>
public sealed record BatchGetBuildsRequest
{
    public required XAmzTarget1AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi XAmzTarget { get; init; }
}
