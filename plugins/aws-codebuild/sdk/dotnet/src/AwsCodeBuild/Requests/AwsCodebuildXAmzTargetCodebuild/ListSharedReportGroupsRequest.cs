using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Requests.AwsCodebuildXAmzTargetCodebuild;

/// <summary>
/// The inputs of the ListSharedReportGroups operation.
/// </summary>
public sealed record ListSharedReportGroupsRequest
{
    public required XAmzTarget36 XAmzTarget { get; init; }
}
