using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Requests.AwsCodebuildApi;

/// <summary>
/// The inputs of the StopSandbox operation.
/// </summary>
public sealed record StopSandboxRequest
{
    public required XAmzTarget1 XAmzTarget { get; init; }
}
