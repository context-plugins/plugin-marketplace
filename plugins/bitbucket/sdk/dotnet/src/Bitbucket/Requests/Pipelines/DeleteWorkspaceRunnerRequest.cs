namespace Bitbucket.Requests.Pipelines;

/// <summary>
/// The inputs of the DeleteWorkspaceRunner operation.
/// </summary>
public sealed record DeleteWorkspaceRunnerRequest
{
    /// <summary>
    /// This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example <c>{workspace UUID}</c>.
    /// </summary>
    public required string Workspace { get; init; }

    /// <summary>
    /// The runner uuid.
    /// </summary>
    public required string RunnerUuid { get; init; }
}
