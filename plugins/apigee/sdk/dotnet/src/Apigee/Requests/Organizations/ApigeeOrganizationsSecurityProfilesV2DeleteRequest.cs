using Apigee.Models.Enums;

namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsSecurityProfilesV2Delete operation.
/// </summary>
public sealed record ApigeeOrganizationsSecurityProfilesV2DeleteRequest
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
    /// Optional. The risk assessment type of the security profile. Defaults to ADVANCED_API_SECURITY.
    /// </summary>
    public RiskAssessmentType2? RiskAssessmentType { get; init; }
}
