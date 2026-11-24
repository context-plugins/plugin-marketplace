namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsApiproductsAttributesDelete operation.
/// </summary>
public sealed record ApigeeOrganizationsApiproductsAttributesDeleteRequest
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
    /// Resource name segment (attributesId).
    /// </summary>
    public required string AttributesId { get; init; }
}
