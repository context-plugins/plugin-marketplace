namespace Apigee.Requests.Projects;

/// <summary>
/// The inputs of the ApihubProjectsLocationsPluginsGetStyleGuide operation.
/// </summary>
public sealed record ApihubProjectsLocationsPluginsGetStyleGuideRequest
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
    /// Resource name segment (pluginsId).
    /// </summary>
    public required string PluginsId { get; init; }
}
