using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Requests.AwsCodebuildXAmzTargetCodebuild;

/// <summary>
/// The inputs of the InvalidateProjectCache operation.
/// </summary>
public sealed record InvalidateProjectCacheRequest
{
    public required XAmzTarget32 XAmzTarget { get; init; }
}
