using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Requests.Projects;

/// <summary>
/// The inputs of the ListProjects2 operation.
/// </summary>
public sealed record ListProjects2Request
{
    public required XAmzTarget3AwsCodeBuildProjectsApi XAmzTarget { get; init; }
}
