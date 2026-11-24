using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Requests.AwsCodebuildXAmzTargetCodebuild;

/// <summary>
/// The inputs of the GetResourcePolicy operation.
/// </summary>
public sealed record GetResourcePolicyRequest
{
    public required XAmzTarget24 XAmzTarget { get; init; }
}
