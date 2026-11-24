using System.Text.Json.Serialization;
using Apigee.Core.Models;
using Apigee.Models.Enums;

namespace Apigee.Models;

/// <summary>
/// Security monitoring condition for risk assessment version 2.
/// </summary>
public record GoogleCloudApigeeV1SecurityMonitoringCondition
{
    /// <summary>
    /// Include all resources under the scope.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("includeAllResources")]
    public object? IncludeAllResources { get; init; }

    /// <summary>
    /// Output only. Total number of deployed resources within scope.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("totalDeployedResources")]
    public int? TotalDeployedResources { get; init; }

    /// <summary>
    /// Optional. The API Hub gateway monitored by the security monitoring condition. This should only be set if risk_assessment_type is API_HUB. Format: <c>projects/{project}/locations/{location}/plugins/{plugin}/instances/{instance}</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("apiHubGateway")]
    public string? ApiHubGateway { get; init; }

    /// <summary>
    /// Include only these resources.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("include")]
    public GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequestResourceArray1? Include { get; init; }

    /// <summary>
    /// Output only. The time of the security monitoring condition creation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createTime")]
    public string? CreateTime { get; init; }

    /// <summary>
    /// Required. ID of security profile of the security monitoring condition.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("profile")]
    public string? Profile { get; init; }

    /// <summary>
    /// Optional. The risk assessment type of the security monitoring condition. Defaults to ADVANCED_API_SECURITY.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("riskAssessmentType")]
    public RiskAssessmentType1? RiskAssessmentType { get; init; }

    /// <summary>
    /// Identifier. Name of the security monitoring condition resource. Format: organizations/{org}/securityMonitoringConditions/{security_monitoring_condition}
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Output only. Total number of monitored resources within this condition.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("totalMonitoredResources")]
    public int? TotalMonitoredResources { get; init; }

    /// <summary>
    /// Output only. The time of the security monitoring condition update.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updateTime")]
    public string? UpdateTime { get; init; }

    /// <summary>
    /// Optional. Scope of the security monitoring condition. When RiskAssessmentType is APIGEE, the scope should be set to the environment of the resources. When RiskAssessmentType is API_HUB, the scope should not be set.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("scope")]
    public string? Scope { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
