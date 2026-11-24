using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Requests.AwsCodebuildXAmzTargetCodebuild;

/// <summary>
/// The inputs of the ListReportGroups operation.
/// </summary>
public sealed record ListReportGroupsRequest
{
    public required XAmzTarget13 XAmzTarget { get; init; }
}
