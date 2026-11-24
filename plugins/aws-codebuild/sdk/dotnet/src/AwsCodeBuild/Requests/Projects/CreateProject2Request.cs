using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Requests.Projects;

/// <summary>
/// The inputs of the CreateProject2 operation.
/// </summary>
public sealed record CreateProject2Request
{
    public required XAmzTarget1AwsCodeBuildProjectsApi XAmzTarget { get; init; }
}
