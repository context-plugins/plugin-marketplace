using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Requests.Projects;

/// <summary>
/// The inputs of the BatchGetProjects2 operation.
/// </summary>
public sealed record BatchGetProjects2Request
{
    public required XAmzTargetAwsCodeBuildProjectsApi XAmzTarget { get; init; }
}
