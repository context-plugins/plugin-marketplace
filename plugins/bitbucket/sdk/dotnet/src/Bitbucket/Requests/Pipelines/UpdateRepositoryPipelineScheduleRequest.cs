using Bitbucket.Models.AllOf;

namespace Bitbucket.Requests.Pipelines;

/// <summary>
/// The inputs of the UpdateRepositoryPipelineSchedule operation.
/// </summary>
public sealed record UpdateRepositoryPipelineScheduleRequest
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

    /// <summary>
    /// The schedule to update.
    /// </summary>
    public required PipelineSchedulePutRequestBody Body { get; init; }
}
