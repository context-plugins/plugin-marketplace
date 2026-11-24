namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsEnvironmentsTraceConfigOverridesDelete operation.
/// </summary>
public sealed record ApigeeOrganizationsEnvironmentsTraceConfigOverridesDeleteRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Resource name segment (environmentsId).
    /// </summary>
    public required string EnvironmentsId { get; init; }

    /// <summary>
    /// Resource name segment (overridesId).
    /// </summary>
    public required string OverridesId { get; init; }
}
