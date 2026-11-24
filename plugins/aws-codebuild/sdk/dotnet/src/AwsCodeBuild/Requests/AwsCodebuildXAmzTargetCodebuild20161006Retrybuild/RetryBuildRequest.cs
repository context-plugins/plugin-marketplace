using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Requests.AwsCodebuildXAmzTargetCodebuild20161006Retrybuild;

/// <summary>
/// The inputs of the RetryBuild operation.
/// </summary>
public sealed record RetryBuildRequest
{
    public required XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi XAmzTarget { get; init; }
}
