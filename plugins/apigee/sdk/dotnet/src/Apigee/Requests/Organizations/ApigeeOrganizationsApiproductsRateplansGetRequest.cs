namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsApiproductsRateplansGet operation.
/// </summary>
public sealed record ApigeeOrganizationsApiproductsRateplansGetRequest
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
}
