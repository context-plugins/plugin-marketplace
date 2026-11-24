namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsEnvironmentsKeystoresAliasesGet operation.
/// </summary>
public sealed record ApigeeOrganizationsEnvironmentsKeystoresAliasesGetRequest
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
    /// Resource name segment (keystoresId).
    /// </summary>
    public required string KeystoresId { get; init; }

    /// <summary>
    /// Resource name segment (aliasesId).
    /// </summary>
    public required string AliasesId { get; init; }
}
