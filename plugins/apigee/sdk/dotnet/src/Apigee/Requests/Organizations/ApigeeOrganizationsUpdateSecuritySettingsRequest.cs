using Apigee.Models;

namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsUpdateSecuritySettings operation.
/// </summary>
public sealed record ApigeeOrganizationsUpdateSecuritySettingsRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Optional. The list of fields to update. Allowed fields are: - ml_retraining_feedback_enabled
    /// </summary>
    public string? UpdateMask { get; init; }

    public required GoogleCloudApigeeV1SecuritySettings Body { get; init; }
}
