using Apigee.Models;

namespace Apigee.Requests.Projects;

/// <summary>
/// The inputs of the ApihubProjectsLocationsApisVersionsOperationsCreate operation.
/// </summary>
public sealed record ApihubProjectsLocationsApisVersionsOperationsCreateRequest
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
    /// Resource name segment (versionsId).
    /// </summary>
    public required string VersionsId { get; init; }

    /// <summary>
    /// Optional. The ID to use for the operation resource, which will become the final component of the operation's resource name. This field is optional. * If provided, the same will be used. The service will throw an error if the specified id is already used by another operation resource in the API hub. * If not provided, a system generated id will be used. This value should be 4-500 characters, overall resource name which will be of format <c>projects/{project}/locations/{location}/apis/{api}/versions/{version}/operations/{operation}</c>, its length is limited to 1000 characters, and valid characters are /a-z[0-9]-_/.
    /// </summary>
    public string? ApiOperationId { get; init; }

    public required GoogleCloudApihubV1ApiOperation Body { get; init; }
}
