using GoogleCloudTasks.Models;

namespace GoogleCloudTasks.Requests;

/// <summary>
/// The inputs of the CloudtasksProjectsLocationsUpdateCmekConfig operation.
/// </summary>
public sealed record CloudtasksProjectsLocationsUpdateCmekConfigRequest
{
    /// <summary>
    /// Resource name segment (projectsId).
    /// </summary>
    public required string ProjectsId { get; init; }

    /// <summary>
    /// Resource name segment (locationsId).
    /// </summary>
    public required string LocationsId { get; init; }

    /// <summary>
    /// List of fields to be updated in this request.
    /// </summary>
    public string? UpdateMask { get; init; }

    public required CmekConfig Body { get; init; }
}
