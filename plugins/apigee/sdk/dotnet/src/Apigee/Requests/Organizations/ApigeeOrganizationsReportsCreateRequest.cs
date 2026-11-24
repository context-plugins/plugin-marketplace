using Apigee.Models;

namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsReportsCreate operation.
/// </summary>
public sealed record ApigeeOrganizationsReportsCreateRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    public required GoogleCloudApigeeV1CustomReport Body { get; init; }
}
