using Apigee.Models;

namespace Apigee.Requests.Projects;

/// <summary>
/// The inputs of the ApihubProjectsLocationsPluginsInstancesExecuteAction operation.
/// </summary>
public sealed record ApihubProjectsLocationsPluginsInstancesExecuteActionRequest
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

    /// <summary>
    /// Resource name segment (instancesId).
    /// </summary>
    public required string InstancesId { get; init; }

    public required GoogleCloudApihubV1ExecutePluginInstanceActionRequest Body { get; init; }
}
