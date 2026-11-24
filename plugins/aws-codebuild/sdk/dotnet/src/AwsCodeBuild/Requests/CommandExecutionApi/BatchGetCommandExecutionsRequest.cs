using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Requests.CommandExecutionApi;

/// <summary>
/// The inputs of the BatchGetCommandExecutions operation.
/// </summary>
public sealed record BatchGetCommandExecutionsRequest
{
    public required XAmzTargetAwsCodeBuildCommandExecutionApi XAmzTarget { get; init; }
}
