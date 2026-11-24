using Apigee.Models;

namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsSecurityProfilesV2Patch operation.
/// </summary>
public sealed record ApigeeOrganizationsSecurityProfilesV2PatchRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Resource name segment (securityProfilesV2Id).
    /// </summary>
    public required string SecurityProfilesV2Id { get; init; }

    /// <summary>
    /// Optional. The list of fields to update. Valid fields to update are <c>description</c> and <c>profileAssessmentConfigs</c>.
    /// </summary>
    public string? UpdateMask { get; init; }

    public required GoogleCloudApigeeV1SecurityProfileV2 Body { get; init; }
}
