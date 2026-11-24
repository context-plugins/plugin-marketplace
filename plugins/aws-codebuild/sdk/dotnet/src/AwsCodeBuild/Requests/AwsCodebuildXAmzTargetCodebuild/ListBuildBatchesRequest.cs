using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Requests.AwsCodebuildXAmzTargetCodebuild;

/// <summary>
/// The inputs of the ListBuildBatches operation.
/// </summary>
public sealed record ListBuildBatchesRequest
{
    public required XAmzTarget4 XAmzTarget { get; init; }
}
