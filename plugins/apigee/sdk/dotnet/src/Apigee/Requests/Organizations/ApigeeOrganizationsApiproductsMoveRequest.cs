using Apigee.Models;

namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsApiproductsMove operation.
/// </summary>
public sealed record ApigeeOrganizationsApiproductsMoveRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Resource name segment (apiproductsId).
    /// </summary>
    public required string ApiproductsId { get; init; }

    public required GoogleCloudApigeeV1MoveApiProductRequest Body { get; init; }
}
