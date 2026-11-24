using Apigee.Models;

namespace Apigee.Requests.Projects;

/// <summary>
/// The inputs of the ApihubProjectsLocationsPluginsCreate operation.
/// </summary>
public sealed record ApihubProjectsLocationsPluginsCreateRequest
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
    /// Optional. The ID to use for the Plugin resource, which will become the final component of the Plugin's resource name. This field is optional. * If provided, the same will be used. The service will throw an error if the specified id is already used by another Plugin resource in the API hub instance. * If not provided, a system generated id will be used. This value should be 4-63 characters, overall resource name which will be of format <c>projects/{project}/locations/{location}/plugins/{plugin}</c>, its length is limited to 1000 characters and valid characters are /a-z[0-9]-_/.
    /// </summary>
    public string? PluginId { get; init; }

    public required GoogleCloudApihubV1Plugin Body { get; init; }
}
