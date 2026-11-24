using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Requests.Sandboxe;

/// <summary>
/// The inputs of the BatchGetSandboxes operation.
/// </summary>
public sealed record BatchGetSandboxesRequest
{
    public required XAmzTargetAwsCodeBuildSandboxeApi XAmzTarget { get; init; }
}
