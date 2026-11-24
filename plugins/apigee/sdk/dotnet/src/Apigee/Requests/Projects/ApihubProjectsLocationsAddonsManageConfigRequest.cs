using Apigee.Models;

namespace Apigee.Requests.Projects;

/// <summary>
/// The inputs of the ApihubProjectsLocationsAddonsManageConfig operation.
/// </summary>
public sealed record ApihubProjectsLocationsAddonsManageConfigRequest
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
    /// Resource name segment (addonsId).
    /// </summary>
    public required string AddonsId { get; init; }

    public required GoogleCloudApihubV1ManageAddonConfigRequest Body { get; init; }
}
