namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsGetControlPlaneAccess operation.
/// </summary>
public sealed record ApigeeOrganizationsGetControlPlaneAccessRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }
}
