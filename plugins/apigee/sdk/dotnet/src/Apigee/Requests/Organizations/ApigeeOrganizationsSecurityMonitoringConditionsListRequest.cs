using Apigee.Models.Enums;

namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsSecurityMonitoringConditionsList operation.
/// </summary>
public sealed record ApigeeOrganizationsSecurityMonitoringConditionsListRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Optional. Filter for the monitoring conditions. When RiskAssessmentType is APIGEE, monitoring conditions can be filtered by profile and scope. For example: <c>profile=profile1 AND scope=env1</c> When RiskAssessmentType is API_HUB, monitoring conditions can be filtered by profile and api_hub_gateway. For example: <c>profile=profile1 AND api_hub_gateway=gateway1</c>
    /// </summary>
    public string? Filter { get; init; }

    /// <summary>
    /// Optional. The maximum number of monitoring conditions to return.
    /// </summary>
    public int? PageSize { get; init; }

    /// <summary>
    /// Optional. A page token, received from a previous <c>ListSecurityMonitoringConditions</c> call. Provide this to retrieve the subsequent page.
    /// </summary>
    public string? PageToken { get; init; }

    /// <summary>
    /// Optional. The risk assessment type of the security monitoring condition. Defaults to ADVANCED_API_SECURITY.
    /// </summary>
    public RiskAssessmentType2? RiskAssessmentType { get; init; }
}
