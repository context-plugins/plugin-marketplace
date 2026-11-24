namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsApiproductsAttributesList operation.
/// </summary>
public sealed record ApigeeOrganizationsApiproductsAttributesListRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Resource name segment (apiproductsId).
    /// </summary>
    public required string ApiproductsId { get; init; }
}
