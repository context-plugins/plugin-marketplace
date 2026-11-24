using System.Text.Json.Serialization;
using Contentstack.Core.Models;

namespace Contentstack.Models;

/// <summary>
/// An active experience entry in the manifest with variant assignment.
/// </summary>
public record ManifestExperience
{
    /// <summary>
    /// Unique identifier of the experience.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("experience_uid")]
    public string? ExperienceUid { get; init; }

    /// <summary>
    /// Short identifier of the experience for use in content querying.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("experience_short_uid")]
    public string? ExperienceShortUid { get; init; }

    /// <summary>
    /// Unique identifier of the variant assigned to this user.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("variant_uid")]
    public string? VariantUid { get; init; }

    /// <summary>
    /// Short identifier of the variant for use in content querying.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("variant_short_uid")]
    public string? VariantShortUid { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
