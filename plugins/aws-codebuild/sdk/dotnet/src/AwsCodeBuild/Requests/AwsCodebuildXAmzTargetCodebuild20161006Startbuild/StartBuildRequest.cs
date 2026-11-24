using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Requests.AwsCodebuildXAmzTargetCodebuild20161006Startbuild;

/// <summary>
/// The inputs of the StartBuild operation.
/// </summary>
public sealed record StartBuildRequest
{
    public required XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006StartbuildApi XAmzTarget { get; init; }
}
