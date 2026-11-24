using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Requests.AwsCodebuildXAmzTargetCodebuild;

/// <summary>
/// The inputs of the BatchGetReports operation.
/// </summary>
public sealed record BatchGetReportsRequest
{
    public required XAmzTarget15 XAmzTarget { get; init; }
}
