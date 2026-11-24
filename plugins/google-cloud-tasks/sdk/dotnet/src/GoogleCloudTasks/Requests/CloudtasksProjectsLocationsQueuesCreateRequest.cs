using GoogleCloudTasks.Models;

namespace GoogleCloudTasks.Requests;

/// <summary>
/// The inputs of the CloudtasksProjectsLocationsQueuesCreate operation.
/// </summary>
public sealed record CloudtasksProjectsLocationsQueuesCreateRequest
{
    /// <summary>
    /// Resource name segment (projectsId).
    /// </summary>
    public required string ProjectsId { get; init; }

    /// <summary>
    /// Resource name segment (locationsId).
    /// </summary>
    public required string LocationsId { get; init; }

    public required QueueModel Body { get; init; }
}
