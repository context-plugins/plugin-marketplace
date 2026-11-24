using Apigee.Models;

namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsSecurityMonitoringConditionsPatch operation.
/// </summary>
public sealed record ApigeeOrganizationsSecurityMonitoringConditionsPatchRequest
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
    /// Optional. The list of fields to update. Valid fields to update are <c>include_all_resources</c> and <c>include</c>.
    /// </summary>
    public string? UpdateMask { get; init; }

    public required GoogleCloudApigeeV1SecurityMonitoringCondition Body { get; init; }
}
