using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Requests.AwsCodebuildXAmzTargetCodebuild;

/// <summary>
/// The inputs of the StartBuildBatch operation.
/// </summary>
public sealed record StartBuildBatchRequest
{
    public required XAmzTarget21 XAmzTarget { get; init; }
}
