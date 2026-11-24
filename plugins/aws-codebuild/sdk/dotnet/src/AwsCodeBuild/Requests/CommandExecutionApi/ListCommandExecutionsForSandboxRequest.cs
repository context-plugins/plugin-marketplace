using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Requests.CommandExecutionApi;

/// <summary>
/// The inputs of the ListCommandExecutionsForSandbox operation.
/// </summary>
public sealed record ListCommandExecutionsForSandboxRequest
{
    public required XAmzTarget1AwsCodeBuildCommandExecutionApi XAmzTarget { get; init; }
}
