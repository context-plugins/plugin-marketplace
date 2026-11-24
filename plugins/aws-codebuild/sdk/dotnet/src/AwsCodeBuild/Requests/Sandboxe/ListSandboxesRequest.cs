using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Requests.Sandboxe;

/// <summary>
/// The inputs of the ListSandboxes operation.
/// </summary>
public sealed record ListSandboxesRequest
{
    public required XAmzTarget1AwsCodeBuildSandboxeApi XAmzTarget { get; init; }
}
