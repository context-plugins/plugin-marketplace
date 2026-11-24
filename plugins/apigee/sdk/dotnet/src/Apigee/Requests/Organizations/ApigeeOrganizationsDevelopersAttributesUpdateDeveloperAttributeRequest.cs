using Apigee.Models;

namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsDevelopersAttributesUpdateDeveloperAttribute operation.
/// </summary>
public sealed record ApigeeOrganizationsDevelopersAttributesUpdateDeveloperAttributeRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Resource name segment (developersId).
    /// </summary>
    public required string DevelopersId { get; init; }

    /// <summary>
    /// Resource name segment (attributesId).
    /// </summary>
    public required string AttributesId { get; init; }

    public required GoogleCloudApigeeV1Attribute Body { get; init; }
}
