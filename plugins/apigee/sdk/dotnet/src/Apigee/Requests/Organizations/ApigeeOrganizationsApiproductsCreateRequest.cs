using Apigee.Models;

namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsApiproductsCreate operation.
/// </summary>
public sealed record ApigeeOrganizationsApiproductsCreateRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    public required GoogleCloudApigeeV1ApiProduct Body { get; init; }
}
