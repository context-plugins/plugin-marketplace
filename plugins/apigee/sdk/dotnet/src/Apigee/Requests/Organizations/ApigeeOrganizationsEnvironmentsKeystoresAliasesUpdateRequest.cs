using Apigee.Models;

namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsEnvironmentsKeystoresAliasesUpdate operation.
/// </summary>
public sealed record ApigeeOrganizationsEnvironmentsKeystoresAliasesUpdateRequest
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

    /// <summary>
    /// Required. Flag that specifies whether to ignore expiry validation. If set to <c>true</c>, no expiry validation will be performed.
    /// </summary>
    public bool? IgnoreExpiryValidation { get; init; }

    /// <summary>
    /// Flag that specifies whether to ignore newline validation. If set to <c>true</c>, no error is thrown when the file contains a certificate chain with no newline between each certificate. Defaults to <c>false</c>.
    /// </summary>
    public bool? IgnoreNewlineValidation { get; init; }

    public required GoogleApiHttpBody Body { get; init; }
}
