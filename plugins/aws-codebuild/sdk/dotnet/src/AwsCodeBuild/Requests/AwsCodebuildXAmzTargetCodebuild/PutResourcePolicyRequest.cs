using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Requests.AwsCodebuildXAmzTargetCodebuild;

/// <summary>
/// The inputs of the PutResourcePolicy operation.
/// </summary>
public sealed record PutResourcePolicyRequest
{
    public required XAmzTarget25 XAmzTarget { get; init; }
}
