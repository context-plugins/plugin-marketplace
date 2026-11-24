using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Requests.AwsCodebuildApi;

/// <summary>
/// The inputs of the StartSandboxConnection operation.
/// </summary>
public sealed record StartSandboxConnectionRequest
{
    public required XAmzTarget2 XAmzTarget { get; init; }
}
