using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Requests.AwsCodebuildXAmzTargetCodebuild;

/// <summary>
/// The inputs of the ListBuildBatchesForProject operation.
/// </summary>
public sealed record ListBuildBatchesForProjectRequest
{
    public required XAmzTarget5 XAmzTarget { get; init; }
}
