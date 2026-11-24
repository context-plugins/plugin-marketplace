using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Requests.AwsCodebuildXAmzTargetCodebuild;

/// <summary>
/// The inputs of the DeleteProject operation.
/// </summary>
public sealed record DeleteProjectRequest
{
    public required XAmzTarget8 XAmzTarget { get; init; }
}
