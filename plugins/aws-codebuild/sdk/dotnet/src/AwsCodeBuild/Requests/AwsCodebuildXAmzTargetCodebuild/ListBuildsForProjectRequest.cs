using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Requests.AwsCodebuildXAmzTargetCodebuild;

/// <summary>
/// The inputs of the ListBuildsForProject operation.
/// </summary>
public sealed record ListBuildsForProjectRequest
{
    public required XAmzTarget2AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi XAmzTarget { get; init; }
}
