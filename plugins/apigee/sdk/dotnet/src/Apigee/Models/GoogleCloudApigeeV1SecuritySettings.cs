using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// SecuritySettings reflects the current state of the SecuritySettings feature.
/// </summary>
public record GoogleCloudApigeeV1SecuritySettings
{
    /// <summary>
    /// Optional. If true the user consents to the use of ML models for Abuse detection.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mlRetrainingFeedbackEnabled")]
    public bool? MlRetrainingFeedbackEnabled { get; init; }

    /// <summary>
    /// Identifier. Full resource name is always <c>organizations/{org}/securitySettings</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
