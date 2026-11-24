using Apigee.Models;

namespace Apigee.Requests.Projects;

/// <summary>
/// The inputs of the ApihubProjectsLocationsApisVersionsCreate operation.
/// </summary>
public sealed record ApihubProjectsLocationsApisVersionsCreateRequest
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
    /// Resource name segment (apisId).
    /// </summary>
    public required string ApisId { get; init; }

    /// <summary>
    /// Optional. The ID to use for the API version, which will become the final component of the version's resource name. This field is optional. * If provided, the same will be used. The service will throw an error if the specified id is already used by another version in the API resource. * If not provided, a system generated id will be used. This value should be 4-500 characters, overall resource name which will be of format <c>projects/{project}/locations/{location}/apis/{api}/versions/{version}</c>, its length is limited to 700 characters and valid characters are /a-z[0-9]-_/.
    /// </summary>
    public string? VersionId { get; init; }

    public required GoogleCloudApihubV1Version Body { get; init; }
}
