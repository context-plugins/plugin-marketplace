using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Requests.AwsCodebuildXAmzTargetCodebuild;

/// <summary>
/// The inputs of the ListSharedProjects operation.
/// </summary>
public sealed record ListSharedProjectsRequest
{
    public required XAmzTarget35 XAmzTarget { get; init; }
}
