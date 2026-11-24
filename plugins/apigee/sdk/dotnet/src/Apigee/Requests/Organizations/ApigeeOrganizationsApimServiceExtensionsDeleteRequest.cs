namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsApimServiceExtensionsDelete operation.
/// </summary>
public sealed record ApigeeOrganizationsApimServiceExtensionsDeleteRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Resource name segment (apimServiceExtensionsId).
    /// </summary>
    public required string ApimServiceExtensionsId { get; init; }
}
