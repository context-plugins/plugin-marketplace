using Apigee.Models;

namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsReportsUpdate operation.
/// </summary>
public sealed record ApigeeOrganizationsReportsUpdateRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Resource name segment (reportsId).
    /// </summary>
    public required string ReportsId { get; init; }

    public required GoogleCloudApigeeV1CustomReport Body { get; init; }
}
