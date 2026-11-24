using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Requests.AwsCodebuildXAmzTargetCodebuild;

/// <summary>
/// The inputs of the CreateReportGroup operation.
/// </summary>
public sealed record CreateReportGroupRequest
{
    public required XAmzTarget11 XAmzTarget { get; init; }
}
