namespace GoogleCloudTasks.Requests;

/// <summary>
/// The inputs of the CloudtasksProjectsLocationsGetCmekConfig operation.
/// </summary>
public sealed record CloudtasksProjectsLocationsGetCmekConfigRequest
{
    /// <summary>
    /// Resource name segment (projectsId).
    /// </summary>
    public required string ProjectsId { get; init; }

    /// <summary>
    /// Resource name segment (locationsId).
    /// </summary>
    public required string LocationsId { get; init; }
}
