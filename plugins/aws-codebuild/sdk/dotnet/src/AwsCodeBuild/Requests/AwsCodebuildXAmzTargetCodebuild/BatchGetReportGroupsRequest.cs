using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Requests.AwsCodebuildXAmzTargetCodebuild;

/// <summary>
/// The inputs of the BatchGetReportGroups operation.
/// </summary>
public sealed record BatchGetReportGroupsRequest
{
    public required XAmzTarget10 XAmzTarget { get; init; }
}
