using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Requests.AwsCodebuildXAmzTargetCodebuild;

/// <summary>
/// The inputs of the CreateProject operation.
/// </summary>
public sealed record CreateProjectRequest
{
    public required XAmzTarget7 XAmzTarget { get; init; }
}
