using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using DevCycle.Core.Models;

namespace DevCycle.Models;

public record TargetAudience
{
    /// <summary>
    /// Audience display name, must be set for project-level audiences.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    [StringLength(100, MinimumLength = 1)]
    public string? Name { get; init; }

    /// <summary>
    /// Audience filters, describing logic for segmenting users
    /// </summary>
    [JsonPropertyName("filters")]
    public required AudienceOperatorWithAudienceMatchFilter Filters { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
