using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Requests.CommandExecutionApi;

/// <summary>
/// The inputs of the StartCommandExecution operation.
/// </summary>
public sealed record StartCommandExecutionRequest
{
    public required XAmzTarget2AwsCodeBuildCommandExecutionApi XAmzTarget { get; init; }
}
