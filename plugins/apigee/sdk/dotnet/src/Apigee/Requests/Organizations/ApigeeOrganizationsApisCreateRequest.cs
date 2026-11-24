using Apigee.Models;

namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsApisCreate operation.
/// </summary>
public sealed record ApigeeOrganizationsApisCreateRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Action to perform when importing an API proxy configuration bundle. Set this parameter to one of the following values: * <c>import</c> to import the API proxy configuration bundle. * <c>validate</c> to validate the API proxy configuration bundle without importing it.
    /// </summary>
    public string? Action { get; init; }

    /// <summary>
    /// Name of the API proxy. Restrict the characters used to: A-Za-z0-9._-
    /// </summary>
    public string? Name { get; init; }

    /// <summary>
    /// Optional. The ID of the space associated with this proxy. Any IAM policies applied to the space will affect access to this proxy. Note that this field is only respected when creating a new proxy. It has no effect when creating a new revision for an existing proxy.
    /// </summary>
    public string? Space { get; init; }

    /// <summary>
    /// Ignored. All uploads are validated regardless of the value of this field. Maintained for compatibility with Apigee Edge API.
    /// </summary>
    public bool? Validate { get; init; }

    public required GoogleApiHttpBody Body { get; init; }
}
