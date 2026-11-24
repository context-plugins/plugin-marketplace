using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Requests.AwsCodebuildXAmzTargetCodebuild;

/// <summary>
/// The inputs of the BatchGetProjects operation.
/// </summary>
public sealed record BatchGetProjectsRequest
{
    public required XAmzTarget6 XAmzTarget { get; init; }
}
