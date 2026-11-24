using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Requests.AwsCodebuildXAmzTargetCodebuild;

/// <summary>
/// The inputs of the GetReportGroupTrend operation.
/// </summary>
public sealed record GetReportGroupTrendRequest
{
    public required XAmzTarget31 XAmzTarget { get; init; }
}
