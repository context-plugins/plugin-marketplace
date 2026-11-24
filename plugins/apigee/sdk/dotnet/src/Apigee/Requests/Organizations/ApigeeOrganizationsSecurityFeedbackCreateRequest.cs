using Apigee.Models;

namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsSecurityFeedbackCreate operation.
/// </summary>
public sealed record ApigeeOrganizationsSecurityFeedbackCreateRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Optional. The id for this feedback report. If not provided, it will be set to a system-generated UUID.
    /// </summary>
    public string? SecurityFeedbackId { get; init; }

    public required GoogleCloudApigeeV1SecurityFeedback Body { get; init; }
}
