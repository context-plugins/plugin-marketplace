using Apigee.Models;

namespace Apigee.Requests.Projects;

/// <summary>
/// The inputs of the ApihubProjectsLocationsApiHubInstancesCreate operation.
/// </summary>
public sealed record ApihubProjectsLocationsApiHubInstancesCreateRequest
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
    /// Optional. Identifier to assign to the Api Hub instance. Must be unique within scope of the parent resource. If the field is not provided, system generated id will be used. This value should be 4-40 characters, and valid characters are <c>/a-z[0-9]-_/</c>.
    /// </summary>
    public string? ApiHubInstanceId { get; init; }

    public required GoogleCloudApihubV1ApiHubInstance Body { get; init; }
}
