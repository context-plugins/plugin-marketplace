using Apigee.Models;

namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsEnvironmentsReferencesUpdate operation.
/// </summary>
public sealed record ApigeeOrganizationsEnvironmentsReferencesUpdateRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Resource name segment (environmentsId).
    /// </summary>
    public required string EnvironmentsId { get; init; }

    /// <summary>
    /// Resource name segment (referencesId).
    /// </summary>
    public required string ReferencesId { get; init; }

    public required GoogleCloudApigeeV1Reference Body { get; init; }
}
