using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Requests.Sandboxe;

/// <summary>
/// The inputs of the ListSandboxesForProject operation.
/// </summary>
public sealed record ListSandboxesForProjectRequest
{
    public required XAmzTarget2AwsCodeBuildSandboxeApi XAmzTarget { get; init; }
}
