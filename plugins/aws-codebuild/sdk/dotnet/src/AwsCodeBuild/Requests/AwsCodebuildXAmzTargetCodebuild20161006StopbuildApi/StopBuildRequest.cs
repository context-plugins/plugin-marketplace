using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Requests.AwsCodebuildXAmzTargetCodebuild20161006StopbuildApi;

/// <summary>
/// The inputs of the StopBuild operation.
/// </summary>
public sealed record StopBuildRequest
{
    public required XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006StopbuildApiApi XAmzTarget { get; init; }
}
