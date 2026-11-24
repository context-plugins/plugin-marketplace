namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsSecurityFeedbackDelete operation.
/// </summary>
public sealed record ApigeeOrganizationsSecurityFeedbackDeleteRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Resource name segment (securityFeedbackId).
    /// </summary>
    public required string SecurityFeedbackId { get; init; }
}
