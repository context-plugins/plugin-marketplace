using Apigee.Models;

namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsEnvironmentsSecurityIncidentsBatchUpdate operation.
/// </summary>
public sealed record ApigeeOrganizationsEnvironmentsSecurityIncidentsBatchUpdateRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Resource name segment (environmentsId).
    /// </summary>
    public required string EnvironmentsId { get; init; }

    public required GoogleCloudApigeeV1BatchUpdateSecurityIncidentsRequest Body { get; init; }
}
