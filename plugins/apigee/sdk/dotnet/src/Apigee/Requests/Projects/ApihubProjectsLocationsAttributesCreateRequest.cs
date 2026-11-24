using Apigee.Models;

namespace Apigee.Requests.Projects;

/// <summary>
/// The inputs of the ApihubProjectsLocationsAttributesCreate operation.
/// </summary>
public sealed record ApihubProjectsLocationsAttributesCreateRequest
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
    /// Optional. The ID to use for the attribute, which will become the final component of the attribute's resource name. This field is optional. * If provided, the same will be used. The service will throw an error if the specified id is already used by another attribute resource in the API hub. * If not provided, a system generated id will be used. This value should be 4-500 characters, and valid characters are /a-z[0-9]-_/.
    /// </summary>
    public string? AttributeId { get; init; }

    public required GoogleCloudApihubV1Attribute Body { get; init; }
}
