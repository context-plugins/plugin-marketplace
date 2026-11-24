namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsEnvironmentsGetDebugmask operation.
/// </summary>
public sealed record ApigeeOrganizationsEnvironmentsGetDebugmaskRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Resource name segment (environmentsId).
    /// </summary>
    public required string EnvironmentsId { get; init; }
}
