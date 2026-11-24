using System.Text.Json.Serialization;
using Contentstack.Core.Models;
using Contentstack.Core.Validation.Attributes;

namespace Contentstack.Models;

/// <summary>
/// A content variant within a personalization experience.
/// </summary>
public record ExperienceVariant
{
    /// <summary>
    /// Unique identifier of the variant.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("uid")]
    public string? Uid { get; init; }

    /// <summary>
    /// Display name of the variant.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// UID of the audience this variant targets (for SEGMENTED experiences).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("audience_uid")]
    public string? AudienceUid { get; init; }

    /// <summary>
    /// Percentage of traffic assigned to this variant (for AB_TEST experiences).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("traffic_percentage")]
    [Minimum(0.0)]
    [Maximum(100.0)]
    public double? TrafficPercentage { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
