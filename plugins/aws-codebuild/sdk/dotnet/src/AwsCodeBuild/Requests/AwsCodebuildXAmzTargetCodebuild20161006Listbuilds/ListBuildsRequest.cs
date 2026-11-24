using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Requests.AwsCodebuildXAmzTargetCodebuild20161006Listbuilds;

/// <summary>
/// The inputs of the ListBuilds operation.
/// </summary>
public sealed record ListBuildsRequest
{
    public required XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListbuildsApi XAmzTarget { get; init; }
}
