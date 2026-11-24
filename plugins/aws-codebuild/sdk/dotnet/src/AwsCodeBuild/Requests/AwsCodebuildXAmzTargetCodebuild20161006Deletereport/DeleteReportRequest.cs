using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Requests.AwsCodebuildXAmzTargetCodebuild20161006Deletereport;

/// <summary>
/// The inputs of the DeleteReport operation.
/// </summary>
public sealed record DeleteReportRequest
{
    public required XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006DeletereportApi XAmzTarget { get; init; }
}
