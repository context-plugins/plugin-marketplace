namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsGetMcpServerConfig operation.
/// </summary>
public sealed record ApigeeOrganizationsGetMcpServerConfigRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }
}
