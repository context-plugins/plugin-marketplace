using Apigee.Models;

namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsSecurityFeedbackPatch operation.
/// </summary>
public sealed record ApigeeOrganizationsSecurityFeedbackPatchRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Resource name segment (securityFeedbackId).
    /// </summary>
    public required string SecurityFeedbackId { get; init; }

    /// <summary>
    /// Optional. The list of fields to update.
    /// </summary>
    public string? UpdateMask { get; init; }

    public required GoogleCloudApigeeV1SecurityFeedback Body { get; init; }
}
