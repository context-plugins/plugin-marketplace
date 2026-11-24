using Apigee.Models;

namespace Apigee.Requests.Projects;

/// <summary>
/// The inputs of the ApihubProjectsLocationsExternalApisCreate operation.
/// </summary>
public sealed record ApihubProjectsLocationsExternalApisCreateRequest
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
    /// Optional. The ID to use for the External API resource, which will become the final component of the External API's resource name. This field is optional. * If provided, the same will be used. The service will throw an error if the specified id is already used by another External API resource in the API hub. * If not provided, a system generated id will be used. This value should be 4-500 characters, and valid characters are /a-z[0-9]-_/.
    /// </summary>
    public string? ExternalApiId { get; init; }

    public required GoogleCloudApihubV1ExternalApi Body { get; init; }
}
