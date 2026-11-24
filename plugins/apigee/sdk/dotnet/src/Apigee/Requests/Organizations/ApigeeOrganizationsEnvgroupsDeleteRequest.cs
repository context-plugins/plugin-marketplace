namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsEnvgroupsDelete operation.
/// </summary>
public sealed record ApigeeOrganizationsEnvgroupsDeleteRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Resource name segment (envgroupsId).
    /// </summary>
    public required string EnvgroupsId { get; init; }
}
