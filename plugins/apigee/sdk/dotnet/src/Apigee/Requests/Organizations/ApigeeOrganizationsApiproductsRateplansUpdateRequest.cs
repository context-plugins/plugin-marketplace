using Apigee.Models;

namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsApiproductsRateplansUpdate operation.
/// </summary>
public sealed record ApigeeOrganizationsApiproductsRateplansUpdateRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Resource name segment (apiproductsId).
    /// </summary>
    public required string ApiproductsId { get; init; }

    /// <summary>
    /// Resource name segment (rateplansId).
    /// </summary>
    public required string RateplansId { get; init; }

    public required GoogleCloudApigeeV1RatePlan Body { get; init; }
}
