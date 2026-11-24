using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Requests.AwsCodebuildXAmzTargetCodebuild;

/// <summary>
/// The inputs of the UpdateProjectVisibility operation.
/// </summary>
public sealed record UpdateProjectVisibilityRequest
{
    public required XAmzTarget37 XAmzTarget { get; init; }
}
