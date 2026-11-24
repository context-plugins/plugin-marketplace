using Apigee.Models;

namespace Apigee.Requests.Projects;

/// <summary>
/// The inputs of the ApihubProjectsLocationsDependenciesCreate operation.
/// </summary>
public sealed record ApihubProjectsLocationsDependenciesCreateRequest
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
    /// Optional. The ID to use for the dependency resource, which will become the final component of the dependency's resource name. This field is optional. * If provided, the same will be used. The service will throw an error if duplicate id is provided by the client. * If not provided, a system generated id will be used. This value should be 4-500 characters, and valid characters are <c>a-z[0-9]-_</c>.
    /// </summary>
    public string? DependencyId { get; init; }

    public required GoogleCloudApihubV1Dependency Body { get; init; }
}
