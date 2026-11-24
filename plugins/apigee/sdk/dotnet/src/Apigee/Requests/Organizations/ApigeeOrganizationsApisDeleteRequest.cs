namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsApisDelete operation.
/// </summary>
public sealed record ApigeeOrganizationsApisDeleteRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Resource name segment (apisId).
    /// </summary>
    public required string ApisId { get; init; }
}
