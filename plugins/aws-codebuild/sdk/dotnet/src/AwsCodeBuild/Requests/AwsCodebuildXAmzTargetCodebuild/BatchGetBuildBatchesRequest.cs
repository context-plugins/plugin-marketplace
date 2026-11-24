using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Requests.AwsCodebuildXAmzTargetCodebuild;

/// <summary>
/// The inputs of the BatchGetBuildBatches operation.
/// </summary>
public sealed record BatchGetBuildBatchesRequest
{
    public required XAmzTarget3 XAmzTarget { get; init; }
}
