using Apigee.Models;

namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsHostSecurityReportsCreate operation.
/// </summary>
public sealed record ApigeeOrganizationsHostSecurityReportsCreateRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    public required GoogleCloudApigeeV1SecurityReportQuery Body { get; init; }
}
