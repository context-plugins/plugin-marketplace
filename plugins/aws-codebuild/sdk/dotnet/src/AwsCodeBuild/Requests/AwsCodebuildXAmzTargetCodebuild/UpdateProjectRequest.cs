using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Requests.AwsCodebuildXAmzTargetCodebuild;

/// <summary>
/// The inputs of the UpdateProject operation.
/// </summary>
public sealed record UpdateProjectRequest
{
    public required XAmzTarget9 XAmzTarget { get; init; }
}
