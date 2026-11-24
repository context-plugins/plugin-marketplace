using CircleCi.Models;

namespace CircleCi.Requests.ScheduleApi;

/// <summary>
/// The inputs of the CreateSchedule operation.
/// </summary>
public sealed record CreateScheduleOperationRequest
{
    /// <summary>
    /// The project slug in the form vcs-slug/org-name/repo-name (e.g., gh/CircleCI-Public/api-preview-docs)
    /// </summary>
    public required string ProjectSlug { get; init; }

    public required CreateScheduleRequest Body { get; init; }
}
