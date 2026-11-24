using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;
using Apigee.Models.Enums;

namespace Apigee.Models;

/// <summary>
/// Security profile for risk assessment version 2.
/// </summary>
public record GoogleCloudApigeeV1SecurityProfileV2
{
    /// <summary>
    /// Required. The configuration for each assessment in this profile. Key is the name/id of the assessment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("profileAssessmentConfigs")]
    public IReadOnlyDictionary<string, GoogleCloudApigeeV1SecurityProfileV2ProfileAssessmentConfig>? ProfileAssessmentConfigs { get; init; }

    /// <summary>
    /// Output only. The time of the security profile creation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createTime")]
    public string? CreateTime { get; init; }

    /// <summary>
    /// Identifier. Name of the security profile v2 resource. Format: organizations/{org}/securityProfilesV2/{profile}
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Output only. Whether the security profile is google defined.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("googleDefined")]
    public bool? GoogleDefined { get; init; }

    /// <summary>
    /// Optional. The risk assessment type of the security profile. Defaults to ADVANCED_API_SECURITY.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("riskAssessmentType")]
    public RiskAssessmentType? RiskAssessmentType { get; init; }

    /// <summary>
    /// Optional. The description of the security profile.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// Output only. The time of the security profile update.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updateTime")]
    public string? UpdateTime { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
