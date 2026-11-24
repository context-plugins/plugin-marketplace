namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsSecurityFeedbackGet operation.
/// </summary>
public sealed record ApigeeOrganizationsSecurityFeedbackGetRequest
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
