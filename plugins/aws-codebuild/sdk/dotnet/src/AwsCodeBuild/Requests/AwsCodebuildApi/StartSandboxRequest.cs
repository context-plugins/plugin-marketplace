using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Requests.AwsCodebuildApi;

/// <summary>
/// The inputs of the StartSandbox operation.
/// </summary>
public sealed record StartSandboxRequest
{
    public required XAmzTarget XAmzTarget { get; init; }
}
