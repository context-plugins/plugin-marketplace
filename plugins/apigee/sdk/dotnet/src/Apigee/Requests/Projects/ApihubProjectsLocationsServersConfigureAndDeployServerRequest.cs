using Apigee.Models;

namespace Apigee.Requests.Projects;

/// <summary>
/// The inputs of the ApihubProjectsLocationsServersConfigureAndDeployServer operation.
/// </summary>
public sealed record ApihubProjectsLocationsServersConfigureAndDeployServerRequest
{
    /// <summary>
    /// Resource name segment (projectsId).
    /// </summary>
    public required string ProjectsId { get; init; }

    /// <summary>
    /// Resource name segment (locationsId).
    /// </summary>
    public required string LocationsId { get; init; }

    public required GoogleCloudApihubV1ConfigureAndDeployServerRequest Body { get; init; }
}
