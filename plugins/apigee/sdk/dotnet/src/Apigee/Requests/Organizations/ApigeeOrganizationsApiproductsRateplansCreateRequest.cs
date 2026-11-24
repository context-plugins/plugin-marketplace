using Apigee.Models;

namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsApiproductsRateplansCreate operation.
/// </summary>
public sealed record ApigeeOrganizationsApiproductsRateplansCreateRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Resource name segment (apiproductsId).
    /// </summary>
    public required string ApiproductsId { get; init; }

    public required GoogleCloudApigeeV1RatePlan Body { get; init; }
}
