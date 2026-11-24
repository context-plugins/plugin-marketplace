using Apigee.Models;

namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsApimServiceExtensionsCreate operation.
/// </summary>
public sealed record ApigeeOrganizationsApimServiceExtensionsCreateRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Optional. ID used to uniquely identify of the service extension. It must conform with RFC-1034, is restricted to lower-cased letters, numbers and hyphens, and can have a maximum length of 63 characters. Additionally, the first character must be a letter and the last a letter or a number.
    /// </summary>
    public string? ApimServiceExtensionId { get; init; }

    public required GoogleCloudApigeeV1ApimServiceExtension Body { get; init; }
}
