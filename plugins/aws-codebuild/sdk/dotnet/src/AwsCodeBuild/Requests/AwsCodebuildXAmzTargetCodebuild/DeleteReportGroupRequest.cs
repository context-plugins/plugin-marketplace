using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Requests.AwsCodebuildXAmzTargetCodebuild;

/// <summary>
/// The inputs of the DeleteReportGroup operation.
/// </summary>
public sealed record DeleteReportGroupRequest
{
    public required XAmzTarget12 XAmzTarget { get; init; }
}
