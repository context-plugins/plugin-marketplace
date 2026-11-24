using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Requests.AwsCodebuildXAmzTargetCodebuild;

/// <summary>
/// The inputs of the ListReportsForReportGroup operation.
/// </summary>
public sealed record ListReportsForReportGroupRequest
{
    public required XAmzTarget16 XAmzTarget { get; init; }
}
