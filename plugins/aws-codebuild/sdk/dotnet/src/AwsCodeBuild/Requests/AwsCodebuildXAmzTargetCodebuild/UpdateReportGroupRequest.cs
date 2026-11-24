using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Requests.AwsCodebuildXAmzTargetCodebuild;

/// <summary>
/// The inputs of the UpdateReportGroup operation.
/// </summary>
public sealed record UpdateReportGroupRequest
{
    public required XAmzTarget14 XAmzTarget { get; init; }
}
