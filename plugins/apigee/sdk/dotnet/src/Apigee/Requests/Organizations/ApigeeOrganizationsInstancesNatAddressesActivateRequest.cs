namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsInstancesNatAddressesActivate operation.
/// </summary>
public sealed record ApigeeOrganizationsInstancesNatAddressesActivateRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Resource name segment (instancesId).
    /// </summary>
    public required string InstancesId { get; init; }

    /// <summary>
    /// Resource name segment (natAddressesId).
    /// </summary>
    public required string NatAddressesId { get; init; }

    public required object Body { get; init; }
}
