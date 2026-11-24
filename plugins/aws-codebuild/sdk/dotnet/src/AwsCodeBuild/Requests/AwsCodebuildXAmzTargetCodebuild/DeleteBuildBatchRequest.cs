using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Requests.AwsCodebuildXAmzTargetCodebuild;

/// <summary>
/// The inputs of the DeleteBuildBatch operation.
/// </summary>
public sealed record DeleteBuildBatchRequest
{
    public required XAmzTarget20 XAmzTarget { get; init; }
}
