namespace Bitbucket.Requests.Pipelines;

/// <summary>
/// The inputs of the GetRepositoryPipelineScheduleExecutions operation.
/// </summary>
public sealed record GetRepositoryPipelineScheduleExecutionsRequest
{
    /// <summary>
    /// This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example <c>{workspace UUID}</c>.
    /// </summary>
    public required string Workspace { get; init; }

    /// <summary>
    /// The repository.
    /// </summary>
    public required string RepoSlug { get; init; }

    /// <summary>
    /// The uuid of the schedule.
    /// </summary>
    public required string ScheduleUuid { get; init; }
}
