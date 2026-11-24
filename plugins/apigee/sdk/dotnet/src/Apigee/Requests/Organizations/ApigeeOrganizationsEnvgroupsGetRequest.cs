namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsEnvgroupsGet operation.
/// </summary>
public sealed record ApigeeOrganizationsEnvgroupsGetRequest
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
