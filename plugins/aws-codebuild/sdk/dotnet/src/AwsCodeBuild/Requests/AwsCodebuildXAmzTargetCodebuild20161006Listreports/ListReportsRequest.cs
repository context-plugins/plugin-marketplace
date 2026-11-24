using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Requests.AwsCodebuildXAmzTargetCodebuild20161006Listreports;

/// <summary>
/// The inputs of the ListReports operation.
/// </summary>
public sealed record ListReportsRequest
{
    public required XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListreportsApi XAmzTarget { get; init; }
}
