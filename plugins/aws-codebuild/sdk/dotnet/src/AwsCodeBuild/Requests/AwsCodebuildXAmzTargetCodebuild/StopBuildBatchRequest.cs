using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Requests.AwsCodebuildXAmzTargetCodebuild;

/// <summary>
/// The inputs of the StopBuildBatch operation.
/// </summary>
public sealed record StopBuildBatchRequest
{
    public required XAmzTarget22 XAmzTarget { get; init; }
}
