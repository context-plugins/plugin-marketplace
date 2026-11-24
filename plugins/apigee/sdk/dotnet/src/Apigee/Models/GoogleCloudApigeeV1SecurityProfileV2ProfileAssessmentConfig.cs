using System.Text.Json.Serialization;
using Apigee.Core.Models;
using Apigee.Models.Enums;

namespace Apigee.Models;

/// <summary>
/// The configuration definition for a specific assessment.
/// </summary>
public record GoogleCloudApigeeV1SecurityProfileV2ProfileAssessmentConfig
{
    /// <summary>
    /// Include only these Gateway Types.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("include")]
    public GoogleCloudApigeeV1SecurityProfileV2ProfileAssessmentConfigApiHubGatewayTypeArray2? Include { get; init; }

    /// <summary>
    /// The weight of the assessment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("weight")]
    public Weight? Weight { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
