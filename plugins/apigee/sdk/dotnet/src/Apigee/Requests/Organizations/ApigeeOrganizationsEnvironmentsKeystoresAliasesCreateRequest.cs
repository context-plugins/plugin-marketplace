using Apigee.Models;

namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsEnvironmentsKeystoresAliasesCreate operation.
/// </summary>
public sealed record ApigeeOrganizationsEnvironmentsKeystoresAliasesCreateRequest
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
    /// DEPRECATED: For improved security, specify the password in the request body instead of using the query parameter. To specify the password in the request body, set <c>Content-type: multipart/form-data</c> part with name <c>password</c>. Password for the private key file, if required.
    /// </summary>
    public string? Password { get; init; }

    /// <summary>
    /// Alias for the key/certificate pair. Values must match the regular expression <c>[\w\s-.]{1,255}</c>. This must be provided for all formats except <c>selfsignedcert</c>; self-signed certs may specify the alias in either this parameter or the JSON body.
    /// </summary>
    public string? Alias { get; init; }

    /// <summary>
    /// Required. Format of the data. Valid values include: <c>selfsignedcert</c>, <c>keycertfile</c>, or <c>pkcs12</c>
    /// </summary>
    public string? Format { get; init; }

    /// <summary>
    /// Flag that specifies whether to ignore expiry validation. If set to <c>true</c>, no expiry validation will be performed.
    /// </summary>
    public bool? IgnoreExpiryValidation { get; init; }

    /// <summary>
    /// Flag that specifies whether to ignore newline validation. If set to <c>true</c>, no error is thrown when the file contains a certificate chain with no newline between each certificate. Defaults to <c>false</c>.
    /// </summary>
    public bool? IgnoreNewlineValidation { get; init; }

    public required GoogleApiHttpBody Body { get; init; }
}
