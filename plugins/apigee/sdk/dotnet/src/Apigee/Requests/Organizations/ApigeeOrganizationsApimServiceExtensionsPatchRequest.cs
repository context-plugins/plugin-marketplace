using Apigee.Models;

namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsApimServiceExtensionsPatch operation.
/// </summary>
public sealed record ApigeeOrganizationsApimServiceExtensionsPatchRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Resource name segment (apimServiceExtensionsId).
    /// </summary>
    public required string ApimServiceExtensionsId { get; init; }

    /// <summary>
    /// Optional. If set to true, and the service extension is not found, a new service extension will be created. In this situation, <c>update_mask</c> is ignored.
    /// </summary>
    public bool? AllowMissing { get; init; }

    /// <summary>
    /// Optional. The list of fields to update.
    /// </summary>
    public string? UpdateMask { get; init; }

    public required GoogleCloudApigeeV1ApimServiceExtension Body { get; init; }
}
