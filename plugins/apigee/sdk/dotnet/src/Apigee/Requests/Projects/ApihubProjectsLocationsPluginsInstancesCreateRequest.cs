using Apigee.Models;

namespace Apigee.Requests.Projects;

/// <summary>
/// The inputs of the ApihubProjectsLocationsPluginsInstancesCreate operation.
/// </summary>
public sealed record ApihubProjectsLocationsPluginsInstancesCreateRequest
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
    /// Optional. The ID to use for the plugin instance, which will become the final component of the plugin instance's resource name. This field is optional. * If provided, the same will be used. The service will throw an error if the specified id is already used by another plugin instance in the plugin resource. * If not provided, a system generated id will be used. This value should be 4-63 characters, and valid characters are /a-z[0-9]-_/.
    /// </summary>
    public string? PluginInstanceId { get; init; }

    public required GoogleCloudApihubV1PluginInstance Body { get; init; }
}
