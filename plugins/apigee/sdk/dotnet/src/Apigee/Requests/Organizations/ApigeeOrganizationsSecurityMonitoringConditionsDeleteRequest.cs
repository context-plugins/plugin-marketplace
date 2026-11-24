using Apigee.Models.Enums;

namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsSecurityMonitoringConditionsDelete operation.
/// </summary>
public sealed record ApigeeOrganizationsSecurityMonitoringConditionsDeleteRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Resource name segment (securityMonitoringConditionsId).
    /// </summary>
    public required string SecurityMonitoringConditionsId { get; init; }

    /// <summary>
    /// Optional. The risk assessment type of the security monitoring condition. Defaults to ADVANCED_API_SECURITY.
    /// </summary>
    public RiskAssessmentType2? RiskAssessmentType { get; init; }
}
