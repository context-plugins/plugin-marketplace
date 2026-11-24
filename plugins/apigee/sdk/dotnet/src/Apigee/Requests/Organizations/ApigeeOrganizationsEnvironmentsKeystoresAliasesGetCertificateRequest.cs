namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsEnvironmentsKeystoresAliasesGetCertificate operation.
/// </summary>
public sealed record ApigeeOrganizationsEnvironmentsKeystoresAliasesGetCertificateRequest
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
