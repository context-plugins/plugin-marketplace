using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Requests.AwsCodebuildXAmzTargetCodebuild20161006Listprojects;

/// <summary>
/// The inputs of the ListProjects operation.
/// </summary>
public sealed record ListProjectsRequest
{
    public required XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListprojectsApi XAmzTarget { get; init; }
}
