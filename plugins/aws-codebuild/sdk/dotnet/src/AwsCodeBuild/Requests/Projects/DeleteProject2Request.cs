using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Requests.Projects;

/// <summary>
/// The inputs of the DeleteProject2 operation.
/// </summary>
public sealed record DeleteProject2Request
{
    public required XAmzTarget2AwsCodeBuildProjectsApi XAmzTarget { get; init; }
}
