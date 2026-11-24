using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Requests.AwsCodebuildXAmzTargetCodebuild;

/// <summary>
/// The inputs of the DeleteResourcePolicy operation.
/// </summary>
public sealed record DeleteResourcePolicyRequest
{
    public required XAmzTarget23 XAmzTarget { get; init; }
}
