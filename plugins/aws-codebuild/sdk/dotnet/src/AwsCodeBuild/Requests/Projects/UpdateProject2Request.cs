using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Requests.Projects;

/// <summary>
/// The inputs of the UpdateProject2 operation.
/// </summary>
public sealed record UpdateProject2Request
{
    public required XAmzTarget4AwsCodeBuildProjectsApi XAmzTarget { get; init; }
}
