using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Requests.AwsCodebuildXAmzTargetCodebuild;

/// <summary>
/// The inputs of the RetryBuildBatch operation.
/// </summary>
public sealed record RetryBuildBatchRequest
{
    public required XAmzTarget33 XAmzTarget { get; init; }
}
